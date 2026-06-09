"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="faq-item border-t border-ink/10 py-7 last:border-b last:border-b-ink/10"
      data-open={open}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full bg-transparent border-0 p-0 list-none cursor-pointer flex justify-between items-center gap-6 font-display text-[clamp(22px,2.4vw,30px)] tracking-[-0.01em] leading-[1.2] text-left text-ink"
      >
        <span>{q}</span>
        <span className="faq-plus" aria-hidden="true" />
      </button>
      <div
        ref={bodyRef}
        style={{
          maxHeight: open ? `${bodyRef.current?.scrollHeight ?? 999}px` : "0",
          opacity: open ? 1 : 0,
          marginTop: open ? "20px" : "0",
          overflow: "hidden",
          transition:
            "max-height 320ms cubic-bezier(.2,.7,.2,1), opacity 320ms cubic-bezier(.2,.7,.2,1), margin-top 320ms cubic-bezier(.2,.7,.2,1)",
        }}
      >
        <p className="m-0 text-[16.5px] text-volina-gray leading-[1.6] max-w-[60ch]">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const f = t.faq;
  return (
    <section id="sss" className="py-[140px] bg-white">
      <div className="max-w-[860px] mx-auto px-8 max-md:px-6">
        <Reveal className="mb-7">
          <span className="inline-flex items-center gap-2 bg-surface text-teal py-[7px] px-3.5 pl-3 rounded-full text-[13px] font-medium tracking-[-0.005em] border border-teal/[0.08]">
            {f.eyebrow}
          </span>
        </Reveal>
        <Reveal as="h2" className="display" style={{ color: "#0e4d5c" }}>
          {f.titleLead}{" "}
          <em className="italic font-semibold" style={{ color: "#e8623f" }}>
            {f.titleEm}
          </em>
        </Reveal>

        <div className="mt-12 flex flex-col">
          {f.items.map((item) => (
            <Reveal key={item.q}>
              <FAQItem q={item.q} a={item.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
