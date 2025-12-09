import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';
import OpenF1Example from '../components/OpenF1Example';
import ChampionshipStandings from '../components/ChampionshipStandings';

export default function Championship() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Championship
        </h1>
      </header>

      <div className='grid grid-cols-3 gap-8'>
      <section className="mb-6 col-span-2 space-y-4">
        <h2 className="text-3xl text-gray-100 font-bold">Three-Phase Elimination Format</h2>
        <div>
          <p className="text-gray-400">
            The Qualifying session is usually held on Saturday afternoon right after the Free
            Practice 3 or Sprint Race.
          </p>
        </div>
      </section>
            <ChampionshipStandings />

      </div>
      <SectionNavButtons />
    </div>
  );
}
