import React from "react";
import { business } from "../config/business";
import { SectionHeading } from "./ui/SectionHeading";
import { ServiceCard } from "./ui/ServiceCard";
import { CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "./ui/Button";

export function Services({ onSelectService }) {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Core Specialisms"
          heading="Targeted Search Optimization for Dundee Businesses"
          description="We focus on the exact ranking factors that determine whether Dundee clients find your company or your competitor on Google."
          align="center"
        />

        {/* 3 Main Services Elevated Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-32)",
            marginBottom: "var(--space-64)",
          }}
        >
          {business.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
              ctaLabel="Inquire About This Service"
            />
          ))}
        </div>

        {/* Secondary Services Architectural Bar */}
        {business.secondaryServices && business.secondaryServices.length > 0 && (
          <div
            className="card"
            style={{
              padding: "var(--space-48)",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div style={{ marginBottom: "var(--space-32)" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-accent)",
                }}
              >
                Comprehensive Technical Support
              </span>
              <h3
                style={{
                  fontSize: "1.4rem",
                  marginTop: "var(--space-8)",
                  color: "var(--color-ink)",
                }}
              >
                End-to-End Local Search Implementation
              </h3>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "var(--space-32)",
              }}
            >
              {business.secondaryServices.map((sec, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-8)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
                    <CheckCircle2 size={18} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                    <h4
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--color-ink)",
                      }}
                    >
                      {sec.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {sec.description}
                  </p>
                </div>
              ))}
            </div>

            {/* In-Section Direct CTA */}
            <div
              style={{
                marginTop: "var(--space-32)",
                paddingTop: "var(--space-24)",
                borderTop: "1px solid var(--color-border-light)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-16)",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-secondary)",
                  margin: 0,
                }}
              >
                Need a bespoke SEO scope for your Dundee premises?
              </p>
              <Button
                variant="whatsapp"
                size="sm"
                href={business.contact.mainCTA.href}
                isExternal={business.contact.mainCTA.isExternal}
                icon={MessageSquare}
              >
                Ask via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
