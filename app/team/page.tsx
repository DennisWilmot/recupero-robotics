import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProfileCard } from "@/components/ProfileCard";
import { leadership, advisors } from "@/data/team";
import { milestones } from "@/data/credentials";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the founders, leadership, and advisors behind Recupero Robotics — UPenn researchers, clinicians, and engineers building the future of rehabilitation.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-site pt-12 pb-16 lg:pt-20 lg:pb-24">
        <AnimatedSection>
          <p className="text-green-700 font-display font-semibold text-xs tracking-wider uppercase mb-3">
            The future of rehabilitation is within reach
          </p>
          <h1 className="font-display font-extrabold text-fluid-hero text-ink-900 mb-5 max-w-3xl">
            Founders, clinical leadership &amp; key milestones
          </h1>
          <p className="text-ink-600 text-lg leading-relaxed max-w-2xl">
            A multidisciplinary team of engineers, clinicians, and researchers
            from the University of Pennsylvania, Columbia University, and Drexel
            University — united by a mission to make rehabilitation robotics
            accessible.
          </p>
        </AnimatedSection>
      </section>

      {/* Leadership */}
      <section className="container-site mb-20 lg:mb-28">
        <AnimatedSection>
          <h2 className="font-display font-bold text-fluid-sub text-ink-900 mb-8">
            Leadership
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {leadership.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.05}>
              <ProfileCard member={member} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="container-site">
          <AnimatedSection>
            <h2 className="font-display font-bold text-fluid-sub text-ink-900 mb-8">
              Research &amp; advisory network
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {advisors.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.05}>
                <ProfileCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-site py-20 lg:py-28">
        <AnimatedSection>
          <h2 className="font-display font-bold text-fluid-sub text-ink-900 mb-10">
            Our journey
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-ink-100 -translate-x-1/2" />

          <div className="space-y-10 lg:space-y-14">
            {milestones.map((milestone, i) => (
              <AnimatedSection
                key={`${milestone.year}-${milestone.label}`}
                delay={i * 0.08}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex items-start gap-6 lg:gap-0 ${
                    i % 2 === 0
                      ? "lg:flex-row lg:justify-end lg:pr-[calc(50%+2rem)]"
                      : "lg:flex-row-reverse lg:justify-end lg:pl-[calc(50%+2rem)]"
                  }`}
                >
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green-500 border-2 border-cream-100 z-10 mt-1.5" />

                  <div
                    className={`ml-10 lg:ml-0 max-w-md ${
                      i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <span className="font-display font-bold text-green-700 text-lg">
                      {milestone.year}
                    </span>
                    <p className="text-ink-600 text-sm mt-1">
                      {milestone.label}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
