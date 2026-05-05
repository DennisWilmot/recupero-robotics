import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import { StatCounter } from "@/components/StatCounter";
import { products, hbbDdaDescription } from "@/data/products";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "THEAbot and TrVr — affordable rehabilitation robotics combining haptic feedback, biometric sensing, and gamified therapy for stroke recovery.",
};

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-site pt-12 pb-16 lg:pt-20 lg:pb-24">
        <AnimatedSection>
          <p className="text-green-700 font-display font-semibold text-xs tracking-wider uppercase mb-3">
            One platform. Three configurations.
          </p>
          <h1 className="font-display font-extrabold text-fluid-hero text-ink-900 mb-5 max-w-3xl">
            Every care setting — clinic, community, or home
          </h1>
          <p className="text-ink-600 text-lg leading-relaxed max-w-2xl">
            Recupero&apos;s technology suite delivers rehabilitation robotics at
            8× lower cost than competitors, without compromising clinical
            efficacy.
          </p>
        </AnimatedSection>
      </section>

      {/* Featured product */}
      <section className="container-site mb-16 lg:mb-24">
        <AnimatedSection>
          <ProductCard product={products[0]} featured />
        </AnimatedSection>
      </section>

      {/* Secondary products */}
      <section className="container-site mb-20 lg:mb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {products.slice(1).map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.1}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* HBB-DDA */}
      <section className="bg-green-50 py-20 lg:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-start">
            <AnimatedSection>
              <p className="text-green-700 font-display font-semibold text-xs tracking-wider uppercase mb-3">
                {hbbDdaDescription.subtitle}
              </p>
              <h2 className="font-display font-bold text-fluid-section text-ink-900 mb-5">
                {hbbDdaDescription.title}
              </h2>
              <p className="text-ink-600 leading-relaxed mb-8">
                {hbbDdaDescription.summary}
              </p>

              <div className="space-y-4">
                {hbbDdaDescription.stages.map((stage, i) => (
                  <div key={stage.label} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center font-display font-bold text-green-700 text-sm">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-display font-semibold text-ink-900 text-sm">
                        {stage.label}
                      </h4>
                      <p className="text-ink-500 text-sm">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="space-y-6">
                <div>
                  <p className="text-ink-500 text-xs font-medium uppercase tracking-wider mb-3">
                    Key research finding
                  </p>
                  <p className="text-ink-800 text-lg leading-relaxed">
                    <StatCounter value={50} suffix="%" label="" className="text-2xl" /> of
                    participants preferred HBB-DDA adaptive therapy — vs. only
                    12% for non-adaptive.
                  </p>
                  <p className="text-ink-400 text-xs mt-2">
                    ICORR 2025, IEEE
                  </p>
                </div>
                <img
                  src="/ppt-media/image5.png"
                  alt="HBB-DDA system diagram"
                  className="w-full rounded-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="container-site py-20 lg:py-28">
        <AnimatedSection>
          <h2 className="font-display font-bold text-fluid-sub text-ink-900 mb-8">
            Core capabilities
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {[
            {
              title: "Haptic Feedback",
              desc: "Resistance and guided assistance for precise movement training across full range of motion.",
            },
            {
              title: "Biometric Sensing",
              desc: "Heart rate and skin response sensors enable real-time dynamic difficulty adjustment.",
            },
            {
              title: "Machine Learning",
              desc: "Quantitative effort and performance metrics logged automatically for clinician review.",
            },
            {
              title: "Gamified Therapy",
              desc: "8 rehabilitation games keep patients engaged — from spaceship navigation to burger stacking.",
            },
            {
              title: "Multiplayer Rehab",
              desc: "TheraDyad networked multiplayer enables collaborative rehabilitation between patients.",
            },
            {
              title: "Cost-Effective",
              desc: "Designed for clinics, long-term care facilities, and home use at 8× lower cost than competitors.",
            },
          ].map((spec, i) => (
            <AnimatedSection key={spec.title} delay={i * 0.05}>
              <h3 className="font-display font-semibold text-ink-900 text-sm mb-1">
                {spec.title}
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed">
                {spec.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* BLUE Heritage */}
      <section className="container-site mb-20 lg:mb-28">
        <AnimatedSection>
          <div className="bg-cream-200 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
              <div>
                <p className="text-blue-700 font-display font-semibold text-xs tracking-wider uppercase mb-3">
                  Our engineering heritage
                </p>
                <h2 className="font-display font-bold text-fluid-sub text-ink-900 mb-4">
                  BLUE Exoskeleton
                </h2>
                <p className="text-ink-600 text-sm leading-relaxed mb-3">
                  The Bimanual Upper Limb Exoskeleton (BLUE) is an underactuated,
                  powered trunk and shoulder-arm exoskeleton for individuals with
                  upper extremity weakness. Developed for both rehabilitation and
                  assistive use during bimanual activities of daily living.
                </p>
                <p className="text-ink-400 text-xs">
                  3 peer-reviewed publications &middot; Available 2027
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Pilot Study of Varying Thoracic and Abdominal Compression in a Reconfigurable Trunk Exoskeleton",
                  "Design and Pilot Evaluation of a Reconfigurable Spinal Exoskeleton",
                  "Simultaneously Varying Back Stiffness and Trunk Compression in a Passive Trunk Exoskeleton",
                ].map((title) => (
                  <div key={title} className="bg-cream-50 rounded-xl p-4">
                    <p className="text-ink-700 text-sm font-medium leading-snug">
                      {title}
                    </p>
                    <p className="text-ink-400 text-xs mt-1">
                      IEEE &middot; Peer-reviewed
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-16 lg:py-20">
        <div className="container-site">
          <AnimatedSection>
            <h2 className="font-display font-bold text-fluid-sub text-cream-50 mb-4 max-w-xl">
              See THEAbot in action
            </h2>
            <p className="text-green-200 text-base max-w-lg mb-8">
              Request a demo for your clinic or learn about partnership
              opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-cream-50 text-green-800 font-semibold text-sm hover:bg-cream-100 transition-colors"
              >
                Request a Demo
              </Link>
              <Link
                href="/#research"
                className="px-7 py-3.5 rounded-full border border-green-400/40 text-green-100 font-semibold text-sm hover:bg-green-600 transition-colors"
              >
                Clinical Evidence
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
