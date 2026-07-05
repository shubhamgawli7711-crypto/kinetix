import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "Most engagements run a few weeks depending on scope — branding and websites usually move faster than full campaigns. On our first call we'll map out a realistic timeline before any work begins.",
  },
  {
    id: "process",
    question: "What does the process look like once we start?",
    answer:
      "We begin with discovery and strategy, move into design and production, then handle delivery and support. You'll have visibility at every stage through regular updates.",
  },
  {
    id: "pricing",
    question: "How is pricing structured?",
    answer:
      "Every project is scoped individually based on the service and complexity involved. After our first conversation, you'll receive a clear quotation so there are no surprises later. Projects begin once the scope is approved and the advance payment is received.",
  },
  {
    id: "revisions",
    question: "How many revisions are included?",
    answer:
      "Revisions are included within the agreed scope of each project. Additional rounds beyond that scope can be added if needed, and we'll always let you know before any extra charges apply.",
  },
  {
    id: "location",
    question: "Do you only work with local businesses?",
    answer:
      "We're based in Palghar, Maharashtra, but we work with startups, local businesses and established brands across India. Most communication happens over call, email and WhatsApp, so location is rarely a limitation.",
  },
];

export default function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="contact-faq-section reveal" aria-label="Frequently asked questions">
      <div className="contact-container">
        <div className="faq-header">
          <span className="contact-tag">FAQ</span>
          <h2 className="faq-title">Common Questions</h2>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-trigger-${item.id}`}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <span className="faq-icon-line faq-icon-line--h" />
                    <span className="faq-icon-line faq-icon-line--v" />
                  </span>
                </button>

                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  className="faq-answer-wrapper"
                >
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}