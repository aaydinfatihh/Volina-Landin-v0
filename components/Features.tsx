"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";
import type { Dict } from "@/lib/content";

type CardVisual = {
  badgeAccent: boolean;
  score: number;
  nextAccent: boolean;
  liveAccent: boolean;
};

// Non-text, per-card visual settings (parallel to features.cards in the dict).
const cardVisuals: CardVisual[] = [
  { badgeAccent: true, score: 78, nextAccent: true, liveAccent: true },
  { badgeAccent: false, score: 46, nextAccent: false, liveAccent: false },
  { badgeAccent: true, score: 94, nextAccent: true, liveAccent: true },
];

export default function Features() {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section id="ozellikler" className="py-[140px] bg-white text-ink">
      <div className="max-w-[1320px] mx-auto px-8 max-md:px-6">
        <Reveal className="mb-7">
          <span className="inline-flex items-center gap-2 bg-surface text-teal py-[7px] px-3.5 pl-3 rounded-full text-[13px] font-medium tracking-[-0.005em] border border-teal/[0.08]">
            {f.eyebrow}
          </span>
        </Reveal>
        <Reveal as="h2" className="display" style={{ color: "#0e4d5c" }}>
          {f.titleLead}{" "}
          <span style={{ color: "#e8623f", fontStyle: "italic" }}>
            {f.titleAccent}
          </span>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-20 mt-15 items-start max-lg:grid-cols-1 max-lg:gap-10">
          <div className="flex flex-col gap-[120px] max-lg:gap-16">
            {f.items.map((item) => (
              <Reveal key={item.k} as="article">
                <div className="font-mono text-[13px] text-accent mb-4">
                  {item.k}
                </div>
                <h3
                  className="font-display font-semibold text-[clamp(30px,3.4vw,44px)] leading-[1.08] tracking-[-0.035em] mb-[18px] text-balance max-w-[18ch]"
                  style={{ color: "#0e4d5c" }}
                >
                  {item.title}
                </h3>
                <p className="text-[16.5px] text-volina-gray leading-[1.55] m-0 mb-5 max-w-[48ch]">
                  {item.body}
                </p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-[22px] text-[14.5px] text-ink before:content-['→'] before:absolute before:left-0 before:top-0 before:text-accent before:font-medium"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 h-max">
            <div className="flex flex-col gap-6">
              {f.cards.map((c, i) => (
                <LeadCard
                  key={c.name}
                  card={c}
                  labels={f.card}
                  visual={cardVisuals[i]}
                />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

type LeadCardProps = {
  card: Dict["features"]["cards"][number];
  labels: Dict["features"]["card"];
  visual: CardVisual;
};

function LeadCard({ card, labels, visual }: LeadCardProps) {
  return (
    <Reveal>
      <div className="bg-white border border-ink/[0.08] rounded-2xl overflow-hidden shadow-[0_1px_0_rgba(20,32,31,0.04),0_30px_60px_-30px_rgba(14,77,92,0.18),0_12px_24px_-12px_rgba(14,77,92,0.12)]">
        <div className="flex items-center gap-4 px-4 py-3 bg-surface-2 border-b border-ink/[0.06] text-xs text-volina-gray font-mono">
          <div className="flex gap-1.5">
            <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
            <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center text-[11.5px] tracking-[0.03em]">
            dashboard.volina.ai
          </div>
        </div>

        <div className="p-6">
          <header className="flex justify-between items-start mb-5 pb-[18px] border-b border-ink/[0.06]">
            <div>
              <div className="font-display font-semibold text-2xl tracking-[-0.04em] mb-1">
                {card.name}
              </div>
              <div className="text-[13px] text-volina-gray">{card.meta}</div>
            </div>
            <span
              className={`text-[11px] py-1.5 px-2.5 rounded-full font-medium ${
                visual.badgeAccent ? "bg-accent text-white" : "bg-surface text-teal"
              }`}
            >
              {card.badge}
            </span>
          </header>

          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="p-3.5 bg-surface-2 rounded-[10px]">
              <div className="text-[11px] uppercase tracking-[0.05em] text-volina-gray mb-2.5">
                {labels.personaLabel}
              </div>
              <span className="inline-block text-xs py-1 px-2.5 rounded-md bg-white text-ink mr-1 border border-ink/[0.06]">
                {card.personaPrimary}
              </span>
              <span className="inline-block text-xs py-1 px-2.5 rounded-md bg-transparent text-volina-gray border border-ink/[0.06]">
                {card.personaSecondary}
              </span>
            </div>
            <div className="p-3.5 bg-surface-2 rounded-[10px]">
              <div className="text-[11px] uppercase tracking-[0.05em] text-volina-gray mb-2.5">
                {labels.scoreLabel}
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex-1 h-1 bg-white rounded-sm overflow-hidden">
                  <span
                    className="block h-full bg-accent"
                    style={{ width: `${visual.score}%` }}
                  />
                </div>
                <em className="not-italic font-mono text-xs">
                  {visual.score} / 100
                </em>
              </div>
            </div>
            <div className="p-3.5 bg-surface-2 rounded-[10px]">
              <div className="text-[11px] uppercase tracking-[0.05em] text-volina-gray mb-2.5">
                {labels.sourceLabel}
              </div>
              <span className="inline-block text-xs py-1 px-2.5 rounded-md bg-transparent text-volina-gray border border-ink/[0.06] mr-1">
                {card.sourceName}
              </span>
              <span className="inline-block text-xs py-1 px-2.5 rounded-md bg-transparent text-volina-gray border border-ink/[0.06]">
                {card.sourceSilent}
              </span>
            </div>
            <div className="p-3.5 bg-surface-2 rounded-[10px]">
              <div className="text-[11px] uppercase tracking-[0.05em] text-volina-gray mb-2.5">
                {labels.nextLabel}
              </div>
              <span
                className={`inline-block text-xs py-1 px-2.5 rounded-md ${
                  visual.nextAccent
                    ? "bg-accent text-white border border-transparent"
                    : "bg-white text-ink border border-ink/[0.06]"
                }`}
              >
                {card.nextStep}
              </span>
            </div>
          </div>

          <div className="p-4 bg-[#FFF6F2] rounded-[10px] mb-4">
            <div className="text-[11px] uppercase tracking-[0.05em] text-accent mb-2">
              {labels.transcriptLabel}
            </div>
            <p className="font-display text-[18px] italic leading-[1.4] m-0">
              &ldquo;{card.transcript}&rdquo;
            </p>
          </div>

          <footer className="flex items-center gap-2 text-[11.5px] text-volina-gray font-mono">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                visual.liveAccent ? "bg-accent pulse-dot" : "bg-[#2ecc71]"
              }`}
            />
            <span>
              {card.duration} · {labels.madeBy}
            </span>
          </footer>
        </div>
      </div>
    </Reveal>
  );
}
