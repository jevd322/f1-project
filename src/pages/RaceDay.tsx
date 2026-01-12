import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';
import { RaceTimeline as RaceTimeline } from '../components/RaceTimeline';
import { RaceTimelineSlides as RaceTimelineslides } from '../components/RaceTimeline';

export default function RaceDay() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Race Day
        </h1>
      </header>

      <section className="my-6">
        <h2 className="text-3xl text-gray-100 font-bold">Sunday Timeline</h2>
        <div>
          <p className="text-gray-400">
            This page is dedicated to providing the full timeline of the main event, the Grand Prix;
            the race.
          </p>
        </div>
      </section>

      <section className="my-6">
        <div className="flex flex-col gap-0 pb-4 relative">
          {/* Pre-Race */}
          <div className="flex flex-row items-start gap-4 relative">
            <div className="w-full">
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-200 border-2 border-amber-500" />
                  <p className="text-xl font-bold uppercase text-yellow-200">Pre-Race</p>
                </div>
                <p className="text-sm text-gray-400">
                  Grid formation, warm-up laps, strategy finalization, media build-up.
                </p>
              </div>

              <div className="shadow-lg border-l-4 border-blue-900 mt-4 p-4 rounded-lg bg-gray-900">
                <h2 className="text-lg font-bold text-gray-100">Installation Laps</h2>
                <p className="flex flex-row gap-1 items-center text-sm text-gray-400 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-gray-500"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2"
                    />
                  </svg>
                  30 minutes before race start
                </p>
                <p className="text-sm text-gray-200">
                  Installation laps are only done from pitlane exit to pitlane entry, meaning you
                  cannot do a full lap. After completing the laps, the drivers head to the starting
                  grid where mechanics take over.
                  <br />
                  <ul className="list-disc list-inside mt-2">
                    Purpose:
                    <li>Check brakes and tire temperatures</li>
                    <li>Practice pit entry and exit</li>
                    <li>Get a feel for the car's balance</li>
                  </ul>
                </p>
              </div>
              <div className="shadow-lg border-l-4 border-blue-900 mt-4 p-4 rounded-lg bg-gray-900">
                <h2 className="text-lg font-bold text-gray-100">Grid Preparation</h2>
                <p className="flex flex-row gap-1 items-center text-sm text-gray-400 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-gray-500"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2"
                    />
                  </svg>
                  30 minutes before race start
                </p>
                <p className="text-sm text-gray-200">
                  Installation laps are only done from pitlane exit to pitlane entry, meaning you
                  cannot do a full lap. After completing the laps, the drivers head to the starting
                  grid where mechanics take over.
                  <br />
                  <ul className="list-disc list-inside mt-2">
                    Purpose:
                    <li>Check brakes and tire temperatures</li>
                    <li>Practice pit entry and exit</li>
                    <li>Get a feel for the car's balance</li>
                  </ul>
                </p>
              </div>

              <div className="shadow-lg border-l-4 border-blue-900 mt-4 p-4 rounded-lg bg-gray-900">
                <h2 className="text-lg font-bold text-gray-100">Installation Laps</h2>
                <p className="flex flex-row gap-1 items-center text-sm text-gray-400 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-gray-500"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2"
                    />
                  </svg>
                  30 minutes before race start
                </p>
                <p className="text-sm text-gray-200">
                  Installation laps are only done from pitlane exit to pitlane entry, meaning you
                  cannot do a full lap.
                  <br />
                  <ul className="list-disc list-inside mt-2">
                    Purpose:
                    <li>Check brakes and tire temperatures</li>
                    <li>Practice pit entry and exit</li>
                    <li>Get a feel for the car's balance</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl text-gray-300 font-semibold mt-4">Race Start</h2>
        <h2 className="text-xl text-gray-300 font-semibold mt-4">Post-Race</h2>
      </section>

      <SectionNavButtons />
    </div>
  );
}
