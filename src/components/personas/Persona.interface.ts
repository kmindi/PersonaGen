export interface IPersona {
    "prename": string;
    "name": string;
    "street"?: string;
    "streetNumber"?: string;
    "zipCode"?: number;
    "city"?: string;
    "country": string;
    "age": number;
    "image"?: string; // URL
    "gender": "male" | "female";
    "education"?: string;
    "quote"?: string;
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
