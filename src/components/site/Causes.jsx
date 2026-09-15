import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { useSite } from "@/context/SiteContext";
import { causes } from "@/data/mock";

const SevaCard = ({ cause }) => {
  const { t, formatMoney, openDonate } = useSite();
  const Icon = cause.icon;
  const pct = Math.min(100, Math.round((cause.raised / cause.goal) * 100));
  const unit = t(cause.unitKey).split("{amount}");

  return (
    <div
      className="group flex h-full flex-col border border-brass/20 bg-card transition-colors duration-500 hover:border-brass/50"
      data-testid={`cause-card-${cause.id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={cause.image}
          alt={cause.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-veil opacity-90" />
        <Icon className="absolute start-5 top-5 h-5 w-5 text-brass" />
        {cause.urgent && (
          <span className="meta absolute end-5 top-5 border border-primary/60 bg-primary/15 px-2 py-1 text-[9px] text-primary">
            {t("causes.urgent")}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="devanagari block text-xl text-brass">{cause.sanskrit}</span>
          <h3 className="mt-1 font-serif text-2xl font-semibold leading-tight text-foreground">{cause.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">{cause.blurb}</p>

        <div className="mt-6">
          <div className="h-[3px] w-full bg-muted">
            <div className="h-full bg-primary transition-[width] duration-1000" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="numeral text-sm font-bold text-foreground">
              {formatMoney(cause.raised, { compact: true })}
              <span className="meta ms-1.5 text-[9px] font-medium text-muted-foreground">{t("causes.raised")}</span>
            </span>
            <span className="meta text-[9px] text-muted-foreground">
              <span className="numeral text-xs font-semibold text-brass">{pct}%</span> {t("common.of")}{" "}
              <span className="numeral text-xs">{formatMoney(cause.goal, { compact: true })}</span>
            </span>
          </div>
        </div>

        <p className="mt-5 border-s-2 border-brass/50 ps-3 text-xs leading-relaxed text-muted-foreground" data-testid={`cause-unit-${cause.id}`}>
          {unit[0]}
          <span className="numeral font-bold text-foreground">{formatMoney(cause.unitInr)}</span>
          {unit[1]}
        </p>

        <button
          type="button"
          onClick={() => openDonate(cause)}
          data-testid={`cause-support-${cause.id}`}
          className="mt-auto flex items-center justify-between border-t border-brass/20 pt-5 text-start text-sm font-semibold text-foreground transition-colors duration-300 hover:text-primary"
        >
          <span>{t("causes.support")}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export const Causes = () => {
  const { t, openDonate } = useSite();
  return (
    <section id="causes" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="section-x">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="devanagari block text-lg text-brass">{t("causes.eyebrow")}</span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              {t("causes.title")}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{t("causes.sub")}</p>
          </div>
          <Button
            variant="softOutline"
            className="shrink-0 rounded-none border-brass/30 bg-transparent"
            onClick={() => openDonate(null)}
            data-testid="view-all-causes-btn"
          >
            {t("causes.all")} <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 0.08}>
              <SevaCard cause={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
