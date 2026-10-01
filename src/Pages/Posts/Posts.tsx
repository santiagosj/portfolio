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
            description: "Detailed writeup of Linux privilege escalation techniques applied on HTB machines: SUID abuse, capabilities, cron jobs, LPE kernel exploits, and PATH hijacking. Step-by-step methodology with commands and outputs.",
            technologies: ["Linux", "Bash", "Python", "GTFOBins", "pspy", "linpeas"],
            category: "HTB",
            featured: true
        },
        {
            id: "htb-windows-privesc",
            title: "HTB: Windows Privilege Escalation Techniques",
            description: "Compilation of Windows escalation techniques from HTB machines: Token Impersonation, SeBackupPrivilege, UAC bypass, service misconfigurations, DLL hijacking, and AlwaysInstallElevated.",
            technologies: ["Windows", "PowerShell", "WinPEAS", "SharpUp", "Metasploit"],
            category: "HTB",
            featured: true
        },
        {
            id: "htb-ad-attacks",
            title: "HTB: Active Directory Attack Paths",
            description: "Writeups of HTB machines with Active Directory: AS-REP roasting, kerberoasting, ACL abuse, DCSync, Kerberos delegation, and trust attacks. Includes BloodHound attack path maps.",
            technologies: ["BloodHound", "Impacket", "Responder", "CrackMapExec", "AD", "Kerberos"],
            category: "HTB",
            featured: true
        },
        {
            id: "htb-web-exploitation",
            title: "HTB: Web Exploitation & Pivoting",
            description: "Writeups of HTB machines focused on web exploitation (SQLi, SSTI, LFI/RFI, deserialization) combined with tunneling and pivoting through internal networks to compromise other hosts.",
            technologies: ["Burp Suite", "SQLMap", "ffuf", "Chisel", "Ligolo-ng", "Python"],
            category: "HTB",
            featured: false
        },
        {
            id: "htb-tunneling-pivoting",
            title: "HTB: Tunneling, Pivoting & Port Forwarding",
            description: "Guide to tunneling and pivoting techniques applied on HTB machines: SSH tunneling, Chisel SOCKS proxy, Ligolo-ng, port forwarding with plink, and multi-hop pivoting routes.",
            technologies: ["SSH", "Chisel", "Ligolo-ng", "proxychains", "plink", "nmap"],
            category: "HTB",
            featured: false
        },
        {
            id: "htb-recon-methodology",
            title: "HTB: Reconnaissance & Enumeration Playbook",
            description: "Reconnaissance and enumeration playbook for HTB machines: from initial nmap scanning to deep enumeration of services, users, and vulnerabilities. Automation with custom scripts.",
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
