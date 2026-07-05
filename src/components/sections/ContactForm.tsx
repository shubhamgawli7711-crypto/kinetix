import { useState, type ChangeEvent, type FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  details: string;
}

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  details: "",
};

const SERVICE_OPTIONS = [
  "Social Media Management",
  "Website Development",
  "Branding",
  "Graphic Designing",
  "Video Production",
  "Video Editing",
  "Lead Generation",
  "Performance Advertising",
];

const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Not sure yet",
];

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
    | string
    | undefined;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Missing VITE_WEB3FORMS_ACCESS_KEY."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New project inquiry from ${formData.name || "a visitor"}`,
          from_name: "Kinetix.co Website",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.details,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData(INITIAL_FORM_DATA);
      } else {
        setStatus("error");
        setErrorMessage(
          typeof result.message === "string"
            ? result.message
            : "Something went wrong while sending your message."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't reach the server. Check your connection and try again."
      );
    }
  };

  const isLoading = status === "loading";

  return (
    <section
      id="contact-form"
      className="contact-form-section reveal"
      aria-label="Project inquiry form"
    >
      <div className="contact-container">
        <div className="form-header">
          <span className="contact-tag">GET IN TOUCH</span>

          <h2 className="form-title">Tell us everything.</h2>

          <p className="form-subtitle">
            The more context you share, the faster we can shape the right
            plan for your project.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company or brand name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field form-field--full">
              <label htmlFor="budget">Budget</label>
              <select
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select an estimated budget
                </option>
                {BUDGET_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field form-field--full">
              <label htmlFor="details">Project Details</label>
              <textarea
                id="details"
                name="details"
                required
                rows={6}
                value={formData.details}
                onChange={handleChange}
                placeholder="What are you building? What does success look like?"
              />
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="form-submit" disabled={isLoading}>
              <span className="form-submit-shine" aria-hidden="true" />
              {isLoading ? (
                <span className="form-spinner" aria-hidden="true" />
              ) : (
                <span>Start Your Project →</span>
              )}
            </button>

            <div className="form-status" role="status" aria-live="polite">
              {status === "success" && (
                <p className="form-status--success">
                  <span aria-hidden="true">✓</span>
                  Message sent. We&apos;ll be in touch within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="form-status--error">
                  <span aria-hidden="true">!</span>
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}