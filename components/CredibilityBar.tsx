"use client";

import { motion } from "framer-motion";
import { credentials } from "@/data/credentials";

export function CredibilityBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="container-site"
    >
      <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 py-5">
        {credentials.map((cred, i) => (
          <span key={cred.label} className="flex items-center gap-3">
            {i > 0 && (
              <span className="hidden sm:block w-px h-3.5 bg-ink-200" />
            )}
            <span className="text-ink-600 text-xs sm:text-[0.8rem] font-medium tracking-wide">
              {cred.label}
            </span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
