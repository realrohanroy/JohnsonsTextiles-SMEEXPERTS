import React from "react";
import { ShieldCheck, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { useSite } from "@/context/SiteContext";

export const FinalCTA = () => {
  const { t, openDonate } = useSite();
  return (
    <section className="bg-background pb-20 lg:pb-28">
      <div className="section-x">
        <Reveal>
          <div className="jaali grain relative overflow-hidden border border-brass/35 bg-secondary px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
            <span
              aria-hidden="true"
              className="devanagari pointer-events-none absolute -bottom-10 end-4 select-none text-[9rem] leading-none text-brass/[0.07] sm:text-[14rem]"
            >
              {t("cta.sanskrit")}
            </span>

            <div className="relative z-10 max-w-2xl">
              <h2 className="font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
                {t("cta.title")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t("cta.sub")}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button variant="cta" size="xl" className="group rounded-none" onClick={() => openDonate(null)} data-testid="final-cta-donate-btn">
                  {t("cta.button")}
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:ms-6">
                  <span className="meta flex items-center gap-2 text-[10px] text-muted-foreground">
                    <Lock className="h-3 w-3 text-brass" /> {t("cta.secure")}
                  </span>
                  <span className="meta flex items-center gap-2 text-[10px] text-muted-foreground">
                    <ShieldCheck className="h-3 w-3 text-brass" /> 80G receipt in 24 hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
