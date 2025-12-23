import { motion } from "framer-motion";

const skillSections = [
  {
    title: "Desarrollo de Juegos e Inmersión",
    columns: "lg:grid-cols-4",
    items: [
      {
        icon: "/icons/unity.svg",
        name: "Unity",
        desc: "Desarrollo de videojuegos y experiencias interactivas VR/AR utilizando C#",
      },
      {
        icon: "/icons/blender.svg",
        name: "Blender / Maya",
        desc: "Modelado 3D, texturizado y rigging de personajes para entornos en tiempo real.",
      },
      {
        icon: "/icons/meta.svg",
        name: "Meta Quest / XR",
        desc: "Implementación de mecánicas inmersivas y optimización para visores de realidad virtual.",
      },
      {
        icon: "/icons/mocap.svg",
        name: "ROCOCO Capture",
        desc: "Configuración y limpieza de datos capturados con trajes inerciales para animación realista.",
      },
    ],
  },
  {
    title: "Post Producción y Audiovisual",
    columns: "lg:grid-cols-4",
    items: [
      {
        icon: "/icons/premiere.svg",
        name: "Adobe Premiere Pro",
        desc: "Edición profesional, montaje narrativo y ritmo audiovisual para video de alta calidad.",
      },
      {
        icon: "/icons/after.svg",
        name: "After Effects",
        desc: "Composición de efectos visuales (VFX), motion graphics y post-producción avanzada.",
      },
      {
        icon: "/icons/cameraa.svg",
        name: "Producción de Campo",
        desc: "Operación de cámaras profesionales, esquemas de iluminación y dirección de fotografía.",
      },
      {
        icon: "/icons/audio.svg",
        name: "Diseño Sonoro",
        desc: "Edición y limpieza de audio, mezcla y creación de ambientes sonoros envolventes.",
      },
    ],
  },
  {
    title: "Branding y Estrategia Digital",
    columns: "lg:grid-cols-4",
    items: [
      {
        icon: "/icons/illus.svg",
        name: "Adobe Illustrator",
        desc: "Creación de logotipos vectoriales y sistemas de identidad visual escalables.",
      },
      {
        icon: "/icons/photoshop.svg",
        name: "Adobe Photoshop",
        desc: "Retoque digital avanzado y creación de piezas gráficas para publicidad e impacto visual.",
      },
      {
        icon: "/icons/social.svg",
        name: "Content Strategy",
        desc: "Creación de contenido estratégico para redes sociales, adaptando el lenguaje visual a cada plataforma.",
      },
      {
        icon: "/icons/ads.svg",
        name: "Publicidad Digital",
        desc: "Planificación y ejecución de campañas publicitarias en plataformas digitales, optimizando alcance, segmentación y conversión.",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-blue-950 py-32 px-6 scroll-mt-0"
    >
      <div className="max-w-7xl mx-auto space-y-20">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center text-white tracking-tight"
        >
          SKILLS
        </motion.h2>

        {/* SECCIONES */}
        {skillSections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-blue-300 mb-14 text-center">
              {section.title}
            </h3>

            <div
              className={`
                grid grid-cols-1 sm:grid-cols-2
                ${section.columns}
                gap-10
                max-w-7xl
                mx-auto
              `}
            >
              {section.items.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="
                    bg-white/10 backdrop-blur-xl
                    rounded-3xl p-8
                    border border-white/20
                    shadow-xl
                    text-center
                  "
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-14 h-14 mx-auto mb-6"
                  />

                  <h4 className="text-xl font-semibold text-white mb-4">
                    {item.name}
                  </h4>

                  <p className="text-sm text-blue-100 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
