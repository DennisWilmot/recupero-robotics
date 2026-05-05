import { AnimatedSection } from "@/components/AnimatedSection";
import { CredibilityBar } from "@/components/CredibilityBar";
import { ShowcaseFlagship, ShowcaseCompact, ShowcaseHero } from "@/components/ProductShowcase";
import { StatCounter } from "@/components/StatCounter";
import { ValueChain } from "@/components/ValueChain";
import { ProfileCard } from "@/components/ProfileCard";
import { ContactForm } from "@/components/ContactForm";
import { products, hbbDdaDescription } from "@/data/products";
import { leadership, advisors } from "@/data/team";
import { milestones, partners } from "@/data/credentials";

export default function HomePage() {
  return (
    <>
      {/* ═══ 1. HERO — Who we are ═══ */}
      <section className="relative overflow-hidden">
        <div className="container-site grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-0 items-center min-h-[480px] lg:min-h-[540px]">
          <AnimatedSection className="py-12 lg:py-16 flex flex-col justify-center">
            <p className="text-green-700 font-display font-semibold text-sm tracking-wider uppercase mb-4">
              Strength &middot; Movement &middot; Dexterity
            </p>
            <h1 className="font-display font-extrabold text-fluid-hero text-ink-900 mb-5">
              Smart Robotics.
              <br />
              Smarter Recovery.
            </h1>
            <p className="text-ink-600 text-lg leading-relaxed max-w-lg mb-8">
              Affordable, accessible rehabilitation robotics — restoring
              upper-limb motor function through gamified, adaptive therapy born
              out of the University of Pennsylvania.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-green-600 text-cream-50 font-semibold text-sm hover:bg-green-700 transition-colors"
              >
                Request a Demo
              </a>
              <a
                href="#technology"
                className="px-7 py-3.5 rounded-full border border-ink-200 text-ink-700 font-semibold text-sm hover:border-ink-300 transition-colors"
              >
                Explore Our Technology
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <img
              src="/ppt-media/hero-theabot.png"
              alt="Patient using THEAbot rehabilitation technology"
              className="w-full object-cover object-top h-[420px] lg:h-[540px]"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ CREDIBILITY BAR ═══ */}
      <div className="bg-green-50 border-y border-green-100">
        <CredibilityBar />
      </div>

      {/* ═══ 2. TECHNOLOGY — Section intro ═══ */}
      <section id="technology" className="pt-20 lg:pt-28 pb-6">
        <div className="container-site">
          <AnimatedSection>
            <p className="text-green-700 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              One platform. Three configurations.
            </p>
            <h2 className="font-display font-extrabold text-fluid-section text-ink-900 mb-4 max-w-3xl">
              Affordable technology for every care setting
            </h2>
            <p className="text-ink-500 text-base max-w-2xl">
              Clinic, community, or home — at 8× lower cost than competitors.
              Each configuration integrates our TrVr software platform for
              adaptive, gamified therapy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── THEAbot Mobile — flagship ─── */}
      <ShowcaseFlagship
        product={products[0]}
        callout={{ stat: "1 : 3", label: "One therapist serves three patients simultaneously — tripling clinical throughput" }}
      />

      {/* ─── THEAbot Desktop — compact/home ─── */}
      <ShowcaseCompact
        product={products[1]}
        callout={{ stat: "$8×", label: "Lower cost than competing rehabilitation robotics systems" }}
      />

      {/* ─── TrVr Handheld — fine motor ─── */}
      <ShowcaseHero
        product={products[2]}
        callout={{ stat: "1st", label: "Haptic shape-changing controller for fine motor rehabilitation" }}
      />

      {/* Value chain — coda after the three products */}
      <section className="py-10 lg:py-14">
        <div className="container-site">
          <AnimatedSection>
            <div className="pt-6 border-t border-ink-100">
              <p className="text-ink-500 text-sm mb-4">The Recupero difference</p>
              <ValueChain />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 3. HOW IT WORKS — HBB-DDA ═══ */}
      <section className="bg-green-50 py-20 lg:py-28">
        <div className="container-site">
          <AnimatedSection>
            <p className="text-green-700 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              {hbbDdaDescription.subtitle}
            </p>
            <h2 className="font-display font-extrabold text-fluid-section text-ink-900 mb-6">
              {hbbDdaDescription.title}
            </h2>
            <p className="text-ink-600 text-base lg:text-lg leading-relaxed mb-12 max-w-3xl">
              {hbbDdaDescription.summary}
            </p>
          </AnimatedSection>

          {/* Stages — large numbered steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {hbbDdaDescription.stages.map((stage, i) => (
              <AnimatedSection key={stage.label} delay={i * 0.08}>
                <div className="group cursor-default">
                  <span className="font-display font-black text-[clamp(2.5rem,4vw,3.5rem)] text-green-300 group-hover:text-green-600 transition-colors duration-300 block leading-none mb-3">
                    0{i + 1}
                  </span>
                  <h4 className="font-display font-bold text-ink-900 text-lg lg:text-xl mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {stage.label}
                  </h4>
                  <p className="text-ink-500 text-base leading-relaxed">{stage.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Capabilities — two-column grid with hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-1">
            {[
              { title: "Haptic Feedback", desc: "Resistance and guided assistance for precise movement training." },
              { title: "Biometric Sensing", desc: "Heart rate and skin response for real-time difficulty adjustment." },
              { title: "Machine Learning", desc: "Automatic performance metrics logged for clinician review." },
              { title: "Gamified Therapy", desc: "8 rehab games keep patients engaged and motivated." },
              { title: "Multiplayer Rehab", desc: "TheraDyad enables collaborative recovery between patients." },
              { title: "Cost-Effective", desc: "8× lower cost than competing rehabilitation robotics." },
            ].map((spec, i) => (
              <AnimatedSection key={spec.title} delay={i * 0.04}>
                <div className="group py-4 border-b border-green-100 cursor-default hover:translate-x-1 transition-transform duration-300">
                  <h4 className="font-display font-bold text-ink-900 text-base mb-1 group-hover:text-green-700 transition-colors duration-200">
                    {spec.title}
                  </h4>
                  <p className="text-ink-500 text-[0.9rem] leading-relaxed">{spec.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. WHAT MAKES US CREDIBLE — Research ═══ */}
      <section id="research" className="py-20 lg:py-28">
        <div className="container-site">
          <AnimatedSection>
            <p className="text-green-700 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              Clinically proven
            </p>
            <h2 className="font-display font-extrabold text-fluid-section text-ink-900 mb-8">
              2.5 years of clinical evidence
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            <div>
              <AnimatedSection>
                <div className="space-y-5 text-ink-600 text-base lg:text-[1.05rem] leading-relaxed">
                  <p>
                    Our THEAbot platform completed a landmark 2.5-year clinical
                    trial{" "}
                    <a
                      href="https://clinicaltrials.gov/study/NCT05542121"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 underline decoration-green-300 hover:decoration-green-600 transition-colors duration-200"
                    >
                      (NCT05542121)
                    </a>{" "}
                    with eleven stroke survivors.
                  </p>
                </div>
              </AnimatedSection>

              {/* Big stat callout */}
              <AnimatedSection delay={0.08}>
                <div className="my-10">
                  <span className="font-display font-black text-[clamp(3.5rem,6vw,5.5rem)] text-green-600 leading-none tracking-tight block">
                    <StatCounter value={50} suffix="%" label="" className="text-[inherit]" />
                  </span>
                  <p className="text-ink-700 text-lg lg:text-xl font-display font-semibold mt-2 max-w-md">
                    preferred our adaptive HBB-DDA therapy — compared to just 12% for non-adaptive approaches.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <p className="text-ink-600 text-base lg:text-[1.05rem] leading-relaxed">
                  Smart, affordable, automatically adapting rehab games make
                  therapy more effective, motivating, and personalized. Our
                  findings are published across{" "}
                  <strong className="text-ink-900">8 IEEE publications</strong>{" "}
                  including ICORR 2025.
                </p>
              </AnimatedSection>
            </div>

            <div className="lg:pt-2">
              <AnimatedSection delay={0.06}>
                <p className="text-ink-400 text-xs font-medium uppercase tracking-[0.15em] mb-4">
                  Selected publications
                </p>
              </AnimatedSection>
              {[
                "General Purpose Haptic/Biometric-Based Dynamic Difficulty Adjustment for Post-Stroke Upper-Limb Rehabilitation Games",
                "Towards an Optimal Model of Post-Stroke Sensorimotor Control",
                "Analysis of Induced Muscle Activations by an Affordable, Reconfigurable Robot for Comprehensive Post-Stroke Rehabilitation",
                "TheraDyad: Feasibility of an Affordable Robot for Multi-User Stroke Rehabilitation",
                "Motor Learning in Robot-Based Haptic Dyads: A Review",
              ].map((title, i) => (
                <AnimatedSection key={title} delay={0.08 + i * 0.04}>
                  <div className="group py-4 border-b border-ink-100 last:border-b-0 cursor-default hover:translate-x-1 transition-transform duration-300">
                    <p className="text-ink-700 group-hover:text-ink-900 text-[0.95rem] font-medium leading-snug transition-colors duration-200">
                      {title}
                    </p>
                    <p className="text-ink-400 group-hover:text-green-600 text-xs mt-1.5 transition-colors duration-200">
                      IEEE &middot; Peer-reviewed
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* BLUE Heritage */}
          <div className="mt-20 lg:mt-28 pt-12 border-t border-ink-100">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16 items-start">
              <AnimatedSection>
                <p className="text-blue-700 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-3">
                  Engineering heritage
                </p>
                <h3 className="font-display font-extrabold text-fluid-sub text-ink-900 mb-4">
                  BLUE Exoskeleton
                </h3>
                <p className="text-ink-600 text-base leading-relaxed">
                  Our earlier work — a bimanual upper limb exoskeleton for
                  trunk and shoulder-arm rehabilitation — with 3 peer-reviewed
                  IEEE publications. Available 2027.
                </p>
              </AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:divide-x sm:divide-ink-100">
                {[
                  "Pilot Study of Varying Thoracic and Abdominal Compression in a Reconfigurable Trunk Exoskeleton",
                  "Design and Pilot Evaluation of a Reconfigurable Spinal Exoskeleton",
                  "Simultaneously Varying Back Stiffness and Trunk Compression in a Passive Trunk Exoskeleton",
                ].map((t, i) => (
                  <AnimatedSection key={t} delay={i * 0.06}>
                    <div className="group py-3 sm:py-0 sm:px-5 first:sm:pl-0 last:sm:pr-0 cursor-default hover:translate-x-0.5 transition-transform duration-300">
                      <p className="text-ink-600 group-hover:text-ink-900 text-sm leading-snug transition-colors duration-200">
                        {t}
                      </p>
                      <p className="text-ink-400 group-hover:text-blue-500 text-xs mt-1.5 transition-colors duration-200">
                        IEEE &middot; Peer-reviewed
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. THE TEAM ═══ */}
      <section id="team" className="bg-cream-50 py-20 lg:py-28">
        <div className="container-site">
          <AnimatedSection>
            <p className="text-green-700 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              The team
            </p>
            <h2 className="font-display font-extrabold text-fluid-section text-ink-900 mb-4">
              Engineers, clinicians, and researchers
            </h2>
            <p className="text-ink-500 text-base lg:text-lg mb-12 max-w-2xl">
              A multidisciplinary team from the University of Pennsylvania,
              Columbia University, and Drexel University.
            </p>
          </AnimatedSection>

          {/* Leadership */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {leadership.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.05}>
                <ProfileCard member={member} />
              </AnimatedSection>
            ))}
          </div>

          {/* Advisors */}
          <AnimatedSection>
            <h3 className="font-display font-extrabold text-fluid-sub text-ink-900 mb-8">
              Research &amp; advisory network
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {advisors.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.05}>
                <ProfileCard member={member} />
              </AnimatedSection>
            ))}
          </div>

          {/* Milestones — interactive timeline */}
          <AnimatedSection>
            <div className="pt-10 border-t border-ink-100">
              <p className="text-ink-400 text-xs font-medium uppercase tracking-[0.15em] mb-6">
                Key milestones
              </p>
              <div className="flex flex-wrap gap-x-12 gap-y-5">
                {milestones.map((m, i) => (
                  <AnimatedSection key={`${m.year}-${m.label}`} delay={i * 0.05}>
                    <div className="group cursor-default">
                      <span className="font-display font-black text-2xl lg:text-3xl text-green-300 group-hover:text-green-700 transition-colors duration-300 block">
                        {m.year}
                      </span>
                      <p className="text-ink-500 group-hover:text-ink-800 text-sm lg:text-base transition-colors duration-200 mt-1">
                        {m.label}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 6. WHY WE DO THIS — About / Origin ═══ */}
      <section id="about" className="py-20 lg:py-28">
        <div className="container-site">
          <AnimatedSection>
            <p className="text-green-700 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              Our story
            </p>
            <h2 className="font-display font-extrabold text-fluid-section text-ink-900 mb-8 max-w-3xl">
              From a grandmother&apos;s stroke to global innovation
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            <div>
              <AnimatedSection>
                <div className="space-y-5 text-ink-600 text-base lg:text-[1.05rem] leading-relaxed">
                  <p>
                    Every 40 seconds, someone in the United States has a stroke.{" "}
                    <StatCounter value={795} suffix=",000+" label="" className="text-[inherit] font-semibold text-ink-900" /> people
                    annually. The average outpatient rehabilitation costs
                    $27,000, and there&apos;s a national shortfall of over
                    12,000 physical therapists.
                  </p>
                  <p>
                    Recupero Robotics was founded in 2018 through the Penn
                    Center for Innovation (PCI Ventures) by a group of
                    like-minded innovators from the University of
                    Pennsylvania&apos;s Rehabilitation Robotics Lab. Our
                    mission: create affordable and accessible rehabilitation
                    technologies that support functional independence across the
                    lifespan.
                  </p>
                  <p>
                    At the core of our philosophy is a commitment to enhancing
                    lives through innovation — harnessing technology and
                    compassionate care to drive positive change in healthcare and
                    rehabilitation, ensuring a brighter and more accessible
                    future for all.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div>
              <AnimatedSection delay={0.1}>
                <img
                  src="/ppt-media/image24.jpeg"
                  alt="Patients using rehabilitation robots in a clinical setting"
                  className="w-full mb-10"
                />
              </AnimatedSection>
              <div className="grid grid-cols-2 gap-8">
                <AnimatedSection delay={0.14}>
                  <div className="group cursor-default">
                    <h4 className="font-display font-bold text-ink-900 text-base lg:text-lg mb-2 group-hover:text-green-700 transition-colors duration-200">
                      Our vision
                    </h4>
                    <p className="text-ink-500 text-[0.9rem] lg:text-base leading-relaxed">
                      To bring the best rehabilitation robotic technologies to
                      everyone, everywhere.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.18}>
                  <div className="group cursor-default">
                    <h4 className="font-display font-bold text-ink-900 text-base lg:text-lg mb-2 group-hover:text-green-700 transition-colors duration-200">
                      Our mission
                    </h4>
                    <p className="text-ink-500 text-[0.9rem] lg:text-base leading-relaxed">
                      To provide affordable technology that empowers individuals
                      with impairments to achieve greater independence.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Who we serve */}
          <div className="mt-20 lg:mt-28">
            <AnimatedSection>
              <h3 className="font-display font-extrabold text-fluid-sub text-ink-900 mb-10">
                Built for patients, clinicians, and researchers
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-ink-100">
              {[
                {
                  title: "Patients & caregivers",
                  desc: "Individuals seeking to regain motor function and independence after a stroke. Our gamified platform makes recovery engaging, personalized, and measurable — at home or in the clinic.",
                },
                {
                  title: "Clinicians & institutions",
                  desc: "Rehabilitation clinics, hospitals, and skilled nursing facilities. One therapist can serve three patients simultaneously with THEAbot — increasing throughput while improving outcomes.",
                },
                {
                  title: "Research partners",
                  desc: "Universities and institutions utilizing our THEAbot platform to study HBB-DDA, motor learning, and collaborative neurorehabilitation. Current partners include UPenn, Columbia, and Drexel.",
                },
              ].map((segment, i) => (
                <AnimatedSection key={segment.title} delay={i * 0.06}>
                  <div className="group p-6 lg:p-8 first:pl-0 last:pr-0 cursor-default">
                    <h4 className="font-display font-bold text-ink-900 text-base lg:text-lg mb-3 group-hover:text-green-700 group-hover:translate-x-1 transition-all duration-300">
                      {segment.title}
                    </h4>
                    <p className="text-ink-600 text-[0.9rem] lg:text-base leading-relaxed">
                      {segment.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Partners */}
          <AnimatedSection className="mt-16">
            <p className="text-ink-400 text-xs font-medium uppercase tracking-[0.15em] mb-6">
              Our partners &amp; affiliations
            </p>
            <div className="flex flex-wrap items-center gap-8 lg:gap-14">
              {partners.map((partner, i) => (
                <AnimatedSection key={partner.name} delay={i * 0.04}>
                  <span className="text-ink-400 hover:text-ink-800 font-display font-semibold text-base lg:text-lg whitespace-nowrap transition-colors duration-200 cursor-default">
                    {partner.name}
                  </span>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 7. CONTACT — Take action ═══ */}
      <section id="contact" className="bg-green-700 py-20 lg:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
            <AnimatedSection>
              <p className="text-green-200 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-4">
                Let&apos;s talk
              </p>
              <h2 className="font-display font-extrabold text-fluid-section text-cream-50 mb-6">
                Ready to transform rehabilitation?
              </h2>
              <p className="text-green-200 text-base lg:text-lg leading-relaxed mb-10">
                Whether you&apos;re a clinician, researcher, or investor,
                we&apos;d love to show you what THEAbot can do.
              </p>

              <div className="space-y-5">
                <a
                  href="mailto:info@recuperorobotics.com"
                  className="group block"
                >
                  <h4 className="font-display font-bold text-cream-50 text-base mb-1">
                    General inquiries
                  </h4>
                  <span className="text-green-200 text-base group-hover:text-cream-50 transition-colors duration-200 underline decoration-green-500 group-hover:decoration-cream-50">
                    info@recuperorobotics.com
                  </span>
                </a>
                <div>
                  <h4 className="font-display font-bold text-cream-50 text-base mb-1">
                    Location
                  </h4>
                  <p className="text-green-200 text-base">Philadelphia, PA</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-cream-50 p-6 lg:p-10">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
