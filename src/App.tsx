import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <Profile /> */}
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
