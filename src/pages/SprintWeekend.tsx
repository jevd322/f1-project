import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';
import { FridaySession as FridaySession } from '../components/RWCards';
import { SprintQuali as SprintQuali } from '../components/RWCards';
import { SprintRace as SprintRace } from '../components/RWCards';
import { SaturdaySessionTwo as SaturdaySessionTwo } from '../components/RWCards';
import { SundaySession as SundaySession } from '../components/RWCards';
import { Separator } from '@radix-ui/react-separator';

export default function SprintWeekend() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Sprint Weekend
        </h1>
      </header>

      <section className="my-4">
        <h2 className="text-3xl font-bold text-gray-100 mb-2">The Sprint Race Weekend Schedule</h2>
        <p className="text-gray-400">
          In the event of a Sprint Race Weekend, the FP2 and FP3 are instead replaced with Sprint
          Qualifying and Sprint Race.
        </p>
      </section>

      <section className="">
        <div className="grid grid-cols-3">
          <h2 className="text-2xl uppercase font-black text-gray-900 bg-yellow-300 px-6 py-4 h-fit shadow">
            Friday
          </h2>
          <h2 className="text-2xl uppercase font-black text-gray-900 bg-green-300 px-6 py-4 h-fit shadow">
            Saturday
          </h2>
          <h2 className="text-2xl uppercase font-black text-gray-900 bg-purple-300 px-6 py-4 h-fit shadow">
            Sunday
          </h2>
        </div>
        <Separator orientation="vertical" className="bg-gray-700 w-px mx-4" />
        <div className="grid grid-cols-3 gap-none">
          <div className="flex flex-col">
            <FridaySession />
            <SprintQuali />
          </div>
          <div className="flex flex-col">
            <SprintRace />
            <SaturdaySessionTwo />
          </div>
          <div>
            <SundaySession />
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
