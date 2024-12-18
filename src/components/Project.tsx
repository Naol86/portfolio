import React from "react";
import Tag from "./Tag";
import Image from "next/image";
import CustomLink from "./CustomLink";
import Link from "next/link";

interface ProjectType {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  images: string[];
  link: string;
  otherDetails?: string;
}

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className="md:flex py-4 gap-1 items-center px-4 rounded-md bg-blue-400 bg-opacity-0 backdrop-blur-md hover:bg-opacity-5 transition-all duration-300">
      <div className="md:min-w-[130px] p-1">
        <div className="relative aspect-[10/5] md:aspect-[7/6] mx-1 py-2">
          <Image
            fill
            src={project.image}
            alt={project.title}
            className="object-cover rounded-[5px] border-2 border-white/35"
          />
        </div>
      </div>
      <div className="grow">
        <div className="flex justify-between items-baseline mb-4 group">
          <Link
            href={project.link}
            className="hover:text-blue-400 text-white transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </Link>
          <div className="group-hover:scale-105 transition-transform">
            <CustomLink link={project.link} />
          </div>
        </div>
        <p className="mb-4 text-gray-300">{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((title, index) => (
            <Tag title={title} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
