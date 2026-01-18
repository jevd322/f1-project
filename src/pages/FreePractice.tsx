import SectionNavButtons from '../components/SectionNavButtons';

export default function FreePracticePage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Free Practice
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Free Practice sessions are where teams prepare for qualifying and the race. These sessions provide valuable track time to test setups, evaluate tire performance, and gather critical data.
        </p>
      </section>

      {/* Session Format */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Session Format</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Typical Weekend Schedule</h3>
          <p className="text-gray-300 mb-4">
            Most Grand Prix weekends feature three practice sessions spread across Friday and Saturday.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-400 mb-2">FP1 - Friday</h4>
              <p className="text-sm text-gray-400 mb-2">60 minutes</p>
              <p className="text-xs text-gray-500">
                Initial track running, learn layout, baseline setup, test tire compounds
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-bold text-green-400 mb-2">FP2 - Friday</h4>
              <p className="text-sm text-gray-400 mb-2">60 minutes</p>
              <p className="text-xs text-gray-500">
                Race simulations, long runs, tire degradation testing, fuel load analysis
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-400 mb-2">FP3 - Saturday</h4>
              <p className="text-sm text-gray-400 mb-2">60 minutes</p>
              <p className="text-xs text-gray-500">
                Qualifying preparation, low-fuel runs, final setup tweaks
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded-lg p-5">
          <p className="text-sm text-gray-300">
            <span className="font-bold text-yellow-400">Sprint Weekends:</span> Format changes to just one 60-minute practice session (FP1) on Friday before Sprint Qualifying, reducing preparation time significantly.
          </p>
        </div>
      </section>

      {/* What Teams Do */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">What Teams Do in Free Practice</h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-3">Setup Development</h3>
            <p className="text-gray-300 mb-4">
              Teams test different car configurations to find the optimal balance for the specific circuit.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-gray-200 mb-2">Mechanical Setup:</h4>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>• Wing angles (front/rear)</li>
                  <li>• Suspension stiffness</li>
                  <li>• Ride height adjustments</li>
                  <li>• Anti-roll bar settings</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-gray-200 mb-2">Fine Tuning:</h4>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>• Brake balance (front/rear bias)</li>
                  <li>• Differential settings</li>
                  <li>• Steering geometry</li>
                  <li>• Engine modes and mapping</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Tire Testing</h3>
            <p className="text-gray-300 mb-4">
              Understanding tire behavior is critical for both qualifying and race strategy.
            </p>
            <div className="bg-black/30 rounded-lg p-5">
              <h4 className="font-semibold text-gray-200 mb-3">Key Activities:</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• <span className="font-semibold text-gray-200">Compound Evaluation:</span> Test all available compounds (soft, medium, hard) to understand performance</p>
                <p>• <span className="font-semibold text-gray-200">Degradation Analysis:</span> Long runs to measure how quickly tires lose performance</p>
                <p>• <span className="font-semibold text-gray-200">Operating Window:</span> Find temperature range where tires work best</p>
                <p>• <span className="font-semibold text-gray-200">Graining/Blistering:</span> Identify potential tire problems before race day</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Race Simulations</h3>
            <p className="text-gray-300 mb-4">
              Teams run practice race stints to understand fuel consumption, tire wear, and race pace.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-gray-200 mb-2">Simulation Focus:</h4>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>• Fuel load effects on handling</li>
                  <li>• Stint length possibilities</li>
                  <li>• Pace with used tires</li>
                  <li>• Traffic management</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-gray-200 mb-2">Strategy Planning:</h4>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>• One-stop vs two-stop viability</li>
                  <li>• Optimal pit window timing</li>
                  <li>• Compound selection for race</li>
                  <li>• Undercut effectiveness</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-green-400 mb-3">Data Collection</h3>
            <p className="text-gray-300 mb-4">
              Engineers gather massive amounts of telemetry data to understand car performance in detail.
            </p>
            <div className="bg-black/30 rounded-lg p-5">
              <h4 className="font-semibold text-gray-200 mb-3">Metrics Analyzed:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-400">
                <ul className="space-y-1">
                  <li>• Speed through every corner</li>
                  <li>• Braking points and force</li>
                  <li>• Throttle application</li>
                  <li>• Steering inputs</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Tire temperatures and pressures</li>
                  <li>• Aerodynamic load</li>
                  <li>• Engine performance</li>
                  <li>• Fuel consumption rate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Objectives */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Driver Objectives</h2>
        
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-500 mb-2">Learn the Track</h3>
            <p className="text-sm text-gray-400">
              Build confidence with track layout, especially for new or modified circuits. Identify braking points, turn-in spots, and track limits.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-500 mb-2">Adapt to Car Balance</h3>
            <p className="text-sm text-gray-400">
              Work with engineers to dial in car handling to their driving style. Communicate understeer, oversteer, and other characteristics clearly.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-500 mb-2">Build Confidence</h3>
            <p className="text-sm text-gray-400">
              Gradually push limits to find maximum pace. Understand where the car will grip and where it won't, especially in high-speed sections.
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-500 mb-2">Practice Starts</h3>
            <p className="text-sm text-gray-400">
              Run practice starts at pit exit to test clutch bite point, wheel spin, and launch procedures—critical for race day.
            </p>
          </div>
        </div>
      </section>

      {/* FP1 vs FP2 vs FP3 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Session Priorities</h2>
        
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <h3 className="text-xl font-bold text-gray-100">FP1 - Friday Morning</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-2">Primary Focus:</h4>
                <p className="text-sm text-gray-400">Initial baseline setup, track acclimatization, basic data gathering</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-2">Typical Approach:</h4>
                <p className="text-sm text-gray-400">Conservative pace, test multiple setup directions, build driver confidence</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 className="text-xl font-bold text-gray-100">FP2 - Friday Afternoon</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">Primary Focus:</h4>
                <p className="text-sm text-gray-400">Race simulation, long-run tire degradation, fuel load analysis</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">Typical Approach:</h4>
                <p className="text-sm text-gray-400">Extended stints on different compounds, high fuel loads, strategy planning</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <h3 className="text-xl font-bold text-gray-100">FP3 - Saturday Morning</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 mb-2">Primary Focus:</h4>
                <p className="text-sm text-gray-400">Qualifying preparation, low-fuel performance, final setup refinement</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 mb-2">Typical Approach:</h4>
                <p className="text-sm text-gray-400">Qualifying simulations, push laps, fine-tune wing angles, confirm tire choice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Running Challenges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Challenges and Limitations</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-red-400 mb-3">Weather Changes</h3>
              <p className="text-sm text-gray-400">
                If practice is dry but rain is forecast for qualifying or race, teams lose valuable wet-weather preparation time. Conversely, wet practice sessions provide limited dry setup data.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-orange-400 mb-3">Track Evolution</h3>
              <p className="text-sm text-gray-400">
                Track conditions improve dramatically as rubber is laid down. Early practice lap times may not represent final pace, making it difficult to judge true competitiveness.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">Limited Time</h3>
              <p className="text-sm text-gray-400">
                Only 3 hours total (or 1 hour on sprint weekends) to test everything: setup options, tire compounds, race simulations, and qualifying prep. Teams must prioritize carefully.
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Red Flags and Incidents</h3>
              <p className="text-sm text-gray-400">
                Crashes or mechanical failures can halt sessions, losing precious running time. Teams may not complete their planned programs, forcing compromises on race strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
