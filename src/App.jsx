import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Statistics from "./components/Statistics";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Statistics />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
