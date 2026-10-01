import React from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    team: "Red Team" | "Blue Team";
    featured: boolean;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: "web-pentest-writeups",
            title: "Web Application Pentest Lab — Writeups & Methodology",
            description: "Self-built web pentesting lab with vulnerable applications (OWASP Juice Shop, DVWA, Altoro Mutual). Full methodology documentation: reconnaissance → enumeration → exploitation → post-exploitation, with screenshots and findings.",
            technologies: ["Burp Suite", "OWASP ZAP", "SQLMap", "ffuf", "Python", "JavaScript"],
            category: "Pentesting",
            team: "Red Team",
            featured: true
        },
        {
            id: "privesc-arsenal",
            title: "Privilege Escalation Arsenal",
            description: "Privilege escalation toolkit for Linux and Windows. Automated enumeration scripts, compiled exploits, and documented techniques: SUID/Capabilities abuse, Token Impersonation, UAC bypass, SeBackupPrivilege, and more. Actively used for OSCP preparation.",
            technologies: ["Python", "Bash", "PowerShell", "C", "Linux", "Windows"],
            category: "Pentesting",
            team: "Red Team",
            featured: true
        },
        {
            id: "ad-lab",
            title: "Active Directory Lab & Attack Paths",
            description: "Home-built AD lab with multiple domains, trusts, and complex ACLs. Full attack path documentation: AS-REP roasting → kerberoasting → ACL abuse → DCSync. Relationship mapping with BloodHound.",
            technologies: ["Windows Server", "BloodHound", "Impacket", "CrackMapExec", "Responder", "krbrelay"],
            category: "Pentesting",
            team: "Red Team",
            featured: true
        },
        {
            id: "secure-k8s-lab",
            title: "Kubernetes Security Hardening & Runtime Monitoring",
            description: "K8s cluster with full hardening: network policies, least-privilege RBAC, Falco for runtime detection, and STRIDE threat modeling. Automated scripts for deployment and security validation.",
            technologies: ["Kubernetes", "Falco", "Calico", "Helm", "kind", "Bash"],
            category: "Kubernetes Security",
            team: "Blue Team",
            featured: true
        },
        {
            id: "wazuh-home-siem",
            title: "Home Lab SIEM with Wazuh",
            description: "Centralized SIEM using Wazuh all-in-one. Agents on Linux and Windows with Sysmon, FIM, vulnerability detection, and custom dashboards for real-time security monitoring.",
            technologies: ["Wazuh", "Elasticsearch", "Sysmon", "Linux", "Windows"],
            category: "SIEM",
            team: "Blue Team",
            featured: false
        }
    ];

    const teams = ["All", "Red Team", "Blue Team"];
    const [selectedTeam, setSelectedTeam] = React.useState("All");

    const filteredProjects = selectedTeam === "All" 
        ? projects 
        : projects.filter(project => project.team === selectedTeam);

    return (
        <div className="projects-content">

            <h2 className="ubuntu-bold">Projects</h2>
            <p className="ubuntu-regular">Red Team · Blue Team · Security Projects</p>

            <div className="category-filter">
                {teams.map(team => (
                    <button
                        key={team}
                        className={`category-btn ${selectedTeam === team ? 'active' : ''}`}
                        onClick={() => setSelectedTeam(team)}
                    >
                        {team}
                    </button>
                ))}
            </div>
            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
                        {project.featured && <div className="featured-badge">Featured</div>}
                        
                        <div className="project-header">
                            <h3 className="ubuntu-medium">{project.title}</h3>
                            <span className="project-category">{project.team}</span>
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
