import React from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { useSite } from "@/context/SiteContext";
import { commitments, trustLogos } from "@/data/mock";

const BACKDROP =
  "https://images.unsplash.com/photo-1632820669774-9ab4f2121927?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600";

export const Commitments = () => {
  const { t, openDonate } = useSite();
  return (
    <section id="trust" className="relative scroll-mt-20 overflow-hidden bg-background py-20 lg:py-28">
      {/* architectural backdrop — Rani ki Vav stepwell geometry, heavily veiled */}
      <img
        src={BACKDROP}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 end-0 h-full w-full object-cover opacity-[0.14] lg:w-2/3"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-veil-s" />

      <div className="section-x relative z-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{t("trust.eyebrow")}</span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            {t("trust.title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t("trust.sub")}</p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.07}>
              <div className="border-t border-brass/30 pt-5" data-testid={`commitment-${i}`}>
                <div className="flex items-baseline gap-3">
                  <span className="numeral text-xs font-bold text-brass">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start gap-6 border border-brass/25 bg-card/70 p-7 backdrop-blur-md lg:flex-row lg:items-center lg:justify-between lg:p-9">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {trustLogos.map((l) => (
                <span key={l} className="meta flex items-center gap-2 text-[10px] text-muted-foreground">
                  <Lock className="h-3 w-3 text-brass" /> {l}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" className="shrink-0 rounded-none" onClick={() => openDonate(null)} data-testid="trust-donate-btn">
              {t("cta.button")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
