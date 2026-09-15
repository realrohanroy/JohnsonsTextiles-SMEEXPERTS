import React, { useEffect, useState } from "react";
import { Menu, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader,
} from "@/components/ui/sheet";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useSite } from "@/context/SiteContext";
import { Logo } from "@/components/common/Logo";

const navKeys = [
  { key: "nav.home", href: "#top" },
  { key: "nav.about", href: "#trust" },
  { key: "nav.causes", href: "#causes" },
  { key: "nav.transparency", href: "#transparency" },
  { key: "nav.how", href: "#how" },
  { key: "nav.contact", href: "#contact" },
];

const BrandLockup = () => {
  const { t } = useSite();
  return (
    <a href="#top" className="flex items-center gap-3" data-testid="brand-logo">
      <Logo className="h-9 w-9 text-primary lg:h-11 lg:w-11" />
      <span className="flex flex-col items-start leading-none">
        <span className="font-serif text-xl font-semibold uppercase tracking-[0.14em] text-foreground lg:text-2xl">
          {t("brand.name")}
        </span>
        <span className="mt-1 flex w-full items-center gap-2">
          <span className="h-px flex-1 bg-brass/50" />
          <span className="meta text-[8px] text-brass">{t("brand.sub")}</span>
          <span className="h-px flex-1 bg-brass/50" />
        </span>
        <span className="devanagari mt-1 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
          {t("brand.tagline")}
        </span>
      </span>
    </a>
  );
};

export const Navbar = () => {
  const { t, currency, setCurrency, currencies, openDonate } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // close the mobile sheet first, then open the donate dialog (avoids nested modal locks)
  const donateFromSheet = () => {
    setMenuOpen(false);
    setTimeout(() => openDonate(null), 280);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "paper border-b border-brass/25 bg-background/92 backdrop-blur-xl" : "paper bg-transparent"
      }`}
    >
      <nav className="section-x flex h-20 items-center justify-between gap-4 lg:h-24">
        <BrandLockup />

        <div className="hidden items-center gap-7 xl:flex">
          {navKeys.map((n) => (
            <a
              key={n.key}
              href={n.href}
              data-testid={`nav-link-${n.href.replace("#", "")}`}
              className="relative text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-primary after:absolute after:-bottom-1.5 after:start-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(n.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger
              className="hidden h-9 w-[92px] rounded-full border-brass/35 bg-transparent text-xs font-semibold text-foreground sm:flex"
              data-testid="currency-select-trigger"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((c) => (
                <SelectItem key={c} value={c} className="text-sm" data-testid={`currency-option-${c}`}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="cta"
            className="hidden rounded-full px-6 sm:inline-flex"
            onClick={() => openDonate(null)}
            data-testid="nav-donate-btn"
          >
            <Heart className="h-4 w-4" />
            {t("nav.donate")}
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="softOutline" size="icon" className="rounded-full border-brass/35 xl:hidden" aria-label={t("nav.menu")} data-testid="mobile-menu-btn">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="paper w-[86%] max-w-sm border-brass/25 bg-background text-foreground">
              <SheetHeader className="text-start">
                <SheetTitle className="flex items-center gap-2.5">
                  <Logo className="h-8 w-8 text-primary" />
                  <span className="font-serif text-lg uppercase tracking-[0.14em] text-foreground">{t("brand.name")}</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col">
                {navKeys.map((n) => (
                  <a
                    key={n.key}
                    href={n.href}
                    className="border-b border-border/70 py-3.5 text-base font-medium text-foreground transition-colors hover:text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(n.key)}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="h-10 w-full rounded-full" data-testid="mobile-currency-trigger"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {currencies.map((c) => <SelectItem key={c} value={c} data-testid={`mobile-currency-option-${c}`}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Button variant="cta" size="lg" className="mt-6 w-full rounded-full" onClick={donateFromSheet} data-testid="mobile-donate-btn">
                <Heart className="h-4 w-4" />
                {t("nav.donate")}
              </Button>
              <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" /> {t("cta.secure")}
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
