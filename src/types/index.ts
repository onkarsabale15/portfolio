export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    technologies: string[];
}

export interface Achievement {
    title: string;
    description: string;
    year: string;
    icon: string;
}

export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'AI/ML' | 'Tools' | 'Other';
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
}

export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    icon: string;
}
