"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { Product } from "@/data/types";

const ease = [0.25, 1, 0.5, 1];

function stagger(delay = 0.12) {
  return {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
  };
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease } },
};

function SpecLine({ text }: { text: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group flex items-start gap-3 py-2.5 transition-colors duration-200 cursor-default hover:translate-x-1"
      style={{ transition: "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), color 0.2s" }}
    >
      <span className="mt-2.5 w-2 h-2 rounded-full bg-green-400 group-hover:bg-green-600 transition-colors duration-200 flex-shrink-0" />
      <span className="text-ink-600 group-hover:text-ink-900 text-base lg:text-[1.05rem] leading-relaxed font-medium transition-colors duration-200">
        {text}
      </span>
    </motion.div>
  );
}

interface ShowcaseProps {
  product: Product;
  callout: { stat: string; label: string };
}

/**
 * THEAbot Mobile — the flagship.
 */
export function ShowcaseFlagship({ product, callout }: ShowcaseProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.4], [1.04, 1]);

  return (
    <section ref={ref} className="pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
      <motion.div
        variants={stagger()}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="container-site mb-8 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-end">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-green-700 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-3"
              >
                {product.subtitle}
              </motion.p>
              <motion.h3
                variants={fadeUp}
                className="font-display font-extrabold text-fluid-product text-ink-900 leading-[1.0]"
              >
                {product.name}
              </motion.h3>
            </div>
            <motion.div variants={fadeUp} className="lg:text-right">
              <span className="font-display font-black text-[clamp(3rem,6vw,5rem)] text-green-600 leading-none tracking-tight block">
                {callout.stat}
              </span>
              <p className="text-ink-500 text-base mt-1.5 max-w-[18rem]">
                {callout.label}
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div variants={fadeIn} className="overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full object-cover"
            style={{
              scale: imgScale,
              minHeight: "clamp(280px, 45vw, 560px)",
            }}
          />
        </motion.div>

        <div className="container-site mt-12 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
            <motion.div variants={fadeUp}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {product.bullets.map((bullet) => (
                  <SpecLine key={bullet} text={bullet} />
                ))}
              </div>
            </motion.div>

            {product.quote && (
              <motion.blockquote
                variants={fadeUp}
                className="text-ink-500 text-xl lg:text-2xl italic font-display leading-snug lg:pt-3"
              >
                &ldquo;{product.quote}&rdquo;
              </motion.blockquote>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/**
 * THEAbot Desktop — landscape image layout.
 */
export function ShowcaseCompact({ product, callout }: ShowcaseProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.4], [1.04, 1]);

  return (
    <section ref={ref} className="bg-green-50 pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="container-site mb-8 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-end">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-green-700 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-3"
              >
                {product.subtitle}
              </motion.p>
              <motion.h3
                variants={fadeUp}
                className="font-display font-extrabold text-fluid-product text-ink-900 leading-[1.0]"
              >
                {product.name}
              </motion.h3>
            </div>
            <motion.div variants={fadeUp} className="lg:text-right">
              <span className="font-display font-black text-[clamp(2.5rem,4vw,3.5rem)] text-green-600 leading-none block">
                {callout.stat}
              </span>
              <p className="text-ink-500 text-base mt-1.5 max-w-[16rem]">
                {callout.label}
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div variants={fadeIn} className="overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full object-cover"
            style={{
              scale: imgScale,
              minHeight: "clamp(240px, 38vw, 500px)",
            }}
          />
        </motion.div>

        <div className="container-site mt-12 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
            <motion.div variants={fadeUp}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {product.bullets.map((bullet) => (
                  <SpecLine key={bullet} text={bullet} />
                ))}
              </div>
            </motion.div>

            {product.quote && (
              <motion.blockquote
                variants={fadeUp}
                className="text-ink-500 text-xl lg:text-2xl italic font-display leading-snug lg:pt-3"
              >
                &ldquo;{product.quote}&rdquo;
              </motion.blockquote>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/**
 * TrVr Handheld — cinematic wide layout.
 */
export function ShowcaseHero({ product, callout }: ShowcaseProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.4], [1.03, 1]);

  return (
    <section ref={ref} className="bg-cream-50 py-20 lg:py-32 overflow-hidden">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="container-site mb-8 lg:mb-12">
          <motion.p
            variants={fadeUp}
            className="text-green-700 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-3"
          >
            {product.subtitle}
          </motion.p>
          <motion.h3
            variants={fadeUp}
            className="font-display font-extrabold text-fluid-product text-ink-900 leading-[1.0] max-w-3xl"
          >
            {product.name}
          </motion.h3>
        </div>

        <motion.div variants={fadeIn} className="overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full object-cover object-center"
            style={{
              scale: imgScale,
              minHeight: "clamp(240px, 38vw, 500px)",
            }}
          />
        </motion.div>

        <div className="container-site mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-10 md:gap-12 items-start">
            <motion.div variants={fadeUp}>
              <span className="font-display font-black text-[clamp(3rem,5vw,4.5rem)] text-green-600 leading-none tracking-tight block">
                {callout.stat}
              </span>
              <p className="text-ink-500 text-base mt-2 max-w-[14rem]">
                {callout.label}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="md:border-l md:border-ink-100 md:pl-10">
              {product.bullets.map((bullet) => (
                <SpecLine key={bullet} text={bullet} />
              ))}
            </motion.div>

            {product.quote && (
              <motion.div
                variants={fadeUp}
                className="flex items-center md:border-l md:border-ink-100 md:pl-10"
              >
                <blockquote className="text-ink-500 text-xl lg:text-2xl italic font-display leading-snug">
                  &ldquo;{product.quote}&rdquo;
                </blockquote>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
