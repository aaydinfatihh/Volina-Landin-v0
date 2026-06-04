import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Volina",
};

export default function GizlilikPolitikasi() {
  return (
    <>
      <Nav variant="solid" />
      <section className="bg-white text-ink pt-[168px] pb-[72px] border-b border-ink/[0.08]">
        <div className="max-w-[860px] mx-auto px-8">
          <a
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
            Ana sayfaya dön
          </a>
          <div className="font-mono text-xs tracking-[0.16em] uppercase text-accent mb-[18px]">
            Yasal
          </div>
          <h1 className="font-serif font-normal text-[clamp(40px,5.4vw,76px)] leading-[1.02] tracking-[-0.01em] text-teal m-0 mb-7">
            Gizlilik Politikası
          </h1>
          <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-volina-gray max-w-[620px] m-0 text-pretty">
            Bu Gizlilik Politikası, Volina AI (&ldquo;Volina&rdquo;,
            &ldquo;biz&rdquo;, &ldquo;şirket&rdquo;) tarafından sunulan yapay
            zekâ destekli sesli asistan ve iletişim otomasyon hizmetleri
            kapsamında kişisel verilerin nasıl toplandığını, işlendiğini ve
            korunduğunu açıklar. Hizmetlerimizi kullanarak bu politikada
            belirtilen şartları kabul etmiş olursunuz.
          </p>
          <div className="inline-flex items-center gap-2 mt-7 font-mono text-[12.5px] text-volina-gray before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent">
            Son güncelleme: 30 Mayıs 2026
          </div>
        </div>
      </section>

      <section className="pt-20 pb-[120px] bg-white">
        <div className="max-w-[1180px] mx-auto px-8">
          <article className="max-w-[720px] mx-auto">
            <Section title="Topladığımız bilgiler">
              <p>
                Web sitemizi ziyaret ettiğinizde, bizimle iletişime geçtiğinizde
                veya hizmetlerimizi kullandığınızda bazı kişisel verileri
                toplayabiliriz. Bu bilgiler şunları içerebilir:
              </p>
              <List
                items={[
                  "Ad ve soyad",
                  "E-posta adresi",
                  "Telefon numarası",
                  "Şirket bilgileri",
                  "CRM üzerinden işlenen lead verileri",
                  "Sesli görüşme kayıtları ve yapay zeka tarafından oluşturulan görüşme özetleri",
                  "Gönüllü olarak paylaştığınız diğer bilgiler",
                ]}
              />
              <p className="mt-[18px]">
                Ayrıca, hizmet kalitesini artırmak amacıyla arama sonuçları ve
                etkileşim verileri işlenebilir.
              </p>
            </Section>

            <Section title="Bilgileri nasıl kullanıyoruz?">
              <p>Topladığımız verileri aşağıdaki amaçlarla kullanabiliriz:</p>
              <List
                items={[
                  "Hizmetlerimizi sunmak ve geliştirmek",
                  "Lead doğrulama ve ön eleme süreçlerini yürütmek",
                  "Satış ekiplerine nitelikli fırsat yönlendirmek",
                  "Müşteri deneyimini iyileştirmek",
                  "Performans analizi ve raporlama yapmak",
                  "Yasal yükümlülükleri yerine getirmek",
                ]}
              />
            </Section>

            <Section title="Veri güvenliği">
              <p>
                Volina, kişisel verileri yetkisiz erişim, ifşa, değiştirme veya
                imhaya karşı korumak için gerekli teknik ve idari güvenlik
                önlemlerini uygular. Bununla birlikte, internet üzerinden
                yapılan hiçbir veri aktarımı %100 güvenli değildir. Mutlak
                güvenlik garanti edilemez, ancak verilerin korunması için
                sektör standartlarında önlemler alınmaktadır.
              </p>
            </Section>

            <Section title="Üçüncü taraf paylaşımları">
              <p>
                Kişisel verileriniz, açık rızanız olmadan üçüncü taraflara
                satılmaz veya ticari amaçla paylaşılmaz. Ancak aşağıdaki
                durumlarda veri paylaşımı yapılabilir:
              </p>
              <List
                items={[
                  "Hizmetin sunulması için gerekli teknoloji sağlayıcıları ile",
                  "Yasal zorunluluklar kapsamında resmi mercilerle",
                  "CRM ve altyapı entegrasyonları kapsamında iş ortaklarıyla",
                ]}
              />
              <p className="mt-[18px]">
                Tüm üçüncü taraf sağlayıcılarımız, veri işleme sözleşmeleri
                kapsamında gizlilik yükümlülüğüne tabidir ve kişisel verilerinizi
                yalnızca hizmeti sunmak amacıyla kullanabilir. Bu sağlayıcılar,
                verilerinizi kendi amaçları doğrultusunda satamaz veya ticari
                amaçla üçüncü kişilerle paylaşamaz. Tüm iş ortaklarımız gizlilik
                yükümlülüğüne tabidir.
              </p>
            </Section>

            <Section title="Çerezler">
              <p>
                Web sitemiz, kullanıcı deneyimini iyileştirmek ve analiz yapmak
                amacıyla çerezler kullanabilir. Tarayıcı ayarlarınızdan
                çerezleri reddedebilirsiniz; ancak bazı site özellikleri düzgün
                çalışmayabilir.
              </p>
            </Section>

            <Section title="Gizlilik politikasındaki değişiklikler">
              <p>
                Volina, bu Gizlilik Politikasını gerektiğinde güncelleme hakkını
                saklı tutar. Güncellemeler bu sayfada yayınlanır ve yürürlük
                tarihi belirtilir. Politikayı periyodik olarak gözden geçirmenizi
                öneririz.
              </p>
            </Section>

            <hr className="h-px bg-ink/10 border-0 m-0 mb-14" />

            <section className="bg-surface-2 border border-teal/[0.08] rounded-[20px] py-9 px-10 max-sm:px-6 max-sm:py-7">
              <h2 className="font-serif font-normal text-[clamp(26px,2.6vw,34px)] leading-[1.12] tracking-[-0.01em] text-teal m-0 mb-3">
                İletişim
              </h2>
              <p className="text-[17px] leading-[1.7] text-ink m-0 text-pretty">
                Gizlilik politikamız veya kişisel verilerinizin işlenmesi
                hakkında sorularınız varsa bizimle{" "}
                <a
                  href="mailto:info@volina.ai"
                  className="text-accent underline underline-offset-[3px] font-medium"
                >
                  info@volina.ai
                </a>{" "}
                adresinden iletişime geçebilirsiniz.
              </p>
            </section>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14 last:mb-0">
      <h2 className="font-serif font-normal text-[clamp(26px,2.6vw,34px)] leading-[1.12] tracking-[-0.01em] text-teal m-0 mb-[18px]">
        {title}
      </h2>
      <div className="[&_p]:text-[17px] [&_p]:leading-[1.7] [&_p]:text-ink [&_p]:m-0 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_p]:text-pretty">
        {children}
      </div>
    </section>
  );
}

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
