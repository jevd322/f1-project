export default function RaceWeekend() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Race Weekend
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          A comprehensive guide to the three-day Grand Prix format and schedule
        </p>
      </header>

      {/* Weekend Overview */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">The Three-Day Format</h2>
        <p className="text-gray-400">
          A standard Formula 1 race weekend follows a carefully structured three-day schedule designed to build excitement and provide teams with data to optimize their performance.
        </p>
      </section>

      {/* Friday Schedule */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-yellow-500/20">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Friday - Practice Sessions</h2>
        <p className="text-gray-400 mb-4">
          The weekend begins with teams gathering crucial data and testing different setups.
        </p>
        
        <div className="space-y-4">
          <div className="bg-black/30 rounded-lg p-4 border border-yellow-500/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">FP1 - First Practice (1 hour)</h3>
            <ul className="text-gray-400 space-y-1 ml-4">
              <li>• Initial track running and data collection</li>
              <li>• Testing baseline setup configurations</li>
              <li>• Tire compound evaluation</li>
              <li>• Track evolution assessment</li>
            </ul>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4 border border-yellow-500/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">FP2 - Second Practice (1 hour)</h3>
            <ul className="text-gray-400 space-y-1 ml-4">
              <li>• Setup refinement based on FP1 data</li>
              <li>• Long-run race simulation</li>
              <li>• Tire degradation analysis</li>
              <li>• Qualifying preparation begins</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Saturday Schedule */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-green-500/20">
        <h2 className="text-2xl font-bold text-green-400 mb-2">Saturday - Final Practice & Qualifying</h2>
        <p className="text-gray-400 mb-4">
          The crucial day where grid positions are decided.
        </p>
        
        <div className="space-y-4">
          <div className="bg-black/30 rounded-lg p-4 border border-green-500/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">FP3 - Final Practice (1 hour)</h3>
            <ul className="text-gray-400 space-y-1 ml-4">
              <li>• Last opportunity for setup changes</li>
              <li>• Qualifying simulation runs</li>
              <li>• Fine-tuning based on track conditions</li>
              <li>• Final tire testing before qualifying</li>
            </ul>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4 border border-green-500/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Qualifying (1 hour)</h3>
            <ul className="text-gray-400 space-y-1 ml-4">
              <li>• Q1 (18 min): Slowest 5 cars eliminated</li>
              <li>• Q2 (15 min): Next slowest 5 cars eliminated</li>
              <li>• Q3 (12 min): Top 10 battle for pole position</li>
              <li>• Starting grid positions determined</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sunday Schedule */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-purple-500/20">
        <h2 className="text-2xl font-bold text-purple-400 mb-2">Sunday - Race Day</h2>
        <p className="text-gray-400 mb-4">
          The culmination of the weekend where championship points are won and lost.
        </p>
        
        <div className="space-y-4">
          <div className="bg-black/30 rounded-lg p-4 border border-purple-500/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Pre-Race Activities</h3>
            <ul className="text-gray-400 space-y-1 ml-4">
              <li>• Pit lane walk and driver parade</li>
              <li>• Final setup decisions (within parc fermé rules)</li>
              <li>• National anthem and grid ceremony</li>
              <li>• Formation lap to grid positions</li>
            </ul>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4 border border-purple-500/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">The Grand Prix (305km / ~2 hours)</h3>
            <ul className="text-gray-400 space-y-1 ml-4">
              <li>• Lights out - race start</li>
              <li>• Strategy execution and pit stops</li>
              <li>• Overtaking battles and position changes</li>
              <li>• Podium ceremony and post-race interviews</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-blue-500/20">
        <h2 className="text-2xl font-bold text-blue-400 mb-2">Sprint Weekend Format</h2>
        <p className="text-gray-400 mb-4">
          Six races per season follow a different format with Sprint races on Saturday.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-black/30 rounded-lg p-4 border border-blue-500/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Friday</h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• FP1 (1 hour)</li>
              <li>• Qualifying (1 hour)</li>
              <li>• Sets Sunday grid</li>
            </ul>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4 border border-blue-500/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Saturday</h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• Sprint Shootout</li>
              <li>• Sprint Race (~100km)</li>
              <li>• Points for top 8</li>
            </ul>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4 border border-blue-500/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Sunday</h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• Grand Prix</li>
              <li>• Full points available</li>
              <li>• No parc fermé changes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-red-500/20">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Important Weekend Rules</h2>
        
        <div className="space-y-3">
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Parc Fermé</h3>
            <p className="text-gray-400 text-sm">
              After qualifying, cars enter parc fermé where major setup changes are prohibited to ensure fairness.
            </p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Track Evolution</h3>
            <p className="text-gray-400 text-sm">
              The track becomes faster throughout the weekend as rubber is laid down and grip improves.
            </p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Weather Impact</h3>
            <p className="text-gray-400 text-sm">
              Rain or temperature changes can dramatically alter the weekend schedule and competitive order.
            </p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Session Times</h3>
            <p className="text-gray-400 text-sm">
              All times are subject to local regulations and TV schedules, varying by circuit and region.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
