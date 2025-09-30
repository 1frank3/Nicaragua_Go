// src/components/MemoryGame.jsx
import { useState, useEffect, useMemo } from "react";
import Card from "./Card";
//despues se mejora laimportacion de imagen
import OIP from "../../../assets/img/ImgCards/OIP.webp";
import OIP1 from "../../../assets/img/ImgCards/OIP1.webp";
import OIP2 from "../../../assets/img/ImgCards/OIP2.webp";
import OIP3 from "../../../assets/img/ImgCards/OIP3.webp";
import OIP4 from "../../../assets/img/ImgCards/OIP4.jpeg";
import OIP5 from "../../../assets/img/ImgCards/OIP5.jpeg";
import OIP6 from "../../../assets/img/ciudades/granada1.webp";
import OIP7 from "../../../assets/img/logo.png";
import OIP8 from "../../../assets/img/ImgCards/OIP7.jpeg";
import OIP9 from "../../../assets/img/ImgCards/OIP8.jpeg";
import OIP10 from "../../../assets/img/ImgCards/OIP9.jpeg";
import OIP11 from "../../../assets/img/ImgCards/OIP9.png";
import OIP12 from "../../../assets/img/ImgCards/OIP9.jpeg";
import OIP13 from "../../../assets/img/ImgCards/OIP10.jpeg";
import OIP14 from "../../../assets/img/ImgCards/OIP11.jpeg";
import OIP15 from "../../../assets/img/ImgCards/OIP12.jpeg";
import OIP16 from "../../../assets/img/ImgCards/OIP134.jpg";
import OIP17 from "../../../assets/img/ImgCards/OIP14.jpg";
import OIP18 from "../../../assets/img/ImgCards/th.webp";
import OIP19 from "../../../assets/img/ImgCards/OIP20.webp";
import OIP20 from "../../../assets/img/ImgCards/OIP21.webp";
import OIP21 from "../../../assets/img/ImgCards/OIP22.webp";
import OIP22 from "../../../assets/img/ImgCards/OIP23.webp";
import OIP23 from "../../../assets/img/ImgCards/OIP24.jpeg";

// --- CONFIGURACIÓN DEL JUEGO ---
const TOTAL_LEVELS = 10;
const INITIAL_ATTEMPTS = 5;
const ATTEMPTS_PER_LEVEL_GAIN = 3;

// --- CONFIGURACIÓN DE IMÁGENES ---
const CARD_BACK_IMAGE =
  "https://th.bing.com/th/id/OIP.5VQ0vEDgRQqW08nT5UGwxgHaHa?w=158&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"; // reverso
const PATRIOTIC_IMAGES = [
  OIP,
  OIP1,
  OIP2,
  OIP3,
  OIP4,
  OIP5,
  OIP6,
  OIP7,
  OIP8,
  OIP9,
  OIP10,
  OIP11,
  OIP12,
  OIP13,
  OIP14,
  OIP15,
  OIP16,
  OIP17,
  OIP18,
  OIP19,
  OIP20,
  OIP21,
  OIP22,
  OIP23,
];

