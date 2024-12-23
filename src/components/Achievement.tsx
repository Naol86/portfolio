import React from "react";
import { achievement as aType } from "./Achievements";
import Image from "next/image";

export default function Achievement({ achievement }: { achievement: aType }) {
  return (
    <div className="rounded-[10px] bg-blue-200 bg-opacity-5 backdrop-blur-md h-full flex flex-col group">
      <div className="relative w-full aspect-[8/4] overflow-hidden">
        <Image
          src={achievement.image}
          fill
          alt={achievement.title}
          className="object-cover rounded-[10px] w-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 duration-300 rounded-lg"></div>
      </div>
      <div className="grow px-2 py-2 rounded-b-[10px]">
        <h3 className="text-base font-semibold text-white">
          {achievement.title}
        </h3>
        <p className="text-xs font-medium text-gray-400 py-1">
          {achievement.description}
        </p>
      </div>
    </div>
  );
}
