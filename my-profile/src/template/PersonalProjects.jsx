import { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Calendar, Briefcase, ChevronRight, Filter } from 'lucide-react';

const PersonalProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Hệ Thống Quản Lý Kho Hàng - Công Ty ABC",
      description: "Phát triển hệ thống quản lý kho hàng với tính năng theo dõi tồn kho, quản lý nhập xuất và báo cáo tự động. Giúp công ty tối ưu hóa quy trình và giảm 30% thời gian quản lý.",
      image: "/api/placeholder/600/300",
      technologies: ["React", "Node.js", "MySQL", "Express", "Bootstrap"],
      githubUrl: "https://github.com/username/warehouse-management",
      liveUrl: "https://warehouse-abc.com",
      date: "2023",
      category: "Thực tập",
      company: "Công ty ABC",
      duration: "6 tháng",
      achievements: ["Tối ưu hóa quy trình", "Giảm 30% thời gian quản lý", "Tích hợp báo cáo tự động"]
    },
    {
      id: 2,
      title: "Ứng Dụng Đặt Lịch Khám Bệnh - Bệnh Viện XYZ",
      description: "Xây dựng ứng dụng đặt lịch khám bệnh trực tuyến với tính năng chọn bác sĩ, thanh toán online và nhận thông báo. Giảm thiểu thời gian chờ đợi cho bệnh nhân lên đến 50%.",
      image: "/api/placeholder/600/300",
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe API"],
      githubUrl: "https://github.com/username/booking-hospital",
      liveUrl: "https://booking-hospital-xyz.com",
      date: "2023",
      category: "Dự án thực tế",
      company: "Bệnh viện XYZ",
      duration: "8 tháng",
      achievements: ["Giảm 50% thời gian chờ đợi", "Tích hợp thanh toán online", "Hệ thống thông báo tự động"]
    },
    {
      id: 3,
      title: "Hệ Thống Quản Lý Dự Án Nội Bộ - Công Ty DEF",
      description: "Phát triển hệ thống quản lý dự án nội bộ với tính năng phân công công việc, theo dõi tiến độ và báo cáo tự động. Tăng năng suất làm việc nhóm lên 25%.",
      image: "/api/placeholder/600/300",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Material UI"],
      githubUrl: "https://github.com/username/project-management",
      liveUrl: "https://project-management-def.com",
      date: "2024",
      category: "Thực tập",
      company: "Công ty DEF",
      duration: "5 tháng",
      achievements: ["Tăng 25% năng suất", "Theo dõi tiến độ real-time", "Báo cáo tự động"]
    },
    {
      id: 4,
      title: "Cổng Thông Tin Tuyển Dụng - Đại Học GHI",
      description: "Xây dựng cổng thông tin kết nối sinh viên với nhà tuyển dụng, hỗ trợ tìm kiếm việc làm thực tập và toàn thời gian. Thu hút hơn 1000 sinh viên đăng ký trong tháng đầu tiên.",
      image: "/api/placeholder/600/300",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/username/recruitment-portal",
      liveUrl: "https://career-ghi-university.com",
      date: "2024",
      category: "Dự án thực tế",
      company: "Đại học GHI",
      duration: "9 tháng",
      achievements: ["1000+ sinh viên đăng ký", "Kết nối 50+ nhà tuyển dụng", "Hệ thống recommendation"]
    }
  ];

  const categories = ["Tất cả", "Thực tập", "Dự án thực tế"];
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredProjects = selectedCategory === "Tất cả" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0D3B56] to-[#2A7CB0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header cùng hàng với icon và filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] rounded-md shadow-lg">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-2" style={{fontFamily: "'Montserrat', sans-serif"}}>
                EXPERIENCE
              </h2>
              <p className="text-lg text-[#B6E1FF] max-w-2xl">
                Các dự án thực tế và kinh nghiệm làm việc chuyên nghiệp
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
                    className={`w-full text-left px-4 py-3 transition-colors flex items-center justify-between ${
                      selectedCategory === category
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
              className={`group bg-white/5 backdrop-blur-sm rounded-md shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/10 relative ${
                activeProject === project.id ? 'ring-2 ring-[#5DC9E4] transform scale-[1.02]' : 'hover:translate-y-[-5px]'
              }`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Project Header */}
              <div className="p-5 border-b border-white/10 flex justify-between items-start">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-[#0D3B56] text-[#B6E1FF] border border-[#2A7CB0] mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#5DC9E4] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-white/70 text-sm mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="text-[#B6E1FF] text-sm">{project.duration}</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-[#5DC9E4] mb-3">
                  <div className="w-2 h-2 bg-[#5DC9E4] rounded-full"></div>
                  <span className="text-sm font-medium">{project.company}</span>
                </div>
                
                <p className="text-[#B6E1FF] mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-5">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#5DC9E4] rounded-full"></div>
                    Thành tựu nổi bật
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] text-white py-2.5 px-5 rounded-md font-medium hover:shadow-lg hover:shadow-[#2A7CB0]/30 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Xem Demo</span>
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#0D3B56] text-white py-2.5 px-5 rounded-md font-medium hover:bg-[#114665] transition-colors flex items-center justify-center gap-2 group/btn border border-[#2A7CB0]"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2A7CB0]/10 to-[#5DC9E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Thêm font Montserrat từ Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap');
      `}</style>
    </section>
  );
};

export default PersonalProjects;