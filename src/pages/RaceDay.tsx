import { Separator } from '@radix-ui/react-separator';
import SectionNavButtons from '../components/SectionNavButtons';

export default function RaceDay() {
  return (
    <div className=" mx-auto">
      <header className="mb-12">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Race Day
        </h1>
      </header>
      
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Race Day Breakdown</h2>
        <p className="text-gray-300 text-md mb-4">
          Here's what happens from morning to podium.
        </p>

      <section className="mb-12 bg-white/5 p-8 rounded-lg border border-white/10">

        {/* Pre-Race */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <h3 className="text-xl font-bold text-yellow-400">Pre-Race</h3>
          </div>
          <div className="space-y-4 ml-5 border-l-2 border-yellow-400/30 pl-6">
            <div>
              <h4 className="font-semibold text-gray-100">Installation Laps (40 min before)</h4>
              <p className="text-sm text-gray-400">Drivers check their car systems from pit exit to pit entry.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-100">Grid Formation (30 min before)</h4>
              <p className="text-sm text-gray-400">Cars line up in qualifying order, mechanics make final adjustments.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-100">Formation Lap</h4>
              <p className="text-sm text-gray-400">One lap to warm tires and brakes before returning to grid.</p>
            </div>
          </div>
        </div>

        <Separator className="my-6 h-px bg-gray-700 border-0" />

        {/* During Race */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <h3 className="text-xl font-bold text-green-500">Race</h3>
          </div>
          <div className="space-y-4 ml-5 border-l-2 border-green-500/30 pl-6">
            <div>
              <h4 className="font-semibold text-gray-100">Lights Out!</h4>
              <p className="text-sm text-gray-400">The most chaotic lap with position battles and potential incidents.</p>
            </div>          
            <div>
              <h4 className="font-semibold text-gray-100">Race Distance</h4>
              <p className="text-sm text-gray-400">305 km(190 miles) or 2 hours</p>
            </div>
          </div>
        </div>
        <Separator className="my-6 h-px bg-gray-700 border-0" />
        {/* Post-Race */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <h3 className="text-xl font-bold text-purple-500">Finish</h3>
          </div>
          <div className="space-y-4 ml-5 border-l-2 border-purple-500/30 pl-6">
            <div>
              <h4 className="font-semibold text-gray-100">Cool Down Lap</h4>
              <p className="text-sm text-gray-400">Victory celebrations and return to parc fermé.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-100">Podium</h4>
              <p className="text-sm text-gray-400">Top three celebrate with trophies and champagne.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
