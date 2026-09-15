import React from "react";
import { Reveal } from "@/components/common/Reveal";
import { useSite } from "@/context/SiteContext";
import { stories } from "@/data/mock";

export const Stories = () => {
  const { t } = useSite();
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="section-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{t("stories.eyebrow")}</span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl">
            {t("stories.title")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.09}>
              <figure className="group flex h-full flex-col" data-testid={`story-${i}`}>
                <div className="relative overflow-hidden rounded-t-[5rem] border border-brass/20">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-veil opacity-70" />
                </div>
                <blockquote className="flex flex-1 flex-col pt-6">
                  <p className="font-serif text-xl leading-snug text-foreground">“{s.quote}”</p>
                  <figcaption className="mt-auto pt-5">
                    <span className="block font-serif text-base font-semibold text-brass">{s.name}</span>
                    <span className="meta text-[10px] text-muted-foreground">{s.place}</span>
                  </figcaption>
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
