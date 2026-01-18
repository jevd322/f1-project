import { useEffect, useState } from 'react';
import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';
import Accordion, {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/Accordion';

// import the actual page components so nested basics routes render their page files
import FreePractice from './FreePractice';
import Qualifying from './Qualifying';
import SprintWeekend from './SprintWeekend';
import RaceDay from './RaceDay';
import Championship from './Championship';
import TVGraphics from './TVGraphics';
import SafetyCar from './SafetyCar';
import FlagSystem from './FlagSystem';
import Tyres from './Tyres';
import Aerodynamics from './Aerodynamics';
import OtherParts from './OtherParts';
import CurrentTracks from './CurrentTracks';
import TheTurns from './TheTurns';
import PitLane from './PitLane';
import Fundamentals from './Fundamentals';
import FollowingStrategies from './FollowingStrategies';
import FIA from './FIA';
import Stewards from './Stewards';
import ServingPenalties from './ServingPenalties';
import RaceWeekend from './RaceWeekend';
import WatchingTheRace from './WatchingTheRace';
import TheCar from './TheCar';
import Track from './Track';
import Strategies from './Strategies';
import RulesAndPenalties from './RulesAndPenalties';

const ID_TO_PAGE: Record<string, React.ComponentType<any>> = {
  'race-weekend-summary': RaceWeekend,
  'free-practice': FreePractice,
  qualifying: Qualifying,
  'sprint-weekend': SprintWeekend,
  'race-day': RaceDay,
  championship: Championship,
  'watching-the-race-summary': WatchingTheRace,
  'tv-graphics': TVGraphics,
  'safety-car': SafetyCar,
  'flag-system': FlagSystem,
  'the-car-summary': TheCar,
  tyres: Tyres,
  aerodynamics: Aerodynamics,
  'other-parts': OtherParts,
  'track-summary': Track,
  tracks: CurrentTracks,
  turns: TheTurns,
  'pit-lane': PitLane,
  'strategies-summary': Strategies,
  fundamentals: Fundamentals,
  strategies: FollowingStrategies,
  'rules-penalties-summary': RulesAndPenalties,
  fia: FIA,
  stewards: Stewards,
  penalties: ServingPenalties,
};

export default function Basics() {
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // if the route points to a nested basics page, render that section's content
  const isNested = route.startsWith('/basics/');
  const nestedId = isNested ? route.split('/')[2] : null;
  const SectionComponent = nestedId ? ID_TO_PAGE[nestedId] ?? null : null;

  return (
    <div className="w-full px-0 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8">
      <SideNav />

      <main className="w-full col-span-3 col-start-2">
        <div className="ml-24 mr-48 mt-12 mb-20">
          {!isNested ? (
            <>
              <header className="mb-12">
                <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Getting Started</h2>
                <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
                  Basics
                </h1>
              </header>

              {/* Navigation Section */}
              <section id="navigation" className="mt-12 mb-12">
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Race Weekend - CTA */}
                  <a
                    href="#/race-weekend"
                    className="group md:col-span-3 bg-orange-800 rounded-lg p-8 border-2 border-red-400 hover:border-[#FFD37B] shadow-lg hover:shadow-2xl transition-all transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-xs font-bold text-red-200 uppercase tracking-wider">Start Here</span>
                        <h3 className="text-3xl font-black text-white group-hover:text-[#FFD37B] transition-colors">
                          Race Weekend
                        </h3>
                      </div>
                      <svg className="w-8 h-8 text-white group-hover:text-[#FFD37B] group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <p className="text-red-50 text-lg">
                      Learn about Free Practice, Qualifying, Sprint Weekends, Race Day procedures, and the Championship points system.
                    </p>
                  </a>

                  {/* Watching The Race */}
                  <a
                    href="#/watching-the-race"
                    className="group bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#FFD37B] hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                        Watching The Race
                      </h3>
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-[#FFD37B] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">
                      TV graphics, safety car procedures, and flag system explained.
                    </p>
                  </a>

                  {/* The Car */}
                  <a
                    href="#/the-car"
                    className="group bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#FFD37B] hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                        The Car
                      </h3>
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-[#FFD37B] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Tires, aerodynamics, and key components that make F1 cars fast.
                    </p>
                  </a>

                  {/* Track */}
                  <a
                    href="#/track"
                    className="group bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#FFD37B] hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                        Track
                      </h3>
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-[#FFD37B] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Current circuits, famous corners, and pit lane operations.
                    </p>
                  </a>

                  {/* Strategies */}
                  <a
                    href="#/strategies"
                    className="group bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#FFD37B] hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                        Strategies
                      </h3>
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-[#FFD37B] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Strategic fundamentals and following strategies during races.
                    </p>
                  </a>

                  {/* Rules And Penalties */}
                  <a
                    href="#/rulesandpenalties"
                    className="group bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#FFD37B] hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                        Rules & Penalties
                      </h3>
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-[#FFD37B] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">
                      FIA governance, stewards' decisions, and how penalties are served.
                    </p>
                  </a>
                </div>
              </section>

            </>
          ) : (
            <>
              {SectionComponent ? (
                <section className="">
                  <SectionComponent />
                  <SectionNavButtons current={nestedId ?? undefined} />
                </section>
              ) : (
                <section className="mt-6 bg-white/80 p-6 rounded shadow">
                  <h2 className="text-xl font-semibold">Not found</h2>
                  <p className="mt-2 text-gray-600">This section does not exist.</p>
                </section>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
