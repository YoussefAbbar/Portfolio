import { PersonalInfo, Experience, Project, Skill, Certification, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Youssef ABBAR",
  title: "Full-Stack Developer | AWS Solutions Architect",
  email: "abbaryoussef345@gmail.com",
  linkedin: "https://www.linkedin.com/in/youssef-abbar",
  upwork: "https://www.upwork.com/freelancers/~01cfab190ba7aad6f5",
  location: "Paris, Île-de-France, France",
  bio: "Full-Stack Developer & AWS Solutions Architect with a Master's in Web Architecture. I build cloud-native SaaS applications using AWS (Cognito, Lambda, DynamoDB, Glue, Athena, QuickSight) and modern frameworks (Angular, React). Passionate about cloud architecture and scalable solutions, I thrive in dynamic teams and aim to deliver secure, high-quality applications while growing my expertise."
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Upwork",
    position: "Full Stack Developer | Solutions Architect",
    duration: "February 2024 - Present",
    location: "Remote",
    description: [
      "Building cloud-native SaaS applications using AWS services and modern frameworks",
      "Architecting scalable serverless solutions for diverse client requirements",
      "Implementing CI/CD pipelines and infrastructure as code using AWS CloudFormation"
    ],
    technologies: ["AWS", "React", "Angular", "Node.js", "TypeScript", "DynamoDB", "Lambda"]
  },
  {
    id: "2",
    company: "Metaverse",
    position: "Full Stack Developer",
    duration: "June 2023 - April 2024",
    location: "Casablanca-Settat, Morocco",
    description: [
      "Facilitated weekly progress meetings with clients to ensure alignment on project goals",
      "Collaborated on FCN4U.com development, focusing on frontend and responsive design",
      "Developed AWS Marketplace Data Feed Transformation using serverless architecture",
      "Created BookHunter mobile app using React Native with AWS Recognition integration",
      "Implemented multi-tenant SaaS applications with personalized dashboards"
    ],
    technologies: ["React", "Angular", "React Native", "AWS Glue", "AWS Athena", "AWS Lambda", "AWS QuickSight", "AWS Cognito"]
  },
  {
    id: "3",
    company: "Metaverse",
    position: "AWS Developer",
    duration: "April 2023 - May 2023",
    location: "Casablanca-Settat, Morocco",
    description: [
      "Developed serverless applications using AWS services",
      "Implemented ETL pipelines with AWS Glue and Athena",
      "Created data analytics dashboards using AWS QuickSight"
    ],
    technologies: ["AWS", "Lambda", "Glue", "Athena", "QuickSight", "DynamoDB"]
  },
  {
    id: "4",
    company: "Web3 Community",
    position: "Collaboration Manager",
    duration: "2021 - 2022",
    location: "Casablanca-Settat, Morocco",
    description: [
      "Discovered passion for Web3 and blockchain technologies",
      "Contributed to multiple Web3 projects alongside experienced professionals",
      "Gained hands-on exposure to decentralized applications and smart contracts"
    ],
    technologies: ["Web3", "Blockchain", "Smart Contracts"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "CloudSmart - AWS Marketplace Management Platform",
    description: "Comprehensive cloud management platform that helps AWS partners manage their marketplace presence, private offers, and customer engagement. Orchestrated a transformative serverless SaaS project to process AWS Marketplace data feeds, creating insightful dashboards for sellers. Featured in AWS Marketplace blog for innovative use of AWS Marketplace APIs.",
    technologies: ["Angular", "AWS Glue", "AWS Athena", "AWS Lambda", "AWS QuickSight", "AWS Cognito", "DynamoDB", "CloudFormation", "AWS Marketplace APIs", "SES", "SNS", "TypeScript"],
    features: [
      "Developed YAML templates for automated deployment with and without pre-existing S3 buckets",
      "Engineered automated ETL process triggered by data feed reception",
      "Created multi-tenant SaaS application with personalized tenant dashboards",
      "Private Offer Campaign management with AWS Marketplace APIs integration",
      "OTP authentication system for secure access",
      "Well-Architected Framework integration with custom lens creation",
      "Observability and monitoring dashboards with QuickSight",
      "SaaS Quick Launch integration for rapid deployment",
      "Usage metering and analytics for marketplace products",
      "Partner CRM API integration for customer management",
      "Featured in AWS Marketplace official blog"
    ],
    link: "https://aws.amazon.com/marketplace/pp/prodview-2pytus72jnwck"
  },
  {
    id: "2",
    title: "BookHunter - Sell, Buy & Rent Books",
    description: "Led development of a cross-platform mobile application for book scanning, buying, selling, and renting books. Available on iOS App Store and Google Play Store.",
    technologies: ["React Native", "AWS Recognition", "TypeScript", "iOS", "Android"],
    features: [
      "Developed efficient ISBN scanner for barcodes and digit recognition",
      "Integrated AWS Recognition service for enhanced scanning accuracy",
      "Built cross-platform app supporting both iOS and Android",
      "Implemented book discovery and tracking features",
      "Published on both Apple App Store and Google Play Store"
    ],
    link: "https://apps.apple.com/us/app/bookhunter-sell-buy-rent/id1659667251"
  },
  {
    id: "3",
    title: "FCN4U.com Website",
    description: "Collaborated on the development of a responsive web platform, focusing on frontend implementation and user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    features: [
      "Ensured seamless responsiveness across desktop and mobile platforms",
      "Developed and modified components and pages",
      "Implemented modern UI/UX design patterns",
      "Managed Quality Assurance processes"
    ],
    images: ["/1706134700517.jpeg", "/1706134750402.jpeg"]
  }
];

