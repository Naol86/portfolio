"use client";

import React from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function InteractiveScroll({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Wrap children with AnimatedDiv
  const wrappedChildren = React.Children.map(children, (child, index) => (
    <AnimatedDiv key={index}>{child}</AnimatedDiv>
  ));

  return <div className="min-h-screen">{wrappedChildren}</div>;
}

const AnimatedDiv: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeOut" },
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
