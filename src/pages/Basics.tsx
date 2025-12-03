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
              <header className="mb-8">
                <h1 className="text-3xl font-black bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text text-transparent uppercase">
                  Basics
                </h1>
                <p className="mt-1 text-2xl font-medium text-gray-300">
                  Understanding F1 Races and Broadcast
                </p>
              </header>

              <section id="overview" className="mt-6">
                <h2 className="text-xl text-gray-100 font-bold">Overview</h2>
                <div className="mt-4">
                  <p className="mt-2 text-gray-300">
                    Formula 1 is known for its chaotic races and fast-paced action. If you are
                    looking to get into the sport, whether to surprise your friends or just to have
                    a new hobby, this site is for you. The project of this site is to provide
                    insight into the F1™ race weekend structure. As well as help new fans understand
                    key terminology used in broadcasts and tips for following live races.
                  </p>
                </div>
              </section>

              <section id="overview" className="mt-6">
                <div className="mt-4">
                  <Accordion type="single" defaultValue="item-1">
                    <AccordionItem value="item-1">
                      <AccordionTrigger value="item-1">What is Free Practice?</AccordionTrigger>
                      <AccordionContent value="item-1">
                        Free practice session notes and setup tips.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger value="item-2">How does Qualifying work?</AccordionTrigger>
                      <AccordionContent value="item-2">
                        Qualifying is split into three sessions (Q1/Q2/Q3) to determine grid order.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <h2 className="text-xl text-gray-50 font-bold">Each section covers</h2>
                <ul className="mt-2 space-y-1">
                  <li className="mb-2">
                    <h2 className="text-md text-gray-100 font-semibold">Race Weekend:</h2>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                      <li>Free Practice - The purpose of practice sessions</li>
                      <li>
                        Qualifying - The format of qualifying sessions and where the grid positions
                        are determined.
                      </li>
                      <li>Sprint Weekend - The varied format of a race weekend.</li>
                      <li>Race Day - Detailing the race day procedure.</li>
                      <li>Championship - The Drivers and Constructors championship.</li>
                    </ul>
                  </li>
                  <li>
                    <h2 className="text-md text-gray-100 font-semibold">Race Control:</h2>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                      <li>Flags - Explanation of the flag system.</li>
                      <li>Safety Car - Understanding the role of the safety car.</li>
                    </ul>
                  </li>

                  <li>
                    <h2 className="text-md text-gray-100 font-semibold">The Car:</h2>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                      <li>Tyres - Different tyre compounds and their strategies.</li>
                      <li>Aerodynamics - How aerodynamics affect car performance.</li>
                      <li>Other Parts - Overview of other key car components.</li>
                    </ul>
                  </li>

                  <li>
                    <h2 className="text-md text-gray-100 font-semibold">Track:</h2>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                      <li>Current Tracks - Overview of current F1 circuits.</li>
                      <li>The Turns - Notable corners and how to approach them.</li>
                      <li>Pit Lane - Pit stop procedures and strategies.</li>
                    </ul>
                  </li>

                  <li>
                    <h2 className="text-md text-gray-100 font-semibold">Strategies:</h2>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                      <li>Fundamentals - Basic racing strategies.</li>
                      <li>Following Strategies - Tips for following races live.</li>
                    </ul>
                  </li>

                  <li>
                    <h2 className="text-md text-gray-100 font-semibold">Rules & Penalties:</h2>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                      <li>Track Limits - Understanding track limit violations.</li>
                      <li>Penalty System - Overview of the penalty system.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section id="configuration" className="mt-6 bg-white/80 p-6 rounded shadow">
                <h2 className="text-xl font-semibold">Configuration</h2>
                <p className="mt-2 text-gray-600">
                  Edit <code className="bg-gray-100 px-2 py-1 rounded">tailwind.config.cjs</code> to
                  customize theme tokens.
                </p>
              </section>

              <section id="components" className="mt-6 bg-white/80 p-6 rounded shadow">
                <h2 className="text-xl font-semibold">Components</h2>
                <p className="mt-2 text-gray-600">
                  Create reusable components under{' '}
                  <code className="bg-gray-100 px-2 py-1 rounded">src/components</code>.
                </p>
              </section>

              <section id="examples" className="mt-6 bg-white/80 p-6 rounded shadow">
                <h2 className="text-xl font-semibold">Examples</h2>
                <p className="mt-2 text-gray-600">Example usage and small code snippets.</p>
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
