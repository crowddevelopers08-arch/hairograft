"use client";

import { useEffect } from "react";

const animatedSelector = [
  ".animate-slip-up",
  ".animate-slip-left",
  ".animate-slip-right",
  ".animate-pop",
].join(",");

export default function ScrollAnimations() {
  useEffect(() => {
    const animatedItems = Array.from(
      document.querySelectorAll<HTMLElement>(animatedSelector)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      }
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}
