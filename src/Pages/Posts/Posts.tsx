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
            id: "htb-linux-privesc",
            title: "HTB: Linux Privilege Escalation Deep Dive",
            description: "Writeup detallado de tecnicas de escalada de privilegios en Linux aplicadas en maquinas HTB: SUID abuse, capabilities, cron jobs, LPE kernel exploits, y PATH hijacking. Metodologia paso a paso con comandos y outputs.",
            technologies: ["Linux", "Bash", "Python", "GTFOBins", "pspy", "linpeas"],
            category: "HTB",
            featured: true
        },
        {
            id: "htb-windows-privesc",
            title: "HTB: Windows Privilege Escalation Techniques",
            description: "Compilado de tecnicas de escalada en Windows de maquinas HTB: Token Impersonation, SeBackupPrivilege, UAC bypass, service misconfigurations, DLL hijacking, y AlwaysInstallElevated.",
            technologies: ["Windows", "PowerShell", "WinPEAS", "SharpUp", "Metasploit"],
            category: "HTB",
            featured: true
        },
        {
            id: "htb-ad-attacks",
            title: "HTB: Active Directory Attack Paths",
            description: "Writeups de maquinas HTB con Active Directory: AS-REP roasting, kerberoasting, ACL abuse, DCSync, Kerberos delegation, y ataque a trusts. Mapas de attack paths con BloodHound incluidos.",
            technologies: ["BloodHound", "Impacket", "Responder", "CrackMapExec", "AD", "Kerberos"],
            category: "HTB",
            featured: true
        },
        {
            id: "htb-web-exploitation",
            title: "HTB: Web Exploitation & Pivoting",
            description: "Writeups de maquinas HTB enfocadas en explotacion web (SQLi, SSTI, LFI/RFI, deserialization) combinada con tunneling y pivoting a traves de redes internas para comprometer otros hosts.",
            technologies: ["Burp Suite", "SQLMap", "ffuf", "Chisel", "Ligolo-ng", "Python"],
            category: "HTB",
            featured: false
        },
        {
            id: "htb-tunneling-pivoting",
            title: "HTB: Tunneling, Pivoting & Port Forwarding",
            description: "Guia de tecnicas de tunneling y pivoting aplicadas en maquinas HTB: SSH tunneling, Chisel SOCKS proxy, Ligolo-ng, port forwarding con plink, y rutas de pivoting multi-hop.",
            technologies: ["SSH", "Chisel", "Ligolo-ng", "proxychains", "plink", "nmap"],
            category: "HTB",
            featured: false
        },
        {
            id: "htb-recon-methodology",
            title: "HTB: Reconnaissance & Enumeration Playbook",
            description: "Playbook de reconocimiento y enumeracion para maquinas HTB: desde el escaneo inicial con nmap hasta la enumeracion profunda de servicios, usuarios, y vulnerabilidades. Automatizacion con scripts custom.",
            technologies: ["nmap", "ffuf", "Gobuster", "enum4linux", "smbclient", "Bash"],
            category: "HTB",
            featured: false
        }
    ];

    const categories = ["All", "HTB", "Techniques", "Methodology"];
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const filteredPosts = selectedCategory === "All" 
        ? posts 
        : posts.filter(post => post.category === selectedCategory);

    return (
        <div className="posts-content">

            <h2 className="ubuntu-bold">Posts</h2>
            <p className="ubuntu-regular">HackTheBox Writeups & Security Research</p>

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
