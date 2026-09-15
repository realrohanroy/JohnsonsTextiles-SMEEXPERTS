import React from "react";
import { Reveal } from "@/components/common/Reveal";
import { useSite } from "@/context/SiteContext";
import { howSteps } from "@/data/mock";

export const HowItWorks = () => {
  const { t } = useSite();
  return (
    <section id="how" className="jaali scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="section-x relative z-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{t("how.eyebrow")}</span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl">
            {t("how.title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t("how.sub")}</p>
        </Reveal>

        <div className="mt-14 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {howSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.09}>
              <div className={`plinth h-full pt-6 ${i > 0 ? "lg:ps-10" : ""}`}>
                <span className="numeral block text-3xl font-bold text-primary">{s.n}</span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
