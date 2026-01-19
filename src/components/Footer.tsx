export default function Footer() {
  return (
    <footer className="bg-orange-200 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          {/* Basics Navigation */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">Basics</h3>
            <nav className="flex flex-col gap-2">
              <a href="#/basics" className="text-gray-900 hover:text-red-600 text-sm">Overview</a>
              <a href="#/basics/race-weekend" className="text-gray-900 hover:text-red-600 text-sm">Race Weekend</a>
              <a href="#/basics/flags" className="text-gray-900 hover:text-red-600 text-sm">Flag System</a>
              <a href="#/basics/pit-lane" className="text-gray-900 hover:text-red-600 text-sm">Pit Lane</a>
            </nav>
          </div>

          {/* Technical Navigation */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">Technical</h3>
            <nav className="flex flex-col gap-2">
              <a href="#/basics/aerodynamics" className="text-gray-900 hover:text-red-600 text-sm">Aerodynamics</a>
              <a href="#/basics/tyres" className="text-gray-900 hover:text-red-600 text-sm">Tyres</a>
              <a href="#/basics/power-unit" className="text-gray-900 hover:text-red-600 text-sm">Power Unit</a>
              <a href="#/basics/drs" className="text-gray-900 hover:text-red-600 text-sm">2026 New DRS</a>
            </nav>
          </div>

          {/* Season Navigation */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">Seasons</h3>
            <nav className="flex flex-col gap-2">
              <a href="#/seasons" className="text-gray-900 hover:text-red-600 text-sm">All Seasons</a>
              <a href="#/seasons/2025" className="text-gray-900 hover:text-red-600 text-sm">2025 Season</a>
              <a href="#/seasons/2024" className="text-gray-900 hover:text-red-600 text-sm">2024 Season</a>
              <a href="#/seasons/2023" className="text-gray-900 hover:text-red-600 text-sm">2023 Season</a>
            </nav>
          </div>

          {/* About Navigation */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">More</h3>
            <nav className="flex flex-col gap-2">
              <a href="#/about" className="text-gray-900 hover:text-red-600 text-sm">About</a>
              <a href="#/myprogress" className="text-gray-900 hover:text-red-600 text-sm">My Progress</a>
              <a href="#/tracks" className="text-gray-900 hover:text-red-600 text-sm">Tracks</a>
              <a href="#/fia" className="text-gray-900 hover:text-red-600 text-sm">FIA</a>
            </nav>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="border-t border-gray-400 pt-6 text-center">
          <p className="mb-2 text-slate-700 text-xs">
            This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V.
          </p>

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} f1-project. Built with <span className="font-medium">Vite</span>,{' '}
            <span className="font-medium">React</span> and <span className="font-medium">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
