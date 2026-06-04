"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Hasta, karşısındakinin yapay zeka olduğunu anlar mı?",
    a: "Pilot çalışmalarımızda hastaların %98'si konuşmanın sonuna kadar Volina'nın insan olduğunu düşündü. Hastanın \"Sen yapay zeka mısın?\" sorusuna her zaman dürüstlük ile cevap verilmiştir ve bu durum herhangi bir hastada sorun teşkil etmemiştir.",
  },
  {
    q: "Satış ekibimin yerini mi alıyor?",
    a: "Volina'nın tek amacı, satış danışmanlarının üzerinden geçip geçtiği eski ve ölü CRM leadlerini arayarak hâlâ ilgili olanları tespit etmektir. Sıcak gelen leadler satış ekibine yönlendirilir, Volina'nın odağı ölü leadlerdir.",
  },
  {
    q: "Soğuk aramalar klinik itibarıma zarar verir mi?",
    a: "Hayır. Volina aramaları doğal, profesyonel ve izinli veri üzerinden gerçekleştirir. Amaç rahatsız etmek değil, hâlâ ilgisi olan potansiyel müşterileri tespit etmektir.",
  },
  {
    q: "Ne kadar eski leadleri arayabilirim?",
    a: "3 yıl ve daha eski leadlerde bile %4–7 arasında sıcak dönüş gördük. Genel kuralımız: en az 30 gün hareket etmemiş her lead, Volina'nın hedefidir.",
  },
  {
    q: "Fiyatlandırma nasıl?",
    a: "Fiyatlandırma, lead sayısına ve arama hacmine göre kişiye özel belirleniyor. Sabit bir paket yok, ihtiyacınıza göre en uygun fiyat sağlanmaya çalışılıyor. Detaylar için bizimle iletişime geçin.",
  },
  {
    q: "KVKK'ya uygun mu?",
    a: "Volina, tüm görüşme kayıtlarını ve müşteri bilgilerini KVKK ve GDPR standartlarına uygun şekilde şifreli olarak saklar. Verileriniz yalnızca size aittir ve gerekli olmadıkça üçüncü taraflarla paylaşılmaz.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="faq-item border-t border-ink/10 py-7 last:border-b last:border-b-ink/10"
      data-open={open}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full bg-transparent border-0 p-0 list-none cursor-pointer flex justify-between items-center gap-6 font-display text-[clamp(22px,2.4vw,30px)] tracking-[-0.01em] leading-[1.2] text-left text-ink"
      >
        <span>{q}</span>
        <span className="faq-plus" aria-hidden="true" />
      </button>
      <div
        ref={bodyRef}
        style={{
          maxHeight: open ? `${bodyRef.current?.scrollHeight ?? 999}px` : "0",
          opacity: open ? 1 : 0,
          marginTop: open ? "20px" : "0",
          overflow: "hidden",
          transition:
            "max-height 320ms cubic-bezier(.2,.7,.2,1), opacity 320ms cubic-bezier(.2,.7,.2,1), margin-top 320ms cubic-bezier(.2,.7,.2,1)",
        }}
      >
        <p className="m-0 text-[16.5px] text-volina-gray leading-[1.6] max-w-[60ch]">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="sss" className="py-[140px] bg-white">
      <div className="max-w-[860px] mx-auto px-8">
        <Reveal className="mb-7">
          <span className="inline-flex items-center gap-2 bg-surface text-teal py-[7px] px-3.5 pl-3 rounded-full text-[13px] font-medium tracking-[-0.005em] border border-teal/[0.08]">
            Sıkça Sorulan Sorular
          </span>
        </Reveal>
        <Reveal as="h2" className="display" style={{ color: "#0e4d5c" }}>
          Klinik sahiplerinin{" "}
          <em className="italic font-semibold" style={{ color: "#e8623f" }}>
            sık sorduğu şeyler
          </em>
        </Reveal>

        <div className="mt-12 flex flex-col">
          {faqs.map((f) => (
            <Reveal key={f.q}>
              <FAQItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
