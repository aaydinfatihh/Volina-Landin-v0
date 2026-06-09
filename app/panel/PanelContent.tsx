"use client";

import Nav from "@/components/Nav";
import { useLanguage } from "@/lib/i18n";

export default function PanelContent() {
  const { t } = useLanguage();
  const p = t.panel;
  return (
    <>
      <Nav variant="transparent" />
      <section className="relative bg-teal text-white min-h-screen flex items-center justify-center text-center px-6 pt-40 pb-28">
        <div>
          <div className="font-mono text-xs tracking-[0.16em] uppercase text-accent mb-[22px]">
            {p.eyebrow}
          </div>
          <h1 className="font-sans font-bold text-[clamp(44px,7vw,96px)] leading-[1.02] tracking-[-0.035em] m-0">
            {p.title}
          </h1>
        </div>
      </section>
    </>
  );
}
