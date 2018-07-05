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
import { personalDrives } from "../../data/personal_drives_source";
import { personalTraits } from "../../data/personal_traits_source";
import { places } from "../../data/places_source";
import { portraits } from "../../data/portraits_source";
import { programmingLanguages } from "../../data/programming_languages_source";
import { quotes } from "../../data/quotes_source";
import { technologies } from "../../data/technologies_source";
import { textEditors } from "../../data/text_editors_source";
import {
    IJob,
    IPersona,
    IProgrammingExperience,
    IUsedTechnology
} from "./Persona.interface";

export class Persona implements IPersona {
    public static readonly portraitPrefixMen = "portraits_men";
    public static readonly portraitPrefixWomen = "portraits_women";

    /**
     * returns a random object from the given array
     * @param arr
     */
    public static getRandomObjectFromList(
        arr: any[],
        distribution: string = "equally"
    ) {
        return arr[Persona.getRandomInt(0, arr.length - 1, distribution)];
    }

    /**
     * returns a random integer between min (inclusive) and max (inclusive)
     * @param min
     * @param max
     * @param distribution "equally" | "lowerPreferred" | "higherPreferred"
     */
    public static getRandomInt(
        min: number,
        max: number,
        distribution: string = "equally"
    ): number {
        const interval = max - min;
        if (distribution.localeCompare("lowerPreferred") === 0) {
            max = max - Persona.getRandomInt(0, Math.ceil(interval / 2));
        } else if (distribution.localeCompare("higherPreferred") === 0) {
            min = min + Persona.getRandomInt(0, Math.ceil(interval / 2));
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
    public static getRandomListOfDistinctInts(
        amount: number,
        min: number,
        max: number
    ): number[] {
        const result = [];
        let currentValue = min;
        for (let i: number = 0; i < max - min; i++) {
            result[i] = currentValue;
            currentValue++;
        }

        // Fisher-Yates shuffle
        let j;
        for (let i: number = result.length; i > 0; i--) {
            j = Persona.getRandomInt(0, i);
            const temp = result[i];
            result[i] = result[j];
            result[j] = temp;
        }

        return result.slice(0, amount);
    }

    public static generateMaritalStatus(): string {
        if (Persona.getRandomInt(0, 1) === 0) {
            return "married";
        } else {
            return "single";
        }
    }

    public static generatePrename(gender: string = "male") {
        if (gender === "female") {
            return Persona.getRandomObjectFromList(firstNamesFemale);
        } else {
            return Persona.getRandomObjectFromList(firstNamesMale);
        }
    }

    public static generateHobbyCategory(): string {
        // TODO extend to use all categories and their subcategories
        if (Persona.getRandomInt(0, 1) === 0) {
            return "indoorHobbies";
        } else {
            return "outdoorHobbies";
        }
    }

    public static generateHobbies(): string[] {
        const numberOfHobbies = Persona.getRandomInt(1, 3);
        const list = [];

        let uniqueHobbies = 0;
        while (uniqueHobbies < numberOfHobbies) {
            const hobby = Persona.getRandomObjectFromList(
                hobbies[Persona.generateHobbyCategory()]
            );
            if (list.includes(hobby)) {
                continue;
            } else {
                list.push(hobby);
            }
            uniqueHobbies++;
        }
        return list;
    }

    public static generatePossibleJobYears(
        age: number,
        highestEducation: string
    ): number {
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

    public static generateJob(
        age: number = 25,
        highestEducation: string
    ): IJob {
        return {
            jobTitle: Persona.getRandomObjectFromList(jobTitles),
            company: Persona.getRandomObjectFromList(companies)
                .companyName,
            mostUsedProgrammingLanguage: Persona.getRandomObjectFromList(
                programmingLanguages
            ),
            // TODO not only age but highesEducation is important to guess starting age of working
            durationInMonths: Persona.getRandomInt(
                3,
                Persona.generatePossibleJobYears(age, highestEducation) *
                12
            ),
            numberOfEmployees: Persona.getRandomInt(1, 10000000)
        };
    }

    public static generateRandomJobs(
        age: number,
        highestEducation: string
    ): IJob[] {
        const list = [];
        let yearsOfJobs = 0;
        // TODO check for unique job (at least not the same position at the same company)
        // TODO not only age but highesEducation is important to guess starting age of working
        while (yearsOfJobs < age - 18) {
            const job = Persona.generateJob(age, highestEducation);
            yearsOfJobs += job.durationInMonths / 12;
            if (
                yearsOfJobs >
                Persona.generatePossibleJobYears(age, highestEducation)
            ) {
                break;
            }
            list.push(job);
        }
        return list;
    }

    public static generateTechnology(): IUsedTechnology {
        return {
            name: Persona.getRandomObjectFromList(technologies),
            // TODO make maximum experience dependent on job experience / age
            experienceLevel: Persona.getRandomInt(1, 5)
        };
    }

    public static generateTechnologies(): IUsedTechnology[] {
        const numberOfTechnologies = Persona.getRandomInt(1, 3);
        const list = [];
        const technologieNameList = [];

        let uniqueTechnologies = 0;
        while (uniqueTechnologies < numberOfTechnologies) {
            const technology = Persona.generateTechnology();
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
            language: Persona.getRandomObjectFromList(programmingLanguages)
                .languageName,
            // TODO make maximum length dependent on job experience / age
            experienceInYears: Persona.getRandomInt(1, 5)
        };
    }

    public static generateListOfProgrammingExperience(): IProgrammingExperience[] {
        const numberOfProgrammingLanguages = Persona.getRandomInt(1, 3);
        const list = [];
        const languageList = [];

        let uniqueProgrammingLanguages = 0;
        while (uniqueProgrammingLanguages < numberOfProgrammingLanguages) {
            const programmingExperience = Persona.generateProgrammingExperience();
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
        const numberOfLanguages = Persona.getRandomInt(1, 3);
        const languageList = ["English"];

        let uniqueLanguages = 1;
        while (uniqueLanguages < numberOfLanguages) {
            const language = Persona.getRandomObjectFromList(
                languages,
                "higherPreferred"
            );
            if (languageList.includes(language)) {
                continue;
            } else {
                languageList.push(language);
            }
            uniqueLanguages++;
        }
        return languageList;
    }

    public static generatePersonalTraits(): string[] {
        const numberOfTraits = Persona.getRandomInt(1, 3);
        const traitList = [];

        let uniqueTraits = 0;
        while (uniqueTraits < numberOfTraits) {
            const trait = Persona.getRandomObjectFromList(personalTraits);
            if (traitList.includes(trait)) {
                continue;
            } else {
                traitList.push(trait);
            }
            uniqueTraits++;
        }
        return traitList;
    }

    public static generatePersonalDrives(): string[] {
        const numberOfDrives = Persona.getRandomInt(1, 3);
        const driveList = [];

        let uniqueDrives = 0;
        while (uniqueDrives < numberOfDrives) {
            const drive = Persona.getRandomObjectFromList(personalDrives);
            if (driveList.includes(drive)) {
                continue;
            } else {
                driveList.push(drive);
            }
            uniqueDrives++;
        }
        return driveList;
    }

    public static generate(numberOfPersonas: number = 1): IPersona[] {
        if (numberOfPersonas > config.maxNumberOfPersonas) {
            numberOfPersonas = config.maxNumberOfPersonas;
        }
        const personas = [];

        let portraitPrefix;
        let gender: string;
        const portraitIndizesMen = Persona.getRandomListOfDistinctInts(
            numberOfPersonas,
            0,
            portraits[Persona.portraitPrefixMen].length - 1
        );
        const portraitIndizesWomen = Persona.getRandomListOfDistinctInts(
            numberOfPersonas,
            0,
            portraits[Persona.portraitPrefixWomen].length - 1
        );
        let randomIndex;

        for (let i = 0; i < numberOfPersonas; i++) {
            if (Persona.getRandomInt(0, 1, "lowerPreferred") === 0) {
                // male
                portraitPrefix = Persona.portraitPrefixMen;
                gender = "male";
                randomIndex = portraitIndizesMen.pop();
            } else {
                portraitPrefix = Persona.portraitPrefixWomen;
                gender = "female";
                randomIndex = portraitIndizesWomen.pop();
            }

            let portrait;
            if (randomIndex == null) {
                // more personas than images
                portrait = Persona.getRandomObjectFromList(
                    portraits[portraitPrefix]
                );
            } else {
                portrait = portraits[portraitPrefix][randomIndex];
            }

            personas.push(new Persona(portrait, portraitPrefix, gender));
        }
        return personas;
    }

    public place;
    public city;
    public country;
    public portrait;
    public portraitFileName;
    public age;
    public gender;
    public maritalStatus;
    public favoriteOperatingSystem;
    public prename;
    public name;
    public zipCode;
    public streetNumber;
    public hobbies;
    public education;
    public previousJobs;
    public currentJob;
    public usedTechnologies;
    public programmingExperience;
    public languages;
    public quote;
    public preferredCommunicationChannels;
    public favoriteColor;
    public favoriteTextEditor;
    public keyAttributes;
    public personalDrive;
    public image;

    private portraitPrefix: string;

    private constructor(portrait, portraitPrefix, gender) {
        this.portrait = portrait;
        this.portraitPrefix = portraitPrefix;
        this.gender = gender;
        this.init();
    }

    public generateFavoriteColor() {
        return Persona.getRandomObjectFromList(colors);
    }

    public generateCommunicationChannels(): string[] {
        const numberofCommunicationChannels = Persona.getRandomInt(1, 3);
        const list = [];

        let uniqueCommunicationChannels = 0;
        while (uniqueCommunicationChannels < numberofCommunicationChannels) {
            const communicationChannel = Persona.getRandomObjectFromList(
                communicationChannels
            );
            if (list.includes(communicationChannel)) {
                continue;
            } else {
                list.push(communicationChannel);
            }
            uniqueCommunicationChannels++;
        }
        return list;
    }

    private init() {
        this.place = Persona.getRandomObjectFromList(places);
        this.city = this.place.name;
        this.country = isoCountryCodeMappings[this.place.countryCode].name;
        this.portraitFileName = this.portrait.fileName;
        this.age = this.portrait.age;
        this.maritalStatus = Persona.generateMaritalStatus();
        this.favoriteOperatingSystem = Persona.getRandomObjectFromList(
            operatingSystems
        );
        this.prename = Persona.generatePrename(this.gender);
        this.name = Persona.getRandomObjectFromList(lastNames);
        this.zipCode = Persona.getRandomInt(1234, 88888);
        this.streetNumber = Persona.getRandomInt(
            1,
            600,
            "lowerPreferred"
        ).toString();
        this.hobbies = Persona.generateHobbies();
        this.education = Persona.getRandomObjectFromList(educations);
        this.previousJobs = Persona.generateRandomJobs(
            this.age,
            this.education
        );
        this.currentJob =
            this.previousJobs.length !== 0
                ? this.previousJobs[0]
                : Persona.generateJob(this.age, this.education);
        this.usedTechnologies = Persona.generateTechnologies();
        this.programmingExperience = Persona.generateListOfProgrammingExperience();
        this.languages = Persona.generateLanguages();
        this.quote = Persona.getRandomObjectFromList(quotes);
        this.preferredCommunicationChannels = this.generateCommunicationChannels();
        this.favoriteColor = this.generateFavoriteColor();
        this.favoriteTextEditor = Persona.getRandomObjectFromList(
            textEditors
        );
        this.keyAttributes = Persona.generatePersonalTraits();
        this.personalDrive = Persona.generatePersonalDrives();
        this.image = this.portraitPrefix + "/" + this.portraitFileName;
    }
}
