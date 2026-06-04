import CallSimulator from "./CallSimulator";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Arama",
    body: "Volina CRM'den leadi çeker, numarayı arar.",
  },
  {
    n: "02",
    title: "Hafıza",
    body: "Hasta adı, bilgileri, ve geçmişi hafızasında bulunur.",
  },
  {
    n: "03",
    title: "İlk 10 saniye",
    body: "Ses tonu, kelime hızı ve cümle yapısınından kişilik tipini analizini yapar.",
  },
  {
    n: "04",
    title: "Adaptasyon",
    body: "Konuşma stili değişir: analitik için fiyat, duygusal için sonuç odaklı yaklaşır.",
  },
  {
    n: "05",
    title: "İtiraz yönetimi",
    body: "\"Pahalı\", \"düşüneyim\", \"şu an değil\" sinyallerine hazır cevaplar verir.",
  },
  {
    n: "06",
    title: "Niyet skoru",
    body: "Her cümle skoru günceller. 70+ ise sıcak hastadır.",
  },
  {
    n: "07",
    title: "Karar",
    body: "Düşük ise nazik bir kapanış, yüksek ise satış ekibine transfer eder.",
  },
  {
    n: "08",
    title: "CRM",
    body: "Transkript, konuşma özeti ve skoru kaydeder.",
  },
  {
    n: "09",
    title: "Takip",
    body: "Düşük skorlu leadler otomatik olarak takvime alınır ve tekrar aranır.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="nasil"
      className="py-[140px] bg-teal text-white relative overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="mb-7">
          <span className="inline-flex items-center gap-2 bg-white/[0.08] text-white/[0.92] py-[7px] px-3.5 pl-3 rounded-full text-[13px] font-medium tracking-[-0.005em] border border-white/[0.16]">
            Nasıl çalışır
          </span>
        </Reveal>
        <Reveal as="h2" className="display">
          Bir aramanın{" "}
          <span style={{ color: "#e8623f", fontStyle: "italic" }}>
            80 saniyesi
          </span>
        </Reveal>
        <Reveal as="p" className="lede">
          Aşağıdaki örnek, gerçek bir Volina aramasıdır. Oynat&apos;a bas,
          Volina&apos;nın leadi nasıl okuduğunu, niyeti nasıl anladığını ve neye
          göre transfer kararı verdiğini kendin gör.
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 mt-10 items-start">
          <Reveal>
            <CallSimulator />
          </Reveal>

          <ol className="list-none p-0 m-0 mt-2 flex flex-col gap-6">
            {steps.map((s) => (
              <Reveal
                as="li"
                key={s.n}
                className="grid grid-cols-[56px_1fr] gap-4 items-start pb-6 border-b border-white/[0.08] last:border-b-0 last:pb-0"
              >
                <span className="font-mono text-[13px] text-accent pt-1">{s.n}</span>
                <div>
                  <strong className="block font-display font-semibold text-[22px] tracking-[-0.04em] text-white mb-1">
                    {s.title}
                  </strong>
                  <p className="m-0 text-sm text-white/65 leading-[1.5] max-md:whitespace-normal whitespace-nowrap">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
