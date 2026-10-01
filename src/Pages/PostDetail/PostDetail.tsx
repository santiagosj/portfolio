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
        "htb-linux-privesc": {
            id: "htb-linux-privesc",
            title: "HTB: Linux Privilege Escalation Deep Dive",
            description: "Writeup detallado de técnicas de escalada de privilegios en Linux en máquinas HTB",
            longDescription: "Compilado de writeups enfocados en escalada de privilegios Linux de múltiples máquinas HTB. Cada técnica documentada con: reconocimiento inicial del sistema, enumeración de vectores de escalada, explotación paso a paso, y post-explotación. Cubre abuso de SUID/SGID binaries, Linux capabilities malconfiguradas, cron jobs con scripts modificables, LPE via kernel exploits (DirtyPipe, OverlayFS), PATH hijacking, y abuso de sudo rules. Incluye outputs reales, comandos exactos y razonamiento detrás de cada decisión.",
            technologies: ["Linux", "Bash", "Python", "GTFOBins", "pspy", "linpeas", "enumy"],
            category: "HTB",
            featured: true,
            challenges: [
                "Identificar el vector correcto entre múltiples posibilidades",
                "Kernel exploits que requieren versiones específicas",
                "Máquinas con múltiples capas de escalada encadenadas"
            ],
            achievements: [
                "8+ máquinas HTB de Linux privesc documentadas",
                "Cobertura de 15+ técnicas distintas de escalada",
                "Metodología reproducible para cualquier máquina Linux"
            ],
            timeline: "2024 - Presente"
        },
        "htb-windows-privesc": {
            id: "htb-windows-privesc",
            title: "HTB: Windows Privilege Escalation Techniques",
            description: "Técnicas de escalada de privilegios en Windows de máquinas HTB",
            longDescription: "Writeups detallados de escalada de privilegios en Windows de máquinas HTB. Cubre: Token Impersonation con RoguePotato/JuicyPotato, abuso de SeBackupPrivilege para dumpear SAM/SYSTEM, SeImpersonatePrivilege, UAC bypass por registry/modifiable path, service misconfigurations (binPath, unquoted paths, weak permissions), DLL hijacking en servicios y aplicaciones, AlwaysInstallElevated para MSI maliciosos, y abuso de scheduled tasks. Incluye scripts de PowerShell custom y compilación de exploits en C#.",
            technologies: ["Windows", "PowerShell", "WinPEAS", "SharpUp", "Metasploit", "C#"],
            category: "HTB",
            featured: true,
            challenges: [
                "Compilar exploits para versiones específicas de Windows",
                "Bypass de AV y Windows Defender durante la explotación",
                "Técnicas que requieren múltiples pasos encadenados"
            ],
            achievements: [
                "10+ técnicas de Windows privesc documentadas de HTB",
                "Scripts de PowerShell custom para automatización",
                "Guía de bypass de AV para cada técnica"
            ],
            timeline: "2024 - Presente"
        },
        "htb-ad-attacks": {
            id: "htb-ad-attacks",
            title: "HTB: Active Directory Attack Paths",
            description: "Writeups de máquinas HTB con Active Directory y attack paths completos",
            longDescription: "Compilado de writeups de máquinas HTB enfocadas en Active Directory. Documentación de attack paths completos desde usuario estándar hasta Domain Admin: AS-REP roasting contra usuarios sin pre-autenticación, kerberoasting de SPNs, abuso de ACLs (ForceChangePassword, WriteOwner, GenericAll, GenericWrite), DCSync para dumpear hashes de KRBTGT, Kerberos delegation (unconstrained, constrained, resource-based), y ataque a trusts de dominio. Mapas de attack paths generados con BloodHound y CustomQueries para identificar rutas críticas.",
            technologies: ["BloodHound", "Impacket", "Responder", "CrackMapExec", "AD", "Kerberos", "LDAP"],
            category: "HTB",
            featured: true,
            challenges: [
                "Identificar ACL abuse paths en bosques complejos",
                "Encadenar múltiples ataques en un solo attack path",
                "Bypass de detección en eventos de AD (log tampering)"
            ],
            achievements: [
                "6+ máquinas HTB de AD documentadas con attack paths",
                "BloodHound CustomQueries para detección de ACL abuse",
                "Metodología de ataque AD completa y reproducible"
            ],
            timeline: "2024 - Presente"
        },
        "htb-web-exploitation": {
            id: "htb-web-exploitation",
            title: "HTB: Web Exploitation & Pivoting",
            description: "Writeups de máquinas HTB con explotación web y pivoting",
            longDescription: "Writeups de máquinas HTB donde el vector inicial es una aplicación web. Cubre: SQL injection con SQLMap y manual, Server-Side Template Injection (SSTI) en distintos motores, Local/Remote File Inclusion (LFI/RFI) para RCE, insecure deserialization en PHP/Java/Python, y SSRF para acceder a servicios internos. Luego de comprometer el primer host, técnicas de pivoting para avanzar por la red interna: Chisel SOCKS proxy, Ligolo-ng, SSH tunneling reverso, y port forwarding con plink/netcat.",
            technologies: ["Burp Suite", "SQLMap", "ffuf", "SSTI", "Chisel", "Ligolo-ng"],
            category: "HTB",
            featured: false,
            challenges: [
                "Identificar el tipo de SSTI sin documentación",
                "Deserialization exploits que requieren gadgets específicos",
                "Pivoting a través de múltiples saltos de red"
            ],
            achievements: [
                "5+ máquinas HTB con web exploitation documentadas",
                "Payloads custom para SSTI en Jinja2, Twig, y Freemarker",
                "Guías de tunneling con Chisel y Ligolo-ng"
            ],
            timeline: "2024 - Presente"
        },
        "htb-tunneling-pivoting": {
            id: "htb-tunneling-pivoting",
            title: "HTB: Tunneling, Pivoting & Port Forwarding",
            description: "Guía de técnicas de tunneling y pivoting aplicadas en máquinas HTB",
            longDescription: "Guía práctica de técnicas de tunneling y pivoting aplicadas en máquinas HTB con múltiples interfaces de red y segmentación. Cubre: SSH dynamic port forwarding como SOCKS proxy, Chisel para túneles TCP/UDP reversos, Ligolo-ng para rutas de pivoting automáticas, port forwarding con plink.exe desde Windows, y proxychains para enrutar herramientas a través del túnel. Cada técnica incluye casos reales de HTB, topología de red, y comandos exactos usados.",
            technologies: ["SSH", "Chisel", "Ligolo-ng", "proxychains", "plink", "nmap", "socat"],
            category: "HTB",
            featured: false,
            challenges: [
                "Mantener estabilidad del túnel durante escaneos grandes",
                "Pivoting a través de hosts Linux -> Windows -> Linux",
                "Enrutar múltiples herramientas simultáneamente"
            ],
            achievements: [
                "5+ configuraciones de tunneling documentadas",
                "Scripts de automatización para Ligolo-ng",
                "Metodología de pivoting para cualquier topología"
            ],
            timeline: "2024 - Presente"
        },
        "htb-recon-methodology": {
            id: "htb-recon-methodology",
            title: "HTB: Reconnaissance & Enumeration Playbook",
            description: "Playbook de reconocimiento y enumeración para máquinas HTB",
            longDescription: "Playbook completo de reconocimiento y enumeración para abordar cualquier máquina HTB de forma metódica. Fases documentadas: escaneo inicial con nmap (top ports, version detection, scripts NSE), enumeración de servicios web con ffuf y Gobuster, enumeración de SMB con enum4linux y smbclient, enumeración de LDAP/AD, identificación de vulnerabilidades con searchsploit y nuclei, y fingerprintering de tecnologías con whatweb y wappalyzer. Automatización con scripts custom en Bash para ejecutar toda la enumeración de forma paralela y ordenada.",
            technologies: ["nmap", "ffuf", "Gobuster", "enum4linux", "smbclient", "searchsploit", "Bash"],
            category: "HTB",
            featured: false,
            challenges: [
                "Balancear velocidad de escaneo vs detección de servicios",
                "Enumeración silenciosa para no saturar logs del target",
                "Priorizar vectores cuando hay múltiples puertos abiertos"
            ],
            achievements: [
                "Playbook de enumeración con 20+ herramientas integradas",
                "Script de automatización de reconocimiento en Bash",
                "Checklist de enumeración para no saltarse ningún vector"
            ],
            timeline: "2024 - Presente"
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
