import {
  CalendarRange,
  LibraryBig,
  MessageCircleMore,
  MonitorCog,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const links = [
  {
    title: "About",
    icon: UserRound,
    href: "/#about",
  },
  {
    title: "Experiences",
    href: "/#experiences",
    icon: LibraryBig,
  },
  {
    title: "Projects",
    href: "/#projects",
    icon: MonitorCog,
  },
  {
    title: "Contact",
    href: "/#contact",
    icon: MessageCircleMore,
  },
  {
    title: "Blogs",
    href: "/blogs",
    icon: CalendarRange,
  },
];

export default function FootBar() {
  return (
    <div className="fixed sm:hidden flex items-center bottom-0 w-full h-14 bg-[#0d1527] bg-opacity-50 backdrop-blur-md rounded-t-[10px]">
      <div className="flex justify-between items-center px-10 w-full h-full">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`block text-sm tracking-wider text-slate-400 hover:text-white transition-colors`}
          >
            {/* {link.title.toUpperCase()} */}
            {<link.icon size={24} className="text-teal-300" />}
          </Link>
        ))}
      </div>
    </div>
  );
}
