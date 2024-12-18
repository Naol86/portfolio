import React from "react";
import Title from "./Title";

export default function About() {
  return (
    <div id="about" className="my-5">
      <Title title="About" />
      <section className="space-y-2 divide-y-2 divide-white/20 px-2">
        <div className="px-2">
          <h1 className="text-3xl mt-2 font-bold">Naol Kasinet</h1>
          <h2 className="text-sm font-semibold mb-2">
            Full Stack Web Developer | Passionate Learner | Client-Focused
            Achiever
          </h2>
          <div className="gap-2 flex flex-col text-base">
            <p>
              I am a detail-oriented full stack web developer with a passion for
              creating dynamic and scalable web applications. My expertise spans
              both frontend and backend development, utilizing modern frameworks
              and technologies such as Next.js, React, Laravel, PHP, Node.js,
              Express, and NestJS to build robust, user-centered solutions. I
              have hands-on experience working with databases like PostgreSQL,
              MySQL, and MongoDB, allowing me to design efficient and reliable
              data management systems. Additionally, I am skilled in using
              version control tools like Git and GitHub, ensuring seamless
              collaboration and code management throughout the development
              process.
            </p>
            <p>
              I pride myself on my ability to learn continuously and adapt to
              new challenges, ensuring that I stay at the forefront of emerging
              technologies. My approach is rooted in collaboration, aiming to
              achieve great results and exceed my clients&apos; expectations. By
              combining technical proficiency with clear communication, I strive
              to bring my clients&apos; visions to life efficiently and
              effectively.
            </p>
            <p>
              Whether building innovative features or optimizing existing
              systems, I am dedicated to delivering quality solutions that drive
              success for the people and businesses I work with.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
