export function SweepFlourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 48"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4 30 C 52 -2 128 -6 182 8 C 206 14 224 18 236 22 C 216 26 192 28 168 24 C 116 15 56 20 4 30 Z" />
    </svg>
  );
}

export function SweepDivider({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 text-tan ${className ?? ""}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 sm:w-16 bg-tan/50" />
      <SweepFlourish className="h-4 w-16" />
      <span className="h-px w-10 sm:w-16 bg-tan/50" />
    </div>
  );
}

/** Hand-drawn underline that draws itself in when its group parent is hovered/focused. */
export function SweepUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 16"
      className={`sweep-underline pointer-events-none absolute -bottom-1 left-0 h-3 w-full ${className ?? ""}`}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 8 Q 50 -3 98 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

/** Same hand-drawn underline, but draws in on scroll reveal rather than on hover. */
export function StrokeUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 14"
      className={`stroke-draw h-3 w-40 ${className ?? ""}`}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 9 Q 55 -2 80 6 T 157 5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}
