"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function InteractiveBackground({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY + window.scrollY, // Adjust for scroll
    });
  };

  const wrappedChildren = React.Children.map(children, (child, index) => (
    <AnimatedDiv key={index}>{child}</AnimatedDiv>
  ));

  return (
    <motion.div
      className="min-h-screen bg-slate-900"
      onMouseMove={handleMouseMove}
      animate={{
        background: [
          `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 1) 50%)`,
        ],
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }} // Adjusted transition
    >
      {wrappedChildren}
    </motion.div>
  );
}

const AnimatedDiv: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