export const skills: Skill[] = [
  {
    category: "Cloud & AWS",
    items: [
      "AWS Lambda",
      "AWS Glue",
      "AWS Athena",
      "AWS QuickSight",
      "AWS Cognito",
      "DynamoDB",
      "AWS S3",
      "AWS CloudFormation",
      "AWS CloudFront",
      "AWS Route 53",
      "AWS API Gateway",
      "AWS CloudWatch",
      "AWS SES",
      "AWS SNS",
      "Serverless Architecture"
    ]
  },
  {
    category: "Frontend Development",
    items: [
      "React",
      "Next.js",
      "Angular",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design"
    ]
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Serverless Functions",
      "ETL Pipelines",
      "Data Processing"
    ]
  },
  {
    category: "Database & Data",
    items: [
      "DynamoDB",
      "SQL",
      "Data Analytics",
      "Data Visualization",
      "ETL Processes"
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git",
      "GitHub",
      "CI/CD",
      "AWS CloudFormation",
      "Infrastructure as Code",
      "Agile Methodologies"
    ]
  },
  {
    category: "Documentation & Communication",
    items: [
      "Technical Documentation",
      "Software Documentation",
      "Statements of Work (SOW)",
      "API Documentation",
      "Client Communication"
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: "Introduction to Cloud 101",
    issuer: "AWS Educate"
  },
  {
    name: "Getting Started with Storage",
    issuer: "AWS Educate"
  },
  {
    name: "Getting Started with Compute",
    issuer: "AWS Educate"
  },
  {
    name: "Getting Started with Databases",
    issuer: "AWS Educate"
  },
  {
    name: "Getting Started with Security",
    issuer: "AWS Educate"
  },
  {
    name: "Getting Started with Networking",
    issuer: "AWS Educate"
  },
  {
    name: "Getting Started with Serverless",
    issuer: "AWS Educate"
  },
  {
    name: "Getting Started with Cloud Ops",
    issuer: "AWS Educate"
  },
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta"
  }
];

export const education: Education[] = [
  {
    institution: "Institut F2I - École DSP",
    degree: "Master 2 - Architecte Web (Titre RNCP niveau 7)",
    field: "Web Architecture",
    duration: "October 2025 - December 2026",
    location: "Vincennes, France"
  },
  {
    institution: "Faculté des Sciences et Techniques - IT Learning",
    degree: "Master 1 - Conception et Développement d'Applications",
    field: "Web Application Design and Development",
    duration: "October 2022 - October 2024",
    location: "Casablanca, Morocco"
  },
  {
    institution: "Faculté des Sciences et Techniques",
    degree: "Licence Sciences et Techniques - Génie Informatique",
    field: "Computer Engineering",
    duration: "October 2020 - July 2021",
    location: "Settat, Morocco"
  },
  {
    institution: "Faculté des Sciences et Techniques",
    degree: "DEUST - Mathématiques, Informatique, Physique (MIP)",
    field: "Mathematics, Computer Science, and Physics",
    duration: "October 2018 - June 2020",
    location: "Settat, Morocco"
  }
];
