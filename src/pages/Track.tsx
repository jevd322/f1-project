import SectionNavButtons from '../components/SectionNavButtons';

export default function Track() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Track
        </h1>
      </header>

      {/* Navigation Area */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Track Components</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="#/tracks" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-colors group">
            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-red-500">Current Tracks</h3>
            <p className="text-sm text-gray-400">All circuits on the current F1 calendar</p>
          </a>
          
          <a href="#/basics/turns" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-colors group">
            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-red-500">The Turns</h3>
            <p className="text-sm text-gray-400">Understanding corner types and racing lines</p>
          </a>
          
          <a href="#/basics/pit-lane" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-colors group">
            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-red-500">Pit Lane</h3>
            <p className="text-sm text-gray-400">Pit stops, speed limits, and strategy</p>
          </a>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
