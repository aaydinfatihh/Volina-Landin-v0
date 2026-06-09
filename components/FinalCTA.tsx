"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function FinalCTA() {
  const { t } = useLanguage();
  const c = t.finalCta;
  return (
    <section id="demo" className="py-[140px] bg-teal text-white relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal>
          <div className="bg-white/[0.04] border border-white/10 rounded-[28px] p-16 max-lg:p-10">
            <div>
              <h2 className="display display--white" style={{ marginBottom: "20px" }}>
                {c.titleLead}
                <br />
                <em className="italic font-semibold" style={{ color: "#e8623f" }}>
                  {c.titleEm}
                </em>
              </h2>
              <div className="flex gap-3 flex-wrap mt-8">
                <a
                  href="https://www.cal.eu/volina/30min?user=volina"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 font-medium text-[15.5px] tracking-[-0.005em] rounded-full px-6 py-3.5 pl-[26px] bg-accent text-white transition-all duration-[160ms] ease-[var(--ease-volina)] hover:-translate-y-px hover:shadow-[0_8px_20px_-8px_rgba(232,98,63,0.55)]"
                >
                  <span>{c.cta}</span>
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
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
