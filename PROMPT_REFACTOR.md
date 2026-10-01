# Prompt para refactorizar el portfolio

## Contexto general

Eres un desarrollador frontend (React, TypeScript) en transición activa a Pentester. Tu portfolio actual está posicionado como "DevSecOps Engineer" y tiene proyectos genéricos de infraestructura. Necesitas reescribirlo para contar una historia creíble de Frontend Developer → Pentester, aprovechando que entender cómo se construyen apps web te da una ventaja para romperlas.

## Archivos a modificar

### 1. `src/Pages/Home/Home.tsx`

**Cambiar:**
- Título de "DevSecOps Engineer" → algo que refleje la transición. Ej: "Frontend Developer → Pentester" o "Security Researcher & Web Application Pentester"
- La descripción del hero section es muy DevSecOps ("Building secure, scalable, and automated infrastructure solutions..."). Reescribir para que cuente la historia de transición:
  - Mencionar que pasaste de construir apps web a romperlas
  - Que tu superpoder es entender el lado del desarrollador para encontrar vulnerabilidades que otros no ven
  - Que tenés +20 máquinas de HTB resueltas
  - Que combinás ingeniería frontend con seguridad ofensiva
- Los links de contacto están bien, mantenerlos

### 2. `src/Pages/About/About.tsx`

**Reestructurar completamente:**

**Professional Summary:**
- Sacar "DevSecOps engineer with expertise in building secure, scalable, and automated infrastructure"
- Poner algo como: "Frontend developer turned pentester. After years building web applications, I now specialize in breaking them. My background in React, TypeScript, and modern web architectures gives me a unique edge in web application security assessments — I don't just scan for vulnerabilities, I understand the code behind them."

**Core Competencies:**
- Sacar: AWS/Azure/GCP genérico, Terraform/CloudFormation, Ansible/Puppet, Jenkins/GitLab CI/ArgoCD/Helm, Prometheus/Grafana (son de DevSecOps)
- Reemplazar con:
  - **Web Application Pentesting**: OWASP Top 10, Burp Suite, SQLi, XSS, SSRF, CSRF, IDOR, authentication bypass
  - **Infrastructure Pentesting**: nmap, enum4linux, bloodhound, impacket, responder, john/hashcat
  - **Active Directory**: kerberos attacks, AS-REP roasting, kerberoasting, ACL abuse, relaying
  - **Web Technologies**: React, TypeScript, REST APIs, Node.js, Docker (esto muestra que entendés el blanco)
  - **Tools**: Burp Suite Professional, Metasploit, BloodHound, CrackMapExec, ffuf, nuclei
- Poner "Cloud & Infrastructure" como skill secundaria, no principal

**Experience:**
- Sacar "Senior DevSecOps Engineer" o si la experiencia es real, reposicionarla destacando la parte de seguridad ofensiva que hacías
- Agregar una sección "Security Research & Labs" con:
  - 20+ máquinas resueltas en HackTheBox
  - Writeups documentados de laboratorios
  - Proyectos de pentesting web

**Education & Certifications:**
- Mantener las que sean reales
- Si no tenés certs, poner "self-taught" o los laboratorios completados como equivalencia
- Considerar mencionar cursos/platforms: HTB Academy, PentesterLab, PortSwigger Web Security Academy

### 3. `src/Pages/Projects/Projects.tsx`

**Sacar completamente los proyectos actuales** (Secure CI/CD Pipeline, Kubernetes Security Hardening, IaC Platform, Security Monitoring Dashboard, Container Security Scanner, Compliance Automation) — son 100% DevSecOps/infraestructura.

**Reemplazar con proyectos de pentesting. Los proyectos deben ser reales, tangibles y demostrables. Ideas:**

#### Proyecto 1: "Web Application Pentest Lab — Writeups & Methodology"
- Descripción: Laboratorio propio de pentesting web con aplicaciones vulnerables (OWASP Juice Shop, DVWA, Altoro Mutual, o apps custom). Documentación completa de metodología: reconocimiento → enumeración → explotación → post-explotación, con screenshots y hallazgos.
- Tecnologías: Burp Suite, OWASP ZAP, SQLMap, ffuf, custom Python/JS scripts
- Categoría: Pentesting
- Featured: true

#### Proyecto 2: "HackTheBox Certification / Machines Writeups"
- Descripción: Compilado de writeups de 20+ máquinas HTB resueltas. Cubriendo: Linux y Windows privilege escalation, Active Directory attacks, web exploitation, tunneling/pivoting. Cada writeup documenta la metodología completa.
- Tecnologías: nmap, responder, bloodhound, impacket, john, metasploit, custom scripts
- Categoría: Pentesting
- Featured: true

#### Proyecto 3: "Custom Pentest Reporting Engine"
- Descripción: Fork/pivoteo del reporting-engine existente. Generador de reportes de pentest profesionales con templates personalizables, scoring CVSS, gráficos de severidad, y exportación a PDF/XLSX/PPTX. Construido con React + TypeScript + Node.js.
- Tecnologías: React, TypeScript, Node.js, Chart.js, Playwright, ExcelJS
- Categoría: Tools
- Featured: true

#### Proyecto 4: "Automated Recon & Vulnerability Scanner"
- Descripción: Script/tool de automatización de reconocimiento para pentesting web. Orquesta subdomain enumeration → port scanning → technology fingerprinting → directory brute-forcing → vulnerability scanning con nuclei. Pipeline completo y configurable.
- Tecnologías: Python/Bash, subfinder, httpx, nuclei, ffuf, jq
- Categoría: Automation
- Featured: false

#### Proyecto 5: "Browser Extension Security Auditor"
- Descripción: Chrome/Firefox extension que analiza la seguridad de sitios web en tiempo real. Detecta: missing security headers, cookies sin flags, CORS misconfigurations, CSP weaknesses. Aprovecha tu background frontend.
- Tecnologías: JavaScript, Chrome Extensions API, React
- Categoría: Web Security
- Featured: false

#### Proyecto 6: "Active Directory Lab & Attack Paths"
- Descripción: Laboratorio de AD montado en casa con múltiples dominios, trusts, y ACLs complejas. Documentación de attack paths completos: AS-REP roasting → kerberoasting → ACL abuse → DCSync. Mapa de relaciones con BloodHound.
- Tecnologías: Windows Server, BloodHound, Impacket, CrackMapExec, responder, krbrelay
- Categoría: Pentesting
- Featured: false

### 4. Navbar / Router / AppHolder

- No cambiar nombres de rutas ni estructura de navegación
- Si hay breadcrumbs, actualizar el naming de proyectos

### 5. Estilo general y tono

- Mantener el estilo "terminal/hacker" que ya tenés (el `$ ls contact/` está bueno)
- El tono debe ser de alguien que viene de frontend y se volcó a seguridad — humilde pero técnicamente sólido
- Destacar writeups y documentación como entregables (muestra metodología, no solo resultados)

## Reglas técnicas

- No romper la build de TypeScript ni React
- Mantener las estructuras de componentes actuales (AppHolder, Router, Navbar, Breadcrumb, Canvas)
- No eliminar archivos de proyecto que no se usen (solo modificar los .tsx)
- Los cambios en scss solo si es necesario para nuevos elementos
- No tocar package.json ni dependencias

## Output esperado

El portfolio debe transmitir claramente:
1. "Soy un pentester que entiende de frontend" (no un DevSecOps)
2. "Tengo proyectos reales de pentesting, no solo teoría"
3. "Mi metodología es sólida y está documentada"
4. "Mi background frontend es un diferencial, no una debilidad"