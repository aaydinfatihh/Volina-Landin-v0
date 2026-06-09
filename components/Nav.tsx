"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

type Props = {
  variant?: "transparent" | "solid";
};

export default function Nav({ variant = "transparent" }: Props) {
  const [scrolled, setScrolled] = useState(variant === "solid");
  const { t, toggle } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    if (variant === "solid") {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [variant]);

  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.panel, href: "/panel" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.contact, href: "/iletisim" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] py-[18px] transition-[background,backdrop-filter,padding,box-shadow] duration-[260ms] ease-[var(--ease-volina)] ${
        scrolled
          ? "py-3 bg-white/[0.78] backdrop-blur-md backdrop-saturate-150 shadow-[0_1px_0_rgba(20,32,31,0.06)]"
          : ""
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-11 grid grid-cols-[1fr_auto_1fr] items-center gap-[18px] max-md:px-6">
        <Link
          href="/"
          className="justify-self-start relative inline-block w-[108px] h-[46px]"
          aria-label="Volina"
        >
          <Image
            src="/assets/volina-wordmark-white.png"
            alt="volina"
            width={108}
            height={46}
            priority
            style={{ width: "108px", height: "46px" }}
            className={`absolute inset-0 transition-opacity duration-[260ms] ease-[var(--ease-volina)] ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/assets/volina-wordmark.png"
            alt="volina"
            width={108}
            height={46}
            priority
            style={{ width: "108px", height: "46px" }}
            className={`absolute inset-0 transition-opacity duration-[260ms] ease-[var(--ease-volina)] ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>
        <nav
          className="hidden md:inline-flex items-center gap-1.5 bg-surface border border-teal/[0.08] py-[7px] px-4 rounded-full text-sm font-medium justify-self-center"
          aria-label="Ana navigasyon"
        >
          {links.map((link, i) => (
            <div key={link.href} className="contents">
              {i > 0 && (
                <span
                  className="w-0.5 h-0.5 rounded-full bg-teal/30"
                  aria-hidden="true"
                />
              )}
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`px-2 py-1 rounded-full transition-colors duration-[160ms] ease-[var(--ease-volina)] hover:bg-teal/[0.08] ${
                  isActive(link.href) ? "text-accent" : "text-teal"
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="justify-self-end flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.toggleAria}
            className={`inline-flex items-center justify-center font-mono text-[12.5px] font-medium tracking-[0.04em] rounded-full w-9 h-9 border transition-all duration-[160ms] ease-[var(--ease-volina)] hover:-translate-y-px ${
              scrolled
                ? "border-teal/20 text-teal hover:bg-teal/[0.08]"
                : "border-white/35 text-white hover:bg-white/15"
            }`}
          >
            {t.nav.toggleLabel}
          </button>
          <a
            href="https://dashboard.volina.ai/login"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 font-medium text-[14.5px] tracking-[-0.005em] rounded-full px-[18px] py-[11px] pl-5 bg-accent text-white transition-all duration-[160ms] ease-[var(--ease-volina)] hover:-translate-y-px hover:shadow-[0_8px_20px_-8px_rgba(232,98,63,0.55)] max-sm:hidden"
          >
            <span>{t.nav.cta}</span>
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" aria-hidden="true">
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
