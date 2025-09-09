import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TRANSLATION_KEYS } from "../constants/languages";
import LanguageSwitcher from "../components/LanguageSwitcher";
import LanguageSwitcherCompact from "../components/LanguageSwitcherCompact";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const brand = "Niko Bocheser";
  const cvUrl = "/CV.pdf";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 shadow-lg" : "py-4"
      }`}
      style={{
        background: scrolled
          ? "rgba(23, 79, 112, 0.95)"
          : "linear-gradient(90deg, #174F70 0%, rgba(23,79,112,0.95) 100%)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand với Avatar */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div
              className="flex items-center justify-center text-white font-bold text-lg relative overflow-hidden"
              style={{
                width: scrolled ? "40px" : "44px",
                height: scrolled ? "40px" : "44px",
                backgroundColor: "#0f3b52",
                border: "2px solid rgba(93, 201, 228, 0.3)",
                borderRadius: "50%",
                transition: "all 0.3s ease",
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Avatar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </div>
          <div className="text-white">
            <div
              className="font-semibold tracking-tight transition-all duration-300"
              style={{ fontSize: scrolled ? "16px" : "18px" }}
            >
              {brand}
            </div>
            <div
              className="text-xs text-white/80 transition-all duration-300"
              style={{
                marginTop: scrolled ? "-2px" : "-1px",
                opacity: scrolled ? 0.9 : 1,
              }}
            >
              Lập trình viên Fullstack
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <a
            className="nav-link relative px-3 py-2 text-sm text-white/90 hover:text-white transition-colors duration-300"
            href="#skills"
          >
            <span>{t(TRANSLATION_KEYS.SKILLS)}</span>
          </a>
          <a
            className="nav-link relative px-3 py-2 text-sm text-white/90 hover:text-white transition-colors duration-300"
            href="#experiences"
          >
            <span>{t(TRANSLATION_KEYS.WORK_EXPERIENCES)}</span>
          </a>
          <a
            className="nav-link relative px-3 py-2 text-sm text-white/90 hover:text-white transition-colors duration-300"
            href="#opensource"
          >
            <span>{t(TRANSLATION_KEYS.OPEN_SOURCE)}</span>
          </a>
          <a
            className="nav-link relative px-3 py-2 text-sm text-white/90 hover:text-white transition-colors duration-300"
            href="#achievements"
          >
            <span>{t(TRANSLATION_KEYS.ACHIEVEMENTS)}</span>
          </a>
          <a
            className="nav-link relative px-3 py-2 text-sm text-white/90 hover:text-white transition-colors duration-300"
            href="#blogs"
          >
            <span>{t(TRANSLATION_KEYS.BLOGS)}</span>
          </a>
          <a
            className="nav-link relative px-3 py-2 text-sm text-white/90 hover:text-white transition-colors duration-300"
            href="#talks"
          >
            <span>{t(TRANSLATION_KEYS.TALKS)}</span>
          </a>
          <a
            href={cvUrl}
            download
            className="nav-link relative px-3 py-2 text-sm text-white/90 hover:text-white transition-colors duration-300"
          >
            <span>{t(TRANSLATION_KEYS.RESUME)}</span>
          </a>
          <a
            className="ml-2 px-4 py-2 bg-[#5DC9E4] text-white font-medium rounded-md border border-[#5DC9E4] transition-all duration-300 hover:bg-[#4ab7d3] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none relative overflow-hidden group"
            href="#contact"
            style={{ minWidth: "100px" }}
          >
            <span className="relative z-10">{t(TRANSLATION_KEYS.CONTACT)}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </a>
        </nav>

        {/* Language Switcher - Desktop */}
        <div className="hidden lg:flex items-center">
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Language Switcher - Mobile */}
          <LanguageSwitcherCompact />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all duration-300 relative group"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  open ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  open ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(15, 59, 82, 0.98)" }}
      >
        <div className="px-6 py-4 flex flex-col gap-1 text-white">
          <a
            href="#skills"
            className="nav-mobile-link py-3 px-4 border-b border-white/5 hover:bg-white/5 transition-all duration-300 rounded-md flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="w-2 h-2 bg-[#5DC9E4] rounded-full mr-3"></span>
            {t(TRANSLATION_KEYS.SKILLS)}
          </a>
          <a
            href="#experiences"
            className="nav-mobile-link py-3 px-4 border-b border-white/5 hover:bg-white/5 transition-all duration-300 rounded-md flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="w-2 h-2 bg-[#5DC9E4] rounded-full mr-3"></span>
            {t(TRANSLATION_KEYS.WORK_EXPERIENCES)}
          </a>
          <a
            href="#opensource"
            className="nav-mobile-link py-3 px-4 border-b border-white/5 hover:bg-white/5 transition-all duration-300 rounded-md flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="w-2 h-2 bg-[#5DC9E4] rounded-full mr-3"></span>
            {t(TRANSLATION_KEYS.OPEN_SOURCE)}
          </a>
          <a
            href="#achievements"
            className="nav-mobile-link py-3 px-4 border-b border-white/5 hover:bg-white/5 transition-all duration-300 rounded-md flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="w-2 h-2 bg-[#5DC9E4] rounded-full mr-3"></span>
            {t(TRANSLATION_KEYS.ACHIEVEMENTS)}
          </a>
          <a
            href="#blogs"
            className="nav-mobile-link py-3 px-4 border-b border-white/5 hover:bg-white/5 transition-all duration-300 rounded-md flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="w-2 h-2 bg-[#5DC9E4] rounded-full mr-3"></span>
            {t(TRANSLATION_KEYS.BLOGS)}
          </a>
          <a
            href="#talks"
            className="nav-mobile-link py-3 px-4 border-b border-white/5 hover:bg-white/5 transition-all duration-300 rounded-md flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="w-2 h-2 bg-[#5DC9E4] rounded-full mr-3"></span>
            {t(TRANSLATION_KEYS.TALKS)}
          </a>
          <a
            href={cvUrl}
            download
            className="nav-mobile-link py-3 px-4 border-b border-white/5 hover:bg-white/5 transition-all duration-300 rounded-md flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="w-2 h-2 bg-[#5DC9E4] rounded-full mr-3"></span>
            {t(TRANSLATION_KEYS.RESUME)}
          </a>
          <a
            href="#contact"
            className="mt-3 py-3 px-4 bg-[#5DC9E4] text-white font-medium rounded-md border border-[#5DC9E4] text-center transition-all duration-300 hover:bg-[#4ab7d3] hover:shadow-md"
            onClick={() => setOpen(false)}
          >
            {t(TRANSLATION_KEYS.CONTACT)}
          </a>
        </div>
      </div>

      <style jsx>{`
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: linear-gradient(to right, #2A7CB0, #5DC9E4);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 70%;
        }
        
        .nav-mobile-link {
          position: relative;
          overflow: hidden;
        }
        
        .nav-mobile-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(93, 201, 228, 0.1), transparent);
          transition: all 0.5s ease;
        }
        
        .nav-mobile-link:hover::before {
          left: 100%;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .nav-mobile-link {
          animation: fadeIn 0.3s ease forwards;
        }
        
        .nav-mobile-link:nth-child(1) { animation-delay: 0.05s; }
        .nav-mobile-link:nth-child(2) { animation-delay: 0.1s; }
        .nav-mobile-link:nth-child(3) { animation-delay: 0.15s; }
        .nav-mobile-link:nth-child(4) { animation-delay: 0.2s; }
        .nav-mobile-link:nth-child(5) { animation-delay: 0.25s; }
        .nav-mobile-link:nth-child(6) { animation-delay: 0.3s; }
        .nav-mobile-link:nth-child(7) { animation-delay: 0.35s; }
      `}</style>
    </header>
  );
};

export default Header;