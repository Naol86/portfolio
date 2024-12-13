import React from "react";

export default function Tag({ title }: { title: string }) {
  return (
    <span className="px-3 py-1 text-sm rounded-full bg-opacity-10 bg-teal-400 text-teal-300 hover:bg-teal-700 transition-all duration-300">
      {title}
    </span>
  );
}
