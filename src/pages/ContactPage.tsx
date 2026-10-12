import ContactInfoSection from "../components/sections/ContactInfoSection";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <ContactInfoSection>
      <div>
        <h2 className="form-heading">Send us a message</h2>
        <ContactForm />
      </div>
    </ContactInfoSection>
  );
}
