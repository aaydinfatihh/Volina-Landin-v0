"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(
    Math.floor(s % 60),
  ).padStart(2, "0")}`;

export default function CallSimulator() {
  const { t, lang } = useLanguage();
  const call = t.howItWorks.call;
  const callScript = call.script as ScriptLine[];
  const lastT = callScript[callScript.length - 1].t;

  const [playing, setPlaying] = useState(false);
  const [renderedCount, setRenderedCount] = useState(0);
  const [persona, setPersona] = useState("—");
  const [intent, setIntent] = useState(0);
  const [decision, setDecision] = useState(call.decisionWaiting);
  const [decisionAccent, setDecisionAccent] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const linesRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const cursorRef = useRef(0);
  const clockRef = useRef(0);
  const playingRef = useRef(false);
  const audioOkRef = useRef(true);

  const stopRaf = () => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const reset = useCallback(() => {
    stopRaf();
    playingRef.current = false;
    cursorRef.current = 0;
    clockRef.current = 0;
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setPlaying(false);
    setRenderedCount(0);
    setPersona("—");
    setIntent(0);
    setDecision(call.decisionWaiting);
    setDecisionAccent(false);
  }, [call.decisionWaiting]);

  // Reset whenever the language flips (transcript + audio relevance change).
  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => () => stopRaf(), []);

  // Reveal lines whose timestamp has passed; apply the latest signals.
  const syncToTime = useCallback(
    (now: number) => {
      let advanced = false;
      while (
        cursorRef.current < callScript.length &&
        callScript[cursorRef.current].t <= now
      ) {
        const item = callScript[cursorRef.current];
        setPersona(item.persona);
        setIntent(item.intent);
        if (item.decision !== undefined) {
          setDecision(item.decision);
          setDecisionAccent(true);
        }
        cursorRef.current += 1;
        advanced = true;
      }
      if (advanced) setRenderedCount(cursorRef.current);
    },
    [callScript],
  );

  // Auto-scroll the transcript to the bottom as new lines land.
  useEffect(() => {
    const el = linesRef.current;
    if (!el) return;
    const lines = el.querySelectorAll(".call-line");
    lines.forEach((l) => requestAnimationFrame(() => l.classList.add("is-in")));
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [renderedCount]);

  const finish = useCallback(() => {
    stopRaf();
    playingRef.current = false;
    setPlaying(false);
    const audio = audioRef.current;
    if (audio) audio.pause();
  }, []);

  const play = useCallback(() => {
    if (playingRef.current) {
      // pause
      stopRaf();
      playingRef.current = false;
      setPlaying(false);
      audioRef.current?.pause();
      return;
    }

    // restart if finished
    if (cursorRef.current >= callScript.length) {
      cursorRef.current = 0;
      clockRef.current = 0;
      setRenderedCount(0);
      setPersona("—");
      setIntent(0);
      setDecision(call.decisionWaiting);
      setDecisionAccent(false);
      if (audioRef.current) audioRef.current.currentTime = 0;
    }

    playingRef.current = true;
    setPlaying(true);

    const audio = audioRef.current;
    // Only the Turkish recording matches the audio; in English drive a virtual clock.
    if (lang === "tr" && audio) {
      audio.currentTime = clockRef.current;
      const p = audio.play();
      if (p && p.catch) {
        p.catch(() => {
          audioOkRef.current = false;
        });
      }
    }

    let lastTs: number | null = null;
    const tick = (ts: number) => {
      if (!playingRef.current) return;
      const useAudio =
        lang === "tr" && audioOkRef.current && audio && !audio.paused;
      if (useAudio) {
        clockRef.current = audio.currentTime;
      } else if (lastTs != null) {
        clockRef.current += (ts - lastTs) / 1000;
      }
      lastTs = ts;

      syncToTime(clockRef.current);

      if (cursorRef.current >= callScript.length && clockRef.current >= lastT) {
        finish();
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    // Reveal anything due at t=0 immediately.
    syncToTime(clockRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [callScript, call.decisionWaiting, finish, lang, lastT, syncToTime]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => {
      syncToTime(lastT + 1);
      finish();
    };
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [finish, lastT, syncToTime]);

  const playLabel = playing
    ? call.pause
    : cursorRef.current >= callScript.length
      ? call.replay
      : cursorRef.current > 0
        ? call.resume
        : call.listen;

  const renderedLines = callScript.slice(0, renderedCount);

  return (
    <div className="relative overflow-hidden rounded-[20px] p-7 border border-white/[0.28] bg-gradient-to-br from-white/[0.22] to-white/[0.06] backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[0_30px_80px_rgba(0,0,0,0.32),inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_1px_rgba(255,255,255,0.10)]">
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none bg-[linear-gradient(140deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_38%)]"
        aria-hidden="true"
      />
      <div className="relative z-[1]">
        <audio ref={audioRef} src="/assets/call.mp3" preload="metadata" />

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
          ref={linesRef}
          className="call-lines-scroll flex flex-col gap-2.5 h-[260px] overflow-y-auto mb-5 pt-2 pb-2.5"
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
    </div>
  );
}
