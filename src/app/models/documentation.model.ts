export interface Documentation {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    startDate: Date;
    status: "Work in progress" | "Completed" | "On hold" | "Not started";
    category: string;
    documentation: {
        overview: string;
        objectives: string[];
        components: Component[];
        setup: {
            prerequisites: string[];
            installationSteps: string[];
            notes?: string;
        };
        usage: string[];
    };
}

interface Component {
    name: string;
    description: string;
    technology?: string;
    purpose: string;
    subcomponents?: Subcomponent[];
}

interface Subcomponent {
    name: string;
    description: string;
    purpose?: string;
    subcomponents?: Subcomponent[];
}
