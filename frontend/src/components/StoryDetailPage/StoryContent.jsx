import { GenericStoryContent } from "./GenericStoryContent";
import { RecipeContent } from "./RecipeContent";

// --- Pequeño componente para la barra lateral (para mantener el código limpio) ---
function Sidebar({ story }) {
  return (
    <aside className="space-y-6">
      {/* Caja de Información Clave */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Detalles</h3>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Categoría:</strong> {story.category}</li>
          <li><strong>Ubicación:</strong> {story.city}</li>
          {/* Puedes añadir más metadatos aquí, como el autor */}
          {/* <li><strong>Autor:</strong> {story.author}</li> */}
        </ul>
      </div>

      {/* Placeholder para el Mapa Pequeño */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Ubicación Geográfica</h3>
        <div className="h-48 bg-gray-300 rounded flex items-center justify-center">
          <p className="text-gray-500">Mapa interactivo aquí</p>
        </div>
      </div>

      {/* Placeholder para Historias Relacionadas */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Historias Relacionadas</h3>
        <ul className="space-y-3">
          <li className="text-blue-600 hover:underline cursor-pointer">Otra leyenda de {story.city}</li>
          <li className="text-blue-600 hover:underline cursor-pointer">Un cuento similar</li>
        </ul>
      </div>
    </aside>
  );
}


// --- Componente Principal del Contenido ---
export function StoryContent({ story }) {
  if (!story) return null;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* --- Usamos Grid para el layout de 2 columnas en desktop --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        
        
        <main className="lg:col-span-2">
          <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
           {story.category === 'Comida típica' ? (
            <RecipeContent story={story} />
          ) : (
            <GenericStoryContent story={story} />
          )}
          </div>
        </main>
        
        {/* --- Barra Lateral (ocupa 1/3 del espacio) --- */}
        <Sidebar story={story} />

      </div>
    </div>
  );
}