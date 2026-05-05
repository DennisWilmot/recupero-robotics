import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Recupero Robotics — request a demo, explore research partnerships, or learn about investment opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-site pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <AnimatedSection>
            <p className="text-green-700 font-display font-semibold text-xs tracking-wider uppercase mb-3">
              Let&apos;s talk
            </p>
            <h1 className="font-display font-extrabold text-fluid-hero text-ink-900 mb-5">
              We&apos;d love to hear from you
            </h1>
            <p className="text-ink-600 text-base leading-relaxed mb-10">
              Whether you&apos;re interested in affordable technologies,
              research collaboration, clinical deployment, or investment
              opportunities — we&apos;re here to help.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold text-ink-900 text-sm mb-1">
                  General inquiries
                </h3>
                <a
                  href="mailto:info@recuperorobotics.com"
                  className="text-green-700 text-sm hover:text-green-800 transition-colors"
                >
                  info@recuperorobotics.com
                </a>
              </div>

              <div>
                <h3 className="font-display font-semibold text-ink-900 text-sm mb-1">
                  Location
                </h3>
                <p className="text-ink-500 text-sm">Philadelphia, PA</p>
              </div>

              <div>
                <h3 className="font-display font-semibold text-ink-900 text-sm mb-1">
                  Press inquiries
                </h3>
                <a
                  href="mailto:info@recuperorobotics.com?subject=Press%20Inquiry"
                  className="text-green-700 text-sm hover:text-green-800 transition-colors"
                >
                  info@recuperorobotics.com
                </a>
                <p className="text-ink-400 text-xs mt-0.5">
                  Please include &ldquo;Press&rdquo; in the subject line
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-cream-50 rounded-2xl border border-ink-50 p-6 lg:p-8">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="container-site mb-16 lg:mb-24">
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <img
              src="/ppt-media/image29.jpeg"
              alt="Patient using Recupero device"
              className="w-full h-48 lg:h-64 object-cover rounded-xl"
            />
            <img
              src="/ppt-media/image24.jpeg"
              alt="Collaborative rehabilitation session"
              className="w-full h-48 lg:h-64 object-cover rounded-xl"
            />
            <img
              src="/ppt-media/image26.jpeg"
              alt="Home rehabilitation setting"
              className="w-full h-48 lg:h-64 object-cover rounded-xl"
            />
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
