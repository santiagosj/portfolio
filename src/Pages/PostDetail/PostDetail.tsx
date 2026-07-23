import React from "react";
import { useParams, Link } from "react-router-dom";
import "./PostDetail.scss";

interface PostDetail {
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

const PostDetail: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();

    const postsData: Record<string, PostDetail> = {
        "devsecops-best-practices": {
            id: "devsecops-best-practices",
            title: "Understanding DevSecOps Best Practices",
            description: "Comprehensive guide exploring essential components of DevSecOps",
            longDescription: "In today's rapidly evolving threat landscape, implementing robust DevSecOps practices is crucial for maintaining security and operational efficiency. This comprehensive guide explores the essential components that form the foundation of a successful DevSecOps strategy, from Infrastructure as Code to continuous security monitoring.",
            technologies: ["IaC", "CI/CD", "Monitoring", "Compliance", "Automation"],
            category: "DevSecOps",
            featured: true,
            challenges: [
                "Integrating security without slowing down development velocity",
                "Cultural shift from siloed teams to collaborative DevSecOps",
                "Managing security tool sprawl and integration complexity"
            ],
            achievements: [
                "Published comprehensive guide adopted by 10+ organizations",
                "Created reusable security templates and playbooks",
                "Established metrics-driven security measurement framework"
            ],
            timeline: "2024"
        },
        "container-security": {
            id: "container-security",
            title: "Container Security Best Practices",
            description: "Essential practices for securing containerized environments",
            longDescription: "Container security is a critical aspect of modern DevSecOps, providing isolation and consistent runtime environments. This guide covers comprehensive container security from image selection to runtime protection, including orchestration strategies and compliance considerations.",
            technologies: ["Docker", "Kubernetes", "Security", "Compliance", "Runtime Protection"],
            category: "Security",
            featured: true,
            challenges: [
                "Balancing security hardening with container performance",
                "Managing secrets and sensitive data in containers",
                "Implementing zero-trust networking for microservices"
            ],
            achievements: [
                "Developed container hardening checklist used across teams",
                "Created automated container scanning pipeline",
                "Reduced container security incidents by 75%"
            ],
            timeline: "2024"
        },
        "cloud-security-architecture": {
            id: "cloud-security-architecture",
            title: "Cloud Security Architecture",
            description: "Designing secure multi-layered cloud architectures",
            longDescription: "Designing a secure cloud architecture requires a comprehensive approach that addresses multiple layers of security while maintaining scalability and operational efficiency. This post covers identity management, network security, data protection, and application security across AWS and Azure environments.",
            technologies: ["AWS", "Azure", "Zero-Trust", "Encryption", "IAM"],
            category: "Architecture",
            featured: false,
            challenges: [
                "Implementing consistent security across multi-cloud",
                "Managing identity federation and access controls",
                "Ensuring compliance in distributed environments"
            ],
            achievements: [
                "Designed reference architecture adopted organization-wide",
                "Implemented automated compliance validation",
                "Reduced cloud security misconfigurations by 90%"
            ],
            timeline: "2024"
        },
        "kubernetes-security": {
            id: "kubernetes-security",
            title: "Kubernetes Security Hardening",
            description: "Comprehensive security framework for Kubernetes clusters",
            longDescription: "A deep dive into Kubernetes security hardening techniques including network policies, RBAC implementation, runtime security monitoring with Falco, and policy enforcement using OPA/Gatekeeper. Covers practical implementation strategies for production environments.",
            technologies: ["Kubernetes", "Falco", "OPA", "Network Policies", "RBAC"],
            category: "Security",
            featured: false,
            challenges: [
                "Implementing defense-in-depth for container orchestration",
                "Managing RBAC at scale across multiple clusters",
                "Real-time threat detection in dynamic environments"
            ],
            achievements: [
                "Created Kubernetes security policy library",
                "Implemented automated security scanning for K8s manifests",
                "Achieved SOC2 compliance for Kubernetes workloads"
            ],
            timeline: "2024"
        },
        "infrastructure-as-code": {
            id: "infrastructure-as-code",
            title: "Infrastructure as Code Guide",
            description: "Best practices for Terraform and cloud automation",
            longDescription: "Comprehensive guide to implementing infrastructure as code with Terraform, covering state management, security best practices, cost optimization strategies, and multi-cloud deployment patterns. Includes practical examples and reusable modules.",
            technologies: ["Terraform", "Terragrunt", "AWS", "Azure", "Cost Optimization"],
            category: "Infrastructure",
            featured: true,
            challenges: [
                "Managing state and secrets at enterprise scale",
                "Implementing cost-effective infrastructure patterns",
                "Ensuring security compliance in IaC workflows"
            ],
            achievements: [
                "Built reusable Terraform module library",
                "Implemented automated cost analysis with Infracost",
                "Reduced infrastructure provisioning time by 80%"
            ],
            timeline: "2024"
        },
        "security-monitoring": {
            id: "security-monitoring",
            title: "Security Monitoring & SIEM",
            description: "Building comprehensive security monitoring solutions",
            longDescription: "Deep dive into building comprehensive security monitoring solutions with SIEM integration, automated threat detection, and incident response workflows. Covers ELK Stack, Prometheus, Grafana, and specialized tools like Wazuh for security analytics.",
            technologies: ["ELK", "Prometheus", "Grafana", "Wazuh", "SIEM"],
            category: "Monitoring",
            featured: false,
            challenges: [
                "Processing high-volume security events efficiently",
                "Reducing false positives while maintaining coverage",
                "Integrating multiple security tools into unified view"
            ],
            achievements: [
                "Built centralized security monitoring platform",
                "Reduced incident response time by 70%",
                "Achieved 95% alert accuracy through tuning"
            ],
            timeline: "2024"
        }
    };

    const post = postsData[postId || ""];

    if (!post) {
        return (
            <div className="post-detail">
                <h2 className="ubuntu-bold">Post Not Found</h2>
                <p>The post you're looking for doesn't exist.</p>
                <Link to="/posts" className="back-link">← Back to Posts</Link>
            </div>
        );
    }

    return (
        <div className="post-detail">
            <Link to="/posts" className="back-link">← Back to Posts</Link>
            
            <div className="post-header">
                <h1 className="ubuntu-bold">{post.title}</h1>
                <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    {post.featured && <span className="featured-badge">Featured</span>}
                </div>
            </div>

            <div className="post-overview">
                <p className="post-description">{post.longDescription}</p>
                
                <div className="post-info-grid">
                    <div className="info-section">
                        <h3 className="ubuntu-medium">Technologies</h3>
                        <div className="tech-list">
                            {post.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="info-section">
                        <h3 className="ubuntu-medium">Timeline</h3>
                        <p>{post.timeline}</p>
                    </div>
                </div>
            </div>

            <div className="post-sections">
                <div className="section">
                    <h3 className="ubuntu-medium">Key Challenges</h3>
                    <ul>
                        {post.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                        ))}
                    </ul>
                </div>

                <div className="section">
                    <h3 className="ubuntu-medium">Key Takeaways</h3>
                    <ul>
                        {post.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="post-links">
                {post.githubUrl && (
                    <a href={post.githubUrl} target="_blank" rel="noopener noreferrer" className="post-link">
                        View Code →
                    </a>
                )}
            </div>
        </div>
    );
};

export default PostDetail;
