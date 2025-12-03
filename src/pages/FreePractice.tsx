import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';
import { Separator } from '@radix-ui/react-separator';

export default function FreePracticePage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Free Practice
        </h1>
      </header>

      <section id="fpSummary" className="mt-6 mb-6">
        <h2 className="text-2xl text-gray-100 font-bold">Objectives of Free Practice</h2>
        <div className="mt-2">
          <p className="text-gray-300">
            Free Practice sessions are a fundamental component of every Formula 1 Grand Prix
            weekend, providing teams and drivers with the opportunity to prepare, evaluate, and
            refine their performance ahead of qualifying and the race.
          </p>
          <p className="mt-4 text-gray-300">
            These sessions allow teams to collect critical data under real track conditions, testing
            various car setups, aerodynamic configurations, and tire compounds. The objective is to
            achieve the optimal balance between speed, reliability, and tire management specific to
            each circuit.
          </p>
          <p className="my-4 text-gray-300">
            Engineers analyze telemetry and performance metrics in real time to:
          </p>
        </div>
      </section>
      <Separator className="my-8 h-px bg-gray-700 border-0" />
      <section>
        <div>
          <h2 className="text-2xl text-gray-100 font-bold">Free Practice - One Two and Three</h2>

          <p className="text-gray-300 mt-2 mb-2">
            Each event typically includes three practice sessions — FP1, FP2, and FP3 — held over
            Friday and Saturday.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <PracticeCard
            title="Free Practice 1"
            description="Initial session for drivers to learn the track, test setups, and gather data."
          />
          <PracticeCard
            title="Free Practice 2"
            description="Second session, often used for longer runs and race simulation. Teams refine car balance and tyre choices."
          />
          <PracticeCard
            title="Free Practice 3"
            description="Final practice before qualifying. Focus on short runs and final setup tweaks."
          />
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}

function PracticeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-rose-200/80 rounded-lg shadow p-6 flex flex-col items-start">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
    </div>
  );
}
