"use client";

import { useEffect, useRef, useState } from "react";

type CallStep = {
  who: string;
  kind: "agent" | "lead" | "sys";
  t: number;
  text: string;
  signals: {
    persona?: string;
    intent?: number;
    decision?: string;
  };
};

const callScript: CallStep[] = [
  {
    who: "Volina",
    kind: "agent",
    t: 3,
    text: "Merhaba, ben İstanbul'daki **** Diş Kliniği'nden Sarah. Bugün nasılsınız?",
    signals: { persona: "okunuyor…", intent: 0 },
  },
  {
    who: "Lead",
    kind: "lead",
    t: 8,
    text: "Evet, iyiyim. Sen nasılsın?",
    signals: { persona: "okunuyor…", intent: 18 },
  },
  {
    who: "Volina",
    kind: "agent",
    t: 13,
    text: "İyiyim, teşekkür ederim. Türkiye'de diş tedavisine olan ilginiz için buradayım. Tatil ile birleştirip paranızın karşılığını iki kat almak için hâlâ araştırma yapıyor musunuz?",
    signals: { persona: "temkinli", intent: 28 },
  },
  {
    who: "Lead",
    kind: "lead",
    t: 22,
    text: "Belki bir noktada. Şu anda değil.",
    signals: { persona: "temkinli", intent: 42 },
  },
  {
    who: "Volina",
    kind: "agent",
    t: 28,
    text: "Tamamen mantıklı, ama burada aynı tedaviyi yarı fiyatına alabilir ve üzerine bir tatil ekleyebilirsiniz. Açıklamam için sadece 1 dakika daha değer mi?",
    signals: { persona: "temkinli", intent: 54 },
  },
  {
    who: "Lead",
    kind: "lead",
    t: 36,
    text: "Mhmmm, olabilir.",
    signals: { persona: "temkinli · meraklı", intent: 66 },
  },
  {
    who: "Volina",
    kind: "agent",
    t: 42,
    text: "Çoğu hasta kendi ülkesine kıyasla yaklaşık yarı fiyatına tasarruf ediyor. Paketlerimiz tedavi, otel ve özel transferi kapsıyor; çoğu tedavi birkaç gün içinde tamamlanıyor. Ekibimizle 15 dakikalık bir görüşme ayarlamamı ister misiniz?",
    signals: { persona: "temkinli · meraklı", intent: 78 },
  },
  {
    who: "Lead",
    kind: "lead",
    t: 54,
    text: "Evet. Tamam.",
    signals: { persona: "temkinli · meraklı", intent: 86 },
  },
  {
    who: "Volina",
    kind: "agent",
    t: 58,
    text: "Harika. Hangi gün sizin için en uygun?",
    signals: { persona: "temkinli · meraklı", intent: 86 },
  },
  {
    who: "Lead",
    kind: "lead",
    t: 63,
    text: "Çarşamba akşama doğru.",
    signals: { persona: "temkinli · meraklı", intent: 90 },
  },
  {
    who: "Volina",
    kind: "agent",
    t: 70,
    text: "Harika. Görüşmeniz çarşamba akşamı için ayarlandı. Ekibimiz size programı onaylamak için ulaşacak. İyi günler.",
    signals: { persona: "temkinli · meraklı", intent: 92 },
  },
  {
    who: "Sistem",
    kind: "sys",
    t: 78,
    text: "→ Görüşme çarşamba akşamı için planlandı. CRM'e kaydedildi, ekip bilgilendirildi.",
    signals: {
      persona: "temkinli · meraklı",
      intent: 92,
      decision: "görüşmeye yönlendir",
    },
  },
];

