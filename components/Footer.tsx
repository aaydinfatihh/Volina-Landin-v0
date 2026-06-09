"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-ink text-white/60 pt-20 pb-8 text-sm">
      <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.4fr_2fr] gap-15 pb-15 border-b border-white/[0.08] max-md:px-6">
        <div>
          <Image
            src="/assets/volina-wordmark.png"
            alt="volina"
            width={120}
            height={28}
            style={{ height: "28px", width: "auto" }}
            className="brightness-0 invert opacity-90 mb-4"
          />
          <p className="max-w-[36ch] leading-[1.55] text-[13.5px] m-0">
            {f.tagline}
          </p>
          <a
            href="mailto:info@volina.ai"
            className="inline-block mt-[18px] font-mono text-sm text-white/75 border-b border-white/20 pb-0.5 transition-all duration-[160ms] ease-[var(--ease-volina)] hover:text-white hover:border-accent"
          >
            info@volina.ai
          </a>
          <div className="flex gap-2.5 mt-6">
            <a
              href="https://www.instagram.com/volina.ai/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-[10px] bg-white/[0.06] border border-white/10 text-white/70 transition-all duration-[180ms] ease-[var(--ease-volina)] hover:bg-accent hover:border-accent hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px]" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/volina-ai/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-[10px] bg-white/[0.06] border border-white/10 text-white/70 transition-all duration-[180ms] ease-[var(--ease-volina)] hover:bg-accent hover:border-accent hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px]" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M7 10v7M7 7.2v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-sans font-medium text-[13px] text-white tracking-[0.02em] m-0 mb-[18px] uppercase">
              {f.productTitle}
            </h4>
            {f.product.map((link) => (
              <Link
                key={link.label}
                className="block py-1 text-white/55 text-sm hover:text-white"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="font-sans font-medium text-[13px] text-white tracking-[0.02em] m-0 mb-[18px] uppercase">
              {f.companyTitle}
            </h4>
            {f.company.map((link) => (
              <Link
                key={link.label}
                className="block py-1 text-white/55 text-sm hover:text-white"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="font-sans font-medium text-[13px] text-white tracking-[0.02em] m-0 mb-[18px] uppercase">
              {f.legalTitle}
            </h4>
            {f.legal.map((link) => (
              <Link
                key={link.label}
                className="block py-1 text-white/55 text-sm hover:text-white"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1180px] mx-auto px-8 flex justify-between pt-6 font-mono text-xs text-white/40 max-sm:flex-col max-sm:gap-2 max-md:px-6">
        <span>{f.copyright}</span>
        <span>{f.location}</span>
      </div>
    </footer>
  );
}
