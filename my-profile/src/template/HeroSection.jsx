import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Gradient nền tone xanh dương - trắng tinh tế
  const backgrounds = [
    "linear-gradient(135deg,#022c43 0%,#0b486b 50%,#062a44 100%)",
    "linear-gradient(135deg,#062a44 0%,#0b486b 40%,#0f3750 100%)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const name = "Niko Bocheser"; // đổi tên nếu cần
  const cvUrl = "/CV.pdf"; // đặt file CV vào public/CV.pdf

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background gradient chuyển mượt */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImage === idx ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: bg }}
          />
        ))}
      </div>

      {/* Overlay hoa văn nhẹ trắng */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)",
          backgroundSize: "48px 48px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Card nội dung chính - vuông góc */}
      <div className="relative z-10 w-full max-w-4xl mx-auto p-8 md:p-12 bg-white/5 backdrop-blur-sm border border-blue-300/20 rounded-none shadow-[0_20px_60px_rgba(2,44,67,0.45)] text-center">
        {/* Avatar chuyên nghiệp (floating) */}
        <div className="mx-auto mb-6 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-xl relative transform transition-all hover:scale-102">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt={`${name} avatar`}
            className="w-full h-full object-cover object-top float-animate"
          />
          <div className="absolute inset-0 rounded-full pointer-events-none ring-2 ring-white/6 animate-border-pulse" />
        </div>

        {/* Greeting ngắn gọn (Tiếng Việt) */}
        <p className="text-sm text-blue-200/90 tracking-wider mb-2">
          Xin chào, tôi là{" "}
          <span className="font-semibold text-white">{name}</span>, Lập trình
          viên Fullstack
        </p>

        {/* Tên & tagline */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
          No pain, no gain
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed mb-6">
          Tôi thiết kế và xây dựng ứng dụng web hiện đại, tối ưu hiệu năng và
          trải nghiệm người dùng — sẵn sàng hiện thực hóa ý tưởng của bạn.
        </p>

        {/* CTA: Download CV và Hire Me - vuông góc, hiệu ứng */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-3 bg-white text-blue-900 font-semibold px-6 py-3 rounded-none shadow hover:-translate-y-1 transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Download CV"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v12m0 0l-4-4m4 4 4-4M21 21H3"
              />
            </svg>
            Tải CV
          </a>

          <a
            href="mailto:youremail@example.com?subject=Hire%20Request"
            className="inline-flex items-center gap-3 border border-blue-300 text-white px-6 py-3 rounded-none hover:bg-blue-800/60 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Hire Me"
          >
            Hire Me
          </a>
        </div>

        {/* Social / small info */}
        <div className="mt-8 flex items-center justify-center space-x-4 text-blue-200">
          <span className="text-sm">Based in Scotland</span>
          <span className="h-1 w-1 bg-white/10 rounded-sm inline-block" />
          <span className="text-sm">Web Designer & Developer</span>
        </div>
      </div>

      {/* Indicators nền (bên phải dưới) - vuông */}
      <div className="absolute bottom-6 right-6 z-20 flex space-x-3">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-4 h-4 rounded-sm transition-transform duration-300 border ${
              currentImage === index
                ? "bg-white border-white/60 scale-110"
                : "bg-white/10 border-white/20"
            }`}
            aria-label={`Change background ${index + 1}`}
          />
        ))}
      </div>

      {/* Local styles cho animation nhẹ và hiệu ứng vuông góc */}
      <style jsx>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        .float-animate {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-border-pulse {
          animation: borderPulse 2.8s infinite;
        }
        @keyframes borderPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.02);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(2, 126, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
