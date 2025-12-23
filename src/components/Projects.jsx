import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Relic Hunters - team biosbot",
    image: "/proyectos/juego1.png",
    description:
      "Relic Hunters es un juego 2D de exploración y plataformas donde los jugadores toman el papel de mineros que buscan antiguas reliquias escondidas entre túneles y rocas. Cada reliquia encontrada aumenta tu puntaje, pero tendrás que moverte rápido, ¡porque el tiempo corre y los obstáculos no perdonan! Este juego combina diversión y aprendizaje, promoviendo la curiosidad y la exploración en un entorno educativo ambientado en una mina llena de reliquias.",
    link: "https://skywalker1307.itch.io/relic-hunters-team-biosbot",
    color: "yellow",
    glow: "from-yellow-400/50 via-yellow-300/30 to-transparent",
    button: "bg-yellow-400 hover:bg-yellow-300 text-black",
  },
  {
    title: "SeaGuardians",
    image: "/proyectos/juego2.png",
    description:
      "SeaGuardians es un juego de exploracion submarina, en donde el jugador explorara los rincones de un arrecife coralino ambientado en las costas de Colombia, descubrira especies animales de diversos tipos, mientras se encarga de limpiar la contaminacion de la zona.",
    link: "https://skywalker1307.itch.io/sea-guardians",
    color: "blue",
    glow: "from-blue-500/50 via-blue-400/30 to-transparent",
    button: "bg-blue-500 hover:bg-blue-400 text-white",
  },
  {
    title: "Habitacion5",
    image: "/proyectos/juego3.png",
    description:
      "Habitación 5 es un juego de suspenso y exploración en realidad virtual, donde el jugador despierta en una habitación desconocida, sin recordar cómo llegó allí. Pronto descubre que no está solo: Moly, un inquietante muñeco con una voz perturbadora, le da la bienvenida y lo invita a participar en un macabro juego.Para sobrevivir, el jugador deberá explorar el entorno, resolver acertijos y activar mecanismos mientras intenta escapar antes de que el tiempo se agote, pero cada acción tiene consecuencias, y el ambiente se vuelve cada vez más opresivo a medida que la visión se distorsiona y el aire se vuelve irrespirable. Con una atmósfera oscura y una narrativa inquietante, Habitación 5 ofrece una experiencia inmersiva llena de tensión psicológica y misterio.",
    link: "https://miguel-guerrero.itch.io/habitacion5",
    color: "red",
    glow: "from-red-500/50 via-red-400/30 to-transparent",
    button: "bg-red-500 hover:bg-red-400 text-white",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="proyectos"
      className="relative py-32 bg-gradient-to-br from-blue-1500 via-blue-900 to-blue-1000 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITULO */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-20"
        >
          Proyectos
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center cursor-pointer group"
              onClick={() => setActiveProject(project)}
            >
              {/* LUZ */}
              <div
                className={`
                  relative
                  rounded-3xl
                  p-1
                  bg-gradient-to-br ${project.glow}
                `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    rounded-3xl
                    w-full h-72 object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* NOMBRE */}
              <h3 className="mt-6 text-2xl font-bold">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-blue-950 rounded-3xl p-8 shadow-2xl"
            >
              {/* IMAGEN */}
              <div
                className={`relative rounded-2xl p-1 bg-gradient-to-br ${activeProject.glow}`}
              >
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="rounded-2xl w-full h-80 object-cover"
                />
              </div>

              {/* TEXTO */}
              <h3 className="text-3xl font-extrabold mt-8">
                {activeProject.title}
              </h3>

              <p className="text-blue-100 mt-4">
                {activeProject.description}
              </p>

              {/* BOTON */}
              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className={`
                  inline-block mt-8 px-10 py-4 rounded-full
                  font-semibold transition
                  ${activeProject.button}
                `}
              >
                Ver proyecto
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
