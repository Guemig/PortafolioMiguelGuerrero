import { useEffect, useState } from "react";
import MiniGame from "./MiniGame";

export default function Hero() {
  const palabras = [
     "Ingeniero Multimedia",
    "Creador de Experiencias",
    "Game Developer",
  "Content Creator",
  "Brand Designer",
  "Video Editor & Filmmaker",
"Diseñador de marca y logotipo",
"Operador de cámara",
"Narrador audiovisual"
  ];

  const [texto, setTexto] = useState("");
  const [palabraIndex, setPalabraIndex] = useState(0);
  const [borrando, setBorrando] = useState(false);

  // 🎮 Estado del juego
  const [playGame, setPlayGame] = useState(false);

  useEffect(() => {
    const palabra = palabras[palabraIndex];
    const speed = borrando ? 60 : 120;

    const interval = setInterval(() => {
      setTexto((prev) =>
        borrando
          ? palabra.substring(0, prev.length - 1)
          : palabra.substring(0, prev.length + 1)
      );

      if (!borrando && texto === palabra) {
        setTimeout(() => setBorrando(true), 800);
      }

      if (borrando && texto === "") {
        setBorrando(false);
        setPalabraIndex((prev) => (prev + 1) % palabras.length);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [texto, borrando, palabraIndex]);

  // 👉 Si el juego está activo, mostramos el juego
  if (playGame) {
    return <MiniGame onExit={() => setPlayGame(false)} />;
  }

  return (
    <section id="hero" className="h-screen w-full flex items-center justify-center text-center relative overflow-hidden">

      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-blue-900 to-purple-900 animate-gradient opacity-60"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Hola, soy <span className="text-blue-400">Miguel Guerrero</span>
        </h1>

        <h2 className="text-2xl md:text-4xl text-gray-300 h-12">
          {texto}
          <span className="animate-pulse">|</span>
        </h2>

        {/* 🔁 BOTÓN CAMBIADO */}
        <button
          onClick={() => setPlayGame(true)}
          className="mt-10 px-10 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-full transition shadow-lg shadow-blue-500/20 text-white"
        >
          JUGAR MINI JUEGO
        </button>
      </div>
    </section>
  );
}
