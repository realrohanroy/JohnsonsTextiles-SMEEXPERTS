import React from "react";
import { useSite } from "@/context/SiteContext";
import { Logo } from "@/components/common/Logo";

const cols = [
  { title: "Sevas", links: ["Nadi Seva", "Mandir Seva", "Gau Seva", "Anna Daan", "Vidya Daan", "Vriddha Seva"] },
  { title: "The trust", links: ["About September", "Trustees", "Annual audit", "Quarterly reports", "Field partners"] },
  { title: "Support", links: ["Contact", "80G & receipts", "Refund policy", "Grievance channel", "NRI giving guide"] },
];

export const Footer = () => {
  const { t } = useSite();
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-brass/30 bg-background">
      <div className="section-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-9 text-primary" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-semibold text-foreground">September</span>
                <span className="devanagari text-[11px] text-brass/80">सेवा · सत्य · लेखा</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
            <p className="meta mt-5 text-[10px] leading-relaxed text-muted-foreground/80">
              {t("footer.reg")}
              <br />
              <span className="numeral">Reg. No. SEP-2026-0417 · 80G: AAATS4192KF2026</span>
              <br />
              Ahmedabad, Gujarat, India
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="meta text-[10px] text-brass">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-foreground/75 transition-colors duration-300 hover:text-primary">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="brass-rule mt-14" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© <span className="numeral">{new Date().getFullYear()}</span> September Seva Trust. {t("footer.rights")}</span>
          <span className="flex items-center gap-5">
            <a href="#top" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#top" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#top" className="transition-colors hover:text-foreground">FCRA disclosure</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
