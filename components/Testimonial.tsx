"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";
import { Rich } from "@/lib/rich";

const STAT_TARGET = 50000;

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
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
            const dur = 2200;
            const easeOut = (x: number) =>
              x >= 1 ? 1 : 1 - Math.pow(2, -12 * x);
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / dur);
              setValue(target * easeOut(p));
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
  }, [target]);

  return (
    <span ref={ref}>
      {Math.round(value).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function Testimonial() {
  const { t } = useLanguage();
  const q = t.testimonial;

  return (
    <section className="pt-[104px] pb-6 bg-white">
      <div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[1.45fr_1fr] items-center max-md:px-6">
        <Reveal as="figure" className="m-0 lg:pr-16">
          <blockquote className="m-0 font-sans text-[27px] leading-[1.5] tracking-[-0.012em] text-ink text-pretty max-md:text-[22px]">
            &ldquo;<Rich text={q.quote} />&rdquo;
          </blockquote>
          <figcaption className="flex items-center gap-[18px] mt-[34px]">
            <Image
              src="/assets/partner-ahmet.webp"
              alt={q.author}
              width={120}
              height={48}
              style={{ width: "auto", height: "48px" }}
              className="opacity-[0.9] rounded-md object-contain"
            />
            <span className="flex flex-col gap-0.5 text-[15px] leading-[1.35] text-volina-gray border-l border-teal/[0.16] pl-[18px]">
              <strong className="text-ink font-semibold">{q.author}</strong>
              {q.role}
            </span>
          </figcaption>
        </Reveal>

        <Reveal className="lg:pl-16 lg:border-l border-teal/[0.12] self-stretch flex flex-col justify-center max-lg:mt-11 max-lg:pt-10 max-lg:border-t">
          <div className="font-display font-semibold text-[clamp(56px,7vw,84px)] leading-none tracking-[-0.04em] text-teal tabular-nums">
            <CountUp target={STAT_TARGET} suffix={q.statSuffix} />
          </div>
          <span className="mt-4 text-[15px] text-volina-gray tracking-[-0.005em]">
            {q.statLabel}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
