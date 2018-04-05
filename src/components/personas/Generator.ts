import { educations } from "../../data/educations_source";
import { firstNamesFemale } from "../../data/first_names_female_source";
import { firstNamesMale } from "../../data/first_names_male_source";
import { hobbies } from "../../data/hobbies_source";
import { lastNames } from "../../data/last_names_source";
import { operatingSystems } from "../../data/operating_systems_source";
import { places } from "../../data/places_source";
import { portraits } from "../../data/portraits_source";
import { IPersona } from "./Persona.interface";

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

    public static generate(numberOfPersonas: number = 1): IPersona[] {
        if (numberOfPersonas > 100) {
            numberOfPersonas = 100;
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
        const hobbies = Generator.generateHobbies();
        const education = Generator.getRandomObjectFromList(educations);

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
            currentJob: {
                jobTitle: "Java Developer",
                company: "Red Hat",
                mostUsedProgrammingLanguage: "Java",
                numberOfEmployees: 10000
            },
            previousJobs: [
                {
                    jobTitle: "Test Engineer",
                    company: "Microsoft",
                    mostUsedProgrammingLanguage: "Java",
                    durationInMonths: 17,
                    numberOfEmployees: 200000
                },
                {
                    jobTitle: "Developer",
                    company: "Siemens",
                    mostUsedProgrammingLanguage: "C",
                    durationInMonths: 24,
                    numberOfEmployees: 300000
                }
            ],
            favoriteColor: "Red",
            favoriteOperatingSystem: operatingSystem,
            hobbies,
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
