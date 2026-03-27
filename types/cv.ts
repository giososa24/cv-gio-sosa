export interface PersonalInfo {
    fullName: string;
    title: string;
    age: string;
    location: string;
    nationality: string;
    address: string;
    email: string;
    avatar: string;
    linkedIn: string;
    github: string;
    availability: string;
}

export interface AcademicBackground {
    institution: string;
    degree: string;
    period: string;
    status: string;
}

export interface WorkExperience {
    company: string;
    position: string;
    period: string;
    activities: string[];
    technologies: string[];
}

export interface Language {
    name: string;
    level: string;
}

export interface Skills {
    frontend: string[];
    backend: string[];
    devops: string[];
    mobile: string[];
    testing: string[];
}

export interface Course {
    institution: string;
    name: string;
    period: string;
    status: string;
    certificateUrl?: string;
}

export interface Reference {
    name: string;
    role?: string;
    relationship?: string;
    phone: string;
}

export interface References {
    work: Reference[];
    personal: Reference[];
}

export interface CVData {
    personalInfo: PersonalInfo;
    professionalProfile: string;
    academicBackground: AcademicBackground[];
    workExperience: WorkExperience[];
    languages: Language[];
    skills: Skills;
    courses: Course[];
    references: References;
    otherData: string[];
}
