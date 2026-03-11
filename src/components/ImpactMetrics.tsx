"use client";

import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

interface MetricProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  isVisible: boolean;
  isSpecial?: boolean;
  specialContent?: string;
}

function MetricCard({
  value,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  isVisible,
  isSpecial = false,
  specialContent = "",
}: MetricProps) {
  const count = useCountUp(value, 2000, isVisible);

  if (isSpecial && specialContent) {
    return (
      <div className="text-center">
        <div className="mb-3">
          <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">
            {specialContent}
          </span>
        </div>
        <p className="text-lg font-semibold text-white mb-2">{label}</p>
        {sublabel && (
          <p className="text-sm text-gray-300/80 mt-1">{sublabel}</p>
        )}
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="mb-3">
        <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">
          {prefix}
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-lg font-semibold text-white mb-2">{label}</p>
      {sublabel && (
        <p className="text-sm text-gray-300/80 mt-1">{sublabel}</p>
      )}
    </div>
  );
}

const metrics = [
  // Commented out - uncomment to restore
  // {
  //   value: 90,
  //   prefix: "€",
  //   suffix: "",
  //   isSpecial: true,
  //   specialContent: "€300 → €30",
  //   label: "Cost Reduction",
  //   sublabel: "Per SME Onboarding",
  // },
  {
    value: 60 ,
    suffix: "%",
    label: "Time Saved",
    sublabel: "Reduction in Processing",
  },
  {
    value: 90,
    suffix: "",
    isSpecial: true,
    specialContent: "30% → 60%",
    label: "Analyst Focus",
    sublabel: "Time on Actual Decisions",
  },
  {
    value: 2,
    suffix: "+",
    label: "EU Registries",
    sublabel: "Pre-built Connectors",
  },
];

export default function ImpactMetrics() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const [titleAnimation, setTitleAnimation] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setGradientPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Trigger title animation after a delay
    const timer = setTimeout(() => {
      setTitleAnimation(true);
    }, 300);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(30, 30, 30, 0.8) 0%, rgba(10, 10, 10, 1) 40%, rgba(0, 0, 0, 1) 100%)`,
          }}
        />
        
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-20 transition-all duration-1000 ease-out"
          style={{
            background: `linear-gradient(45deg, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(100, 100, 100, 0.05) 25%, 
              rgba(50, 50, 50, 0.1) 50%, 
              rgba(150, 150, 150, 0.05) 75%, 
              rgba(255, 255, 255, 0.1) 100%)`,
            backgroundSize: "400% 400%",
            animation: "gradientFlow 20s ease infinite",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            <span className="text-sm font-semibold text-gray-400 tracking-widest uppercase">
              IMPACT METRICS
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>
          
          {/* Animated Title */}
          <div className="relative mb-6 overflow-hidden">
            <h2 className={`text-4xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className={`block text-white ${titleAnimation ? 'animate-textReveal' : ''}`}>
                Measurable Results
              </span>
              <span className={`block text-white mt-2 ${titleAnimation ? 'animate-textRevealDelayed' : ''}`}>
                That Transform
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className={`h-1 w-0 mx-auto bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 delay-500 ${
              isVisible ? 'w-48 opacity-100' : 'opacity-0'
            }`} />
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform delivers quantifiable impact for forward-thinking 
            financial institutions across Europe.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative group h-full">
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500" />
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-900/60 to-black/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/70 hover:bg-gray-900/70 transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gray-700/50 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gray-700/50 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gray-700/50 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gray-700/50 rounded-br-2xl" />
                  
                  <MetricCard
                    value={metric.value}
                    suffix={metric.suffix}
                    label={metric.label}
                    sublabel={metric.sublabel}
                    isVisible={isVisible}
                    isSpecial={metric.isSpecial}
                    specialContent={metric.specialContent}
                  />
                  
                  {/* Bottom line accent */}
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent transition-all duration-500 group-hover:via-gray-400/70" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        
        @keyframes textRevealDelayed {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(10px);
          }
          30% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        
        .animate-textReveal {
          animation: textReveal 1s ease-out forwards;
        }
        
        .animate-textRevealDelayed {
          animation: textRevealDelayed 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}