import React from "react";
import "./About.scss";

const About: React.FC = () => {
    return (
        <div className="about-content">
            <h2 className="ubuntu-bold">About Me</h2>

            <div className="about-section">
                <h4 className="">Professional Summary</h4>
                <p className="">
                    Web developer turned pentester. After years building web applications, I now specialize in breaking them.
                    My background in React, TypeScript, and modern web architectures gives me a unique edge in web application
                    security assessments — I don't just scan for vulnerabilities, I understand the code behind them.
                </p>
            </div>

            <div className="skills-section">
                <h4 className="">Core Competencies</h4>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h5>Web Application Pentesting</h5>
                        <ul>
                            <li>OWASP Top 10, Burp Suite Pro</li>
                            <li>SQLi, XSS, SSRF, CSRF, IDOR</li>
                            <li>Authentication & Session Bypass</li>
                            <li>API & GraphQL Security Testing</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h5>Infrastructure Pentesting</h5>
                        <ul>
                            <li>nmap, enum4linux, BloodHound</li>
                            <li>Impacket, Responder, CrackMapExec</li>
                            <li>john/hashcat, Metasploit</li>
                            <li>Linux & Windows PrivEsc</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h5>Active Directory</h5>
                        <ul>
                            <li>Kerberos Attacks, AS-REP Roasting</li>
                            <li>Kerberoasting, ACL Abuse</li>
                            <li>Relaying, DCSync</li>
                            <li>Attack Path Mapping (BloodHound)</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h5>Web Technologies</h5>
                        <ul>
                            <li>React, TypeScript, Node.js</li>
                            <li>REST APIs, Docker</li>
                            <li>Modern Web Architectures</li>
                            <li>Understanding the target</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h5>Tools</h5>
                        <ul>
                            <li>Burp Suite Professional</li>
                            <li>ffuf, nuclei, SQLMap</li>
                            <li>Metasploit, BloodHound</li>
                            <li>CrackMapExec, Impacket</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h5>Cloud & Infrastructure</h5>
                        <ul>
                            <li>AWS, Docker, Kubernetes</li>
                            <li>Terraform, CI/CD Security</li>
                            <li>Linux Administration</li>
                            <li>Network Fundamentals</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="experience-section">
                <h4 className="">Experience</h4>
                <div className="experience-item">
                    <h5>Security Research & Labs</h5>
                    <p className="company">Self-directed • 2020 - Present</p>
                    <ul>
                        <li>20+ HackTheBox machines rooted (Linux & Windows)</li>
                        <li>Active Directory lab with multi-domain trusts and complex ACL abuse paths</li>
                        <li>Documented writeups covering full methodology: recon → exploitation → privesc</li>
                        <li>Web application pentest lab with OWASP Juice Shop, DVWA, and custom vulnerable apps</li>
                    </ul>
                </div>
            </div>

            <div className="education-section">
                <h4 className="">Education & Certifications</h4>
                <ul>
                    <li>Bachelor's in Computer Science</li>
                    <li>Self-taught in offensive security</li>
                    <li>HTB Academy — Web Attacks, AD Attacks, Privilege Escalation</li>
                    <li>PortSwigger Web Security Academy — Research & Methodology</li>
                    <li>PentesterLab — Web Application Security Path</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
