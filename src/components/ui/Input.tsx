import { InputHTMLAttributes } from "react";
import { cn } from "@/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-dark dark:text-light">{label}</label>
      )}
      <input
        className={cn(
          "bg-white dark:bg-dark/10 py-4 px-5 rounded-lg border border-slate-500/40 font-secondary focus:ring-blue-500 focus:border-blue-500",
          className
        )}
        {...props}
      />
    </div>
  );
};
