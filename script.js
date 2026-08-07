// Portfolio rendering script
// Edit the siteConfig object to update your content.

const siteConfig = {
    name: 'Ricardo Alves Paula',
    linkedin: 'https://www.linkedin.com/in/ricardoalvespaula/?locale=en_US',
    github: 'https://github.com/Motirck',
    repo: 'https://github.com/Motirck/chat-app', // Highlighted featured project repository
    email: 'mailto:ricardo.alves.p001@gmail.com',
    en: {
        role: 'Senior Software Engineer',
        location: 'Timóteo, Minas Gerais — Brazil',
        summary: `Senior Software Engineer with 9+ years of experience designing, developing, and modernizing software solutions across energy, manufacturing, automotive, and e-commerce industries. Specialized in backend development using C#, .NET, ASP.NET Core, Azure, microservices, REST APIs, and modern software architecture, with a strong background in designing scalable distributed systems using Domain-Driven Design (DDD), Clean Architecture, and SOLID principles.

Known for combining hands-on software development with architectural thinking, mentoring engineers, and collaborating with Product Owners, Business Analysts, QA engineers, and cross-functional teams. Passionate about solving complex engineering problems from architecture and system design through implementation.`,
        highlights: [
            '9+ years building scalable software across multiple industries',
            'Specialized in C#, .NET, ASP.NET Core, and Azure',
            'Strong background in DDD, Clean Architecture, and SOLID principles',
            'Experience with microservices and AI-assisted development workflows',
            'Proven track record of improving performance and reducing operational effort',
            'Passionate about mentoring and collaborative growth in agile environments'
        ],
        experience: [
            {
                company: 'Halliburton (Contractor through Insight Global)',
                title: 'Senior .NET Developer',
                period: 'Nov 2023 – Present',
                details: [
                    'Designed and implemented an AI-assisted development workflow using custom code generation and automated code review agents, reducing PR review effort by 30%.',
                    'Improved application performance by 40% through MongoDB indexing, caching strategies, and materialized views.',
                    'Designed the architecture of new microservices using DDD, SOLID, and Clean Architecture.',
                    'Developed backend services using C#, ASP.NET Core, REST APIs, SignalR, MongoDB, and Azure, integrating Azure AI Translator.',
                    'Resolved critical production incidents through root-cause analysis and permanent fixes.',
                    'Mentored junior developers and promoted engineering best practices across the team.'
                ],
                stack: ['C#', '.NET', 'ASP.NET Core', 'Azure', 'REST APIs', 'SignalR', 'MongoDB', 'DDD', 'Clean Architecture', 'SOLID', 'xUnit']
            },
            {
                company: 'CWI Software',
                title: 'Mid .NET Developer',
                period: 'May 2022 – Nov 2023',
                details: [
                    'Improved API response times by 20–30% by implementing CQRS and migrating read operations from SQL Server to MongoDB.',
                    'Modernized a legacy discount platform by migrating a microservice from .NET Framework to .NET.',
                    'Introduced unit testing and SonarQube, improving code quality and maintainability.',
                    'Developed scalable backend services using C#, ASP.NET Core, Entity Framework, and DDD.',
                    'Built and supported containerized applications using Docker, Kubernetes, and GitHub Actions.',
                    'Collaborated in Agile Scrum teams with POs, BAs, and QA engineers.'
                ],
                stack: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework', 'CQRS', 'MongoDB', 'SQL Server', 'DDD', 'Docker', 'Kubernetes', 'SonarQube', 'GitHub Actions']
            },
            {
                company: 'Stefanini IT Solutions',
                title: 'Mid .NET Developer',
                period: 'Oct 2020 – May 2022',
                details: [
                    'Collaborated with an international client (Jackson Dawson – US) to design .NET microservices using DDD and Clean Architecture.',
                    'Developed backend microservices using Node.js for the Shell Box mobile application.',
                    'Projetei e desenvolvi soluções de backend usando C#, .NET, ASP.NET Core, e Entity Framework.',
                    'Developed cloud-native solutions on AWS using SQS, SNS, S3, CloudWatch, SSM, Terraform, and Serverless Framework.',
                    'Collaborated with distributed teams using Agile Scrum and SAFe.'
                ],
                stack: ['C#', '.NET', 'ASP.NET Core', 'Node.js', 'AWS', 'Terraform', 'DDD', 'Clean Architecture', 'SOLID', 'Microservices']
            },
            {
                company: 'Tesis IT & One Way Consulting',
                title: 'Mid .NET Developer',
                period: 'Aug 2018 – Sep 2020',
                details: [
                    'Modernized legacy VB5 systems by migrating them to Angular and .NET.',
                    'Developed APIs and web applications using C#, .NET, Angular, and Oracle.',
                    'Integrated web systems with C++ components and Oracle databases.',
                    'Worked in agile environments with Git and Azure DevOps.'
                ],
                stack: ['C#', '.NET', 'Angular', 'Oracle', 'VB5', 'C++', 'Azure DevOps']
            },
            {
                company: 'Aperam South America',
                title: 'Intern Informatics Technician',
                period: '2017 – 2018',
                details: [
                    'Creation of SQLs for reports and dashboards with Power BI software.',
                    'Maintenance and creation of Excel spreadsheets (in conjunction with Microsoft Office Access), in VBA (Visual Basic for Applications) language;',
                    'Preparation of SQL\'s for querying the company\'s Database using Microsoft Query;',
                    'Maintenance and creation of formulas in Excel and Drive;',
                    'Use of Google Workspace tools (G-Suite);',
                    'Detailed analysis of the coil process using PIMS (Process Information Management Systems) software in conjunction with PI System - OSIsoft.',
                ],
                stack: ['VBA - Excel', 'PowerBI', 'Microsoft Access', 'PIMS']
            }
        ],
        education: [
            {
                name: 'MBA, Full Cycle Architecture (In Progress)',
                org: 'FCTech University',
                period: '2025 – Present'
            },
            {name: 'Bachelor of Computer Science', org: 'Única College of Ipatinga', period: ''},
            {
                name: 'Computer Technician',
                org: 'CEFET-MG',
                period: ''
            }
        ],
        certifications: [
            {title: 'Docker Uncomplicated (Linux Tips)', img: 'assets/certifications/badge-docker.png', alt: 'Docker certification badge'},
            {title: 'Scrum Foundation Professional Certification (SFPC™)', img: 'assets/certifications/scrum.png', alt: 'Scrum Master certification badge'},
            {title: 'LGPD Fundamentals (LGPDF™)', img: 'assets/certifications/lgpd.png', alt: 'LGPD Compliance certification badge'},
            {
                title: 'Remote Work & Virtual Collaboration Professional (RWVCP™)',
                img: 'assets/certifications/remote-work.png',
                alt: 'Remote Work Pro certification badge'
            },
            {title: 'Lifelong Learning (LLL)', img: 'assets/certifications/lifelong-learning.png', alt: 'Lifelong Learner badge'}
        ],
        projectDesc: 'Real-time Chat Application showcasing enterprise-level architecture and best practices.',
        projectFeatures: [
            {icon: '⚡', text: 'Real-time Messaging: Built with ASP.NET Core SignalR.'},
            {icon: '🔐', text: 'Secure Authentication: Implemented using ASP.NET Identity.'},
            {icon: '💹', text: 'Stock Quote Bot: Fetches and displays stock data in chat rooms.'},
            {icon: '🐰', text: 'Message Brokering: Decoupled architecture using RabbitMQ.'},
            {icon: '🧱', text: 'Clean Architecture: Follows best practices for maintainability and scalability.'}
        ]
    },
    pt: {
        role: 'Desenvolvedor .NET Sênior',
        location: 'Timóteo, MG — Brasil',
        summary: `Engenheiro de Software Sênior com mais de 9 anos de experiência projetando, desenvolvendo e modernizando soluções de software nos setores de energia, manufatura, automotivo e e-commerce. Especializado em desenvolvimento backend usando C#, .NET, ASP.NET Core, Azure, microsserviços, APIs REST e arquitetura de software moderna, com sólida experiência no projeto de sistemas distribuídos escaláveis usando Domain-Driven Design (DDD), Clean Architecture e princípios SOLID.

Reconhecido por combinar o desenvolvimento prático de software com pensamento arquitetural, mentoria de engenheiros e colaboração com Product Owners, Analistas de Negócios, engenheiros de QA e equipes multifuncionais. Apaixonado por resolver problemas complexos de engenharia, desde a arquitetura e design do sistema até a implementação.`,
        highlights: [
            '9+ anos construindo software escalável em múltiplos setores',
            'Especializado em C#, .NET, ASP.NET Core e Azure',
            'Sólida experiência em DDD, Clean Architecture e princípios SOLID',
            'Experiência com microsserviços e fluxos de trabalho de desenvolvimento assistidos por IA',
            'Histórico comprovado de melhoria de desempenho e redução de esforço operacional',
            'Apaixonado por mentoria e crescimento colaborativo em ambientes ágeis'
        ],
        experience: [
            {
                company: 'Halliburton (Contratado via Insight Global)',
                title: 'Desenvolvedor .NET Sênior',
                period: 'Nov 2023 – Presente',
                details: [
                    'Projetei e implementei um fluxo de trabalho de desenvolvimento assistido por IA usando geração de código personalizada e agentes de revisão de código automatizados, reduzindo o esforço de revisão de PR em 30%.',
                    'Melhorei o desempenho da aplicação em 40% através de indexação MongoDB, estratégias de cache e visualizações materializadas.',
                    'Projetei a arquitetura de novos microsserviços usando DDD, SOLID e Clean Architecture.',
                    'Desenvolvi serviços de backend usando C#, ASP.NET Core, APIs REST, SignalR, MongoDB e Azure, integrando o Azure AI Translator.',
                    'Resolvi incidentes críticos de produção por meio de análise de causa raiz e correções permanentes.',
                    'Mentorei desenvolvedores juniores e promovi as melhores práticas de engenharia em toda a equipe.'
                ],
                stack: ['C#', '.NET', 'ASP.NET Core', 'Azure', 'REST APIs', 'SignalR', 'MongoDB', 'DDD', 'Clean Architecture', 'SOLID', 'xUnit']
            },
            {
                company: 'CWI Software',
                title: 'Desenvolvedor .NET Pleno',
                period: 'Mai 2022 – Nov 2023',
                details: [
                    'Melhorei o tempo de resposta da API em 20–30% ao implementar CQRS e migrar operações de leitura do SQL Server para o MongoDB.',
                    'Modernizei uma plataforma de desconto legada migrando um microsserviço de .NET Framework para .NET.',
                    'Introduzi testes unitários e SonarQube, melhorando a qualidade e a manutenibilidade do código.',
                    'Desenvolvi serviços de backend escaláveis usando C#, ASP.NET Core, Entity Framework e DDD.',
                    'Construí e suportei aplicações conteinerizadas usando Docker, Kubernetes e GitHub Actions.',
                    'Colaborei em equipes ágeis Scrum com POs, BAs e engenheiros de QA.'
                ],
                stack: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework', 'CQRS', 'MongoDB', 'SQL Server', 'DDD', 'Docker', 'Kubernetes', 'SonarQube', 'GitHub Actions']
            },
            {
                company: 'Stefanini IT Solutions',
                title: 'Desenvolvedor .NET Pleno',
                period: 'Out 2020 – Mai 2022',
                details: [
                    'Colaborei com um cliente internacional (Jackson Dawson – EUA) para projetar microsserviços .NET usando DDD e Clean Architecture.',
                    'Desenvolvi microsserviços de backend usando Node.js para o aplicativo móvel Shell Box.',
                    'Projetei e desenvolvi soluções de backend usando C#, .NET, ASP.NET Core e Entity Framework.',
                    'Desenvolvi soluções nativas da nuvem na AWS usando SQS, SNS, S3, CloudWatch, SSM, Terraform e Serverless Framework.',
                    'Colaborei com equipes distribuídas usando Agile Scrum e SAFe.'
                ],
                stack: ['C#', '.NET', 'ASP.NET Core', 'Node.js', 'AWS', 'Terraform', 'DDD', 'Clean Architecture', 'SOLID', 'Microservices']
            },
            {
                company: 'Tesis IT & One Way Consulting',
                title: 'Desenvolvedor .NET Pleno',
                period: 'Ago 2018 – Set 2020',
                details: [
                    'Modernizei sistemas legados em VB5 migrando-os para Angular e .NET.',
                    'Desenvolvi APIs e aplicações web usando C#, .NET, Angular e Oracle.',
                    'Integrei sistemas web com componentes C++ e bancos de dados Oracle.',
                    'Trabalhei em ambientes ágeis com Git e Azure DevOps.'
                ],
                stack: ['C#', '.NET', 'Angular', 'Oracle', 'VB5', 'C++', 'Azure DevOps']
            },
            {
                company: 'Aperam South America',
                title: 'Estagiário Técnico em Informática',
                period: '2017 – 2018',
                details: [
                    'Criação de SQLs para relatórios e dashboards com software Power BI.',
                    'Manutenção e criação de planilhas Excel (em conjunto com Microsoft Office Access), em linguagem VBA (Visual Basic for Applications);',
                    'Preparação de SQL\'s para consulta ao Banco de Dados da empresa utilizando Microsoft Query;',
                    'Manutenção e criação de fórmulas em Excel e Drive;',
                    'Uso das ferramentas do Google Workspace (G-Suite);',
                    'Análise detalhada do processo de bobinas utilizando software PIMS (Process Information Management Systems) software em conjunto com PI System - OSIsoft.',
                ],
                stack: ['VBA - Excel', 'PowerBI', 'Microsoft Access', 'PIMS']
            }
        ],
        education: [
            {
                name: 'MBA, Arquitetura Full Cycle (Em Andamento)',
                org: 'FCTech University',
                period: '2025 – Presente'
            },
            {name: 'Bacharel em Ciência da Computação', org: 'Faculdade Única de Ipatinga', period: ''},
            {
                name: 'Técnico em Informática',
                org: 'CEFET-MG',
                period: ''
            }
        ],
        certifications: [
            {title: 'Docker Descomplicado (Linux Tips)', img: 'assets/certifications/badge-docker.png', alt: 'Badge de certificação Docker'},
            {title: 'Scrum Foundation Professional Certification (SFPC™)', img: 'assets/certifications/scrum.png', alt: 'Badge de certificação Scrum Master'},
            {title: 'LGPD Fundamentals (LGPDF™)', img: 'assets/certifications/lgpd.png', alt: 'Badge de conformidade LGPD'},
            {
                title: 'Remote Work & Virtual Collaboration Professional (RWVCP™)',
                img: 'assets/certifications/remote-work.png',
                alt: 'Badge de certificação Remote Work Pro'
            },
            {title: 'Lifelong Learning (LLL)', img: 'assets/certifications/lifelong-learning.png', alt: 'Badge de Lifelong Learner'}
        ],
        projectDesc: 'Aplicação de Chat em tempo real demonstrando arquitetura de nível empresarial e melhores práticas.',
        projectFeatures: [
            {icon: '⚡', text: 'Mensageria em Tempo Real: Construído com ASP.NET Core SignalR.'},
            {icon: '🔐', text: 'Autenticação Segura: Implementada usando ASP.NET Identity.'},
            {icon: '💹', text: 'Bot de Cotação de Ações: Busca e exibe dados de ações em salas de chat.'},
            {icon: '🐰', text: 'Mensageria (Brokering): Arquitetura desacoplada usando RabbitMQ.'},
            {icon: '🧱', text: 'Clean Architecture: Segue as melhores práticas para manutenibilidade e escalabilidade.'}
        ]
    }
};

