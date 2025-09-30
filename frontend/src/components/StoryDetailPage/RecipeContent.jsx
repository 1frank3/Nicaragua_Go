import React from 'react';

export function RecipeContent({ story }) {
  
  if (!story.ingredients && !story.steps) {
    return (
      <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
        <p>{story.content || 'Contenido no disponible.'}</p>
      </div>
    );
  }

  return (
    <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
      {story.introduction && <p>{story.introduction}</p>}
      {story.ingredients?.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-4">Ingredientes</h2>
          <ul className="list-disc pl-6 space-y-2">
            {story.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </>
      )}

     
      {story.steps?.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-4">Preparación</h2>
          <ol className="list-decimal pl-6 space-y-4">
            {story.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}