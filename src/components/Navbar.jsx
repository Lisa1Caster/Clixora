import React, { useState, useEffect } from "react";
import { business } from "../config/business";
import { Button } from "./ui/Button";
import { Menu, X, MessageSquare, Phone, Palette, Check } from "lucide-react";

export const THEME_PRESETS = [
  {
    id: "sapphire",
    name: "Sapphire Blue",
    primary: "#1e40af",
    hover: "#1e3a8a",
    light: "#3b82f6",
    subtle: "#eff6ff",
    accent: "#2563eb",
    dot: "#2563eb",
  },
  {
    id: "emerald",
    name: "Executive Emerald",
    primary: "#0f4c3a",
    hover: "#083327",
    light: "#16654e",
    subtle: "#edf6f2",
    accent: "#059669",
    dot: "#059669",
  },
  {
    id: "indigo",
    name: "Midnight Indigo",
    primary: "#3730a3",
    hover: "#312e81",
    light: "#6366f1",
    subtle: "#eef2ff",
    accent: "#4f46e5",
    dot: "#4f46e5",
  },
  {
    id: "burgundy",
    name: "Royal Burgundy",
    primary: "#881337",
    hover: "#700f2b",
    light: "#be123c",
    subtle: "#fff1f2",
    accent: "#e11d48",
    dot: "#e11d48",
  },
  {
    id: "cyan",
    name: "Tech Ocean Slate",
    primary: "#0e7490",
    hover: "#155e75",
    light: "#06b6d4",
    subtle: "#ecfeff",
    accent: "#0891b2",
    dot: "#0891b2",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("sapphire");

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

  const applyTheme = (theme) => {
    setCurrentTheme(theme.id);
    document.documentElement.style.setProperty("--color-primary", theme.primary);
    document.documentElement.style.setProperty("--color-primary-hover", theme.hover);
    document.documentElement.style.setProperty("--color-primary-light", theme.light);
    document.documentElement.style.setProperty("--color-primary-subtle", theme.subtle);
    document.documentElement.style.setProperty("--color-accent", theme.accent);
    setPaletteOpen(false);
  };

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

          {/* Desktop Right CTA + Theme Palette Switcher */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "var(--space-12, 12px)",
            }}
            className="desktop-actions"
          >
            {/* Color Palette Switcher Popover */}
            <div style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => setPaletteOpen(!paletteOpen)}
                title="Change Brand Color Theme"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-control)",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-ink)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font-heading)",
                  transition: "all var(--transition-smooth)",
                }}
              >
                <Palette size={15} style={{ color: "var(--color-primary)" }} />
                <span>Color</span>
              </button>

              {paletteOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    right: 0,
                    width: "220px",
                    backgroundColor: "var(--color-surface)",
                    borderRadius: "var(--radius-card)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-hover)",
                    padding: "8px",
                    zIndex: 60,
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      padding: "4px 8px 6px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--color-text-muted)",
                      borderBottom: "1px solid var(--color-border-light)",
                    }}
                  >
                    Select Brand Color
                  </div>

                  {THEME_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => applyTheme(preset)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "8px 10px",
                        borderRadius: "var(--radius-control)",
                        border: "none",
                        backgroundColor:
                          currentTheme === preset.id
                            ? "var(--color-primary-subtle)"
                            : "transparent",
                        color: "var(--color-ink)",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-heading)",
                        textAlign: "left",
                        transition: "background-color var(--transition-smooth)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: preset.dot,
                            display: "inline-block",
                          }}
                        />
                        <span>{preset.name}</span>
                      </div>
                      {currentTheme === preset.id && (
                        <Check size={14} style={{ color: "var(--color-primary)" }} />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

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

            {/* Mobile Color Theme Picker Row */}
            <div
              style={{
                paddingTop: "var(--space-12, 12px)",
                paddingBottom: "var(--space-12, 12px)",
                borderBottom: "1px solid var(--color-border-light)",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--color-text-muted)",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Palette size={14} style={{ color: "var(--color-primary)" }} />
                <span>Theme Color</span>
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {THEME_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => applyTheme(preset)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 10px",
                      borderRadius: "var(--radius-control)",
                      border:
                        currentTheme === preset.id
                          ? "2px solid var(--color-primary)"
                          : "1px solid var(--color-border)",
                      backgroundColor:
                        currentTheme === preset.id
                          ? "var(--color-primary-subtle)"
                          : "var(--color-surface)",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: preset.dot,
                        display: "inline-block",
                      }}
                    />
                    <span>{preset.name.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

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
