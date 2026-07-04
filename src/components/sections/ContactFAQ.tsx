import { useState } from "react";

const faqs = [
  {
    question: "How long does a project usually take?",
    answer:
      "Every project is different, but most branding and website projects take between 2–6 weeks depending on the scope.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Kinetix works remotely with clients across India and internationally.",
  },
  {
    question: "Which services do you provide?",
    answer:
      "Branding, Web Design & Development, Video Editing, Content Creation, Performance Marketing, and Social Media Management.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply submit the contact form. We'll review your project and get back to you within 12 hours.",
  },
];

export default function ContactFAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="contact-faq reveal">
      <div className="contact-container">
        <span className="section-tag">FAQ</span>

        <h2 className="faq-title">
          Frequently Asked Questions
        </h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={faq.question}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <span>{faq.question}</span>

                <span>{active === index ? "−" : "+"}</span>
              </button>

              {active === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}