import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TRANSLATION_KEYS } from "../constants/languages";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16 bg-gradient-to-br from-[#0D3B56] to-[#2A7CB0]">
      {/* Background elements đơn giản */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#2A7CB0] rounded-full opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#5DC9E4] rounded-full opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Left side - Content */}
        <div className="text-center md:text-left">
          {/* Main heading với font Times New Roman */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            {t(TRANSLATION_KEYS.HELLO)} {t(TRANSLATION_KEYS.I_AM)} <br />
            <span className="text-[#5DC9E4]">Trần Dương Hữu Xuân</span>
          </h1>
          
          {/* Description */}
          <p 
            className="text-lg md:text-xl text-[#B6E1FF] mb-8 leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Full Stack Developer với đam mê xây dựng ứng dụng web và mobile. 
            Chuyên về JavaScript, ReactJS, NodeJS và các framework hiện đại.
          </p>
          
          {/* Divider line đơn giản */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] mb-8 mx-auto md:mx-0"></div>
          
          {/* Contact section */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h3 
                className="text-white text-lg font-semibold mb-3"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                {t(TRANSLATION_KEYS.CONTACT_INFO)}
              </h3>
              <div className="flex justify-center md:justify-start space-x-3">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 极速3 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-极速3 1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.极速3 75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Download Resume Button */}
            <div className="text-center md:text-left">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-white text-[#0D3B56] font-semibold rounded-lg hover:bg-gray-100 transition-all border-2 border-transparent hover:border-white"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                TẢI CV
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-[#2A7CB0] to-[#5DC9E4] rounded-full overflow-hidden shadow-xl border-4 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Trần Dương Hữu Xuân - Full Stack Developer" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Simple tech badges */}
            <div className="absolute -top-2 right-8 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
              <span className="text-xs text-white font-medium">ReactJS</span>
            </div>
            
            <div className="absolute bottom-4 -left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
              <span className="text-xs text-white font-medium">Node.js</span>
            </div>
            
            <div className="absolute top-1/2 -right-6 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
              <span className="text-xs text-white font-medium">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;