import { IPersona } from "./Persona.interface";
import { places } from "../../data/places_source";

export class Generator {

    /**
     * returns a random object from the given array
     * @param arr 
     */
    static getRandomObjectFromList(arr: Object[]) {
        return arr[Generator.getRandomInt(0, arr.length - 1)];
    }

    /**
     * returns a random integer between min (inclusive) and max (inclusive)
     * @param min 
     * @param max 
     */
    static getRandomInt(min: number, max: number, distribution: string = 'equally'): number {
        if (distribution.localeCompare('lowerPreferred') == 0) {
            max = Math.floor(Math.random() * (max - min + 1)) - max/3;
        } else if (distribution.localeCompare('higherPreferred') == 0) {
            min = Math.floor(Math.random() * (max - min + 1)) + max/3;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static generate(numberOfPersonas: number = 1): IPersona[] {

        let place = Generator.getRandomObjectFromList(places);
        let age = this.getRandomInt(18, 65, 'lowerPreferred');

        return [
            {
                prename: "Otto",
                name: "Mustermann",
                country: "Germany",
                age: age,
                gender: "male",
                maritalStatus: "married",
                street: "Main Street",
                streetNumber: "12",
                zipCode: 75432,
                city: place["name"],
                image: "",
                education: "Diplom Informatiker",
                quote: "Without requirements or design, programming is the art of adding bugs to an empty text file. - Louis Srygley",
                languages: [""],
                currentJob: {
                    jobTitle: "Junior Java Developer",
                    company: "",
                    mostUsedProgrammingLanguage: "",
                    durationInMonths: 17,
                    numberOfEmployees: 200000
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
                favoriteOperatingSystem: "Windows 10",
                hobbies: [""],
                keyAttributes: ["9-5 job", "Features, Features, Features"],
                personalDrive: [""],
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
            },
            {
                prename: "Erika",
                name: "Mustermann",
                country: "Germany",
                age: 35,
                gender: "female",
                maritalStatus: "married",
                street: "Main Street",
                streetNumber: "12",
                zipCode: 75432,
                city: "Neustadt",
                image: "",
                education: "Diplom Informatiker",
                quote: "Without requirements or design, programming is the art of adding bugs to an empty text file. - Louis Srygley",
                languages: [""],
                currentJob: {
                    jobTitle: "Junior Java Developer",
                    company: "",
                    mostUsedProgrammingLanguage: "",
                    durationInMonths: 17,
                    numberOfEmployees: 200000
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
                favoriteOperatingSystem: "Windows 10",
                hobbies: [""],
                keyAttributes: ["9-5 job", "Features, Features, Features"],
                personalDrive: [""],
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
            }
        ];
    }

}
