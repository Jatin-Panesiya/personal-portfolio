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
