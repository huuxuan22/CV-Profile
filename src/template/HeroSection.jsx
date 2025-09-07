import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Danh sách hình nền với gradient thay vì hình ảnh để tăng độ rõ ràng
  const backgrounds = [
    'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    'linear-gradient(135deg, #1e293b 0%, #475569 100%)'
  ];

  // Hiệu ứng chuyển đổi tự động
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background với hiệu ứng chuyển đổi */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: bg,
            }}
          />
        ))}
      </div>

      {/* Pattern overlay tinh tế */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Nội dung chính */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Avatar với viền sáng */}
        <div className="mb-10 w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl relative">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
            alt="Niko Bocheser" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
        </div>

        {/* Greeting */}
        <div className="mb-4 overflow-hidden">
          <h1 className="text-2xl md:text-3xl font-light text-slate-300 tracking-wider animate-fadeIn">
            HELLO, I'M
          </h1>
        </div>
        
        {/* Name - Rõ ràng và nổi bật */}
        <div className="mb-6 overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-slideIn">
            NIKO BOCHESER
          </h2>
        </div>
        
        {/* Title với dấu gạch trang trí */}
        <div className="mb-8 overflow-hidden relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-20 h-1 bg-blue-500 rounded-full"></div>
          <p className="text-xl md:text-2xl font-medium text-slate-300 animate-fadeIn delay-300">
            FREELANCE WEB DEVELOPER
          </p>
        </div>

        {/* Location và chuyên môn */}
        <div className="mb-10 overflow-hidden">
          <p className="text-lg text-slate-400 animate-fadeIn delay-500 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Based in Scotland · Web Designer & Developer
          </p>
        </div>

        {/* Mô tả ngắn về bản thân */}
        <div className="mb-10 max-w-2xl animate-fadeIn delay-700">
          <p className="text-slate-400 text-lg leading-relaxed">
            I create modern, responsive websites and applications with focus on performance and user experience. 
            Let's work together to bring your ideas to life.
          </p>
        </div>

        {/* CTA Buttons - Rõ ràng với hai lựa chọn */}
        <div className="flex flex-col sm:flex-row gap-5 animate-bounceIn delay-900">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center justify-center">
              HIRE ME
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
          
          <button className="border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-medium py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            VIEW PORTFOLIO
          </button>
        </div>

        {/* Social links */}
        <div className="mt-12 flex space-x-6 animate-fadeIn delay-1100">
          {['github', 'linkedin', 'dribbble', 'twitter'].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-slate-400 hover:text-white transition-colors duration-300 p-2 rounded-full bg-slate-800 hover:bg-slate-700"
              aria-label={platform}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="font-semibold text-sm">{platform[0].toUpperCase()}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="flex flex-col items-center text-slate-500">
            <span className="text-sm mb-2">Scroll down</span>
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chỉ báo hình nền */}
      <div className="absolute bottom-8 right-8 z-10 flex space-x-3">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-slate-400 ${
              currentImage === index ? 'bg-white scale-125' : 'bg-transparent scale-100'
            }`}
            aria-label={`Change background ${index + 1}`}
          />
        ))}
      </div>

      {/* Styles cho animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          60% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 1s ease-out forwards;
        }
        
        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out forwards;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .delay-900 {
          animation-delay: 0.9s;
        }
        
        .delay-1100 {
          animation-delay: 1.1s;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 