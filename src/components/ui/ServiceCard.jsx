import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export function ServiceCard({
  service,
  onSelectService,
  ctaLabel = "Discuss Service"
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: "100%",
        backgroundColor: "var(--color-surface)",
      }}
    >
      {/* Top Image Container with Fixed Aspect Ratio & Tonal Zoom */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "240px",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-alt)",
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 350ms ease",
            transform: isHovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        {/* Subtle tonal gradient overlay for legibility & polish */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(15, 76, 58, 0.4) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: "var(--space-32)",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontSize: "1.35rem",
            marginBottom: "var(--space-12, 12px)",
            color: "var(--color-ink)",
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.6,
            marginBottom: "var(--space-24)",
            flexGrow: 1,
          }}
        >
          {service.description}
        </p>

        {service.deliverables && service.deliverables.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 var(--space-24) 0",
              borderTop: "1px solid var(--color-border-light)",
              paddingTop: "var(--space-16)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-8)",
            }}
          >
            {service.deliverables.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--space-8)",
                  fontSize: "0.925rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.4,
                }}
              >
                <Check
                  size={16}
                  style={{
                    color: "var(--color-accent)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div style={{ marginTop: "auto", paddingTop: "var(--space-8)" }}>
          <a
            href="#contact"
            onClick={() => onSelectService && onSelectService(service.title)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-8)",
              fontFamily: "var(--font-heading)",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "var(--color-primary)",
              transition: "gap var(--transition-smooth), color var(--transition-smooth)",
            }}
          >
            <span>{ctaLabel}</span>
            <ArrowRight
              size={16}
              style={{
                transform: isHovered ? "translateX(4px)" : "translateX(0)",
                transition: "transform var(--transition-smooth)",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
