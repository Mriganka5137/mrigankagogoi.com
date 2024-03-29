import { FaNode, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  {
    id: 1,
    label: "React",
    experience: 4,
    icon: FaReact,
  },
  {
    id: 2,
    label: "Next.js",
    experience: 4,

    icon: SiNextdotjs,
  },
  {
    id: 3,
    label: "JavaScript",
    experience: 4,
    icon: SiJavascript,
  },
  {
    id: 4,
    label: "TypeScript",
    experience: 2,
    icon: SiTypescript,
  },
  {
    id: 5,
    label: "MongoDB",
    experience: 2,
    icon: SiMongodb,
  },
  {
    id: 6,
    label: "Node.js",
    experience: 2,
    icon: FaNode,
  },
];

export const projectList = [
  {
    id: 1,
    label: "DevFlow",
    img_url: "/assets/images/devflow.png",
    live_link: "https://devflow-drab.vercel.app/",
    github_link: "https://github.com/Mriganka5137/Devflow",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    details: [
      "Seamlessly share your coding-related queries, questions, and bugs within the community to seek assistance and contribute solutions to others.",
      "Implemented an advanced technology stack, including Next.js 14, Mongoose, Tailwind CSS, and Clerk for authentication, ensuring the application is built on the latest and most efficient tools.",
    ],
  },
  {
    id: 2,
    label: "Issue Tracker",
    img_url: "/assets/images/issue_tracker.png",
    live_link: "https://issue-tracker-mriganka5137.vercel.app/",
    github_link: "https://github.com/Mriganka5137/issue-tracker",
    tech: ["Next.js", "TypeScript", "MYSQL"],
    details: [
      "Developed a comprehensive Next.js application designed for end-to-end issue tracking and assignment",
      "Empowered users to break down complex problems into manageable chunks, facilitating efficient tracking and resolution within the app.",
    ],
  },
  {
    id: 3,
    label: "Game Hub",
    img_url: "/assets/images/game_hub.png",
    live_link: "https://game-hub-mriganka5137.vercel.app/",
    github_link: "https://github.com/Mriganka5137/game-hub",
    tech: ["React", "React Query", "TypeScript"],
    details: [
      "Crafted an aesthetically pleasing React User Interface by harnessing the power of the RAWG Video Games Database API.",
      "Implemented client-side caching and incorporated infinite scrolling functionalities using React Query, optimizing the application for seamless and efficient user interactions.",
    ],
  },
  {
    id: 4,
    label: "In Browser Markdown Editor",
    img_url: "/assets/images/markdown.jpg",
    live_link: "https://markdown-editor-app-git-main-mriganka5137.vercel.app/",
    github_link: "https://github.com/Mriganka5137/markdown-editor-app",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    details: [
      "Developed a Next.js application that allows users to create, edit, and delete markdown files.",
      " Implemented dark and light mode functionality: Users can switch between light and dark mode, enhancing customization and user engagement.",
    ],
  },
  {
    id: 5,
    label: "Dribble Clone",
    img_url: "/assets/images/dribble.png",
    live_link:
      "https://frontend-domination-css-projects-mriganka5137.vercel.app/dribble",
    github_link:
      "https://github.com/Mriganka5137/Frontend-Domination/tree/main/css-projects/app/(projects)/dribble",
    tech: ["Next.js", "React", "Tailwind CSS"],
    details: [
      "Meticulously crafted a pixel-perfect landing page mirroring the design excellence of the Dribbble website.",
      "Introduced an engaging and visually appealing user experience by implementing an infinite horizontal scroll, accompanied by captivating animations.",
    ],
  },
  {
    id: 6,
    label: "Quiz App",
    img_url: "/assets/images/quiz-app.jpg",
    live_link: "https://quiz-app-mriganka5137.vercel.app/",

    github_link: "https://github.com/Mriganka5137/quiz-app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    details: [
      "Developed an interactive quiz application: Leveraged Next.js and Tailwind CSS to create a dynamic quiz platform.",
      "Implemented subject selection feature: Users can choose from a variety of quiz subjects, enhancing customization and user engagement.",
      "Displayed a completed state with score: After the final question, users can view a comprehensive summary including their overall score.",
    ],
  },
  {
    id: 7,
    label: "Dictionary App",
    img_url: "/assets/images/dictionary-app.jpg",
    live_link: "https://dictionary-app-mriganka5137.vercel.app/",

    github_link: "https://github.com/Mriganka5137/dictionary-app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    details: [
      "Developed a comprehensive dictionary application that allows users to search for words and view their definitions.",
      "Implemented dark mode functionality: Users can switch between light and dark mode, enhancing customization and user engagement.",
      "Font selection feature: Users can choose from a variety of fonts, enhancing customization and user engagement.",
    ],
  },
];

export const socialLinks = [
  {
    id: 1,
    label: "github",
    href: "https://github.com/Mriganka5137",
    img_url: "/assets/images/icon-github.svg",
  },
  {
    id: 2,
    label: "frontend mentor",
    href: "https://www.frontendmentor.io/profile/Mriganka5137",
    img_url: "/assets/images/icon-frontend-mentor.svg",
  },
  {
    id: 3,
    label: "linkedin",
    href: "https://www.linkedin.com/in/mriganka-gogoi/",
    img_url: "/assets/images/icon-linkedin.svg",
  },
  {
    id: 4,
    label: "twitter",
    href: "https://twitter.com/_Mriganka_",
    img_url: "/assets/images/icon-twitter.svg",
  },
];
