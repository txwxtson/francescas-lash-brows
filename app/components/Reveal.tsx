"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [inView, setInView] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    document.documentElement.classList.add("js");
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const combinedClassName = `reveal ${inView ? "in-view" : ""} ${className}`;
  const style = delayMs ? { transitionDelay: `${delayMs}ms` } : undefined;

  if (as === "li") {
    return (
      <li ref={ref} className={combinedClassName} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref} className={combinedClassName} style={style}>
      {children}
    </div>
  );
}
