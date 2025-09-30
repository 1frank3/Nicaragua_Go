export function GenericStoryContent({ story }) {
  return (
    <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
      <p>{story.content}</p> 
    </div>
  );
}