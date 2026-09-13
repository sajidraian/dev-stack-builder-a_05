export default function Hero() {
  return (
    <section id="home" className="py-16 md:py-20 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build Your Ultimate <br />
            <span className="text-brand-gradient">Developer Stack</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover, select, and organize the modern technologies powering production web applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="px-6 py-3 text-sm font-semibold text-white bg-brand-gradient rounded-lg shadow-md hover:opacity-95 transition-opacity"
            >
              Explore Technologies
            </a>
            <button className="px-6 py-3 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/banner-stack.png"
            alt="Dev Stack Overview"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}