import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATION_KEYS } from '../constants/languages';

const SimpleSkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t(TRANSLATION_KEYS.FRONTEND),
      titleKey: "frontend",
      skills: ['ReactJS', 'Redux', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'MUI'],
      icon: "💻",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: t(TRANSLATION_KEYS.BACKEND),
      titleKey: "backend",
      skills: ['Spring Boot', 'Spring Security', 'Java', 'MySQL', 'SQL Server', 'PhpAdmin'],
      icon: "⚙️",
      color: "from-blue-700 to-blue-500"
    },
    {
      title: t(TRANSLATION_KEYS.DEVOPS),
      titleKey: "devops",
      skills: ['Git', 'GitLab', 'Postman', 'Firebase'],
      icon: "🛠️",
      color: "from-blue-800 to-blue-600"
    }
  ];

  const iconSize = 20;
  const defaultSvg = (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#164E6F" />
      <path d="M8 12h8" stroke="#C3E3F7" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 8v8" stroke="#C3E3F7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const skillSvgs = {
    // Frontend
    'ReactJS': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="React">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      </svg>
    ),
    'Redux': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Redux">
        <path d="M7 13a5 5 0 0 1 9.5-2" stroke="#764ABC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 18a5 5 0 0 0 9-3" stroke="#764ABC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 9A5 5 0 0 0 6 16" stroke="#764ABC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="13" r="1.6" fill="#764ABC" />
        <circle cx="18" cy="15" r="1.6" fill="#764ABC" />
        <circle cx="6" cy="9" r="1.6" fill="#764ABC" />
      </svg>
    ),
    'Vue.js': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vue.js">
        <path d="M3 4h5l4 7 4-7h5L12 21 3 4z" fill="#41B883" />
        <path d="M6 4h3l3 5 3-5h3L12 16 6 4z" fill="#35495E" />
      </svg>
    ),
    'Tailwind CSS': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tailwind CSS">
        <path d="M3 12c2.5-4 5-6 8-6 4.5 0 5 3 7 3 2 0 3-1 3-1-2.5 4-5 6-8 6-4.5 0-5-3-7-3-2 0-3 1-3 1z" fill="#38BDF8" />
        <path d="M3 18c2.5-4 5-6 8-6 4.5 0 5 3 7 3 2 0 3-1 3-1-2.5 4-5 6-8 6-4.5 0-5-3-7-3-2 0-3 1-3 1z" fill="#38BDF8" opacity=".8" />
      </svg>
    ),
    'Bootstrap': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Bootstrap">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#7952B3" />
        <path d="M9 7h5a2.5 2.5 0 0 1 0 5H9V7zm0 5h5.5a2.5 2.5 0 0 1 0 5H9v-5z" fill="#FFFFFF" />
      </svg>
    ),
    'MUI': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MUI">
        <path d="M3 6l9 6 9-6v6l-9 6-9-6V6z" fill="#007FFF" />
      </svg>
    ),
    // Backend
    'Spring Boot': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Spring Boot">
        <circle cx="12" cy="12" r="9" fill="#6DB33F" />
        <path d="M7 13c3 0 4-4 7-4 1.5 0 2.5 1 3 2" stroke="#E9F4FB" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    'Spring Security': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Spring Security">
        <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" fill="#6DB33F" />
        <path d="M9.5 12l2 2 3.5-3.5" stroke="#E9F4FB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'Java': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Java">
        <path d="M8 17c2 1 6 1 8 0M6 19c3 1.5 9 1.5 12 0" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 6c2 1 1.5 2.5 0 3.5-1.5 1 0 2 2 3" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'MySQL': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MySQL">
        <path d="M4 8c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4z" fill="#00758F" />
        <path d="M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4" fill="#00758F" opacity=".7" />
        <path d="M4 16c0 2.2 3.6 4 8 4s8-1.8 8-4" fill="#00758F" opacity=".4" />
      </svg>
    ),
    'SQL Server': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SQL Server">
        <ellipse cx="12" cy="6.5" rx="8" ry="3" fill="#CC2927" />
        <path d="M4 6.5V12c0 1.7 3.6 3 8 3s8-1.3 8-3V6.5" fill="#CC2927" opacity=".7" />
        <path d="M4 12v5.5c0 1.7 3.6 3 8 3s8-1.3 8-3V12" fill="#CC2927" opacity=".5" />
      </svg>
    ),
    'PhpAdmin': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="phpMyAdmin">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="#777BB3" />
        <text x="12" y="14" textAnchor="middle" fontSize="7" fill="#FFFFFF" fontFamily="Arial, Helvetica, sans-serif">PHP</text>
      </svg>
    ),
    // DevOps & Tools
    'Git': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Git">
        <path d="M4 12l8-8 8 8-8 8-8-8z" fill="#F1502F" />
        <circle cx="12" cy="8" r="1.6" fill="#fff" />
        <circle cx="12" cy="12" r="1.6" fill="#fff" />
        <circle cx="16" cy="12" r="1.6" fill="#fff" />
        <path d="M12 8v4M12 12h4" stroke="#fff" strokeWidth="1.4" />
      </svg>
    ),
    'GitLab': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="GitLab">
        <path d="M3 13l3-9 3 9 3 6-9-6z" fill="#FC6D26" />
        <path d="M21 13l-3-9-3 9-3 6 9-6z" fill="#E24329" />
        <path d="M6 13l6 6 6-6-6-4-6 4z" fill="#FCA326" />
      </svg>
    ),
    'Postman': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Postman">
        <circle cx="12" cy="12" r="9" fill="#FF6C37" />
        <path d="M7 12h10M12 7v10" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    'Firebase': (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Firebase">
        <path d="M6 18l3-12 3 6 3-4 3 10-12 0z" fill="#FFCA28" />
        <path d="M6 18l6-4 6 4-6 3-6-3z" fill="#FFA000" />
      </svg>
    )
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
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({ skill, category: category.title }))
  );

  const filteredSkills = activeCategory === 'All' 
    ? allSkills 
    : allSkills.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#1E6A93] rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#2A7CB0] rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#1E6A93] rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 opacity-0 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}>
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-[#5DC9E4] mr-4"></div>
            <span className="text-[#5DC9E4] font-semibold tracking-wider">SKILLSET</span>
            <div className="w-12 h-0.5 bg-[#5DC9E4] ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t(TRANSLATION_KEYS.PROFESSIONAL_SKILLS)}</h2>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg leading-relaxed">
            {t(TRANSLATION_KEYS.SKILLS_DESCRIPTION)}
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 opacity-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}>
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] text-white shadow-lg shadow-[#2A7CB0]/30'
                : 'bg-[#0D3B56] text-slate-300 hover:bg-[#114665]'
            }`}
          >
            {t(TRANSLATION_KEYS.ALL)}
          </button>
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.title)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeCategory === category.title
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-cyan-500/30`
                  : 'bg-[#0D3B56] text-slate-300 hover:bg-[#114665]'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}>
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-[#0D3B56] to-[#0F4665] rounded-2xl p-6 border border-[#1E6A93] shadow-xl transition-all duration-500 hover:shadow-[#2A7CB0]/20 hover:-translate-y-2 ${
                activeCategory !== 'All' && activeCategory !== category.title ? 'opacity-50' : 'opacity-100'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <span className="text-xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="bg-[#0D3B56] rounded-lg p-3 flex items-center transition-all duration-300 hover:bg-[#114665] hover:shadow-md hover:shadow-[#2A7CB0]/10 group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-[#08293D] rounded-md mr-3 group-hover:scale-110 transition-transform">
                      {skillSvgs[skill] || defaultSvg}
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Tech Images */}
        <div className="absolute right-10 top-1/4 opacity-20 hidden xl:block">
          <img 
            src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&q=80&w=500" 
            alt="Technology" 
            className="w-48 h-48 rounded-full object-cover rotate-12"
          />
        </div>
        <div className="absolute left-10 bottom-1/4 opacity-20 hidden xl:block">
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=500" 
            alt="Coding" 
            className="w-40 h-40 rounded-full object-cover -rotate-12"
          />
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 opacity-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}>
          <div className="bg-[#0D3B56]/50 backdrop-blur-sm rounded-xl p-6 text-center border border-[#1E6A93] hover:bg-[#0D3B56]/70 transition-all duration-300">
            <div className="text-3xl font-bold text-[#5DC9E4] mb-2">16+</div>
            <div className="text-slate-200">{t(TRANSLATION_KEYS.TECHNOLOGIES)}</div>
          </div>
          <div className="bg-[#0D3B56]/50 backdrop-blur-sm rounded-xl p-6 text-center border border-[#1E6A93] hover:bg-[#0D3B56]/70 transition-all duration-300">
            <div className="text-3xl font-bold text-[#5DC9E4] mb-2">3+</div>
            <div className="text-slate-200">{t(TRANSLATION_KEYS.FIELDS)}</div>
          </div>
          <div className="bg-[#0D3B56]/50 backdrop-blur-sm rounded-xl p-6 text-center border border-[#1E6A93] hover:bg-[#0D3B56]/70 transition-all duration-300">
            <div className="text-3xl font-bold text-[#5DC9E4] mb-2">5+</div>
            <div className="text-slate-200">{t(TRANSLATION_KEYS.YEARS_EXPERIENCE)}</div>
          </div>
          <div className="bg-[#0D3B56]/50 backdrop-blur-sm rounded-xl p-6 text-center border border-[#1E6A93] hover:bg-[#0D3B56]/70 transition-all duration-300">
            <div className="text-3xl font-bold text-[#5DC9E4] mb-2">50+</div>
            <div className="text-slate-200">{t(TRANSLATION_KEYS.PROJECTS)}</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 opacity-0 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}>
          <button className="px-8 py-4 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#2A7CB0]/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            {t(TRANSLATION_KEYS.EXPLORE_MY_PROJECTS)}
            <span className="ml-2">→</span>
          </button>
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

export default SimpleSkillsSection;