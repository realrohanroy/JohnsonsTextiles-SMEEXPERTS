import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { strings } from "@/i18n/translations";
import { impact } from "@/data/mock";

const SiteContext = createContext(null);

// base currency is INR; rates convert 1 INR -> target
const RATES = { INR: 1, USD: 1 / 86.5, GBP: 1 / 110, EUR: 1 / 94, AED: 1 / 23.5, AUD: 1 / 57, CAD: 1 / 63, SGD: 1 / 64 };
const SYMBOLS = { INR: "₹", USD: "$", GBP: "£", EUR: "€", AED: "AED", AUD: "A$", CAD: "C$", SGD: "S$" };

export const SiteProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => localStorage.getItem("sept.ccy") || "INR");
  const [extraRaised, setExtraRaised] = useState(() => Number(localStorage.getItem("sept.extra") || 0));
  const [donateOpen, setDonateOpen] = useState(false);
  const [donateCause, setDonateCause] = useState(null);
  const [liveTick, setLiveTick] = useState(0);

  useEffect(() => {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  }, []);

  useEffect(() => localStorage.setItem("sept.ccy", currency), [currency]);
  useEffect(() => localStorage.setItem("sept.extra", String(extraRaised)), [extraRaised]);

  // single source of truth for the near-real-time raised figure
  useEffect(() => {
    const id = setInterval(() => setLiveTick((v) => v + Math.floor(400 + Math.random() * 2600)), 4200);
    return () => clearInterval(id);
  }, []);
  const liveRaised = impact.raisedBase + extraRaised + liveTick;

  const t = useCallback((key) => strings[key] ?? key, []);

  const formatMoney = useCallback(
    (inr, { compact = false, decimals = 0 } = {}) => {
      const value = inr * RATES[currency];
      const sym = SYMBOLS[currency];
      const locale = currency === "INR" ? "en-IN" : "en-US";
      let num;
      if (compact && value >= 1000) {
        if (currency === "INR") {
          num = value >= 1e7 ? (value / 1e7).toFixed(2) + " Cr" : (value / 1e5).toFixed(1) + " L";
        } else {
          num = value >= 1e6 ? (value / 1e6).toFixed(2) + "M" : (value / 1000).toFixed(0) + "K";
        }
      } else {
        num = new Intl.NumberFormat(locale, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(value);
      }
      return currency === "AED" ? `${sym} ${num}` : `${sym}${num}`;
    },
    [currency]
  );

  const addDonation = useCallback((inrAmount) => {
    setExtraRaised((prev) => prev + inrAmount);
  }, []);

  const openDonate = useCallback((cause = null) => {
    setDonateCause(cause);
    setDonateOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      t,
      currency, setCurrency, currencies: Object.keys(RATES),
      formatMoney, extraRaised, addDonation, liveRaised,
      donateOpen, setDonateOpen, donateCause, openDonate,
    }),
    [t, currency, formatMoney, extraRaised, addDonation, liveRaised, donateOpen, donateCause, openDonate]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export const useSite = () => {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
};
