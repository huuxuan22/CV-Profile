import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TRANSLATION_KEYS } from "../constants/languages";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGitlab,
} from "react-icons/fa";
import {
  FaLaptopCode,
  FaCogs,
  FaPencilRuler,
  FaLightbulb,
} from "react-icons/fa";
import LanguageSwitcher from "../components/LanguageSwitcher";
import LanguageSwitcherCompact from "../components/LanguageSwitcherCompact";

// Lightweight Typewriter component
const TypewriterText = ({
  words = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1500,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    if (words.length === 0) return;
    let timeout;
    if (!isDeleting && subIndex === words[wordIndex].length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setSubIndex((s) => s + (isDeleting ? -1 : 1));
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [
    subIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return (
    <span>
      {words[wordIndex].substring(0, subIndex)}
      <span
        className="inline-block w-1 ml-1 align-middle"
        style={{
          opacity: blink ? 1 : 0,
          background: "#5DC9E4",
          height: "1em",
        }}
      />
    </span>
  );
};

const HeroSection = () => {
  // lấy cả hàm dịch và mã ngôn ngữ
  const { t, language } = useLanguage();

  // default/fallback content (keeps current visual if translations missing)
  const defaultContent = {
    skills: [
      { key: "SKILL_REACT", name: "React", src: "/assest/react_svg.png" },
      { key: "SKILL_VUE", name: "Vue", src: "/assest/vue.png" },
      {
        key: "SKILL_SPRING",
        name: "Springboot",
        src: "/assest/springboot.png",
      },
      { key: "SKILL_MONGODB", name: "MongoDB", src: "/assest/mongodb.png" },
      { key: "SKILL_FASTAPI", name: "FastAPI", src: "/assest/fastapi.png" },
      { key: "SKILL_GITHUB", name: "Github", src: "/assest/github.jpg" },
      { key: "SKILL_MYSQL", name: "MySQL", src: "/assest/mysql.png" },
      { key: "SKILL_POSTGRES", name: "Postgres", src: "/assest/postgress.png" },
    ],
  };

  // greeting: use translation key GREETING if present, else fallback by language
  const greeting = t(TRANSLATION_KEYS.GREETING);

  // typewriter lines: read TYPEWRITER_GREETING, TYPEWRITER_ROLE, TYPEWRITER_PASSION keys
  const typewriter = [
    t(TRANSLATION_KEYS.TYPEWRITER_GREETING),
    t(TRANSLATION_KEYS.TYPEWRITER_ROLE),
    t(TRANSLATION_KEYS.TYPEWRITER_PASSION),
  ];

  // skills: label from translation keys SKILL_* if available
  const skills = defaultContent.skills.map((s) => ({
    ...s,
    label: t(TRANSLATION_KEYS[s.key], s.name),
  }));

  // social links: try translation keys for links or fallback to placeholders
  const links = {
    github: t(TRANSLATION_KEYS.LINK_GITHUB),
    linkedin: t(TRANSLATION_KEYS.LINK_LINKEDIN),
    twitter: t(TRANSLATION_KEYS.LINK_TWITTER),
    facebook: t(TRANSLATION_KEYS.LINK_FACEBOOK),
    instagram: t(TRANSLATION_KEYS.LINK_INSTAGRAM),
    gitlab: t(TRANSLATION_KEYS.LINK_GITLAB),
  };

  // contact label
  const contactLabel = t(TRANSLATION_KEYS.CONTACT_INFO);

  return (
    <section className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">
      {/* Language switchers (top-right) - same behavior as Header */}
      <div className="absolute top-4 right-4 z-30 flex items-center space-x-2">
        <LanguageSwitcher />
        <LanguageSwitcherCompact />
      </div>

      {/* Left side - Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 relative z-10">
        <div className="max-w-md text-center md:text-left">
          {/* Updated Main heading with split animation */}
          <div className="container mb-10">
            {" "}
            {/* Thêm margin-bottom */}
            <style>{`
              .text-block {
                margin-top: 40px;
                font-family: 'Montserrat', 'Arial Black', sans-serif;
                letter-spacing: 1px;
                text-transform: uppercase;
                display: inline-flex;
                align-items: center;
                font-size: 1.5rem;
                color: #fff;
                text-shadow: 
                  0px 2px 2px rgba(13, 138, 158, 0.7),
                  0px 4px 5px rgba(13, 138, 158, 0.5),
                  0px 6px 8px rgba(13, 138, 158, 0.3),
                  0px 8px 12px rgba(13, 138, 158, 0.2);
                white-space: nowrap;
              }
              .icon {
                margin-left: 0.5rem;
                font-size: 1em;
              }
            `}</style>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold flex justify-center items-center overflow-hidden">
              <span className="text-block">
                {greeting}
              </span>
            </h1>
          </div>

          {/* Animated Description with internal Typewriter effect */}
          <div className="text-lg  md:text-xl text-[#B6E1FF] mb-10">
            {" "}
            {/* Tăng margin-bottom */}
            <TypewriterText
              words={typewriter}
              typingSpeed={70}
              deletingSpeed={45}
              pause={1400}
              className="font-times text-2xl text-white"
            />
          </div>

          {/* Animated Skills Tags - Tăng gap giữa các item */}
          <div className="flex flex-wrap gap-5 mb-10 w-full justify-center md:justify-start">
            {" "}
            {/* Tăng gap và margin-bottom */}
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="w-20 h-20 flex items-center justify-center bg-transparent animate-fadeIn p-2 cursor-pointer" /* Thêm padding */
                style={{
                  animationDelay: `${index * 200}ms`,
                  margin: "0.25rem" /* Thêm margin nhỏ */,
                }}
                title={skill.label}
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Divider line đơn giản - Tăng margin */}
          <div className="w-full max-w-md h-1 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] mb-10 mx-auto md:mx-0 rounded-full"></div>

          {/* Contact section - Tăng gap giữa các icon */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-8 cursor-pointer">
            {" "}
            {/* Tăng gap */}
            <div>
              <div className="flex justify-center md:justify-start space-x-4">
                {" "}
                {/* Tăng khoảng cách giữa các icon */}
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all" /* Tăng kích thước icon */
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6 text-white" />{" "}
                  {/* Tăng kích thước icon */}
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-6 h-6 text-white" />
                </a>
                <a
                  href={links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-6 h-6 text-white" />
                </a>
                <a
                  href={links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-6 h-6 text-white" />
                </a>
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href={links.gitlab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all"
                  aria-label="GitLab"
                >
                  <FaGitlab className="w-6 h-6 text-white" />
                </a>
                {/* contact label link */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image with hover effect và animation */}
      <div className="w-full md:w-1/2 h-64 md:h-screen relative group mt-8 md:mt-0 cursor-pointer overflow-hidden">
        <div className="w-full h-full overflow-hidden relative image-wrapper">
          <img
            src="/assest/avatar_setup.jpg"
            alt="Trần Dương Hữu Xuân - Full Stack Developer"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 image-enhanced"
          />
          {/* Gradient overlay nhẹ hơn để hình ảnh rõ hơn */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B56]/40 via-transparent to-transparent md:bg-gradient-to-r md:from-[#0D3B56]/30 md:via-transparent group-hover:from-[#0D3B56]/10 transition-all duration-500"></div>

          {/* Animated border glow effect */}
          <div className="absolute inset-0 border-2 border-[#5DC9E4]/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow"></div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute hidden md:block">
        <div className="animate-float-slow">
          <div className="w-20 h-20 rounded-full bg-white/5 absolute top-20 right-40"></div>
          <div className="w-32 h-32 rounded-full bg-white/5 absolute bottom-40 left-20"></div>
        </div>
      </div>

      {/* CSS cho hiệu ứng hình ảnh */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes imageFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.02);
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(93, 201, 228, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(93, 201, 228, 0.6), 0 0 60px rgba(93, 201, 228, 0.3);
          }
        }

        @keyframes imageFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95) translateX(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
        }

        @keyframes imageInitial {
          0% {
            opacity: 0;
            transform: scale(0.95) translateX(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
          animation-delay: 0.5s;
        }

        .image-enhanced {
          filter: brightness(1.08) contrast(1.12) saturate(1.15);
          animation: imageInitial 1.5s ease-out forwards;
        }

        /* Sử dụng wrapper để áp dụng float animation sau khi fade in */
        .image-wrapper {
          animation: imageFloat 6s ease-in-out 1.5s infinite;
        }

        .animate-border-glow {
          animation: borderGlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
