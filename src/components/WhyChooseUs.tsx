"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

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

export default function WhyChooseUs() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal();

  return (
    <section id="why-choose-us" className="py-20 lg:py-24 bg-cloud-white">
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
            Four key advantages that set us apart
          </p>
          <p className="text-sm lg:text-base text-graphite max-w-2xl mx-auto">
            Our AI-powered approach delivers faster, more accurate compliance outcomes while maintaining full control.
          </p>
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
