import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCallback } from "react";

// Partículas
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function SobreMi() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.25,
  });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: "transparent" },
    particles: {
      number: { value: 25 },
      color: { value: "#a6d4ff" },
      opacity: {
        value: 0.6,
        anim: { enable: true, speed: 0.5, opacity_min: 0.1 },
      },
      size: { value: 3, random: true },
      move: { enable: true, speed: 0.6, direction: "none", outModes: "out" },
    },
    fullScreen: { enable: false },
  };

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="relative w-full bg-blue-900 overflow-hidden scroll-mt-18"
    >
      {/* PARTÍCULAS */}
      <Particles
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* NEBLINA */}
      <div className="mist-container">
        <div className="mist mist1"></div>
        <div className="mist mist2"></div>
        <div className="mist mist3"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 space-y-40">

        {/* ================= SOBRE MÍ ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* FOTO */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/foto-miguel.png"
              alt="Miguel Guerrero"
              className="w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-white/30"
            />
          </motion.div>

          {/* TEXTO */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold tracking-tight text-blue-900 mb-10">
              Sobre mí
            </h2>

            <p className="text-lg text-blue-900 leading-relaxed">
              Soy <b>Ingeniero Multimedia</b> con un perfil híbrido donde la tecnología
              y la creatividad convergen. Mi trabajo abarca desde el
              <b> diseño y desarrollo de videojuegos</b> hasta la creación de
              <b> efectos visuales (VFX) y modelado 3D</b>, especializándome en
              experiencias inmersivas en <b>Realidad Virtual</b> y
              <b> Realidad Aumentada</b>.
            </p>

            <p className="mt-6 text-lg text-blue-900 leading-relaxed">
              Domino el ciclo completo de producción audiovisual: manejo de
              <b> cámaras profesionales</b>, uso de
              <b> trajes de captura de movimiento</b>, edición de video y fotografía,
              además de la creación de <b>identidad visual, logotipos</b> y contenido
              estratégico para redes sociales. Mi enfoque es transformar herramientas
              avanzadas en experiencias digitales de alto impacto.
            </p>
          </motion.div>
        </div>

        {/* ================= REEL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-5xl font-extrabold tracking-tight text-blue-900 mb-16">
            Reel de mis trabajos
          </h3>

          <div className="relative max-w-4xl mx-auto rounded-3xl p-6 bg-gradient-to-br from-blue-950/80 to-blue-900 backdrop-blur-xl shadow-2xl border border-white/20">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/5tajxC0hATI"
                title="Reel Miguel Guerrero"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* ================= HOJA DE VIDA ================= */}
        <motion.div
        id="cv"
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.8 }}
           className="text-center scroll-mt-70"
        >
          <h3 className="text-5xl font-extrabold tracking-tight text-blue-900 mb-8">
            Hoja de vida
          </h3>

          <p className="text-lg text-blue-900 mb-12 max-w-2xl mx-auto">
            Consulta mi experiencia profesional, formación académica y habilidades
            técnicas como Ingeniero Multimedia.
          </p>

          <a
            href="/Hoja-de-vida-Miguel-Guerrero.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-12 py-4
              rounded-full
              bg-blue-900
              text-white
              text-lg
              font-semibold
              shadow-xl
              hover:bg-blue-800
              hover:scale-105
              transition
              duration-300
            "
          >
            Descargar CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}
