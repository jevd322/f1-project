import SectionNavButtons from '../components/SectionNavButtons';

export default function TyresPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">The Car</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Tyres
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Tyres are critical to F1 performance. Pirelli supplies all teams with different compounds designed for various conditions and strategies.
        </p>
      </section>

      {/* Slick Compounds */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Slick Compounds (Dry Weather)</h2>
        
        <div className="space-y-4">
          {/* Soft */}
          <div className="bg-white/5 rounded-lg p-6 border-l-4 border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">C5</div>
              <div>
                <h3 className="text-xl font-bold text-red-500">Soft (Red)</h3>
                <p className="text-sm text-gray-400">Fastest but degrades quickly</p>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded">
              <p className="text-sm font-semibold text-gray-200 mb-2">Characteristics:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Highest grip level</li>
                <li>Best for qualifying and short stints</li>
                <li>Overheats easily in long runs</li>
                <li>Typical life: 15-25 laps depending on track</li>
              </ul>
            </div>
          </div>

          {/* Medium */}
          <div className="bg-white/5 rounded-lg p-6 border-l-4 border-yellow-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">C3</div>
              <div>
                <h3 className="text-xl font-bold text-yellow-500">Medium (Yellow)</h3>
                <p className="text-sm text-gray-400">Balanced performance and durability</p>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded">
              <p className="text-sm font-semibold text-gray-200 mb-2">Characteristics:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Good compromise between speed and life</li>
                <li>Versatile for various conditions</li>
                <li>Most commonly used compound in races</li>
                <li>Typical life: 25-35 laps depending on track</li>
              </ul>
            </div>
          </div>

          {/* Hard */}
          <div className="bg-white/5 rounded-lg p-6 border-l-4 border-gray-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">C1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-100">Hard (White)</h3>
                <p className="text-sm text-gray-400">Longest lasting but slowest</p>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded">
              <p className="text-sm font-semibold text-gray-200 mb-2">Characteristics:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Lowest grip but most durable</li>
                <li>Best for long stints and one-stop strategies</li>
                <li>Takes longer to reach optimal temperature</li>
                <li>Typical life: 35-50+ laps depending on track</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wet Weather Tyres */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Wet Weather Tyres</h2>
        
        <div className="space-y-4">
          {/* Intermediate */}
          <div className="bg-white/5 rounded-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">INT</div>
              <div>
                <h3 className="text-xl font-bold text-green-500">Intermediate (Green)</h3>
                <p className="text-sm text-gray-400">For damp or drying conditions</p>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded">
              <p className="text-sm font-semibold text-gray-200 mb-2">When to Use:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Light rain or standing water</li>
                <li>Track is drying after rain</li>
                <li>Mixed wet/dry conditions</li>
                <li>Can displace 30 liters of water per second at 300 km/h</li>
              </ul>
            </div>
          </div>

          {/* Full Wet */}
          <div className="bg-white/5 rounded-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">WET</div>
              <div>
                <h3 className="text-xl font-bold text-blue-500">Full Wet (Blue)</h3>
                <p className="text-sm text-gray-400">For heavy rain</p>
              </div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded">
              <p className="text-sm font-semibold text-gray-200 mb-2">When to Use:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Heavy rainfall and lots of standing water</li>
                <li>Maximum water dispersion capability</li>
                <li>Deep grooves prevent aquaplaning</li>
                <li>Can displace 85 liters of water per second at 300 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tire Strategy */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Tire Strategy</h2>
        <p className="text-gray-300 mb-4">
          Teams must use at least two different dry compounds during the race (unless it rains).
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">One-Stop Strategy</h3>
            <p className="text-sm text-gray-400">Start on softer tire, pit once for harder compound. Lower risk but potentially slower.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Two-Stop Strategy</h3>
            <p className="text-sm text-gray-400">Two pit stops for fresh tires. Faster but loses track position temporarily.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Undercut</h3>
            <p className="text-sm text-gray-400">Pitting earlier than competitor to gain advantage with fresh tires.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Overcut</h3>
            <p className="text-sm text-gray-400">Staying out longer on old tires while others pit, then pitting later.</p>
          </div>
        </div>
      </section>

      {/* Tire Degradation */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Tire Degradation</h2>
        <p className="text-gray-300 mb-4">
          As tires wear, they lose grip and performance. Teams monitor degradation constantly.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Factors Affecting Wear:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Track temperature and surface abrasiveness</li>
            <li>Driving style (aggressive vs. smooth)</li>
            <li>Car setup and downforce levels</li>
            <li>Track layout (high-speed vs. low-speed corners)</li>
            <li>Fuel load (heavier car = more wear)</li>
          </ul>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
