"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="top"
      className="relative overflow-hidden flex items-center pt-[230px] pb-[110px] min-h-screen bg-white text-ink"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-scrim absolute inset-0 z-[1]" aria-hidden="true" />
      <div className="relative z-[2] w-full px-11 max-md:px-6">
        <Reveal as="h1" className="hero-title">
          {h.titleLead}{" "}
          <span style={{ color: "#e8623f", fontStyle: "italic" }}>
            {h.titleAccent}
          </span>
        </Reveal>
        <Reveal as="p" className="hero-sub">
          {h.sub}
        </Reveal>
        <Reveal className="flex gap-3 flex-wrap mb-16">
          <a
            href="https://www.cal.eu/volina/30min?user=volina"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 font-medium text-[15.5px] tracking-[-0.005em] rounded-full px-6 py-3.5 pl-[26px] bg-accent text-white transition-all duration-[160ms] ease-[var(--ease-volina)] hover:-translate-y-px hover:shadow-[0_8px_20px_-8px_rgba(232,98,63,0.55)]"
          >
            <span>{h.cta}</span>
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" aria-hidden="true">
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Reveal>

        <Reveal className="flex items-center gap-7 flex-wrap">
          {h.stats.map((s, i) => (
            <div key={s.label} className="contents">
              {i > 0 && (
                <div className="w-px h-8 bg-white/[0.28]" aria-hidden="true" />
              )}
              <div className="flex flex-col gap-0.5">
                <strong className="font-display font-semibold text-[36px] tracking-[-0.04em] text-white whitespace-nowrap">
                  {s.num}
                </strong>
                <span className="text-[13px] text-white/70 tracking-[-0.005em]">
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
