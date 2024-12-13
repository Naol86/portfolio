import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function CustomLink({ link }: { link: string }) {
  return (
    <Link href={link} passHref>
      <motion.div
        animate={{
          y: ["10%", "-40%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
        }}
      >
        <ArrowUpRight className="text-blue-400" />
      </motion.div>
    </Link>
  );
}
