import React from "react";
import "./About.scss";

const About: React.FC = () => {
    return (
        <div className="about-content">
            <h2 className="ubuntu-bold">About Me</h2>

            <div className="about-section">
                <h4 className="">Professional Summary</h4>
                <p className="">
                    Passionate DevSecOps engineer with expertise in building secure, scalable, and automated infrastructure. 
                    I specialize in implementing security best practices throughout the development lifecycle, ensuring 
                    robust CI/CD pipelines and cloud-native solutions.
                </p>
            </div>

            <div className="skills-section">
                <h4 className="">Core Competencies</h4>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h5>Cloud & Infrastructure</h5>
                        <ul>
                            <li>AWS, Azure, GCP</li>
                            <li>Kubernetes & Docker</li>
                            <li>Terraform & CloudFormation</li>
                            <li>Ansible & Puppet</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h5>Security</h5>
                        <ul>
                            <li>SAST/DAST Tools</li>
                            <li>SIEM Implementation</li>
                            <li>Penetration Testing</li>
                            <li>Compliance (SOC2, ISO27001)</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h5>DevOps Tools</h5>
                        <ul>
                            <li>Jenkins, GitLab CI, GitHub Actions</li>
                            <li>Prometheus & Grafana</li>
                            <li>ELK Stack</li>
                            <li>ArgoCD & Helm</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="experience-section">
                <h4 className="">Experience</h4>
                <div className="experience-item">
                    <h5>Senior DevSecOps Engineer</h5>
                    <p className="company">Tech Company • 2022 - Present</p>
                    <ul>
                        <li>Led security integration in CI/CD pipelines reducing vulnerabilities by 60%</li>
                        <li>Implemented automated security scanning and compliance checks</li>
                        <li>Managed Kubernetes clusters with 99.9% uptime</li>
                    </ul>
                </div>
            </div>

            <div className="education-section">
                <h4 className="">Education & Certifications</h4>
                <ul>
                    <li>Bachelor's in Computer Science</li>
                    <li>AWS Certified DevOps Engineer</li>
                    <li>Certified Kubernetes Security Specialist (CKS)</li>
                    <li>CompTIA Security+</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
