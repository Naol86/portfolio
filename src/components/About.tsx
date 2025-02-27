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
            Full Stack Developer | Passionate Learner | Client-Focused Achiever
          </h2>
          <div className="gap-2 flex flex-col text-base">
            {" "}
            <p>
              {" "}
              I am a detail-oriented full stack and mobile developer passionate
              about building dynamic, scalable applications. With expertise in
              Next.js, React, Laravel, Node.js, NestJS, and Flutter, I create
              robust, user-focused solutions. My experience with PostgreSQL,
              MySQL, MongoDB, and Git ensures efficient data management and
              seamless collaboration.{" "}
            </p>{" "}
            <p>
              {" "}
              Continuously learning and adapting, I stay ahead of emerging
              technologies to deliver innovative solutions that bring client
              visions to life.{" "}
            </p>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}
