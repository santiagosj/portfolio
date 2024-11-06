import { JobExperience } from "./job-experience.model";
import { Project, ProjectDetail } from "./project.model";
import { Certificate } from "./certificate.model";
import { Skill } from "./skills.model";
import { ContactLink } from "./contactLink.model";
import { Documentation } from "./documentation.model";

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
        },
        repoLink: "https://github.com/"
    },
    {
        id: 2,
        title: "Network Monitor Lab",
        description: "A microservices-based network monitoring lab designed to simulate and manage network traffic, with an integrated stack for real-time monitoring and log analysis.",
        technologies: ["Python", "Node.js", "Docker", "Kubernetes", "Prometheus", "Grafana", "ELK Stack", "React", "Express", "Deno"],
        startDate: new Date("2024-10-15"),
        status: "Work in progress",
        category: "Networking and Security",
        detail: {
            content: "The Network Monitor Lab project utilizes microservices architecture to create a flexible, scalable lab environment for network monitoring and security simulations. It integrates technologies like Prometheus for metrics collection, Grafana for visualization, and the ELK Stack for log management, allowing detailed network traffic analysis and server load balancing. This project is designed for hands-on learning in network monitoring and to showcase full-stack and DevOps skills.",
            images: []
        },
        repoLink: "https://github.com/santiagosj/dolar-dashboard"
    }
];

export const projectDocumentation: Documentation[] = [
    {
        id: 2,
        title: "Network Monitor Lab",
        description: "A microservices-based network monitoring lab designed to simulate and manage network traffic, with an integrated stack for real-time monitoring and log analysis.",
        technologies: ["Python", "Node.js", "Docker", "Kubernetes", "Prometheus", "Grafana", "ELK Stack", "React", "Express", "Deno"],
        startDate: new Date("2024-10-15"),
        status: "Work in progress",
        category: "Networking and Security",
        documentation: {
            overview: "This project is a network monitoring lab using microservices to simulate and manage traffic in a controlled environment. The lab is designed for monitoring, analyzing logs, and balancing traffic loads across multiple servers.",
            objectives: [
                "Learn and demonstrate network monitoring and security practices.",
                "Implement and understand microservices and containerization with Docker and Kubernetes.",
                "Integrate Prometheus, Grafana, and ELK Stack for full-stack monitoring and log analysis."
            ],
            components: [
                {
                    name: "ApiGateway",
                    description: "Central node for routing requests across microservices.",
                    technology: "Node.js with Express",
                    purpose: "Distributes client requests to appropriate backend services for real-time data."
                },
                {
                    name: "Client",
                    description: "User interface for monitoring network traffic data.",
                    technology: "React with Vite",
                    purpose: "Provides a dashboard to visualize network metrics and logs from Prometheus and Grafana."
                },
                {
                    name: "Server-1 (Flask)",
                    description: "Backend service for retrieving official dollar rates.",
                    technology: "Python with Flask",
                    purpose: "Fetches and provides data on official exchange rates in response to client requests."
                },
                {
                    name: "Server-2 (FastAPI)",
                    description: "Backend service for retrieving blue dollar rates.",
                    technology: "Python with FastAPI",
                    purpose: "Fetches and provides data on the blue dollar exchange rate."
                },
                {
                    name: "Server-3 (Deno)",
                    description: "Backend service for retrieving MEP dollar rates.",
                    technology: "Deno",
                    purpose: "Fetches and provides data on MEP dollar exchange rates."
                },
                {
                    name: "LoadBalancer",
                    description: "Distributes incoming requests evenly across services.",
                    technology: "NGINX/HAProxy",
                    purpose: "Balances load to prevent service overload and ensure high availability."
                },
                {
                    name: "Monitoring",
                    description: "Services for monitoring and visualization.",
                    purpose: "Provide insights into traffic and performance.",
                    subcomponents: [
                        {
                            name: "Prometheus",
                            description: "Collects and stores metrics from services.",
                            purpose: "Enables data scraping for real-time network monitoring."
                        },
                        {
                            name: "Grafana",
                            description: "Dashboard for data visualization.",
                            purpose: "Visualizes Prometheus metrics in user-friendly charts."
                        },
                        {
                            name: "ELK Stack",
                            description: "Centralized logging and analysis.",
                            purpose: "Provides log management and analysis capabilities.",
                            subcomponents: [
                                { name: "Elasticsearch", description: "Search engine for storing logs." },
                                { name: "Logstash", description: "Data processing pipeline." },
                                { name: "Kibana", description: "Interface for log and data analysis." }
                            ]
                        }
                    ]
                }
            ],
            setup: {
                prerequisites: [
                    "Docker and Docker Compose installed",
                    "Kubernetes (Minikube or similar for local testing)",
                    "Basic knowledge of networking and monitoring tools"
                ],
                installationSteps: [
                    "Clone the repository and navigate to the project directory.",
                    "Run `docker-compose up` to start all services.",
                    "Access Grafana at `localhost:3000`, Prometheus at `localhost:9090`, and Kibana at `localhost:5601`.",
                    "Use the client dashboard to interact with network data."
                ],
                notes: "Ensure that Minikube or another Kubernetes environment is running before deploying services on Kubernetes."
            },
            usage: [
                "Navigate to the client dashboard to view real-time monitoring metrics.",
                "Use the Grafana interface to visualize Prometheus data for each service.",
                "View logs and events in Kibana to analyze network activity and potential issues."
            ]
        }
    },

];


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