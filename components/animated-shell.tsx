"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 1, y: 0 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingIcons() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {["Rx", "POS", "SKU", "EXP", "MRP", "LOT"].map((label, index) => (
        <motion.span
          key={label}
          className="absolute rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--background) / 0.72)] px-3 py-2 text-xs font-bold text-[rgb(var(--primary))] shadow-sm"
          style={{ left: `${8 + index * 15}%`, top: `${18 + (index % 3) * 18}%` }}
          animate={reduce ? undefined : { y: [0, -14, 0], rotate: [0, index % 2 ? 3 : -3, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {label}
        </motion.span>
      ))}
    </div>
  );
}
