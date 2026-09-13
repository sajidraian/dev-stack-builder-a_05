export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="bg-white border border-gray-100 rounded-2xl p-5 sticky top-24 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="text-xs text-gray-400 mt-0.5">
            {stack.length === 0
              ? "No technologies selected yet."
              : `Selected: ${stack.length}`}
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="mt-4 border border-dashed border-orange-200 rounded-xl py-10 px-4 text-center bg-gradient-to-br from-orange-50/60 to-pink-50/40">
          <div className="mx-auto w-11 h-11 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center shadow-sm">
            <span className="text-white text-lg font-bold">+</span>
          </div>

          <p className="text-sm text-slate-700 font-semibold mt-3">
            Your stack is empty
          </p>

          <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
            Add technologies from the list to build your development stack.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-2.5 max-h-[65vh] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-gray-100 bg-gray-50/60 rounded-xl p-3 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white border border-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-[10px] text-gray-400">
                    {item.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg text-sm font-bold p-1.5 transition-all duration-200"
                aria-label={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}