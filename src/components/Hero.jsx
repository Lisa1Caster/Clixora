import React from "react";
import { business } from "../config/business";
import { Button } from "./ui/Button";
import { MessageSquare, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "128px",
        paddingBottom: "var(--space-96)",
        overflow: "hidden",
        backgroundColor: "var(--color-primary)",
      }}
    >
      {/* Background Image with Crisp Object Fit */}
      <img
        src={business.images.hero}
        alt={`${business.name} Dundee`}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Single Controlled Tonal Overlay for Legibility & Corporate Depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(8, 38, 30, 0.94) 0%, rgba(15, 76, 58, 0.88) 55%, rgba(17, 24, 39, 0.92) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "860px" }}>
          {/* Eyebrow Label */}
          <div style={{ marginBottom: "var(--space-24)" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-8)",
                fontFamily: "var(--font-heading)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6ee7b7", // Soft bright emerald for dark contrast
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(110, 231, 183, 0.25)",
                padding: "var(--space-8) var(--space-16)",
                borderRadius: "9999px",
              }}
            >
              <MapPin size={14} />
              <span>{business.location.areaName} · {business.category}</span>
            </span>
          </div>

          {/* Confident H1 Headline */}
          <h1
            style={{
              color: "#ffffff",
              marginBottom: "var(--space-24)",
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              fontWeight: 800,
            }}
          >
            {business.headline}
          </h1>

          {/* Short Supporting Paragraph */}
          <p
            style={{
              color: "rgba(244, 247, 245, 0.9)",
              fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
              lineHeight: 1.65,
              marginBottom: "var(--space-48)",
              maxWidth: "680px",
            }}
          >
            {business.heroSupportingText}
          </p>

          {/* Action CTAs: Primary (WhatsApp) + Secondary (Call) */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "var(--space-16)",
              marginBottom: "var(--space-64)",
            }}
          >
            <Button
              variant="whatsapp"
              href={business.contact.mainCTA.href}
              isExternal={business.contact.mainCTA.isExternal}
              icon={MessageSquare}
              style={{ padding: "var(--space-16) var(--space-32)" }}
            >
              {business.contact.mainCTA.label}
            </Button>

            <Button
              variant="secondary"
              href={business.contact.secondaryCTA.href}
              icon={Phone}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                borderColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(4px)",
              }}
            >
              {business.contact.secondaryCTA.label}
            </Button>
          </div>

          {/* Quiet Trust Bar Drawn Directly from Real Business Details */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-24)",
              paddingTop: "var(--space-24)",
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              color: "rgba(244, 247, 245, 0.8)",
              fontSize: "0.925rem",
              fontFamily: "var(--font-heading)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
              <ShieldCheck size={16} style={{ color: "#6ee7b7" }} />
              <span>{business.location.street}, {business.location.city}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
              <Clock size={16} style={{ color: "#6ee7b7" }} />
              <span>{business.openingHours.summary}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  display: "inline-block",
                }}
              />
              <span>{business.openingHours.statusBadge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
