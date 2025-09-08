import "./App.css";
import AboutMe from "./template/AboutMe";
import Contact from "./template/Contact";
import Header from "./template/Header";
import HeroSection from "./template/HeroSection";
import SimpleSkillsSection from "./template/SimpleSkillsSection";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AboutMe />
      <HeroSection />
      <SimpleSkillsSection /> */}
      <Contact />
    </div>
  );
}

export default App;
