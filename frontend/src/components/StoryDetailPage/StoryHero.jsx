import './StoryHero.css';

export function StoryHero({ story }) {
  // Aseguramos que tenemos datos antes de intentar mostrarlos
  if (!story) {
    return null;
  }

  return (
    <section
      className="story-hero-container"
      style={{ backgroundImage: `url(${story.imageUrl})` }}
    >
      <div className="story-hero-overlay"></div>
      
      <div className="story-hero-content">
        <p className="text-lg font-semibold text-yellow-400 mb-2">
          {story.category}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center leading-tight">
          {story.title}
        </h1>
        <p className="mt-4 text-md text-gray-200">
          Ubicación: {story.city}
        </p>
      </div>
    </section>
  );
}