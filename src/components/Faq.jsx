import React, { useState } from "react";
import { business } from "../config/business";
import { SectionHeading } from "./ui/SectionHeading";
import { ChevronDown, MessageSquare } from "lucide-react";
import { Button } from "./ui/Button";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faq || business.faq.length === 0) {
    return null;
  }

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: "880px" }}>
        <SectionHeading
          eyebrow="Clear Answers"
          heading="Frequently Asked Questions"
          description="Straightforward details about how local search optimization works for Dundee enterprises."
          align="center"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-16)",
            marginBottom: "var(--space-48)",
          }}
        >
          {business.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="card"
                style={{
                  overflow: "hidden",
                  border: "1px solid var(--color-border)",
                  backgroundColor: isOpen ? "var(--color-surface)" : "var(--color-surface)",
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "var(--space-24)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "var(--color-ink)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      lineHeight: 1.4,
                      paddingRight: "var(--space-16)",
                      color: isOpen ? "var(--color-primary)" : "var(--color-ink)",
                    }}
                  >
                    {item.question}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: isOpen
                        ? "var(--color-primary-subtle)"
                        : "var(--color-surface-alt)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "transform var(--transition-smooth), background-color var(--transition-smooth)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown
                      size={18}
                      style={{
                        color: isOpen ? "var(--color-primary)" : "var(--color-text-secondary)",
                      }}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 var(--space-24) var(--space-24) var(--space-24)",
                      borderTop: "1px solid var(--color-border-light)",
                      paddingTop: "var(--space-16)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1rem",
                        lineHeight: 1.68,
                        color: "var(--color-text-secondary)",
                        margin: 0,
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet FAQ Footer Helper */}
        <div
          style={{
            textAlign: "center",
            padding: "var(--space-24)",
            borderRadius: "var(--radius-card)",
            backgroundColor: "var(--color-surface-alt)",
            border: "1px solid var(--color-border-light)",
          }}
        >
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--color-text-secondary)",
              marginBottom: "var(--space-16)",
            }}
          >
            Have a specific question regarding your website's rankings in Dundee?
          </p>
          <Button
            variant="whatsapp"
            size="sm"
            href={business.contact.mainCTA.href}
            isExternal={business.contact.mainCTA.isExternal}
            icon={MessageSquare}
          >
            Chat with a Dundee Specialist
          </Button>
        </div>
      </div>
    </section>
  );
}
