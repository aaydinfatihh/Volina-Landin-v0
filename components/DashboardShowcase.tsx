"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function DashboardShowcase() {
  const { t } = useLanguage();
  const d = t.dashboard;

  return (
    <section className="pt-24 pb-[140px] bg-white">
      <Reveal className="max-w-[1320px] mx-auto px-8 max-md:px-6">
        <div className="bg-white border border-ink/[0.08] rounded-[20px] overflow-hidden shadow-[0_1px_0_rgba(20,32,31,0.04),0_30px_60px_-30px_rgba(14,77,92,0.18),0_12px_24px_-12px_rgba(14,77,92,0.12)]">
          {/* Chrome */}
          <div className="flex items-center gap-4 px-4 py-3 bg-surface-2 border-b border-ink/[0.06] text-xs text-volina-gray font-mono">
            <div className="flex gap-1.5">
              <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center text-[11.5px] tracking-[0.03em]">
              {d.url}
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr] min-h-[480px]">
            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col px-3.5 py-4 bg-[#FAFBFB] border-r border-ink/[0.06]">
              <div className="flex items-center gap-2 px-2 pb-4 pt-1.5 text-[13px] font-medium text-ink border-b border-ink/[0.06] mb-2.5">
                <Image
                  src="/assets/volina-favicon.png"
                  alt=""
                  width={30}
                  height={22}
                  className="w-[30px] h-[22px] rounded-[5px] object-scale-down"
                />
                <span>{d.clinic}</span>
              </div>
              <nav className="flex flex-col gap-0.5">
                <a className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] bg-surface text-teal cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {d.navPanel}
                </a>
                <a className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] text-volina-gray cursor-pointer">
                  {d.navLeads}
                  <span className="ml-auto font-mono text-[11px] bg-surface px-1.5 py-0.5 rounded text-teal">
                    11,420
                  </span>
                </a>
                <a className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] text-volina-gray cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
                  {d.navCampaigns}
                </a>
                <a className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] text-volina-gray cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
                  {d.navFunnel}
                </a>
                <a className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] text-volina-gray cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
                  {d.navCalls}
                </a>
              </nav>
              <div className="mt-auto p-2.5 bg-white border border-ink/[0.08] rounded-[10px]">
                <div className="text-[10.5px] uppercase tracking-[0.06em] text-volina-gray mb-1.5">
                  {d.activeCampaign}
                </div>
                <div className="text-[12.5px] font-medium text-ink mb-2.5 leading-tight">
                  {d.campaignName}
                </div>
                <div className="h-1 bg-surface rounded-sm overflow-hidden mb-1.5">
                  <span className="block h-full bg-accent" style={{ width: "64%" }} />
                </div>
                <div className="text-[11px] text-volina-gray font-mono">
                  {d.campaignStat}
                </div>
              </div>
            </aside>

            {/* Main */}
            <main className="p-[18px] flex flex-col gap-3.5 bg-white">
              {/* KPI row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {d.kpis.map((k) => (
                  <div
                    key={k.label}
                    className="border border-ink/[0.08] rounded-xl px-3.5 py-3 bg-surface-2"
                  >
                    <div className="text-[11px] uppercase tracking-[0.05em] text-volina-gray mb-2">
                      {k.label}
                    </div>
                    <div className="font-display font-semibold text-[30px] tracking-[-0.04em] leading-none mb-2">
                      {k.value}
                    </div>
                    <div
                      className={`text-[11px] font-mono ${
                        k.trendUp ? "text-[#1F7A56]" : "text-volina-gray"
                      }`}
                    >
                      {k.trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* Split row */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-3.5 flex-1">
                {/* Live card */}
                <div className="border border-ink/[0.08] rounded-xl p-3.5 bg-white flex flex-col">
                  <header className="flex justify-between items-center mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-ink bg-surface px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                      {d.liveTag}
                    </span>
                    <span className="text-[11px] text-volina-gray font-mono">
                      {d.liveMeta}
                    </span>
                  </header>
                  <div className="grid grid-cols-[36px_1fr_auto] gap-2.5 items-center p-2.5 bg-surface-2 rounded-[10px] mb-2.5">
                    <div className="w-9 h-9 rounded-full bg-teal text-white flex items-center justify-center font-semibold text-[13px]">
                      MD
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-ink">
                        {d.liveName}{" "}
                        <span className="text-volina-gray font-normal">
                          {d.liveCountry}
                        </span>
                      </div>
                      <div className="text-[11.5px] text-volina-gray">
                        {d.liveSource}
                      </div>
                    </div>
                    <div className="text-right min-w-[90px]">
                      <div className="w-[90px] h-1 bg-surface rounded-sm overflow-hidden mb-1">
                        <span
                          className="block h-full bg-accent"
                          style={{ width: "92%" }}
                        />
                      </div>
                      <span className="text-[10.5px] font-mono text-ink">
                        {d.liveScoreLabel}
                      </span>
                    </div>
                  </div>
                  <ul className="list-none p-0 m-0 mb-3.5 flex flex-col border-t border-ink/[0.08]">
                    {d.summary.map((s) => (
                      <li
                        key={s.k}
                        className="grid grid-cols-[78px_1fr] gap-3.5 items-baseline py-[9px] border-b border-ink/[0.08]"
                      >
                        <span className="font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-volina-gray">
                          {s.k}
                        </span>
                        <span
                          className={`font-sans text-[13px] leading-[1.45] ${
                            s.accent ? "text-teal font-semibold" : "text-ink"
                          }`}
                        >
                          {s.v}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <footer className="flex gap-1.5 mt-3 flex-wrap">
                    {d.footTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] py-1 px-2 rounded-md bg-surface text-teal font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[11px] py-1 px-2 rounded-md bg-accent text-white font-medium">
                      {d.footAccent}
                    </span>
                  </footer>
                </div>

                {/* Queue card */}
                <div className="border border-ink/[0.08] rounded-xl p-3.5 bg-white flex flex-col">
                  <header className="flex justify-between items-center mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-ink bg-surface px-2.5 py-1 rounded-full">
                      {d.queueTag}
                    </span>
                    <span className="text-[11px] text-volina-gray font-mono">
                      {d.queueMeta}
                    </span>
                  </header>
                  <ul className="list-none m-0 p-0 flex flex-col">
                    {d.queue.map((q, i) => (
                      <li
                        key={q.time}
                        className={`grid grid-cols-[44px_1fr_auto] gap-x-2.5 gap-y-0.5 py-2.5 px-1 text-[12.5px] ${
                          i < d.queue.length - 1 ? "border-b border-ink/[0.06]" : ""
                        }`}
                        style={{
                          gridTemplateAreas: '"time name status" "time meta status"',
                        }}
                      >
                        <span
                          className="font-mono text-volina-gray text-[11.5px] self-center"
                          style={{ gridArea: "time" }}
                        >
                          {q.time}
                        </span>
                        <span
                          className="font-medium text-ink"
                          style={{ gridArea: "name" }}
                        >
                          {q.name}
                        </span>
                        <span
                          className="text-volina-gray text-[11px]"
                          style={{ gridArea: "meta" }}
                        >
                          {q.meta}
                        </span>
                        <span
                          className={`text-[11px] font-mono self-center py-1 px-2 rounded-md ${
                            q.soon
                              ? "text-accent bg-[#FFF0EA]"
                              : "text-volina-gray bg-surface-2"
                          }`}
                          style={{ gridArea: "status" }}
                        >
                          {q.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
