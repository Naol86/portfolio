import React from "react";
import Title from "./Title";
import Achievement from "./Achievement";

export interface achievement {
  title: string;
  description: string;
  image: string;
  startDate?: string;
  endDate?: string;
}

const achievements: achievement[] = [
  {
    title: "1000+ Problems Solved",
    description:
      "Achieved solving 1000+ problems on LeetCode and Codeforces, showcasing problem-solving skills and algorithmic expertise.",
    image: "/leetcode.png",
    startDate: "2023-01-01",
    endDate: "2024-12-01",
  },
  {
    title: "6th Place in ETCPC",
    description:
      "Secured 6th place in the Ethiopian Universities Computer Programming Competition (ETCPC), competing against top university programmers.",
    image: "/etcpc.png",
    startDate: "2024-11-30",
    endDate: "2024-11-30",
  },
  {
    title: "ALX 12-Month Certification",
    description:
      "Successfully completed the 12-month program from ALX, gaining advanced knowledge in software development and engineering.",
    image: "/alx.jpg",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
  },
  {
    title: "CSEC ASTU Club Voluntary Teaching",
    description:
      "Volunteered with the CSEC ASTU club, teaching over 10 sessions and helping students enhance their understanding of programming and algorithms.",
    image: "/csec.jpg",
    startDate: "2023-06-01",
    endDate: "2024-12-01",
  },
];

export default function Achievements() {
  return (
    <div id="achievements pb-10">
      <Title title="Achievements 🏆" />
      <section className="grid sm:grid-cols-2 divide-white/20 px-4 sm:px-5 gap-4">
        {achievements.map((achievement, index) => (
          <Achievement key={index} achievement={achievement} />
        ))}
      </section>
      <div className="h-10"></div>
    </div>
  );
}
