
"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const factCards = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-royal-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "FOUNDED",
    value: "2025, Sofia, Bulgaria",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-royal-blue"
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
    label: "MISSION",
    value: "Automate Compliance, Empower Decisions",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-royal-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "MARKET",
    value: "European Banking & Financial Institutions",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-royal-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    label: "IMPACT",
    value: "90% Cost Reduction per Case",
  },
];

export default function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();
  const { ref: storyRef, isVisible: storyVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();
  const { ref: visionRef, isVisible: visionVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-12 lg:mb-14 reveal ${
            sectionVisible ? "visible" : ""
          }`}
        >
          <h2
            className="text-3xl lg:text-[40px] font-bold text-obsidian mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About YottaNest
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-royal-blue to-sky mx-auto mb-4" />
          <p className="text-base lg:text-lg text-slate max-w-xl mx-auto">
            Engineering the Architecture of Trust: Autonomous Intelligence for Complex Entity Resolution.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-12">
          {/* Left Column - Our Story */}
          <div
            ref={storyRef}
            className={`reveal-left ${storyVisible ? "visible" : ""}`}
          >
            <h3
              className="text-xl lg:text-2xl font-semibold text-obsidian mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We Saw a Complexity Wall. We Engineered the Breakthrough.
            </h3>

            <div className="space-y-6 text-graphite leading-relaxed text-[15px]">
              <p>
                Founded in Bulgaria in 2025, YottaNest emerged at the intersection of a global regulatory
                &ldquo;tsunami&rdquo; and a critical inflection point in AI maturity. We recognized a fundamental failure
                in how organizations verify the world around them: while business entities have become global
                and layered, the workflows used to vet them remained trapped in a 20th-century
                &ldquo;scavenger hunt&rdquo; for data.
              </p>

              <p>
                Our answer:{" "}
                <span className="font-semibold text-royal-blue">
                  Agentic Knowledge Extraction (AKE).
                </span>{" "}
                Our engine deploys autonomous AI agents that don&apos;t just search—they reason.
                By navigating jurisdictional nuances and resolving contradictions through
                <span className="italic"> autonomous critic loops</span>, we transform fragmented
                information into <span className="font-semibold text-obsidian">verified, auditable intelligence</span>.
              </p>

              <p>
                Today, we help forward-thinking organizations turn the &ldquo;Complexity Wall&rdquo; into a
                competitive advantage. By providing a transparent
                <span className="font-semibold text-obsidian"> Chain of Thought audit trail</span>,
                YottaNest accelerates speed-to-revenue while building unshakeable regulatory confidence.
              </p>
            </div>
          </div>

          {/* Right Column - Key Facts */}
          <div
            ref={cardsRef}
            className={`grid grid-cols-2 gap-4 lg:gap-6 stagger-children ${
              cardsVisible ? "" : ""
            }`}
          >
            {factCards.map((card, index) => (
              <div
                key={index}
                className={`card bg-mist-gray border-silver p-6 lg:p-7 reveal ${
                  cardsVisible ? "visible" : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{card.icon}</div>
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  {card.label}
                </p>
                <p
                  className="text-base lg:text-lg font-semibold text-obsidian"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div
          ref={visionRef}
          className={`relative reveal-scale ${visionVisible ? "visible" : ""}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ice-blue/50 to-sky/20 rounded-2xl" />
          <div className="relative bg-white/50 backdrop-blur-sm border border-ice-blue/50 rounded-2xl p-6 lg:p-8 text-center">
            <h4
              className="text-sm font-semibold text-royal-blue uppercase tracking-wider mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Vision
            </h4>
            <blockquote className="text-lg lg:text-xl text-graphite leading-relaxed max-w-3xl mx-auto">
              <span className="text-3xl text-royal-blue/30 font-serif">&ldquo;</span>
              To bridge the Complexity Wall by empowering Risk Teams with
              autonomous reasoning and deep traceability—transforming fragmented data into
              definitive, regulator-ready intelligence that accelerates growth..
              <span className="text-3xl text-royal-blue/30 font-serif">&rdquo;</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
