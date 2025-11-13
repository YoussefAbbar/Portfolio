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
    title: "AWS Marketplace Data Feed Transformation",
    description: "Orchestrated a transformative serverless SaaS project to process AWS Marketplace data feeds, creating insightful dashboards for sellers.",
    technologies: ["AWS Glue", "AWS Athena", "AWS Lambda", "AWS QuickSight", "AWS Cognito", "DynamoDB", "CloudFormation"],
    features: [
      "Developed YAML templates for automated deployment with and without pre-existing S3 buckets",
      "Engineered automated ETL process triggered by data feed reception",
      "Created multi-tenant SaaS application with personalized tenant dashboards",
      "Implemented secure authentication using AWS Cognito",
      "Integrated QuickSight dashboards into SaaS application"
    ]
  },
  {
    id: "2",
    title: "BookHunter Mobile App",
    description: "Led development of a cross-platform mobile application for book scanning and discovery using React Native.",
    technologies: ["React Native", "AWS Recognition", "TypeScript", "iOS", "Android"],
    features: [
      "Developed efficient ISBN scanner for barcodes and digit recognition",
      "Integrated AWS Recognition service for enhanced scanning accuracy",
      "Built cross-platform app supporting both iOS and Android",
      "Implemented book discovery and tracking features"
    ]
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
    ]
  },
  {
    id: "4",
    title: "CloudSmart SaaS Platform",
    description: "Building a comprehensive cloud management platform with features like private offers, well-architected reviews, and metering.",
    technologies: ["Angular", "AWS", "TypeScript", "AWS CloudFormation", "QuickSight", "SES", "SNS"],
    features: [
      "Private Offer management with SES integration",
      "OTP authentication system",
      "Well-Architected Framework integration with custom lens creation",
      "Observability and monitoring dashboards",
      "SaaS Quick Launch integration",
      "Usage metering and analytics",
      "Partner CRM API integration"
    ]
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
    name: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
    issuer: "AWS"
  },
  {
    name: "AWS Educate Getting Started with Serverless",
    issuer: "AWS Educate"
  },
  {
    name: "AWS Educate Getting Started with Storage",
    issuer: "AWS Educate"
  },
  {
    name: "Introduction to Front-End Development",
    issuer: "Coursera/Meta"
  }
];

export const education: Education[] = [
  {
    institution: "Institut F2I",
    degree: "Master 2 (M2)",
    field: "Web Architect",
    duration: "September 2025 - November 2026",
    location: "Vincennes, France"
  },
  {
    institution: "IT Learning Academy",
    degree: "Master's Degree",
    field: "Web Application Design and Development",
    duration: "2022 - 2024",
    location: "Morocco"
  },
  {
    institution: "FST Settat",
    degree: "Bachelor's Degree",
    field: "Science and Technology: Computer Engineering",
    duration: "2020 - 2021",
    location: "Settat, Morocco"
  },
  {
    institution: "FST Settat",
    degree: "Associate's Degree",
    field: "Mathematics, Computer Science, and Physics (MIP)",
    duration: "2018 - 2020",
    location: "Settat, Morocco"
  }
];
