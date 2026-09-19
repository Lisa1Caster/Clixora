import React from "react";
import { business } from "../config/business";
import { MapPin, Phone, MessageSquare, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-secondary)",
        color: "#f8fafc",
        paddingTop: "var(--space-64)",
        paddingBottom: "var(--space-32)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-48)",
            marginBottom: "var(--space-48)",
          }}
        >
          {/* Col 1: Brand & Identity */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-8)",
                marginBottom: "var(--space-16)",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "var(--radius-control)",
                  backgroundColor: "var(--color-primary-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                }}
              >
                C
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                {business.name}
              </span>
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#94a3b8",
                lineHeight: 1.6,
                marginBottom: "var(--space-16)",
              }}
            >
              {business.footer.note}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                color: "#ffffff",
                marginBottom: "var(--space-16)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-12, 12px)" }}>
              {business.navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.95rem",
                      color: "#94a3b8",
                      transition: "color var(--transition-smooth)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                color: "#ffffff",
                marginBottom: "var(--space-16)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Contact Information
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-12, 12px)", fontSize: "0.95rem", color: "#94a3b8" }}>
              <a
                href={business.contact.phoneHref}
                style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", color: "#cbd5e1" }}
              >
                <Phone size={16} style={{ color: "var(--color-primary-light)" }} />
                <span>{business.contact.phoneDisplay}</span>
              </a>

              <a
                href={business.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", color: "#cbd5e1" }}
              >
                <MessageSquare size={16} style={{ color: "#25d366" }} />
                <span>WhatsApp: {business.contact.whatsappDisplay}</span>
              </a>

              <a
                href={business.contact.emailHref}
                style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", color: "#cbd5e1" }}
              >
                <Mail size={16} style={{ color: "var(--color-primary-light)" }} />
                <span>{business.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Location & Hours */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                color: "#ffffff",
                marginBottom: "var(--space-16)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Dundee Office & Hours
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-12, 12px)", fontSize: "0.95rem", color: "#94a3b8" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-8)" }}>
                <MapPin size={16} style={{ color: "var(--color-primary-light)", marginTop: "4px", flexShrink: 0 }} />
                <span>{business.location.fullAddress}</span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-8)" }}>
                <Clock size={16} style={{ color: "var(--color-primary-light)", marginTop: "4px", flexShrink: 0 }} />
                <span>{business.openingHours.summary}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div
          style={{
            paddingTop: "var(--space-24)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-16)",
            fontSize: "0.85rem",
            color: "#64748b",
          }}
        >
          <p style={{ margin: 0, color: "#94a3b8" }}>
            © {currentYear} {business.footer.copyrightNotice}
          </p>

          <p style={{ margin: 0, color: "#94a3b8" }}>
            {business.location.areaName}
          </p>
        </div>
      </div>
    </footer>
  );
}
