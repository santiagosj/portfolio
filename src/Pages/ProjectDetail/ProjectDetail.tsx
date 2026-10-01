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
        "web-pentest-writeups": {
            id: "web-pentest-writeups",
            title: "Web Application Pentest Lab — Writeups & Methodology",
            description: "Laboratorio propio de pentesting web con aplicaciones vulnerables",
            longDescription: "Laboratorio completo de pentesting web con OWASP Juice Shop, DVWA, Altoro Mutual y aplicaciones custom. Documentación exhaustiva de metodología: reconocimiento inicial, enumeración de endpoints, explotación de vulnerabilidades OWASP Top 10, y post-explotación con persistencia de acceso. Cada writeup incluye screenshots, payloads utilizados, y recomendaciones de mitigación.",
            technologies: ["Burp Suite", "OWASP ZAP", "SQLMap", "ffuf", "Python", "JavaScript"],
            category: "Pentesting",
            featured: true,
            challenges: [
                "Encontrar vulnerabilidades en aplicaciones que no tienen documentación",
                "Documentar cada paso de forma reproducible",
                "Crear payloads personalizados para bypass de filtros"
            ],
            achievements: [
                "Documentación completa de 10+ vulnerabilidades OWASP Top 10",
                "Metodología reproducible paso a paso",
                "Writeups con screenshots y payloads funcionales"
            ],
            timeline: "En curso (2024 - Presente)"
        },
        "privesc-arsenal": {
            id: "privesc-arsenal",
            title: "Privilege Escalation Arsenal",
            description: "Toolkit de escalada de privilegios para Linux y Windows",
            longDescription: "Toolkit integral de escalada de privilegios para entornos Linux y Windows, construido como preparacion activa para el OSCP. Incluye scripts de enumeracion automatizada (similares a LinPEAS/WinPEAS pero con enfoque en técnicas específicas), exploits compilados listos para usar, y documentacion detallada de cada técnica. Cubre: abuso de SUID/SGID, capabilities, cron jobs, PATH hijacking en Linux; Token Impersonation, SeBackupPrivilege, SeImpersonatePrivilege, UAC bypass, service misconfigurations en Windows. Cada técnica incluye casos reales de HTB y labs.",
            technologies: ["Python", "Bash", "PowerShell", "C", "Linux", "Windows", "Metasploit"],
            category: "Pentesting",
            featured: true,
            githubUrl: "https://github.com/example/privesc-arsenal",
            challenges: [
                "Compilar exploits para distintas versiones de kernel/OS",
                "Automatizar enumeracion sin dejar trazas evidentes",
                "Mantener el toolkit actualizado con nuevas técnicas"
            ],
            achievements: [
                "20+ técnicas de Linux privesc documentadas y funcionales",
                "15+ técnicas de Windows privesc con scripts automatizados",
                "Usado como referencia activa en preparacion OSCP"
            ],
            timeline: "En curso (2024 - Presente)"
        },
        "pentest-reporting-engine": {
            id: "pentest-reporting-engine",
            title: "Custom Pentest Reporting Engine",
            description: "Generador de reportes de pentest profesionales",
            longDescription: "Generador de reportes de pentest construido con React + TypeScript + Node.js. Templates personalizables para diferentes tipos de assessments (web, network, AD), scoring CVSS v3.1 con calculadora integrada, gráficos de severidad interactivos con Chart.js, y exportación a formatos profesionales (PDF con Playwright, XLSX con ExcelJS). Diseñado para acelerar la generación de reportes post-pentest manteniendo consistencia y profesionalismo.",
            technologies: ["React", "TypeScript", "Node.js", "Chart.js", "Playwright", "ExcelJS"],
            category: "Tools",
            featured: true,
            githubUrl: "https://github.com/example/pentest-reporting-engine",
            challenges: [
                "Implementar scoring CVSS v3.1 correcto con vectores completos",
                "Generar PDFs con formato profesional y consistente",
                "Mantener templates flexibles para distintos tipos de assessments"
            ],
            achievements: [
                "Reducción del 80% en tiempo de generación de reportes",
                "Templates para web, network y AD assessments",
                "Exportación a PDF, XLSX y DOCX"
            ],
            timeline: "3 meses (2024)"
        },
        "recon-scanner": {
            id: "recon-scanner",
            title: "Automated Recon & Vulnerability Scanner",
            description: "Script de automatización de reconocimiento para pentesting web",
            longDescription: "Pipeline automatizado de reconocimiento para pentesting web. Orquesta múltiples herramientas en fases: subdomain enumeration (subfinder, assetfinder), port scanning (nmap, masscan), technology fingerprinting (httpx, wappalyzer), directory brute-forcing (ffuf, dirsearch), y vulnerability scanning (nuclei). Pipeline completamente configurable vía YAML, con output estructurado en JSON para integración con otras herramientas.",
            technologies: ["Python", "Bash", "subfinder", "httpx", "nuclei", "ffuf"],
            category: "Automation",
            featured: false,
            githubUrl: "https://github.com/example/recon-scanner",
            challenges: [
                "Orquestar herramientas con distintos formatos de output",
                "Evitar rate limiting y detección durante el escaneo",
                "Priorizar hallazgos críticos en targets grandes"
            ],
            achievements: [
                "Automatización completa de la fase de reconocimiento",
                "Output unificado en JSON para pipeline CI/CD",
                "Configuración modular por tipo de assessment"
            ],
            timeline: "2 meses (2024)"
        },
        "browser-extension-security-auditor": {
            id: "browser-extension-security-auditor",
            title: "Browser Extension Security Auditor",
            description: "Chrome/Firefox extension que analiza seguridad de sitios web en tiempo real",
            longDescription: "Extensión para Chrome y Firefox que audita la seguridad de sitios web en tiempo real. Detecta: missing o malconfigurados security headers (HSTS, CSP, X-Frame-Options), cookies sin flags Secure/HttpOnly/SameSite, CORS misconfigurations que permiten origins externos, CSP weaknesses que permiten inline scripts, y exposición de información sensible en el DOM. Aprovecha el background en desarrollo web para identificar falsos positivos y entender el contexto de cada hallazgo.",
            technologies: ["JavaScript", "Chrome Extensions API", "React"],
            category: "Web Security",
            featured: false,
            githubUrl: "https://github.com/example/browser-security-auditor",
            challenges: [
                "Acceder a headers y cookies desde la extension API",
                "Minimizar falsos positivos con análisis contextual",
                "Mantener compatibilidad entre Chrome y Firefox APIs"
            ],
            achievements: [
                "Detección de 15+ tipos de misconfiguraciones de seguridad",
                "Interfaz limpia con severidad y recomendaciones",
                "Open source con contribuciones de la comunidad"
            ],
            timeline: "2 meses (2024)"
        },
        "ad-lab": {
            id: "ad-lab",
            title: "Active Directory Lab & Attack Paths",
            description: "Laboratorio de AD con múltiples dominios y attack paths documentados",
            longDescription: "Laboratorio de Active Directory montado en casa con múltiples dominios, trusts transitivos y no transitivos, y ACLs complejas. Documentación completa de attack paths: AS-REP roasting contra usuarios sin pre-autenticación, kerberoasting de SPNs, abuso de ACLs (ForceChangePassword, WriteOwner, GenericAll), DCSync para dumpear hashes de KRBTGT, y Golden/Silver Ticket attacks. Mapa de relaciones generado con BloodHound para visualizar attack paths completos.",
            technologies: ["Windows Server", "BloodHound", "Impacket", "CrackMapExec", "Responder", "krbrelay"],
            category: "Pentesting",
            featured: false,
            challenges: [
                "Configurar trusts entre dominios con relaciones complejas",
                "Encadenar múltiples ataques en un solo attack path",
                "Documentar ACL abuse paths con BloodHound"
            ],
            achievements: [
                "Lab multi-dominio con trusts y ACLs complejas",
                "Attack paths documentados desde usuario estándar hasta DA",
                "Mapas de relación generados con BloodHound Custom Queries"
            ],
            timeline: "En curso (2024 - Presente)"
        },
        "secure-k8s-lab": {
            id: "secure-k8s-lab",
            title: "Kubernetes Security Hardening & Runtime Monitoring",
            description: "Cluster K8s con hardening completo y Falco runtime security",
            longDescription: "Laboratorio de seguridad en Kubernetes desplegado con kind. Implementación completa de hardening: default-deny network policies, RBAC de mínimo privilegio con ServiceAccount sin automount de tokens, Falco con driver modern_ebpf para detección de amenazas en runtime (shell en containers, mount privilegiados, writes sensibles), y alertas vía falcosidekick. Incluye scripts automatizados para deploy, validación de seguridad, y simulación de ataques para verificar detección. Threat modeling STRIDE aplicado a la arquitectura del cluster.",
            technologies: ["Kubernetes", "Falco", "Calico", "Helm", "kind", "Bash"],
            category: "Kubernetes Security",
            featured: true,
            githubUrl: "https://github.com/example/secure-k8s-lab",
            challenges: [
                "Configurar Falco con eBPF sin afectar performance del cluster",
                "Definir network policies que no rompan la funcionalidad de la app",
                "Simular ataques realistas sin dañar el ambiente de laboratorio"
            ],
            achievements: [
                "Cluster K8s con defense-in-depth fully automated via scripts",
                "Falco detectando shells reversos, mount privilegiados y writes sensibles",
                "Threat modeling STRIDE documentado para cada componente"
            ],
            timeline: "3 meses (2025)"
        },
        "wazuh-home-siem": {
            id: "wazuh-home-siem",
            title: "Home Lab SIEM con Wazuh",
            description: "SIEM centralizado con Wazuh, Sysmon y dashboards de seguridad",
            longDescription: "SIEM completo desplegado con Wazuh all-in-one (manager + indexer + dashboard). Agentes instalados en Linux y Windows con telemetría enriquecida: Sysmon en Windows para logging detallado de procesos y conexiones de red, auditoría de seguridad en Linux. Casos de uso de detección implementados: brute force detection, FIM (File Integrity Monitoring) en directorios críticos, detección de malware con YARA, y escaneo de vulnerabilidades. Dashboards personalizados para visualizar autenticaciones, cambios de privilegios y eventos de seguridad en tiempo real.",
            technologies: ["Wazuh", "Elasticsearch", "Sysmon", "Linux", "Windows", "YARA"],
            category: "SIEM",
            featured: false,
            challenges: [
                "Dimensionar recursos del SIEM para el laboratorio doméstico",
                "Enriquecer eventos con Sysmon sin saturar el índice",
                "Crear dashboards útiles que no sean solo ruido visual"
            ],
            achievements: [
                "SIEM fully operational con agentes en Linux y Windows",
                "Detección de brute force, cambios FIM y malware con YARA",
                "Dashboards de seguridad para monitoreo en tiempo real"
            ],
            timeline: "En curso (2025)"
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
