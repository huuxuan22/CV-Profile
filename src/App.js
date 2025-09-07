import logo from './logo.svg';
import './App.css';
import Header from './template/Header';
import HeroSection from './template/HeroSection';
import SimpleSkillsSection from './template/SimpleSkillsSection';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <HeroSection/> */}
      <SimpleSkillsSection/>
    </div>
  );
}

export default App;
