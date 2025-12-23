import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", id: "hero" },
    { label: "Sobre mí", id: "sobre-mi" },
    { label: "CV", id: "cv" },
    { label: "Skills", id: "skills" },
    { label: "Galería", id: "galeria" },
    { label: "Proyectos", id: "proyectos" },
    { label: "Contacto", id: "contact" },
  ];

  // 👉 Scroll suave SIN recargar
  const scrollToSection = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 👉 Recargar y volver al inicio (como querías)
  const reloadAndGoHome = () => {
    window.location.href = "/";
  };

  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* FOTO + NOMBRE (RECARGA LA PÁGINA) */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={reloadAndGoHome}
        >
          <img
            src="/foto-miguel.png"
            alt="Miguel Guerrero"
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
          <h1 className="text-xl font-bold text-white whitespace-nowrap">
            Miguel Guerrero - Multimedia Engineer
          </h1>
        </div>

        {/* MENÚ DESKTOP */}
        <ul className="hidden md:flex gap-6 text-lg text-white">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative cursor-pointer transition hover:text-blue-400 group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* MENÚ MOBILE */}
      {isOpen && (
        <ul className="md:hidden bg-blue-950 flex flex-col items-center py-6 space-y-4 text-white">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer text-lg hover:text-blue-400 transition"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
