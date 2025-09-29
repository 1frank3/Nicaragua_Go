// StoryCard.jsx
export default function StoryCard({ title, buttonText, onClick }) {
  return (
    <div className="max-w-xl w-full bg-white border border-blue-400 rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      <button
        onClick={onClick}
        className="px-5 py-2 !bg-yellow-400 text-gray-900 font-bold rounded-lg shadow hover:shadow-md hover:!bg-yellow-500 transition"
      >
        {buttonText}
      </button>
    </div>
  );
}
