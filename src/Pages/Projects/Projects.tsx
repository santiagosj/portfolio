import React from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    featured: boolean;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: "secure-cicd-pipeline",
            title: "Secure CI/CD Pipeline",
            description: "Enterprise-grade CI/CD pipeline with integrated security scanning, automated compliance checks, and zero-downtime deployments.",
            technologies: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Trivy"],
            category: "DevSecOps",
            featured: true
        },
        {
            id: "kubernetes-security-hardening",
            title: "Kubernetes Security Hardening",
            description: "Comprehensive security framework for Kubernetes clusters including network policies, RBAC, and runtime security monitoring.",
            technologies: ["Kubernetes", "Falco", "OPA/Gatekeeper", "Istio", "Calico"],
            category: "Security",
            featured: true
        },
        {
            id: "infrastructure-as-code",
            title: "Infrastructure as Code Platform",
            description: "Terraform-based infrastructure automation with multi-cloud support and cost optimization strategies.",
            technologies: ["Terraform", "AWS", "Azure", "Terragrunt", "Infracost"],
            category: "Infrastructure",
            featured: false
        },
        {
            id: "security-monitoring",
            title: "Security Monitoring Dashboard",
            description: "Real-time security monitoring and alerting system with SIEM integration and automated incident response.",
            technologies: ["ELK Stack", "Prometheus", "Grafana", "Wazuh", "TheHive"],
            category: "Security",
            featured: false
        },
        {
            id: "container-security",
            title: "Container Security Scanner",
            description: "Automated container vulnerability scanning and image signing pipeline with policy enforcement.",
            technologies: ["Docker", "Trivy", "Notary", "Harbor", "Kyverno"],
            category: "Security",
            featured: true
        },
        {
            id: "compliance-automation",
            title: "Compliance Automation Framework",
            description: "Automated compliance reporting and audit trail system for SOC2 and ISO27001 standards.",
            technologies: ["Python", "AWS Config", "OpenSCAP", "CIS Benchmarks"],
            category: "Compliance",
            featured: false
        }
    ];

    const categories = ["All", "DevSecOps", "Security", "Infrastructure", "Compliance"];
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const filteredProjects = selectedCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="projects-content">

            <h2 className="ubuntu-bold">Projects</h2>
            <p className="ubuntu-regular">DevSecOps and Infrastructure Security Projects</p>

            <div className="category-filter">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
                        {project.featured && <div className="featured-badge">Featured</div>}
                        
                        <div className="project-header">
                            <h3 className="ubuntu-medium">{project.title}</h3>
                            <span className="project-category">{project.category}</span>
                        </div>

                        <p className="project-description">{project.description}</p>

                        <div className="project-technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>

                        <div className="project-actions">
                            <Link to={`/projects/${project.id}`} className="view-details-btn">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
