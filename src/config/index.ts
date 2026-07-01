import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sujai Krishna K — FrontEnd Developer",
  author: "Sujai Krishna K",
  description:
    "Software Engineer based in Bengaluru, India. I specialize in UI design, web application development and maintenance.",
  lang: "en",
  siteLogo: "/sujai-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/sujai-krishna-k-540b9b86/",
    },
    { text: "Github", href: "https://github.com/SujaiKrishnaK" },
  ],
  socialImage: "/raja.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sujai Krishna K",
    specialty: "FrontEnd Developer",
    summary:
      "Developer based in Bengaluru, India. I specialize in web application development and maintenance.",
    email: "krishnasujai7@gmail.com",
  },
  experience: [
    {
      company: "PhonePe - Innoventes Pvt Ltd",
      position: "Senior Software Engineer",
      startDate: "June 2024",
      endDate: "Present",
      summary: [
        "Developed and scaled high-traffic frontend systems for the Pincode Org and Merchant Team using React.js and TypeScript.",
        "Built a dynamic Content Management System (CMS) enabling non-technical business teams to manage product listings and campaigns, significantly reducing engineering dependencies.",
        "Engineered the CX Console and Pulse Console analytics dashboards, improving operational visibility and customer issue resolution times.",
        "Led the architectural migration of legacy merchant web pages to Astro, shipping zero-JS by default and dramatically improving Core Web Vitals and application payload size.",
        "Contributed to the Enigma open-source UI library by standardizing design tokens and UI components for scalable theming.",
        "Won the internal AI Hackathon (Vibe Coding) for developing innovative agentic AI workflow solutions.",
      ],
    },
    {
      company: "MantraLabs Pvt. Limited",
      position: "Software Engineer",
      startDate: "Nov 2021",
      endDate: "June 2024",
      summary: [
        "Developed and maintained UI features for enterprise healthcare and InsurTech products (MLinkRx, TATA-AIA, Connect to Clinic) using React.js and Redux.",
        "Implemented complex Admin Panel modules, including VYMO integration, dynamic filtering, and Firebase notifications for Hero Insurance.",
        "Engineered dialer integrations and bulk upload features for agricultural product dashboards utilizing Firebase.",
      ],
    },
    {
      company: "Algofusion Technologies Pvt. Ltd",
      position: "Software Engineer ",
      startDate: "Sep 2020",
      endDate: "Nov 2021",
      summary: [
        "Built enterprise banking (BFSI) transaction automation systems and Oil & Gas command center dashboards using Angular and AngularJS.",
        "Enhanced user interface stability and performance for cybersecurity and ITeS applications using Bootstrap and modern styling libraries.",
      ],
    },
  ],
  projects: [
    {
      name: "Web Platform Migration",
      summary: "Tech Stack: Astro, React, TypeScript, Tailwind CSS",
      description:
        "Led the architectural migration of legacy merchant web pages to Astro, shipping zero-JS by default. Dramatically optimized Core Web Vitals, minimized application payload sizes, and improved SEO performance.",
    },
    {
      name: "Dynamic Content Management System (CMS)",
      summary: "Tech Stack: React.js, TypeScript, Node.js",
      description:
        "Engineered a highly scalable, dynamic CMS that empowered non-technical business teams to manage product listings and promotional campaigns independently, reducing engineering dependencies and accelerating time-to-market.",
    },
    {
      name: "Enterprise Analytics & Operations Dashboards (CX & Pulse Consoles)",
      summary:
        "Tech Stack: React.js, Redux, TypeScript, Recharts / Data Visualization Libraries",
      description:
        "Built high-performance operational consoles to track real-time merchant analytics and customer experience metrics, significantly lowering customer issue resolution times through improved data visibility.",
    },
  ],
  about: {
    description: `
      Hi, I’m Sujai Krishna K, As a Frontend Engineer with over five and a half years of experience building scalable,
      high-performance web applications, I am drawn to the opportunity to bring my expertise
      to a dynamic, product-driven environment. My career has been defined by a
      commitment to modernizing legacy systems, optimizing UI architecture, and building
      robust tools that directly empower business operations.
    `,
    image: "/sujai-big.jpg",
  },
};

// #5755ff
