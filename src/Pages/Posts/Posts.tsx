import React from "react";
import { Link } from "react-router-dom";
import "./Posts.scss";

interface Post {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    featured: boolean;
}

const Posts: React.FC = () => {
    const posts: Post[] = [
        {
            id: "devsecops-best-practices",
            title: "Understanding DevSecOps Best Practices",
            description: "Comprehensive guide exploring essential components that form the foundation of a successful DevSecOps strategy in today's evolving threat landscape.",
            technologies: ["IaC", "CI/CD", "Monitoring", "Compliance"],
            category: "DevSecOps",
            featured: true
        },
        {
            id: "container-security",
            title: "Container Security Best Practices",
            description: "Essential practices for securing containerized environments including image security, runtime protection, and orchestration strategies.",
            technologies: ["Docker", "Kubernetes", "Security", "Compliance"],
            category: "Security",
            featured: true
        },
        {
            id: "cloud-security-architecture",
            title: "Cloud Security Architecture",
            description: "Designing secure cloud architectures with multi-layered security approach while maintaining scalability and operational efficiency.",
            technologies: ["AWS", "Azure", "Zero-Trust", "Encryption"],
            category: "Architecture",
            featured: false
        },
        {
            id: "kubernetes-security",
            title: "Kubernetes Security Hardening",
            description: "Comprehensive security framework for Kubernetes clusters including network policies, RBAC, and runtime security monitoring strategies.",
            technologies: ["Kubernetes", "Falco", "OPA", "Network Policies"],
            category: "Security",
            featured: false
        },
        {
            id: "infrastructure-as-code",
            title: "Infrastructure as Code Guide",
            description: "Best practices for implementing infrastructure as code with Terraform, including state management, security, and cost optimization.",
            technologies: ["Terraform", "Terragrunt", "AWS", "Azure"],
            category: "Infrastructure",
            featured: true
        },
        {
            id: "security-monitoring",
            title: "Security Monitoring & SIEM",
            description: "Building comprehensive security monitoring solutions with SIEM integration, automated threat detection, and incident response workflows.",
            technologies: ["ELK", "Prometheus", "Grafana", "Wazuh"],
            category: "Monitoring",
            featured: false
        }
    ];

    const categories = ["All", "DevSecOps", "Security", "Architecture", "Infrastructure", "Monitoring"];
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const filteredPosts = selectedCategory === "All" 
        ? posts 
        : posts.filter(post => post.category === selectedCategory);

    return (
        <div className="posts-content">

            <h2 className="ubuntu-bold">Posts</h2>
            <p className="ubuntu-regular">Technical Blog and DevSecOps Insights</p>

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
            <div className="posts-grid">
                {filteredPosts.map(post => (
                    <div key={post.id} className={`post-card ${post.featured ? 'featured' : ''}`}>
                        {post.featured && <div className="featured-badge">Featured</div>}
                        
                        <div className="post-header">
                            <h3 className="ubuntu-medium">{post.title}</h3>
                            <span className="post-category">{post.category}</span>
                        </div>

                        <p className="post-description">{post.description}</p>

                        <div className="post-technologies">
                            {post.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>

                        <div className="post-actions">
                            <Link to={`/posts/${post.id}`} className="view-details-btn">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
