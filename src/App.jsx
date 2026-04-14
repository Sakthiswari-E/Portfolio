import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import FloatingIcons from "./components/FloatingIcons";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <FloatingIcons /> */}
      <Projects />
      <Contact />
    </div>
  );
}