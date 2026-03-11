"use client";

import {
  Navigation,
  Hero,
  About,
  Services,
  HowItWorks,
  WhyChooseUs,
  ImpactMetrics,
  Team,
  ComparisonTable,
  FAQ,
  Contact,
  Footer,
} from "@/components";
import { useEffect } from "react";

export default function Home() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <ImpactMetrics />
      <Team />
      <ComparisonTable />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
