import { config } from "../../conf/config";
import { colors } from "../../data/colors_source";
import { communicationChannels } from "../../data/communication_channels_source";
import { companies } from "../../data/companies_source";
import { educations } from "../../data/educations_source";
import { firstNamesFemale } from "../../data/first_names_female_source";
import { firstNamesMale } from "../../data/first_names_male_source";
import { hobbies } from "../../data/hobbies_source";
import { isoCountryCodeMappings } from "../../data/iso_country_code_mappings_source";
import { jobTitles } from "../../data/job_titles_source";
import { languages } from "../../data/languages_source";
import { lastNames } from "../../data/last_names_source";
import { operatingSystems } from "../../data/operating_systems_source";
import { places } from "../../data/places_source";
import { portraits } from "../../data/portraits_source";
import { programmingLanguages } from "../../data/programming_languages_source";
import { quotes } from "../../data/quotes_source";
import { technologies } from "../../data/technologies_source";
import { textEditors } from "../../data/text_editors_source";
import { IJob, IPersona, IProgrammingExperience, IUsedTechnology } from "./Persona.interface";

export class Generator {

    public static readonly portraitPrefixMen = "portraits_men";
    public static readonly portraitPrefixWomen = "portraits_women";

    /**
     * returns a random object from the given array
     * @param arr
     */
    public static getRandomObjectFromList(arr: any[], distribution: string = "equally") {
        return arr[Generator.getRandomInt(0, arr.length - 1, distribution)];
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

    /**
     * returns a list of distinct integers values. In case that the requested amount is
     * greater than the interval defined by max and min, the returned array contains some
     * undefined values
     * @param amount
     * @param min
     * @param max
     */
    public static getRandomListOfDistinctInts(amount: number, min: number, max: number): number[] {
        const result = [];
        let currentValue = min;
        for (let i: number = 0; i < max - min; i++) {
            result[i] = currentValue;
            currentValue++;
        }

        // Fisher-Yates shuffle
        let j;
        for (let i: number = result.length; i > 0; i--) {
            j = Generator.getRandomInt(0, i);
            const temp = result[i];
            result[i] = result[j];
            result[j] = temp;
        }

        return result.slice(0, amount);
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

    public static generateTechnology(): IUsedTechnology {
        return {
            name: Generator.getRandomObjectFromList(technologies),
            // TODO make maximum experience dependent on job experience / age
            experienceLevel: Generator.getRandomInt(1, 5)
        };
    }

    public static generateTechnologies(): IUsedTechnology[] {
        const numberOfTechnologies = Generator.getRandomInt(1, 3);
        const list = [];
        const technologieNameList = [];

        let uniqueTechnologies = 0;
        while (uniqueTechnologies < numberOfTechnologies) {
            const technology = Generator.generateTechnology();
            if (technologieNameList.includes(technology.name)) {
                continue;
            } else {
                list.push(technology);
                technologieNameList.push(technology.name);
            }
            uniqueTechnologies++;
        }
        return list;
    }

    public static generateProgrammingExperience(): IProgrammingExperience {
        return {
            language: Generator.getRandomObjectFromList(programmingLanguages).languageName,
            // TODO make maximum length dependent on job experience / age
            experienceInYears: Generator.getRandomInt(1, 5)
        };
    }

    public static generateListOfProgrammingExperience(): IProgrammingExperience[] {

        const numberOfProgrammingLanguages = Generator.getRandomInt(1, 3);
        const list = [];
        const languageList = [];

        let uniqueProgrammingLanguages = 0;
        while (uniqueProgrammingLanguages < numberOfProgrammingLanguages) {
            const programmingExperience = Generator.generateProgrammingExperience();
            if (languageList.includes(programmingExperience.language)) {
                continue;
            } else {
                list.push(programmingExperience);
                languageList.push(programmingExperience.language);
            }
            uniqueProgrammingLanguages++;
        }
        return list;
    }

    public static generateLanguages(): string[] {
        const numberOfLanguages = Generator.getRandomInt(1, 3);
        const languageList = ["English"];

        let uniqueLanguages = 1;
        while (uniqueLanguages < numberOfLanguages) {
            const language = Generator.getRandomObjectFromList(languages, "higherPreferred");
            if (languageList.includes(language)) {
                continue;
            } else {
                languageList.push(language);
            }
            uniqueLanguages++;
        }
        return languageList;
    }

    public static generateCommunicationChannels(): string[] {
        const numberofCommunicationChannels = Generator.getRandomInt(1, 3);
        const list = [];

        let uniqueCommunicationChannels = 0;
        while (uniqueCommunicationChannels < numberofCommunicationChannels) {
            const communicationChannel = Generator.getRandomObjectFromList(communicationChannels);
            if (list.includes(communicationChannel)) {
                continue;
            } else {
                list.push(communicationChannel);
            }
            uniqueCommunicationChannels++;
        }
        return list;
    }

    public static generate(numberOfPersonas: number = 1): IPersona[] {
        if (numberOfPersonas > config.maxNumberOfPersonas) {
            numberOfPersonas = config.maxNumberOfPersonas;
        }
        const personas = [];

        let portraitPrefix;
        let gender: string;
        const portraitIndizesMen = Generator.getRandomListOfDistinctInts(numberOfPersonas, 0, portraits[Generator.portraitPrefixMen].length - 1);
        const portraitIndizesWomen = Generator.getRandomListOfDistinctInts(numberOfPersonas, 0, portraits[Generator.portraitPrefixWomen].length - 1);
        let randomIndex;

        for (let i = 0; i < numberOfPersonas; i++) {
            if (Generator.getRandomInt(0, 1, "lowerPreferred") === 0) { // male
                portraitPrefix = Generator.portraitPrefixMen;
                gender = "male";
                randomIndex = portraitIndizesMen.pop();
            } else {
                portraitPrefix = Generator.portraitPrefixWomen;
                gender = "female";
                randomIndex = portraitIndizesWomen.pop();
            }

            let portrait;
            if (randomIndex == null) { // more personas than images
                portrait = Generator.getRandomObjectFromList(portraits[portraitPrefix]);
            } else {
                portrait = portraits[portraitPrefix][randomIndex];
            }

            personas.push(Generator.generateSingle(portrait, portraitPrefix, gender));
        }
        return personas;
    }

    public static generateSingle(portrait, portraitPrefix, gender): IPersona {
        const place = Generator.getRandomObjectFromList(places);
        const country = isoCountryCodeMappings[place.countryCode].name;
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
        const usedTechnologies = Generator.generateTechnologies();
        const programmingExperiences = Generator.generateListOfProgrammingExperience();
        const languagesList = Generator.generateLanguages();
        const quote = Generator.getRandomObjectFromList(quotes);
        const communicationChannelsList = Generator.generateCommunicationChannels();
        const favoriteColor = Generator.getRandomObjectFromList(colors);
        const favoriteTextEditor = Generator.getRandomObjectFromList(textEditors);
        return {
            prename,
            name,
            country,
            age,
            gender,
            maritalStatus,
            zipCode,
            city: place.name,
            image: portraitPrefix + "/" + portraitFileName,
            education,
            quote,
            languages: languagesList,
            currentJob,
            previousJobs,
            favoriteColor,
            favoriteOperatingSystem: operatingSystem,
            hobbies: hobbiesList,
            keyAttributes: ["9-5 job", "Features, Features, Features"],
            personalDrive: ["Clean Code", "Know your colleagues"],
            preferredCommunicationChannels: communicationChannelsList,
            programmingExperiences,
            usedTechnologies,
            favoriteTextEditor
        };
    }

}