const i18n = {
    en: {
        navAbout: 'About',
        navSkills: 'Skills',
        navExperience: 'Experience',
        navEducation: 'Education',
        navProject: 'Project',
        navContact: 'Contact',
        titleSummary: 'Summary',
        titleSkills: 'Skills',
        titleExperience: 'Professional Experience',
        titleEducation: 'Education & Certifications',
        titleProject: 'Featured Project',
        titleFeatures: 'Key Features:',
        titleContact: 'Contact',
        btnEmail: 'Contact',
        btnProject: 'View Project',
        featuredRepoBtn: 'View on GitHub',
        footerRights: 'All rights reserved.',
        footerBackToTop: 'Back to top ↑',
        titleEducationSection: 'Education',
        titleCertificationsSection: 'Certifications',
        contactDesc: 'Ready to talk about tech, collaborate on a project, or just say hi? Reach out!',
        skillsGroups: {
            backend: 'Backend Development',
            frontend: 'Frontend Development',
            database: 'Databases & Caching',
            cloud: 'Cloud & DevOps',
            tools: 'Development Tools & IDEs',
            management: 'Project Management & Collaboration'
        }
    },
    pt: {
        navAbout: 'Sobre',
        navSkills: 'Habilidades',
        navExperience: 'Experiência',
        navEducation: 'Educação',
        navProject: 'Projeto',
        navContact: 'Contato',
        titleSummary: 'Resumo',
        titleSkills: 'Habilidades',
        titleExperience: 'Experiência Profissional',
        titleEducation: 'Educação & Certificações',
        titleProject: 'Projeto em Destaque',
        titleFeatures: 'Principais Funcionalidades:',
        titleContact: 'Contato',
        btnEmail: 'Contato',
        btnProject: 'Ver Projeto',
        featuredRepoBtn: 'Ver no GitHub',
        footerRights: 'Todos os direitos reservados.',
        footerBackToTop: 'Voltar ao topo ↑',
        titleEducationSection: 'Educação',
        titleCertificationsSection: 'Certificações',
        contactDesc: 'Pronto para conversar sobre tecnologia, colaborar em um projeto ou apenas dizer olá? Entre em contato!',
        skillsGroups: {
            backend: 'Desenvolvimento Backend',
            frontend: 'Desenvolvimento Frontend',
            database: 'Bancos de Dados & Cache',
            cloud: 'Nuvem & DevOps',
            tools: 'Ferramentas de Desenvolvimento & IDEs',
            management: 'Gestão de Projetos & Colaboração'
        }
    }
};

