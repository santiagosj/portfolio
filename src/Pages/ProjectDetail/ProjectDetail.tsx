import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.scss";

interface ProjectDetail {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    category: string;
    featured: boolean;
    githubUrl?: string;
    liveUrl?: string;
    challenges: string[];
    achievements: string[];
    timeline: string;
}

const ProjectDetail: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();

    const projectsData: Record<string, ProjectDetail> = {
        "secure-cicd-pipeline": {
            id: "secure-cicd-pipeline",
            title: "Secure CI/CD Pipeline",
            description: "Enterprise-grade CI/CD pipeline with integrated security scanning",
            longDescription: "A comprehensive CI/CD solution that integrates security scanning at every stage of the development lifecycle. This pipeline implements automated vulnerability scanning, dependency checks, code quality analysis, and compliance validation to ensure secure software delivery.",
            technologies: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Trivy", "OWASP Dependency Check"],
            category: "DevSecOps",
            featured: true,
            githubUrl: "https://github.com/example/secure-cicd",
            challenges: [
                "Integrating multiple security tools without slowing down deployment",
                "Implementing proper secret management across the pipeline",
                "Ensuring compliance with industry security standards"
            ],
            achievements: [
                "Reduced security vulnerabilities by 60% in production",
                "Achieved 99.9% uptime with zero-downtime deployments",
                "Passed SOC2 Type II compliance audit"
            ],
            timeline: "6 months (2023)"
        },
        "kubernetes-security-hardening": {
            id: "kubernetes-security-hardening",
            title: "Kubernetes Security Hardening",
            description: "Comprehensive security framework for Kubernetes clusters",
            longDescription: "A multi-layered security approach for Kubernetes environments implementing network policies, RBAC, pod security standards, runtime security monitoring, and automated compliance checking.",
            technologies: ["Kubernetes", "Falco", "OPA/Gatekeeper", "Istio", "Calico", "Kyverno"],
            category: "Security",
            featured: true,
            githubUrl: "https://github.com/example/k8s-security",
            challenges: [
                "Balancing security with developer productivity",
                "Implementing fine-grained network policies",
                "Real-time threat detection and response"
            ],
            achievements: [
                "Zero security incidents in 12 months",
                "Automated 90% of security compliance checks",
                "Reduced attack surface by 75%"
            ],
            timeline: "4 months (2023)"
        },
        "infrastructure-as-code": {
            id: "infrastructure-as-code",
            title: "Infrastructure as Code Platform",
            description: "Terraform-based infrastructure automation with multi-cloud support",
            longDescription: "Enterprise infrastructure as code solution supporting multiple cloud providers with cost optimization, automated testing, and compliance validation.",
            technologies: ["Terraform", "AWS", "Azure", "Terragrunt", "Infracost", "Checkov"],
            category: "Infrastructure",
            featured: false,
            githubUrl: "https://github.com/example/iac-platform",
            challenges: [
                "Managing multi-cloud infrastructure complexity",
                "Implementing proper state management",
                "Cost optimization without sacrificing security"
            ],
            achievements: [
                "Reduced infrastructure provisioning time by 80%",
                "Achieved 30% cost savings through optimization",
                "100% infrastructure compliance with security policies"
            ],
            timeline: "3 months (2022)"
        },
        "security-monitoring": {
            id: "security-monitoring",
            title: "Security Monitoring Dashboard",
            description: "Real-time security monitoring and alerting system",
            longDescription: "Comprehensive security monitoring solution with SIEM integration, automated threat detection, and incident response workflows.",
            technologies: ["ELK Stack", "Prometheus", "Grafana", "Wazuh", "TheHive", "Cortex"],
            category: "Security",
            featured: false,
            githubUrl: "https://github.com/example/security-monitoring",
            challenges: [
                "Processing high-volume security logs",
                "Reducing false positive alerts",
                "Integrating multiple security tools"
            ],
            achievements: [
                "Reduced incident response time by 70%",
                "Achieved 95% alert accuracy",
                "Monitored 500+ security events per second"
            ],
            timeline: "5 months (2023)"
        },
        "container-security": {
            id: "container-security",
            title: "Container Security Scanner",
            description: "Automated container vulnerability scanning and image signing",
            longDescription: "End-to-end container security solution implementing vulnerability scanning, image signing, policy enforcement, and runtime protection.",
            technologies: ["Docker", "Trivy", "Notary", "Harbor", "Kyverno", "Sigstore"],
            category: "Security",
            featured: true,
            githubUrl: "https://github.com/example/container-security",
            challenges: [
                "Scanning containers without impacting build performance",
                "Implementing proper key management for image signing",
                "Enforcing policies across different environments"
            ],
            achievements: [
                "Scanned 10,000+ containers per day",
                "Prevented 200+ vulnerable deployments",
                "Achieved 100% container image signing compliance"
            ],
            timeline: "4 months (2023)"
        },
        "compliance-automation": {
            id: "compliance-automation",
            title: "Compliance Automation Framework",
            description: "Automated compliance reporting and audit trail system",
            longDescription: "Automated compliance management system supporting SOC2, ISO27001, and CIS benchmarks with continuous monitoring and reporting.",
            technologies: ["Python", "AWS Config", "OpenSCAP", "CIS Benchmarks", "Aqua Security"],
            category: "Compliance",
            featured: false,
            githubUrl: "https://github.com/example/compliance-framework",
            challenges: [
                "Mapping technical controls to compliance requirements",
                "Automating evidence collection",
                "Maintaining audit trail integrity"
            ],
            achievements: [
                "Reduced audit preparation time by 85%",
                "Achieved 100% compliance with SOC2 Type II",
                "Automated 95% of evidence collection"
            ],
            timeline: "6 months (2022-2023)"
        }
    };

    const project = projectsData[projectId || ""];

    if (!project) {
        return (
            <div className="project-detail">
                <h2 className="ubuntu-bold">Project Not Found</h2>
                <p>The project you're looking for doesn't exist.</p>
                <Link to="/projects" className="back-link">← Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="project-detail">
            <Link to="/projects" className="back-link">← Back to Projects</Link>
            
            <div className="project-header">
                <h1 className="ubuntu-bold">{project.title}</h1>
                <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    {project.featured && <span className="featured-badge">Featured Project</span>}
                </div>
            </div>

            <div className="project-overview">
                <p className="project-description">{project.longDescription}</p>
                
                <div className="project-info-grid">
                    <div className="info-section">
                        <h3 className="ubuntu-medium">Technologies Used</h3>
                        <div className="tech-list">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="info-section">
                        <h3 className="ubuntu-medium">Timeline</h3>
                        <p>{project.timeline}</p>
                    </div>
                </div>
            </div>

            <div className="project-sections">
                <div className="section">
                    <h3 className="ubuntu-medium">Challenges</h3>
                    <ul>
                        {project.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                        ))}
                    </ul>
                </div>

                <div className="section">
                    <h3 className="ubuntu-medium">Achievements</h3>
                    <ul>
                        {project.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="project-links">
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        View on GitHub →
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Live Demo →
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
