import React from "react";

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  className = "",
}) {
  const isCentered = align === "center";

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: isCentered ? "center" : "left",
        maxWidth: isCentered ? "720px" : "100%",
        marginLeft: isCentered ? "auto" : "0",
        marginRight: isCentered ? "auto" : "0",
        marginBottom: "var(--space-48)",
      }}
    >
      {eyebrow && (
        <div>
          <span className="eyebrow eyebrow-pill">
            {eyebrow}
          </span>
        </div>
      )}
      {heading && (
        <h2 style={{ marginBottom: description ? "var(--space-16)" : "0" }}>
          {heading}
        </h2>
      )}
      {description && (
        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "1.125rem",
            lineHeight: 1.65,
            marginLeft: isCentered ? "auto" : "0",
            marginRight: isCentered ? "auto" : "0",
            maxWidth: "var(--max-width-prose)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
