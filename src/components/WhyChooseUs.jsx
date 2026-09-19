import React from "react";
import { business } from "../config/business";
import { SectionHeading } from "./ui/SectionHeading";
import { CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Our Standard"
          heading="Why Dundee Businesses Choose Clixora SEO"
          description="Straightforward, technical local search expertise without confusing jargon, unverified claims, or remote call centers."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--space-24)",
          }}
        >
          {business.usps.map((usp, index) => (
            <div
              key={index}
              className="card"
              style={{
                padding: "var(--space-32)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Refined Monospace/Geometric Number Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "var(--space-24)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--color-primary)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {usp.number}
                </span>
                <CheckCircle size={20} style={{ color: "var(--color-accent)" }} />
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "var(--space-12, 12px)",
                  color: "var(--color-ink)",
                }}
              >
                {usp.title}
              </h3>

              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
