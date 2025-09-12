import React from "react";
import { 
  User, Book, School, Target, Star, Code, 
  Database, Server, Braces, Globe, Cpu, DatabaseZap
} from "lucide-react";

const AboutMe = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#0D3B56] to-[#2A7CB0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-white">
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left - Avatar & Basic Info */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80"
                alt="Avatar"
                className="w-40 h-40 rounded border-4 border-white/20 mb-6"
              />
              
              <div className="text-center lg:text-left space-y-3">
                <h1 className="text-2xl font-bold">Trần Dương Hữu Xuân</h1>
                
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <User className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">22 tuổi</span>
                </div>
                
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Book className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">Sinh viên năm 4</span>
                </div>
                
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <School className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">ĐH SPKT Đà Nẵng</span>
                </div>
                
                <div className="bg-[#0D3B56] px-4 py-2 rounded border border-[#2A7CB0] mt-4">
                  <p className="font-semibold">Fullstack Developer</p>
                </div>
              </div>
            </div>

            {/* Right - Details */}
            <div className="w-full lg:w-2/3 space-y-6">
              {/* Skills với icon chính xác */}
              <div className="p-5 rounded bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-[#5DC9E4]" />
                  <h3 className="text-xl font-bold">Kỹ Năng</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    { name: "Java", icon: <Cpu className="h-4 w-4" /> },
                    { name: "Python", icon: <Braces className="h-4 w-4" /> },
                    { name: "Vue.js", icon: <Globe className="h-4 w-4" /> },
                    { name: "React.js", icon: <Globe className="h-4 w-4" /> },
                    { name: "MySQL", icon: <Database className="h-4 w-4" /> },
                    { name: "SQL Server", icon: <DatabaseZap className="h-4 w-4" /> },
                    { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
                    { name: "PHP Admin", icon: <Server className="h-4 w-4" /> }
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-[#2A7CB0]/30 rounded text-sm border border-[#2A7CB0]/50">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div className="p-5 rounded bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-[#5DC9E4]" />
                  <h3 className="text-xl font-bold">Điểm Mạnh</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["Ham học hỏi", "Trách nhiệm cao", "Thích nghi nhanh", "Tư duy giải quyết vấn đề", "Kỹ năng làm việc nhóm", "Sáng tạo"].map((strength) => (
                    <div key={strength} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#5DC9E4] rounded"></div>
                      <span className="text-blue-100">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div className="p-5 rounded bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-[#5DC9E4]" />
                  <h3 className="text-xl font-bold">Mục Tiêu</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Trở thành Fullstack Developer chuyên nghiệp",
                    "Xây dựng ứng dụng web hiện đại", 
                    "Đóng góp cho cộng đồng lập trình",
                    "Phát triển kỹ năng leadership"
                  ].map((goal) => (
                    <div key={goal} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-300 rounded"></div>
                      <span className="text-blue-100">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Giới thiệu ngắn */}
          <div className="mt-8 p-5 rounded bg-white/5">
            <p className="text-blue-100 leading-relaxed">
              Tôi là sinh viên Công nghệ thông tin với niềm đam mê lập trình và sáng tạo. 
              Luôn tìm kiếm cơ hội để học hỏi, phát triển kỹ năng và ứng dụng kiến thức vào thực tế. 
              Mong muốn được làm việc trong môi trường chuyên nghiệp và đóng góp cho các dự án ý nghĩa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;