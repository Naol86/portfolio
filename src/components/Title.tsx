import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-2xl font-bold text-white mb-10 sticky top-0 bg-blue-200 rounded-[5px] bg-opacity-5 backdrop-blur-md py-2 sm:py-4 px-4 z-10">
      {title}
    </h1>
  );
}
