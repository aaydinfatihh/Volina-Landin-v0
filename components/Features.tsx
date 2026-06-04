import Reveal from "./Reveal";

const features = [
  {
    k: "01 — Kişilik analizi",
    title: "İlk 10 saniyede kim olduğunu okur",
    body: "Volina, açılış cümlesinden kişilik tipini çıkarır. Analitik bir lead'le fiyatı önce konuşur; duygusal bir lead'le önce sonucu. Bu, robot gibi konuşmayan bir yapay zekanın tek yolu.",
    bullets: [
      "4 kişilik profili (analitik, duygusal, dominant, kararsız)",
      "Konuşma hızı, cümle uzunluğu, ses tonu ölçümü",
      "Her cevapta profil güncellenir",
    ],
  },
  {
    k: "02 — Niyet skoru",
    title: "Lead'in ilgisini, gerçek zamanlı ölçer",
    body: "Sorular, ses tonu, \"evet ama\" kalıpları, her sinyal puanlanır. 70'ın üstündeki her lead, satış ekibine anında transfer edilir. Altındakiler için bir takip aramasına geri konur.",
    bullets: [
      "0–100 arası skor",
      "Konuşma sonrasında ekibe bildirim",
      "Düşük niyetli ise 30 gün sonra arama",
    ],
  },
  {
    k: "03 — Satış yok",
    title: "Amacı satmak değil, niyeti anlamak",
    body: "Hedef randevu kapatmak değil; hastanın hâlâ ilgili olup olmadığını anlamak. Niyet düşükse nazikçe kapatır, baskı yapmaz. Yüksekse, satış ekibine yönlendirir.",
    bullets: [
      "Randevu zorlamaz, fiyat dayatmaz",
      "Niyeti olmayan lead'i nazikçe kapatır",
      "Sadece satışa hazır adayları ekibe iletir",
    ],
  },
  {
    k: "04 — Gerçekçi, doğal ses",
    title: "Hasta, \"AI\" olduğunu anlamıyor",
    body: "Volina, \"yapay zeka\" gibi konuşmaz. Vurgular, duraksamalar, geri dönüşler insan gibidir. Test aramalarımızda %98 oranında hasta, Volina'nın insan olduğunu düşündü.",
    bullets: [
      "İngiltere, İrlanda, vb. aksanlara adapte",
      "Doğal duraksama ve düzeltme",
      "İstersen, ekipteki kişinin sesiyle klonlanabilir",
    ],
  },
];

type LeadCardProps = {
  name: string;
  meta: string;
  badge: string;
  badgeAccent?: boolean;
  persona: { primary: string; secondary: string };
  score: number;
  source: { name: string; silent: string };
  nextStep: string;
  nextAccent?: boolean;
  transcript: string;
  duration: string;
  liveAccent?: boolean;
};

