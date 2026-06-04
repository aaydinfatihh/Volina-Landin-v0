import Image from "next/image";
import Reveal from "./Reveal";

const partners = [
  { src: "/assets/partner-smile.webp", alt: "Smile and Holiday" },
  { src: "/assets/partner-lumia.webp", alt: "LumiaClinic" },
  { src: "/assets/partner-bosphorus.webp", alt: "Bosphorus Dental" },
  { src: "/assets/partner-ahmet.webp", alt: "Ahmet Yardımcı Academy" },
];

export default function Testimonial() {
  return (
    <section className="pt-[104px] pb-6 bg-white">
      <div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[1.45fr_1fr] items-center">
        <Reveal as="figure" className="m-0 lg:pr-16">
          <blockquote className="m-0 font-sans text-[27px] leading-[1.5] tracking-[-0.012em] text-ink text-pretty">
            &ldquo;CRM&apos;imizde yıllardır uyuyan binlerce lead vardı. Volina
            ile <strong className="font-semibold">iki hafta içinde canlıya geçtik</strong>{" "}
            ve bu eski leadlerin önemli bir kısmı yeniden randevuya döndü. En
            önemlisi,{" "}
            <strong className="font-semibold">
              hasta deneyimimizden ödün vermeden
            </strong>{" "}
            bunu başardık.&rdquo;
          </blockquote>
          <figcaption className="flex items-center gap-[18px] mt-[34px]">
            <Image
              src="/assets/partner-anatolia.webp"
              alt="Anatolia Dental"
              width={120}
              height={26}
              style={{ width: "auto", height: "26px" }}
              className="opacity-[0.85]"
            />
            <span className="flex flex-col gap-0.5 text-[15px] leading-[1.35] text-volina-gray border-l border-teal/[0.16] pl-[18px]">
              <strong className="text-ink font-semibold">Dr. Elif Kaya</strong>
              Klinik Direktörü
            </span>
          </figcaption>
        </Reveal>

        <Reveal className="lg:pl-16 lg:border-l border-teal/[0.12] self-stretch flex flex-col justify-center max-lg:mt-11 max-lg:pt-10 max-lg:border-t">
          <span className="text-[12px] tracking-[0.14em] uppercase text-volina-gray font-semibold mb-[30px]">
            Önde gelen klinikler güveniyor
          </span>
          <div className="grid grid-cols-2 gap-x-10 gap-y-[30px] items-center">
            {partners.map((p) => (
              <div
                key={p.alt}
                className="flex items-center h-[38px] opacity-[0.78] hover:opacity-100 transition-opacity duration-[250ms] ease-[var(--ease-volina)]"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={200}
                  height={38}
                  style={{ height: "100%", width: "auto" }}
                  className="max-w-[200px] object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
