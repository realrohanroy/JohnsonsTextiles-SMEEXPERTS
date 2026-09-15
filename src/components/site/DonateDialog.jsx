import React, { useMemo, useState } from "react";
import { ShieldCheck, Lock, Check } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useSite } from "@/context/SiteContext";
import { causes } from "@/data/mock";

// auspicious ladder, in INR
const PRESETS = [51, 251, 1100, 5100];

export const DonateDialog = () => {
  const { donateOpen, setDonateOpen, donateCause, addDonation, formatMoney, t } = useSite();
  const [freq, setFreq] = useState("once");
  const [amount, setAmount] = useState(251);
  const [custom, setCustom] = useState("");
  const [causeId, setCauseId] = useState("where");

  React.useEffect(() => {
    if (donateOpen) {
      setCauseId(donateCause?.id || "where");
      setAmount(251); setCustom(""); setFreq("once");
    }
  }, [donateOpen, donateCause]);

  const effectiveInr = useMemo(() => {
    const c = Number(custom);
    return custom !== "" && !Number.isNaN(c) && c > 0 ? c : amount;
  }, [custom, amount]);

  const selectedCause = causes.find((c) => c.id === causeId);
  const unit = selectedCause ? t(selectedCause.unitKey).split("{amount}") : null;

  const handleGive = () => {
    if (!effectiveInr || effectiveInr <= 0) {
      toast.error("Please choose a valid amount");
      return;
    }
    addDonation(effectiveInr);
    setDonateOpen(false);
    toast.success(
      `Seva received — ${formatMoney(effectiveInr)}${freq === "monthly" ? " / month" : ""}`,
      { description: "Prototype only — no real payment was processed." }
    );
  };

  return (
    <Dialog open={donateOpen} onOpenChange={setDonateOpen}>
      <DialogContent className="max-h-[90vh] max-w-md gap-5 overflow-y-auto rounded-none border-brass/35 bg-card">
        <DialogHeader className="text-start">
          <DialogTitle className="font-serif text-3xl font-semibold">{t("donate.title")}</DialogTitle>
          <DialogDescription className="text-xs">{t("donate.desc")}</DialogDescription>
        </DialogHeader>

        <Tabs value={freq} onValueChange={setFreq}>
          <TabsList className="grid w-full grid-cols-2 rounded-none bg-secondary">
            <TabsTrigger value="once" className="rounded-none" data-testid="donate-freq-once">{t("donate.once")}</TabsTrigger>
            <TabsTrigger value="monthly" className="rounded-none" data-testid="donate-freq-monthly">{t("donate.monthly")}</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-2">
          <Label className="meta text-[10px] text-muted-foreground">{t("donate.cause")}</Label>
          <div className="grid max-h-36 gap-1.5 overflow-y-auto pe-1" data-testid="donate-cause-list">
            {[{ id: "where", title: t("donate.where"), sanskrit: "" }, ...causes].map((c) => (
              <button
                key={c.id}
                type="button"
                data-testid={`donate-cause-${c.id}`}
                onClick={() => setCauseId(c.id)}
                className={`flex items-center justify-between gap-2 border px-3 py-2 text-start text-sm transition-colors duration-300 ${
                  causeId === c.id
                    ? "border-primary bg-primary/10 font-semibold text-foreground"
                    : "border-border text-muted-foreground hover:border-brass/50"
                }`}
              >
                <span className="flex items-baseline gap-2">
                  {c.sanskrit && <span className="devanagari text-brass">{c.sanskrit}</span>}
                  <span>{c.title}</span>
                </span>
                {causeId === c.id && <Check className="h-4 w-4 shrink-0 text-primary" />}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <Label className="meta text-[10px] text-muted-foreground">{t("donate.amount")}</Label>
            <span className="meta text-[9px] text-brass/80">{t("donate.ladder")}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                data-testid={`donate-preset-${p}`}
                onClick={() => { setAmount(p); setCustom(""); }}
                className={`numeral border px-2 py-3 text-sm font-bold transition-colors duration-300 ${
                  custom === "" && amount === p
                    ? "border-primary bg-primary text-primary-foreground shadow-saffron"
                    : "border-brass/25 bg-transparent text-foreground hover:border-primary/60"
                }`}
              >
                {formatMoney(p)}
              </button>
            ))}
          </div>
          <Input
            type="number" min="1" inputMode="numeric"
            placeholder={t("donate.custom")}
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="numeral h-11 rounded-none"
            data-testid="donate-custom-amount"
          />
        </div>

        {unit && custom === "" && (
          <p className="flex items-start gap-2 border-s-2 border-brass/60 bg-secondary/60 px-3 py-2.5 text-sm text-foreground" data-testid="donate-impact-line">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>
              {unit[0]}
              <span className="numeral font-bold">{formatMoney(selectedCause.unitInr)}</span>
              {unit[1]}
            </span>
          </p>
        )}

        <Button variant="cta" size="lg" className="w-full rounded-none" onClick={handleGive} data-testid="donate-submit-btn">
          {t("donate.give")} <span className="numeral">{formatMoney(effectiveInr)}{freq === "monthly" ? " / mo" : ""}</span>
        </Button>

        <div className="flex items-center justify-center gap-5 text-muted-foreground">
          <span className="meta flex items-center gap-1.5 text-[9px]"><Lock className="h-3 w-3 text-brass" /> {t("cta.secure")}</span>
          <span className="meta flex items-center gap-1.5 text-[9px]"><ShieldCheck className="h-3 w-3 text-brass" /> 80G · FCRA</span>
        </div>
      </DialogContent>
    </Dialog>
  );
};
