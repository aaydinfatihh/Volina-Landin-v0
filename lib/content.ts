export type Lang = "tr" | "en";

/* ============================================================
   Volina — bilingual content dictionary (TR source / EN mirror)
   Non-translatable data (timings, scores, widths) lives in the
   components; only human-facing copy lives here.
   Inline emphasis uses **bold** and *accent* (see lib/rich.tsx).
   ============================================================ */

export const tr = {
  nav: {
    home: "Ana Sayfa",
    panel: "Panel",
    blog: "Blog",
    contact: "İletişim",
    cta: "Kullanıcı Paneli",
    toggleLabel: "EN",
    toggleAria: "Switch to English",
  },

  hero: {
    titleLead: "Eski leadlerini",
    titleAccent: "gelire dönüştür",
    sub: "Kliniğinin yıllar içinde biriktirdiği ve reklamına para harcadığı ama herkesin takip etmeyi bıraktığı binlerce eski leadi ekstra reklam bütçesi ayırmadan satışa çevir.",
    cta: "Ücretsiz Deneyimle",
    stats: [
      { num: "2 gün", label: "kurulum süresi" },
      { num: "0 TL", label: "ek reklam bütçesi" },
      { num: "%20", label: "gelir artışı" },
    ],
  },

  testimonial: {
    quote:
      "Leadlerin soğuyup kaybolması sektörün **en büyük kanayan yarasıydı.** Volina, bunu insan gücüyle çözmenin mümkün olmadığını gördü ve **amaca yönelik eğitilmiş bir yapay zeka ile bu sorunu çözdü.**",
    author: "Ahmet Yardımcı",
    role: "Türkiye'nin #1 Sağlık Turizmi Uzmanı",
    statSuffix: "+",
    statLabel: "çağrı tamamlandı",
  },

  partners: {
    label: "Çalışma Ortaklarımız",
  },

  dashboard: {
    url: "dashboard.volina.ai",
    clinic: "Anatolia Klinik",
    navPanel: "Panel",
    navLeads: "Leadler",
    navCampaigns: "Kampanyalar",
    navFunnel: "Funnel",
    navCalls: "Aramalar",
    activeCampaign: "Aktif kampanya",
    campaignName: "2023 leadleri",
    campaignStat: "7,310 / 11,420 arandı",
    kpis: [
      { label: "Bugün arandı", value: "612", trend: "↗ %12", trendUp: true },
      { label: "Satışa hazır lead", value: "28", trend: "↗ 6 yeni", trendUp: true },
      { label: "Ortalama arama", value: "1:04", trend: "—", trendUp: false },
      { label: "Dönüşüm oranı", value: "%4.6", trend: "↗ %1.1", trendUp: true },
    ],
    liveTag: "Az önce tamamlandı",
    liveMeta: "01:42 · Sarah",
    liveName: "Marie D.",
    liveCountry: "· Fransa",
    liveSource: "Facebook · Mart 2023 · 18 ay sessiz",
    liveScoreLabel: "İlgi 92",
    summary: [
      { k: "İlgi", v: "Türkiye'de tatil + diş tedavisi paketi", accent: false },
      { k: "Çekince", v: "Süreç bilinmiyor, \"şu an değil\" itirazı", accent: false },
      { k: "Kişilik", v: "Temkinli → meraklı", accent: false },
      { k: "Karar", v: "Görüşme planlandı — Çarşamba akşam", accent: true },
    ],
    footTags: ["Niyet: yüksek", "CRM'e kaydedildi"],
    footAccent: "→ Görüşmeye yönlendir",
    queueTag: "Sıradaki aramalar",
    queueMeta: "otomatik",
    queue: [
      { time: "14:32", name: "Oliver H.", meta: "2022 leadi · 22 ay sessiz", status: "3 dk", soon: true },
      { time: "14:35", name: "Siobhán M.", meta: "2023 leadi · 14 ay sessiz", status: "6 dk", soon: true },
      { time: "14:41", name: "Harry W.", meta: "2024 leadi · 9 ay sessiz", status: "12 dk", soon: false },
      { time: "14:47", name: "Aoife B.", meta: "2023 leadi · 16 ay sessiz", status: "18 dk", soon: false },
      { time: "14:53", name: "Charlotte D.", meta: "2022 leadi · 26 ay sessiz", status: "24 dk", soon: false },
    ],
  },

  howItWorks: {
    eyebrow: "Nasıl çalışır",
    titleLead: "Bir aramanın",
    titleAccent: "80 saniyesi",
    intro:
      "Aşağıdaki örnek, gerçek bir Volina aramasıdır. Oynat'a bas, Volina'nın leadi nasıl okuduğunu, niyeti nasıl anladığını ve neye göre transfer kararı verdiğini kendin gör.",
    steps: [
      { n: "01", title: "Arama", body: "Volina CRM'den leadi çeker, numarayı arar." },
      { n: "02", title: "Hafıza", body: "Hasta adı, bilgileri ve geçmişi hafızasında bulunur." },
      { n: "03", title: "İlk 10 saniye", body: "Ses tonu, kelime hızı ve cümle yapısından kişilik tipini analiz eder." },
      { n: "04", title: "Adaptasyon", body: "Konuşma stili değişir: analitik için fiyat, duygusal için sonuç odaklı yaklaşır." },
      { n: "05", title: "İtiraz yönetimi", body: "\"Pahalı\", \"düşüneyim\", \"şu an değil\" sinyallerine hazır cevaplar verir." },
      { n: "06", title: "Niyet skoru", body: "Her cümle skoru günceller. 70+ ise sıcak hastadır." },
      { n: "07", title: "Karar", body: "Düşük ise nazik bir kapanış, yüksek ise satış ekibine transfer eder." },
      { n: "08", title: "CRM", body: "Transkript, konuşma özeti ve skoru kaydeder." },
      { n: "09", title: "Takip", body: "Düşük skorlu leadler otomatik olarak takvime alınır ve tekrar aranır." },
    ],
    call: {
      phone: "+353 01 ********",
      caller: "Elizabeth L. · 2022 leadi · 51 ay sessiz",
      personaLabel: "Kişilik",
      scoreLabel: "SKOR",
      decisionLabel: "Karar",
      decisionWaiting: "— bekliyor",
      listen: "Aramayı dinle",
      pause: "Duraklat",
      resume: "Devam et",
      replay: "Tekrar oynat",
      restart: "Baştan al",
      whoSystem: "Sistem",
      script: [
        { who: "Volina", kind: "agent", t: 3, intent: 0, persona: "okunuyor…", text: "Merhaba, ben İstanbul'daki **** Diş Kliniği'nden Sarah. Bugün nasılsınız?" },
        { who: "Lead", kind: "lead", t: 8, intent: 18, persona: "okunuyor…", text: "Evet, iyiyim. Sen nasılsın?" },
        { who: "Volina", kind: "agent", t: 13, intent: 28, persona: "temkinli", text: "İyiyim, teşekkür ederim. Türkiye'de diş tedavisine olan ilginiz için buradayım. Tatil ile birleştirip paranızın karşılığını iki kat almak için hâlâ araştırma yapıyor musunuz?" },
        { who: "Lead", kind: "lead", t: 22, intent: 42, persona: "temkinli", text: "Belki bir noktada. Şu anda değil." },
        { who: "Volina", kind: "agent", t: 28, intent: 54, persona: "temkinli", text: "Tamamen mantıklı, ama burada aynı tedaviyi yarı fiyatına alabilir ve üzerine bir tatil ekleyebilirsiniz. Açıklamam için sadece 1 dakika daha değer mi?" },
        { who: "Lead", kind: "lead", t: 36, intent: 66, persona: "temkinli · meraklı", text: "Mhmmm, olabilir." },
        { who: "Volina", kind: "agent", t: 42, intent: 78, persona: "temkinli · meraklı", text: "Çoğu hasta kendi ülkesine kıyasla yaklaşık yarı fiyatına tasarruf ediyor. Paketlerimiz tedavi, otel ve özel transferi kapsıyor; çoğu tedavi birkaç gün içinde tamamlanıyor. Ekibimizle 15 dakikalık bir görüşme ayarlamamı ister misiniz?" },
        { who: "Lead", kind: "lead", t: 54, intent: 86, persona: "temkinli · meraklı", text: "Evet. Tamam." },
        { who: "Volina", kind: "agent", t: 58, intent: 86, persona: "temkinli · meraklı", text: "Harika. Hangi gün sizin için en uygun?" },
        { who: "Lead", kind: "lead", t: 63, intent: 90, persona: "temkinli · meraklı", text: "Çarşamba akşama doğru." },
        { who: "Volina", kind: "agent", t: 70, intent: 92, persona: "temkinli · meraklı", text: "Harika. Görüşmeniz çarşamba akşamı için ayarlandı. Ekibimiz size programı onaylamak için ulaşacak. İyi günler." },
        { who: "Sistem", kind: "sys", t: 78, intent: 92, persona: "temkinli · meraklı", decision: "görüşmeye yönlendir", text: "→ Görüşme çarşamba akşamı için planlandı. CRM'e kaydedildi, ekip bilgilendirildi." },
      ],
    },
  },

  features: {
    eyebrow: "Özellikler",
    titleLead: "Volina bir satış botu",
    titleAccent: "değildir",
    items: [
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
    ],
    card: {
      personaLabel: "Kişilik",
      scoreLabel: "Niyet skoru",
      sourceLabel: "CRM kaynak",
      nextLabel: "Sonraki adım",
      transcriptLabel: "Transkript özeti",
      madeBy: "Volina tarafından yapıldı",
    },
    cards: [
      {
        name: "Mary L.",
        meta: "İrlanda · 2022 Instagram lead",
        badge: "Satışa hazır",
        personaPrimary: "analitik",
        personaSecondary: "temkinli",
        sourceName: "Excel/CSV",
        sourceSilent: "51 ay sessiz",
        nextStep: "→ Satış ekibi",
        transcript: "Fiyat sebebiyle ertelemiş. Tedaviyi hala yaptırmamış, yakın zamanda yaptırmak istiyor. Sıcak hasta.",
        duration: "Arama 02:17",
      },
      {
        name: "James W.",
        meta: "İngiltere · 2023 Google Ads lead",
        badge: "Takip aramasında",
        personaPrimary: "duygusal",
        personaSecondary: "kararsız",
        sourceName: "HubSpot",
        sourceSilent: "22 ay sessiz",
        nextStep: "↻ 30 gün sonra ara",
        transcript: "Eşi ile konuşmak istiyor, fiyat aralığı uygun ama henüz karar verememiş. İlgi sıcak ama zaman lazım.",
        duration: "Arama 03:02",
      },
      {
        name: "Michael R.",
        meta: "Amerika · 2023 Facebook lead",
        badge: "Satışa hazır",
        personaPrimary: "dominant",
        personaSecondary: "kararlı",
        sourceName: "Zoho",
        sourceSilent: "8 ay sessiz",
        nextStep: "→ Satış ekibi",
        transcript: "Bu hafta İstanbul'da olacak, doktorla görüşme istiyor. Bütçe konusunda esnek, hemen tedaviye başlamak istiyor.",
        duration: "Arama 01:21",
      },
    ],
  },

  numbers: {
    eyebrow: "Sayılar",
    titleLead: "Bir pilot haftasında,",
    titleAccent: "ortalama bir klinik için",
    cells: [
      { caption: "Aranan eski lead" },
      { caption: "Cevaplayan ve görüşen" },
      { caption: "Satışa hazır transfer" },
      { caption: "Reklam ROI'sine göre kazanç katı" },
    ],
    strip: ["İrlanda · İngiltere · Fransa · Amerika", "5+ klinik ile pilot"],
  },

  faq: {
    eyebrow: "Sıkça Sorulan Sorular",
    titleLead: "Klinik sahiplerinin",
    titleEm: "sık sorduğu şeyler",
    items: [
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
    ],
  },

  finalCta: {
    titleLead: "Ölü sandığın leadler",
    titleEm: "aranmayı bekliyor.",
    cta: "Ücretsiz Deneyimle",
  },

  footer: {
    tagline: "Diş turizmi klinikleri için, ölü leadleri uyandıran yapay zeka ses asistanı.",
    productTitle: "Ürün",
    product: [
      { label: "Nasıl çalışır", href: "/#nasil" },
      { label: "Özellikler", href: "/#ozellikler" },
      { label: "Sayılar", href: "/#sayilar" },
    ],
    companyTitle: "Şirket",
    company: [
      { label: "Blog", href: "/blog" },
      { label: "İletişim", href: "/iletisim" },
    ],
    legalTitle: "Yasal",
    legal: [{ label: "Gizlilik politikası", href: "/gizlilik-politikasi" }],
    copyright: "© 2026 Volina AI. Tüm hakları saklıdır.",
    location: "İstanbul · Ankara",
  },

  common: {
    backHome: "Ana sayfaya dön",
  },

  blog: {
    eyebrow: "Blog",
    title: "64 milyon kişiye yeni bir gülüş.",
    author: "Fatih Aydın",
    readMeta: "Volina AI · 5 dakika okuma",
    body: [
      { type: "lead", text: "COVID sonrasının geçtiği beş yılda, Avrupa'dan, İngiltere'den, Orta Doğu'dan ve Amerika'dan 65 milyon insan Türkiye'de diş tedavisi yaptırmayı araştırdı. Reklamlara tıkladılar. Formları doldurdular. Öncesi-sonrası videolarını izlediler. Fiyatları karşılaştırdılar. Hesabı gördüler. İstediler. Gerçekten istediler." },
      { type: "p", text: "1,5 milyonu gerçekten geldi. Geriye kalan **63,5 milyon kişi** ya dağıldı, ya vazgeçti, birkaç kez aranıp sonra tamamen ilgisiz diye unutuldu." },
      { type: "pullquote", text: "Bu bir pazarlama sorunu değil. Bu bir *sabır* sorunudur. Ve Volina'nın var olma nedeni de budur." },
      { type: "h2", text: "Başlangıç" },
      { type: "p", text: "Beni rahatsız eden şey Batı'daki diş tedavisi maliyetleri değildi. O hikayeyi herkes zaten biliyor. Beni rahatsız eden şey şuydu: talep açıkça oradaydı, onlarca milyon insan araştırmasını yapmış, niyeti netleşmişti. Ve klinikler bu talebin CRM'lerinde çürümesine izin veriyordu. Bir yerde WhatsApp mesajı olarak, cevapsız bir e-posta olarak, bir keresinde Excel'e indirilip unutulan bir satır olarak." },
      { type: "p", text: "Klinik sahipleriyle konuşmaya başladım. Tablo hep aynıydı." },
      { type: "dialog", lines: [
        { text: "\"Çok lead alıyoruz.\"", em: true },
        { text: "Peki en son ne zaman takip ettiniz?", em: false },
        { text: "\"Aramaya çalışıyoruz ama her zaman açmıyorlar.\"", em: true },
        { text: "Kaç kez arıyorsunuz?", em: false },
        { text: "\"Birkaç kez.\"", em: true },
        { text: "Sonra ne oluyor? Sessizlik.", em: false },
      ] },
      { type: "p", text: "Google ve Meta reklamlarına aylık 5.000–30.000 dolar harcayan, gerçek insanlardan gerçek ilgi toplayan, sonra birkaç aramadan sonra her şeyi bırakan kliniklerden bahsediyoruz. Ortalama hasta değeri 5.000 Euro. Matematik acımasız. **Bu yüzden Volina'yı kurduk.**" },
      { type: "h2", text: "Asıl Sorun" },
      { type: "p", text: "Diş sağlığı turizmi dürtüsel bir satın alma değil. Araştırma süreci 48 aya kadar sürebiliyor. Biri tüm dişlerini yaptırmayı düşünüyorsa, bu kararı hemen bugün vermiyor. İki yıl düşünüyor, üç farklı ülkeyi karşılaştırıyor, sosyal medyada yüzlerce yorum okuyor, belki aile üyeleriyle konuşuyor, sonra hazır olduğunda bir kliniğe yazıyor." },
      { type: "p", text: "Klinikler bu hastayı alıyor, dört-beş kez arıyor, açmıyor diye listeden siliyor. Ama bu hasta gitmedi. **Sadece henüz hazır değil.** Karar verme süreci devam ederken klinikle bağı kopuyor. Aklında başka bir ülke, başka bir klinik beliriyor. Ve binlerce dolarlık reklam harcamasıyla elde edilen o ilk niyet, hiçe gidiyor." },
      { type: "p", text: "Volina bu hastaları geri arıyor. Sadece bir kez değil. Doğru zamanda, doğru dilde, doğru mesajla. Hasta hangi aşamada olursa olsun, Volina orada." },
      { type: "h2", text: "Ne İnşa Ettik" },
      { type: "p", text: "Volina, kliniklerin sahip olduğu lead listelerine yapay zeka ses ajanları kurar. Chatbot değil. E-posta serisi değil. Gerçek telefon aramaları, hastanın kendi dilinde, niyeti ölçen, itirazları ele alan, bilgi veren ve doğru zamanda randevu oluşturan konuşmalar." },
      { type: "stats", items: [
        { num: 50000, prefix: "", suffix: "+", label: "tamamlanan arama" },
        { num: 2000, prefix: "", suffix: "+", label: "dönüşen hasta" },
        { num: 11, prefix: "€", suffix: " mlr", label: "geri kazanılabilir gelir" },
      ] },
      { type: "p", text: "Bugüne kadar 50.000'den fazla arama yaptık. 2.000'den fazla hastayı satışa bağladık. Aylarca, yıllarca dokunulmadan bekleyen leadlerden nitelikli hasta randevuları çıkartıyoruz." },
      { type: "p", text: "Başka bir deyişle, büyük resimde: 63,5 milyon dönüşmemiş potansiyel hastaya aynı oranı uygularsanız, 2,2 milyon reaktive edilebilir hasta çıkıyor. Ortalama hasta değeri 5.000 Euro'da bile bu **11 milyar Euro'luk geri kazanılabilir gelir** demek. Şu an Excel tablolarında uyuyan para." },
      { type: "p", text: "50.000 aramayı kaydedip analiz ettik. İnsanların neden açtığını biliyoruz. Neden hatta kaldığını biliyoruz. Bir hastanın \"evet randevu almak istiyorum\" dediği an ile \"o zaman ben de Macaristan'a bakayım\" dediği anın tam olarak nerede olduğunu biliyoruz." },
      { type: "h2", text: "Nereye Gidiyoruz" },
      { type: "p", text: "Kaydettiğimiz her arama bir eğitim verisi. Her konuşma, bu pazara özgü hasta psikolojisi, dil kalıpları, itiraz türleri ve karar tetikleyicileri hakkında bize daha fazlasını öğretiyor. Hangi cümle hastayı hatta tutuyor, hangi soru onu düşündürüyor, hangi an telefonu kapattırıyor. Bunları biliyoruz çünkü binlerce kez yaşadık." },
      { type: "p", text: "Diş sağlığı turizminde karar süreci 48 aya kadar uzayabiliyor. Bu süreçte hasta onlarca farklı klinikle, onlarca farklı ülkeyle temas kuruyor. Kazanan, en iyi reklam bütçesine sahip olan değil. Kazanan, o 48 ayın içinde en doğru anda, en doğru mesajla orada olan." },
      { type: "p", text: "Biz tam olarak bunu öğreniyoruz. Ve bu veri, bu pazarda hiç konuşmamış hiçbir genel amaçlı aracın kopyalayamayacağı bir şey. Biz bu odadayız. **Burayı sahiplenmeye niyetliyiz.**" },
      { type: "h2", text: "Büyük İddia" },
      { type: "p", text: "Medikal turizm 15 milyar Euro'luk küresel bir sektör. Türkiye tek başına yıllık 2 milyar Euro'nun üzerinde sağlık turizmi geliri üretiyor ve diş, baskın dikey kollardan biri. Bu geliri yaratan klinikler, klinik tarafta gelecekte ama hasta takibi tarafında taş devrinde çalışıyor." },
      { type: "p", text: "63,5 milyon insan hâlâ dışarıda. Bir kısmı bir kliniğe form doldurdu, birkaç arama aldı ve sonra unutuldu. Bir kısmı iki yıl içinde hazır olacak ama o kliniği çoktan aklından sildi. **Bir kısmı Volina'dan bir arama alacak.**" },
      { type: "p", text: "50.000'den fazla arama verisi, kanıtlanmış çalışmalar, bu problemin içinde başından beri olan kurucu ekip ve diş sağlığı turizminin en iyi hasta takip altyapısını kuranın etrafında yeniden şekilleneceğine dair sarsılmaz bir inançla yola çıktık." },
      { type: "pullquote", text: "Bu *biz* olacağız." },
    ],
    signName: "Fatih Aydın",
    signRole: "Kurucu Ortak, Volina AI",
    ctaTitle: "CRM'inizde *uyuyan* leadleri uyandıralım.",
    ctaText: "Volina, ölü leadlerinizi gerçek randevulara dönüştürür. Nasıl çalıştığını 30 dakikada gösterelim.",
    ctaBtn: "Ücretsiz Deneyimle",
  },

  contact: {
    eyebrow: "İletişim",
    titleLead: "Bir ",
    titleEm: "merhaba",
    titleTail: " yeterli.",
    intro: "Demo, iş birliği ya da merak ettiğiniz her şey için yazın.",
    emailLabel: "E-posta",
    note: "Klinik sahipleri ve ekipler için demo taleplerinizi de buradan iletebilirsiniz.",
  },

  panel: {
    eyebrow: "Panel",
    title: "Çok yakında",
  },

  privacy: {
    eyebrow: "Yasal",
    title: "Gizlilik Politikası",
    intro:
      "Bu Gizlilik Politikası, Volina AI (“Volina”, “biz”, “şirket”) tarafından sunulan yapay zekâ destekli sesli asistan ve iletişim otomasyon hizmetleri kapsamında kişisel verilerin nasıl toplandığını, işlendiğini ve korunduğunu açıklar. Hizmetlerimizi kullanarak bu politikada belirtilen şartları kabul etmiş olursunuz.",
    updated: "Son güncelleme: 30 Mayıs 2026",
    sections: [
      {
        title: "Topladığımız bilgiler",
        paras: [
          "Web sitemizi ziyaret ettiğinizde, bizimle iletişime geçtiğinizde veya hizmetlerimizi kullandığınızda bazı kişisel verileri toplayabiliriz. Bu bilgiler şunları içerebilir:",
        ],
        list: [
          "Ad ve soyad",
          "E-posta adresi",
          "Telefon numarası",
          "Şirket bilgileri",
          "CRM üzerinden işlenen lead verileri",
          "Sesli görüşme kayıtları ve yapay zeka tarafından oluşturulan görüşme özetleri",
          "Gönüllü olarak paylaştığınız diğer bilgiler",
        ],
        postParas: ["Ayrıca, hizmet kalitesini artırmak amacıyla arama sonuçları ve etkileşim verileri işlenebilir."],
      },
      {
        title: "Bilgileri nasıl kullanıyoruz?",
        paras: ["Topladığımız verileri aşağıdaki amaçlarla kullanabiliriz:"],
        list: [
          "Hizmetlerimizi sunmak ve geliştirmek",
          "Lead doğrulama ve ön eleme süreçlerini yürütmek",
          "Satış ekiplerine nitelikli fırsat yönlendirmek",
          "Müşteri deneyimini iyileştirmek",
          "Performans analizi ve raporlama yapmak",
          "Yasal yükümlülükleri yerine getirmek",
        ],
        postParas: [],
      },
      {
        title: "Veri güvenliği",
        paras: [
          "Volina, kişisel verileri yetkisiz erişim, ifşa, değiştirme veya imhaya karşı korumak için gerekli teknik ve idari güvenlik önlemlerini uygular. Bununla birlikte, internet üzerinden yapılan hiçbir veri aktarımı %100 güvenli değildir. Mutlak güvenlik garanti edilemez, ancak verilerin korunması için sektör standartlarında önlemler alınmaktadır.",
        ],
        list: [],
        postParas: [],
      },
      {
        title: "Üçüncü taraf paylaşımları",
        paras: [
          "Kişisel verileriniz, açık rızanız olmadan üçüncü taraflara satılmaz veya ticari amaçla paylaşılmaz. Ancak aşağıdaki durumlarda veri paylaşımı yapılabilir:",
        ],
        list: [
          "Hizmetin sunulması için gerekli teknoloji sağlayıcıları ile",
          "Yasal zorunluluklar kapsamında resmi mercilerle",
          "CRM ve altyapı entegrasyonları kapsamında iş ortaklarıyla",
        ],
        postParas: [
          "Tüm üçüncü taraf sağlayıcılarımız, veri işleme sözleşmeleri kapsamında gizlilik yükümlülüğüne tabidir ve kişisel verilerinizi yalnızca hizmeti sunmak amacıyla kullanabilir. Bu sağlayıcılar, verilerinizi kendi amaçları doğrultusunda satamaz veya ticari amaçla üçüncü kişilerle paylaşamaz. Tüm iş ortaklarımız gizlilik yükümlülüğüne tabidir.",
        ],
      },
      {
        title: "Çerezler",
        paras: [
          "Web sitemiz, kullanıcı deneyimini iyileştirmek ve analiz yapmak amacıyla çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri reddedebilirsiniz; ancak bazı site özellikleri düzgün çalışmayabilir.",
        ],
        list: [],
        postParas: [],
      },
      {
        title: "Gizlilik politikasındaki değişiklikler",
        paras: [
          "Volina, bu Gizlilik Politikasını gerektiğinde güncelleme hakkını saklı tutar. Güncellemeler bu sayfada yayınlanır ve yürürlük tarihi belirtilir. Politikayı periyodik olarak gözden geçirmenizi öneririz.",
        ],
        list: [],
        postParas: [],
      },
    ],
    contactTitle: "İletişim",
    contactText:
      "Gizlilik politikamız veya kişisel verilerinizin işlenmesi hakkında sorularınız varsa bizimle {email} adresinden iletişime geçebilirsiniz.",
  },
};

