import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useSite } from "@/context/SiteContext";
import { CountUp } from "@/components/common/CountUp";
import { Reveal } from "@/components/common/Reveal";
import { impact } from "@/data/mock";

/* A stepped reconciliation ledger — read like a balance sheet, not a dashboard. */
const LedgerRow = ({ index, label, value, pct, offset = 0, tone, bar, emphasis = false, testid }) => (
  <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 py-3.5" data-testid={testid}>
    <span className="meta text-[10px] text-muted-foreground sm:text-[11px]">{label}</span>
    <span className={`numeral text-base sm:text-lg ${emphasis ? "font-semibold" : "font-medium"} ${tone}`}>
      {value}
    </span>
    <div className="col-span-2 h-[3px] w-full">
      <motion.div
        className="h-full"
        style={{ marginInlineStart: `${offset}%` }}
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, delay: 0.15 + index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`h-full w-full ${bar}`} />
      </motion.div>
    </div>
  </div>
);

export const TransparencyDashboard = () => {
  const { t, formatMoney, liveRaised } = useSite();

  const raised = liveRaised;
  const utilized = impact.utilized;
  const inTransit = Math.max(0, raised - utilized);
  const utilizationRate = Math.round((utilized / raised) * 100);

  // keep long currency strings on one line by capping the display size
  const figCap = (str, base) => `clamp(1.4rem, 6vw, ${(base * 9.4 / Math.max(9.4, str.length)).toFixed(2)}rem)`;
  const raisedFontSize = figCap(formatMoney(raised), 3.5);
  const utilizedFontSize = figCap(formatMoney(utilized), 2.9);

  return (
    <section
      id="transparency"
      className="paper scroll-mt-20 border-y border-brass/40 bg-background py-20 text-foreground lg:py-28"
    >
      <div className="section-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Narrative */}
        <Reveal className="lg:col-span-4">
          <span className="meta block text-muted-foreground">
            {t("dash.eyebrow")} — {t("nav.transparency")}
          </span>
          <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl">
            {t("dash.title")}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">{t("dash.sub")}</p>
          <a
            href="#how"
            data-testid="accounting-method-link"
            className="group mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            <span className="font-mono">{t("dash.method")}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <dl className="mt-14 grid gap-3 border-t border-foreground/15 pt-6" data-testid="ledger-disclosures">
            {[
              ["dash.note.currency.k", "dash.note.currency.v"],
              ["dash.note.audit.k", "dash.note.audit.v"],
              ["dash.note.scope.k", "dash.note.scope.v"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-4">
                <dt className="meta w-28 shrink-0 text-[10px] text-muted-foreground/80">{t(k)}</dt>
                <dd className="text-xs leading-relaxed text-muted-foreground">{t(v)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Ledger */}
        <div className="lg:col-span-8 lg:col-start-5">
          <div className="grid border-t border-foreground/15 sm:grid-cols-2">
            <Reveal className="border-b border-foreground/15 pb-9 pt-7 sm:border-b-0 sm:pe-10">
              <div data-testid="funds-raised-block">
                <span className="meta flex items-center gap-2 text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-raised" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-raised" />
                  </span>
                  {t("dash.raised.label")}
                </span>
                <CountUp
                  value={raised}
                  format={(n) => formatMoney(n)}
                  className="numeral mt-6 block whitespace-nowrap font-bold leading-[0.95] text-foreground"
                  style={{ fontSize: raisedFontSize }}
                />
                <p className="meta mt-4 text-[10px] text-muted-foreground/90">{t("dash.raised.note")}</p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="pt-7 sm:border-s sm:border-foreground/15 sm:ps-10">
              <div data-testid="funds-utilized-block">
                <span className="meta block text-muted-foreground">{t("dash.utilized.label")}</span>
                <CountUp
                  value={utilized}
                  format={(n) => formatMoney(n)}
                  className="numeral mt-6 block whitespace-nowrap font-medium leading-[0.95] text-utilized"
                  style={{ fontSize: utilizedFontSize }}
                />
                <p className="meta mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-muted-foreground/90">
                  <span className="border border-foreground/20 px-1.5 py-0.5 text-utilized">
                    {t("dash.utilized.updated")} {impact.utilizedUpdated}
                  </span>
                  {t("dash.utilized.note")}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Stepped reconciliation ledger */}
          <Reveal delay={0.1}>
            <div className="mt-12 border-t border-foreground/15 pt-6" data-testid="reconciliation-ledger">
              <div className="flex items-baseline justify-between">
                <span className="meta text-[10px] text-muted-foreground">{t("dash.ledger.title")}</span>
                <span className="meta text-[10px] text-muted-foreground">
                  {t("dash.util.rate")} <span className="numeral font-semibold text-foreground">{utilizationRate}%</span>
                </span>
              </div>

              <div className="mt-4 divide-y divide-foreground/10">
                <LedgerRow
                  index={0} testid="ledger-row-received"
                  label={t("dash.ledger.received")}
                  value={formatMoney(raised)} pct={100} tone="text-foreground" bar="bg-foreground" emphasis
                />
                <LedgerRow
                  index={1} testid="ledger-row-transit"
                  label={t("dash.ledger.transit")}
                  value={`− ${formatMoney(inTransit)}`}
                  pct={Math.max(2, 100 - utilizationRate)} offset={utilizationRate}
                  tone="text-muted-foreground" bar="bg-foreground/25"
                />
                <LedgerRow
                  index={2} testid="ledger-row-utilized"
                  label={t("dash.ledger.verified")}
                  value={formatMoney(utilized)} pct={utilizationRate} tone="text-utilized" bar="bg-utilized" emphasis
                />
              </div>
            </div>
          </Reveal>

          {/* Secondary metrics — inline band, no cards */}
          <Reveal delay={0.14}>
            <div className="mt-12 grid grid-cols-1 border-t border-foreground/15 pt-7 sm:grid-cols-3">
              {[
                { v: impact.donors, l: t("dash.donors"), f: (n) => Math.round(n).toLocaleString("en-IN") + "+", id: "donors" },
                { v: impact.countries, l: t("dash.countries"), f: (n) => Math.round(n).toString(), id: "countries" },
                { v: impact.projects, l: t("dash.projects"), f: (n) => Math.round(n).toString(), id: "projects" },
              ].map((m, i) => (
                <div
                  key={m.id}
                  data-testid={`ministat-${m.id}`}
                  className={`flex flex-col gap-1.5 py-4 sm:py-0 ${i > 0 ? "border-t border-foreground/10 sm:border-t-0 sm:border-s sm:border-foreground/15 sm:ps-8" : "sm:pe-8"}`}
                >
                  <CountUp value={m.v} format={m.f} className="numeral text-2xl font-semibold text-foreground sm:text-3xl" />
                  <span className="meta text-[10px] text-muted-foreground">{m.l}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
