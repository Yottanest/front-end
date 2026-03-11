"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-cream via-[#F9F4EB] to-[#F5F0E7]" />

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orb - top left */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full animate-float opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(232, 227, 218, 0.6) 0%, transparent 70%)",
          }}
        />
        {/* Medium orb - bottom right */}
        <div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full animate-float-delayed opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(232, 227, 218, 0.5) 0%, transparent 70%)",
          }}
        />
        {/* Small orb - center right */}
        <div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full animate-float-slow opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(232, 227, 218, 0.4) 0%, transparent 70%)",
          }}
        />
        {/* Tiny accent orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[150px] h-[150px] rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(63, 63, 63, 0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-[100px] h-[100px] rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(63, 63, 63, 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(63, 63, 63, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(63, 63, 63, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            {/* Pre-headline Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-ice-blue/80 backdrop-blur-sm text-royal-blue text-[13px] font-semibold px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="text-lg">🚀</span>
              The Future of Banking Compliance
            </div>

            {/* Main Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-obsidian leading-[1.1] tracking-[-0.02em] mb-6 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                fontFamily: "var(--font-display)",
                transitionDelay: "400ms",
              }}
            >
              AI-Powered Compliance & Credit Decisions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-blue via-azure to-sky">
                Modern Banking
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg lg:text-xl text-slate leading-relaxed mb-8 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              YottaNest transforms KYC/AML compliance and credit evaluation with
              intelligent automation. We don&apos;t just search for data — our AI
              agents act, analyze, and deliver decision-ready reports in
              minutes.{" "}
              <span className="font-semibold text-graphite">
                Reduce costs by 70%
              </span>{" "}
              while strengthening regulatory confidence.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Link href="#contact" className="btn-primary text-base py-4 px-8">
                Request a Demo
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="#how-it-works"
                className="btn-secondary text-base py-4 px-8"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap gap-6 lg:gap-8 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              {[
                { icon: "🇪🇺", text: "EU Compliant" },
                { icon: "🔒", text: "GDPR Ready" },
                { icon: "⚡", text: "90% Faster" },
                { icon: "📊", text: "Audit-Ready" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Visual */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Main visual container */}
            <div className="relative">
              {/* Glow effect behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sky/20 to-azure/20 rounded-3xl blur-3xl" />

              {/* Main card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-sky/20 border border-white/50 p-8 overflow-hidden">
                {/* Dashboard mockup */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-blue to-sky flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
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
                      </div>
                      <div>
                        <p className="font-semibold text-obsidian text-sm">
                          Risk Assessment
                        </p>
                        <p className="text-xs text-slate">Auto-generated</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Low Risk
                    </span>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-4">
                    {[
                      { label: "Identity Verification", value: 100 },
                      { label: "Business Viability", value: 92 },
                      { label: "Sanctions Check", value: 100 },
                      { label: "Adverse Media", value: 85 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-graphite">{item.label}</span>
                          <span className="text-slate">{item.value}%</span>
                        </div>
                        <div className="h-2 bg-mist-gray rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-royal-blue to-sky rounded-full transition-all duration-1000"
                            style={{
                              width: isLoaded ? `${item.value}%` : "0%",
                              transitionDelay: `${1200 + i * 150}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "4", label: "Sources" },
                      { value: "12s", label: "Analysis" },
                      { value: "98%", label: "Confidence" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="text-center p-3 bg-cloud-white rounded-xl"
                      >
                        <p className="text-xl font-bold text-obsidian">
                          {stat.value}
                        </p>
                        <p className="text-xs text-slate">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg shadow-sky/20 p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-obsidian">
                      SAR Draft Ready
                    </p>
                    <p className="text-[10px] text-slate">Just now</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg shadow-sky/20 p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-ice-blue flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-royal-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-obsidian">
                      YOTTANEST 
                    </p>
                    <p className="text-[10px] text-slate"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate font-medium">Scroll to explore</span>
        <svg
          className="w-5 h-5 text-slate"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
