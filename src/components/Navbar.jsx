import React, { useState, useEffect } from "react";
import { business } from "../config/business";
import { Button } from "./ui/Button";
import { Menu, X, MessageSquare, Phone } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all var(--transition-smooth)",
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.96)"
          : "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid rgba(229, 231, 235, 0.8)",
        boxShadow: scrolled
          ? "0 4px 16px rgba(0, 0, 0, 0.05)"
          : "0 1px 3px rgba(0, 0, 0, 0.02)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px",
          }}
        >
          {/* Brand Wordmark */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-8)",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-control)",
                backgroundColor: "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "1.2rem",
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.03em",
              }}
            >
              C
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink)",
                  lineHeight: 1.1,
                }}
              >
                {business.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {business.location.areaName}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "var(--space-32)",
            }}
            className="desktop-nav"
          >
            {business.navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--color-text-secondary)",
                  transition: "color var(--transition-smooth)",
                  padding: "var(--space-8) 0",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "var(--space-16)",
            }}
            className="desktop-actions"
          >
            <a
              href={business.contact.phoneHref}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-8)",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--color-ink)",
                padding: "var(--space-8) var(--space-12, 12px)",
              }}
            >
              <Phone size={16} style={{ color: "var(--color-primary)" }} />
              <span>{business.contact.phoneDisplay}</span>
            </a>

            <Button
              variant="whatsapp"
              size="sm"
              href={business.contact.mainCTA.href}
              isExternal={business.contact.mainCTA.isExternal}
              icon={MessageSquare}
            >
              {business.contact.mainCTA.label}
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="mobile-toggle" style={{ display: "block" }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              style={{
                background: "transparent",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-control)",
                padding: "var(--space-8)",
                color: "var(--color-ink)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            borderBottom: "1px solid var(--color-border)",
            padding: "var(--space-24)",
            boxShadow: "0 16px 24px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-16)",
            }}
          >
            {business.navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={closeMenu}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  padding: "var(--space-8) 0",
                  borderBottom: "1px solid var(--color-border-light)",
                }}
              >
                {link.label}
              </a>
            ))}

            <div
              style={{
                paddingTop: "var(--space-16)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-12, 12px)",
              }}
            >
              <a
                href={business.contact.phoneHref}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-8)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  padding: "var(--space-8) 0",
                }}
              >
                <Phone size={18} style={{ color: "var(--color-primary)" }} />
                <span>Call {business.contact.phoneDisplay}</span>
              </a>

              <Button
                variant="whatsapp"
                href={business.contact.mainCTA.href}
                isExternal={business.contact.mainCTA.isExternal}
                icon={MessageSquare}
                onClick={closeMenu}
                style={{ width: "100%" }}
              >
                {business.contact.mainCTA.label}
              </Button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
