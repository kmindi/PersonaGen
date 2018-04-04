import { IPersona } from "./Persona.interface";

export class Generator {

    public static generate(numberOfPersonas: number = 1): IPersona[] {

        return [
            {
                prename: "Otto",
                name: "Mustermann",
                country: "Germany",
                age: 35,
                gender: "male",
                street: "Main Street",
                number: "12",
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
            },
            {
                prename: "Erika",
                name: "Mustermann",
                country: "Germany",
                age: 35,
                gender: "female",
                street: "Main Street",
                number: "12",
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
