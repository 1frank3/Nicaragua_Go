import "../../styles/Quiz.css";
import { useState, useEffect } from "react";
import preguntas from "./Preguntas";
import { usePuntuacion } from "../../context/PuntuacionContext"; // 👈 importar contexto

function Quiz() {
  const { sumar, restar } = usePuntuacion(); // 👈 usamos sumar y restar globales

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    if (areDisabled) return;

    if (isCorrect) {
      setPuntuación(puntuación + 1); // local
      sumar(10); // global
    } else {
      restar(5); // 👈 si está mal, resta puntos globales
    }

    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    setAreDisabled(true);

    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(10);
        setAreDisabled(false);
      }
    }, 1500);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <div className="quiz-page">
        <main className="app">
          <div className="juego-terminado">
            <span>
              Obtuviste {puntuación} de {preguntas.length}
            </span>
            <button onClick={() => (window.location.href = "/Quiz")}>
              Volver a jugar
            </button>
            <button
              onClick={() => {
                setIsFinished(false);
                setAnswersShown(true);
                setPreguntaActual(0);
              }}
            >
              Ver respuestas
            </button>
            <button onClick={() => (window.location.href = "/Game")}>
              Seleccionar juego
            </button>
          </div>
        </main>
      </div>
    );

  if (answersShown)
    return (
      <div className="quiz-page">
        <main className="app">
          <div className="lado-izquierdo">
            <div className="numero-pregunta">
              <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
            </div>
            <div className="titulo-pregunta">
              {preguntas[preguntaActual].titulo}
            </div>
            <div>
              {
                preguntas[preguntaActual].opciones.filter(
                  (opcion) => opcion.isCorrect
                )[0].textoRespuesta
              }
            </div>
            <button
              onClick={() => {
                if (preguntaActual === preguntas.length - 1) {
                  window.location.href = "/";
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              {preguntaActual === preguntas.length - 1
                ? "Volver a jugar"
                : "Siguiente"}
            </button>
          </div>
        </main>
      </div>
    );

  return (
    <div className="quiz-page">
      <main className="app">
        <div className="lado-izquierdo">
          <button
            className="salir"
            onClick={() => (window.location.href = "/")}
          >
            X
          </button>
          <div className="numero-pregunta">
            <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          </div>
          <div className="titulo-pregunta">
            {preguntas[preguntaActual].titulo}
          </div>
          <div>
            {!areDisabled ? (
              <span className="tiempo-restante">
                Tiempo restante: {tiempoRestante}
              </span>
            ) : (
              <button
                onClick={() => {
                  setTiempoRestante(15);
                  setAreDisabled(false);
                  if (preguntaActual === preguntas.length - 1) {
                    setIsFinished(true);
                  } else {
                    setPreguntaActual(preguntaActual + 1);
                  }
                }}
              >
                Continuar
              </button>
            )}
          </div>
        </div>
        <div className="lado-derecho">
          {preguntas[preguntaActual].opciones.map((respuesta) => (
            <button
              disabled={areDisabled}
              key={respuesta.textoRespuesta}
              onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
            >
              {respuesta.textoRespuesta}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Quiz;
