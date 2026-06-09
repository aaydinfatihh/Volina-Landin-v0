"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

type ScriptLine = {
  who: string;
  kind: string;
  t: number;
  intent: number;
  persona: string;
  decision?: string;
  text: string;
};

const fmtClock = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export default function CallSimulator() {
  const { t, lang } = useLanguage();
  const call = t.howItWorks.call;
  const callScript = call.script as ScriptLine[];

  const [playing, setPlaying] = useState(false);
  const [renderedCount, setRenderedCount] = useState(0);
  const [persona, setPersona] = useState("—");
  const [intent, setIntent] = useState(0);
  const [decision, setDecision] = useState(call.decisionWaiting);
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
    setRenderedCount(0);
    setPersona("—");
    setIntent(0);
    setDecision(call.decisionWaiting);
    setDecisionAccent(false);
  };

  const stop = () => {
    clearTimers();
    setPlaying(false);
  };

  // Reset whenever the language changes so transcript stays consistent.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const play = () => {
    if (playing) {
      stop();
      return;
    }
    if (cursorRef.current >= callScript.length) {
      cursorRef.current = 0;
      setRenderedCount(0);
      setPersona("—");
      setIntent(0);
      setDecision(call.decisionWaiting);
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
          setRenderedCount(idx + 1);
          if (item.persona !== undefined) setPersona(item.persona);
          if (item.intent !== undefined) setIntent(item.intent);
          if (item.decision !== undefined) {
            setDecision(item.decision);
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
  }, [renderedCount]);

  const playLabel = playing
    ? call.pause
    : cursorRef.current >= callScript.length
      ? call.replay
      : cursorRef.current > 0
        ? call.resume
        : call.listen;

  const renderedLines = callScript.slice(0, renderedCount);

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
            <div className="font-mono text-sm text-white">{call.phone}</div>
            <div className="text-[12.5px] text-white/55 mt-0.5">{call.caller}</div>
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
              <div className="call-line__who">
                {line.kind === "sys" ? call.whoSystem : line.who}
              </div>
              <div className="call-line__time">{fmtClock(line.t)}</div>
            </div>
            <div className="call-line__body">{line.text}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-white/[0.08]">
        <div>
          <div className="text-[11px] uppercase tracking-[0.06em] text-white/50 mb-2">
            {call.personaLabel}
          </div>
          <div className="font-mono text-sm text-white">{persona}</div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.06em] text-white/50 mb-2">
            {call.scoreLabel}
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
            {call.decisionLabel}
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
          <span>{call.restart}</span>
        </button>
      </footer>
    </div>
  );
}