function LeadCard(props: LeadCardProps) {
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
                {props.name}
              </div>
              <div className="text-[13px] text-volina-gray">{props.meta}</div>
            </div>
            <span
              className={`text-[11px] py-1.5 px-2.5 rounded-full font-medium ${
                props.badgeAccent
                  ? "bg-accent text-white"
                  : "bg-surface text-teal"
              }`}
            >
              {props.badge}
            </span>
          </header>

          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="p-3.5 bg-surface-2 rounded-[10px]">
              <div className="text-[11px] uppercase tracking-[0.05em] text-volina-gray mb-2.5">
                Kişilik
              </div>
              <span className="inline-block text-xs py-1 px-2.5 rounded-md bg-white text-ink mr-1 border border-ink/[0.06]">
                {props.persona.primary}
              </span>
              <span className="inline-block text-xs py-1 px-2.5 rounded-md bg-transparent text-volina-gray border border-ink/[0.06]">
                {props.persona.secondary}
              </span>
            </div>
            <div className="p-3.5 bg-surface-2 rounded-[10px]">
              <div className="text-[11px] uppercase tracking-[0.05em] text-volina-gray mb-2.5">
                Niyet skoru
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex-1 h-1 bg-white rounded-sm overflow-hidden">
                  <span
                    className="block h-full bg-accent"
                    style={{ width: `${props.score}%` }}
                  />
                </div>
                <em className="not-italic font-mono text-xs">
                  {props.score} / 100
                </em>
              </div>
            </div>
            <div className="p-3.5 bg-surface-2 rounded-[10px]">
              <div className="text-[11px] uppercase tracking-[0.05em] text-volina-gray mb-2.5">
                CRM kaynak
              </div>
              <span className="inline-block text-xs py-1 px-2.5 rounded-md bg-transparent text-volina-gray border border-ink/[0.06] mr-1">
                {props.source.name}
              </span>
              <span className="inline-block text-xs py-1 px-2.5 rounded-md bg-transparent text-volina-gray border border-ink/[0.06]">
                {props.source.silent}
              </span>
            </div>
            <div className="p-3.5 bg-surface-2 rounded-[10px]">
              <div className="text-[11px] uppercase tracking-[0.05em] text-volina-gray mb-2.5">
                Sonraki adım
              </div>
              <span
                className={`inline-block text-xs py-1 px-2.5 rounded-md ${
                  props.nextAccent
                    ? "bg-accent text-white border border-transparent"
                    : "bg-white text-ink border border-ink/[0.06]"
                }`}
              >
                {props.nextStep}
              </span>
            </div>
          </div>

          <div className="p-4 bg-[#FFF6F2] rounded-[10px] mb-4">
            <div className="text-[11px] uppercase tracking-[0.05em] text-accent mb-2">
              Transkript özeti
            </div>
            <p className="font-display text-[18px] italic leading-[1.4] m-0">
              &ldquo;{props.transcript}&rdquo;
            </p>
          </div>

          <footer className="flex items-center gap-2 text-[11.5px] text-volina-gray font-mono">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                props.liveAccent ? "bg-accent pulse-dot" : "bg-[#2ecc71]"
              }`}
              style={
                props.liveAccent === false && props.duration !== ""
                  ? { backgroundColor: "rgb(232, 98, 63)" }
                  : undefined
              }
            />
            <span>{props.duration} · Volina tarafından yapıldı</span>
          </footer>
        </div>
      </div>
    </Reveal>
  );
}

export default function Features() {
  return (
    <section id="ozellikler" className="py-[140px] bg-white text-ink">
      <div className="max-w-[1320px] mx-auto px-8">
        <Reveal className="mb-7">
          <span className="inline-flex items-center gap-2 bg-surface text-teal py-[7px] px-3.5 pl-3 rounded-full text-[13px] font-medium tracking-[-0.005em] border border-teal/[0.08]">
            Özellikler
          </span>
        </Reveal>
        <Reveal as="h2" className="display" style={{ color: "#0e4d5c" }}>
          Volina bir satış botu{" "}
          <span style={{ color: "#e8623f", fontStyle: "italic" }}>değildir</span>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-20 mt-15 items-start max-lg:grid-cols-1 max-lg:gap-10">
          <div className="flex flex-col gap-[120px]">
            {features.map((f) => (
              <Reveal key={f.k} as="article">
                <div className="font-mono text-[13px] text-accent mb-4">{f.k}</div>
                <h3
                  className="font-display font-semibold text-[clamp(30px,3.4vw,44px)] leading-[1.08] tracking-[-0.035em] mb-[18px] text-balance max-w-[18ch]"
                  style={{ color: "#0e4d5c" }}
                >
                  {f.title}
                </h3>
                <p className="text-[16.5px] text-volina-gray leading-[1.55] m-0 mb-5 max-w-[48ch]">
                  {f.body}
                </p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2">
                  {f.bullets.map((b) => (
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
              <LeadCard
                name="Mary L."
                meta="İrlanda · 2022 Instagram lead"
                badge="Satışa hazır"
                badgeAccent
                persona={{ primary: "analitik", secondary: "temkinli" }}
                score={78}
                source={{ name: "Excel/CSV", silent: "51 ay sessiz" }}
                nextStep="→ Satış ekibi"
                nextAccent
                transcript="Fiyat sebebiyle ertelemiş. Tedaviyi hala yaptırmamış, yakın zamanda yaptırmak istiyor. Sıcak hasta."
                duration="Arama 02:17"
                liveAccent
              />
              <LeadCard
                name="James W."
                meta="İngiltere · 2023 Google Ads lead"
                badge="Takip aramasında"
                persona={{ primary: "duygusal", secondary: "kararsız" }}
                score={46}
                source={{ name: "HubSpot", silent: "22 ay sessiz" }}
                nextStep="↻ 30 gün sonra ara"
                transcript="Eşi ile konuşmak istiyor, fiyat aralığı uygun ama henüz karar verememiş. İlgi sıcak ama zaman lazım."
                duration="Arama 03:02"
                liveAccent={false}
              />
              <LeadCard
                name="Michael R."
                meta="Amerika · 2023 Facebook lead"
                badge="Satışa hazır"
                badgeAccent
                persona={{ primary: "dominant", secondary: "kararlı" }}
                score={94}
                source={{ name: "Zoho", silent: "8 ay sessiz" }}
                nextStep="→ Satış ekibi"
                nextAccent
                transcript="Bu hafta İstanbul'da olacak, doktorla görüşme istiyor. Bütçe konusunda esnek, hemen tedaviye başlamak istiyor."
                duration="Arama 01:21"
                liveAccent
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
