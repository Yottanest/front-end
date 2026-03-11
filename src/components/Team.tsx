"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const teamMembers = [
  {
    name: "Ivan Todorov.",
    title: "CEO & Co-Founder",
    bio: "Telecommunications engineer with a deep background in network architecture, Fortinet systems, and enterprise IT. Ivan witnessed firsthand how rigid infrastructure and outdated processes slowed down compliance — and co-founded YottaNest to bring agility, intelligence, and automation to modern banking.",
    linkedin: "https://www.linkedin.com/in/ivanmt/",
    initials: "IV",
    image: "/images/team/ivan.jpg", // Add image path when available
  },
  {
    name: "Majd Zarai",
    title: "CTO & Co-Founder",
    bio: "AI systems engineer specializing in machine learning and intelligent automation. Majd leads the technical vision at YottaNest, designing agentic compliance engines that analyze, reason, and accelerate decision-making across European financial institutions.",
    linkedin: "https://www.linkedin.com/in/majd-zarai-b08050249/",
    initials: "MZ",
    image: "/images/team/majd.jpg",
  },
];

export default function Team() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="team" className="py-20 lg:py-24 bg-cloud-white">
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
            Our Team
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-charcoal to-graphite mx-auto mb-5" />
          <p className="text-base lg:text-lg font-semibold text-slate max-w-xl mx-auto tracking-tight">
            The Minds Behind the Mission
          </p>
          <p className="text-sm lg:text-base text-graphite max-w-2xl mx-auto mt-3 leading-relaxed">
            A diverse team of compliance experts, AI engineers, and banking veterans —
            united by a shared vision to transform European financial services.
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={gridRef}
          className="flex flex-col md:flex-row justify-center gap-8 lg:gap-16"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`card bg-white p-8 lg:p-10 text-center reveal flex-1 max-w-md flex flex-col ${
                gridVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-6 inline-block">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-ice-blue"
                  />
                ) : (
                  <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-cloud-white to-mist-gray flex items-center justify-center border-4 border-silver">
                    <span
                      className="text-3xl lg:text-4xl font-bold text-charcoal"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                )}
                {/* Decorative ring - properly sized and centered */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] lg:w-[156px] lg:h-[156px] rounded-full border-2 border-dashed border-slate/40 animate-spin-slow pointer-events-none" />
              </div>

              {/* Name */}
              <h3
                className="text-xl lg:text-[22px] font-bold text-obsidian mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {member.name}
              </h3>

              {/* Title */}
              <p className="text-sm font-bold text-charcoal uppercase tracking-widest mb-6">
                {member.title}
              </p>

              {/* Bio */}
              <p className="text-sm text-graphite leading-relaxed mb-6 px-2 flex-1">
                {member.bio}
              </p>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-charcoal hover:bg-obsidian transition-all px-6 py-2.5 rounded-full w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <div
          className={`mt-16 text-center reveal ${gridVisible ? "visible" : ""}`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-5 shadow-lg shadow-slate/10 border border-silver">
            <div className="text-left">
              <p className="font-bold text-obsidian">
                Want to join our mission?
              </p>
              <p className="text-sm text-slate">
                We&apos;re always looking for talented people.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary text-sm py-3 px-5"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}