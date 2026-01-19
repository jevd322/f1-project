import SectionNavButtons from '../components/SectionNavButtons';

export default function FundamentalsPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Strategies</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Fundamentals
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Strategic fundamentals form the foundation of race planning. Understanding tire compounds, pit stop timing, and track position is essential to following the strategic battle during a Grand Prix.
        </p>
      </section>

      {/* Tire Strategy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Tire Strategy</h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-3">Compound Selection</h3>
            <p className="text-gray-300 mb-4">
              Teams must choose between softer tires (faster but degrade quickly) and harder tires (slower but last longer).
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/30 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-bold text-red-400 mb-2">Soft Tires</h4>
                <p className="text-sm text-gray-400">Best for qualifying and short stints. High grip but wear quickly.</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border-l-4 border-yellow-500">
                <h4 className="font-bold text-yellow-400 mb-2">Medium Tires</h4>
                <p className="text-sm text-gray-400">Balanced performance. Most versatile race compound.</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border-l-4 border-white">
                <h4 className="font-bold text-gray-200 mb-2">Hard Tires</h4>
                <p className="text-sm text-gray-400">Longest life but slowest. Used for long stints.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">One-Stop vs Two-Stop</h3>
            <p className="text-gray-300 mb-4">
              The number of pit stops significantly impacts race strategy and final position.
            </p>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">One-Stop Strategy</h4>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="font-semibold text-gray-200">Pros:</span> Less time lost in pits, better track position
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-gray-200">Cons:</span> Slower tire pace at end, vulnerable to fresher tires
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-2">Two-Stop Strategy</h4>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="font-semibold text-gray-200">Pros:</span> Faster lap times with fresher tires
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-gray-200">Cons:</span> More time lost in pits (~20-25 seconds total)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Undercut vs Overcut */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Undercut vs Overcut</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-green-400 mb-3">The Undercut</h3>
            <p className="text-gray-300 mb-4">
              Pitting <span className="font-bold text-green-400">earlier</span> than the car ahead to gain track position through fresher tires.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="bg-black/30 rounded-lg p-3">
                <p className="font-semibold text-gray-200 mb-1">How it Works:</p>
                <p>Fresh tires allow faster laps while opponent stays out on old tires. Gain time to emerge ahead after their pit stop.</p>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="font-semibold text-gray-200 mb-1">When Effective:</p>
                <p>High tire degradation tracks, clean air available, opponent within 3-5 seconds</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-blue-400 mb-3">The Overcut</h3>
            <p className="text-gray-300 mb-4">
              Staying out <span className="font-bold text-blue-400">longer</span> than the car ahead to gain advantage through track position.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="bg-black/30 rounded-lg p-3">
                <p className="font-semibold text-gray-200 mb-1">How it Works:</p>
                <p>Maintain track position while opponent pits. Push hard on old tires to build gap before eventual pit stop.</p>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="font-semibold text-gray-200 mb-1">When Effective:</p>
                <p>Low degradation tracks, traffic ahead slows pitted car, good tire management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pit Stop Windows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Pit Stop Windows</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Optimal Pit Windows</h3>
          <p className="text-gray-300 mb-4">
            Teams calculate ideal lap ranges to pit based on tire life, fuel load, and race position.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-yellow-400 mb-2">Early Window</h4>
              <p className="text-sm text-gray-400">Laps 10-20: Aggressive undercut attempts</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">Mid Window</h4>
              <p className="text-sm text-gray-400">Laps 20-40: Standard one-stop timing</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">Late Window</h4>
              <p className="text-sm text-gray-400">Laps 40+: Overcut or two-stop strategy</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Factors Affecting Timing</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-gray-400"><span className="font-semibold text-gray-200">Safety Car:</span> Can close pit window or open new opportunities</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-gray-400"><span className="font-semibold text-gray-200">Traffic:</span> Slows out-lap, affects undercut effectiveness</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-gray-400"><span className="font-semibold text-gray-200">Weather:</span> Rain changes everything instantly</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-gray-400"><span className="font-semibold text-gray-200">Tire Degradation:</span> Higher deg = earlier stops</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-gray-400"><span className="font-semibold text-gray-200">Fuel Load:</span> Lighter car after burning fuel = faster pace</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span className="text-gray-400"><span className="font-semibold text-gray-200">Track Position:</span> Leading may dictate reactive strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Position */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Track Position vs Pace</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-6">
            One of the most critical strategic decisions: prioritize staying ahead on track or sacrifice position for better tire strategy?
          </p>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-green-400 mb-3">Value of Track Position</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <p className="font-semibold text-gray-200 mb-2">Advantages:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Clean air (full aerodynamic performance)</li>
                    <li>• Control race pace and strategy</li>
                    <li>• Difficult to overtake on many circuits</li>
                    <li>• Force competitors to react to you</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 mb-2">Disadvantages:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Vulnerable to undercuts</li>
                    <li>• Must manage tires defensively</li>
                    <li>• Can't see competitor pace/strategy</li>
                    <li>• Safety car can hurt advantage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-red-400 mb-3">Sacrificing Position for Strategy</h3>
              <p className="text-sm text-gray-400 mb-3">
                Sometimes it's better to pit early or late, even if it means dropping positions temporarily, to have better tire performance later in the race.
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Example:</span> If you're P4 but can't overtake P3, pitting for fresh tires might allow you to attack multiple cars in the final laps, potentially finishing P2 or P3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strategic Principles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Key Strategic Principles</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-2">Tire Delta</h3>
            <p className="text-sm text-gray-400">
              The lap time difference between tire compounds. Typically 0.3-0.8 seconds per compound step.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-2">Pit Loss</h3>
            <p className="text-sm text-gray-400">
              Time lost entering, stopping, and exiting pits. Usually 20-25 seconds total per stop.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-2">Free Pit Stop</h3>
            <p className="text-sm text-gray-400">
              During Safety Car, pit without losing track position if gap to car behind exceeds pit loss time.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-2">Tire Age Advantage</h3>
            <p className="text-sm text-gray-400">
              Newer tires can be worth 1-2 seconds per lap over heavily worn tires in final stint.
            </p>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
