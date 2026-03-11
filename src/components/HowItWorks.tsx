"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Gather Intelligence",
    description:
      "Our AI agents collect data from across Europe — government registries, corporate databases, open web sources, and your internal documents. No manual searching. No copy-pasting. No barriers.",
    sources: [
      "EU Corporate Registries (FR, DE, IT, NL)",
      "Government & Official Databases",
      "Open Web Intelligence",
      "Internal Documents (PDFs, Contracts)",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Analyze & Reason",
    description:
      "Intelligent analysis that goes beyond simple matching. Our engines map ownership structures, validate business viability, apply regulatory rules, and detect hidden risks — all automatically.",
    sources: [
      "UBO Mapping & Sanctions Screening",
      "Business Viability Validation",
      "Adverse Media Filtering",
      "Risk Pattern Detection",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Draft & Deliver",
    description:
      "No more starting from scratch. Receive auto-generated Risk Memos, SAR drafts, and Due Diligence reports — complete with citations and audit trails. Human analysts review and approve. Done.",
    sources: [
      "Risk Memos (Internal)",
      "SAR Drafts (Regulatory)",
      "Due Diligence Reports",
      "Credit Evaluations",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();
  const { ref: resultRef, isVisible: resultVisible } = useScrollReveal();

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 lg:mb-14 reveal ${
            headerVisible ? "visible" : ""
          }`}
        >
          <h2
            className="text-3xl lg:text-[40px] font-bold text-obsidian mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How It Works
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-royal-blue to-sky mx-auto mb-4" />
          <p className="text-base lg:text-lg text-slate max-w-xl mx-auto">
            From Data Chaos to Decision Ready in Three Steps
          </p>
        </div>

        {/* Steps Timeline */}
        <div ref={stepsRef} className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[16.67%] right-[16.67%] h-[3px] bg-gradient-to-r from-royal-blue via-sky to-azure z-0 rounded-full" />

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`reveal ${stepsVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Header */}
                <div className="flex flex-col items-center text-center mb-5">
                  {/* Number Circle */}
                  <div className="relative mb-4">
                    <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-royal-blue to-sky flex items-center justify-center shadow-lg shadow-royal-blue/25">
                      <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center">
                        <div className="text-royal-blue">{step.icon}</div>
                      </div>
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-obsidian text-white flex items-center justify-center text-xs font-bold shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg lg:text-xl font-bold text-obsidian"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Card */}
                <div className="card bg-cloud-white border-silver p-5 lg:p-6">
                  <p className="text-graphite mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Sources/Capabilities */}
                  <ul className="space-y-2">
                    {step.sources.map((source, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-royal-blue flex-shrink-0" />
                        <span className="text-slate">{source}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result Callout */}
        <div
          ref={resultRef}
          className={`mt-12 reveal-scale ${resultVisible ? "visible" : ""}`}
        >
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-deep-navy to-royal-blue" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-sky/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-azure/10 blur-3xl" />

            {/* Content */}
            <div className="relative p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">⚡</span>
                <span className="text-2xl lg:text-3xl font-bold text-white">
                  Workflow reduced by 60%
                </span>
              </div>
              <blockquote className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                &ldquo;The AI doesn&apos;t decide — it recommends. We use a
                Human-in-the-Loop model. The analyst still clicks the final
                button. We just get them there{" "}
                <span className="text-white font-semibold">60% faster</span>.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