export default function MemoryGames() {
  const [level, setLevel] = useState(1);
  const [attempts, setAttempts] = useState(INITIAL_ATTEMPTS);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [gameState, setGameState] = useState("playing");
  const [isChecking, setIsChecking] = useState(false);

  const generateCards = (currentLevel) => {
    const pairsCount = 4 + (currentLevel - 1) * 2;
    const newCards = [];
    for (let i = 0; i < pairsCount; i++) {
      const cardContent = {
        contentId: i,
        imageUrl:
          PATRIOTIC_IMAGES[i] ||
          `https://via.placeholder.com/150?text=${i + 1}`,
      };
      newCards.push({
        ...cardContent,
        id: `${i}-a`,
        isFlipped: false,
        isMatched: false,
      });
      newCards.push({
        ...cardContent,
        id: `${i}-b`,
        isFlipped: false,
        isMatched: false,
      });
    }
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    setCards(newCards);
  };

  useEffect(() => {
    generateCards(level);
  }, [level]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsChecking(true);
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.contentId === secondCard.contentId) {
        setCards((prev) =>
          prev.map((c) =>
            c.contentId === firstCard.contentId ? { ...c, isMatched: true } : c
          )
        );
        setFlippedCards([]);
        setIsChecking(false);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setAttempts((prev) => prev - 1);
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  }, [flippedCards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.isMatched)) {
      setGameState(level === TOTAL_LEVELS ? "gameWon" : "levelComplete");
    }
  }, [cards, level]);

  useEffect(() => {
    if (attempts <= 0) setGameState("gameOver");
  }, [attempts]);

  const handleCardClick = (clickedCard) => {
    if (
      isChecking ||
      clickedCard.isFlipped ||
      clickedCard.isMatched ||
      flippedCards.length === 2
    )
      return;
    setCards((prev) =>
      prev.map((c) => (c.id === clickedCard.id ? { ...c, isFlipped: true } : c))
    );
    setFlippedCards([...flippedCards, clickedCard]);
  };

  const goToNextLevel = () => {
    setLevel((prev) => prev + 1);
    setAttempts((prev) => prev + ATTEMPTS_PER_LEVEL_GAIN);
    setFlippedCards([]);
    setGameState("playing");
  };

  const restartGame = () => {
    setLevel(1);
    setAttempts(INITIAL_ATTEMPTS);
    setFlippedCards([]);
    generateCards(1);
    setGameState("playing");
  };

  const gridCols = useMemo(() => {
    const n = cards.length;
    if (n <= 12) return "grid-cols-4";
    if (n <= 20) return "grid-cols-5";
    if (n <= 30) return "grid-cols-6";
    return "grid-cols-7";
  }, [cards.length]);

  // --- INICIO DE CAMBIOS VISUALES ---
  return (
    <div className="min-h-screen bg-gray-100 text-[#012840] flex flex-col items-center p-4 font-sans">
      <h1 className="text-4xl font-bold mb-2 text-[#0a1e30]">Memoria Patria</h1>
      <p className="text-lg mb-4 text-gray-600">
        Encuentra los pares de nuestra Nicaragua
      </p>

      {/* --- Barra de estado --- */}
      <div className="w-full max-w-4xl flex justify-between items-center bg-[#0a1e30] text-white p-4 rounded-lg shadow-lg mb-6">
        {/* --- 1. Contenedor para agrupar Nivel e Intentos --- */}
        <div className="flex items-center space-x-6">
          <div className="text-2xl font-bold">
            Nivel: <span className="text-[#F29F05]">{level}</span>
          </div>
          <div className="text-2xl font-bold">
            Intentos: <span className="text-white">{attempts}</span>
          </div>
        </div>

        {/* --- 2. Botón de Reiniciar (con un pequeño ajuste de tamaño) --- */}
        <button
          onClick={restartGame}
          className="!bg-[#F29F05] hover:!bg-[#d98e05] !text-[#012840] font-bold py-2 px-6 rounded-lg text-lg transition-colors"
        >
          Reiniciar
        </button>
      </div>

      {/* --- Tablero --- */}
      <div className={`w-full max-w-4xl grid ${gridCols} gap-2 md:gap-4`}>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onCardClick={handleCardClick}
            backImage={CARD_BACK_IMAGE}
          />
        ))}
      </div>

      {/* --- Modales --- */}
      {gameState !== "playing" && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl text-center w-full max-w-md">
            {gameState === "levelComplete" && (
              <>
                <h2 className="text-3xl font-bold text-green-600 mb-4">
                  ¡Nivel Completado!
                </h2>
                <p className="text-lg mb-6">
                  ¡Excelente memoria! Ganaste {ATTEMPTS_PER_LEVEL_GAIN}{" "}
                  intentos.
                </p>
                <button
                  onClick={goToNextLevel}
                  className="bg-[#0a1e30] hover:bg-[#1c3a56] text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors"
                >
                  Siguiente Nivel
                </button>
              </>
            )}
            {gameState === "gameWon" && (
              <>
                <h2 className="text-3xl font-bold text-[#F29F05] mb-4">
                  ¡FELICIDADES!
                </h2>
                <p className="text-lg mb-6">
                  Completaste todos los niveles. ¡Eres un experto en la memoria
                  patria!
                </p>
                <button
                  onClick={restartGame}
                  className="bg-[#0a1e30] hover:bg-[#1c3a56] text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors"
                >
                  Jugar de Nuevo
                </button>
              </>
            )}
            {gameState === "gameOver" && (
              <>
                <h2 className="text-3xl font-bold text-red-600 mb-4">
                  ¡Juego Terminado!
                </h2>
                <p className="text-lg mb-6">
                  Te has quedado sin intentos. ¡No te rindas!
                </p>
                <button
                  onClick={restartGame}
                  className="bg-[#0a1e30] hover:bg-[#1c3a56] text-white font-bold py-3 px-6 rounded-lg text-xl transition-colors"
                >
                  Intentar de Nuevo
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
