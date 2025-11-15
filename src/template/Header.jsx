import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TRANSLATION_KEYS } from "../constants/languages";
import LanguageSwitcher from "../components/LanguageSwitcher";
import LanguageSwitcherCompact from "../components/LanguageSwitcherCompact";
import { FaUser, FaCode, FaBriefcase, FaFileDownload, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { t } = useLanguage();
  const brand = "Trần Dương Hữu Xuân";
  const cvUrl = "/CV-Fullstack-Develop.pdf";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Xác định section đang active dựa trên scroll position
      const sections = ["about", "skills", "experiences", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Kiểm tra ngay khi component mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hàm xử lý smooth scroll với offset cho header
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = 80; // Chiều cao header (có thể điều chỉnh)
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false); // Đóng mobile menu nếu đang mở
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${scrolled ? "py-2 shadow-lg" : "py-4"
        }`}
      style={{
        background: scrolled
          ? "rgba(23, 79, 112, 0.95)"
          : "linear-gradient(90deg, #174F70 0%, rgba(23,79,112,0.95) 100%)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center gap-4 md:gap-6">
        {/* Logo / Brand với Avatar - Luôn hiển thị */}
        <div className="flex items-center gap-3 flex-shrink-0">
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
                src="/assest/avatar.jpg"
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
              Fullstack Developer
            </div>
          </div>
        </div>

        {/* Desktop nav - Hiển thị từ sm trở lên, chỉ ẩn trên mobile */}
        <nav className="header-nav">
          <a
            className={`header-nav-link ${activeSection === "about" ? "active" : ""}`}
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
          >
            <FaUser className="header-nav-icon" />
            <span className="header-nav-text">{t(TRANSLATION_KEYS.ABOUT)}</span>
          </a>
          <a
            className={`header-nav-link ${activeSection === "skills" ? "active" : ""}`}
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, "#skills")}
          >
            <FaCode className="header-nav-icon" />
            <span className="header-nav-text">{t(TRANSLATION_KEYS.SKILLS)}</span>
          </a>
          <a
            className={`header-nav-link ${activeSection === "experiences" ? "active" : ""}`}
            href="#experiences"
            onClick={(e) => handleSmoothScroll(e, "#experiences")}
          >
            <FaBriefcase className="header-nav-icon" />
            <span className="header-nav-text header-nav-text-exp">{t(TRANSLATION_KEYS.WORK_EXPERIENCES)}</span>
            <span className="header-nav-text-short">Exp</span>
          </a>
          <a
            href={cvUrl}
            download="CV-Fullstack-Develop.pdf"
            className="header-nav-link"
          >
            <FaFileDownload className="header-nav-icon" />
            <span className="header-nav-text">{t(TRANSLATION_KEYS.RESUME)}</span>
          </a>
          <a
            className={`header-nav-link ${activeSection === "contact" ? "active" : ""}`}
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          >
            <FaEnvelope className="header-nav-icon" />
            <span className="header-nav-text">{t(TRANSLATION_KEYS.CONTACT)}</span>
          </a>
        </nav>

        {/* Language Switcher - Desktop, ở bên phải */}
        <div className=" sm:flex items-center flex-shrink-0 ml-4">
          <LanguageSwitcherCompact />

        </div>

        {/* Mobile toggle - Chỉ hiển thị trên mobile (< 640px) */}
        <div className="sm:hidden flex items-center gap-2 flex-shrink-0 ml-auto">
          {/* Language Switcher - Mobile */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-all duration-300 relative group"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${open ? "transform rotate-45 translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${open ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${open ? "transform -rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu - Chỉ hiển thị trên mobile (< 640px) */}
      <div
        className={`sm:hidden  transition-all duration-500 ease-in-out ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        style={{ background: "rgba(15, 59, 82, 0.98)" }}
      >
        <div className="px-6 py-4 flex flex-col gap-1 text-white">
          <a
            href="#about"
            className={`nav-mobile-link py-3 px-4 border-b border-white/5 transition-all duration-300 rounded-md flex items-center gap-3 ${activeSection === "about"
              ? "text-[#5DC9E4] bg-[#5DC9E4]/10 border-l-2 border-[#5DC9E4]"
              : "hover:bg-white/5 hover:text-[#5DC9E4]"
              }`}
            onClick={(e) => handleSmoothScroll(e, "#about")}
          >
            <FaUser className={`text-base ${activeSection === "about" ? "text-[#5DC9E4]" : ""}`} />
            <span>{t(TRANSLATION_KEYS.ABOUT)}</span>
          </a>
          <a
            href="#skills"
            className={`nav-mobile-link py-3 px-4 border-b border-white/5 transition-all duration-300 rounded-md flex items-center gap-3 ${activeSection === "skills"
              ? "text-[#5DC9E4] bg-[#5DC9E4]/10 border-l-2 border-[#5DC9E4]"
              : "hover:bg-white/5 hover:text-[#5DC9E4]"
              }`}
            onClick={(e) => handleSmoothScroll(e, "#skills")}
          >
            <FaCode className={`text-base ${activeSection === "skills" ? "text-[#5DC9E4]" : ""}`} />
            <span>{t(TRANSLATION_KEYS.SKILLS)}</span>
          </a>
          <a
            href="#experiences"
            className={`nav-mobile-link py-3 px-4 border-b border-white/5 transition-all duration-300 rounded-md flex items-center gap-3 ${activeSection === "experiences"
              ? "text-[#5DC9E4] bg-[#5DC9E4]/10 border-l-2 border-[#5DC9E4]"
              : "hover:bg-white/5 hover:text-[#5DC9E4]"
              }`}
            onClick={(e) => handleSmoothScroll(e, "#experiences")}
          >
            <FaBriefcase className={`text-base ${activeSection === "experiences" ? "text-[#5DC9E4]" : ""}`} />
            <span>{t(TRANSLATION_KEYS.WORK_EXPERIENCES)}</span>
          </a>
          <a
            href={cvUrl}
            download="CV-Fullstack-Develop.pdf"
            className="nav-mobile-link py-3 px-4 border-b border-white/5 hover:bg-white/5 hover:text-[#5DC9E4] transition-all duration-300 rounded-md flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <FaFileDownload className="text-base" />
            <span>{t(TRANSLATION_KEYS.RESUME)}</span>
          </a>
          <a
            href="#contact"
            className={`nav-mobile-link py-3 px-4 border-b border-white/5 transition-all duration-300 rounded-md flex items-center gap-3 ${activeSection === "contact"
              ? "text-[#5DC9E4] bg-[#5DC9E4]/10 border-l-2 border-[#5DC9E4]"
              : "hover:bg-white/5 hover:text-[#5DC9E4]"
              }`}
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          >
            <FaEnvelope className={`text-base ${activeSection === "contact" ? "text-[#5DC9E4]" : ""}`} />
            <span>{t(TRANSLATION_KEYS.CONTACT)}</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Desktop Navigation - CSS thuần với media queries */
        .header-nav {
          display: none;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .header-nav {
            display: flex;
            gap: 0.5rem;
          }
        }

        @media (min-width: 1024px) {
          .header-nav {
            gap: 0.75rem;
          }
        }

        .header-nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          border-radius: 0;
          transition: all 0.3s ease;
          white-space: nowrap;
          position: relative;
          font-size: 0.75rem;
          border: none;
          border-bottom: 2px solid transparent;
          font-family: "Times New Roman", serif;
          text-transform: uppercase;
        }

        @media (min-width: 640px) {
          .header-nav-link {
            padding: 0.5rem 0.5rem;
            font-size: 0.75rem;
          }
        }

        @media (min-width: 1024px) {
          .header-nav-link {
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
          }
        }

        .header-nav-icon {
          font-size: 0.875rem;
          transition: color 0.3s ease;
          flex-shrink: 0;
        }

        .header-nav-text {
          display: inline;
        }

        .header-nav-text-exp {
          display: none;
        }

        .header-nav-text-short {
          display: inline;
        }

        @media (min-width: 1280px) {
          .header-nav-text-exp {
            display: inline;
          }
          .header-nav-text-short {
            display: none;
          }
        }

        /* Hover state */
        .header-nav-link:hover {
          color: #5DC9E4;
          border-bottom: 2px solid #5DC9E4;
        }

        .header-nav-link:hover .header-nav-icon {
          color: #5DC9E4;
        }

        /* Active state */
        .header-nav-link.active {
          color: #5DC9E4;
          border-bottom: 2px solid #5DC9E4;
        }

        .header-nav-link.active .header-nav-icon {
          color: #5DC9E4;
        }

        /* Mobile Navigation */
        .nav-mobile-link {
          position: relative;
        }

        .nav-mobile-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(93, 201, 228, 0.1),
            transparent
          );
          transition: all 0.5s ease;
        }

        .nav-mobile-link:hover::before {
          left: 100%;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-mobile-link {
          animation: fadeIn 0.3s ease forwards;
        }

        .nav-mobile-link:nth-child(1) {
          animation-delay: 0.05s;
        }
        .nav-mobile-link:nth-child(2) {
          animation-delay: 0.1s;
        }
        .nav-mobile-link:nth-child(3) {
          animation-delay: 0.15s;
        }
        .nav-mobile-link:nth-child(4) {
          animation-delay: 0.2s;
        }
        .nav-mobile-link:nth-child(5) {
          animation-delay: 0.25s;
        }
      `}</style>
    </header>
  );
};

export default Header;
