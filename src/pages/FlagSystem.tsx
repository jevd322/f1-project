import SectionNavButtons from '../components/SectionNavButtons';

export default function FlagSystemPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Flag System
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Flags are the primary way race officials communicate with drivers during a session. Each color has a specific meaning and requires different driver responses.
        </p>
      </section>

      {/* Green Flag */}
      <section className="mb-6 bg-white/5 rounded-lg p-6 border-l-4 border-green-500">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-12 bg-green-600 rounded"></div>
          <h2 className="text-2xl font-bold text-green-400">Green Flag</h2>
        </div>
        <p className="text-gray-300 mb-3">
          The track is clear and racing can proceed normally.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">When Shown:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>At the start of a session</li>
            <li>After a yellow flag period ends</li>
            <li>To indicate clear track ahead</li>
          </ul>
        </div>
      </section>

      {/* Yellow Flag */}
      <section className="mb-6 bg-white/5 rounded-lg p-6 border-l-4 border-yellow-400">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-12 bg-yellow-400 rounded"></div>
          <h2 className="text-2xl font-bold text-yellow-400">Yellow Flag</h2>
        </div>
        <p className="text-gray-300 mb-3">
          Danger ahead! There's an incident or hazard on or near the track.
        </p>
        <div className="bg-gray-900/50 p-4 rounded mb-3">
          <p className="text-sm font-semibold text-gray-200 mb-2">Driver Must:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Slow down significantly</li>
            <li>Be prepared to change direction or stop</li>
            <li>No overtaking allowed</li>
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-yellow-400 font-semibold min-w-[140px]">Single Waved</span>
            <span className="text-gray-400">Hazard off track or resolved</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-400 font-semibold min-w-[140px]">Double Waved</span>
            <span className="text-gray-400">Hazard on track, be ready to stop</span>
          </div>
        </div>
      </section>

      {/* Red Flag */}
      <section className="mb-6 bg-white/5 rounded-lg p-6 border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-12 bg-red-600 rounded"></div>
          <h2 className="text-2xl font-bold text-red-500">Red Flag</h2>
        </div>
        <p className="text-gray-300 mb-3">
          Session stopped immediately. All cars must return to the pit lane.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Reasons for Red Flag:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Serious accident requiring medical attention</li>
            <li>Track blocked or heavily damaged</li>
            <li>Extreme weather conditions</li>
            <li>Insufficient light to continue safely</li>
          </ul>
        </div>
      </section>

      {/* Blue Flag */}
      <section className="mb-6 bg-white/5 rounded-lg p-6 border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-12 bg-blue-600 rounded"></div>
          <h2 className="text-2xl font-bold text-blue-400">Blue Flag</h2>
        </div>
        <p className="text-gray-300 mb-3">
          A faster car is approaching to lap you. You must let them pass.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Rules:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Must be shown for 3 consecutive marshalling posts</li>
            <li>Driver must allow faster car to pass within reasonable time</li>
            <li>Ignoring blue flags can result in penalties</li>
            <li>Not shown during first lap of race</li>
          </ul>
        </div>
      </section>

      {/* White Flag */}
      <section className="mb-6 bg-white/5 rounded-lg p-6 border-l-4 border-gray-300">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-12 bg-white rounded"></div>
          <h2 className="text-2xl font-bold text-gray-100">White Flag</h2>
        </div>
        <p className="text-gray-300 mb-3">
          Slow-moving vehicle ahead on track (ambulance, safety car, recovery vehicle, or slow car).
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm text-gray-400">Drivers should be aware but can continue at racing speed unless also shown yellow flags.</p>
        </div>
      </section>

      {/* Black and White Flag */}
      <section className="mb-6 bg-white/5 rounded-lg p-6 border-l-4 border-gray-500">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-12 bg-gradient-to-br from-black via-gray-200 to-black rounded"></div>
          <h2 className="text-2xl font-bold text-gray-100">Black & White Diagonal</h2>
        </div>
        <p className="text-gray-300 mb-3">
          Official warning for unsportsmanlike behavior. Shown with car number.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Warned For:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Forcing another driver off track</li>
            <li>Weaving to defend position</li>
            <li>Exceeding track limits repeatedly</li>
            <li>Changing direction under braking</li>
          </ul>
        </div>
      </section>

      {/* Black Flag */}
      <section className="mb-6 bg-white/5 rounded-lg p-6 border-l-4 border-black">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-12 bg-black border border-gray-600 rounded"></div>
          <h2 className="text-2xl font-bold text-gray-100">Black Flag</h2>
        </div>
        <p className="text-gray-300 mb-3">
          Disqualification. The driver must return to the pits immediately and may not continue.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Reasons:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Serious rule violations</li>
            <li>Dangerous driving after warnings</li>
            <li>Ignoring blue flags repeatedly</li>
            <li>Technical infringements</li>
          </ul>
        </div>
      </section>

      {/* Black Flag with Orange Circle */}
      <section className="mb-6 bg-white/5 rounded-lg p-6 border-l-4 border-orange-500">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-12 bg-black rounded flex items-center justify-center">
            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-2xl font-bold text-orange-500">Black with Orange Circle</h2>
        </div>
        <p className="text-gray-300 mb-3">
          Mechanical problem detected. The driver must return to the pits for inspection.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Common Issues:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Loose bodywork or wing damage</li>
            <li>Fluid leaking from car</li>
            <li>Damaged wheels or suspension</li>
            <li>Any issue that could be dangerous</li>
          </ul>
        </div>
      </section>

      {/* Chequered Flag */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border-l-4 border-gray-400">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-12 bg-gradient-to-br from-black via-white to-black rounded" style={{backgroundImage: 'repeating-linear-gradient(45deg, black 0, black 25%, white 25%, white 50%)'}}></div>
          <h2 className="text-2xl font-bold text-gray-100">Chequered Flag</h2>
        </div>
        <p className="text-gray-300 mb-3">
          The session or race has ended. Shown to the winner first, then all following cars.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm text-gray-400">Once the chequered flag is shown, drivers complete their current lap and then must return to parc fermé or the pits.</p>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
