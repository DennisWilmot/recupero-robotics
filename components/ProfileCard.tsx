import type { TeamMember } from "@/data/types";

export function ProfileCard({
  member,
  size = "default",
}: {
  member: TeamMember;
  size?: "default" | "large";
}) {
  const Wrapper = member.linkedin ? "a" : "div";
  const wrapperProps = member.linkedin
    ? { href: member.linkedin, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const imgClass =
    size === "large"
      ? "w-full aspect-[3/4] object-cover rounded-xl"
      : "w-full aspect-square object-cover rounded-xl";

  return (
    <Wrapper {...wrapperProps} className="group">
      {member.image ? (
        <img src={member.image} alt={member.name} className={imgClass} />
      ) : (
        <div
          className={`${imgClass} bg-green-50 flex items-center justify-center`}
        >
          <span className="font-display font-bold text-3xl text-green-300">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
      )}
      <div className="mt-3">
        <h3 className="font-display font-bold text-base text-ink-900">
          {member.name}
        </h3>
        <p className="text-green-700 text-sm font-medium mt-0.5 leading-snug">
          {member.role}
        </p>
        {member.highlights.length > 0 && (
          <ul className="mt-2 space-y-1">
            {member.highlights.map((h) => (
              <li key={h} className="text-ink-500 text-xs leading-relaxed">
                {h}
              </li>
            ))}
          </ul>
        )}
        {member.linkedin && (
          <p className="mt-2 text-xs text-ink-400 group-hover:text-green-700 transition-colors">
            LinkedIn →
          </p>
        )}
      </div>
    </Wrapper>
  );
}
