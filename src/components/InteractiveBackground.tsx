"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function InteractiveBackground({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <motion.div
      className=" bg-slate-900"
      onMouseMove={handleMouseMove}
      animate={{
        background: [
          `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 1) 50%)`,
        ],
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
