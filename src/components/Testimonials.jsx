import React from "react";
import { business } from "../config/business";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  // CRITICAL: Rendered ONLY if real testimonials exist in business config
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Local Client Feedback"
          heading="What Dundee Business Owners Say"
          description="Verified experiences from local businesses partnering with Clixora SEO."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-32)",
          }}
        >
          {business.testimonials.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                padding: "var(--space-32)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  color: "var(--color-ink)",
                  marginBottom: "var(--space-24)",
                }}
              >
                "{item.quote}"
              </p>
              <div>
                <strong
                  style={{
                    display: "block",
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-ink)",
                  }}
                >
                  {item.author}
                </strong>
                {item.business && (
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {item.business}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
