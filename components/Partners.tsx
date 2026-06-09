"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

const logos = [
  { src: "/assets/partner-smile.webp", alt: "Smile and Holiday" },
  { src: "/assets/partner-lumia.webp", alt: "LumiaClinic" },
  { src: "/assets/partner-bosphorus.webp", alt: "Bosphorus Dental" },
  { src: "/assets/partner-anatolia.webp", alt: "Anatolia Dental" },
  { src: "/assets/partner-ahmet.webp", alt: "Ahmet Yardımcı Academy" },
];

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center flex-shrink-0 h-14 md:h-14 opacity-[0.78] hover:opacity-100 grayscale-[0.15] hover:grayscale-0 transition-all duration-[250ms] ease-[var(--ease-volina)]">
      <Image
        src={src}
        alt={alt}
        width={220}
        height={56}
        style={{ height: "100%", width: "auto" }}
        className="block max-w-[220px] object-contain"
      />
    </div>
  );
}

export default function Partners() {
  const { t } = useLanguage();
  return (
    <section
      className="bg-surface-2 pt-14 pb-16 overflow-hidden border-y border-teal/[0.06]"
      aria-label={t.partners.label}
    >
      <div className="max-w-[1180px] mx-auto px-8 flex items-center justify-center gap-3.5 mb-9">
        <span
          className="w-1 h-1 rounded-full bg-volina-gray opacity-50"
          aria-hidden="true"
        />
        <span className="font-sans text-xl font-semibold text-ink tracking-[-0.01em]">
          {t.partners.label}
        </span>
        <span
          className="w-1 h-1 rounded-full bg-volina-gray opacity-50"
          aria-hidden="true"
        />
      </div>
      <div className="partners-track-wrap relative w-full overflow-hidden">
        <div className="partners-track flex w-max">
          <div className="flex items-center gap-[88px] px-11 flex-shrink-0">
            {logos.map((l) => (
              <Logo key={`a-${l.alt}`} src={l.src} alt={l.alt} />
            ))}
          </div>
          <div
            className="flex items-center gap-[88px] px-11 flex-shrink-0"
            aria-hidden="true"
          >
            {logos.map((l) => (
              <Logo key={`b-${l.alt}`} src={l.src} alt={l.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