export type Dict = typeof tr;

export const en: Dict = {
  nav: {
    home: "Home",
    panel: "Panel",
    blog: "Blog",
    contact: "Contact",
    cta: "User Panel",
    toggleLabel: "TR",
    toggleAria: "Türkçe'ye geç",
  },

  hero: {
    titleLead: "Turn your old leads",
    titleAccent: "into revenue",
    sub: "Convert the thousands of old leads your clinic has gathered over the years and paid to advertise to — but everyone stopped following up on — into sales, without spending a single extra dollar on ads.",
    cta: "Try for Free",
    stats: [
      { num: "2 days", label: "setup time" },
      { num: "$0", label: "extra ad budget" },
      { num: "20%", label: "revenue increase" },
    ],
  },

  testimonial: {
    quote:
      "Leads going cold and disappearing was the industry's **single biggest open wound.** Volina saw that solving it with human effort was impossible and **fixed the problem with a purpose-built, specially trained AI.**",
    author: "Ahmet Yardımcı",
    role: "Turkey's #1 Health Tourism Expert",
    statSuffix: "+",
    statLabel: "calls completed",
  },

  partners: {
    label: "Our Partners",
  },

  dashboard: {
    url: "dashboard.volina.ai",
    clinic: "Anatolia Clinic",
    navPanel: "Panel",
    navLeads: "Leads",
    navCampaigns: "Campaigns",
    navFunnel: "Funnel",
    navCalls: "Calls",
    activeCampaign: "Active campaign",
    campaignName: "2023 leads",
    campaignStat: "7,310 / 11,420 called",
    kpis: [
      { label: "Called today", value: "612", trend: "↗ 12%", trendUp: true },
      { label: "Sales-ready leads", value: "28", trend: "↗ 6 new", trendUp: true },
      { label: "Average call", value: "1:04", trend: "—", trendUp: false },
      { label: "Conversion rate", value: "4.6%", trend: "↗ 1.1%", trendUp: true },
    ],
    liveTag: "Just completed",
    liveMeta: "01:42 · Sarah",
    liveName: "Marie D.",
    liveCountry: "· France",
    liveSource: "Facebook · March 2023 · silent for 18 months",
    liveScoreLabel: "Interest 92",
    summary: [
      { k: "Interest", v: "Holiday + dental treatment package in Turkey", accent: false },
      { k: "Concern", v: "Unclear process, \"not right now\" objection", accent: false },
      { k: "Personality", v: "Cautious → curious", accent: false },
      { k: "Decision", v: "Consultation scheduled — Wednesday evening", accent: true },
    ],
    footTags: ["Intent: high", "Saved to CRM"],
    footAccent: "→ Route to consultation",
    queueTag: "Upcoming calls",
    queueMeta: "automatic",
    queue: [
      { time: "14:32", name: "Oliver H.", meta: "2022 lead · silent for 22 months", status: "3 min", soon: true },
      { time: "14:35", name: "Siobhán M.", meta: "2023 lead · silent for 14 months", status: "6 min", soon: true },
      { time: "14:41", name: "Harry W.", meta: "2024 lead · silent for 9 months", status: "12 min", soon: false },
      { time: "14:47", name: "Aoife B.", meta: "2023 lead · silent for 16 months", status: "18 min", soon: false },
      { time: "14:53", name: "Charlotte D.", meta: "2022 lead · silent for 26 months", status: "24 min", soon: false },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    titleLead: "80 seconds",
    titleAccent: "of a call",
    intro:
      "The example below is a real Volina call. Hit play and see for yourself how Volina reads the lead, understands intent, and decides when to transfer.",
    steps: [
      { n: "01", title: "The call", body: "Volina pulls the lead from the CRM and dials the number." },
      { n: "02", title: "Memory", body: "The patient's name, details and history are held in memory." },
      { n: "03", title: "First 10 seconds", body: "It analyses personality type from tone, pace and sentence structure." },
      { n: "04", title: "Adaptation", body: "Its style shifts: price-first for the analytical, outcome-first for the emotional." },
      { n: "05", title: "Objection handling", body: "It has ready answers for \"too expensive\", \"let me think\", \"not right now\" signals." },
      { n: "06", title: "Intent score", body: "Every sentence updates the score. 70+ means a warm patient." },
      { n: "07", title: "Decision", body: "A gentle close if low, a transfer to the sales team if high." },
      { n: "08", title: "CRM", body: "It saves the transcript, call summary and score." },
      { n: "09", title: "Follow-up", body: "Low-scoring leads are automatically scheduled and called again." },
    ],
    call: {
      phone: "+353 01 ********",
      caller: "Elizabeth L. · 2022 lead · silent for 51 months",
      personaLabel: "Personality",
      scoreLabel: "SCORE",
      decisionLabel: "Decision",
      decisionWaiting: "— waiting",
      listen: "Listen to the call",
      pause: "Pause",
      resume: "Resume",
      replay: "Play again",
      restart: "Restart",
      whoSystem: "System",
      script: [
        { who: "Volina", kind: "agent", t: 3, intent: 0, persona: "reading…", text: "Hello, this is Sarah from **** Dental Clinic in Istanbul. How are you today?" },
        { who: "Lead", kind: "lead", t: 8, intent: 18, persona: "reading…", text: "Yes, I'm good. How are you?" },
        { who: "Volina", kind: "agent", t: 13, intent: 28, persona: "cautious", text: "I'm well, thank you. I'm reaching out about your interest in dental treatment in Turkey. Are you still looking into combining it with a holiday to get double the value for your money?" },
        { who: "Lead", kind: "lead", t: 22, intent: 42, persona: "cautious", text: "Maybe at some point. Not right now." },
        { who: "Volina", kind: "agent", t: 28, intent: 54, persona: "cautious", text: "That makes complete sense — but here you could get the same treatment for half the price and add a holiday on top. Is it worth just one more minute for me to explain?" },
        { who: "Lead", kind: "lead", t: 36, intent: 66, persona: "cautious · curious", text: "Mhmmm, maybe." },
        { who: "Volina", kind: "agent", t: 42, intent: 78, persona: "cautious · curious", text: "Most patients save roughly half compared to their home country. Our packages cover the treatment, hotel and private transfers, and most treatments are completed within a few days. Shall I arrange a 15-minute call with our team?" },
        { who: "Lead", kind: "lead", t: 54, intent: 86, persona: "cautious · curious", text: "Yes. Okay." },
        { who: "Volina", kind: "agent", t: 58, intent: 86, persona: "cautious · curious", text: "Great. Which day works best for you?" },
        { who: "Lead", kind: "lead", t: 63, intent: 90, persona: "cautious · curious", text: "Towards Wednesday evening." },
        { who: "Volina", kind: "agent", t: 70, intent: 92, persona: "cautious · curious", text: "Perfect. Your call is set for Wednesday evening. Our team will reach out to confirm the schedule. Have a great day." },
        { who: "System", kind: "sys", t: 78, intent: 92, persona: "cautious · curious", decision: "route to consultation", text: "→ Consultation scheduled for Wednesday evening. Saved to CRM, team notified." },
      ],
    },
  },

  features: {
    eyebrow: "Features",
    titleLead: "Volina is",
    titleAccent: "not a sales bot",
    items: [
      {
        k: "01 — Personality analysis",
        title: "Reads who you are in the first 10 seconds",
        body: "Volina infers personality type from the opening sentence. With an analytical lead it talks price first; with an emotional lead, the outcome first. This is the only way for an AI not to sound like a robot.",
        bullets: [
          "4 personality profiles (analytical, emotional, dominant, hesitant)",
          "Measures speaking pace, sentence length and tone of voice",
          "Profile is updated with every answer",
        ],
      },
      {
        k: "02 — Intent score",
        title: "Measures a lead's interest in real time",
        body: "Questions, tone of voice, \"yes but\" patterns — every signal is scored. Every lead above 70 is instantly transferred to the sales team. Those below are queued for a follow-up call.",
        bullets: [
          "Score from 0 to 100",
          "Notifies the team after the conversation",
          "Calls back after 30 days if intent is low",
        ],
      },
      {
        k: "03 — No selling",
        title: "Its goal isn't to sell, but to understand intent",
        body: "The goal isn't to close an appointment; it's to understand whether the patient is still interested. If intent is low it closes gently, with no pressure. If high, it routes to the sales team.",
        bullets: [
          "Never forces an appointment or pushes price",
          "Gently closes leads with no intent",
          "Only passes sales-ready prospects to the team",
        ],
      },
      {
        k: "04 — Realistic, natural voice",
        title: "The patient doesn't realise it's \"AI\"",
        body: "Volina doesn't talk like \"artificial intelligence.\" Its emphasis, pauses and self-corrections are human. In our test calls, 98% of patients thought Volina was a human.",
        bullets: [
          "Adapts to UK, Irish and other accents",
          "Natural pauses and corrections",
          "If you like, it can be cloned with a team member's voice",
        ],
      },
    ],
    card: {
      personaLabel: "Personality",
      scoreLabel: "Intent score",
      sourceLabel: "CRM source",
      nextLabel: "Next step",
      transcriptLabel: "Transcript summary",
      madeBy: "Made by Volina",
    },
    cards: [
      {
        name: "Mary L.",
        meta: "Ireland · 2022 Instagram lead",
        badge: "Sales-ready",
        personaPrimary: "analytical",
        personaSecondary: "cautious",
        sourceName: "Excel/CSV",
        sourceSilent: "silent for 51 months",
        nextStep: "→ Sales team",
        transcript: "Put it off because of price. Hasn't had the treatment yet and wants to do it soon. Warm patient.",
        duration: "Call 02:17",
      },
      {
        name: "James W.",
        meta: "UK · 2023 Google Ads lead",
        badge: "In follow-up",
        personaPrimary: "emotional",
        personaSecondary: "hesitant",
        sourceName: "HubSpot",
        sourceSilent: "silent for 22 months",
        nextStep: "↻ Call in 30 days",
        transcript: "Wants to talk it over with his spouse; the price range works but he hasn't decided yet. Interest is warm but he needs time.",
        duration: "Call 03:02",
      },
      {
        name: "Michael R.",
        meta: "USA · 2023 Facebook lead",
        badge: "Sales-ready",
        personaPrimary: "dominant",
        personaSecondary: "decisive",
        sourceName: "Zoho",
        sourceSilent: "silent for 8 months",
        nextStep: "→ Sales team",
        transcript: "Will be in Istanbul this week and wants to meet the doctor. Flexible on budget, wants to start treatment right away.",
        duration: "Call 01:21",
      },
    ],
  },

  numbers: {
    eyebrow: "Numbers",
    titleLead: "In a single pilot week,",
    titleAccent: "for an average clinic",
    cells: [
      { caption: "Old leads called" },
      { caption: "Answered and spoke" },
      { caption: "Sales-ready transfers" },
      { caption: "Return multiple vs. ad ROI" },
    ],
    strip: ["Ireland · UK · France · USA", "Piloted with 5+ clinics"],
  },

  faq: {
    eyebrow: "Frequently Asked Questions",
    titleLead: "What clinic owners",
    titleEm: "ask most often",
    items: [
      {
        q: "Can the patient tell they're talking to an AI?",
        a: "In our pilot studies, 98% of patients believed Volina was human all the way through the call. The question \"Are you an AI?\" has always been answered honestly, and this has never been an issue for any patient.",
      },
      {
        q: "Is it replacing my sales team?",
        a: "Volina's only purpose is to call the old, dead CRM leads your sales advisors have already given up on, and identify the ones still interested. Warm leads are routed to the sales team — Volina's focus is the dead leads.",
      },
      {
        q: "Will cold calls damage my clinic's reputation?",
        a: "No. Volina's calls are natural, professional and based on consented data. The aim isn't to disturb people, but to identify prospects who are still interested.",
      },
      {
        q: "How old can the leads I call be?",
        a: "Even with leads 3 years old or older, we've seen warm responses of 4–7%. Our general rule: any lead that hasn't moved for at least 30 days is a target for Volina.",
      },
      {
        q: "How does pricing work?",
        a: "Pricing is tailored to your number of leads and call volume. There's no fixed package; we aim to provide the best price for your needs. Get in touch with us for the details.",
      },
      {
        q: "Is it GDPR / KVKK compliant?",
        a: "Volina stores all call recordings and customer data encrypted, in line with KVKK and GDPR standards. Your data belongs only to you and is not shared with third parties unless necessary.",
      },
    ],
  },

  finalCta: {
    titleLead: "The leads you thought were dead",
    titleEm: "are waiting for a call.",
    cta: "Try for Free",
  },

  footer: {
    tagline: "An AI voice assistant that wakes up dead leads, built for dental tourism clinics.",
    productTitle: "Product",
    product: [
      { label: "How it works", href: "/#nasil" },
      { label: "Features", href: "/#ozellikler" },
      { label: "Numbers", href: "/#sayilar" },
    ],
    companyTitle: "Company",
    company: [
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/iletisim" },
    ],
    legalTitle: "Legal",
    legal: [{ label: "Privacy policy", href: "/gizlilik-politikasi" }],
    copyright: "© 2026 Volina AI. All rights reserved.",
    location: "Istanbul · Ankara",
  },

  common: {
    backHome: "Back to home",
  },

  blog: {
    eyebrow: "Blog",
    title: "A new smile for 64 million people.",
    author: "Fatih Aydın",
    readMeta: "Volina AI · 5 min read",
    body: [
      { type: "lead", text: "In the five years since COVID, 65 million people from Europe, the UK, the Middle East and the US researched getting dental treatment in Turkey. They clicked the ads. They filled out the forms. They watched the before-and-after videos. They compared prices. They did the math. They wanted it. They really wanted it." },
      { type: "p", text: "1.5 million actually came. The remaining **63.5 million people** either drifted off, gave up, or were called a couple of times and then forgotten as \"not interested.\"" },
      { type: "pullquote", text: "This isn't a marketing problem. It's a *patience* problem. And that is exactly why Volina exists." },
      { type: "h2", text: "The Beginning" },
      { type: "p", text: "What bothered me wasn't the cost of dental care in the West. Everyone already knows that story. What bothered me was this: the demand was clearly there — tens of millions of people had done their research and made up their minds. And clinics were letting that demand rot in their CRMs. Somewhere as a WhatsApp message, an unanswered email, or a row once exported to Excel and forgotten." },
      { type: "p", text: "I started talking to clinic owners. The picture was always the same." },
      { type: "dialog", lines: [
        { text: "\"We get a lot of leads.\"", em: true },
        { text: "And when did you last follow up?", em: false },
        { text: "\"We try to call, but they don't always pick up.\"", em: true },
        { text: "How many times do you call?", em: false },
        { text: "\"A couple of times.\"", em: true },
        { text: "And then what happens? Silence.", em: false },
      ] },
      { type: "p", text: "We're talking about clinics spending $5,000–30,000 a month on Google and Meta ads, collecting real interest from real people, then dropping everything after a few calls. Average patient value: €5,000. The math is brutal. **That's why we founded Volina.**" },
      { type: "h2", text: "The Real Problem" },
      { type: "p", text: "Dental tourism isn't an impulse purchase. The research process can take up to 48 months. If someone is considering doing all of their teeth, they don't make that decision today. They think for two years, compare three different countries, read hundreds of reviews on social media, maybe talk it over with family, and then — when they're ready — they message a clinic." },
      { type: "p", text: "Clinics take this patient, call four or five times, and delete them from the list because they didn't answer. But this patient didn't leave. **They're just not ready yet.** While the decision process is still ongoing, their connection to the clinic breaks. Another country, another clinic appears in their mind. And that initial intent, won with thousands of dollars in ad spend, goes to waste." },
      { type: "p", text: "Volina calls these patients back. Not just once. At the right time, in the right language, with the right message. Whatever stage the patient is at, Volina is there." },
      { type: "h2", text: "What We Built" },
      { type: "p", text: "Volina deploys AI voice agents onto the lead lists clinics already own. Not a chatbot. Not an email sequence. Real phone calls, in the patient's own language, that gauge intent, handle objections, give information, and book the appointment at the right moment." },
      { type: "stats", items: [
        { num: 50000, prefix: "", suffix: "+", label: "calls completed" },
        { num: 2000, prefix: "", suffix: "+", label: "patients converted" },
        { num: 11, prefix: "€", suffix: "B", label: "recoverable revenue" },
      ] },
      { type: "p", text: "To date we've made over 50,000 calls. We've connected more than 2,000 patients to sales. We pull qualified patient appointments out of leads that had sat untouched for months, even years." },
      { type: "p", text: "Put another way, at the big-picture level: apply that same rate to 63.5 million unconverted prospective patients and you get 2.2 million reactivatable patients. Even at an average patient value of €5,000, that's **€11 billion in recoverable revenue.** Money currently sleeping in Excel spreadsheets." },
      { type: "p", text: "We recorded and analysed 50,000 calls. We know why people pick up. We know why they stay on the line. We know exactly where the moment is between a patient saying \"yes, I'd like to book an appointment\" and \"in that case, let me look at Hungary too.\"" },
      { type: "h2", text: "Where We're Headed" },
      { type: "p", text: "Every call we record is training data. Each conversation teaches us more about the patient psychology, language patterns, objection types and decision triggers unique to this market. Which sentence keeps a patient on the line, which question makes them think, which moment makes them hang up. We know these because we've lived them thousands of times." },
      { type: "p", text: "In dental tourism, the decision process can stretch up to 48 months. Over that time the patient touches dozens of different clinics, dozens of different countries. The winner isn't the one with the best ad budget. The winner is the one who's there at the right moment, with the right message, within those 48 months." },
      { type: "p", text: "That's exactly what we're learning. And this data is something no general-purpose tool that has never spoken in this market could replicate. We're in this room. **We intend to own it.**" },
      { type: "h2", text: "The Big Claim" },
      { type: "p", text: "Medical tourism is a €15 billion global industry. Turkey alone generates over €2 billion in health tourism revenue a year, and dental is one of the dominant verticals. The clinics generating that revenue work in the future on the clinical side — but in the stone age on the patient follow-up side." },
      { type: "p", text: "63.5 million people are still out there. Some filled out a form at a clinic, got a few calls and were then forgotten. Some will be ready within two years but have already erased that clinic from their mind. **Some will get a call from Volina.**" },
      { type: "p", text: "We set out with more than 50,000 calls of data, proven results, a founding team that's been inside this problem from the start, and an unshakeable belief that dental tourism will reshape itself around whoever builds the best patient follow-up infrastructure." },
      { type: "pullquote", text: "That will be *us*." },
    ],
    signName: "Fatih Aydın",
    signRole: "Co-founder, Volina AI",
    ctaTitle: "Let's wake the *sleeping* leads in your CRM.",
    ctaText: "Volina turns your dead leads into real appointments. Let us show you how it works in 30 minutes.",
    ctaBtn: "Try for Free",
  },

  contact: {
    eyebrow: "Contact",
    titleLead: "A single ",
    titleEm: "hello",
    titleTail: " is enough.",
    intro: "Write to us for a demo, a partnership, or anything you're curious about.",
    emailLabel: "Email",
    note: "Clinic owners and teams can also send their demo requests here.",
  },

  panel: {
    eyebrow: "Panel",
    title: "Coming soon",
  },

  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how personal data is collected, processed and protected within the scope of the AI-powered voice assistant and communication automation services offered by Volina AI (“Volina”, “we”, “the company”). By using our services, you accept the terms set out in this policy.",
    updated: "Last updated: 30 May 2026",
    sections: [
      {
        title: "Information we collect",
        paras: [
          "When you visit our website, contact us, or use our services, we may collect certain personal data. This information may include:",
        ],
        list: [
          "First and last name",
          "Email address",
          "Phone number",
          "Company information",
          "Lead data processed through the CRM",
          "Voice call recordings and AI-generated call summaries",
          "Other information you voluntarily share",
        ],
        postParas: ["In addition, call results and interaction data may be processed in order to improve service quality."],
      },
      {
        title: "How we use the information",
        paras: ["We may use the data we collect for the following purposes:"],
        list: [
          "To provide and improve our services",
          "To carry out lead verification and pre-qualification processes",
          "To route qualified opportunities to sales teams",
          "To improve the customer experience",
          "To perform performance analysis and reporting",
          "To fulfil legal obligations",
        ],
        postParas: [],
      },
      {
        title: "Data security",
        paras: [
          "Volina applies the necessary technical and administrative security measures to protect personal data against unauthorised access, disclosure, alteration or destruction. That said, no data transmission over the internet is 100% secure. Absolute security cannot be guaranteed, but industry-standard measures are taken to protect the data.",
        ],
        list: [],
        postParas: [],
      },
      {
        title: "Third-party sharing",
        paras: [
          "Your personal data is not sold to third parties or shared for commercial purposes without your explicit consent. However, data may be shared in the following cases:",
        ],
        list: [
          "With technology providers required to deliver the service",
          "With official authorities within the scope of legal obligations",
          "With business partners within the scope of CRM and infrastructure integrations",
        ],
        postParas: [
          "All of our third-party providers are bound by confidentiality obligations under data processing agreements and may use your personal data only to deliver the service. These providers may not sell your data for their own purposes or share it with third parties for commercial purposes. All of our business partners are bound by confidentiality obligations.",
        ],
      },
      {
        title: "Cookies",
        paras: [
          "Our website may use cookies to improve the user experience and perform analytics. You can reject cookies through your browser settings; however, some site features may not work properly.",
        ],
        list: [],
        postParas: [],
      },
      {
        title: "Changes to the privacy policy",
        paras: [
          "Volina reserves the right to update this Privacy Policy when necessary. Updates are published on this page along with their effective date. We recommend reviewing the policy periodically.",
        ],
        list: [],
        postParas: [],
      },
    ],
    contactTitle: "Contact",
    contactText:
      "If you have any questions about our privacy policy or the processing of your personal data, you can contact us at {email}.",
  },
};

export const content: Record<Lang, Dict> = { tr, en };
