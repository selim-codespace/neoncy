import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => (
  <section
    className={cn(
      "rounded-xl border border-slate-200/80 bg-surface/90 p-6 shadow-[0_12px_40px_-26px_rgba(15,23,42,0.5)] backdrop-blur",
      className,
    )}
    {...props}
  />
);

export const CardHeader = ({ className, ...props }: CardProps) => (
  <div className={cn("mb-4 space-y-1.5", className)} {...props} />
);

export const CardTitle = ({ className, ...props }: CardProps) => (
  <h2 className={cn("text-lg font-semibold tracking-tight text-slate-900", className)} {...props} />
);

export const CardDescription = ({ className, ...props }: CardProps) => (
  <p className={cn("text-sm leading-relaxed text-slate-600", className)} {...props} />
);

export const CardContent = ({ className, ...props }: CardProps) => (
  <div className={cn("space-y-4", className)} {...props} />
);
