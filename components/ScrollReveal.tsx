"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all direct section children
    const sections = el.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
