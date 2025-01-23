import { HTMLAttributes } from "react";
import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  title    : string;
  subtitle?: string;
  level?   : "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title = (props: Props) => {
  const { title, subtitle, level = "h2", className, ...rest } = props;
  const HeadingComponent = level;

  return (
    <HeadingComponent
      className={cn("text-4xl text-dark/80 dark:text-light font-bold font-secondary", className)}
      {...rest}
    >
      {title} { subtitle && <span className="capitalize text-blue-500">{subtitle}</span> }
    </HeadingComponent>
  );
};
