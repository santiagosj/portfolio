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
            description: "Laboratorio propio de pentesting web con aplicaciones vulnerables (OWASP Juice Shop, DVWA, Altoro Mutual). Documentacion completa de metodologia: reconocimiento → enumeracion → explotacion → post-explotacion, con screenshots y hallazgos.",
            technologies: ["Burp Suite", "OWASP ZAP", "SQLMap", "ffuf", "Python", "JavaScript"],
            category: "Pentesting",
            team: "Red Team",
            featured: true
        },
        {
            id: "privesc-arsenal",
            title: "Privilege Escalation Arsenal",
            description: "Toolkit de escalada de privilegios para Linux y Windows. Scripts de enumeracion automatizada, exploits compilados, y tecnicas documentadas: SUID/Capabilities abuse, Token Impersonation, UAC bypass, SeBackupPrivilege, y mas. Preparacion activa para OSCP.",
            technologies: ["Python", "Bash", "PowerShell", "C", "Linux", "Windows"],
            category: "Pentesting",
            team: "Red Team",
            featured: true
        },
        {
            id: "ad-lab",
            title: "Active Directory Lab & Attack Paths",
            description: "Laboratorio de AD montado en casa con multiples dominios, trusts, y ACLs complejas. Documentacion de attack paths completos: AS-REP roasting → kerberoasting → ACL abuse → DCSync. Mapa de relaciones con BloodHound.",
            technologies: ["Windows Server", "BloodHound", "Impacket", "CrackMapExec", "Responder", "krbrelay"],
            category: "Pentesting",
            team: "Red Team",
            featured: true
        },
        {
            id: "secure-k8s-lab",
            title: "Kubernetes Security Hardening & Runtime Monitoring",
            description: "Cluster K8s con hardening completo: network policies, RBAC de minimo privilegio, Falco para deteccion en runtime, y threat modeling STRIDE. Scripts automatizados para deploy y validacion de seguridad.",
            technologies: ["Kubernetes", "Falco", "Calico", "Helm", "kind", "Bash"],
            category: "Kubernetes Security",
            team: "Blue Team",
            featured: true
        },
        {
            id: "wazuh-home-siem",
            title: "Home Lab SIEM con Wazuh",
            description: "SIEM centralizado con Wazuh all-in-one. Agentes en Linux y Windows con Sysmon, FIM, deteccion de vulnerabilidades, y dashboards personalizados para monitoreo de seguridad en tiempo real.",
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
