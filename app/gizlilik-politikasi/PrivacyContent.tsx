"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n";

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-none p-0 mt-[18px] flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-[26px] text-[16.5px] leading-[1.55] text-ink before:content-[''] before:absolute before:left-1 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyContent() {
  const { t } = useLanguage();
  const p = t.privacy;

  const contactParts = p.contactText.split("{email}");

  return (
    <>
      <Nav variant="solid" />
      <section className="bg-white text-ink pt-[168px] pb-[72px] border-b border-ink/[0.08]">
        <div className="max-w-[860px] mx-auto px-8 max-md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.01em] text-volina-gray mb-10 transition-colors duration-[160ms] ease-[var(--ease-volina)] hover:text-teal"
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
          <div className="font-mono text-xs tracking-[0.16em] uppercase text-accent mb-[18px]">
            {p.eyebrow}
          </div>
          <h1 className="font-serif font-normal text-[clamp(40px,5.4vw,76px)] leading-[1.02] tracking-[-0.01em] text-teal m-0 mb-7">
            {p.title}
          </h1>
          <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-volina-gray max-w-[620px] m-0 text-pretty">
            {p.intro}
          </p>
          <div className="inline-flex items-center gap-2 mt-7 font-mono text-[12.5px] text-volina-gray before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
            {p.updated}
          </div>
        </div>
      </section>

      <section className="pt-20 pb-[120px] bg-white">
        <div className="max-w-[1180px] mx-auto px-8 max-md:px-6">
          <article className="max-w-[720px] mx-auto">
            {p.sections.map((s) => (
              <section key={s.title} className="mb-14 last:mb-0">
                <h2 className="font-serif font-normal text-[clamp(26px,2.6vw,34px)] leading-[1.12] tracking-[-0.01em] text-teal m-0 mb-[18px]">
                  {s.title}
                </h2>
                <div className="[&_p]:text-[17px] [&_p]:leading-[1.7] [&_p]:text-ink [&_p]:m-0 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_p]:text-pretty">
                  {s.paras.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  {s.list.length > 0 && <List items={s.list} />}
                  {s.postParas.map((para, i) => (
                    <p key={`post-${i}`} className="mt-[18px]">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <hr className="h-px bg-ink/10 border-0 m-0 mb-14" />

            <section className="bg-surface-2 border border-teal/[0.08] rounded-[20px] py-9 px-10 max-sm:px-6 max-sm:py-7">
              <h2 className="font-serif font-normal text-[clamp(26px,2.6vw,34px)] leading-[1.12] tracking-[-0.01em] text-teal m-0 mb-3">
                {p.contactTitle}
              </h2>
              <p className="text-[17px] leading-[1.7] text-ink m-0 text-pretty">
                {contactParts[0]}
                <a
                  href="mailto:info@volina.ai"
                  className="text-accent underline underline-offset-[3px] font-medium"
                >
                  info@volina.ai
                </a>
                {contactParts[1]}
              </p>
            </section>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
