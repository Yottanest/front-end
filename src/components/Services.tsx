"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    title: "NetReport Engine",
    subtitle: '"The Hunter" — External Intelligence',
    description:
      "Automated intelligence gathering that scrapes the \"Hard 4\" EU registries and open web to validate business viability — not just identity. Our AI agents bypass barriers, analyze data, and auto-draft Risk Memos and Suspicious Activity Reports.",
    capabilities: [
      "Scrapes EU registries (France, Germany, Italy, Netherlands) + open web",
      "Validates business viability and economic legitimacy",
      "Recursively maps Ultimate Beneficial Owners (UBOs)",
      "Detects hidden sanctions connections",
      "Auto-drafts Risk Memos and SAR reports",
      "Provides hyperlinked citations for every claim",
    ],
    metric: "90% reduction in time-to-report",
    quadrants: [
      { title: "Network Graph", desc: "Map UBO chains" },
      { title: "Market Analysis", desc: "Validate viability" },
      { title: "Adverse Media", desc: "AI-filtered news" },
      { title: "Risk Score", desc: "Go/No-Go decision" },
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Smart Docs",
    subtitle: '"The Analyst" — Internal Intelligence',
    description:
      "Sovereign Intelligent Document Processing for your most sensitive data. Upload contracts, invoices, balance sheets, and identity documents — then interact intelligently with your data. Hosted entirely within your infrastructure using open-source models.",
    capabilities: [
      "Processes invoices, contracts, balance sheets, IDs",
      "Handles multiple formats and languages",
      '"Chat with your data" natural language interface',
      "Extracts and structures information automatically",
      "100% on-premise deployment option",
      "Zero data leaves your infrastructure",
    ],
    metric: "100% Data Sovereignty — GDPR & Cloud Act Compliant",
    privacy: true,
  },
];

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 lg:py-24 bg-cloud-white">
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
            Our Services
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-charcoal to-graphite mx-auto mb-4" />
          <p className="text-base lg:text-lg text-slate max-w-xl mx-auto mb-3">
            Two Powerful Engines. One Unified Mission.
          </p>
          <p className="text-sm lg:text-base text-graphite max-w-2xl mx-auto">
            We replace the &ldquo;Passive Search&rdquo; model with an &ldquo;Active Decision
            Engine&rdquo; — AI that analyzes, reasons, and delivers.
          </p>
        </div>

        {/* Service Cards */}
        <div
          ref={cardsRef}
          className="grid lg:grid-cols-2 gap-8 stagger-children"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`card bg-white p-8 lg:p-10 reveal flex flex-col ${
                cardsVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-charcoal to-graphite flex items-center justify-center mb-6 shadow-lg shadow-slate/30">
                {service.icon}
              </div>

              {/* Title & Subtitle */}
              <h3
                className="text-2xl lg:text-[28px] font-bold text-obsidian mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <p className="text-base font-medium text-charcoal mb-5">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-graphite mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Capabilities */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-obsidian uppercase tracking-wider mb-3">
                  Key Capabilities
                </h4>
                <ul className="space-y-2">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-graphite">
                      <svg
                        className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5"
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
                      <span className="text-sm">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4-Quadrant Analysis (NetReport only) */}
              {service.quadrants && (
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-semibold text-obsidian uppercase tracking-wider mb-3">
                    The 4-Quadrant Analysis
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.quadrants.map((q, i) => (
                      <div
                        key={i}
                        className="bg-mist-gray rounded-lg p-3 text-center border border-silver"
                      >
                        <p className="text-xs font-semibold text-obsidian">
                          {q.title}
                        </p>
                        <p className="text-[11px] text-slate">{q.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Privacy Shield (Smart Docs only) */}
              {service.privacy && (
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-semibold text-obsidian uppercase tracking-wider mb-3">
                    Data Sovereignty
                  </h4>
                  <div className="bg-gradient-to-br from-ice-blue/50 to-mist-gray rounded-xl p-4 border border-ice-blue/50">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">🛡️</span>
                      <div>
                        <p className="font-semibold text-obsidian text-sm mb-1">
                          Full Data Sovereignty
                        </p>
                        <p className="text-xs text-graphite leading-relaxed">
                          No client data ever leaves your bank&apos;s infrastructure.
                          Solving the GDPR/US Cloud Act fears that block US competitors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Metric */}
              <div className="bg-gradient-to-r from-charcoal to-obsidian rounded-xl p-4 text-white mt-auto">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 flex-shrink-0"
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
                  <span className="font-semibold text-sm">{service.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
