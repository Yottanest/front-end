"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        title: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-ice-blue/40 to-sky/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-br from-sky/20 to-azure/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
            Let&apos;s Talk
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-royal-blue to-sky mx-auto mb-4" />
          <p className="text-base lg:text-lg text-slate max-w-xl mx-auto">
            Ready to Transform Your Compliance Operations?
          </p>
        </div>

        {/* Content Grid */}
        <div
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left Column - Content */}
          <div className={`reveal-left ${contentVisible ? "visible" : ""}`}>
            <h3
              className="text-2xl lg:text-3xl font-bold text-obsidian mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request a Demo
            </h3>

            <p className="text-graphite mb-8 leading-relaxed">
              See how YottaNest can reduce your compliance costs by 90% while
              strengthening regulatory confidence. Our team will walk you
              through a personalized demonstration tailored to your
              institution&apos;s needs.
            </p>

            {/* What to Expect */}
            <div className="mb-10">
              <h4 className="text-sm font-semibold text-obsidian uppercase tracking-wider mb-4">
                What to Expect
              </h4>
              <ul className="space-y-3">
                {[
                  "30-minute personalized demo",
                  "See both NetReport Engine and Smart Docs in action",
                  "Discuss your specific compliance challenges",
                  "Get a custom ROI assessment",
                  "No commitment required",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-graphite">
                    <svg
                      className="w-5 h-5 text-royal-blue flex-shrink-0"
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-obsidian uppercase tracking-wider mb-4">
                Direct Contact
              </h4>

              <a
                href="mailto:contact@yottanest.com"
                className="flex items-center gap-3 text-graphite hover:text-royal-blue transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-ice-blue flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-royal-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>contact@yottanest.com</span>
              </a>

              <div className="flex items-center gap-3 text-graphite">
                <div className="w-10 h-10 rounded-lg bg-ice-blue flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-royal-blue"
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
                </div>
                <span>Sofia, Bulgaria</span>
              </div>

              <div className="flex items-center gap-3 text-graphite">
                <div className="w-10 h-10 rounded-lg bg-ice-blue flex items-center justify-center">
                  <span className="text-lg">🇪🇺</span>
                </div>
                <span>Serving European Banking</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`reveal-right ${contentVisible ? "visible" : ""}`}>
            <div className="card bg-white border-silver p-8 lg:p-10 shadow-xl shadow-sky/10">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-graphite mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-graphite mb-2"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    className="form-input"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-graphite mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="form-input"
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-graphite mb-2"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Your role"
                    className="form-input"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-graphite mb-2"
                  >
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%2364748b%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem]"
                  >
                    <option value="">Select a service...</option>
                    <option value="netreport">
                      NetReport Engine (External Intelligence)
                    </option>
                    <option value="smartdocs">
                      Smart Docs (Document Processing)
                    </option>
                    <option value="both">Both Solutions</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-graphite mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your compliance challenges..."
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full btn-primary justify-center py-4 text-base ${
                    isSubmitted
                      ? "!bg-green-500 !shadow-green-500/25"
                      : isSubmitting
                      ? "opacity-80 cursor-wait"
                      : ""
                  }`}
                >
                  {isSubmitted ? (
                    <>
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
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
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-slate text-center flex items-center justify-center gap-2">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Your information is secure. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
