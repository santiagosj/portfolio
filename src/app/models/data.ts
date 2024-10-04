import { JobExperience } from "./job-experience.model";
import { Project, ProjectDetail } from "./project.model";
import { Certificate } from "./certificate.model";
import { Skill } from "./skills.model";
import { ContactLink } from "./contactLink.model";

export const jobExperiences: JobExperience[] = [
    {
        title: 'Desarrollador Web',
        company: 'Empresa X',
        startDate: 'Enero 2020',
        endDate: 'Diciembre 2022',
        description: 'Desarrollé aplicaciones web escalables...',
        tasks: [
            { description: 'Diseño de la UI', technology: 'Angular', impact: 'Mejora en UX' },
            { description: 'Integración con APIs', technology: 'Node.js', impact: 'Reducción en tiempos de respuesta' }
        ]
    },
    {
        title: 'Desarrollador Web',
        company: 'Empresa X',
        startDate: 'Enero 2020',
        endDate: 'Diciembre 2022',
        description: 'Desarrollé aplicaciones web escalables...',
        tasks: [
            { description: 'Diseño de la UI', technology: 'Angular', impact: 'Mejora en UX' },
            { description: 'Integración con APIs', technology: 'Node.js', impact: 'Reducción en tiempos de respuesta' }
        ]
    },
    {
        title: 'Desarrollador Web',
        company: 'Empresa X',
        startDate: 'Enero 2020',
        endDate: 'Diciembre 2022',
        description: 'Desarrollé aplicaciones web escalables...',
        tasks: [
            { description: 'Diseño de la UI', technology: 'Angular', impact: 'Mejora en UX' },
            { description: 'Integración con APIs', technology: 'Node.js', impact: 'Reducción en tiempos de respuesta' }
        ]
    },
]

export const certifications: Certificate[] = [
    {
        id: 1, // Unique identifier for the certificate
        title: "Profesional Frontend developer", // Name of the course or certification
        institution: "UTN", // Name of the institution or platform
        completionDate: new Date("2015-03-20"), // Date of completion
        description: "", // Optional: A brief description or notes about the certificate
    },
    {
        id: 2, // Unique identifier for the certificate
        title: "Profesional Frontend developer", // Name of the course or certification
        institution: "UTN", // Name of the institution or platform
        completionDate: new Date("2015-03-20"), // Date of completion
        description: "", // Optional: A brief description or notes about the certificate
    },
    {
        id: 3, // Unique identifier for the certificate
        title: "Profesional Frontend developer", // Name of the course or certification
        institution: "UTN", // Name of the institution or platform
        completionDate: new Date("2015-03-20"), // Date of completion
        description: "", // Optional: A brief description or notes about the certificate
    },
    {
        id: 4, // Unique identifier for the certificate
        title: "Profesional Frontend developer", // Name of the course or certification
        institution: "UTN", // Name of the institution or platform
        completionDate: new Date("2015-03-20"), // Date of completion
        description: "", // Optional: A brief description or notes about the certificate
    },
    {
        id: 5, // Unique identifier for the certificate
        title: "Profesional Frontend developer", // Name of the course or certification
        institution: "UTN", // Name of the institution or platform
        completionDate: new Date("2015-03-20"), // Date of completion
        description: "", // Optional: A brief description or notes about the certificate
    },
]

export const skills: Skill[] = [
    {
        id: 1,
        name: "ReactJS",
        // description: "",
        level: "Master",
        category: "Frontend",
        // image: "react icon",
    },
    {
        id: 2,
        name: "Angular",
        // description: "",
        level: "Advanced",
        category: "Frontend",
        // image: "react icon",
    },
    {
        id: 3,
        name: "NodeJS",
        // description: "",
        level: "Warrior",
        category: "Backend/Microservices",
        // image: "react icon",
    },
    {
        id: 4,
        name: "Typescript",
        // description: "",
        level: "Advanced",
        category: "Programing language",
        // image: "react icon",
    },
    {
        id: 5,
        name: "Python",
        // description: "",
        level: "Novice",
        category: "Programing language",
        // image: "react icon",
    },
    {
        id: 6,
        name: "English",
        // description: "",
        level: "Advanced",
        category: "Language",
        // image: "react icon",
    },
]

export const projects: Project[] = [
    {
        id: 1,
        title: "Blu",
        description: "This is a project, for help me with my acount bank balances",
        technologies: ['Python', 'Selenium', 'dotenv'],
        startDate: new Date("2024-01-15"),
        status: "Work in progress",
        category: "Automation",
        detail: {
            content: 'porject 1 details',
            //images: [],
        }
    },
    {
        id: 2,
        title: "Biometric Login PWA",
        description: "This is a biometric login with ReactJS and express",
        technologies: [
            'ReactJS',
            'TypeScript',
            'Sass',
            'Vite',
            'Storybook',
            'WebAuthN',
            '@github/webauthn-json',
            'express',
            'nodejs',
            'Atomic Desigin'
        ],
        startDate: new Date("2024-01-15"),
        status: "Work in progress",
        category: "Web Development",
        detail: {
            content: 'project 2 details',
            // images: [],
        }
    },
    {
        id: 3,
        title: "Asistent",
        description: "Asistente para git",
        technologies: ['Python'],
        startDate: new Date("2024-01-15"),
        status: "Work in progress",
        category: "Scripting",
        detail: {
            content: 'project 3 details',
            //images: [],
        }
    }
]

export const ContactLinks: ContactLink[] = [
    {
        id: "1",
        name: "Email",
        href: "mailto:sanjs965@gmail.com",
        class: "fas fa-envelope fa-lg"
    },
    {
        id: "2",
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/sanjay-singh-965/",
        class: "fab fa-linkedin fa-lg"
    },
    {
        id: "3",
        name: "GitHub",
        href: "https://github.com/sanjay-singh-965",
        class: "fab fa-github fa-lg"
    },
    {
        id: "4",
        name: "Wathsapp",
        href: "https://wa.me/919999999999",
        class: "fab fa-whatsapp fa-lg"
    }
]