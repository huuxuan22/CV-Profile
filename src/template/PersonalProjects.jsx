import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATION_KEYS } from '../constants/languages';
import { ExternalLink, Eye, Code, Calendar, Briefcase, ChevronRight, Filter } from 'lucide-react';

const PersonalProjects = () => {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const projects = [
    {
      id: 1,
      titleKey: TRANSLATION_KEYS.PROJECT_TECHKAN_TITLE,
      descriptionKey: TRANSLATION_KEYS.PROJECT_TECHKAN_DESCRIPTION,
      image: "/api/placeholder/600/300",
      technologies: ["Vue.js", "Node.js", "Java Spring Boot", "Python FastAPI", "Postgress", "RESTful API", "AWS S3", "Gitlab", "Agile/Scrum"],
      githubUrl: "#",
      liveUrl: "https://techkan.techzen.vn/",
      date: "2025",
      categoryKey: TRANSLATION_KEYS.CATEGORY_INTERNSHIP,
      companyKey: TRANSLATION_KEYS.PROJECT_TECHKAN_COMPANY,
      roleKey: TRANSLATION_KEYS.PROJECT_TECHKAN_ROLE,
      durationKey: TRANSLATION_KEYS.PROJECT_TECHKAN_DURATION,
      achievementKeys: [
        TRANSLATION_KEYS.PROJECT_TECHKAN_ACHIEVEMENT_1,
        TRANSLATION_KEYS.PROJECT_TECHKAN_ACHIEVEMENT_2,
        TRANSLATION_KEYS.PROJECT_TECHKAN_ACHIEVEMENT_3
      ]
    },
    {
      id: 2,
      titleKey: TRANSLATION_KEYS.PROJECT_PTRAN_TITLE,
      descriptionKey: TRANSLATION_KEYS.PROJECT_PTRAN_DESCRIPTION,
      image: "/api/placeholder/600/300",
      technologies: ["React.js", "Redux", "TailwindCSS", "Material-UI", "Spring Boot", "MySQL", "Redis", "JWT", "WPay", "Git", "Postman", "MapStruct"],
      liveUrl: "https://github.com/huuxuan22/ptran-fashioon",
      date: "01/2024 - 03/2024",
      categoryKey: TRANSLATION_KEYS.CATEGORY_PERSONAL,
      companyKey: TRANSLATION_KEYS.CATEGORY_PERSONAL,
      roleKey: TRANSLATION_KEYS.PROJECT_PTRAN_ROLE,
      durationKey: TRANSLATION_KEYS.PROJECT_PTRAN_DURATION,
      achievementKeys: [
        TRANSLATION_KEYS.PROJECT_PTRAN_ACHIEVEMENT_1,
        TRANSLATION_KEYS.PROJECT_PTRAN_ACHIEVEMENT_2,
        TRANSLATION_KEYS.PROJECT_PTRAN_ACHIEVEMENT_3
      ]
    },
    {
      id: 3,
      titleKey: TRANSLATION_KEYS.PROJECT_SHOEZ_TITLE,
      descriptionKey: TRANSLATION_KEYS.PROJECT_SHOEZ_DESCRIPTION,
      image: "/api/placeholder/600/300",
      technologies: ["Vue.js", "TailwindCSS", "FastAPI", "MongoDB", "Redis", "JWT", "WebSocket", "FastAPI-Mail", "Git"],
      githubUrl: "https://github.com/huuxuan22/Shoez-shop",
      liveUrl: "#",
      date: "08/2025 - 11/2025",
      categoryKey: TRANSLATION_KEYS.CATEGORY_GROUP,
      companyKey: TRANSLATION_KEYS.CATEGORY_GROUP,
      roleKey: TRANSLATION_KEYS.PROJECT_SHOEZ_ROLE,
      durationKey: TRANSLATION_KEYS.PROJECT_SHOEZ_DURATION,
      teamSizeKey: TRANSLATION_KEYS.PROJECT_SHOEZ_TEAM_SIZE,
      achievementKeys: [
        TRANSLATION_KEYS.PROJECT_SHOEZ_ACHIEVEMENT_1,
        TRANSLATION_KEYS.PROJECT_SHOEZ_ACHIEVEMENT_2,
        TRANSLATION_KEYS.PROJECT_SHOEZ_ACHIEVEMENT_3
      ]
    },
    {
      id: 4,
      titleKey: TRANSLATION_KEYS.PROJECT_MESSAGING_TITLE,
      descriptionKey: TRANSLATION_KEYS.PROJECT_MESSAGING_DESCRIPTION,
      image: "/api/placeholder/600/300",
      technologies: ["React.js", "Redux", "Material-UI", "Spring Boot", "MySQL", "Redis", "JWT", "Git", "Postman", "MapStruct"],
      githubUrl: "https://github.com/huuxuan22/web-chat-be",
      liveUrl: "#",
      backendUrl: "https://github.com/huuxuan22/web-chat-be",
      frontendUrl: "https://github.com/huuxuan22/web-chat-fe",
      date: "03/2025",
      categoryKey: TRANSLATION_KEYS.CATEGORY_PERSONAL,
      companyKey: TRANSLATION_KEYS.CATEGORY_PERSONAL,
      roleKey: TRANSLATION_KEYS.PROJECT_MESSAGING_ROLE,
      durationKey: TRANSLATION_KEYS.PROJECT_MESSAGING_DURATION,
      achievementKeys: [
        TRANSLATION_KEYS.PROJECT_MESSAGING_ACHIEVEMENT_1,
        TRANSLATION_KEYS.PROJECT_MESSAGING_ACHIEVEMENT_2,
        TRANSLATION_KEYS.PROJECT_MESSAGING_ACHIEVEMENT_3
      ]
    }
  ].map(project => ({
    ...project,
    title: project.titleKey ? t(project.titleKey) : project.title,
    description: project.descriptionKey ? t(project.descriptionKey) : project.description,
    category: project.categoryKey ? t(project.categoryKey) : project.category,
    company: project.companyKey ? t(project.companyKey) : project.company,
    role: project.roleKey ? t(project.roleKey) : project.role,
    duration: project.durationKey ? t(project.durationKey) : project.duration,
    teamSize: project.teamSizeKey ? t(project.teamSizeKey) : project.teamSize,
    achievements: project.achievementKeys ? project.achievementKeys.map(key => t(key)) : project.achievements,
  }));

  const categories = [
    t(TRANSLATION_KEYS.CATEGORY_ALL),
    t(TRANSLATION_KEYS.CATEGORY_INTERNSHIP),
    t(TRANSLATION_KEYS.CATEGORY_PERSONAL),
    t(TRANSLATION_KEYS.CATEGORY_GROUP)
  ];
  const [selectedCategory, setSelectedCategory] = useState(t(TRANSLATION_KEYS.CATEGORY_ALL));

  const filteredProjects = selectedCategory === t(TRANSLATION_KEYS.CATEGORY_ALL)
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="experiences" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header cùng hàng với icon và filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] rounded-md shadow-lg">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {t(TRANSLATION_KEYS.EXPERIENCE_TITLE)}
              </h2>
              <p className="text-lg text-[#B6E1FF] max-w-2xl">
                {t(TRANSLATION_KEYS.EXPERIENCE_DESCRIPTION)}
              </p>
            </div>
          </div>

          {/* Dropdown Filter */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/10 text-[#B6E1FF] rounded-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>{selectedCategory}</span>
              <svg
                className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#0D3B56] border border-[#2A7CB0] rounded-md shadow-lg z-10 overflow-hidden">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 transition-colors flex items-center justify-between ${selectedCategory === category
                      ? 'bg-[#2A7CB0] text-white'
                      : 'text-[#B6E1FF] hover:bg-[#2A7CB0]/50'
                      }`}
                  >
                    {category}
                    {selectedCategory === category && (
                      <div className="w-2 h-2 bg-[#5DC9E4] rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group bg-white/5 backdrop-blur-sm rounded-md shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/10 relative ${activeProject === project.id ? 'ring-2 ring-[#5DC9E4] transform scale-[1.02]' : 'hover:translate-y-[-5px]'
                }`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Project Header */}
              <div className="p-5 border-b border-white/10 flex justify-between items-start">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-[#0D3B56] text-[#B6E1FF] border border-[#2A7CB0] mb-2">
                    {project.category || (project.categoryKey ? t(project.categoryKey) : '')}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#5DC9E4] transition-colors">
                    {project.title || (project.titleKey ? t(project.titleKey) : '')}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-white/70 text-sm mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="text-[#B6E1FF] text-sm">{project.duration || (project.durationKey ? t(project.durationKey) : '')}</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex items-center gap-2 text-[#5DC9E4]">
                    <div className="w-2 h-2 bg-[#5DC9E4] rounded-full"></div>
                    <span className="text-sm font-medium">{project.company || (project.companyKey ? t(project.companyKey) : '')}</span>
                  </div>
                  {project.role && (
                    <span className="text-xs text-[#B6E1FF] ml-4">{project.role || (project.roleKey ? t(project.roleKey) : '')}</span>
                  )}
                  {project.teamSize && (
                    <span className="text-xs text-[#B6E1FF] ml-4">{t(TRANSLATION_KEYS.TEAM_SIZE)}: {project.teamSize || (project.teamSizeKey ? t(project.teamSizeKey) : '')}</span>
                  )}
                </div>

                <p className="text-[#B6E1FF] mb-5 leading-relaxed">
                  {project.description || (project.descriptionKey ? t(project.descriptionKey) : '')}
                </p>

                {/* Achievements */}
                <div className="mb-5">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#5DC9E4] rounded-full"></div>
                    {t(TRANSLATION_KEYS.ACHIEVEMENTS_TITLE)}
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#B6E1FF]">
                        <ChevronRight className="h-4 w-4 text-[#5DC9E4] flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#2A7CB0]/30 text-[#B6E1FF] rounded-md text-sm font-medium border border-[#2A7CB0]/50 hover:bg-[#2A7CB0]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.frontendUrl && project.backendUrl ? (
                    <>
                      <a
                        href={project.frontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] text-white py-2.5 px-5 rounded-md font-medium hover:shadow-lg hover:shadow-[#2A7CB0]/30 transition-all flex items-center justify-center gap-2 group/btn text-sm"
                      >
                        <Code className="h-4 w-4" />
                        <span>{t(TRANSLATION_KEYS.BUTTON_FRONTEND)}</span>
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] text-white py-2.5 px-5 rounded-md font-medium hover:shadow-lg hover:shadow-[#2A7CB0]/30 transition-all flex items-center justify-center gap-2 group/btn text-sm"
                      >
                        <Code className="h-4 w-4" />
                        <span>{t(TRANSLATION_KEYS.BUTTON_BACKEND)}</span>
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </>
                  ) : project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] text-white py-2.5 px-5 rounded-md font-medium hover:shadow-lg hover:shadow-[#2A7CB0]/30 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <Eye className="h-4 w-4" />
                      <span>{t(TRANSLATION_KEYS.BUTTON_VIEW_DEMO)}</span>
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  ) : project.githubUrl && project.githubUrl !== "#" ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] text-white py-2.5 px-5 rounded-md font-medium hover:shadow-lg hover:shadow-[#2A7CB0]/30 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <Code className="h-4 w-4" />
                      <span>{t(TRANSLATION_KEYS.BUTTON_VIEW_CODE)}</span>
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2A7CB0]/10 to-[#5DC9E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Thêm font Montserrat từ Google Fonts */}
      {/* <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap');
      `}</style> */}
    </section>
  );
};

export default PersonalProjects;