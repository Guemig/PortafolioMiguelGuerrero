import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-white"
    >
      {/* ================= FONDO ANIMADO ================= */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-800 animate-gradient opacity-95"></div>

      {/* ================= NEBLINA ================= */}
      <div className="mist-container">
        <div className="mist mist1"></div>
        
        <div className="mist mist3"></div>
      </div>

      {/* ================= CONTENIDO ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8"
        >
          ¿Trabajamos juntos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 mb-20"
        >
          Estoy abierto a nuevos proyectos, ideas creativas y oportunidades de
          trabajo. Conectemos y hagamos algo increíble juntos.
        </motion.p>

        {/* ================= REDES ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-12"
        >
          {/* Email */}
          <SocialIcon
            href="mailto:lmgtye@gmail.com"
            icon="/icons/mail.svg"
            label="Email"
          />

          {/* LinkedIn */}
          <SocialIcon
            href="https://www.linkedin.com/in/luis-miguel-guerrero-tello-1937b82a1/"
            icon="/icons/linkedin.svg"
            label="LinkedIn"
          />

          {/* Itch.io */}
          <SocialIcon
            href="https://miguel-guerrero.itch.io/"
            icon="/icons/itch.io.svg"
            label="Itch.io"
          />

          {/* WhatsApp */}
          <SocialIcon
            href="https://wa.me/573053947054"
            icon="/icons/phone.svg"
            label="WhatsApp"
          />
        </motion.div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Línea animada */}
        <div className="footer-glow-line"></div>

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          <p className="text-blue-100 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Miguel Guerrero
            </span>{" "}
            — Ingeniero Multimedia
          </p>

          <p className="text-blue-200/70 text-sm text-center md:text-right">
            Creado con pasión, creatividad y tecnología
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= ICONO SOCIAL ================= */
function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        group
        w-16 h-16
        rounded-full
        bg-white/10
        backdrop-blur-lg
        flex items-center justify-center
        shadow-xl
        transition
        hover:scale-110
        hover:bg-white/20
      "
    >
      <img
        src={icon}
        alt={label}
        className="w-9 h-9 opacity-90 group-hover:opacity-100"
      />
    </a>
  );
}
