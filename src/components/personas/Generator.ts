import { config } from "../../conf/config";
import { educations } from "../../data/educations_source";
import { firstNamesFemale } from "../../data/first_names_female_source";
import { firstNamesMale } from "../../data/first_names_male_source";
import { hobbies } from "../../data/hobbies_source";
import { lastNames } from "../../data/last_names_source";
import { operatingSystems } from "../../data/operating_systems_source";
import { places } from "../../data/places_source";
import { portraits } from "../../data/portraits_source";
import { jobTitles } from "../../data/job_titles_source";
import { IJob, IPersona } from "./Persona.interface";
import { programmingLanguages } from "../../data/programming_languages_source";
import { companies } from "../../data/companies_source";

export class Generator {

    /**
     * returns a random object from the given array
     * @param arr
     */
    public static getRandomObjectFromList(arr: any[]) {
        return arr[Generator.getRandomInt(0, arr.length - 1)];
    }

    /**
     * returns a random integer between min (inclusive) and max (inclusive)
     * @param min
     * @param max
     * @param distribution "equally" | "lowerPreferred" | "higherPreferred"
     */
    public static getRandomInt(min: number, max: number, distribution: string = "equally"): number {
        const interval = max - min;
        if (distribution.localeCompare("lowerPreferred") === 0) {
            max = max - Generator.getRandomInt(0, Math.ceil(interval / 2));
        } else if (distribution.localeCompare("higherPreferred") === 0) {
            min = min + Generator.getRandomInt(0, Math.ceil(interval / 2));
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static generateMaritalStatus(): string {
        if (Generator.getRandomInt(0, 1) === 0) {
            return "married";
        } else {
            return "single";
        }
    }

    public static generatePrename(gender: string = "male") {
        if (gender === "female") {
            return Generator.getRandomObjectFromList(firstNamesFemale);
        } else {
            return Generator.getRandomObjectFromList(firstNamesMale);
        }
    }

    public static generateHobbyCategory(): string {
        // TODO extend to use all categories and their subcategories
        if (Generator.getRandomInt(0, 1) === 0) {
            return "indoorHobbies";
        } else {
            return "outdoorHobbies";
        }
    }

    public static generateHobbies(): string[] {
        const numberOfHobbies = Generator.getRandomInt(1, 3);
        const list = [];

        let uniqueHobbies = 0;
        while (uniqueHobbies < numberOfHobbies) {
            const hobby = Generator.getRandomObjectFromList(hobbies[Generator.generateHobbyCategory()]);
            if (list.includes(hobby)) {
                continue;
            } else {
                list.push(hobby);
            }
            uniqueHobbies++;
        }
        return list;
    }

    public static generatePossibleJobYears(age: number, highestEducation: string): number {
        let startAge = 17;
        switch (highestEducation) {
            case "High School": {
                startAge = 17;
                break;
            }
            case "College": {
                startAge = 20;
                break;
            }
            case "Bachelor": {
                startAge = 23;
                break;
            }
            case "Master": {
                startAge = 25;
                break;
            }
            case "Doctorate": {
                startAge = 30;
                break;
            }
        }
        return age - startAge;
    }

    public static generateJob(age: number = 25, highestEducation: string): IJob {
        return {
            jobTitle: Generator.getRandomObjectFromList(jobTitles),
            company: Generator.getRandomObjectFromList(companies).companyName,
            mostUsedProgrammingLanguage: Generator.getRandomObjectFromList(programmingLanguages),
            // TODO not only age but highesEducation is important to guess starting age of working
            durationInMonths: Generator.getRandomInt(3, Generator.generatePossibleJobYears(age, highestEducation) * 12),
            numberOfEmployees: Generator.getRandomInt(1, 10000000)
        };
    }

    public static generateRandomJobs(age: number, highestEducation: string): IJob[] {
        const list = [];
        let yearsOfJobs = 0;
        // TODO check for unique job (at least not the same position at the same company)
        // TODO not only age but highesEducation is important to guess starting age of working
        while (yearsOfJobs < age - 18) {
            const job = Generator.generateJob(age, highestEducation);
            yearsOfJobs += job.durationInMonths / 12;
            if (yearsOfJobs > Generator.generatePossibleJobYears(age, highestEducation)) {
                break;
            }
            list.push(job);
        }
        return list;
    }

    public static generate(numberOfPersonas: number = 1): IPersona[] {
        if (numberOfPersonas > config.maxNumberOfPersonas) {
            numberOfPersonas = config.maxNumberOfPersonas;
        }
        const personas = [];
        for (let i = 0; i < numberOfPersonas; i++) {
            personas.push(Generator.generateSingle());
        }
        return personas;
    }

    public static generateSingle(): IPersona {

        const place = Generator.getRandomObjectFromList(places);
        let portraitPrefix;
        let gender;
        if (Generator.getRandomInt(0, 1, "lowerPreferred") === 0) { // male
            portraitPrefix = "portraits_men";
            gender = "male";
        } else {
            portraitPrefix = "portraits_women";
            gender = "female";
        }

        const portrait = Generator.getRandomObjectFromList(portraits[portraitPrefix]);
        const portraitFileName = portrait.fileName;
        const age = portrait.age;
        const maritalStatus = Generator.generateMaritalStatus();
        const operatingSystem = Generator.getRandomObjectFromList(operatingSystems);
        const prename = Generator.generatePrename(gender);
        const name = Generator.getRandomObjectFromList(lastNames);
        const zipCode = Generator.getRandomInt(1234, 88888);
        const streetNumber = Generator.getRandomInt(1, 600, "lowerPreferred").toString();
        const hobbiesList = Generator.generateHobbies();
        const education = Generator.getRandomObjectFromList(educations);
        const previousJobs = Generator.generateRandomJobs(age, education);
        const currentJob = previousJobs.length !== 0 ? previousJobs[0] : Generator.generateJob(age, education);

        return {
            prename,
            name,
            country: "Germany",
            age,
            gender,
            maritalStatus,
            street: "Main Street",
            streetNumber,
            zipCode,
            city: place.name,
            image: portraitPrefix + "/" + portraitFileName,
            education,
            quote: "Without requirements or design, programming is the art of adding bugs to an empty text file. - Louis Srygley",
            languages: ["German", "English"],
            currentJob,
            previousJobs,
            favoriteColor: "Red",
            favoriteOperatingSystem: operatingSystem,
            hobbies: hobbiesList,
            keyAttributes: ["9-5 job", "Features, Features, Features"],
            personalDrive: ["Clean Code", "Know your colleagues"],
            preferredCommunicationChannels: ["Slack", "IRC", "Twitter"],
            programmingExperiences: [
                {
                    language: "Java",
                    experienceInYears: 4
                },
                {
                    language: "C",
                    experienceInYears: 7
                },
                {
                    language: "PHP",
                    experienceInYears: 3
                }
            ],
            usedTechnologies: [
                {
                    name: "Git",
                    experienceLevel: 3
                },
                {
                    name: "Jenkins",
                    experienceLevel: 2
                },
                {
                    name: "Maven",
                    experienceLevel: 4
                }
            ]
        };
    }

}
