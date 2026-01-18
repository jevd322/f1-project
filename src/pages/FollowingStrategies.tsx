import SectionNavButtons from '../components/SectionNavButtons';

export default function FollowingStrategies() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Strategies</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Following Strategies
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Following another car in F1 is both a challenge and an opportunity. Dirty air reduces grip, but slipstream provides speed. Mastering following strategies is crucial for overtaking and race management.
        </p>
      </section>

      {/* Dirty Air vs Slipstream */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Dirty Air vs Slipstream</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="bg-red-500/20 border-l-4 border-red-500 rounded p-4 mb-4">
              <h3 className="text-xl font-bold text-red-400 mb-3">Dirty Air (Negative)</h3>
              <p className="text-gray-300 mb-4">
                Turbulent air behind a car disrupts aerodynamics, reducing downforce and grip in corners.
              </p>
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="bg-black/30 rounded-lg p-3">
                <p className="font-semibold text-gray-200 mb-1">Effects:</p>
                <ul className="space-y-1 ml-4">
                  <li>• 10-30% downforce loss in corners</li>
                  <li>• Increased tire degradation</li>
                  <li>• Overheating front tires</li>
                  <li>• Reduced corner speed</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="font-semibold text-gray-200 mb-1">Most Affected:</p>
                <p>High-speed corners where downforce is critical</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="bg-green-500/20 border-l-4 border-green-500 rounded p-4 mb-4">
              <h3 className="text-xl font-bold text-green-400 mb-3">Slipstream (Positive)</h3>
              <p className="text-gray-300 mb-4">
                Reduced air resistance on straights allows following car to gain speed and close the gap.
              </p>
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="bg-black/30 rounded-lg p-3">
                <p className="font-semibold text-gray-200 mb-1">Effects:</p>
                <ul className="space-y-1 ml-4">
                  <li>• 5-15 km/h speed boost</li>
                  <li>• Reduced drag on straights</li>
                  <li>• Better acceleration</li>
                  <li>• Overtaking opportunity</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="font-semibold text-gray-200 mb-1">Most Effective:</p>
                <p>Long straights with DRS activation zones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staying Connected */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Staying Connected</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">The 1-Second Window</h3>
          <p className="text-gray-300 mb-4">
            To enable DRS and have a realistic chance of overtaking, you must stay within 1 second of the car ahead at the DRS detection point.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">Within 1 Second:</h4>
              <ul className="space-y-1 text-sm text-gray-400 ml-4">
                <li>• DRS available on straights</li>
                <li>• Can use slipstream effectively</li>
                <li>• Constant pressure on leader</li>
                <li>• Strategic options available</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-red-400 mb-2">Beyond 1 Second:</h4>
              <ul className="space-y-1 text-sm text-gray-400 ml-4">
                <li>• No DRS assistance</li>
                <li>• Overtaking very difficult</li>
                <li>• Gap likely to increase</li>
                <li>• Must change strategy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Techniques to Stay Close</h3>
          <div className="space-y-3">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-semibold text-gray-200 mb-2">1. Manage Tire Temperature</h4>
              <p className="text-sm text-gray-400">
                Back off slightly in corners to reduce overheating, then push on straights using slipstream to make up time.
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-semibold text-gray-200 mb-2">2. Alternate Attack Corners</h4>
              <p className="text-sm text-gray-400">
                Don't push maximum in every corner. Save tires by varying which corners you attack to stay within range.
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-semibold text-gray-200 mb-2">3. Use Strategic Patience</h4>
              <p className="text-sm text-gray-400">
                Sometimes backing off 0.5 seconds to preserve tires pays off in final laps when opponent's tires are gone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tire Management While Following */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Tire Management While Following</h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-3">The Degradation Challenge</h3>
            <p className="text-gray-300 mb-4">
              Following in dirty air causes 15-25% higher tire degradation compared to running in clean air, especially on the front tires.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-yellow-400 mb-2">Why It Happens:</h4>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>• Reduced downforce = more sliding</li>
                  <li>• Overheating from turbulent air</li>
                  <li>• Higher steering angles needed</li>
                  <li>• Increased wheel spin</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Management Tactics:</h4>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>• Short-shift to reduce wheelspin</li>
                  <li>• Lift earlier in some corners</li>
                  <li>• Use understeer to save fronts</li>
                  <li>• Plan earlier pit stop if needed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-purple-400 mb-3">The Tire Delta Gambit</h3>
            <p className="text-gray-300 mb-4">
              Intentionally accepting higher degradation while following, knowing you'll pit earlier for an undercut attempt.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">Strategy:</span> Push hard to stay close for 10-15 laps, burning through tires, then pit early for fresh rubber and attempt undercut. The pace delta on new vs old tires can be 1-2 seconds per lap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Patience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Strategic Patience</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-6">
            Sometimes the best strategy when following is <span className="font-bold text-yellow-400">not</span> to attack immediately, but to play the long game.
          </p>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-green-400 mb-3">When to Be Patient</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <ul className="space-y-2">
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">Track is hard to overtake:</span> Better to wait for strategy</li>
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">Opponent on old tires:</span> They'll fade in final laps</li>
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">You're on longer strategy:</span> Preserve tires for later advantage</li>
                </ul>
                <ul className="space-y-2">
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">Safety Car likely:</span> Wait for SC to bunch field</li>
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">Fighting teammate:</span> Team may ask for position swap later</li>
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">Championship situation:</span> Points finish matters more than position</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-red-400 mb-3">When to Attack Aggressively</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <ul className="space-y-2">
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">DRS overtaking zone:</span> Clear opportunity exists</li>
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">Tire advantage:</span> You're 5+ laps fresher</li>
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">Must build gap:</span> Faster car behind you</li>
                </ul>
                <ul className="space-y-2">
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">Late race:</span> No more strategy options available</li>
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">Opponent's mistake:</span> Capitalize immediately</li>
                  <li><span className="text-red-500">•</span> <span className="font-semibold text-gray-200">Fighting for podium/win:</span> Championship implications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Stalking Strategy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">The Stalking Strategy</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-orange-400 mb-4">Applying Psychological Pressure</h3>
          <p className="text-gray-300 mb-6">
            Staying within 1-2 seconds lap after lap puts immense pressure on the driver ahead, potentially forcing errors.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-yellow-400 mb-2">Early Race</h4>
              <p className="text-sm text-gray-400">
                Stay 1.5-2 seconds back, save tires, let them know you're there
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Mid Race</h4>
              <p className="text-sm text-gray-400">
                Close to 1 second, show yourself in mirrors, make them defend
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-red-400 mb-2">Final Laps</h4>
              <p className="text-sm text-gray-400">
                Maximum attack, use DRS, force them into mistakes from pressure
              </p>
            </div>
          </div>

          <div className="mt-6 bg-black/30 rounded-lg p-4">
            <p className="text-sm text-gray-300">
              <span className="font-bold text-yellow-400">Famous Example:</span> Lewis Hamilton's "tyre whisperer" performances, where he manages tires perfectly while following, then strikes in final laps when opponent's tires are gone.
            </p>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
