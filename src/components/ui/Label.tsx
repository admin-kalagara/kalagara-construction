import type { ReactNode } from "react";

export function Label({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <p className={`mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary ${center ? "justify-center" : ""}`}>
      <span className="h-px w-6 bg-primary" />
      {children}
      {center && <span className="h-px w-6 bg-primary" />}
    </p>
  );
}
