import SectionNavButtons from '../components/SectionNavButtons';

export default function TheTurnsPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Tracks</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          The Turns
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Corners are where races are won and lost. Understanding turn types, racing lines, and overtaking zones is essential to appreciating F1 strategy and driver skill.
        </p>
      </section>

      {/* Turn Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Turn Types</h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Slow Corners (Under 100 km/h)</h3>
            <p className="text-gray-300 mb-4">
              Tight, technical turns requiring heavy braking and precise throttle control. Cars are at their slowest and most vulnerable.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p><span className="text-gray-200 font-semibold">Key Challenge:</span> Maintaining grip while accelerating out</p>
              <p><span className="text-gray-200 font-semibold">Overtaking:</span> Good opportunity under braking</p>
              <p><span className="text-gray-200 font-semibold">Examples:</span> Monaco Hairpin, Singapore Turn 10, Hungary Turn 2</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-orange-400 mb-3">Medium Corners (100-200 km/h)</h3>
            <p className="text-gray-300 mb-4">
              Balanced turns requiring both mechanical and aerodynamic grip. Driver skill and car setup are crucial.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p><span className="text-gray-200 font-semibold">Key Challenge:</span> Finding the optimal racing line</p>
              <p><span className="text-gray-200 font-semibold">Overtaking:</span> Difficult but possible with better exit</p>
              <p><span className="text-gray-200 font-semibold">Examples:</span> Barcelona Turn 3, Silverstone Brooklands, Spa Pouhon</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-3">High-Speed Corners (Over 200 km/h)</h3>
            <p className="text-gray-300 mb-4">
              Flat-out or near-flat corners where aerodynamics dominate. Bravery and confidence are essential.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p><span className="text-gray-200 font-semibold">Key Challenge:</span> Maintaining aerodynamic stability</p>
              <p><span className="text-gray-200 font-semibold">Overtaking:</span> Very rare, requires significant speed advantage</p>
              <p><span className="text-gray-200 font-semibold">Examples:</span> Copse (Silverstone), 130R (Suzuka), Eau Rouge/Raidillon (Spa)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Racing Line */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">The Racing Line</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Ideal Line Basics</h3>
          <p className="text-gray-300 mb-4">
            The racing line is the fastest path through a corner, maximizing speed and minimizing time lost.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">1. Braking Point</h4>
              <p className="text-sm text-gray-400">
                Latest possible moment to brake while maintaining control
              </p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-yellow-400 mb-2">2. Turn-In (Apex)</h4>
              <p className="text-sm text-gray-400">
                Point where the car is closest to the inside of the corner
              </p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">3. Exit Point</h4>
              <p className="text-sm text-gray-400">
                Using full track width to maximize acceleration
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Defensive vs Attacking Lines</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-400 mb-2">Defensive Line</h4>
              <p className="text-sm text-gray-400">
                Protecting the inside, sacrificing corner speed to prevent overtakes
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-red-400 mb-2">Attacking Line</h4>
              <p className="text-sm text-gray-400">
                Taking the ideal line for maximum speed, leaving the inside vulnerable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overtaking Zones */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Common Overtaking Zones</h2>
        
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-gray-100 mb-2">End of Long Straights</h3>
            <p className="text-sm text-gray-400 mb-3">
              High-speed approach followed by heavy braking into slow corner
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">DRS Zone</span>
              <span>Examples: Bahrain Turn 1, Monza Turn 1, Shanghai Turn 6</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-gray-100 mb-2">Hairpins</h3>
            <p className="text-sm text-gray-400 mb-3">
              Slow, tight corners with multiple possible lines and late braking opportunities
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Technical</span>
              <span>Examples: Canada Turn 10, Monaco Hairpin, Austria Turn 3</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-gray-100 mb-2">Chicanes</h3>
            <p className="text-sm text-gray-400 mb-3">
              S-shaped sequences where positioning matters for the following straight
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Sequential</span>
              <span>Examples: Monza Variante Ascari, Singapore Turns 16-17-18</span>
            </div>
          </div>
        </div>
      </section>

      {/* Corner Combinations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Famous Corner Sequences</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-2">Eau Rouge / Raidillon</h3>
            <p className="text-sm text-gray-400 mb-2"><span className="font-semibold text-gray-200">Circuit:</span> Spa-Francorchamps, Belgium</p>
            <p className="text-sm text-gray-400">
              Legendary uphill, high-speed left-right-left sequence taken flat-out in modern F1 cars
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-2">Maggotts-Becketts</h3>
            <p className="text-sm text-gray-400 mb-2"><span className="font-semibold text-gray-200">Circuit:</span> Silverstone, UK</p>
            <p className="text-sm text-gray-400">
              High-speed flowing corners showing car balance and aerodynamic performance
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-2">Senna S</h3>
            <p className="text-sm text-gray-400 mb-2"><span className="font-semibold text-gray-200">Circuit:</span> Interlagos, Brazil</p>
            <p className="text-sm text-gray-400">
              Tight left-right chicane named after Ayrton Senna, crucial for lap time
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-2">Swimming Pool</h3>
            <p className="text-sm text-gray-400 mb-2"><span className="font-semibold text-gray-200">Circuit:</span> Monaco</p>
            <p className="text-sm text-gray-400">
              Bumpy, technical section with zero margin for error alongside barriers
            </p>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
