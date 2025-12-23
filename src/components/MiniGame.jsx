import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const difficulties = {
  easy: {
    label: "Fácil",
    color: "from-green-400 to-green-600",
    size: 90,
    speed: 1600,
  },
  medium: {
    label: "Medio",
    color: "from-yellow-400 to-yellow-500",
    size: 65,
    speed: 1100,
  },
  hard: {
    label: "Difícil",
    color: "from-red-500 to-red-700",
    size: 45,
    speed: 700,
  },
};

export default function MiniGame({ onExit }) {
  const [difficulty, setDifficulty] = useState(null);
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [gameOver, setGameOver] = useState(false);
  const [hitEffect, setHitEffect] = useState(false);
  const [exiting, setExiting] = useState(false);

  /* 🔊 SONIDOS */
  const playHitSound = () => {
    const audio = new Audio("/public/sounds/hit.mp3");
    audio.volume = 0.4;
    audio.play();
  };

  const playWinSound = () => {
    const audio = new Audio("/public/sounds/win.mp3");
    audio.volume = 0.5;
    audio.play();
  };

  /* 🎯 MOVIMIENTO DEL BLANCO */
  useEffect(() => {
    if (!difficulty || gameOver) return;

    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 70 + 10,
        y: Math.random() * 50 + 30,
      });
    }, difficulties[difficulty].speed);

    return () => clearInterval(interval);
  }, [difficulty, gameOver]);

  /* 🎯 CLICK AL BLANCO */
  const hitTarget = () => {
    playHitSound();

    setHitEffect(true);
    setTimeout(() => setHitEffect(false), 150);

    if (score + 1 >= 10) {
      setScore(10);
      setGameOver(true);
      playWinSound();
    } else {
      setScore(score + 1);
    }
  };

  /* 🚪 SALIDA CON TRANSICIÓN */
  const handleExit = () => {
    setExiting(true);
    setTimeout(() => {
      onExit();
    }, 450);
  };

  /* ============================= */
  /* PANTALLA SELECCIÓN DIFICULTAD */
  /* ============================= */
  if (!difficulty) {
    return (
      <motion.div
        className="w-full h-screen bg-blue-950 flex items-center justify-center text-white"
        animate={{
          opacity: exiting ? 0 : 1,
          scale: exiting ? 0.97 : 1,
        }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <motion.div
          className="bg-white/10 backdrop-blur p-10 rounded-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-8">
            Selecciona dificultad
          </h2>

          <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={() => setDifficulty("easy")}
              className="px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 transition"
            >
              Fácil
            </button>

            <button
              onClick={() => setDifficulty("medium")}
              className="px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition text-black"
            >
              Medio
            </button>

            <button
              onClick={() => setDifficulty("hard")}
              className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition"
            >
              Difícil
            </button>
          </div>

          <button
            onClick={handleExit}
            className="
              px-10 py-3
              rounded-full
              border border-white/30
              bg-white/10 backdrop-blur
              hover:bg-white/20
              transition
              min-w-[220px]
            "
          >
            Salir
          </button>
        </motion.div>
      </motion.div>
    );
  }

  const settings = difficulties[difficulty];

  /* ============================= */
  /*          JUEGO ACTIVO         */
  /* ============================= */
  return (
    <motion.div
      className="w-full h-screen bg-blue-950 text-white relative overflow-hidden"
      animate={{
        opacity: exiting ? 0 : 1,
        scale: exiting ? 0.97 : 1,
      }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      {/* HUD */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 bg-white/10 px-6 py-2 rounded-full backdrop-blur text-sm">
        Puntaje {score} / 10 — {settings.label}
      </div>

      {/* FLASH HIT */}
      <AnimatePresence>
        {hitEffect && (
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>

      {/* BLANCO */}
      {!gameOver && (
        <motion.div
          onClick={hitTarget}
          className={`rounded-full cursor-crosshair absolute shadow-2xl border-4 border-white bg-gradient-to-br ${settings.color}`}
          style={{ width: settings.size, height: settings.size }}
          animate={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            scale: hitEffect ? 1.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 90 }}
        />
      )}

      {/* GAME OVER */}
      {gameOver && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50 backdrop-blur"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-4xl font-semibold mb-2">
            Juego terminado
          </h2>

          <p className="text-lg opacity-80 mb-8">
            Puntaje final: {score} / 10
          </p>

          <div className="flex flex-col gap-4 items-center">
            <button
              onClick={() => {
                setScore(0);
                setGameOver(false);
                setDifficulty(null);
              }}
              className="
                px-10 py-3
                rounded-full
                border border-white/30
                hover:bg-white/10
                transition
                backdrop-blur
                min-w-[240px]
              "
            >
              Elegir dificultad
            </button>

            <button
              onClick={handleExit}
              className="
                px-10 py-3
                rounded-full
                bg-white text-blue-900
                hover:bg-gray-200
                transition
                min-w-[240px]
              "
            >
              Salir
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
