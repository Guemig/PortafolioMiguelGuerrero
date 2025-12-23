import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= DATA ================= */

const galleryData = [
  {
    title: "Fotografía Documental",
    images: [
      "/galeria/documental/doc1.jpeg",
      "/galeria/documental/doc2.jpeg",
      "/galeria/documental/doc3.jpeg",
      "/galeria/documental/doc4.jpeg",
    ],
  },
  {
    title: "Fotografía de Retrato",
    images: [
      "/galeria/retrato/retrato1.jpeg",
      "/galeria/retrato/retrato2.jpeg",
      "/galeria/retrato/retrato3.jpeg",
      "/galeria/retrato/retrato4.jpg",
    ],
  },
  {
    title: "Fotografía de Producto",
    images: [
      "/galeria/producto/producto1.jpeg",
      "/galeria/producto/producto2.jpeg",
      "/galeria/producto/producto3.JPG",
      "/galeria/producto/producto4.jpg",
    ],
  },
  {
    title: "Creación de Marca - AROHMA",
    highlight: true,
    images: [
      "/galeria/marca/marca1.jpeg",
      "/galeria/marca/marca2.jpeg",
      "/galeria/marca/marca3.jpg",
      "/galeria/marca/marca4.jpg",
    ],
  },
  {
    title: "Creación de Logos",
    highlight: true,
    layout: "centered-3",
    images: [
      "/galeria/logos/logo1.png",
      "/galeria/logos/logo2.png",
      "/galeria/logos/logo3.jpeg",
    ],
  },
  {
    title: "Edición de Video",
    highlight: true,
    layout: "centered-3",
    videos: [
      {
        thumb: "/galeria/video/video1.png",
        url: "https://youtu.be/P7ZKOUiw4sw",
      },
      {
        thumb: "/galeria/video/video2.png",
        url: "https://youtu.be/ibENtQzofLI",
      },
      {
        thumb: "/galeria/video/video3.png",
        url: "https://youtube.com/shorts/oZuQt1INwfg?feature=share",
      },
    ],
  },
];

/* ================= COMPONENT ================= */

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="galeria"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-32 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center tracking-tight"
        >
          Galería Fotográfica
        </motion.h2>

        {galleryData.map((section, index) => {
          const isBrand =
            section.highlight &&
            section.images &&
            section.images.length === 4;

          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="space-y-6"
            >
              {/* TITULO */}
              <h2
                className={`font-extrabold tracking-tight text-center ${
                  section.highlight
                    ? "text-5xl md:text-6xl"
                    : "text-4xl md:text-left"
                }`}
              >
                {section.title}
              </h2>

              {/* 👉 TEXTO SOLO PARA EDICIÓN DE VIDEO */}
              {section.title === "Edición de Video" && (
                <p className="text-sm text-white/70 text-center -mt-2">
                  Da click en cada imagen para ver el video
                </p>
              )}

              {/* GRID 4 — CREACIÓN DE MARCA */}
              {isBrand && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                  {section.images.map((img, i) => (
                    <ImageCard
                      key={i}
                      img={img}
                      title={section.title}
                      onClick={setSelectedImage}
                    />
                  ))}
                </div>
              )}

              {/* GRID NORMAL */}
              {!section.highlight &&
                !section.layout &&
                section.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                    {section.images.map((img, i) => (
                      <ImageCard
                        key={i}
                        img={img}
                        title={section.title}
                        onClick={setSelectedImage}
                      />
                    ))}
                  </div>
                )}

              {/* CENTRADO 3 */}
              {(section.layout === "centered-3" ||
                (section.highlight && !isBrand)) && (
                <div className="flex justify-center gap-10 flex-wrap pt-6">
                  {(section.images || section.videos).map((item, i) =>
                    section.videos ? (
                      <VideoCard key={i} video={item} />
                    ) : (
                      <ImageCard
                        key={i}
                        img={item}
                        title={section.title}
                        onClick={setSelectedImage}
                      />
                    )
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              className="max-w-full max-h-[85vh] rounded-3xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ================= CARDS ================= */

function ImageCard({ img, title, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group cursor-pointer w-[260px]"
      onClick={() => onClick(img)}
    >
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition" />
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover transition group-hover:scale-110"
        />
      </div>
    </motion.div>
  );
}

function VideoCard({ video }) {
  return (
    <motion.a
      href={video.url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }}
      className="relative group block cursor-pointer w-[260px]"
    >
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-red-500/40 via-red-600/30 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition" />
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={video.thumb}
          alt="Video YouTube"
          className="w-full h-64 object-cover transition group-hover:scale-110"
        />
      </div>
    </motion.a>
  );
}
