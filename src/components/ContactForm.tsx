import { Send, Loader2 } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

export default function ContactForm() {
  const { form, status, updateField, handleSubmit } = useContactForm();

  return (
    <div className="form-card">
      <div className="grid grid-2">
        <div className="field">
          <label>Name *</label>
          <input value={form.name} onChange={(e) => updateField("name", e.target.value)} />
        </div>
        <div className="field">
          <label>Email *</label>
          <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
        </div>
        <div className="field">
          <label>Phone</label>
          <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
        </div>
        <div className="field">
          <label>Company</label>
          <input value={form.company} onChange={(e) => updateField("company", e.target.value)} />
        </div>
      </div>

      <div className="field" style={{ marginTop: 18 }}>
        <label>Message *</label>
        <textarea rows={5} value={form.message} onChange={(e) => updateField("message", e.target.value)} />
      </div>

      <button className="btn btn-primary" style={{ marginTop: 22 }} onClick={handleSubmit} disabled={status === "sending"}>
        {status === "sending" ? <Loader2 size={14} className="spin-slow" /> : <Send size={14} />}
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && <p className="msg-success">Thanks — your message has been sent. We'll be in touch shortly.</p>}
      {status === "error" && <p className="msg-error">Please fill in name, email and message, then try again.</p>}
    </div>
  );
}
