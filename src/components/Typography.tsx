import { cn } from "@/lib/utils";
import { HTMLAttributes, ElementType } from "react";

type TypographyVariant = 
  | "h1" 
  | "h2" 
  | "h3" 
  | "h4"
  | "p" 
  | "lead" 
  | "large" 
  | "small" 
  | "muted";

type TypographyProps<Tag extends ElementType> = {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  as?: Tag;
} & Omit<HTMLAttributes<HTMLElement>, 'as'>;

const variantStyles: Record<TypographyVariant, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground"
};

function Typography<Tag extends ElementType = 'p'>({
  variant = "p",
  children,
  className,
  as,
  ...props
}: TypographyProps<Tag> & { as?: Tag }) {
  const Component = as || (variant === "lead" || variant === "large" || variant === "small" || variant === "muted" 
    ? 'p' 
    : variant) as ElementType;

  return (
    <Component 
      className={cn(
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Typography };
export type { TypographyVariant };
