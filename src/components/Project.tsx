import React from "react";
import Tag from "./Tag";
import Image from "next/image";
import CustomLink from "./CustomLink";

export default function Project() {
  return (
    <div className="md:flex py-4 gap-1 items-center px-4 rounded-md bg-blue-400 bg-opacity-0 backdrop-blur-md hover:bg-opacity-5 transition-all duration-300">
      <div className="md:min-w-[130px] p-1">
        <div className="relative aspect-[10/5] md:aspect-[7/6] mx-1 py-2">
          <Image
            fill
            src="/placeholder.jpg"
            alt="test"
            className="object-cover rounded-md border-2 border-white/35"
          />
        </div>
      </div>
      <div className="grow">
        <div className="flex justify-between items-baseline mb-4 group">
          <h3 className="text-xl font-semibold text-white">
            Senior Frontend Engineer · Klaviyo
          </h3>
          <div className="group-hover:scale-105 transition-transform">
            <CustomLink link={"#"} />
          </div>
        </div>
        <p className="mb-4 text-gray-300">
          Build and maintain critical components used to construct
          Klaviyo&apos;s frontend, across the whole product. Work closely with
          cross-functional teams, including developers, designers, and product
          managers.
        </p>
        <div className="flex gap-2 flex-wrap">
          {["React", "Next.Js", "NestJs", "AI"].map((title, index) => (
            <Tag title={title} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
