import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { storiesBySlug } from "../../data/stories";
import { StoryHero } from "./StoryHero";
import { StoryContent } from "./StoryContent";

export function StoryDetailPage() {
  // 1. Obtenemos el "slug" de la URL (ej: "el-gueguense")
  const { storySlug } = useParams();

  // 2. Estados para manejar los datos, la carga y los errores
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. Efecto para cargar los datos de la historia cuando el componente se monta
  useEffect(() => {
    // Definimos la función que busca los datos
    const fetchStory = () => {
      setLoading(true); // Reiniciamos el estado de carga
      try {
        // Simulamos un retraso de red para una mejor experiencia de usuario
        setTimeout(() => {
          // Usamos el objeto importado para buscar la historia por su slug
          const storyData = storiesBySlug[storySlug];
          
          if (storyData) {
            setStory(storyData);
          } else {
            setError("No se encontró la historia.");
          }
          setLoading(false);
        }, 500); // Retraso de 0.5 segundos
      } catch (err) {
        setError("Ocurrió un error al cargar la historia.");
        setLoading(false);
      }
    };

    fetchStory();
  }, [storySlug]); 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando historia...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }
  if (!story) {
    return null; 
  }

  
  return (
    <div>
      <main>
        <StoryHero story={story} />
        <StoryContent story={story} />
      </main>
    </div>
  );
}
