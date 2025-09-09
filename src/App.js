import "./App.css";
import AboutMe from "./template/AboutMe";
import Contact from "./template/Contact";
import Header from "./template/Header";
import HeroSection from "./template/HeroSection";
import SimpleSkillsSection from "./template/SimpleSkillsSection";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App min-h-screen bg-gradient-to-br from-[#0D2D3E] via-[#164E6F] to-[#0D2D3E] relative">
        {/* Background Elements */}
        <div className="background-elements">
          <div className="bg-circle-1"></div>
          <div className="bg-circle-2"></div>
          <div className="bg-circle-3"></div>
          <div className="grid-pattern"></div>
        </div>
        <Header />

        <main className="pt-24 md:pt-28">
          {/* <AboutMe />
          <HeroSection />
          <SimpleSkillsSection /> */}
          <HeroSection />
          <SimpleSkillsSection />
          <Contact />
          
          
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
