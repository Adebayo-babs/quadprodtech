import type { ContactFormState } from "../types";

// Replace with the client's real Formspree endpoint, e.g.
// "https://formspree.io/f/abcdwxyz" — create one free at https://formspree.io
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqrdqwz";

export async function submitContactForm(data: ContactFormState): Promise<boolean> {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.ok;
}
