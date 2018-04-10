export interface IPersona {
    "prename": string;
    "name": string;
    "maritalStatus"?: string;
    "zipCode"?: number;
    "city"?: string;
    "country": string;
    "age": number;
    "image"?: string; // URL
    "gender": "male" | "female";
    "education"?: string;
    "quote"?: IQuote;
    "languages"?: string[];
    "currentJob"?: IJob;
    "previousJobs"?: IJob[];
    "favoriteColor"?: string;
    "favoriteOperatingSystem"?: string;
    "hobbies"?: string[];
    "keyAttributes"?: string[];
    "personalDrive"?: string[];
    "preferredCommunicationChannels"?: string[];
    "programmingExperiences"?: IProgrammingExperience[];
    "usedTechnologies"?: IUsedTechnology[];
}

export interface IJob {
    "jobTitle"?: string;
    "company"?: string;
    "mostUsedProgrammingLanguage"?: string;
    "durationInMonths"?: number;
    "numberOfEmployees"?: number;
}

export interface IProgrammingExperience {
    "language"?: string;
    "experienceInYears"?: number;
}

export interface IUsedTechnology {
    "name"?: string;
    "experienceLevel"?: number; // 0-5
}

export interface IQuote {
    "quote": string;
    "author": string;
}
