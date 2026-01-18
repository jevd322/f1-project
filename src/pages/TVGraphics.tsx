import SectionNavButtons from '../components/SectionNavButtons';

export default function TVGraphicsPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Watching The Race</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          TV Graphics
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Understanding what you see on screen helps you follow the race better. Here are the key graphics you'll encounter.
        </p>
      </section>

      {/* Timing Tower */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Timing Tower</h2>
        <p className="text-gray-300 mb-4">
          The vertical list showing driver positions, gaps, and lap times in real-time.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-green-400 font-semibold min-w-[80px]">Position</span>
            <span className="text-gray-400">Current race position (1-20)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-400 font-semibold min-w-[80px]">Driver</span>
            <span className="text-gray-400">Three-letter abbreviation (e.g., VER, HAM, LEC)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-400 font-semibold min-w-[80px]">Interval</span>
            <span className="text-gray-400">Gap to the car ahead in seconds</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-400 font-semibold min-w-[80px]">Tire</span>
            <span className="text-gray-400">Current tire compound (Soft/Medium/Hard)</span>
          </div>
        </div>
      </section>

      {/* Speed Trap */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Speed Trap</h2>
        <p className="text-gray-300 mb-4">
          Shows the top speeds reached at specific points on the track, usually on the longest straight.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm text-gray-400">Displayed in km/h or mph depending on your broadcast</p>
        </div>
      </section>

      {/* Sector Times */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Sector Times</h2>
        <p className="text-gray-300 mb-4">
          Each lap is divided into three sectors. Colors show how drivers are performing compared to their best times.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-16 h-8 bg-purple-600 rounded flex items-center justify-center text-white text-sm font-bold">S1</div>
            <span className="text-gray-300">Personal best sector time (purple)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-8 bg-green-600 rounded flex items-center justify-center text-white text-sm font-bold">S2</div>
            <span className="text-gray-300">Better than previous lap (green)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-8 bg-yellow-500 rounded flex items-center justify-center text-white text-sm font-bold">S3</div>
            <span className="text-gray-300">Slower than previous lap (yellow)</span>
          </div>
        </div>
      </section>

      {/* Tire Graphics */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Tire Information</h2>
        <p className="text-gray-300 mb-4">
          Shows which tire compound each driver is using and how old they are.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
            <div>
              <p className="text-gray-100 font-semibold">Soft (Red)</p>
              <p className="text-sm text-gray-400">Fastest but wears quickly</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">M</div>
            <div>
              <p className="text-gray-100 font-semibold">Medium (Yellow)</p>
              <p className="text-sm text-gray-400">Balanced speed and durability</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-900 font-bold">H</div>
            <div>
              <p className="text-gray-100 font-semibold">Hard (White)</p>
              <p className="text-sm text-gray-400">Slowest but lasts longest</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-gray-900/50 p-4 rounded">
          <p className="text-sm text-gray-400">Number next to tire shows age in laps (e.g., M-12 = 12 laps old)</p>
        </div>
      </section>

      {/* DRS Indicator */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">DRS Indicator</h2>
        <p className="text-gray-300 mb-4">
          Shows when DRS (Drag Reduction System) is available and active.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-green-600 rounded text-white font-bold">DRS</div>
            <span className="text-gray-300">DRS is available and activated</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-gray-600 rounded text-white font-bold">DRS</div>
            <span className="text-gray-300">DRS zone but not available to this driver</span>
          </div>
        </div>
      </section>

      {/* Position Changes */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Position Changes</h2>
        <p className="text-gray-300 mb-4">
          Arrows show position gains and losses compared to the start.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-green-500">↑ +3</span>
            <span className="text-gray-300">Gained 3 positions</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl text-red-500">↓ -2</span>
            <span className="text-gray-300">Lost 2 positions</span>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
