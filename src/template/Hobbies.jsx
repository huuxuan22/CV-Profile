import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TRANSLATION_KEYS } from "../constants/languages";
import { Music, Activity, BookOpen, Laptop } from "lucide-react";

const Hobbies = () => {
  const { t } = useLanguage();
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const hobbies = [
    {
      nameKey: TRANSLATION_KEYS.HOBBY_FOOTBALL,
      descKey: TRANSLATION_KEYS.HOBBY_FOOTBALL_DESC,
      icon: <Activity className="h-6 w-6" />,
      image: "/bong_da.png",
      color: "from-green-500/70 to-emerald-600/70",
    },
    {
      nameKey: TRANSLATION_KEYS.HOBBY_VOLLEYBALL,
      descKey: TRANSLATION_KEYS.HOBBY_VOLLEYBALL_DESC,
      icon: <Activity className="h-6 w-6" />,
      image: "/bong_chuyen.png",
      color: "from-orange-500/70 to-red-500/70",
    },
    {
      nameKey: TRANSLATION_KEYS.HOBBY_GUITAR,
      descKey: TRANSLATION_KEYS.HOBBY_GUITAR_DESC,
      icon: <Music className="h-6 w-6" />,
      image: "/guita.png",
      color: "from-amber-500/70 to-orange-500/70",
    },
    {
      nameKey: TRANSLATION_KEYS.HOBBY_CAJON,
      descKey: TRANSLATION_KEYS.HOBBY_CAJON_DESC,
      icon: <Music className="h-6 w-6" />,
      image: "/cajon.png",
      color: "from-brown-500/70 to-amber-800/70",
    },
    {
      nameKey: TRANSLATION_KEYS.HOBBY_READING,
      descKey: TRANSLATION_KEYS.HOBBY_READING_DESC,
      icon: <BookOpen className="h-6 w-6" />,
      image: "/sach.png",
      color: "from-purple-500/70 to-indigo-600/70",
    },
    {
      nameKey: TRANSLATION_KEYS.HOBBY_TECHNOLOGY,
      descKey: TRANSLATION_KEYS.HOBBY_TECHNOLOGY_DESC,
      icon: <Laptop className="h-6 w-6" />,
      image: "/technology.png",
      color: "from-blue-500/70 to-cyan-600/70",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          setVisibleCards((prev) => [...prev, index]);
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full pt-20 pb-0 relative overflow-hidden" style={{ marginBottom: 0 }}>
      <div className="w-[85%] max-w-7xl mx-auto relative z-10 pb-0 mb-0">
        {/* Grid Layout: 3 cards per row */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
          {hobbies.map((hobby, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`
                  relative group cursor-pointer
                  transform transition-all duration-1000 ease-out
                  ${isVisible
                    ? "translate-x-0 opacity-100"
                    : isLeft
                      ? "-translate-x-20 opacity-0"
                      : "translate-x-20 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${(index % 3) * 150}ms`,
                }}
              >
                {/* Image Card */}
                <div className="relative h-40 lg:h-48 rounded-none overflow-hidden shadow-xl">
                  {/* Background Image */}
                  <img
                    src={hobby.image}
                    alt={t(hobby.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay - Lighter for better visibility */}
                  <div
                    className={`
                    absolute inset-0 bg-gradient-to-b ${hobby.color}
                    opacity-30 group-hover:opacity-20 transition-opacity duration-500
                  `}
                  ></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    {/* Icon - Always visible */}
                    <div className="flex justify-start">
                      <div className="p-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40 group-hover:bg-white/40 transition-all duration-300 shadow-lg">
                        <div className="text-white drop-shadow-md">
                          {hobby.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title and Description - Always visible */}
                    <div className="text-center">
                      <h3
                        className="text-lg lg:text-xl font-bold text-white mb-1 group-hover:text-yellow-200 transition-colors duration-300 drop-shadow-lg"
                        style={{ fontFamily: '"Times New Roman", serif' }}
                      >
                        {t(hobby.nameKey)}
                      </h3>

                      {/* Description Text */}
                      <p className="text-xs lg:text-sm text-white/90 mb-2 group-hover:text-white transition-colors duration-300 drop-shadow-md line-clamp-2">
                        {t(hobby.descKey)}
                      </p>

                      {/* Decorative Line - Always visible */}
                      <div className="w-8 h-0.5 bg-white/80 mx-auto rounded-full group-hover:bg-yellow-200 group-hover:w-12 transition-all duration-500 shadow-sm"></div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-none transition-all duration-300"></div>
                </div>

                {/* Floating Animation */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hobbies;
