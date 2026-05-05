"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  "Better Robots",
  "Better Digital Interface",
  "Better Therapy",
  "Better Games",
  "Better Recovery",
];

export function ValueChain() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex flex-wrap items-center gap-3 md:gap-4">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{
            duration: 0.4,
            delay: i * 0.12,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex items-center gap-3 md:gap-4"
        >
          <span className="font-display font-bold text-base md:text-lg text-ink-900">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="text-green-500 text-sm" aria-hidden>→</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
