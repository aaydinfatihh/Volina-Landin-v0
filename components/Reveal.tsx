"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as keyof JSX.IntrinsicElements;
  return (
    // @ts-expect-error — generic ref on intrinsic element
    <Component
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
