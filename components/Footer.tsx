import Link from "next/link";
import { navItems } from "@/data/navigation";
import { partners } from "@/data/credentials";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 mt-24 bg-cream-50">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 md:gap-8">
          <div>
            <img
              src="/ppt-media/image1.png"
              alt="Recupero Robotics"
              className="w-44 mb-5"
            />
            <p className="text-ink-500 text-sm leading-relaxed max-w-xs">
              Affordable, accessible rehabilitation robotics for every patient,
              everywhere. Founded in Philadelphia, born out of the University of
              Pennsylvania.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-ink-900 mb-4 text-sm tracking-wide uppercase">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-ink-500 hover:text-green-700 text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold text-ink-900 mb-4 text-sm tracking-wide uppercase">
              Affiliations
            </h4>
            <ul className="flex flex-col gap-2.5">
              {partners.map((partner) => (
                <li key={partner.name} className="text-ink-500 text-sm">
                  {partner.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink-100 flex flex-col sm:flex-row justify-between gap-3 text-ink-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Recupero Robotics LLC. All rights reserved.</p>
          <p className="font-display font-medium tracking-wide">
            Strength &middot; Movement &middot; Dexterity
          </p>
        </div>
      </div>
    </footer>
  );
}
