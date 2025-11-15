import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TRANSLATION_KEYS } from "../constants/languages";
import { Code, Server, Wrench } from "lucide-react";

const SimpleSkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t(TRANSLATION_KEYS.FRONTEND),
      titleKey: "frontend",
      icon: Code,
      skills: [
        { name: "ReactJS", percentage: 80 },
        { name: "Redux", percentage: 80 },
        { name: "Vue.js", percentage: 80 },
        { name: "Tailwind CSS", percentage: 80 },
        { name: "Bootstrap", percentage: 80 },
        { name: "MUI", percentage: 80 },
      ],
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: t(TRANSLATION_KEYS.BACKEND),
      titleKey: "backend",
      icon: Server,
      skills: [
        { name: "Java", percentage: 100 },
        { name: "Spring Boot", percentage: 100 },
        { name: "Spring Security", percentage: 80 },
        { name: "MySQL", percentage: 80 },
        { name: "SQL Server", percentage: 80 },
        { name: "PhpAdmin", percentage: 80 },
      ],
      color: "from-blue-700 to-blue-500",
    },
    {
      titleKey: TRANSLATION_KEYS.OTHER,
      icon: Wrench,
      skills: ["Git", "GitLab", "Postman", "Firebase", "SourceTree", "Fork"],
      color: "from-blue-800 to-blue-600",
    },
  ];

  // Mapping skill names to image files in public directory
  const skillImages = {
    // Frontend
    ReactJS: "/assest/react_svg.png",
    Redux: "/Redux.png",
    "Vue.js": "/assest/vue.png",
    "Tailwind CSS": "/taiwincss.png",
    Bootstrap: "/boostrap.png",
    MUI: "/MUI.jpg",
    // Backend
    Java: "/java.jpg",
    "Spring Boot": "/Spingboot.png",
    "Spring Security": "/Spring-sercurity.png",
    MySQL: "/mysql.png",
    "SQL Server": "/SqlServer.png",
    PhpAdmin: "/PhpAdmin.png",
    // Other
    Git: "/github.png",
    GitLab: "/Gitlab.png",
    Postman: "/Postman.jpg",
    Firebase: "/Firebase.png",
    SourceTree: "/Souretree.jpg",
    Fork: "/Fork.jpg",
    // Default fallback
    default: "/github.png",
  };

  const iconSize = 20;
  const defaultSvg = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#164E6F" />
      <path
        d="M8 12h8"
        stroke="#C3E3F7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 8v8"
        stroke="#C3E3F7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const skillSvgs = {
    // Frontend
    ReactJS: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="React"
      >
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          transform="rotate(60 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          transform="rotate(-60 12 12)"
          stroke="#61DAFB"
          strokeWidth="1.5"
        />
      </svg>
    ),
    Redux: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Redux"
      >
        <path
          d="M7 13a5 5 0 0 1 9.5-2"
          stroke="#764ABC"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 18a5 5 0 0 0 9-3"
          stroke="#764ABC"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 9A5 5 0 0 0 6 16"
          stroke="#764ABC"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="13" r="1.6" fill="#764ABC" />
        <circle cx="18" cy="15" r="1.6" fill="#764ABC" />
        <circle cx="6" cy="9" r="1.6" fill="#764ABC" />
      </svg>
    ),
    "Vue.js": (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Vue.js"
      >
        <path d="M3 4h5l4 7 4-7h5L12 21 3 4z" fill="#41B883" />
        <path d="M6 4h3l3 5 3-5h3L12 16 6 4z" fill="#35495E" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tailwind CSS"
      >
        <path
          d="M3 12c2.5-4 5-6 8-6 4.5 0 5 3 7 3 2 0 3-1 3-1-2.5 4-5 6-8 6-4.5 0-5-3-7-3-2 0-3 1-3 1z"
          fill="#38BDF8"
        />
        <path
          d="M3 18c2.5-4 5-6 8-6 4.5 0 5 3 7 3 2 0 3-1 3-1-2.5 4-5 6-8 6-4.5 0-5-3-7-3-2 0-3 1-3 1z"
          fill="#38BDF8"
          opacity=".8"
        />
      </svg>
    ),
    Bootstrap: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bootstrap"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#7952B3" />
        <path
          d="M9 7h5a2.5 2.5 0 0 1 0 5H9V7zm0 5h5.5a2.5 2.5 0 0 1 0 5H9v-5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
    MUI: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="MUI"
      >
        <path d="M3 6l9 6 9-6v6l-9 6-9-6V6z" fill="#007FFF" />
      </svg>
    ),
    // Backend
    "Spring Boot": (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Spring Boot"
      >
        <circle cx="12" cy="12" r="9" fill="#6DB33F" />
        <path
          d="M7 13c3 0 4-4 7-4 1.5 0 2.5 1 3 2"
          stroke="#E9F4FB"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    "Spring Security": (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Spring Security"
      >
        <path
          d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z"
          fill="#6DB33F"
        />
        <path
          d="M9.5 12l2 2 3.5-3.5"
          stroke="#E9F4FB"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    Java: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Java"
      >
        <path
          d="M8 17c2 1 6 1 8 0M6 19c3 1.5 9 1.5 12 0"
          stroke="#E76F00"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 6c2 1 1.5 2.5 0 3.5-1.5 1 0 2 2 3"
          stroke="#5382A1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    MySQL: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="MySQL"
      >
        <path
          d="M4 8c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4z"
          fill="#00758F"
        />
        <path d="M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4" fill="#00758F" opacity=".7" />
        <path d="M4 16c0 2.2 3.6 4 8 4s8-1.8 8-4" fill="#00758F" opacity=".4" />
      </svg>
    ),
    "SQL Server": (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SQL Server"
      >
        <ellipse cx="12" cy="6.5" rx="8" ry="3" fill="#CC2927" />
        <path
          d="M4 6.5V12c0 1.7 3.6 3 8 3s8-1.3 8-3V6.5"
          fill="#CC2927"
          opacity=".7"
        />
        <path
          d="M4 12v5.5c0 1.7 3.6 3 8 3s8-1.3 8-3V12"
          fill="#CC2927"
          opacity=".5"
        />
      </svg>
    ),
    PhpAdmin: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="phpMyAdmin"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" fill="#777BB3" />
        <text
          x="12"
          y="14"
          textAnchor="middle"
          fontSize="7"
          fill="#FFFFFF"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          PHP
        </text>
      </svg>
    ),
    // DevOps & Tools
    Git: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Git"
      >
        <path d="M4 12l8-8 8 8-8 8-8-8z" fill="#F1502F" />
        <circle cx="12" cy="8" r="1.6" fill="#fff" />
        <circle cx="12" cy="12" r="1.6" fill="#fff" />
        <circle cx="16" cy="12" r="1.6" fill="#fff" />
        <path d="M12 8v4M12 12h4" stroke="#fff" strokeWidth="1.4" />
      </svg>
    ),
    GitLab: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="GitLab"
      >
        <path d="M3 13l3-9 3 9 3 6-9-6z" fill="#FC6D26" />
        <path d="M21 13l-3-9-3 9-3 6 9-6z" fill="#E24329" />
        <path d="M6 13l6 6 6-6-6-4-6 4z" fill="#FCA326" />
      </svg>
    ),
    Postman: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Postman"
      >
        <circle cx="12" cy="12" r="9" fill="#FF6C37" />
        <path
          d="M7 12h10M12 7v10"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    Firebase: (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Firebase"
      >
        <path d="M6 18l3-12 3 6 3-4 3 10-12 0z" fill="#FFCA28" />
        <path d="M6 18l6-4 6 4-6 3-6-3z" fill="#FFA000" />
      </svg>
    ),
  };

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-2 relative overflow-hidden"
      style={{ marginTop: '30px' }}
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10 mb-10">
        {/* All 3 items in one row */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "translate-y-10"
            }`}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={index === 2 ? "skills-card-bottom" : "skills-card-top"}
            >
              {/* Header with icon */}
              <div className="flex items-center mb-6">
                {category.icon && (
                  <category.icon className="w-8 h-8 text-white mr-4" />
                )}
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {category.titleKey ? t(category.titleKey) : category.title}
                </h3>
              </div>

              {/* Skills List */}
              {index === 2 ? (
                // Other section - skills without progress bars
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const skillImage = skillImages[skill] || skillImages.default;
                    return (
                      <div key={skillIndex} className="skill-item">
                        <img
                          src={skillImage}
                          alt={skill}
                          className="skill-image-direct"
                        />
                        <span className="skill-name">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // Frontend and Backend - skills with progress bars
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => {
                    const skillImage = skillImages[skill.name] || skillImages.default;
                    return (
                      <div key={skillIndex} className="skill-item-with-progress">
                        <div className="skill-header">
                          <img
                            src={skillImage}
                            alt={skill.name}
                            className="skill-image-direct"
                          />
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.percentage}%</span>
                        </div>
                        <div className="progress-bar-container">
                          <div
                            className="progress-bar"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`

        .skills-card-top {
          background: linear-gradient(
            135deg,
            rgba(13, 59, 86, 0.6) 0%,
            rgba(15, 70, 101, 0.4) 100%
          );
          backdrop-filter: blur(10px);
          border-radius: 0;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 0;
        }

        .skills-card-top:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(42, 124, 176, 0.25);
          background: linear-gradient(
            135deg,
            rgba(13, 59, 86, 0.8) 0%,
            rgba(15, 70, 101, 0.6) 100%
          );
        }

        .skills-card-bottom {
          background: linear-gradient(
            135deg,
            rgba(13, 59, 86, 0.6) 0%,
            rgba(15, 70, 101, 0.4) 100%
          );
          backdrop-filter: blur(10px);
          border-radius: 0;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 0;
        }

        .skills-card-bottom:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(42, 124, 176, 0.25);
          background: linear-gradient(
            135deg,
            rgba(13, 59, 86, 0.8) 0%,
            rgba(15, 70, 101, 0.6) 100%
          );
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item-with-progress {
          background: rgba(13, 59, 86, 0.4);
          backdrop-filter: blur(5px);
          border-radius: 0;
          padding: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 0;
          cursor: pointer;
        }

        .skill-item-with-progress:hover {
          background: rgba(17, 70, 101, 0.6);
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(42, 124, 176, 0.2);
        }

        .skill-header {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          gap: 0.75rem;
        }

        .skill-image-direct {
          width: 2.5rem;
          height: 2.5rem;
          object-fit: contain;
          flex-shrink: 0;
        }

        .skill-item-with-progress:hover .skill-image-direct {
          transform: scale(1.15) rotate(5deg);
          transition: transform 0.3s ease;
        }

        .skill-name {
          color: rgba(226, 232, 240, 0.95);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.025em;
          flex: 1;
        }

        .skill-percentage {
          color: rgba(93, 201, 228, 0.9);
          font-size: 0.875rem;
          font-weight: 600;
          margin-left: 0.5rem;
        }

        .skill-item-with-progress:hover .skill-name {
          color: #ffffff;
        }

        .progress-bar-container {
          width: 100%;
          height: 8px;
          background: rgba(8, 41, 61, 0.5);
          border-radius: 0;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #2A7CB0 0%, #5DC9E4 100%);
          transition: width 1s ease-in-out;
          border-radius: 0;
        }

        .skill-item {
          background: rgba(13, 59, 86, 0.4);
          backdrop-filter: blur(5px);
          border-radius: 0;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 0;
          cursor: pointer;
        }

        .skill-item:hover {
          background: rgba(17, 70, 101, 0.6);
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(42, 124, 176, 0.2);
        }

        .skill-item .skill-image-direct {
          width: 2.5rem;
          height: 2.5rem;
          object-fit: contain;
          flex-shrink: 0;
        }

        .skill-item:hover .skill-image-direct {
          transform: scale(1.15) rotate(5deg);
          transition: transform 0.3s ease;
        }

        .skill-item .skill-name {
          color: rgba(226, 232, 240, 0.95);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.025em;
        }

        .skill-item:hover .skill-name {
          color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default SimpleSkillsSection;
