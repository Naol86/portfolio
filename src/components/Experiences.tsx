import React from "react";
import Experience from "./Experience";
import Title from "./Title";

export default function Experiences() {
  const experiences = [
    {
      start: "Nov 2024",
      end: "Present",
      role: "Full Stack Developer",
      company: "Abyssinia Software Solutions",
      technologies: ["Next.js", "React", "Express", "PHP", "Laravel", "Redux"],
    },
    {
      start: "Sep 2024",
      end: "Present",
      role: "A2SV Community Coordinator",
      company: "African to Silicon Valley",
      technologies: [
        "Data Structure and Algorithms",
        "Teaching",
        "Communication",
      ],
    },
    {
      start: "Sep 2024",
      end: "Oct 2024",
      role: "Full Stack Developer Intern",
      company: "Hawi Software Solutions",
      technologies: ["Laravel", "PHP", "Next.js", "React"],
    },
    {
      start: "Jul 2024",
      end: "Nov 2024",
      role: "Frontend Web Developer",
      company: "Eskalate Internship",
      technologies: ["Next.js", "GoLang", "Redux"],
    },
  ];

  return (
    <div id="experiences">
      <Title title="Experiences" />
      <section className="space-y-2 divide-y-2 divide-white/20 px-2">
        {experiences.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </section>
    </div>
  );
}
