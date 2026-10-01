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
            description: "Detailed writeup of Linux privilege escalation techniques on HTB machines",
            longDescription: "Compilation of writeups focused on Linux privilege escalation from multiple HTB machines. Each technique documented with: initial system reconnaissance, enumeration of escalation vectors, step-by-step exploitation, and post-exploitation. Covers SUID/SGID binary abuse, misconfigured Linux capabilities, cron jobs with writable scripts, LPE via kernel exploits (DirtyPipe, OverlayFS), PATH hijacking, and sudo rule abuse. Includes real outputs, exact commands, and the reasoning behind every decision.",
            technologies: ["Linux", "Bash", "Python", "GTFOBins", "pspy", "linpeas", "enumy"],
            category: "HTB",
            featured: true,
            challenges: [
                "Identifying the right vector among multiple possibilities",
                "Kernel exploits that require specific versions",
                "Machines with multiple chained escalation layers"
            ],
            achievements: [
                "8+ HTB Linux privesc machines documented",
                "Coverage of 15+ distinct escalation techniques",
                "Reproducible methodology for any Linux machine"
            ],
            timeline: "2024 - Present"
        },
        "htb-windows-privesc": {
            id: "htb-windows-privesc",
            title: "HTB: Windows Privilege Escalation Techniques",
            description: "Privilege escalation techniques on Windows HTB machines",
            longDescription: "Detailed writeups of Windows privilege escalation on HTB machines. Covers: Token Impersonation with RoguePotato/JuicyPotato, SeBackupPrivilege abuse to dump SAM/SYSTEM, SeImpersonatePrivilege, UAC bypass via registry/modifiable paths, service misconfigurations (binPath, unquoted paths, weak permissions), DLL hijacking in services and applications, AlwaysInstallElevated for malicious MSI packages, and scheduled task abuse. Includes custom PowerShell scripts and C# exploit compilation.",
            technologies: ["Windows", "PowerShell", "WinPEAS", "SharpUp", "Metasploit", "C#"],
            category: "HTB",
            featured: true,
            challenges: [
                "Compiling exploits for specific Windows versions",
                "Bypassing AV and Windows Defender during exploitation",
                "Techniques that require multiple chained steps"
            ],
            achievements: [
                "10+ documented Windows privesc techniques from HTB",
                "Custom PowerShell scripts for automation",
                "AV bypass guide for each technique"
            ],
            timeline: "2024 - Present"
        },
        "htb-ad-attacks": {
            id: "htb-ad-attacks",
            title: "HTB: Active Directory Attack Paths",
            description: "Writeups of HTB machines with Active Directory and complete attack paths",
            longDescription: "Compilation of writeups of HTB machines focused on Active Directory. Full attack path documentation from standard user to Domain Admin: AS-REP roasting against users without pre-authentication, kerberoasting of SPNs, ACL abuse (ForceChangePassword, WriteOwner, GenericAll, GenericWrite), DCSync to dump KRBTGT hashes, Kerberos delegation (unconstrained, constrained, resource-based), and domain trust attacks. Attack path maps generated with BloodHound and CustomQueries to identify critical routes.",
            technologies: ["BloodHound", "Impacket", "Responder", "CrackMapExec", "AD", "Kerberos", "LDAP"],
            category: "HTB",
            featured: true,
            challenges: [
                "Identifying ACL abuse paths in complex forests",
                "Chaining multiple attacks into a single attack path",
                "Evading detection in AD events (log tampering)"
            ],
            achievements: [
                "6+ documented HTB AD machines with attack paths",
                "BloodHound CustomQueries for ACL abuse detection",
                "Complete and reproducible AD attack methodology"
            ],
            timeline: "2024 - Present"
        },
        "htb-web-exploitation": {
            id: "htb-web-exploitation",
            title: "HTB: Web Exploitation & Pivoting",
            description: "Writeups of HTB machines with web exploitation and pivoting",
            longDescription: "Writeups of HTB machines where the initial vector is a web application. Covers: SQL injection with SQLMap and manually, Server-Side Template Injection (SSTI) in different engines, Local/Remote File Inclusion (LFI/RFI) for RCE, insecure deserialization in PHP/Java/Python, and SSRF to reach internal services. After compromising the first host, pivoting techniques to move through the internal network: Chisel SOCKS proxy, Ligolo-ng, reverse SSH tunneling, and port forwarding with plink/netcat.",
            technologies: ["Burp Suite", "SQLMap", "ffuf", "SSTI", "Chisel", "Ligolo-ng"],
            category: "HTB",
            featured: false,
            challenges: [
                "Identifying the SSTI type without documentation",
                "Deserialization exploits that require specific gadgets",
                "Pivoting through multiple network hops"
            ],
            achievements: [
                "5+ documented HTB machines with web exploitation",
                "Custom payloads for SSTI in Jinja2, Twig, and Freemarker",
                "Tunneling guides with Chisel and Ligolo-ng"
            ],
            timeline: "2024 - Present"
        },
        "htb-tunneling-pivoting": {
            id: "htb-tunneling-pivoting",
            title: "HTB: Tunneling, Pivoting & Port Forwarding",
            description: "Guide to tunneling and pivoting techniques applied on HTB machines",
            longDescription: "Practical guide to tunneling and pivoting techniques applied on HTB machines with multiple network interfaces and segmentation. Covers: SSH dynamic port forwarding as a SOCKS proxy, Chisel for reverse TCP/UDP tunnels, Ligolo-ng for automatic pivoting routes, port forwarding with plink.exe from Windows, and proxychains to route tools through the tunnel. Each technique includes real HTB cases, network topology, and the exact commands used.",
            technologies: ["SSH", "Chisel", "Ligolo-ng", "proxychains", "plink", "nmap", "socat"],
            category: "HTB",
            featured: false,
            challenges: [
                "Keeping the tunnel stable during large scans",
                "Pivoting through Linux -> Windows -> Linux hosts",
                "Routing multiple tools simultaneously"
            ],
            achievements: [
                "5+ documented tunneling configurations",
                "Automation scripts for Ligolo-ng",
                "Pivoting methodology for any topology"
            ],
            timeline: "2024 - Present"
        },
        "htb-recon-methodology": {
            id: "htb-recon-methodology",
            title: "HTB: Reconnaissance & Enumeration Playbook",
            description: "Reconnaissance and enumeration playbook for HTB machines",
            longDescription: "Complete reconnaissance and enumeration playbook to approach any HTB machine methodically. Documented phases: initial scanning with nmap (top ports, version detection, NSE scripts), web service enumeration with ffuf and Gobuster, SMB enumeration with enum4linux and smbclient, LDAP/AD enumeration, vulnerability identification with searchsploit and nuclei, and technology fingerprinting with whatweb and wappalyzer. Automation with custom Bash scripts to run the entire enumeration phase in parallel and in order.",
            technologies: ["nmap", "ffuf", "Gobuster", "enum4linux", "smbclient", "searchsploit", "Bash"],
            category: "HTB",
            featured: false,
            challenges: [
                "Balancing scan speed against service detection",
                "Silent enumeration to avoid saturating target logs",
                "Prioritizing vectors when multiple ports are open"
            ],
            achievements: [
                "Enumeration playbook with 20+ integrated tools",
                "Bash automation script for reconnaissance",
                "Enumeration checklist to avoid missing any vector"
            ],
            timeline: "2024 - Present"
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
