import { Icon } from "./Icon";

/* Island button with nested "button-in-button" trailing chip. */
export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  if (variant === "ghost") {
    return (
      <a href={href} className={`btn btn-ghost group ${className}`}>
        <span>{children}</span>
        <Icon
          name="arrow"
          size={17}
          className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1"
        />
      </a>
    );
  }
  return (
    <a href={href} className={`btn btn-primary group ${className}`}>
      <span>{children}</span>
      <span className="btn-chip">
        <Icon name="arrow" size={16} />
      </span>
    </a>
  );
}
