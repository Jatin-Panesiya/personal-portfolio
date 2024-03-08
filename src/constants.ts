import { projectCard } from "./interfaces";

export const projectData: projectCard[] = [
  {
    id: 1,
    img: "/omegle.webp",
    tech: ["Next.js 14", "Tailwind Css", "Socket.io"],
    features: ["Random Video Call", "Responsive", "Multi Language"],
    link: "https://omegle.nu",
    title: "Omegle Clone",
  },
  {
    id: 2,
    img: "/portfolio.webp",
    tech: [
      "React JS",
      "Typescript",
      "Tailwind Css",
      "Node Js",
      "Express",
      "Mongoose",
      "Mantine",
      "jwt",
    ],
    features: [
      "API integration",
      "CRUD",
      "Responsive",
      "Authentication",
      "Admin Panel",
    ],
    link: "/",
    title: "IT Company Portfolio",
  },
];
export const skills = [
  {
    category: "Front-end Development",
    skills: [
      { name: "HTML", color: "#FFA500" },
      { name: "CSS", color: "#1572B6" },
      { name: "Javascript", color: "#FFFF00" },
      { name: "Typescript", color: "#3178C6" },
      { name: "React JS", color: "#87CEEB" },
      { name: "Next JS", color: "#000000" },
      { name: "Tailwind CSS", color: "#38B2AC" },
      { name: "Redux Tool Kit", color: "#764ABC" },
      { name: "MUI", color: "#1572B6" },
    ],
  },
  {
    category: "Back-end Development",
    skills: [
      { name: "NodeJs", color: "#339933" },
      { name: "Express", color: "#333333" },
      { name: "MongoDB", color: "#4DB33D" },
      { name: "Jwt", color: "#764ABC" },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Github", color: "#fff" },
      { name: "Visual Studio Code", color: "#1572B6" },
    ],
  },
];
