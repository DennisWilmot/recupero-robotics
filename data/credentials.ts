import type { Credential, Milestone } from "./types";

export const credentials: Credential[] = [
  {
    label: "UPenn Rehabilitation Robotics Lab",
    detail: "Born out of the University of Pennsylvania",
  },
  {
    label: "NIH SBIR Funded",
    detail: "Fast Track Grant 1R42HD104325",
  },
  {
    label: "US Patent #11,090,528",
    detail: "Protected intellectual property",
  },
  {
    label: "2.5-Year Clinical Trial Complete",
    detail: "NCT05542121 on clinicaltrials.gov",
  },
  {
    label: "8 IEEE Publications",
    detail: "ICORR 2025 & peer-reviewed journals",
  },
];

export const milestones: Milestone[] = [
  { year: "2018", label: "Founded via Penn Center for Innovation" },
  { year: "2024", label: "Patents granted" },
  { year: "2025", label: "8 IEEE publications at ICORR" },
  { year: "2025", label: "2.5-year THEAbot clinical trial complete" },
  { year: "2027", label: "Anticipated FDA clearance" },
];

export const partners = [
  { name: "University of Pennsylvania", logo: null },
  { name: "Penn Medicine", logo: null },
  { name: "GRASP Lab", logo: null },
  { name: "National Institutes of Health", logo: null },
  { name: "Columbia University", logo: null },
] as const;
