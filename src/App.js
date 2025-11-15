import "./App.css";
import { useState, useEffect } from "react";
import AboutMe from "./template/AboutMe";
import Contact from "./template/Contact";
import Header from "./template/Header";
import HeroSection from "./template/HeroSection.jsx";
import SimpleSkillsSection from "./template/SimpleSkillsSection";
import { LanguageProvider } from "./contexts/LanguageContext";
import PersonalProjects from "./template/PersonalProjects";
import Hobbies from "./template/Hobbies";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const minLoadTime = 1500; // Thời gian tối thiểu hiển thị loading (1.5 giây)
    const startTime = Date.now();

    // Kiểm tra khi tất cả images và resources đã load xong
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      }, remainingTime);
    };

    // Kiểm tra nếu page đã load xong
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout - đảm bảo loading sẽ kết thúc sau tối đa 5 giây
      setTimeout(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      }, 5000);
    }

    return () => {
      isMounted = false;
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) {
    return (
      <LanguageProvider>
        <LoadingScreen />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      {/* Unified Background Container - Background chung cho toàn bộ dự án */}
      <div className="app-container">
        {/* Global Animated Background - Fixed ở background, áp dụng cho tất cả */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Main gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #0D3B56 0%, #1C5C84 50%, #2A7CB0 100%)",
              backgroundAttachment: "fixed"
            }}
          ></div>

          {/* Animated decorative circles */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#1E6A93] rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#2A7CB0] rounded-full opacity-20 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#1E6A93] rounded-full opacity-15 blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#5DC9E4] rounded-full opacity-10 blur-3xl animate-pulse"
            style={{ animationDelay: "6s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#174F70] rounded-full opacity-12 blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Floating particles for better coverage */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                animation: `float ${Math.random() * 15 + 10
                  }s infinite ease-in-out`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Content with relative positioning - Tất cả sections sử dụng background chung */}
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <SimpleSkillsSection />
          <PersonalProjects />
          <AboutMe />
          <Hobbies />
          <Contact />
        </div>
      </div>

      <style jsx>{`
        .app-container {
          min-height: 100vh;
          position: relative;
        }

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
    </LanguageProvider>
  );
}

export default App;
