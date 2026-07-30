"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FadeInProps = Omit<HTMLMotionProps<"div">, "children" | "animate" | "initial" | "transition" | "viewport" | "whileInView"> & {
  children: ReactNode;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0, ...props }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      className={cn(className)}
      initial={reduceMotion ? false : { filter: "blur(8px)", opacity: 0, y: 22 }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
