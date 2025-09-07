// Portfolio rendering script
// Edit the siteConfig object to update your content.

const siteConfig = {
    name: 'Ricardo Alves Paula',
    role: 'Senior .NET Developer',
    location: 'Timóteo, MG — Brazil',
    linkedin: 'https://www.linkedin.com/in/ricardoalvespaula/?locale=en_US',
    github: 'https://github.com/Motirck',
    repo: 'https://github.com/motirck/chat-app', // Highlighted featured project repository
    email: 'mailto:ricardo.alves.p001@gmail.com',
    summary: `Ricardo is an accomplished Software Developer with 8 years of experience delivering high-quality, scalable, and efficient software solutions across different industries. With 7 years of expertise in the .NET ecosystem, he specializes in C#, .NET Core, ASP.NET Web API, SignalR, RESTful APIs, and microservices architecture, while also bringing hands-on experience with Node.js, Angular, VB5, and VBA.

Ricardo is highly communicative and proactive, encouraging best practices in Clean Code, Design Patterns, and SOLID principles, while mentoring team members and promoting collaborative growth. He thrives in agile environments (SAFe, Scrum) and actively contributes to improving team deliveries through retrospectives and knowledge sharing.`,
    highlights: [
        '8 years building scalable software across multiple industries',
        '7 years in the .NET ecosystem (C#, .NET Core, ASP.NET Web API, SignalR)',
        'Strong with RESTful APIs and microservices architecture',
        'Hands-on with Node.js, Angular, VB5, and VBA',
        'Strongly support Clean Code, SOLID, and Design Patterns; mentors teams',
        'Thrives in Agile (SAFe/Scrum); drives improvements via retrospectives'
    ],
    skills: [
        'GitHub Copilot', 'JetBrains AI', 'C#', 'ASP.NET Core', '.NET', 'Entity Framework', 'RESTful', 'SignalR', 'Microservices', 'Azure', 'AWS', 'Rider IDE (JetBrains)', 'Dynatrace', 'Grafana', 'ConfigCat (Feature Flag/ Feature Toggle)', 'Docker', 'Kubernetes', 'xUnit (tests)', 'Redis', 'Oracle', 'SQLServer', 'MongoDB', 'JavaScript', 'TypeScript', 'Angular', 'GitHub Actions', 'Azure DevOps (ADO)', 'BitBucket', 'Jira', 'Google Workspace', 'Slack', 'Microsoft Teams', 'Agile Methodologies'
    ],
    experience: [
        {
            company: 'Insight Global (Halliburton)',
            title: 'Senior .NET Developer',
            period: '2023 – Present',
            details: [
                'Industries: Oil & Gas',
                'Full Stack Development using .NET (90%) and Angular (10%)',
                'Back-end Development: .NET using ASP.NET Core - C#',
                'Using Azure AI services such as Azure AI Translator, etc',
                'Front-end Development: Angular',
                'Database: MongoDB',
                'Using LINQ for deferred execution and concise/readable code',
                'Technologies: SignalR, RESTful API, Microservices',
                'Testing: Unit testing with Xunit (using Moq and Fixtures)',
                'Deployment: CI/CD pipelines with Azure, Docker',
                'Best Practices: SOLID principles, Clean Code, Domain-Driven Design (DDD)',
                'Methodology: Agile (Scrum)',
                'Version Control: Git (Gitflow) and Azure'
            ],
            stack: ['REST', 'SignalR', 'C#', '.NET', 'Angular', 'DDD', 'xUnit', 'Clean Code', 'Mediator', 'Design Patterns', 'Docker', 'Kubernetes']
        },
        {
            company: 'CWI Software',
            title: 'Mid .NET Developer',
            period: '2022 – 2023',
            details: [
                'Industries: E-Commerce',
                '.NET development using ASP.NET Core and C# for brazilian client Casas Bahia',
                'Database used: SQLServer and MongoDB',
                'Unit testing with Xunit (using Moq and Fixtures)',
                'Using LINQ for deferred execution and concise/readable code',
                'Design Patterns used: Circuit Breaker, Chain Of Responsibility, Factory, etc.',
                'Consumption of CI/CD pipelines GitHub Actions',
                'Docker and Kubernetes',
                'Application of SOLID and Clean Code principles',
                'Using the CQRS standard',
                'Domain-Driven Design (DDD)',
                'Agile methodology used: Scrum',
                'Using tools like Dynatrace, Elastic Search and Grafana',
                'Using SonarQube to ensure source code quality',
                'Version Control: Git (Gitflow) and GitHub'
            ],
            stack: ['C#', '.NET', 'DDD', 'xUnit', 'Clean Code', 'CQRS', 'Mediator', 'Design Patterns', 'Docker', 'Kubernetes', 'Dynatrace', 'Grafana', 'GitHub Actions']
        },
        {
            company: 'Stefanini IT Solutions',
            title: 'Mid .NET Developer',
            period: '2020 – 2022',
            details: [
                'Industries: Integrated energy and Marketing',
                'Back-end development using ASP.NET Core - C# and NodeJS, and some Front-end development tasks using AngularJS, for the clients Raizen and Jackson Dawson',
                'Azure DevOps',
                'Design Patterns',
                'Application of SOLID, Clean Code, and Clean Architecture',
                'Domain-Driven Design (DDD)',
                'Database used: SQLServer, Dynamo / Dynamoose and MySQL / Sequelize',
                'Version Control: Git and SVN (Trunk Based Development and Gitflow) and BitBucket',
                'Unit tests with Xunit (using Moq and Fixtures) and Jest',
                'Entity Framework as ORM for the .NET projects',
                'Use of Serverless Framework',
                'Dependency injection with TypeDI',
                'Use of Microservices',
                'AWS - Amazon Web Services (SNS, SQS, Dynamo, Cloud Watch, SSM, S3)',
                'Terraform',
                'Agile methodology used: Scrum and Scaled Agile Framework® (SAFe®)',
                'Use of SonarQube to ensure source code quality',
                'Use of Management 3.0 in all projects',
                'Deliveries made by sprints with MVP techniques'
            ],
            stack: ['C#', '.NET', 'Angular', 'Node.js', 'xUnit', 'Jest', 'DDD', 'Clean Code', 'Design Patterns', 'BitBucket', 'ConfigCat']
        },
        {
            company: 'Tesis IT & One Way Consulting',
            title: 'Mid .NET Developer',
            period: '2018 – 2020',
            details: [
                'Industries: Steel Manufacturing',
                'Back-end Development (.NET Framework - C#) using MVC, Front-end development (Angular 6), for the client Aperam South America',
                'Migration of internal systems made in Visual Basic 5 (VB5) to WEB using Angular Framework (TypeScript, JavaScript, Node.js, HTML5, SCSS, Bootstrap) and .NET (WebAPI)',
                'Database used: Oracle',
                'Creation of Services in C# language to be intermediaries between C++ (which accesses the Oracle Database) and the Applications Front-end',
                'Version control of systems using Git and Azure DevOps Server'
            ],
            stack: ['C#', '.NET', 'Angular', 'VBA', 'VB5']
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
            name: 'MBA in Full Cycle Architecture',
            org: 'FCTech University, Online Program, Brazil',
            period: '2025 – Present'
        },
        {name: 'Bachelor’s Degree in Computer Science', org: 'Única College, Ipatinga, Brazil', period: '2018 – 2021'},
        {
            name: 'Technical Degree in Software Engineering',
            org: 'Minas Gerais Federal Center for Technological Education (CEFET-MG), Timoteo, Brazil',
            period: '2015 – 2017'
        }
    ],
    certifications: [
        {title: 'Docker Certified', img: 'assets/certifications/badge-docker.png', alt: 'Docker certification badge'},
        {title: 'Scrum Master', img: 'assets/certifications/scrum.png', alt: 'Scrum Master certification badge'},
        {title: 'LGPD Compliance', img: 'assets/certifications/lgpd.png', alt: 'LGPD Compliance certification badge'},
        {
            title: 'Remote Work Pro',
            img: 'assets/certifications/remote-work.png',
            alt: 'Remote Work Pro certification badge'
        },
        {title: 'Lifelong Learner', img: 'assets/certifications/lifelong-learning.png', alt: 'Lifelong Learner badge'}
    ]
};

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
    // Header/hero basics
    document.getElementById('name').textContent = siteConfig.name;
    document.getElementById('role').textContent = siteConfig.role;
    document.getElementById('location').textContent = siteConfig.location;
    document.getElementById('btnLinkedIn').href = siteConfig.linkedin;
    document.getElementById('btnGitHub').href = siteConfig.github;
    // Wire featured project CTAs/links
    const repoHref = siteConfig.repo || siteConfig.github;
    const btnProject = document.getElementById('btnProject');
    const featuredRepoBtn = document.getElementById('featuredRepoBtn');
    const featuredRepoLink = document.getElementById('featuredRepoLink');
    [btnProject, featuredRepoBtn, featuredRepoLink].forEach(a => {
        if (!a) return;
        if (repoHref && repoHref !== 'https://github.com/') {
            a.href = repoHref;
            a.style.display = '';
            a.target = '_blank';
            a.rel = 'noopener';
        } else {
            a.style.display = 'none';
        }
    });

    // Summary
    document.getElementById('summary').textContent = siteConfig.summary;
    const highlights = document.getElementById('highlights');
    siteConfig.highlights.forEach(h => {
        const li = el('li', 'flex items-start gap-2', [
            el('span', 'text-brand-600', '✓'),
            el('span', '', h)
        ]);
        highlights.append(li);
    });

    // Skills (icon-based, grouped like README)
    const skillsList = document.getElementById('skillsList');
    const skillGroups = [
        {
            title: 'Backend Development',
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
            title: 'Frontend Development',
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
            title: 'Databases & Caching',
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
            title: 'Cloud & DevOps',
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
            title: 'Development Tools & IDEs',
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
            title: 'Project Management & Collaboration',
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
                    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
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

    // Clear previous content if any and render groups
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
            // Default size
            let w = 48, h = 48;
            // Make SignalR icon a bit larger to visually match others
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
    siteConfig.experience.forEach(x => {
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
    const eduCol = el('div', 'space-y-4');
    eduCol.append(el('div', 'font-semibold', 'Education'));
    siteConfig.education.forEach(e => {
        eduCol.append(el('div', 'p-4 rounded-lg border border-slate-200 dark:border-slate-800', [
            el('div', 'font-medium', e.name),
            el('div', 'text-sm text-slate-500', `${e.org}${e.period ? ' • ' + e.period : ''}`)
        ]));
    });
    const certCol = el('div', 'space-y-4');
    certCol.append(el('div', 'font-semibold', 'Certifications'));
    const certGrid = el('div', 'mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4');
    siteConfig.certifications.forEach(c => {
        const item = typeof c === 'string' ? {title: c, img: null, alt: c} : c;
        const card = el('div', 'flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900');
        if (item.img) {
            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.alt || item.title || 'Certification badge';
            img.loading = 'lazy';
            img.className = 'h-24 object-contain';
            card.append(img);
        }
        card.append(el('div', 'text-xs text-center font-medium', item.title || String(c)));
        certGrid.append(card);
    });
    certCol.append(certGrid);
    edu.append(eduCol);
    edu.append(certCol);

    // Contact (icon-only)
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
        contact.append(
            makeIconLink(siteConfig.email, 'Email', 'https://skillicons.dev/icons?i=gmail', 'Email icon')
        );
    }
    if (siteConfig.linkedin) {
        contact.append(
            makeIconLink(siteConfig.linkedin, 'LinkedIn', 'https://skillicons.dev/icons?i=linkedin', 'LinkedIn icon')
        );
    }
    if (siteConfig.github && siteConfig.github !== 'https://github.com/') {
        contact.append(
            makeIconLink(siteConfig.github, 'GitHub', 'https://skillicons.dev/icons?i=github', 'GitHub icon')
        );
    }

    // Footer
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footerName').textContent = siteConfig.name;

}

document.addEventListener('DOMContentLoaded', render);
