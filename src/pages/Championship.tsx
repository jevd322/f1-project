import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';
import OpenF1Example from '../components/OpenF1Example';
import ChampionshipStandings from '../components/ChampionshipStandings';

export default function Championship() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Championship
        </h1>
      </header>

      <div className='grid grid-cols-3 gap-8'>
      <section className="mb-6 col-span-2 space-y-4">
        <h2 className="text-3xl text-gray-100 font-bold">Points System</h2>
        <p className="text-gray-400">
          Points are awarded to the top 10 finishers in each Grand Prix and Sprint Race.
        </p>
        
        {/* Grand Prix Points */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Grand Prix</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-yellow-500/20 border border-yellow-500 rounded p-3 text-center">
              <div className="text-2xl font-bold text-yellow-500">25</div>
              <div className="text-sm text-gray-300">1st</div>
            </div>
            <div className="bg-gray-700/50 border border-gray-600 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">18</div>
              <div className="text-sm text-gray-400">2nd</div>
            </div>
            <div className="bg-orange-700/30 border border-orange-600 rounded p-3 text-center">
              <div className="text-2xl font-bold text-orange-400">15</div>
              <div className="text-sm text-gray-400">3rd</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">12</div>
              <div className="text-sm text-gray-400">4th</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">10</div>
              <div className="text-sm text-gray-400">5th</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">8</div>
              <div className="text-sm text-gray-400">6th</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">6</div>
              <div className="text-sm text-gray-400">7th</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">4</div>
              <div className="text-sm text-gray-400">8th</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">2</div>
              <div className="text-sm text-gray-400">9th</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">1</div>
              <div className="text-sm text-gray-400">10th</div>
            </div>
          </div>
          <div className="mt-4 bg-purple-900/30 border border-purple-600 rounded p-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Fastest Lap</span>
              <span className="text-xl font-bold text-purple-400">+1</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Only awarded if driver finishes in top 10</p>
          </div>
        </div>

        {/* Sprint Points */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Sprint Race</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-yellow-500/20 border border-yellow-500 rounded p-3 text-center">
              <div className="text-2xl font-bold text-yellow-500">8</div>
              <div className="text-sm text-gray-300">1st</div>
            </div>
            <div className="bg-gray-700/50 border border-gray-600 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">7</div>
              <div className="text-sm text-gray-400">2nd</div>
            </div>
            <div className="bg-orange-700/30 border border-orange-600 rounded p-3 text-center">
              <div className="text-2xl font-bold text-orange-400">6</div>
              <div className="text-sm text-gray-400">3rd</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">5</div>
              <div className="text-sm text-gray-400">4th</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">4</div>
              <div className="text-sm text-gray-400">5th</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">3</div>
              <div className="text-sm text-gray-400">6th</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">2</div>
              <div className="text-sm text-gray-400">7th</div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded p-3 text-center">
              <div className="text-2xl font-bold text-gray-300">1</div>
              <div className="text-sm text-gray-400">8th</div>
            </div>
          </div>
        </div>
      </section>
            <ChampionshipStandings />

      </div>
      <SectionNavButtons />
    </div>
  );
}
