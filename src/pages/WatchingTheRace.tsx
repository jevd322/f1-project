import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';

export default function WatchingTheRace() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Watching The Race
        </h1>
      </header>

      {/* Navigation Area */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">What You'll See</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="#tv-graphics" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-colors group">
            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-red-500">TV Graphics</h3>
            <p className="text-sm text-gray-400">Understanding timing screens, position indicators, and data overlays</p>
          </a>
          
          <a href="#safety-car" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-colors group">
            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-red-500">Safety Car</h3>
            <p className="text-sm text-gray-400">When and why the safety car is deployed during races</p>
          </a>
          
          <a href="#/basics/flags" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-colors group">
            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-red-500">Flag System</h3>
            <p className="text-sm text-gray-400">What each flag color means during the race</p>
          </a>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
