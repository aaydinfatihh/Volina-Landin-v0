"use client";

import CallSimulator from "./CallSimulator";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <section
      id="nasil"
      className="py-[140px] bg-teal text-white relative overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto px-8 max-md:px-6">
        <Reveal className="mb-7">
          <span className="inline-flex items-center gap-2 bg-white/[0.08] text-white/[0.92] py-[7px] px-3.5 pl-3 rounded-full text-[13px] font-medium tracking-[-0.005em] border border-white/[0.16]">
            {h.eyebrow}
          </span>
        </Reveal>
        <Reveal as="h2" className="display">
          {h.titleLead}{" "}
          <span style={{ color: "#e8623f", fontStyle: "italic" }}>
            {h.titleAccent}
          </span>
        </Reveal>
        <Reveal as="p" className="lede">
          {h.intro}
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 mt-10 items-start">
          <Reveal>
            <CallSimulator />
          </Reveal>

          <ol className="list-none p-0 m-0 mt-2 flex flex-col gap-6">
            {h.steps.map((s) => (
              <Reveal
                as="li"
                key={s.n}
                className="grid grid-cols-[56px_1fr] gap-4 items-start pb-6 border-b border-white/[0.08] last:border-b-0 last:pb-0"
              >
                <span className="font-mono text-[13px] text-accent pt-1">{s.n}</span>
                <div>
                  <strong className="block font-display font-semibold text-[22px] tracking-[-0.04em] text-white mb-1">
                    {s.title}
                  </strong>
                  <p className="m-0 text-sm text-white/65 leading-[1.5]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
