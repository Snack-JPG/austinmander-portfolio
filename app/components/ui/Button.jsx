import Link from "next/link";

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ...props
}) {
  const baseClass = variant === "primary" ? "cta-primary" : "cta-secondary";
  const combinedClass = `${baseClass} ${className}`.trim();

  // If it's an external link or has href
  if (href) {
    const linkProps = external ? {
      target: "_blank",
      rel: "noreferrer"
    } : {};

    return (
      <Link
        href={href}
        className={combinedClass}
        {...linkProps}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      className={combinedClass}
      {...props}
    >
      {children}
    </button>
  );
}