let currentLang = localStorage.getItem('portfolio-lang') || (navigator.language.startsWith('pt') ? 'pt' : 'en');

function el(tag, className, children) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (children !== undefined) {
        if (Array.isArray(children)) children.forEach(c => e.append(c));
        else e.append(children);
    }
    return e;
}

function render() {
    const lang = currentLang;
    const content = siteConfig[lang];
    const ui = i18n[lang];

    // Update lang attribute
    document.documentElement.lang = lang;

    // Language switcher UI state
    document.getElementById('lang-en').className = lang === 'en' ? 'text-brand-600 cursor-default' : 'text-slate-400 hover:text-brand-600 transition-colors';
    document.getElementById('lang-pt').className = lang === 'pt' ? 'text-brand-600 cursor-default' : 'text-slate-400 hover:text-brand-600 transition-colors';

    // Static UI strings
    document.getElementById('nav-about').textContent = ui.navAbout;
    document.getElementById('nav-skills').textContent = ui.navSkills;
    document.getElementById('nav-experience').textContent = ui.navExperience;
    document.getElementById('nav-education').textContent = ui.navEducation;
    document.getElementById('nav-project').textContent = ui.navProject;
    document.getElementById('nav-contact').textContent = ui.navContact;

    document.getElementById('title-summary').textContent = ui.titleSummary;
    document.getElementById('title-skills').textContent = ui.titleSkills;
    document.getElementById('title-experience').textContent = ui.titleExperience;
    document.getElementById('title-education').textContent = ui.titleEducation;
    document.getElementById('title-project').textContent = ui.titleProject;
    document.getElementById('title-features').textContent = ui.titleFeatures;
    document.getElementById('title-contact').textContent = ui.titleContact;

    document.getElementById('btnEmail').textContent = ui.btnEmail;
    document.getElementById('btnProject').textContent = ui.btnProject;
    document.getElementById('featuredRepoBtn').textContent = ui.featuredRepoBtn;
    document.getElementById('footer-rights').textContent = ui.footerRights;
    document.getElementById('footer-back-to-top').textContent = ui.footerBackToTop;

    // Hero/Header basics
    document.getElementById('name').textContent = siteConfig.name;
    document.getElementById('role').textContent = content.role;
    document.getElementById('location').textContent = content.location;
    document.getElementById('btnLinkedIn').href = siteConfig.linkedin;
    document.getElementById('btnGitHub').href = siteConfig.github;

    // Featured project content
    document.getElementById('project-desc').textContent = content.projectDesc;
    const projectFeatures = document.getElementById('project-features');
    projectFeatures.innerHTML = '';
    content.projectFeatures.forEach(f => {
        const li = el('li', 'flex gap-2', [
            el('span', '', f.icon),
            el('span', '', f.text)
        ]);
        projectFeatures.append(li);
    });

    // Wire featured project CTAs/links
    const repoHref = siteConfig.repo || siteConfig.github;
    const btnProject = document.getElementById('btnProject');
    const featuredRepoBtn = document.getElementById('featuredRepoBtn');
    const featuredRepoLink = document.getElementById('featuredRepoLink');
    const featuredRepoImg = featuredRepoLink ? featuredRepoLink.querySelector('img') : null;

    [btnProject, featuredRepoBtn, featuredRepoLink].forEach(a => {
        if (!a) return;
        if (repoHref && repoHref !== 'https://github.com/') {
            a.href = repoHref;
            a.style.display = '';
            a.target = '_blank';
            a.rel = 'noopener';

            // Update featured project image dynamically if it's a GitHub repo
            if (a === featuredRepoLink && featuredRepoImg && repoHref.includes('github.com')) {
                const parts = repoHref.replace('https://github.com/', '').split('/');
                if (parts.length >= 2) {
                    const user = parts[0];
                    const repo = parts[1];
                    featuredRepoImg.src = `https://gh-card.dev/repos/${user}/${repo}.svg`;
                    featuredRepoImg.alt = `GitHub pinned card for ${user}/${repo}`;
                    featuredRepoImg.onerror = function() {
                        if (this.src.includes('gh-card.dev')) {
                            this.src = `https://opengraph.githubassets.com/1/${user}/${repo}`;
                        } else if (this.src.includes('opengraph.githubassets.com')) {
                            this.src = `https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repo}&theme=dark&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&border_color=30363d&show_owner=true&cache_seconds=3600`;
                        } else {
                            this.src = 'assets/img/github.png';
                            this.onerror = null;
                        }
                    };
                }
            }
        } else {
            a.style.display = 'none';
        }
    });

    // Summary
    document.getElementById('summary').textContent = content.summary;
    const highlights = document.getElementById('highlights');
    highlights.innerHTML = '';
    content.highlights.forEach(h => {
        const li = el('li', 'flex items-start gap-2', [
            el('span', 'text-brand-600', '✓'),
            el('span', '', h)
        ]);
        highlights.append(li);
    });

    // Skills (icon-based, grouped)
    const skillsList = document.getElementById('skillsList');
    const skillGroups = [
        {
            title: ui.skillsGroups.backend,
            items: [
                {name: 'C#', img: 'https://skillicons.dev/icons?i=cs', alt: 'C#'},
                {name: '.NET', img: 'https://skillicons.dev/icons?i=dotnet', alt: '.NET'},
                {
                    name: 'Entity Framework',
                    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg',
                    alt: 'Entity Framework'
                },
                {
                    name: 'SignalR',
                    img: 'https://dotnet.microsoft.com/blob-assets/images/illustrations/swimlane-azure-signalr-logo.svg',
                    alt: 'SignalR'
                },
                {name: 'RabbitMQ', img: 'https://skillicons.dev/icons?i=rabbitmq', alt: 'RabbitMQ'}
            ]
        },
        {
            title: ui.skillsGroups.frontend,
            items: [
                {name: 'Angular', img: 'https://skillicons.dev/icons?i=angular', alt: 'Angular'},
                {name: 'TypeScript', img: 'https://skillicons.dev/icons?i=ts', alt: 'TypeScript'},
                {name: 'JavaScript', img: 'https://skillicons.dev/icons?i=js', alt: 'JavaScript'},
                {name: 'HTML5', img: 'https://skillicons.dev/icons?i=html', alt: 'HTML5'},
                {name: 'CSS3', img: 'https://skillicons.dev/icons?i=css', alt: 'CSS3'},
                {name: 'Bootstrap', img: 'https://skillicons.dev/icons?i=bootstrap', alt: 'Bootstrap'},
                {name: 'Tailwind CSS', img: 'https://skillicons.dev/icons?i=tailwind', alt: 'Tailwind CSS'}
            ]
        },
        {
            title: ui.skillsGroups.database,
            items: [
                {name: 'MongoDB', img: 'https://skillicons.dev/icons?i=mongodb', alt: 'MongoDB'},
                {
                    name: 'SQL Server',
                    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
                    alt: 'SQL Server'
                },
                {name: 'Redis', img: 'https://skillicons.dev/icons?i=redis', alt: 'Redis'},
                {
                    name: 'Oracle',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
                    alt: 'Oracle'
                }
            ]
        },
        {
            title: ui.skillsGroups.cloud,
            items: [
                {name: 'Azure', img: 'https://skillicons.dev/icons?i=azure', alt: 'Azure'},
                {name: 'AWS', img: 'https://skillicons.dev/icons?i=aws', alt: 'AWS'},
                {name: 'Docker', img: 'https://skillicons.dev/icons?i=docker', alt: 'Docker'},
                {name: 'Kubernetes', img: 'https://skillicons.dev/icons?i=kubernetes', alt: 'Kubernetes'},
                {name: 'GitHub', img: 'https://skillicons.dev/icons?i=github', alt: 'GitHub'},
                {name: 'GitHub Actions', img: 'https://skillicons.dev/icons?i=githubactions', alt: 'GitHub Actions'}
            ]
        },
        {
            title: ui.skillsGroups.tools,
            items: [
                {
                    name: 'Rider',
                    img: 'https://resources.jetbrains.com/storage/products/company/brand/logos/Rider_icon.svg',
                    alt: 'JetBrains Rider'
                },
                {name: 'VS Code', img: 'https://skillicons.dev/icons?i=vscode', alt: 'VS Code'},
                {
                    name: 'GitHub Copilot',
                    img: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png',
                    alt: 'GitHub Copilot'
                },
                {
                    name: 'JetBrains AI',
                    img: 'https://resources.jetbrains.com/storage/products/company/brand/logos/AI_icon.svg',
                    alt: 'JetBrains AI'
                },
                {name: 'Postman', img: 'https://skillicons.dev/icons?i=postman', alt: 'Postman'}
            ]
        },
        {
            title: ui.skillsGroups.management,
            items: [
                {
                    name: 'Jira',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
                    alt: 'Jira'
                },
                {
                    name: 'Slack',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
                    alt: 'Slack'
                },
                {
                    name: 'Microsoft Teams',
                    img: 'assets/img/teams-logo.png',
                    alt: 'Microsoft Teams'
                },
                {name: 'BitBucket', img: 'https://skillicons.dev/icons?i=bitbucket', alt: 'BitBucket'},
                {
                    name: 'Google Workspace',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
                    alt: 'Google Workspace'
                }
            ]
        }
    ];

    skillsList.innerHTML = '';
    skillGroups.forEach(group => {
        const section = el('section', 'w-full');
        section.append(el('h3', 'mt-6 text-lg font-semibold', group.title));
        const grid = el('div', 'mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4');
        group.items.forEach(item => {
            const cell = el('div', 'flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900');
            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.alt || item.name;
            let w = 48, h = 48;
            if ((item.name || '').toLowerCase() === 'signalr') { w = 64; h = 64; }
            img.width = w;
            img.height = h;
            img.loading = 'lazy';
            cell.append(img);
            cell.append(el('div', 'pt-2 text-sm sm:text-base text-center font-medium', item.name));
            grid.append(cell);
        });
        section.append(grid);
        skillsList.append(section);
    });

    // Experience
    const exp = document.getElementById('experienceList');
    exp.innerHTML = '';
    content.experience.forEach(x => {
        const card = el('article', 'rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white/60 dark:bg-slate-900');
        card.append(
            el('div', 'flex items-baseline justify-between gap-4', [
                el('h3', 'font-semibold text-lg', `${x.title} — ${x.company}`),
                el('span', 'text-sm text-slate-500', x.period)
            ])
        );
        const ul = el('ul', 'mt-3 space-y-2');
        x.details.forEach(d => ul.append(el('li', 'flex gap-2 text-sm', [el('span', 'text-brand-600', '•'), el('span', '', d)])));
        card.append(ul);
        if (x.stack?.length) {
            const stackWrap = el('div', 'mt-3 flex flex-wrap gap-2');
            x.stack.forEach(t => stackWrap.append(el('span', 'px-2 py-0.5 rounded border text-xs border-slate-300 dark:border-slate-700', t)));
            card.append(stackWrap);
        }
        exp.append(card);
    });

    // Education & Certifications
    const edu = document.getElementById('educationList');
    edu.innerHTML = '';
    const eduCol = el('div', 'space-y-4');
    eduCol.append(el('div', 'font-semibold', ui.titleEducationSection));
    content.education.forEach(e => {
        eduCol.append(el('div', 'p-4 rounded-lg border border-slate-200 dark:border-slate-800', [
            el('div', 'font-medium', e.name),
            el('div', 'text-sm text-slate-500', `${e.org}${e.period ? ' • ' + e.period : ''}`)
        ]));
    });
    const certCol = el('div', 'space-y-4');
    certCol.append(el('div', 'font-semibold', ui.titleCertificationsSection));
    const certGrid = el('div', 'mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4');
    content.certifications.forEach(c => {
        const card = el('div', 'flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900');
        if (c.img) {
            const img = document.createElement('img');
            img.src = c.img;
            img.alt = c.alt || c.title || 'Certification badge';
            img.loading = 'lazy';
            img.className = 'h-24 object-contain';
            card.append(img);
        }
        card.append(el('div', 'text-xs text-center font-medium', c.title));
        certGrid.append(card);
    });
    certCol.append(certGrid);
    edu.append(eduCol);
    edu.append(certCol);

    // Contact
    const contact = document.getElementById('contactLinks');
    contact.innerHTML = '';
    const makeIconLink = (href, label, imgSrc, imgAlt) => {
        const a = el('a', 'inline-flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition');
        a.href = href;
        a.setAttribute('aria-label', label);
        a.title = label;
        if (href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = imgAlt || label;
        img.width = 28;
        img.height = 28;
        img.loading = 'lazy';
        a.append(img);
        return a;
    };
    if (siteConfig.email && siteConfig.email !== 'mailto:') {
        contact.append(makeIconLink(siteConfig.email, 'Email', 'https://skillicons.dev/icons?i=gmail', 'Email icon'));
    }
    if (siteConfig.linkedin) {
        contact.append(makeIconLink(siteConfig.linkedin, 'LinkedIn', 'https://skillicons.dev/icons?i=linkedin', 'LinkedIn icon'));
    }
    if (siteConfig.github && siteConfig.github !== 'https://github.com/') {
        contact.append(makeIconLink(siteConfig.github, 'GitHub', 'https://skillicons.dev/icons?i=github', 'GitHub icon'));
    }

    // Footer basics
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footerName').textContent = siteConfig.name;

    // Contact description
    document.getElementById('contact-desc').textContent = ui.contactDesc;
}

function setLanguage(lang) {
    if (currentLang === lang) return;
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    render();
}

document.addEventListener('DOMContentLoaded', () => {
    render();
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-pt').addEventListener('click', () => setLanguage('pt'));
});
