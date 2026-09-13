export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-4">
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack Logo"
            className="h-7 object-contain"
          />
          <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold text-gray-600">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-black">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-black">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-3">Product</h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li><a href="#home" className="hover:text-black">Home</a></li>
            <li><a href="#technologies" className="hover:text-black">Technologies</a></li>
            <li><a href="#projects" className="hover:text-black">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-3">Company</h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li><a href="#about" className="hover:text-black">About</a></li>
            <li><a href="#contact" className="hover:text-black">Contact</a></li>
            <li><a href="#careers" className="hover:text-black">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-3">Legal</h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li><a href="#privacy" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-black">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-gray-600">Privacy</a>
          <a href="#terms" className="hover:text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}