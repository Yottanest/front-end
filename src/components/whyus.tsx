"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const comparisons = [
  {
    feature: "Data Collection",
    traditional: "Manual searching across multiple databases",
    yottanest: "Automated AI agents scrape 4+ EU registries",
  },
  {
    feature: "Analysis Time",
    traditional: "Hours to days per case",
    yottanest: "Minutes with intelligent processing",
  },
  {
    feature: "Report Generation",
    traditional: "Copy-paste into Word documents",
    yottanest: "Auto-drafted Risk Memos & SARs",
  },
  {
    feature: "UBO Mapping",
    traditional: "Manual chain tracing",
    yottanest: "Recursive AI mapping with visualizations",
  },
  {
    feature: "Data Sovereignty",
    traditional: "Cloud-based, data leaves EU",
    yottanest: "100% on-premise option, GDPR compliant",
  },
  {
    feature: "Cost per Case",
    traditional: "~€300 per SME onboarding",
    yottanest: "~€30 per SME onboarding",
  },
];

const benefits = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "10x Faster Processing",
    description: "What took hours now takes minutes with AI-powered automation",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Audit-Ready Reports",
    description: "Every claim hyperlinked to sources for regulatory confidence",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Full Data Sovereignty",
    description: "On-premise deployment solves GDPR and Cloud Act concerns",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Human-in-the-Loop",
    description: "AI recommends, humans decide — maintaining full control",
  },
];

export default function ComparisonTable() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: tableRef, isVisible: tableVisible } = useScrollReveal();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal();

  return (
    <section id="comparison" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 reveal ${
            headerVisible ? "visible" : ""
          }`}
        >
          <h2
            className="text-3xl lg:text-[44px] font-bold text-obsidian mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Choose YottaNest?
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-charcoal to-graphite mx-auto mb-6" />
          <p className="text-base lg:text-lg font-semibold text-slate max-w-xl mx-auto tracking-tight">
            See how we compare to traditional compliance workflows
          </p>
        </div>

        {/* Comparison Table */}
        <div
          ref={tableRef}
          className={`mb-16 reveal ${tableVisible ? "visible" : ""}`}
        >
          <div className="overflow-hidden rounded-2xl border border-silver bg-white shadow-lg shadow-slate/10">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-charcoal to-obsidian">
              <div className="p-4 lg:p-6 text-white font-bold text-sm lg:text-base tracking-tight">
                Feature
              </div>
              <div className="p-4 lg:p-6 text-white/70 font-semibold text-sm lg:text-base border-l border-white/10">
                Traditional Approach
              </div>
              <div className="p-4 lg:p-6 text-white font-bold text-sm lg:text-base border-l border-white/10 flex items-center gap-2 tracking-tight">
                <span className="hidden sm:inline">YottaNest</span>
                <span className="sm:hidden">YN</span>
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full font-semibold">
                  Better
                </span>
              </div>
            </div>

            {/* Table Body */}
            {comparisons.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? "bg-white" : "bg-mist-gray/50"
                } ${index < comparisons.length - 1 ? "border-b border-silver" : ""}`}
              >
                <div className="p-4 lg:p-6 font-bold text-obsidian text-sm lg:text-base tracking-tight">
                  {row.feature}
                </div>
                <div className="p-4 lg:p-6 text-slate text-sm border-l border-silver flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-red-400 flex-shrink-0 hidden sm:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-xs lg:text-sm">{row.traditional}</span>
                </div>
                <div className="p-4 lg:p-6 text-graphite text-sm border-l border-silver flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500 flex-shrink-0 hidden sm:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-xs lg:text-sm font-semibold">
                    {row.yottanest}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div
          ref={benefitsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`card bg-white p-6 text-center reveal ${
                benefitsVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-charcoal to-graphite flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-slate/30">
                {benefit.icon}
              </div>
              <h3
                className="text-base font-bold text-obsidian mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {benefit.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}