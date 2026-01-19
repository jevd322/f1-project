import SectionNavButtons from '../components/SectionNavButtons';

export default function ServingPenalties() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">FIA Officials</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Serving Penalties
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          When drivers receive penalties during a race, there are specific ways they must be served. Understanding how penalties are applied affects race strategy and final results.
        </p>
      </section>

      {/* Time Penalties */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Time Penalties During Race</h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">5-Second Penalty</h3>
            <p className="text-gray-300 mb-4">
              The most common penalty. Driver must serve it during their next pit stop or it's added to their final race time.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Served at Pit Stop</h4>
                <p className="text-sm text-gray-400 mb-2">
                  Car must remain stationary for 5 additional seconds after tire change is complete.
                </p>
                <p className="text-xs text-gray-500">
                  Team signals when work is done, crew waits 5 seconds, then driver leaves
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-2">Added to Final Time</h4>
                <p className="text-sm text-gray-400 mb-2">
                  If driver doesn't pit, 5 seconds added to race time after checkered flag.
                </p>
                <p className="text-xs text-gray-500">
                  Can change final position if gap to car behind is less than 5 seconds
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-orange-400 mb-3">10-Second Penalty</h3>
            <p className="text-gray-300 mb-4">
              Similar to 5-second penalty but for more serious infractions. Applied the same way but with longer wait time.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">Strategic Impact:</span> 10 seconds is significant—roughly equal to 2-3 positions on most circuits. Teams may adjust pit strategy to minimize position loss.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-3">5 or 10-Second Stop-and-Go</h3>
            <p className="text-gray-300 mb-4">
              Driver must enter pit lane, stop in their box for the specified time, then rejoin. No work can be done on the car.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold text-gray-200">Difference from regular time penalty:</span> Must be served within 3 laps of notification.
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">Time Loss:</span> Approximately 30-35 seconds total (includes pit entry/exit)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drive-Through Penalty */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Drive-Through Penalty</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-6">
            One of the most severe in-race penalties. Driver must enter pit lane, drive through at pit speed limit, and rejoin without stopping.
          </p>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-red-400 mb-3">Key Rules</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Must be served within 3 laps of notification</li>
                <li>• Cannot stop for tire changes or work</li>
                <li>• Must obey pit lane speed limit (60-80 km/h depending on track)</li>
                <li>• Costs approximately 20-25 seconds of race time</li>
                <li>• Cannot be served under Safety Car or red flag</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">Strategic Considerations</h3>
              <p className="text-sm text-gray-400 mb-3">
                Since no work can be done during a drive-through, teams must decide whether to:
              </p>
              <ul className="space-y-2 text-sm text-gray-400 ml-4">
                <li>• Serve immediately and maintain race rhythm</li>
                <li>• Wait until lap 2-3 to assess race situation</li>
                <li>• Combine with actual pit stop by pitting immediately after serving</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="font-bold text-red-400">Typical Causes:</span> Dangerous driving, ignoring blue flags repeatedly, major pit lane violations, false start
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Penalties */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Grid Penalties (Applied to Next Race)</h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Position Grid Drops</h3>
            <p className="text-gray-300 mb-4">
              Driver's qualifying position is moved back by the specified number of places.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-yellow-400 mb-2">3-5 Places</h4>
                <p className="text-sm text-gray-400">Minor infractions like impeding, causing avoidable collision</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">10 Places</h4>
                <p className="text-sm text-gray-400">New power unit component, gearbox change, serious incidents</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-red-400 mb-2">Back of Grid</h4>
                <p className="text-sm text-gray-400">Multiple component changes, very serious violations</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-blue-400 mb-4">How Grid Penalties Stack</h3>
            <p className="text-gray-300 mb-4">
              When multiple drivers have grid penalties, they're applied in a specific order.
            </p>
            
            <div className="bg-black/30 rounded-lg p-5">
              <h4 className="font-semibold text-gray-200 mb-3">Order of Application:</h4>
              <ol className="space-y-2 text-sm text-gray-400 ml-4 list-decimal">
                <li>Apply all position penalties in order of qualifying results</li>
                <li>Place all "back of grid" penalties after regular grid</li>
                <li>If multiple "back of grid," ordered by qualifying times</li>
                <li>Pit lane starts applied last (for parc fermé violations, etc.)</li>
              </ol>
            </div>

            <div className="mt-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="font-bold text-yellow-400">Example:</span> If you qualify P5 but have a 10-place penalty, you start P15. If you have two 10-place penalties (20 total), you start P20 or back of grid if fewer than 20 cars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Penalty Points on License */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Penalty Points on Super License</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-6">
            In addition to race penalties, drivers can receive penalty points on their FIA Super License for certain infractions.
          </p>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-red-400 mb-3">The 12-Point System</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Penalty points accumulate on Super License</li>
                <li>• Each point remains active for 12 months from date of incident</li>
                <li>• Reaching 12 points triggers automatic one-race ban</li>
                <li>• Points reset after serving ban or after 12 months expire</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">Common Point Allocations</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <ul className="space-y-2">
                  <li>• <span className="font-semibold text-gray-200">1 Point:</span> Minor violations</li>
                  <li>• <span className="font-semibold text-gray-200">2 Points:</span> Causing collision, unsafe rejoining</li>
                  <li>• <span className="font-semibold text-gray-200">3 Points:</span> Dangerous driving, ignoring flags</li>
                </ul>
                <ul className="space-y-2">
                  <li>• <span className="font-semibold text-gray-200">Not all penalties carry points</span></li>
                  <li>• <span className="font-semibold text-gray-200">Stewards decide points case by case</span></li>
                  <li>• <span className="font-semibold text-gray-200">Severity determines point count</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="font-bold text-red-400">Impact:</span> Drivers near 12 points must drive extra cautiously. A race ban can devastate championship hopes, as missing even one race means zero points scored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Race Penalties */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Post-Race Penalties</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-6">
            Some penalties are issued after the race concludes, potentially changing official results.
          </p>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-purple-400 mb-3">Time Penalties Added</h3>
              <p className="text-sm text-gray-400 mb-3">
                If investigation concludes after race, time penalties (5s, 10s, etc.) are added to final race time, potentially dropping driver in standings.
              </p>
              <p className="text-xs text-gray-500">
                This can happen when stewards need more time to review evidence or hear from parties involved
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-red-400 mb-3">Disqualification</h3>
              <p className="text-sm text-gray-400 mb-3">
                Most severe penalty. Driver removed from race results entirely, scoring zero points.
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">Common Causes:</span> Technical regulations violations (illegal parts, underweight car, fuel irregularities), using banned driving aids
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-green-400 mb-3">Grid Penalties for Next Race</h3>
              <p className="text-sm text-gray-400">
                If incident was too late in race to serve penalty, or if behavior warrants future punishment, grid drop applied to next event.
              </p>
            </div>

            <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="font-bold text-blue-400">Notable:</span> Post-race penalties can be controversial as they change results after celebrations. Teams have the right to appeal to FIA International Court of Appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Circumstances */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Special Circumstances</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-yellow-500 mb-3">Penalties Under Safety Car</h3>
            <p className="text-gray-300 mb-4">
              Time penalties (5s, 10s) can be served during Safety Car periods, but drive-through penalties cannot.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">
                Teams often try to pit under Safety Car to "minimize" time penalty impact, though 5 seconds is still 5 seconds.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-orange-500 mb-3">Red Flag Complications</h3>
            <p className="text-gray-300 mb-4">
              If race is red flagged, unserved penalties must be served after restart or added post-race.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">
                Drive-through penalties may be converted to different penalty types if race ends under red flag.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-blue-500 mb-3">Final Lap Penalties</h3>
            <p className="text-gray-300 mb-4">
              Incidents on the final lap result in post-race time additions or grid penalties for next race.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">
                Cannot serve drive-through on final lap—penalty applied after race or to next event.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-green-500 mb-3">Black Flag (Disqualification)</h3>
            <p className="text-gray-300 mb-4">
              Extremely rare. Driver shown black flag and must return to pits immediately, ending their race.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">
                Reserved for ignoring multiple penalties, dangerous driving, or serious technical violations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
