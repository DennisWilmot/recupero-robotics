import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "theabot-mobile",
    name: "THEAbot Mobile",
    subtitle: "Floor-mounted clinical system with TrVr software",
    image: "/ppt-media/theabot-mobile-upscaled.png",
    bullets: [
      "Floor-mounted mobile stand for clinical settings",
      "1 Therapist → 3 Patients simultaneous care",
      "8 gamified rehabilitation games via TrVr",
      "Full arm, shoulder, elbow & wrist ROM",
      "Haptic feedback & biometric sensing",
      "Machine learning-driven performance metrics",
    ],
    quote: "My arm felt alive again.",
  },
  {
    id: "theabot-desktop",
    name: "THEAbot Desktop",
    subtitle: "Compact tabletop system for home & community use",
    image: "/ppt-media/theabot-desktop-upscaled.png",
    bullets: [
      "Portable, table-mounted form factor",
      "AI-prescribed therapy regimes",
      "Caregiver-assisted home use",
      "Networked multiplayer rehabilitation",
      "US Patent Pending",
    ],
    quote: "I was able to put on my jacket before leaving the house.",
  },
  {
    id: "trvr-handheld",
    name: "TrVr Handheld",
    subtitle: "First haptic shape-changing controller for fine motor rehab",
    image: "/ppt-media/trvr-handheld-upscaled.png",
    bullets: [
      "Attaches to THEAbot Mobile or Desktop",
      "Fine motor & finger rehabilitation",
      "Standalone handheld use",
      "Adaptive dynamic difficulty adjustment",
      "US Patent Pending",
    ],
    quote: "I can't wait to take this home and play against my grandson.",
  },
];

export const hbbDdaDescription = {
  title: "TrVr Software & HBB-DDA",
  subtitle: "The intelligence behind the hardware",
  summary:
    "The HBB-DDA (Haptic/Biometric-Based Dynamic Difficulty Adjustment) system combines robotics, video games, and biometric sensors to automatically adjust therapy difficulty in real-time. Difficulty is adjusted based on both performance and effort/stress — using heart rate and skin response — keeping therapy challenging yet achievable.",
  stages: [
    { label: "Passive ROM", description: "Guided movement with haptic assistance" },
    { label: "Active ROM", description: "Self-directed movement with adaptive resistance" },
    { label: "Fine Motor", description: "Precision grip and finger dexterity training" },
  ],
  stat: {
    value: "50%",
    comparison: "12%",
    label: "of participants preferred adaptive therapy vs. non-adaptive",
  },
};
