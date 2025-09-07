import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Danh sách hình ảnh (thay thế bằng đường dẫn hình ảnh của bạn)
  const images = [
    'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  // Hiệu ứng chuyển đổi hình ảnh tự động
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Chuyển hình mỗi 5 giây

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images với hiệu ứng chuyển đổi */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        
        {/* Gradient overlay sang trọng */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Nội dung chính */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Avatar container */}
        <div className="mb-8 w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl animate-float">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
            alt="Your Avatar" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="mb-8 space-y-4">
          {/* Greeting */}
          <div className="overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider text-gray-200 animate-fadeInUp">
              HELLO, I'M
            </h1>
          </div>
          
          {/* Name */}
          <div className="overflow-hidden">
            <h2 className="text-5xl md:text-8xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-slideInLeft">
              NIKO BOCHESER
            </h2>
          </div>
          
          {/* Title */}
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl font-light tracking-widest text-gray-300 mb-8 animate-fadeIn delay-500">
              FREELANCE WEB DEVELOPER
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="overflow-hidden mb-10">
          <p className="text-lg md:text-xl font-light italic text-gray-400 animate-fadeIn delay-700 border-l-4 border-blue-400 pl-4 py-2">
            Based in Scotland · Web Designer & Developer
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-bounceIn delay-1000">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-5 px-12 rounded-full text-lg md:text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              HIRE ME
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            
            {/* Hiệu ứng hover */}
            <span
              className={`absolute inset-0 bg-white/20 rounded-full transition-all duration-500 transform ${
                isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            ></span>
            
            {/* Shine effect */}
            <span className="absolute inset-0 -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-700">
              <span className="absolute inset-0 bg-white/10"></span>
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Chỉ báo hình ảnh */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col space-y-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white ${
              currentImage === index ? 'bg-white scale-125' : 'bg-transparent scale-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Styles cho animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(40px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
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
        
        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1.2s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        .animate-bounceIn {
          animation: bounceIn 1.2s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;