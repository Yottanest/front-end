"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "How does YottaNest ensure data privacy and GDPR compliance?",
    answer:
      "YottaNest offers 100% on-premise deployment options, meaning your sensitive data never leaves your infrastructure. Our Smart Docs engine uses open-source models hosted entirely within your environment. This solves the GDPR and US Cloud Act concerns that often block adoption of US-based compliance tools.",
  },
  
  {
    question: "Does the AI make final compliance decisions?",
    answer:
      "No. YottaNest operates on a Human-in-the-Loop model. Our AI agents gather data, analyze patterns, and draft reports with recommendations — but the final decision always rests with your compliance officers. We accelerate the process; you maintain control.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Implementation typically takes 2-4 weeks depending on your infrastructure and integration requirements. Our team provides full onboarding support, including API integration, staff training, and custom workflow configuration.",
  },
  {
    question: "What formats does Smart Docs support?",
    answer:
      "Smart Docs processes a wide range of document types including PDFs, Word documents, scanned images (with OCR), contracts, invoices, balance sheets, and identity documents. It handles multiple languages and can extract structured data from unstructured documents.",
  },
  {
    question: "How do you handle ongoing monitoring and perpetual KYC?",
    answer:
      "YottaNest supports continuous monitoring requirements. Once an entity is onboarded, our system can automatically track changes in registries, adverse media mentions, and sanctions lists — alerting your team to relevant updates that may affect risk assessments.",
  },
  
  {
    question: "Can YottaNest integrate with our existing systems?",
    answer:
      "Yes. YottaNest provides robust APIs for integration with your existing case management, CRM, and core banking systems. We support standard data formats and can work with your IT team to ensure seamless workflow integration.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <div
      className={`border border-silver rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? "bg-white shadow-lg shadow-slate/10" : "bg-white hover:bg-cloud-white"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
      >
        <span
          className="font-semibold text-obsidian pr-4 text-sm lg:text-base"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-charcoal text-white rotate-180"
              : "bg-mist-gray text-slate"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-5 lg:px-6 pb-5 lg:pb-6">
          <p className="text-slate text-sm lg:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
            Frequently Asked Questions
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-charcoal to-graphite mx-auto mb-6" />
          <p className="text-base lg:text-lg font-semibold text-slate max-w-xl mx-auto tracking-tight">
            Everything you need to know about YottaNest
          </p>
        </div>

        {/* FAQ Items */}
        <div
          ref={faqRef}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`reveal ${faqVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div
          className={`mt-12 text-center reveal ${faqVisible ? "visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-graphite mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="btn-primary inline-flex"
          >
            Get in Touch
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </div>
    </section>
  );
}