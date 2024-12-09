import { InputHTMLAttributes } from "react";
import { cn } from "@/utils";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = ({ label, className, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-dark dark:text-light">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "bg-white dark:bg-dark py-4 px-5 rounded-lg border border-slate-500/40 font-secondary focus:ring-blue-500 focus:border-blue-500 w-full min-h-20 max-h-24 h-full",
          className
        )}
        {...props}
      ></textarea>
    </div>
  );
};
