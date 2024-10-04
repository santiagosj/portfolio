export interface Certificate {
    id: number; // Unique identifier for the certificate
    title: string; // Name of the course or certification
    institution: string; // Name of the institution or platform
    completionDate: Date; // Date of completion
    description?: string; // Optional: A brief description or notes about the certificate
}
