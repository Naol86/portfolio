import React from "react";
import Title from "./Title";
import Project from "./Project";

export default function Projects() {
  return (
    <div id="projects">
      <Title title="Projects" />
      <section className="space-y-2 divide-y-2 divide-white/20 px-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <Project key={index} />
        ))}
      </section>
    </div>
  );
}
