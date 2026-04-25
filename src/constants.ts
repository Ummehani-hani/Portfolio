/**
 * Portfolio constants containing the resume data for Umm E Hani
 * Inspired by the provided resume and SQA best practices.
 */

export const PERSONAL_INFO = {
  name: "Umm E Hani",
  title: "Software Quality Assurance",
  location: "Karachi, Pakistan",
  email: "hani0080@outlook.com",
  phone: "+923102274073",
  linkedin: "https://www.linkedin.com/in/umm-e-hani-14a602257/",
  github: "https://github.com/hani0080/",
  summary: "Software Quality Assurance enthusiast with skills in manual testing, test case design, and bug reporting. Hands-on experience in automation using Selenium and Playwright, along with API testing. Recognized for academic excellence, with strong problem-solving and collaboration skills to ensure software quality and reliability."
};

export const EXPERIENCE = [
  {
    company: "VinnCorp",
    role: "Associate Software Quality Assurance",
    period: "Feb2026-Present",
    points: [
      "Reviewed requirements and created detailed test plans, test scenarios, and test cases for web and mobile applications.",
      "Executed functional, regression, validation, and end-to-end testing across multiple platforms.",
      "Designed and executed UI/UX test cases based on Figma designs to ensure consistency.",
      "Identified, logged, and tracked defects using Jira and ClickUp, and collaborated with developers for resolution and retesting.",
      "Performed API testing using Postman, validating request/response data, status codes, and error handling.",
      "Contributed to automation testing using Selenium/Playwright for regression coverage."
    ]
  },
  {
    company: "VinnCorp",
    role: "SQA Internship",
    period: "Nov2025-Feb2026",
    points: [
      "Identified and reported bugs via Jira, including build validation and rejection.",
      "Performed functional, UI, positive/negative, and exploratory testing on key features.",
      "Validated user flows, system behavior, pagination, and state management.",
      "Conducted UI testing by comparing with Figma to identify inconsistencies.",
      "Gained experience with Playwright (locators, basic automation) and API testing using Postman.",
      "Worked in staging and local environments with understanding of Agile workflows."
    ]
  },
  {
    company: "Mohammad Ali Jinnah University, Karachi",
    role: "SQA Bootcamp",
    period: "July 2025 – September 2025",
    points: [
      "Gained hands-on experience in the QA lifecycle, including test design, execution, and defect reporting.",
      "Performed manual, exploratory, and basic automation testing using Selenium and Playwright.",
      "Conducted API testing with Postman, created test cases, and worked within Agile workflows using Jira."
    ]
  }
];

export const EDUCATION = [
  {
    school: "Mohammad Ali Jinnah University",
    degree: "B.S. Computer Science",
    period: "October 2021 - July 2025",
    location: "Karachi - Pakistan"
  }
];

export const PROJECTS = [
  {
    title: "Adactin Automation Framework (Selenium + C#)",
    tech: "Selenium + C#",
    description: "Automated Adactin Hotel Booking app using Selenium with C# and MSTest Framework, applying Page Object Model (POM) for maintainability.",
    link: "https://github.com/hani0080/Adactin-Hotel-Booking-Automation"
  },
  {
    title: "Demo WebShop Playwright Automation Framework (TypeScript)",
    tech: "Playwright + TypeScript",
    description: "Performed end-to-end testing with Playwright (TypeScript), applying Page Object Model (POM) for maintainability.",
    link: "https://github.com/hani0080/DemoWebShop-Playwright-Test-Automation"
  },
  {
    title: "Manual Testing (OpenCart Application)",
    tech: "Manual Testing",
    description: "Performed functional and regression testing, designed test cases, reported defects, and validated fixes to ensure application stability.",
    link: "https://github.com/hani0080/OpenCart-Manual-Testing"
  }
];

export const SKILLS = [
  {
    category: "Testing",
    items: ["Manual Testing", "Automation (Web)", "API Testing"]
  },
  {
    category: "Frameworks & Languages",
    items: ["Selenium", "Playwright", "Java", "C#", "SQL", "OOP"]
  },
  {
    category: "Tools & Methodology",
    items: ["Jira", "ClickUp", "Postman", "Visual Studio", "VS Code", "Agile", "SDLC", "STLC"]
  },
  {
    category: "Documentation",
    items: ["Test Case Writing", "Bug Tracking"]
  }
];

export const AWARDS = [
  {
    title: "Got Dean's Honors Award",
    issuer: "Faculty of Computing",
    year: "2024"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Certified in QA Fundamentals",
    issuer: "10Pearls University"
  },
  {
    title: "Introduction to API Testing with Postman",
    issuer: "10Pearls University"
  },
  {
    title: "JavaScript",
    issuer: "Coursera"
  }
];
