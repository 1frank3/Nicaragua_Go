import { createContext, useContext, useState } from "react";

// Crear el contexto
const PuntuacionContext = createContext();

// Hook personalizado para usarlo en cualquier componente
export const usePuntuacion = () => useContext(PuntuacionContext);

// Proveedor de puntuación
export function PuntuacionProvider({ children }) {
  const [puntos, setPuntos] = useState(0);

  const sumar = (valor = 10) => setPuntos((prev) => prev + valor);
  const restar = (valor = 5) => setPuntos((prev) => prev - valor);
  const reiniciar = () => setPuntos(0);

  return (
    <PuntuacionContext.Provider value={{ puntos, sumar, restar, reiniciar }}>
      {children}
    </PuntuacionContext.Provider>
  );
}
