export interface Persona {
    "prename": string;
    "name": string;
    "street"?: string;
    "number"?: string;
    "zipCode"?: number;
    "city"?: string;
    "country": string;
    "age": number;
    "image"?: string; // URL
    "gender": "male" | "female";
    "education"?: string;
    "quote"?: string;
    "languages"?: string[];
    "currentJob"?: Job;
    "previousJobs"?: Job[];
    "favoriteColor"?: string;
    "favoriteOperatingSystem"?: string;
    "hobbies"?: string[];
    "keyAttributes"?: string[];
    "personalDrive"?: string[];
    "preferredCommunicationChannels"?: string[];
    "programmingExperiences"?: ProgrammingExperience[];
    "usedTechnologies"?: UsedTechnology[];
}

export interface Job {
    "jobTitle"?: string;
    "company"?: string;
    "mostUsedProgrammingLanguage"?: string;
    "durationInMonths"?: number;
    "numberOfEmployees"?: number;
}

export interface ProgrammingExperience {
    "language"?: string;
    "experienceInYears"?: number;
}

export interface UsedTechnology {
    "name"?: string;
    "experienceLevel"?: number; // 0-5
}
