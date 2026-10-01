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
            description: "Self-built web pentesting lab with vulnerable applications",
            longDescription: "Full web pentesting lab with OWASP Juice Shop, DVWA, Altoro Mutual, and custom applications. Exhaustive methodology documentation: initial reconnaissance, endpoint enumeration, exploitation of OWASP Top 10 vulnerabilities, and post-exploitation with access persistence. Every writeup includes screenshots, the payloads used, and mitigation recommendations.",
            technologies: ["Burp Suite", "OWASP ZAP", "SQLMap", "ffuf", "Python", "JavaScript"],
            category: "Pentesting",
            featured: true,
            challenges: [
                "Finding vulnerabilities in applications without documentation",
                "Documenting every step in a reproducible way",
                "Building custom payloads to bypass filters"
            ],
            achievements: [
                "Complete documentation of 10+ OWASP Top 10 vulnerabilities",
                "Step-by-step reproducible methodology",
                "Writeups with screenshots and working payloads"
            ],
            timeline: "Ongoing (2024 - Present)"
        },
        "privesc-arsenal": {
            id: "privesc-arsenal",
            title: "Privilege Escalation Arsenal",
            description: "Privilege escalation toolkit for Linux and Windows",
            longDescription: "Comprehensive privilege escalation toolkit for Linux and Windows environments, built as active preparation for the OSCP. Includes automated enumeration scripts (similar to LinPEAS/WinPEAS but focused on specific techniques), ready-to-use compiled exploits, and detailed documentation of each technique. Covers: SUID/SGID abuse, capabilities, cron jobs, PATH hijacking on Linux; Token Impersonation, SeBackupPrivilege, SeImpersonatePrivilege, UAC bypass, and service misconfigurations on Windows. Every technique includes real HTB cases and lab scenarios.",
            technologies: ["Python", "Bash", "PowerShell", "C", "Linux", "Windows", "Metasploit"],
            category: "Pentesting",
            featured: true,
            githubUrl: "https://github.com/example/privesc-arsenal",
            challenges: [
                "Compiling exploits for different kernel/OS versions",
                "Automating enumeration without leaving obvious traces",
                "Keeping the toolkit updated with new techniques"
            ],
            achievements: [
                "20+ documented and working Linux privesc techniques",
                "15+ Windows privesc techniques with automated scripts",
                "Used as an active reference during OSCP preparation"
            ],
            timeline: "Ongoing (2024 - Present)"
        },
        "pentest-reporting-engine": {
            id: "pentest-reporting-engine",
            title: "Custom Pentest Reporting Engine",
            description: "Professional pentest report generator",
            longDescription: "Pentest report generator built with React + TypeScript + Node.js. Customizable templates for different assessment types (web, network, AD), CVSS v3.1 scoring with a built-in calculator, interactive severity charts with Chart.js, and export to professional formats (PDF via Playwright, XLSX via ExcelJS). Designed to speed up post-pentest report generation while maintaining consistency and professionalism.",
            technologies: ["React", "TypeScript", "Node.js", "Chart.js", "Playwright", "ExcelJS"],
            category: "Tools",
            featured: true,
            githubUrl: "https://github.com/example/pentest-reporting-engine",
            challenges: [
                "Implementing correct CVSS v3.1 scoring with full vectors",
                "Generating PDFs with a professional and consistent format",
                "Keeping templates flexible for different assessment types"
            ],
            achievements: [
                "80% reduction in report generation time",
                "Templates for web, network, and AD assessments",
                "Export to PDF, XLSX, and DOCX"
            ],
            timeline: "3 months (2024)"
        },
        "recon-scanner": {
            id: "recon-scanner",
            title: "Automated Recon & Vulnerability Scanner",
            description: "Automated reconnaissance script for web pentesting",
            longDescription: "Automated reconnaissance pipeline for web pentesting. Orchestrates multiple tools in phases: subdomain enumeration (subfinder, assetfinder), port scanning (nmap, masscan), technology fingerprinting (httpx, wappalyzer), directory brute-forcing (ffuf, dirsearch), and vulnerability scanning (nuclei). Fully configurable pipeline via YAML, with structured JSON output for integration with other tools.",
            technologies: ["Python", "Bash", "subfinder", "httpx", "nuclei", "ffuf"],
            category: "Automation",
            featured: false,
            githubUrl: "https://github.com/example/recon-scanner",
            challenges: [
                "Orchestrating tools with different output formats",
                "Avoiding rate limiting and detection during scanning",
                "Prioritizing critical findings on large targets"
            ],
            achievements: [
                "Complete automation of the reconnaissance phase",
                "Unified JSON output for CI/CD pipelines",
                "Modular configuration per assessment type"
            ],
            timeline: "2 months (2024)"
        },
        "browser-extension-security-auditor": {
            id: "browser-extension-security-auditor",
            title: "Browser Extension Security Auditor",
            description: "Chrome/Firefox extension that audits website security in real time",
            longDescription: "Extension for Chrome and Firefox that audits website security in real time. Detects: missing or misconfigured security headers (HSTS, CSP, X-Frame-Options), cookies without Secure/HttpOnly/SameSite flags, CORS misconfigurations that allow external origins, CSP weaknesses that permit inline scripts, and exposure of sensitive information in the DOM. It takes advantage of a web development background to identify false positives and understand the context of each finding.",
            technologies: ["JavaScript", "Chrome Extensions API", "React"],
            category: "Web Security",
            featured: false,
            githubUrl: "https://github.com/example/browser-security-auditor",
            challenges: [
                "Accessing headers and cookies through the extension API",
                "Minimizing false positives with contextual analysis",
                "Maintaining compatibility between Chrome and Firefox APIs"
            ],
            achievements: [
                "Detection of 15+ types of security misconfigurations",
                "Clean interface with severity and recommendations",
                "Open source with community contributions"
            ],
            timeline: "2 months (2024)"
        },
        "ad-lab": {
            id: "ad-lab",
            title: "Active Directory Lab & Attack Paths",
            description: "AD lab with multiple domains and documented attack paths",
            longDescription: "Active Directory lab built at home with multiple domains, transitive and non-transitive trusts, and complex ACLs. Full attack path documentation: AS-REP roasting against users without pre-authentication, kerberoasting of SPNs, ACL abuse (ForceChangePassword, WriteOwner, GenericAll), DCSync to dump KRBTGT hashes, and Golden/Silver Ticket attacks. Relationship maps generated with BloodHound to visualize complete attack paths.",
            technologies: ["Windows Server", "BloodHound", "Impacket", "CrackMapExec", "Responder", "krbrelay"],
            category: "Pentesting",
            featured: false,
            challenges: [
                "Configuring trusts between domains with complex relationships",
                "Chaining multiple attacks into a single attack path",
                "Documenting ACL abuse paths with BloodHound"
            ],
            achievements: [
                "Multi-domain lab with trusts and complex ACLs",
                "Attack paths documented from standard user to DA",
                "Relationship maps generated with BloodHound Custom Queries"
            ],
            timeline: "Ongoing (2024 - Present)"
        },
        "secure-k8s-lab": {
            id: "secure-k8s-lab",
            title: "Kubernetes Security Hardening & Runtime Monitoring",
            description: "K8s cluster with full hardening and Falco runtime security",
            longDescription: "Kubernetes security lab deployed with kind. Complete hardening implementation: default-deny network policies, least-privilege RBAC with ServiceAccounts that don't automount tokens, Falco with the modern_ebpf driver for runtime threat detection (shells in containers, privileged mounts, sensitive writes), and alerting via falcosidekick. Includes automated scripts for deployment, security validation, and attack simulation to verify detection. STRIDE threat modeling applied to the cluster architecture.",
            technologies: ["Kubernetes", "Falco", "Calico", "Helm", "kind", "Bash"],
            category: "Kubernetes Security",
            featured: true,
            githubUrl: "https://github.com/example/secure-k8s-lab",
            challenges: [
                "Configuring Falco with eBPF without affecting cluster performance",
                "Defining network policies that don't break app functionality",
                "Simulating realistic attacks without damaging the lab environment"
            ],
            achievements: [
                "K8s cluster with fully automated defense-in-depth via scripts",
                "Falco detecting reverse shells, privileged mounts, and sensitive writes",
                "STRIDE threat modeling documented for each component"
            ],
            timeline: "3 months (2025)"
        },
        "wazuh-home-siem": {
            id: "wazuh-home-siem",
            title: "Home Lab SIEM with Wazuh",
            description: "Centralized SIEM with Wazuh, Sysmon, and security dashboards",
            longDescription: "Complete SIEM deployed with Wazuh all-in-one (manager + indexer + dashboard). Agents installed on Linux and Windows with enriched telemetry: Sysmon on Windows for detailed process and network connection logging, security auditing on Linux. Implemented detection use cases: brute force detection, FIM (File Integrity Monitoring) in critical directories, malware detection with YARA, and vulnerability scanning. Custom dashboards to visualize authentications, privilege changes, and security events in real time.",
            technologies: ["Wazuh", "Elasticsearch", "Sysmon", "Linux", "Windows", "YARA"],
            category: "SIEM",
            featured: false,
            challenges: [
                "Sizing SIEM resources for a home lab environment",
                "Enriching events with Sysmon without saturating the index",
                "Building dashboards that are useful and not just visual noise"
            ],
            achievements: [
                "Fully operational SIEM with agents on Linux and Windows",
                "Detection of brute force, FIM changes, and malware with YARA",
                "Security dashboards for real-time monitoring"
            ],
            timeline: "Ongoing (2025)"
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
