import React from "react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/common/Reveal";
import { useSite } from "@/context/SiteContext";
import { faqs } from "@/data/mock";

export const FAQSection = () => {
  const { t } = useSite();
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="section-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">{t("faq.eyebrow")}</span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-foreground sm:text-5xl">
            {t("faq.title")}
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-brass/20">
                <AccordionTrigger
                  className="text-start font-serif text-xl font-medium text-foreground hover:text-primary hover:no-underline"
                  data-testid={`faq-trigger-${i}`}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};
