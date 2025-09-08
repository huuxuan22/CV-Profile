import React from "react";

const AboutMe = () => {
  const name = "Trần Dương Hữu Xuân";
  const role = "Sinh viên Công nghệ thông tin — Fullstack Developer (aspiring)";
  const location = "Đại học Sư phạm Kỹ thuật Đà Nẵng";
  const color = "#174F70";

  return (
    <section
      className="w-full py-12 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${color} 0%, rgba(23,79,112,0.92) 60%)`,
      }}
      aria-labelledby="about-title"
    >
      {/* Background pattern for visual enhancement */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-lg text-white transform transition-all duration-500 ease-out hover:shadow-xl cursor-pointer"
          style={{
            boxShadow: "0 20px 50px rgba(23,79,112,0.35)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
            {/* Left: avatar + basic */}
            <div className="w-full md:w-40 flex-shrink-0 flex justify-center md:block">
              <div
                className="w-40 h-40 overflow-hidden border-2 border-white/20 shadow-lg transform transition-all duration-700 ease-out hover:scale-105 cursor-pointer"
                style={{ borderRadius: "8px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80"
                  alt={`${name} avatar`}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                />
              </div>
            </div>

            {/* Right: content */}
            <div className="flex-1 text-left">
              <h2
                id="about-title"
                className="text-2xl md:text-3xl font-bold mb-3 text-left transition-all duration-500 ease-out"
              >
                Xin chào — Tôi là {name}
              </h2>
              <p className="text-sm text-blue-100 mb-5 text-left leading-relaxed transition-all duration-500 ease-out">
                {role} • {location}
              </p>

              <p className="text-sm text-blue-100 leading-relaxed mb-6 text-left border-l-4 border-white/30 pl-4 py-1 transition-all duration-500 ease-out">
                Tôi có 2 tháng kinh nghiệm làm việc tại Techzen Company (dự án
                Techkan — hệ thống quản lý vận hành theo Scrum) và đã thực hiện
                các dự án cá nhân:{" "}
                <strong className="text-white font-semibold transition-all duration-300 ease-out hover:text-blue-200">
                  Ptran-fashion
                </strong>{" "}
                và{" "}
                <strong className="text-white font-semibold transition-all duration-300 ease-out hover:text-blue-200">
                  Web-chat
                </strong>
                . Mục tiêu của tôi là trở thành một Fullstack Developer chuyên
                nghiệp — phát triển và triển khai ứng dụng web hiện đại.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="p-4 bg-white/3 border border-white/6 rounded-lg transform transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/5 cursor-pointer group">
                  <h3 className="text-sm font-semibold text-white mb-3 text-left border-b border-white/20 pb-2 transition-all duration-500 ease-out group-hover:text-base group-hover:tracking-wide">
                    Kinh nghiệm & Dự án
                  </h3>
                  <ul className="text-sm text-blue-100 space-y-2 text-left">
                    {[
                      "Techzen Company — Techkan (Quản lý vận hành theo Scrum)",
                      "Ptran-fashion — Project cá nhân",
                      "Web-chat — Project cá nhân",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start transition-all duration-400 ease-out group-hover:items-center"
                      >
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 transition-all duration-400 ease-out group-hover:mt-0 group-hover:scale-110"></span>
                        <span className="transition-all duration-500 ease-out group-hover:text-[0.95rem] group-hover:font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white/3 border border-white/6 rounded-lg transform transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/5 cursor-pointer group">
                  <h3 className="text-sm font-semibold text-white mb-3 text-left border-b border-white/20 pb-2 transition-all duration-500 ease-out group-hover:text-base group-hover:tracking-wide">
                    Mục tiêu
                  </h3>
                  <ul className="text-sm text-blue-100 space-y-2 text-left">
                    {[
                      "Ngắn hạn: Tích lũy kinh nghiệm, cải thiện teamwork",
                      "Dài hạn: Trở thành Senior Fullstack Developer và dẫn dắt dự án",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start transition-all duration-400 ease-out group-hover:items-center"
                      >
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 transition-all duration-400 ease-out group-hover:mt-0 group-hover:scale-110"></span>
                        <span className="transition-all duration-500 ease-out group-hover:text-[0.95rem] group-hover:font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/4 border border-white/6 rounded-lg transform transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/5 cursor-pointer group">
                  <h4 className="text-sm font-medium text-white mb-2 text-left flex items-center transition-all duration-500 ease-out group-hover:text-base group-hover:tracking-wide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 transition-all duration-500 ease-out group-hover:h-5 group-hover:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    Sở thích
                  </h4>
                  <p className="text-sm text-blue-100 text-left pl-6 transition-all duration-500 ease-out group-hover:text-[0.95rem] group-hover:font-medium">
                    Bóng đá, Bóng chuyền, Cầu lông
                  </p>
                </div>

                <div className="p-4 bg-white/4 border border-white/6 rounded-lg transform transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/5 cursor-pointer group">
                  <h4 className="text-sm font-medium text-white mb-2 text-left flex items-center transition-all duration-500 ease-out group-hover:text-base group-hover:tracking-wide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 transition-all duration-500 ease-out group-hover:h-5 group-hover:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                    Âm nhạc & Sở trường
                  </h4>
                  <div className="text-sm text-blue-100 text-left pl-6 space-y-2">
                    <p className="mb-2 transition-all duration-500 ease-out group-hover:text-[0.95rem] group-hover:font-medium">
                      Chơi Cajon, Guitar. Sở trường: kỹ năng thể thao (Bóng đá,
                      Bóng chuyền)
                    </p>

                    <div className="border-t border-white/10 pt-2 mt-2">
                      <p className="font-semibold text-white/90 text-xs uppercase tracking-wide mb-1 transition-all duration-500 ease-out group-hover:text-sm group-hover:normal-case">
                        Tính cách làm việc:
                      </p>
                      <ul className="space-y-1">
                        {[
                          "Tìm hiểu công nghệ mới",
                          "Chịu khó học hỏi",
                          "Tích cực hỗ trợ đồng đội",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start transition-all duration-400 ease-out group-hover:items-center"
                          >
                            <span className="inline-block w-1.5 h-1.5 bg-blue-300 rounded-full mt-1.5 mr-2 flex-shrink-0 transition-all duration-400 ease-out group-hover:mt-0 group-hover:scale-110"></span>
                            <span className="transition-all duration-500 ease-out group-hover:text-[0.95rem] group-hover:font-medium">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* subtle accent line */}
        <div
          className="mt-6 h-0.5 w-full transition-all duration-1000 ease-out"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(23,79,112,0.0))",
          }}
        />
      </div>

      {/* local styles */}
      <style jsx>{`
        /* Smooth transitions for all elements */
        * {
          transition-property: transform, color, background-color, border-color,
            opacity, font-size, padding, margin;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.001ms !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </section>
  );
};
export default AboutMe;
