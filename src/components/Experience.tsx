import React from "react";
import Tag from "./Tag";
import { ArrowUpFromDot } from "lucide-react";

interface ExperienceType {
  start: string;
  end: string;
  role: string;
  company: string;
  technologies: string[];
}

export default function Experience({
  experience,
}: {
  experience: ExperienceType;
}) {
  console.log(experience);
  if (!experience) return <></>;
  return (
    <div className="md:flex py-4 gap-1 px-4 rounded-md bg-blue-400 bg-opacity-0 backdrop-blur-md hover:bg-opacity-5 transition-all duration-300">
      <div className="md:min-w-[130px] flex flex-col items-center gap-2">
        <p className="text-sm text-gray-400">{experience.end}</p>
        <p className="text-center text-gray-400">
          <ArrowUpFromDot />
        </p>
        <p className="text-sm text-gray-400">{experience.start}</p>
      </div>
      <div className="grow">
        <div className="flex justify-between items-baseline mb-4">
          <h3 className="text-xl font-semibold text-white">
            {experience.role} · {experience.company}
          </h3>
        </div>
        <p className="mb-4 text-gray-300">
          Build and maintain critical components used to construct
          Klaviyo&apos;s frontend, across the whole product. Work closely with
          cross-functional teams, including developers, designers, and product
          managers.
        </p>
        <div className="flex gap-2 flex-wrap">
          {experience.technologies.map((title, index) => (
            <Tag title={title} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
