import SectionNavButtons from '../components/SectionNavButtons';
import { ChevronRight } from 'lucide-react';

export default function Strategies() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Strategies
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Race strategy is where teams compete behind the scenes. From tire choices to pit stop timing, strategic decisions can make or break a race result.
        </p>
      </section>

      {/* Navigation Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Explore Strategy Topics</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="#/fundamentals"
            className="group bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#FFD37B] hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                Fundamentals
              </h3>
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#FFD37B] group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-gray-400">
              Core strategic concepts including tire strategy, pit stop windows, undercut vs overcut, and managing track position.
            </p>
          </a>

          <a
            href="#/following-strategies"
            className="group bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#FFD37B] hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                Following Strategies
              </h3>
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#FFD37B] group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-gray-400">
              Advanced tactics for staying connected when following other cars, including tire management and strategic patience.
            </p>
          </a>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
