import { codecademy } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    postgresql,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
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
    }
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Codecademy",
        icon: codecademy,
        iconBg: "#accbe1",
        date: "2023",
        points: [
            "I have hands-on experience in building full-stack applications, I've developed features like authentication, RESTful APIs, and database integrations using Node.js, Express, and MongoDB.",
            "My approach emphasizes efficient backend logic paired with seamless front-end performance for a complete user experience.",
            "My dedication to learning and my ability to adapt to new technologies make me an asset for teams seeking innovative and reliable solutions.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Codecademy",
        icon: codecademy,
        iconBg: "#fbc3bc",
        date: "2024",
        points: [
            "I have experience developing web projects, ranging from responsive personal websites to dynamic e-commerce platforms, focusing on clean design and user-friendly functionality.",
            "Leveraging technologies like HTML, CSS, JavaScript, and React, I've honed my ability to create visually appealing and highly interactive web experiences.",
            "I implement responsive design while ensuring cross-browser compatibility using React.js and other related technologies.",
        ],
    },
    {
        title: "Fundamentals of Cybersecurity",
        company_name: "Codecademy",
        icon: codecademy,
        iconBg: "#a2d2ff",
        date: "2024",
        points: [
            "Having completed foundational training in cybersecurity, I understand the importance of secure code practices, data encryption, and vulnerability mitigation.",
            "This knowledge enables me to incorporate security-first principles into every project I develop, ensuring user data is safeguarded.",
            "I thrive on solving complex coding challenges and continuously expanding my skillset.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/HD-40307g',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'HooBank',
        description: 'HooBank is a sleek and professional banking website built with React and Tailwind CSS, featuring responsive design and smooth animations.',
        link: 'https://github.com/HD-40307g/bank_modern_app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'CarHub',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/HD-40307g/car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Sushiman',
        description: 'A beautifully designed and fully responsive website built with HTML and CSS, focusing on clean layout and cross-device compatibility, demonstrating expertise in front-end development and modern styling techniques.',
        link: 'https://github.com/HD-40307g/sushiman',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Brainwave',
        description: 'This project showcases advanced React development skills, including state management and API integration.',
        link: 'https://github.com/HD-40307g/brainwave',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/HD-40307g/ai_summerizer',
    }
];