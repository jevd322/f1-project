import SectionNavButtons from '../components/SectionNavButtons';

export default function PitLane() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Pit Lane
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          The pit lane is where teams service their cars during practice, qualifying, and races. Pit stops are crucial moments that can make or break a race strategy.
        </p>
      </section>

      {/* What is Pit Lane */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">What is the Pit Lane?</h2>
        <p className="text-gray-300 mb-4">
          A parallel lane adjacent to the main straight where each team has a garage and designated pit box for servicing their cars.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Key Areas:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li><span className="font-semibold">Pit Entry</span>: Where cars exit the track to enter pit lane</li>
            <li><span className="font-semibold">Pit Boxes</span>: Designated areas for each team (20 total)</li>
            <li><span className="font-semibold">Pit Exit</span>: Where cars rejoin the track after servicing</li>
            <li><span className="font-semibold">Fast Lane</span>: Through-lane for cars not stopping</li>
          </ul>
        </div>
      </section>

      {/* Pit Stop Procedure */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Pit Stop Procedure</h2>
        <p className="text-gray-300 mb-4">
          A modern F1 pit stop is a precisely choreographed operation performed by up to 20 team members.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Standard Pit Stop (Tire Change)</h3>
            <div className="bg-gray-900/50 p-4 rounded">
              <p className="text-sm font-semibold text-gray-200 mb-2">The Crew:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>4 wheel gun operators (one per wheel)</li>
                <li>8 tire handlers (two per wheel - on/off)</li>
                <li>2 front and rear jack operators</li>
                <li>1 stabilizer at the front</li>
                <li>Others ready for adjustments/repairs</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-900/30 border border-green-600 rounded p-4">
            <p className="text-sm font-semibold text-green-400 mb-2">Record Speed:</p>
            <p className="text-sm text-gray-300">The fastest pit stops take under 2 seconds! Average stops are 2.5-3 seconds.</p>
          </div>
        </div>
      </section>

      {/* Speed Limits */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Pit Lane Speed Limit</h2>
        <p className="text-gray-300 mb-4">
          For safety reasons, strict speed limits are enforced in the pit lane.
        </p>
        <div className="bg-gray-900/50 p-4 rounded mb-3">
          <p className="text-sm font-semibold text-gray-200 mb-2">Speed Limits by Track:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Most circuits: 80 km/h (50 mph)</li>
            <li>Monaco: 60 km/h (37 mph) - narrower pit lane</li>
            <li>Some street circuits: 60 km/h</li>
          </ul>
        </div>
        <div className="bg-red-900/30 border border-red-600 rounded p-4">
          <p className="text-sm font-semibold text-red-400 mb-2">Penalty:</p>
          <p className="text-sm text-gray-300">Speeding results in time penalties (typically 5-10 seconds) or fines</p>
        </div>
      </section>

      {/* Types of Stops */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Types of Pit Stops</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Tire Change</h3>
            <p className="text-sm text-gray-400">Most common - changing to fresh tires or different compound. Takes 2-3 seconds.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Front Wing Change</h3>
            <p className="text-sm text-gray-400">Replacing damaged wing or adjusting settings. Adds 3-5 seconds.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Repairs</h3>
            <p className="text-sm text-gray-400">Fixing damage from incidents. Can take 10+ seconds depending on severity.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Drive-Through Penalty</h3>
            <p className="text-sm text-gray-400">Car must enter pit lane, drive through at speed limit, and exit without stopping.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Stop-Go Penalty</h3>
            <p className="text-sm text-gray-400">Car must stop in pit box for specified time (5 or 10 seconds) without servicing.</p>
          </div>
        </div>
      </section>

      {/* Pit Stop Losses */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Time Lost During Pit Stop</h2>
        <p className="text-gray-300 mb-4">
          Pitting costs more than just the stationary time due to speed limits and traveling through pit lane.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Total Time Loss:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Stationary time: 2-3 seconds</li>
            <li>Pit lane travel time: 15-25 seconds</li>
            <li>Total loss compared to staying out: 18-28 seconds typically</li>
            <li>Varies by circuit based on pit lane length</li>
          </ul>
        </div>
      </section>

      {/* Pit Lane Rules */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Important Rules</h2>
        <div className="space-y-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <h3 className="font-semibold text-gray-100 mb-2">Pit Entry Line</h3>
            <p className="text-sm text-gray-300">White line separating track from pit entry - must not cross once committed to pitting</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <h3 className="font-semibold text-gray-100 mb-2">Pit Exit Line</h3>
            <p className="text-sm text-gray-300">Must stay left of white line when exiting until it ends - cannot cut across</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <h3 className="font-semibold text-gray-100 mb-2">Red Light</h3>
            <p className="text-sm text-gray-300">At pit exit - cars must wait if red light is on (car approaching on track)</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <h3 className="font-semibold text-gray-100 mb-2">Pit Lane Closed</h3>
            <p className="text-sm text-gray-300">During Safety Car deployment initially or in emergencies - no entering allowed</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <h3 className="font-semibold text-gray-100 mb-2">Unsafe Release</h3>
            <p className="text-sm text-gray-300">Releasing car into path of another in pit lane results in penalties</p>
          </div>
        </div>
      </section>

      {/* Strategic Importance */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Strategic Importance</h2>
        <p className="text-gray-300 mb-4">
          Pit stops are critical strategic moments that teams plan meticulously throughout the race.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Key Factors:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Undercut: Pitting early to gain track position</li>
            <li>Overcut: Staying out longer to take advantage of clear air</li>
            <li>Double-stacking: Both cars pitting same lap (risks delay)</li>
            <li>Safety Car windows: Cheaper time to pit</li>
            <li>Tire strategy: When to switch compounds</li>
          </ul>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
