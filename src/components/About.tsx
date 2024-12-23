import React from "react";
import Title from "./Title";

export default function About() {
  return (
    <div id="about" className="my-5">
      <Title title="About 🧔🏽" />
      <section className="space-y-2 divide-y-2 divide-white/20 px-2">
        <div className="px-2">
          <h1 className="text-3xl mt-2 font-bold">Naol Kasinet</h1>
          <h2 className="text-sm font-semibold mb-2">
            Full Stack Web Developer | Passionate Learner | Client-Focused
            Achiever
          </h2>
          <div className="gap-2 flex flex-col text-base">
            <p>
              I am a detail-oriented full stack developer passionate about
              creating dynamic and scalable web applications. With expertise in
              modern frameworks like Next.js, React, Laravel, Node.js, and
              NestJS, I deliver robust, user-focused solutions. My experience
              with databases such as PostgreSQL, MySQL, and MongoDB enables
              efficient data management, while proficiency in Git ensures smooth
              collaboration and code management.
            </p>
            <p>
              Continuously learning and adapting to new challenges, I stay at
              the forefront of emerging technologies. By combining technical
              expertise with clear communication, I bring client visions to life
              efficiently and effectively.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
