import React from "react";
import Experience from "./Experience";
import Title from "./Title";

const experiences = [
  // {
  //   start: "Jan 2025",
  //   end: "present",
  //   role: "Head of Education @A2SV",
  //   company: "African to Silicon Valley",
  //   technologies: [
  //     "Data Structures",
  //     "Algorithms",
  //     "Teaching",
  //     "Student Engagement",
  //   ],
  //   description:
  //     "As the Head of Education, I am responsible for teaching students about data structures and algorithms, managing my class, and maintaining effective communication with students. My role involves delivering lectures, guiding students in their learning journeys, and handling other educational responsibilities to foster a productive and inclusive environment.",
  // },
  {
    start: "Nov 2024",
    end: "Jan 2025",
    role: "Full Stack Developer",
    company: "Abyssinia Software Solutions",
    technologies: ["Next.js", "React", "Express", "PHP", "Laravel", "Redux"],
    description:
      "Developing and maintaining scalable web applications with a focus on high performance, reliability, and user-centered design. Collaborating with cross-functional teams to implement new features, troubleshoot issues, and optimize existing systems.",
  },
  {
    start: "Sep 2024",
    end: "Jan 2025",
    role: "Community Coordinator @A2SV",
    company: "African to Silicon Valley",
    technologies: [
      "Data Structure and Algorithms",
      "Teaching",
      "Communication",
    ],
    description:
      "Coordinating and mentoring a community of aspiring students, teaching data structures and algorithms, and facilitating communication to ensure a collaborative and inclusive learning environment.",
  },
  {
    start: "Sep 2024",
    end: "Oct 2024",
    role: "Full Stack Developer Intern",
    company: "Hawi Software Solutions",
    technologies: ["Laravel", "PHP", "Next.js", "React"],
    description:
      "Contributed to the development of robust full stack applications, focusing on creating efficient backend systems with Laravel and PHP, and building interactive and responsive frontends using React and Next.js.",
  },
  {
    start: "Jul 2024",
    end: "Nov 2024",
    role: "Frontend Web Developer",
    company: "Eskalate Internship",
    technologies: ["Next.js", "GoLang", "Redux"],
    description:
      "Designed and implemented dynamic user interfaces, ensuring responsiveness and cross-browser compatibility. Worked closely with backend developers using GoLang to integrate APIs and deliver seamless user experiences.",
  },
];

export default function Experiences() {
  return (
    <div id="experiences">
      <Title title="Experiences 👨🏽‍💻" />
      <section className="space-y-2 divide-y-2 divide-white/20 px-2">
        {experiences.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </section>
    </div>
  );
}
