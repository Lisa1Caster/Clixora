import React, { useState } from "react";
import { business } from "../config/business";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle,
  Send
} from "lucide-react";

export function Contact({ selectedService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    website: "",
    service: selectedService || business.contactForm.fields.service.options[0],
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync selectedService prop if passed from service cards
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Smooth frontend submission simulation
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          heading="Contact Clixora SEO in Dundee"
          description="Speak directly with an experienced search consultant. Send a message below, message on WhatsApp, or call our Dundee office."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-48)",
            alignItems: "start",
          }}
        >
          {/* Left Column: Direct Contact Details, Hours, Address & Fast CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
            {/* Primary Action Card */}
            <div
              className="card"
              style={{
                padding: "var(--space-32)",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", marginBottom: "var(--space-16)" }}>
                Direct Communication
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--space-24)",
                }}
              >
                For immediate enquiries or quick questions regarding your local rankings:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)" }}>
                {/* WhatsApp */}
                <a
                  href={business.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: "var(--space-8)",
                  }}
                >
                  <MessageSquare size={18} />
                  <span>{business.contact.mainCTA.label}</span>
                </a>

                {/* Phone Call */}
                <a
                  href={business.contact.phoneHref}
                  className="btn btn-secondary"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: "var(--space-8)",
                  }}
                >
                  <Phone size={18} style={{ color: "var(--color-primary)" }} />
                  <span>Call {business.contact.phoneDisplay}</span>
                </a>

                {/* Direct Email */}
                <a
                  href={business.contact.emailHref}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-12, 12px)",
                    padding: "var(--space-12, 12px) var(--space-16)",
                    borderRadius: "var(--radius-control)",
                    backgroundColor: "var(--color-surface-alt)",
                    border: "1px solid var(--color-border-light)",
                    fontSize: "0.95rem",
                    color: "var(--color-ink)",
                    marginTop: "var(--space-8)",
                  }}
                >
                  <Mail size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                    {business.contact.email}
                  </span>
                </a>
              </div>
            </div>

            {/* Office Location Card & Directions */}
            <div
              className="card"
              style={{
                padding: "var(--space-32)",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-12, 12px)", marginBottom: "var(--space-16)" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--radius-control)",
                    backgroundColor: "var(--color-primary-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary)",
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", margin: 0 }}>
                    Office Address
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                    {business.location.areaName}
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-ink)",
                  fontWeight: 600,
                  marginBottom: "var(--space-8)",
                }}
              >
                {business.location.fullAddress}
              </p>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--space-16)",
                }}
              >
                Serving businesses throughout Dundee, Broughty Ferry, Monifieth, and the greater Tayside corridor.
              </p>

              <a
                href={business.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-8)",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                }}
              >
                <span>{business.location.directionsLabel}</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Business Hours Card */}
            <div
              className="card"
              style={{
                padding: "var(--space-32)",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-12, 12px)", marginBottom: "var(--space-16)" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--radius-control)",
                    backgroundColor: "var(--color-primary-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary)",
                  }}
                >
                  <Clock size={18} />
                </div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", margin: 0 }}>
                  Consultation Hours
                </h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
                {business.openingHours.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.95rem",
                      paddingBottom: "var(--space-8)",
                      borderBottom:
                        idx < business.openingHours.schedule.length - 1
                          ? "1px solid var(--color-border-light)"
                          : "none",
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "var(--color-ink)" }}>
                      {item.days}
                    </span>
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Styled, Usable Consultation Request Form */}
          <div
            className="card"
            style={{
              padding: "var(--space-48)",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div style={{ marginBottom: "var(--space-24)" }}>
              <span className="eyebrow" style={{ marginBottom: "var(--space-8)" }}>
                {business.contactForm.eyebrow}
              </span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-8)" }}>
                {business.contactForm.heading}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>
                {business.contactForm.description}
              </p>
            </div>

            {submitted ? (
              <div
                style={{
                  padding: "var(--space-32)",
                  backgroundColor: "var(--color-primary-subtle)",
                  borderRadius: "var(--radius-control)",
                  border: "1px solid rgba(15, 76, 58, 0.2)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-primary)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto var(--space-16) auto",
                  }}
                >
                  <CheckCircle size={28} />
                </div>
                <h4 style={{ fontSize: "1.25rem", color: "var(--color-primary)", marginBottom: "var(--space-8)" }}>
                  Consultation Request Sent
                </h4>
                <p style={{ fontSize: "0.95rem", color: "var(--color-ink)", marginBottom: "var(--space-24)" }}>
                  {business.contactForm.successMessage}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      businessName: "",
                      phone: "",
                      email: "",
                      website: "",
                      service: business.contactForm.fields.service.options[0],
                      message: ""
                    });
                  }}
                >
                  Submit Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-16)" }}>
                  <div>
                    <label htmlFor="contact-name" className="form-label">
                      {business.contactForm.fields.name.label} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder={business.contactForm.fields.name.placeholder}
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-business" className="form-label">
                      {business.contactForm.fields.businessName.label}
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      name="businessName"
                      placeholder={business.contactForm.fields.businessName.placeholder}
                      value={formData.businessName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-16)" }}>
                  <div>
                    <label htmlFor="contact-phone" className="form-label">
                      {business.contactForm.fields.phone.label} *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder={business.contactForm.fields.phone.placeholder}
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="form-label">
                      {business.contactForm.fields.email.label} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder={business.contactForm.fields.email.placeholder}
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-16)" }}>
                  <div>
                    <label htmlFor="contact-website" className="form-label">
                      {business.contactForm.fields.website.label}
                    </label>
                    <input
                      id="contact-website"
                      type="text"
                      name="website"
                      placeholder={business.contactForm.fields.website.placeholder}
                      value={formData.website}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="form-label">
                      {business.contactForm.fields.service.label}
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {business.contactForm.fields.service.options.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="form-label">
                    {business.contactForm.fields.message.label}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder={business.contactForm.fields.message.placeholder}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={submitting}
                  icon={Send}
                  style={{ width: "100%", marginTop: "var(--space-8)" }}
                >
                  {submitting ? business.contactForm.submittingLabel : business.contactForm.submitLabel}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
