import React from "react";
import Title from "./Title";

export default function About() {
  return (
    <div id="about">
      <Title title="About" />
      <section className="space-y-2 divide-y-2 divide-white/20 px-2">
        {/* {Array.from({ length: 3 }).map((_, index) => (
          <Experience key={index} />
        ))} */}
      </section>
    </div>
  );
}
