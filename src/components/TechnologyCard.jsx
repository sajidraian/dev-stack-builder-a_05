export default function TechnologyCard({ technology, onAdd, isAdded }) {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
    badgeColor,
  } = technology;

  return (
    <div
      className={`rounded-2xl p-[1.5px] transition-all duration-300 ${
        isAdded
          ? "bg-gradient-to-r from-orange-500 to-pink-500 shadow-md"
          : "bg-gray-100 hover:bg-gradient-to-r hover:from-orange-200 hover:to-pink-200 hover:shadow-md"
      }`}
    >
      <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-start justify-between">
            <img
              src={icon}
              alt={name}
              className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-110"
            />

            {badge && (
              <span
                className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                  badgeColor ||
                  "bg-gray-50 text-gray-600 border-gray-200"
                }`}
              >
                {badge}
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-3">
            {name}
          </h3>

          <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-3 min-h-[50px]">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium mb-4">
            <span className="bg-gray-50 border border-gray-100 text-gray-600 px-2 py-0.5 rounded">
              {category}
            </span>

            <span>{difficulty}</span>

            <span className="flex items-center gap-1 font-semibold text-gray-700">
              <span className="text-amber-400">★</span>
              {rating}
            </span>
          </div>

          <button
            onClick={() => onAdd(technology)}
            disabled={isAdded}
            className={`w-full py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-200 ${
              isAdded
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 hover:shadow-md"
            }`}
          >
            {isAdded ? "Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}