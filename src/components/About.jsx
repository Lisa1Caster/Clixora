import React from "react";
import { business } from "../config/business";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { MapPin, Phone, MessageSquare } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-64)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Refined Architectural Image Composition */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                boxShadow: "var(--shadow-resting)",
                border: "1px solid var(--color-border-light)",
                aspectRatio: "4 / 3",
                maxHeight: "520px",
              }}
            >
              <img
                src={business.images.about}
                alt={`${business.name} Office in Dundee`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Quiet Location Badge Overlay */}
            <div
              className="card"
              style={{
                position: "absolute",
                bottom: "-24px",
                right: "24px",
                padding: "var(--space-16) var(--space-24)",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-12, 12px)",
                boxShadow: "var(--shadow-hover)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-control)",
                  backgroundColor: "var(--color-primary-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary)",
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-ink)",
                    margin: 0,
                  }}
                >
                  {business.location.street}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    margin: 0,
                  }}
                >
                  {business.location.city}, {business.location.postalCode}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Craft & Specific Story */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SectionHeading
              eyebrow={business.about.eyebrow}
              heading={business.about.heading}
              align="left"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-16)",
                marginBottom: "var(--space-32)",
              }}
            >
              {business.about.paragraphs.map((para, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.68,
                    color: "var(--color-text-secondary)",
                    maxWidth: "var(--max-width-prose)",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Highlight Callout */}
            <div
              style={{
                padding: "var(--space-24)",
                backgroundColor: "var(--color-surface-alt)",
                borderLeft: "4px solid var(--color-primary)",
                borderRadius: "0 var(--radius-control) var(--radius-control) 0",
                marginBottom: "var(--space-32)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  fontStyle: "italic",
                  marginBottom: "var(--space-8)",
                  lineHeight: 1.5,
                }}
              >
                "{business.about.highlightQuote}"
              </p>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-primary)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                — {business.about.authorTitle}
              </span>
            </div>

            {/* Direct Contact CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-16)" }}>
              <Button
                variant="whatsapp"
                href={business.contact.mainCTA.href}
                isExternal={business.contact.mainCTA.isExternal}
                icon={MessageSquare}
              >
                {business.contact.mainCTA.label}
              </Button>
              <Button
                variant="secondary"
                href={business.contact.secondaryCTA.href}
                icon={Phone}
              >
                {business.contact.secondaryCTA.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
