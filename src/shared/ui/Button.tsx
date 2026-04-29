import { cn } from "@/shared/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  href?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:opacity-90",
  secondary:
    "bg-gray-100 text-foreground hover:bg-gray-200",
  outline:
    "border border-foreground text-foreground hover:bg-foreground hover:text-background",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors";

  if (href) {
    return (
      <a href={href} className={cn(base, variantClasses[variant], className)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(base, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
