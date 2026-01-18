import SectionNavButtons from '../components/SectionNavButtons';

export default function QualifyingPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Qualifying
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Qualifying determines the starting grid for Sunday's race. Drivers compete in three knockout sessions to set the fastest single lap possible, with the ultimate goal of securing pole position.
        </p>
      </section>

      {/* Three-Phase Format */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Three-Phase Knockout Format</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
          <p className="text-gray-300 mb-6">
            Qualifying uses an elimination format with three sessions (Q1, Q2, Q3), progressively reducing the field until the top 10 battle for pole position.
          </p>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-5 border-l-4 border-yellow-500">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-yellow-400">Q1 - 18 Minutes</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded">All 20 Drivers</span>
              </div>
              <p className="text-gray-300 mb-3">
                All 20 drivers compete for lap time. The slowest 5 drivers are eliminated.
              </p>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-gray-200">Eliminated:</span> P16-P20 set starting positions based on Q1 times
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-gray-200">Advance:</span> Top 15 drivers proceed to Q2
                </p>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-5 border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-green-400">Q2 - 15 Minutes</h3>
                <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded">15 Drivers</span>
              </div>
              <p className="text-gray-300 mb-3">
                The 15 remaining drivers compete. The slowest 5 are eliminated.
              </p>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-sm text-gray-400 mb-2">
                  <span className="font-semibold text-gray-200">Eliminated:</span> P11-P15 set starting positions based on Q2 times
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="font-semibold text-gray-200">Advance:</span> Top 10 drivers proceed to Q3
                </p>
                <p className="text-sm text-red-400 font-semibold">
                  Important: Q2 tire compound must be used to start the race (for top 10 only)
                </p>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-5 border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-purple-400">Q3 - 12 Minutes</h3>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded">Top 10</span>
              </div>
              <p className="text-gray-300 mb-3">
                Final shootout for pole position. The top 10 drivers compete for starting positions P1-P10.
              </p>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-gray-200">Battle for Glory:</span> P1 (Pole Position) - P10 determined by Q3 times
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded-lg p-5">
          <p className="text-sm text-gray-300">
            <span className="font-bold text-yellow-400">Key Rule:</span> Drivers eliminated in Q1 or Q2 have free tire choice for race start. Top 10 finishers must start on their Q2 tire compound, adding strategic complexity.
          </p>
        </div>
      </section>

      {/* How Qualifying Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">How Qualifying Works</h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-3">Single Flying Lap</h3>
            <p className="text-gray-300 mb-4">
              Unlike races, qualifying is all about one perfect lap. Drivers complete out-laps to warm tires, then push to the limit on their flying lap.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">Strategy:</span> Teams time their runs to avoid traffic and find optimal track conditions. Running late in each session often provides best grip as track evolves.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Track Evolution</h3>
            <p className="text-gray-300 mb-4">
              As more cars run, rubber is laid down on the racing line, increasing grip and lowering lap times.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">Advantages of Running Late:</h4>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>• Better track grip from rubber</li>
                  <li>• See rivals' times to beat</li>
                  <li>• Cooler temperatures (evening)</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-2">Risks of Running Late:</h4>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>• Yellow/red flags can cancel laps</li>
                  <li>• Less time if issues arise</li>
                  <li>• Traffic from other cars</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Multiple Attempts</h3>
            <p className="text-gray-300 mb-4">
              Drivers typically complete 2-3 flying laps per session, with time between runs to adjust setup and assess rivals' pace.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">
                Fresh tires provide the best grip. Teams carefully manage tire allocation, using older sets in Q1/Q2 if possible to save fresh tires for Q3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q2 Tire Rule */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">The Q2 Tire Rule</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <div className="bg-red-500/20 border-l-4 border-red-500 rounded-lg p-5 mb-6">
            <h3 className="text-xl font-bold text-red-400 mb-3">Critical Strategic Element</h3>
            <p className="text-gray-300 mb-3">
              Drivers who reach Q3 must start the race on the same tire compound used to set their fastest Q2 lap time.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-5">
              <h4 className="font-bold text-green-400 mb-3">Strategic Dilemma:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <p className="font-semibold text-gray-200 mb-2">Use Softer Tire in Q2:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Better chance to reach Q3</li>
                    <li>• But: Must start race on less durable tire</li>
                    <li>• Likely earlier pit stop</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-200 mb-2">Use Harder Tire in Q2:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Better race strategy (longer stint)</li>
                    <li>• But: Risk not making Q3</li>
                    <li>• Starting P11+ with free tire choice</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h4 className="font-bold text-yellow-400 mb-3">P11 Advantage</h4>
              <p className="text-sm text-gray-400">
                Drivers who qualify P11-P15 (eliminated in Q2) can start on any tire compound, giving them strategic flexibility the top 10 don't have. Sometimes this "free choice" makes P11 more desirable than P10 for race strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pole Position */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Pole Position</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🏆</div>
            <div>
              <h3 className="text-xl font-bold text-yellow-400">Starting P1</h3>
              <p className="text-sm text-gray-400">The ultimate qualifying achievement</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">
            Pole position is awarded to the driver with the fastest lap in Q3. Starting from pole provides significant advantages for Sunday's race.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 rounded-lg p-5">
              <h4 className="font-bold text-green-400 mb-3">Advantages:</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• <span className="font-semibold text-gray-200">Clean Air:</span> No dirty air from cars ahead</li>
                <li>• <span className="font-semibold text-gray-200">Control Pace:</span> Set the race rhythm</li>
                <li>• <span className="font-semibold text-gray-200">Racing Line:</span> Best track position through Turn 1</li>
                <li>• <span className="font-semibold text-gray-200">Strategic Flexibility:</span> React to others, not forced to attack</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-lg p-5">
              <h4 className="font-bold text-orange-400 mb-3">Statistics:</h4>
              <p className="text-sm text-gray-400 mb-3">
                Historically, pole position converts to race wins approximately 40% of the time, making it the single best predictor of race success.
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">Track Dependent:</span> Some circuits (Monaco, Hungary) heavily favor pole, while others (Monza, Spa) see more overtaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties and Grid Changes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Grid Penalties & Changes</h2>
        
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-3">Engine/Component Penalties</h3>
            <p className="text-sm text-gray-400 mb-3">
              Drivers who exceed their season allocation of power unit components receive grid penalties, dropping them back from their qualifying position.
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-gray-200">Example:</span> Qualify P3, receive 10-place penalty → Start P13
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-yellow-500 mb-3">Gearbox Penalties</h3>
            <p className="text-sm text-gray-400">
              Changing gearbox outside the allowed schedule results in a 5-place grid penalty.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-blue-500 mb-3">Qualifying Infractions</h3>
            <p className="text-sm text-gray-400">
              Impeding other drivers, ignoring flags, or exceeding track limits can result in lap time deletions or grid penalties.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-500 mb-3">Parc Fermé Violations</h3>
            <p className="text-sm text-gray-400">
              After qualifying, cars enter parc fermé (closed park). Making setup changes without permission results in pit lane start.
            </p>
          </div>
        </div>
      </section>

      {/* Weather Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Weather Impact</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-6">
            Rain or changing conditions can dramatically affect qualifying outcomes, creating unpredictability and opportunity.
          </p>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Wet Qualifying</h3>
              <p className="text-sm text-gray-400 mb-3">
                Intermediate or full wet tires required. Track evolution is extreme—later runners often have huge advantage as water clears.
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">Driver Skill Factor:</span> Wet conditions amplify talent differences, allowing skilled drivers in slower cars to out-qualify faster machinery.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-orange-400 mb-3">Mixed Conditions</h3>
              <p className="text-sm text-gray-400 mb-3">
                Most chaotic scenario. Some parts of track dry, others wet. Tire choice becomes critical gamble.
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">Red Flag Risk:</span> If session is stopped due to crash or weather, drivers who haven't set times can be eliminated. Timing is everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
