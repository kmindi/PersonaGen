import { places } from "../../data/places_source";
import { portraits } from "../../data/portraits_source";
import { IPersona } from "./Persona.interface";
import { operatingSystems } from "../../data/operating_systems_source"

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

    public static generate(numberOfPersonas: number = 1): IPersona[] {
        let personas = [];
        for (let i = 0; i < numberOfPersonas; i++) {
            personas.push(Generator.generateSingle());
        }
        console.log(personas);
        return personas;
    }

    public static generateSingle(): IPersona {

        const place = Generator.getRandomObjectFromList(places);
        let portraitPrefix;
        if (Generator.getRandomInt(0, 1, "lowerPreferred") === 0) { // male
            portraitPrefix = "portraits_men";
        } else {
            portraitPrefix = "portraits_women";
        }

        const portrait = Generator.getRandomObjectFromList(portraits[portraitPrefix]);
        const portraitFileName = portrait.fileName;
        const age = portrait.age;


        const operatingSystem = Generator.getRandomObjectFromList(operatingSystems);

        return {
            prename: "Otto",
            name: "Mustermann",
            country: "Germany",
            age,
            gender: "male",
            maritalStatus: "married",
            street: "Main Street",
            streetNumber: "12",
            zipCode: 75432,
            city: place.name,
            image: portraitPrefix + "/" + portraitFileName,
            education: "Diplom Informatiker",
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
            hobbies: ["Football", "Jogging", "Gym"],
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
