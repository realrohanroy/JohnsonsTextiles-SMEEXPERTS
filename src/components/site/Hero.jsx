import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, ScrollText, BadgeCheck, ReceiptText, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSite } from "@/context/SiteContext";
import { CountUp } from "@/components/common/CountUp";
import { Logo } from "@/components/common/Logo";
import { causes } from "@/data/mock";

const ease = [0.16, 1, 0.3, 1];
const PETAL_SHAPE = "50% 50% 50% 50% / 64% 64% 36% 36%";

/* Lotus of photographs — six petals radiating from a brass emblem.
   Positioning uses inline transforms, so entrance motion animates opacity only. */
const PetalBloom = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[540px]">
    {causes.map((c, i) => {
      const angle = i * 60;
      return (
        <motion.div
          key={c.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease }}
          className="absolute overflow-hidden border border-brass/35"
          style={{
            left: "50%",
            top: "50%",
            width: "29%",
            height: "48%",
            borderRadius: PETAL_SHAPE,
            transformOrigin: "50% 100%",
            transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-7%)`,
          }}
        >
          <img
            src={c.image}
            alt={c.title}
            loading={i < 3 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
            style={{ transform: `rotate(${-angle}deg) scale(1.5)` }}
          />
          <span className="pointer-events-none absolute inset-0 bg-[hsl(24_60%_18%_/_0.1)]" />
        </motion.div>
      );
    })}

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7, ease }}
      className="absolute flex items-center justify-center rounded-full border border-brass/50 bg-background shadow-elegant"
      style={{ left: "50%", top: "50%", width: "26%", height: "26%", transform: "translate(-50%, -50%)" }}
    >
      <Logo className="h-1/2 w-1/2 text-primary" />
    </motion.div>
  </div>
);

export const Hero = () => {
  const { t, openDonate, formatMoney, liveRaised } = useSite();

  return (
    <section id="top" className="paper jaali relative overflow-hidden border-b border-brass/40 bg-background pt-24 text-foreground lg:pt-28">
      <div className="section-x grid items-center gap-14 pb-16 pt-8 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:pb-24">
        {/* Copy */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-brass/60" />
            <span className="devanagari text-sm text-brass sm:text-base">{t("hero.mala")}</span>
            <span className="h-px w-8 bg-brass/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="mt-6 font-serif text-5xl font-semibold leading-[1.0] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
          >
            <span className="block text-foreground">{t("hero.title.a")}</span>
            <span className="block text-primary">{t("hero.title.b")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease }}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button variant="cta" size="lg" className="rounded-full px-7" onClick={() => openDonate(null)} data-testid="hero-donate-btn">
              <Heart className="h-4 w-4" />
              {t("hero.cta")}
            </Button>
            <Button variant="softOutline" size="lg" className="group rounded-full border-brass/40 bg-transparent px-7" asChild>
              <a href="#causes" data-testid="hero-causes-link">
                {t("hero.secondary")}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* live raised strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease }}
            className="mt-9 flex w-fit items-center gap-4 border-s-2 border-primary bg-card px-5 py-3"
            data-testid="hero-live-plaque"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="meta whitespace-nowrap text-[9px] text-muted-foreground">
              {t("dash.raised.label")} · {t("dash.raised.live")}
            </span>
            <CountUp
              value={liveRaised}
              format={(n) => formatMoney(n)}
              className="numeral whitespace-nowrap text-2xl font-bold text-foreground"
            />
          </motion.div>

          {/* four assurances */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4"
            data-testid="hero-assurances"
          >
            {[
              { icon: ScrollText, k: "hero.pill.1" },
              { icon: BadgeCheck, k: "hero.pill.2" },
              { icon: ReceiptText, k: "hero.pill.3" },
              { icon: CalendarCheck, k: "hero.pill.4" },
            ].map(({ icon: Icon, k }) => (
              <div key={k} className="flex flex-col gap-2.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/40">
                  <Icon className="h-5 w-5 text-brass" strokeWidth={1.6} />
                </span>
                <span className="max-w-[7rem] text-xs leading-snug text-muted-foreground">{t(k)}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bloom + shloka */}
        <div className="relative">
          <PetalBloom />

          <motion.figure
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.65, ease }}
            className="mx-auto mt-8 max-w-xs text-center lg:absolute lg:-end-2 lg:top-0 lg:mt-0 lg:max-w-[12rem] lg:text-start xl:-end-8"
            data-testid="hero-shloka"
          >
            <span className="font-serif text-4xl leading-none text-brass/50">“</span>
            <blockquote className="devanagari mt-1 text-base leading-relaxed text-foreground">
              {t("hero.shloka")}
            </blockquote>
            <figcaption className="devanagari mt-2 text-xs text-brass">{t("hero.shloka.by")}</figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};
