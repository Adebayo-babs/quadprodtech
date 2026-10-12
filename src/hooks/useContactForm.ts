import { useState } from "react";
import type { ContactFormState, SubmitStatus } from "../types";
import { submitContactForm } from "../services/formspree";

const initialState: ContactFormState = {
  name: "", email: "", phone: "", company: "", message: "",
};

export function useContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function updateField<K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const ok = await submitContactForm(form);
      if (ok) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return { form, status, updateField, handleSubmit };
}
