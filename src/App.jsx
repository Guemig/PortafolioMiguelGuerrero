import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      
      {/* Barra de redes siempre visible */}
      <SocialBar />

      {/* Navegación */}
      <Navbar />

      {/* Secciones */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Gallery />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
