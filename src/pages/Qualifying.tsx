import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';
import { Separator } from '@radix-ui/react-separator';
import { CardDemo as QualifyingCard } from '../components/QualifyingCard';
import { CardQualiTwo as QualiTwo } from '../components/QualifyingCard';
import { CardQualiThree as QualiThree } from '../components/QualifyingCard';

export default function QualifyingPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Qualifying
        </h1>
      </header>

      <section className="my-6">
        <h2 className="text-3xl text-gray-100 font-bold">Three-Phase Elimination Format</h2>
        <div>
          <p className="text-gray-400">
            The Qualifying session is usually held on Saturday afternoon right after the Free
            Practice 3 or Sprint Race.
          </p>
        </div>
      </section>

      <section className="my-6">
        <p className="my-4 text-xl text-gray-200">
          Qualifying is divided into three segments: Q1, Q2, and Q3. Each phase increases the level
          of competition, gradually narrowing the field.
        </p>
        <div className="flex flex-row gap-4">
          <QualifyingCard />
          <QualiTwo />
          <QualiThree />
        </div>
      </section>

      <section className="my-6">
        <h2 className="text-3xl text-gray-100 font-bold">Qualifying Graphics</h2>
        <div>
          <p className="text-gray-400">
            This section covers the graphics used during the Qualifying session
          </p>
        </div>
      </section>

      <section className="my-6">
        <div>
          <h2 className="text-3xl text-gray-100 font-bold">Grid Position</h2>
          <p className="text-gray-400">
            Note: The Pole Position (P1) is usually placed on the racing line, which is the part of
            the track where cars lay down the most rubber.
          </p>
        </div>

        <Separator className="my-4 h-px bg-gray-700 border-0" />
        <div className="pl-8 pr-8">
          <div className="flex flex-row gap-2 justify-between mt-4 mb-2 pr-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex flex-row items-center">
                <span className="text-gray-300 text-lg font-bold w-8 text-right">{`P${
                  20 - 2 * i
                }`}</span>
                <svg
                  width="32"
                  height="40"
                  viewBox="0 0 24 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M18 4v40M6 4h12M6 44h12" />
                </svg>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-2 justify-between mb-4 pl-12">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex flex-row items-center">
                <span className="text-gray-300 text-lg font-bold w-6 text-right">{`P${
                  19 - 2 * i
                }`}</span>
                <svg
                  width="32"
                  height="40"
                  viewBox="0 0 24 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M18 4v40M6 4h12M6 44h12" />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-4 h-px bg-gray-700 border-0" />
      </section>

      <SectionNavButtons />
    </div>
  );
}
