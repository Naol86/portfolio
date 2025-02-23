import React from "react";
import Title from "./Title";
import Project from "./Project";

const projects = [
  {
    startDate: "2025-01-26",
    endDate: "2024-12-10",
    title: "Top Games Betting site",
    description:
      "A Casino betting site with a sleek user interface and smooth API integrations, built with modern technologies for an exceptional user experience.",
    technologies: [
      "React.js",
      "Express js",
      "shadcn",
      "Rest Api",
      "Tailwind CSS",
    ],
    image: "/topgames.png",
    images: ["/topgames.png", "/topgames2.png"],
    link: "#",
    otherDetails:
      "Game betting site with a sleek user interface and smooth API integrations.",
  },
  {
    startDate: "2024-11-20",
    endDate: "2024-12-10",
    title: "Abyssinia Software Solution Portfolio",
    description:
      "A portfolio showcasing a sleek user interface and smooth API integrations, built with modern technologies for an exceptional user experience.",
    technologies: [
      "Next.js",
      "Express js",
      "shadcn",
      "Rest Api",
      "Tailwind CSS",
    ],
    image: "/abyssinia.png",
    images: ["/images/abyssinia-1.png", "/images/abyssinia-2.png"],
    link: "https://abyssiniasoftware.com/",
    otherDetails:
      "Focused on crafting an elegant UI and ensuring smooth API integrations for an exceptional user experience.",
  },
  {
    startDate: "2024-11-20",
    endDate: "2024-12-10",
    title: "Birra Coffee Website",
    description:
      "A professional front-end and integration project for Birra Coffee, developed as part of my work at Abyssinia Software Solutions. The website is designed to deliver a seamless user experience with a modern and responsive UI.",
    technologies: [
      "Next.js",
      "Redux Query",
      "shadcn",
      "Rest Api",
      "Tailwind CSS",
    ],
    image: "/birragroup.png",
    images: ["/images/birra-coffee-1.png", "/images/birra-coffee-2.png"],
    link: "https://birragroup.com/",
    otherDetails:
      "Focused on crafting an elegant UI and ensuring smooth API integrations for an exceptional user experience.",
  },
  {
    startDate: "2024-10-01",
    endDate: "2024-12-31",
    title: "LML Repair",
    description:
      "An ERP system built to manage a repair shop in Seattle. I worked as a full-stack developer on this project, focusing on both the front-end and back-end development to streamline operations and enhance customer service.",
    technologies: ["Next.js", "Prisma", "SEO", "Mysql", "Shadcn"],
    image: "/lmlrepair.png",
    images: ["/images/lml-repair-1.png", "/images/lml-repair-2.png"],
    link: "https://lmlrepair.com/",
    otherDetails:
      "Developed a comprehensive ERP solution to manage inventory, customer relations, and workflow automation for a repair shop.",
  },
  {
    startDate: "2024-11-01",
    endDate: "2024-11-15",
    title: "Naol AI",
    description:
      "A fun AI chatbot project inspired by ChatGPT, showcasing conversational AI capabilities and backend integration. Built to explore and demonstrate the implementation of AI-powered applications.",
    technologies: [
      "Next.js",
      "Zustand",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "Python",
      "Automation",
    ],
    image: "/naolai.png",
    images: ["/images/naol-ai-1.png", "/images/naol-ai-2.png"],
    link: "https://ai.naol.me",
    otherDetails:
      "A fully responsive and interactive project, combining AI with a modern tech stack.",
  },
  {
    startDate: "2024-09-01",
    endDate: "2024-09-30",
    title: "Bank Dash",
    description:
      "A frontend dashboard and integration project focused on delivering a clean, responsive, and user-friendly interface for banking applications. Designed to improve user experience and accessibility.",
    technologies: ["Next.js", "Redux", "REST API", "Tailwind CSS", "Python"],
    image: "/bankdash.png",
    images: ["/images/bank-dash-1.png", "/images/bank-dash-2.png"],
    link: "https://astu-web-g1.netlify.app/",
    otherDetails:
      "The project prioritizes usability, visual design, and seamless API integrations.",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="my-5 pb-14">
      <Title title="Projects 🏗️" />
      <section className="space-y-2 divide-y-2 divide-white/20 px-2">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </section>
    </div>
  );
}
