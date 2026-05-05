"use server";

import { promises as fs } from "fs";
import path from "path";

interface FormState {
  success: boolean;
  message: string;
}

const SUBMISSIONS_FILE = path.join(process.cwd(), "submissions.json");

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const organization = formData.get("organization") as string;
  const audience = formData.get("audience") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const submission = {
    timestamp: new Date().toISOString(),
    name,
    email,
    organization: organization || "",
    audience: audience || "other",
    message,
  };

  try {
    let existing: unknown[] = [];
    try {
      const raw = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      // File doesn't exist yet
    }

    existing.push(submission);
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(existing, null, 2));

    return { success: true, message: "Thank you! We'll be in touch soon." };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please email us directly.",
    };
  }
}
