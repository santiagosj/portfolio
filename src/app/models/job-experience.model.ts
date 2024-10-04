export interface JobExperience {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    tasks: Task[];
}

export interface Task {
    description: string;
    technology: string;
    impact: string;
}