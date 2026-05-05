export interface TeamMember {
  name: string;
  role: string;
  title: string;
  image: string | null;
  highlights: string[];
  linkedin?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  bullets: string[];
  quote: string;
  availability?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Milestone {
  year: string;
  label: string;
}

export interface Credential {
  label: string;
  detail: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  category: "technology" | "clinical" | "motor-learning" | "trunk-exoskeleton";
  summary: string;
  highlights: string[];
  image?: string;
}

export interface AudienceSegment {
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
  track: "patients" | "clinicians" | "research";
}

export interface FormSubmission {
  timestamp: string;
  name: string;
  email: string;
  organization: string;
  audience: "clinician" | "researcher" | "investor" | "press" | "other";
  message: string;
}
