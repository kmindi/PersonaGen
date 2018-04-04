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
                maritalStatus: "married",
                street: "Main Street",
                streetNumber: "12",
                zipCode: 75432,
                city: "Neustadt",
                image: "",
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
                favoriteOperatingSystem: "Windows 10",
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
                languages: ["German", "English"],
                currentJob: {
                    jobTitle: "Java Developer",
                    company: "Red Hat",
                    mostUsedProgrammingLanguage: "Java",
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
                hobbies: ["Table Tennis", "Chess"],
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
            }
        ];
    }

}