const fmtClock = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export default function CallSimulator() {
  const [playing, setPlaying] = useState(false);
  const [renderedLines, setRenderedLines] = useState<CallStep[]>([]);
  const [persona, setPersona] = useState("—");
  const [intent, setIntent] = useState(0);
  const [decision, setDecision] = useState("— bekliyor");
  const [decisionAccent, setDecisionAccent] = useState(false);
  const cursorRef = useRef(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const linesContainerRef = useRef<HTMLDivElement | null>(null);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const reset = () => {
    clearTimers();
    cursorRef.current = 0;
    setPlaying(false);
    setRenderedLines([]);
    setPersona("—");
    setIntent(0);
    setDecision("— bekliyor");
    setDecisionAccent(false);
  };

  const stop = () => {
    clearTimers();
    setPlaying(false);
  };

  const play = () => {
    if (playing) {
      stop();
      return;
    }
    if (cursorRef.current >= callScript.length) {
      cursorRef.current = 0;
      setRenderedLines([]);
      setPersona("—");
      setIntent(0);
      setDecision("— bekliyor");
      setDecisionAccent(false);
    }
    setPlaying(true);

    const stepDelay = 1500;
    const startCursor = cursorRef.current;
    for (let i = startCursor; i < callScript.length; i++) {
      const item = callScript[i];
      const idx = i;
      const tm = setTimeout(
        () => {
          setRenderedLines((prev) => [...prev, item]);
          if (item.signals.persona !== undefined) setPersona(item.signals.persona);
          if (item.signals.intent !== undefined) setIntent(item.signals.intent);
          if (item.signals.decision !== undefined) {
            setDecision(item.signals.decision);
            setDecisionAccent(true);
          }
          cursorRef.current = idx + 1;
          if (cursorRef.current >= callScript.length) {
            const finalTimer = setTimeout(() => setPlaying(false), 1500);
            timersRef.current.push(finalTimer);
          }
        },
        (i - startCursor) * stepDelay + 400,
      );
      timersRef.current.push(tm);
    }
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  useEffect(() => {
    if (linesContainerRef.current) {
      const lines = linesContainerRef.current.querySelectorAll(".call-line");
      lines.forEach((el) => {
        requestAnimationFrame(() => el.classList.add("is-in"));
      });
    }
  }, [renderedLines]);

  const playLabel = playing
    ? "Duraklat"
    : cursorRef.current >= callScript.length
      ? "Tekrar oynat"
      : cursorRef.current > 0
        ? "Devam et"
        : "Aramayı dinle";

  return (
    <div className="bg-black/[0.18] border border-white/10 rounded-[20px] p-7 backdrop-blur-lg">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/70">
            <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" aria-hidden="true">
              <path
                d="M12 13a4 4 0 100-8 4 4 0 000 8zm-7 7c0-3.314 3.134-6 7-6s7 2.686 7 6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <div className="font-mono text-sm text-white">+353 01 ********</div>
            <div className="text-[12.5px] text-white/55 mt-0.5">
              Elizabeth L. · 2022 leadi · 51 ay sessiz
            </div>
          </div>
        </div>
      </header>

      <div
        className={`player-waves ${playing ? "is-active" : ""} flex items-center justify-center gap-[3px] h-[60px] mb-6 px-2`}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div
        ref={linesContainerRef}
        className="flex flex-col gap-2.5 min-h-[200px] mb-5"
      >
        {renderedLines.map((line, i) => (
          <div key={i} className={`call-line call-line--${line.kind}`}>
            <div>
              <div className="call-line__who">{line.who}</div>
              <div className="call-line__time">{fmtClock(line.t)}</div>
            </div>
            <div className="call-line__body">{line.text}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-white/[0.08]">
        <div>
          <div className="text-[11px] uppercase tracking-[0.06em] text-white/50 mb-2">
            Kişilik
          </div>
          <div className="font-mono text-sm text-white">{persona}</div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.06em] text-white/50 mb-2">
            SKOR
          </div>
          <div className="font-mono text-sm text-white flex items-center gap-2">
            <div className="h-1 w-20 bg-white/[0.12] rounded-sm overflow-hidden">
              <span
                className="block h-full bg-accent transition-[width] duration-[600ms] ease-[var(--ease-volina)]"
                style={{ width: `${intent}%` }}
              />
            </div>
            <em className="not-italic text-accent">{intent}</em>
          </div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.06em] text-white/50 mb-2">
            Karar
          </div>
          <div
            className="font-mono text-sm"
            style={{ color: decisionAccent ? "var(--color-accent)" : "white" }}
          >
            {decision}
          </div>
        </div>
      </div>

      <footer className="flex gap-2.5">
        <button
          onClick={play}
          className="inline-flex items-center gap-2.5 font-medium text-sm tracking-[-0.005em] rounded-full px-4 py-2.5 pl-[18px] bg-accent text-white border border-transparent transition-all duration-[160ms] ease-[var(--ease-volina)] hover:-translate-y-px hover:shadow-[0_8px_20px_-8px_rgba(232,98,63,0.55)]"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" aria-hidden="true">
            {playing ? (
              <>
                <rect x="4" y="3" width="3" height="10" fill="currentColor" />
                <rect x="9" y="3" width="3" height="10" fill="currentColor" />
              </>
            ) : (
              <path d="M5 3.5v9l8-4.5-8-4.5z" fill="currentColor" />
            )}
          </svg>
          <span>{playLabel}</span>
        </button>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2.5 font-medium text-sm tracking-[-0.005em] rounded-full px-4 py-2.5 pl-[18px] bg-white/[0.08] text-white border border-white/[0.22] transition-colors duration-[160ms] ease-[var(--ease-volina)] hover:bg-white/[0.14]"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" aria-hidden="true">
            <path
              d="M3 8a5 5 0 105-5M3 4v4h4"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Baştan al</span>
        </button>
      </footer>
    </div>
  );
}
