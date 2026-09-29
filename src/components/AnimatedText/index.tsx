"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
};

/** Splits text into words and reveals them word-by-word as they scroll into view. */
const AnimatedText = ({
  text,
  as: Tag = "span",
  className,
  wordClassName,
  delay = 0,
  staggerChildren = 0.06,
  once = true,
}: Props) => {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
        transition={{ staggerChildren, delayChildren: delay }}
        className="inline"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={`inline-block ${wordClassName ?? ""}`}
            variants={{
              hidden: { opacity: 0, y: "0.6em", filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: "0em",
                filter: "blur(0px)",
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedText;
