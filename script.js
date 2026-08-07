// Portfolio rendering script
// Edit the siteConfig object to update your content.

const siteConfig = {
    name: 'Ricardo Alves Paula',
    role: 'Senior .NET Developer',
    location: 'Timóteo, Minas Gerais — Brazil',
    linkedin: 'https://www.linkedin.com/in/ricardoalvespaula/?locale=en_US',
    github: 'https://github.com/Motirck',
    repo: 'https://github.com/Motirck/chat-app', // Highlighted featured project repository
    email: 'mailto:ricardo.alves.p001@gmail.com',
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
    skills: [
        'C#', '.NET', 'ASP.NET Core', 'Azure', 'AWS', 'Microservices', 'REST APIs', 'SignalR', 'Domain-Driven Design (DDD)', 'CQRS', 'SOLID', 'Clean Architecture', 'MongoDB', 'SQL Server', 'Oracle', 'Entity Framework', 'xUnit', 'Jest', 'Docker', 'Kubernetes', 'GitHub Actions', 'Azure DevOps', 'Terraform', 'Node.js', 'Angular', 'TypeScript', 'JavaScript', 'Rider', 'VS Code', 'Jira', 'SonarQube', 'Dynatrace', 'Grafana', 'Elastic'
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
                'Designed and developed backend solutions using C#, .NET, ASP.NET Core, and Entity Framework.',
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
                    featuredRepoImg.src = `https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repo}&theme=dark&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&border_color=30363d&show_owner=true&cache_seconds=3600`;
                    featuredRepoImg.alt = `GitHub pinned card for ${user}/${repo}`;
                    featuredRepoImg.onerror = function() {
                        if (this.src.includes('github-readme-stats')) {
                            this.src = `https://gh-card.dev/repos/${user}/${repo}.svg`;
                        } else if (this.src.includes('gh-card.dev')) {
                            this.src = `https://opengraph.githubassets.com/1/${user}/${repo}`;
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
