import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  isExternal = false,
  icon: Icon,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    whatsapp: "btn-whatsapp",
  }[variant] || "btn-primary";

  const sizeClass = size === "sm" ? "btn-sm" : "";
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {Icon && <Icon size={18} aria-hidden="true" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
