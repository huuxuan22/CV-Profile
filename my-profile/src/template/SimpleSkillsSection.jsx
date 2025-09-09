import React, { useEffect, useRef } from 'react';

const SimpleSkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ['ReactJS', 'Redux', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'MUI'],
      icon: "💻"
    },
    {
      title: "Backend Development",
      skills: ['Spring Boot', 'Spring Security', 'Java', 'MySQL', 'SQL Server', 'PhpAdmin'],
      icon: "⚙️"
    },
    {
      title: "DevOps & Tools",
      skills: ['Git', 'GitLab', 'Postman', 'Firebase'],
      icon: "🛠️"
    }
  ];

  const skillIcons = {
    // Frontend
    'ReactJS': '⚛️',
    'Redux': '🌀',
    'Vue.js': '🧩',
    'Tailwind CSS': '🌬️',
    'Bootstrap': '🅱️',
    'MUI': '🎛️',
    // Backend
    'Spring Boot': '🌱',
    'Spring Security': '🔐',
    'Java': '☕',
    'MySQL': '🐬',
    'SQL Server': '🗄️',
    'PhpAdmin': '🐘',
    // DevOps & Tools
    'Git': '🌿',
    'GitLab': '🦊',
    'Postman': '📮',
    'Firebase': '🔥'
  };

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftEl = leftRef.current;
    const rightEl = rightRef.current;
    if (!leftEl || !rightEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('-translate-x-8');
            entry.target.classList.remove('translate-x-8');
            entry.target.classList.add('opacity-100');
            entry.target.classList.add('translate-x-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(leftEl);
    observer.observe(rightEl);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card');
    if (!cards.length) return;

    const itemsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('translate-y-3');
            entry.target.classList.add('opacity-100');
            entry.target.classList.add('translate-y-0');
            itemsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    cards.forEach((el) => itemsObserver.observe(el));
    return () => itemsObserver.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-[#0F2A3F] mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#E9F4FB] mb-4">Kỹ Năng Chuyên Môn</h2>
          <p className="text-[#A8D1E8]">Các công nghệ và công cụ tôi thành thạo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div
            ref={leftRef}
            className="opacity-0 -translate-x-8 md:sticky md:top-28 transition-all duration-700 ease-out will-change-transform"
          >
            <div className="relative w-full aspect-video bg-[#1C5373] rounded-2xl shadow-xl border border-[#2A7CB0]/30 overflow-hidden">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.nMLvSM1x4RxpyhMwkgDVxQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Skills Illustration"
                className="w-full h-full object-contain p-8"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2A7CB033] to-transparent pointer-events-none" />
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#2A7CB055] blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#2A7CB055] blur-2xl" />
            </div>
          </div>

          <div
            ref={rightRef}
            className="opacity-0 translate-x-8 transition-all duration-700 ease-out will-change-transform"
          >
            {(() => {
              const allSkills = skillCategories.flatMap((c) => c.skills);
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allSkills.map((skill, index) => (
                    <div
                      key={`${skill}-${index}`}
                      className="skill-card px-4 py-3 bg-[#1C5373] border-l-4 border-[#5BB0E3] flex items-center transform transition-all duration-300 hover:shadow-md hover:bg-[#21628A] group opacity-0 translate-y-3"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <span className="mr-3 inline-flex h-8 w-8 items-center justify-center bg-[#0F2A3F] text-base text-[#C3E3F7] shadow-sm">
                        {skillIcons[skill] || '🔹'}
                      </span>
                      <span className="text-[#E9F4FB] font-medium group-hover:text-white">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSkillsSection;