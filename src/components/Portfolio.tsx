"use client";
import Link from "next/link";
import { Github, Linkedin, Send, MailPlus } from "lucide-react";
import Experiences from "./Experiences";
import About from "./About";
import Projects from "./Projects";
import InteractiveScroll from "./InteractiveScroll";

export default function Portfolio() {
  return (
    <div className="grid min-h-screen md:grid-cols-5 text-slate-300 md:mx-10">
      <div className="relative col-span-2 w-full">
        <div className="p-8 md:fixed inset-0 max-w-md h-screen flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">Naol Kasinet</h1>
            <h2 className="text-xl">Full Stack Web Developer</h2>
            <p className="text-slate-400">
              Building dynamic, scalable, and user-friendly web solutions with
              modern technologies.
            </p>
          </div>

          <nav className="mt-12 space-y-4">
            {["about", "experiences", "projects"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`block text-sm tracking-wider text-slate-400 hover:text-white transition-colors`}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mt-12 space-x-4">
            <Link
              href="https://github.com/naol86"
              className="text-slate-400 hover:text-white transition-colors"
              target="blank"
            >
              <Github className="inline-block w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/naol-kasinet/"
              className="text-slate-400 hover:text-white transition-colors"
              target="blank"
            >
              <Linkedin className="inline-block w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:naolkasinet@gmail.com" // This is the correct format for a mailto link
              className="text-slate-400 hover:text-white transition-colors"
              target="blank"
            >
              <MailPlus className="inline-block w-5 h-5" /> {/* Email icon */}
              <span className="sr-only">Email</span>{" "}
              {/* Accessible label for screen readers */}
            </Link>

            <Link
              href="https://t.me/lijnaol"
              target="blank"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Send className="inline-block w-5 h-5" />{" "}
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-span-3 max-w-3xl mx-auto space-y-12 py-18">
        <InteractiveScroll>
          <About />
          <Experiences />
          <Projects />
        </InteractiveScroll>
      </div>
    </div>
  );
}
