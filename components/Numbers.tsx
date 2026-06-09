"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

type CellProps = {
  target: number;
  suffix?: string;
  caption: string;
};

function NumberCell({ target, suffix = "", caption }: CellProps) {
  const { lang } = useLanguage();
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const dur = 1600;
            const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              setValue(target * easeOut(t));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const rounded = Math.round(value);
  const formatted =
    target >= 1000
      ? rounded.toLocaleString(lang === "tr" ? "tr-TR" : "en-US")
      : rounded.toString();

  return (
    <Reveal>
      <div className="border-t border-white/[0.16] pt-7 min-w-0">
        <div
          ref={ref}
          className="font-display font-semibold text-[clamp(48px,5.2vw,76px)] leading-none tracking-[-0.04em] mb-4 whitespace-nowrap tabular-nums"
        >
          {formatted}
          {suffix}
        </div>
        <div className="text-sm text-white/65 numbers-cap leading-[1.45]">
          {caption}
        </div>
      </div>
    </Reveal>
  );
}

const TARGETS = [
  { target: 12840, suffix: "" },
  { target: 412, suffix: "" },
  { target: 58, suffix: "" },
  { target: 11, suffix: "x" },
];

export default function Numbers() {
  const { t } = useLanguage();
  const n = t.numbers;
  return (
    <section
      id="sayilar"
      className="py-[140px] bg-teal text-white relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-8">
        <Reveal className="mb-7">
          <span className="inline-flex items-center gap-2 bg-white/[0.08] text-white/[0.92] py-[7px] px-3.5 pl-3 rounded-full text-[13px] font-medium tracking-[-0.005em] border border-white/[0.16]">
            {n.eyebrow}
          </span>
        </Reveal>
        <Reveal as="h2" className="display">
          {n.titleLead}
          <br />
          <span style={{ color: "#e8623f" }}>{n.titleAccent}</span>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mt-16 mb-20">
          {TARGETS.map((cell, i) => (
            <NumberCell
              key={i}
              target={cell.target}
              suffix={cell.suffix}
              caption={n.cells[i].caption}
            />
          ))}
        </div>

        <Reveal className="flex gap-6 items-center justify-center flex-wrap pt-10 border-t border-white/[0.12] font-mono text-xs text-white/55 tracking-[0.04em]">
          <span>—</span>
          <span>{n.strip[0]}</span>
          <span>—</span>
          <span>{n.strip[1]}</span>
          <span>—</span>
        </Reveal>
      </div>
    </section>
  );
}
