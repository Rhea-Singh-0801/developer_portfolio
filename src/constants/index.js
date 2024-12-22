import {
  meta,
  shopify,
  starbucks,
  tesla,
  concentrix,
  q3edge,
  agami,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Specialist (React)",
    company_name: "Agami Technologies Pvt. Ltd",
    icon: agami,
    iconBg: "#accbe1",
    date: "November 2024 - Present",
    points: [
      "Developed and maintained user-friendly, responsive web applications for diverse clients, ensuring cross-browser compatibility and optimized performance.",
      "Implemented interactive UI components using React.js and Next.js, reducing development time by 20% through reusable code and modular practices.",
      "Leveraged TypeScript to improve code quality and maintainability, minimizing bugs by 30%.",
      "Collaborated with clients to translate business requirements into technical specifications, ensuring project milestones are met on schedule.",
      "Provided continuous support and updates, ensuring sustained functionality and adherence to best practices.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Concentrix Catalyst Ltd",
    icon: concentrix,
    iconBg: "#accbe1",
    date: "June 2022 - September 2023",
    points: [
      "Built a comprehensive website which enabled secure user registration, login, and profile management to enhance customized experience.",
      "Integrated a robust shopping cart and checkout system, which increased conversion rates by 15%.",
      "Collaborated cross-functionally to deliver on-time project milestones and ensured 99% uptime through efficient debugging and optimization.",
      "Enhanced user engagement with a rating and review system, receiving over 200 user-generated reviews in the first three months.",
      "Implemented secure payment methods, streamlining transaction processes and reducing cart abandonment by 20%.",
      "Debugged and resolved application issues to improve user experience.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Q3edge Consulting Pvt. Ltd",
    icon: q3edge,
    iconBg: "#accbe1",
    date: "January 2022 - June 2022",
    points: [
      "Developed responsive, mobile-first web applications using HTML, CSS, and JavaScript.",
      "Built reusable code components using React and improved web page load times by 25% through optimized code structure.",
      "Implemented Redux for efficient state management across multiple projects, reducing development time by 20%.",
      "Gained hands-on experience with CI/CD tools to automate deployment processes.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Rhea-Singh-0801",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "www.linkedin.com/in/rhea-singh-mern",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Dynamic E-Commerce website: MERN Stack",
    description:
      "Developed a web application that offers users a secure registration and login process, enabling them to manage their profiles, shopping cart, and checkout experience. Users can also rate and review products. While integrated payment methods facilitate secure transactions and streamline the checkout process, these methods are simulated and do not connect to real-world payment systems, providing a comprehensive checkout experience.",
    link: "https://lushelixirs.onrender.com/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Apple's iPhone 15 Pro Website Clone",
    description:
      "Built a clone of Apple's iPhone 15 Pro website using React.js, TailwindCSS, GSAP and Three.js. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes. Explore the iPhone 15 Pro from every angle with dynamic 3D rendering, offering various color and size options.",
    link: "https://three-d-iphone.onrender.com",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Food Recipe App",
    description:
      "App that leverages React, JavaScript, HTML, and CSS with Tailwind CSS for styling. It also utilizes an external API to fetch recipe data. The app likely calls an API to retrieve food recipes or other related information. This integration allows the app to dynamically display updated recipe content.",
    link: "https://food-recipe-app-4ttb.onrender.com",
  },
];
