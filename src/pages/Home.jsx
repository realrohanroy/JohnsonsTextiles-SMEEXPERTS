import React from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TransparencyDashboard } from "@/components/site/TransparencyDashboard";
import { Causes } from "@/components/site/Causes";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Commitments } from "@/components/site/Commitments";
import { Stories } from "@/components/site/Stories";
import { FAQSection } from "@/components/site/FAQSection";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { DonateDialog } from "@/components/site/DonateDialog";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Causes />
      <TransparencyDashboard />
      <HowItWorks />
      <Commitments />
      <Stories />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <DonateDialog />
    </main>
  );
}
