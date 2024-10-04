export interface ProjectDetail {
    content: string;
    images?: string[];
    // otros campos específicos del detalle
}
export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    startDate: Date;
    endDate?: Date;
    status: string;
    category: string;
    detail: ProjectDetail;
}
