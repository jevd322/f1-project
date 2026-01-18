import SectionNavButtons from '../components/SectionNavButtons';

export default function SafetyCarPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Watching The Race</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Safety Car
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          The Safety Car is deployed to control the race when there's an incident or hazardous conditions. Here's what happens when it comes out.
        </p>
      </section>

      {/* What is the Safety Car */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">What is the Safety Car?</h2>
        <p className="text-gray-300 mb-4">
          A Mercedes-AMG GT Black Series driven by experienced driver Bernd Mayländer. It leads the field at a controlled speed while marshals clear incidents or debris from the track.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Key Points:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Yellow flags are shown around the entire circuit</li>
            <li>All cars must slow down and follow the Safety Car</li>
            <li>No overtaking allowed (except lapped cars in some cases)</li>
            <li>Cars bunch up, eliminating time gaps</li>
          </ul>
        </div>
      </section>

      {/* When is it Deployed */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">When is it Deployed?</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Serious Incidents</h3>
            <p className="text-sm text-gray-400">Major crashes requiring marshals to work on track safely</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Track Debris</h3>
            <p className="text-sm text-gray-400">Large pieces of carbon fiber or car parts that need clearing</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Weather Conditions</h3>
            <p className="text-sm text-gray-400">Heavy rain or poor visibility making racing dangerous</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Recovering Stranded Cars</h3>
            <p className="text-sm text-gray-400">When a car is stuck in a dangerous position</p>
          </div>
        </div>
      </section>

      {/* Virtual Safety Car (VSC) */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Virtual Safety Car (VSC)</h2>
        <p className="text-gray-300 mb-4">
          A less disruptive alternative to the full Safety Car for minor incidents. No physical car on track—drivers must slow to a delta time controlled by their dashboard.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">VSC Rules:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Drivers reduce speed to match a target lap time</li>
            <li>Must maintain the same delta throughout all sectors</li>
            <li>No overtaking allowed</li>
            <li>Time gaps between cars remain roughly the same</li>
            <li>Pit stops still allowed but lose relative position</li>
          </ul>
        </div>
      </section>

      {/* Strategic Impact */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Strategic Impact</h2>
        <p className="text-gray-300 mb-4">
          Safety Cars dramatically affect race strategy and can completely change the outcome.
        </p>
        <div className="space-y-4">
          <div className="bg-green-900/30 border border-green-600 rounded p-4">
            <h3 className="font-semibold text-green-400 mb-2">Advantages</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>Cheap pit stop opportunity (lose less time)</li>
              <li>Can close gaps to leaders</li>
              <li>Fresh tires while others are on old ones</li>
            </ul>
          </div>
          <div className="bg-red-900/30 border border-red-600 rounded p-4">
            <h3 className="font-semibold text-red-400 mb-2">Disadvantages</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>Built-up lead can be erased instantly</li>
              <li>May have to pit from good position</li>
              <li>Timing can be unlucky for pit strategy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety Car Restart */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Safety Car Restart</h2>
        <p className="text-gray-300 mb-4">
          When the track is clear, the Safety Car returns to the pits and racing resumes.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Restart Procedure:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Safety Car lights go out on the final lap</li>
            <li>Leader controls the pace but cannot weave excessively</li>
            <li>Green flags wave to signal racing can resume</li>
            <li>Overtaking allowed once Safety Car enters pit lane</li>
            <li>Often leads to exciting battles and position changes</li>
          </ul>
        </div>
      </section>

      {/* Red Flag */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-red-600/50">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Red Flag (Race Suspension)</h2>
        <p className="text-gray-300 mb-4">
          For extreme situations, Race Control can red flag the session, completely stopping the race.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">What Happens:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>All cars must return to pit lane immediately</li>
            <li>Teams can work on cars and change tires</li>
            <li>Used for major crashes or dangerous conditions</li>
            <li>Race restarts from pit lane or grid after issue resolved</li>
          </ul>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
