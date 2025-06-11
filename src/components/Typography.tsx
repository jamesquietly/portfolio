import { HTMLAttributes } from "react";

type TypographyProps = {
  variant?: "h1" | "h2" | "p";
  children: React.ReactNode;
  className?: string;
};

const Typography = ({ variant = "p", children, className }: TypographyProps) => {
  switch (variant) {
    case "h1":
      return <h1 className={`scroll-m-20 text-4xl font-bold tracking-tight text-balance ${className}`}>{children}</h1>;
    case "h2":
      return <h2 className={`scroll-m-20 text-3xl font-semibold tracking-tight ${className}`}>{children}</h2>;
    default:
      return <p className={`leading-7 [&:not(:first-child)]:mt-2 ${className}`}>{children}</p>;
  }
};

export default Typography;
