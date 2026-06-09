"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";
import { Rich } from "@/lib/rich";

type BlogBlock = {
  type: string;
  text?: string;
  lines?: { text: string; em: boolean }[];
  items?: { num: number; prefix: string; suffix: string; label: string }[];
};

function StatCounter({
  num,
  prefix,
  suffix,
}: {
  num: number;
  prefix: string;
  suffix: string;
}) {
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
            const dur = 2000;
            const easeOut = (x: number) =>
              x >= 1 ? 1 : 1 - Math.pow(2, -12 * x);
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / dur);
              setValue(num * easeOut(p));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [num]);

  return (
    <div
      ref={ref}
      className="font-display font-semibold text-[clamp(34px,4vw,46px)] leading-none tracking-[-0.03em] text-accent tabular-nums"
    >
      {prefix}
      {Math.round(value).toLocaleString(lang === "tr" ? "tr-TR" : "en-US")}
      {suffix}
    </div>
  );
}

export default function BlogContent() {
  const { t } = useLanguage();
  const b = t.blog;
  const body = b.body as BlogBlock[];
  const initials = b.author
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <>
      <Nav variant="solid" />

      <article>
        {/* Hero */}
        <header className="bg-white text-ink pt-[168px] pb-14">
          <div className="max-w-[860px] mx-auto px-8 max-md:px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.01em] text-volina-gray mb-11 transition-colors duration-[160ms] ease-[var(--ease-volina)] hover:text-teal"
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
              {b.eyebrow}
            </div>
            <h1 className="font-sans font-bold text-[clamp(30px,4.8vw,56px)] leading-[1.05] tracking-[-0.025em] text-teal m-0 mb-9 text-balance">
              {b.title}
            </h1>
            <div className="flex items-center gap-4 pt-7 border-t border-ink/10">
              <div className="w-12 h-12 rounded-full bg-teal text-white grid place-items-center font-display font-semibold text-[18px] flex-none">
                {initials}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-[15.5px] text-ink">
                  {b.author}
                </span>
                <span className="text-[13.5px] text-volina-gray">
                  {b.readMeta}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="bg-white pt-16 pb-[120px] max-md:pt-12 max-md:pb-20">
          <div className="max-w-[700px] mx-auto px-8 max-md:px-6">
            {body.map((block, i) => {
              switch (block.type) {
                case "lead":
                  return (
                    <p
                      key={i}
                      className="text-[22px] leading-[1.6] text-ink mb-[26px] text-pretty [&::first-letter]:font-sans [&::first-letter]:font-bold [&::first-letter]:italic [&::first-letter]:text-[4.4em] [&::first-letter]:leading-[0.82] [&::first-letter]:float-left [&::first-letter]:pr-3.5 [&::first-letter]:pt-2 [&::first-letter]:text-accent max-md:text-[20px]"
                    >
                      <Rich text={block.text!} />
                    </p>
                  );
                case "p":
                  return (
                    <p
                      key={i}
                      className="text-[19px] leading-[1.72] text-ink mb-[26px] text-pretty max-md:text-[18px]"
                    >
                      <Rich text={block.text!} />
                    </p>
                  );
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="font-sans font-bold text-[clamp(24px,2.6vw,33px)] leading-[1.15] tracking-[-0.025em] text-teal mt-14 mb-[22px]"
                    >
                      {block.text}
                    </h2>
                  );
                case "pullquote":
                  return (
                    <div
                      key={i}
                      className="my-12 border-y border-ink/[0.12]"
                    >
                      <p className="font-sans font-semibold text-[clamp(24px,3vw,34px)] leading-[1.22] tracking-[-0.025em] text-teal my-7 text-balance">
                        <Rich text={block.text!} />
                      </p>
                    </div>
                  );
                case "dialog":
                  return (
                    <div
                      key={i}
                      className="mb-[26px] pl-[22px] border-l-2 border-teal/[0.18] text-[18px] leading-[1.7] text-volina-gray"
                    >
                      {block.lines!.map((line, j) => (
                        <span key={j}>
                          {line.em ? (
                            <em className="italic text-ink">{line.text}</em>
                          ) : (
                            line.text
                          )}
                          {j < block.lines!.length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  );
                case "stats":
                  return (
                    <div
                      key={i}
                      className="grid grid-cols-3 my-12 border border-teal/[0.14] rounded-[20px] overflow-hidden bg-surface-2 max-sm:grid-cols-1"
                    >
                      {block.items!.map((item, j) => (
                        <div
                          key={j}
                          className="p-[30px] px-[26px] border-r border-teal/[0.12] last:border-r-0 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0"
                        >
                          <StatCounter
                            num={item.num}
                            prefix={item.prefix}
                            suffix={item.suffix}
                          />
                          <div className="mt-2.5 text-sm leading-[1.4] text-volina-gray">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                default:
                  return null;
              }
            })}

            {/* Signature */}
            <div className="mt-16 pt-8 border-t border-ink/10 flex items-center gap-4">
              <div className="w-[52px] h-[52px] rounded-full bg-teal text-white grid place-items-center font-display font-semibold text-[19px] flex-none">
                {initials}
              </div>
              <div>
                <div className="font-sans font-bold text-[19px] tracking-[-0.02em] text-teal leading-none">
                  {b.signName}
                </div>
                <div className="mt-1.5 text-sm text-volina-gray">
                  {b.signRole}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA band */}
      <section className="bg-teal text-white py-24 text-center">
        <div className="max-w-[860px] mx-auto px-8 max-md:px-6">
          <h2 className="font-sans font-bold text-[clamp(30px,4.4vw,52px)] leading-[1.1] tracking-[-0.03em] mx-auto mb-3 max-w-[18ch] text-balance">
            <Rich text={b.ctaTitle} />
          </h2>
          <p className="text-white/[0.72] text-[18px] mx-auto mb-9 max-w-[46ch]">
            {b.ctaText}
          </p>
          <a
            href="https://www.cal.eu/volina/30min?user=volina"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 font-medium text-[15.5px] tracking-[-0.005em] rounded-full px-6 py-3.5 pl-[26px] bg-accent text-white transition-all duration-[160ms] ease-[var(--ease-volina)] hover:-translate-y-px hover:shadow-[0_8px_20px_-8px_rgba(232,98,63,0.55)]"
          >
            <span>{b.ctaBtn}</span>
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
      </section>

      <Footer />
    </>
  );
}
