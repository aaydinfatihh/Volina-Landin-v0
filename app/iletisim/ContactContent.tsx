"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

export default function ContactContent() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <>
      <Nav variant="transparent" />
      <section className="relative bg-teal text-white min-h-screen flex items-center overflow-hidden pt-44 pb-28">
        <div className="max-w-[860px] mx-auto px-8 text-center max-md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-white/70 mb-11 transition-colors duration-[160ms] ease-[var(--ease-volina)] hover:text-white"
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" aria-hidden="true">
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.common.backHome}
          </Link>
          <div className="font-mono text-xs tracking-[0.16em] uppercase text-accent mb-[22px]">
            {c.eyebrow}
          </div>
          <h1 className="font-sans font-bold text-[clamp(36px,5vw,64px)] leading-[1.06] tracking-[-0.03em] mx-auto mb-5 max-w-[16ch] text-balance">
            {c.titleLead}
            <em className="italic" style={{ color: "#e8623f" }}>
              {c.titleEm}
            </em>
            {c.titleTail}
          </h1>
          <p className="text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-white/[0.74] max-w-[46ch] mx-auto mb-[52px] text-pretty">
            {c.intro}
          </p>

          <div className="relative max-w-[540px] mx-auto p-11 px-12 rounded-[20px] overflow-hidden border border-white/[0.28] bg-gradient-to-br from-white/[0.22] to-white/[0.06] backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[0_30px_80px_rgba(0,0,0,0.32),inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_1px_rgba(255,255,255,0.10)] max-sm:p-7">
            <div className="font-mono text-xs tracking-[0.14em] uppercase text-white/70 mb-3.5">
              {c.emailLabel}
            </div>
            <a
              href="mailto:info@volina.ai"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-[clamp(24px,3.6vw,36px)] tracking-[-0.02em] leading-[1.05] text-white transition-colors duration-[160ms] ease-[var(--ease-volina)] hover:text-accent"
            >
              info@volina.ai
              <svg
                viewBox="0 0 16 16"
                className="w-[26px] h-[26px] text-accent transition-transform duration-200 ease-[var(--ease-volina)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                aria-hidden="true"
              >
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
            <p className="mt-[22px] pt-[22px] border-t border-white/[0.16] text-[14.5px] text-white/[0.66] leading-[1.5]">
              {c.note}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
