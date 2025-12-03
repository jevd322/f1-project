export default function SideNav() {
  const links = [
    { id: 'race-weekend-summary', label: 'Race Weekend (Summary)' },
    { id: 'free-practice', label: 'Free Practice' },
    { id: 'qualifying', label: 'Qualifying' },
    { id: 'sprint-weekend', label: 'Sprint Weekend' },
    { id: 'race-day', label: 'Race Day' },
    { id: 'championship', label: 'Championship' },
    { id: 'watching-the-race-summary', label: 'Watching The Race (Summary)' },
    { id: 'tv-graphics', label: 'TV Graphics' },
    { id: 'safety-car', label: 'Safety Car' },
    { id: 'flag-system', label: 'Flag System' },
    { id: 'the-car-summary', label: 'The Car (Summary)' },
    { id: 'tyres', label: 'Tyres' },
    { id: 'aerodynamics', label: 'Aerodynamics' },
    { id: 'other-parts', label: 'Other Parts' },
    { id: 'track-summary', label: 'Track (Summary)' },
    { id: 'tracks', label: 'Current Tracks' },
    { id: 'turns', label: 'The Turns' },
    { id: 'pit-lane', label: 'Pit Lane' },
    { id: 'strategies-summary', label: 'Strategies (Summary)' },
    { id: 'fundamentals', label: 'Fundamentals' },
    { id: 'strategies', label: 'Following Strategies' },
    { id: 'rules-penalties-summary', label: 'Rules & Penalties (Summary)' },
    { id: 'fia', label: 'FIA' },
    { id: 'stewards', label: 'Stewards' },
    { id: 'penalties', label: 'Serving Penalties' },
  ];

  return (
    <>
      {/* Mobile: horizontal scroller */}
      <nav className="md:hidden overflow-x-auto pb-4">
        <ul className="flex gap-3 px-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#/basics/${l.id}`}
                className="inline-block px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-white/80 hover:bg-indigo-50"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop: vertical sidebar */}
      <aside className="hidden md:block w-80 flex-shrink-0 border-b border-slate-600/50 dark:border-white/10 shadow-sm  ">
        <div className="top-20 h-full">
          <div className="rounded bg-brand-100/80 p-4 pl-8 shadow h-full">
            <a
              href="#/basics/race-weekend-summary"
              className="text-2xl font-black text-gray-100 hover:text-indigo-600 mb-1 mt-3"
            >
              Race Weekend
            </a>
            <ul className="text-xl">
              <li className="ml-3 font-light">
                <a
                  href="#/basics/free-practice"
                  className="text-gray-100 hover:text-indigo-600 block"
                >
                  Free Practice
                </a>
                <a href="#/basics/qualifying" className="text-gray-100 hover:text-indigo-600 block">
                  Qualifying
                </a>
                <a
                  href="#/basics/sprint-weekend"
                  className="text-gray-100 hover:text-indigo-600 block"
                >
                  Sprint Weekend
                </a>
                <a href="#/basics/race-day" className="text-gray-100 hover:text-indigo-600 block">
                  Race Day
                </a>
                <a
                  href="#/basics/championship"
                  className="text-gray-100 hover:text-indigo-600 block"
                >
                  Championship
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-100 mb-1 mt-3">
              <a href="#/basics/watching-the-race-summary" className="hover:text-indigo-600">
                Watching The Race
              </a>
            </h2>
            <ul className="text-xl">
              <li className="ml-3 font-light">
                <a
                  href="#/basics/tv-graphics"
                  className="text-gray-100 hover:text-indigo-600 block"
                >
                  TV Graphics
                </a>
                <a href="#/basics/safety-car" className="text-gray-100 hover:text-indigo-600 block">
                  Safety Car
                </a>
                <a
                  href="#/basics/flag-system"
                  className="text-gray-100 hover:text-indigo-600 block"
                >
                  Flag System
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-100 mb-1 mt-3">
              <a href="#/basics/the-car-summary" className="hover:text-indigo-600">
                The Car
              </a>
            </h2>
            <ul className="text-xl">
              <li className="ml-3 font-light">
                <a href="#/basics/tyres" className="text-gray-100 hover:text-indigo-600 block">
                  Tyres
                </a>
                <a
                  href="#/basics/aerodynamics"
                  className="text-gray-100 hover:text-indigo-600 block"
                >
                  Aerodynamics
                </a>
                <a
                  href="#/basics/other-parts"
                  className="text-gray-100 hover:text-indigo-600 block"
                >
                  Other Parts
                </a>
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-100 mb-1 mt-3">
              <a href="#/basics/track-summary" className="hover:text-indigo-600">
                Track
              </a>
            </h2>
            <ul className="text-xl">
              <li className="ml-3 font-light">
                <a href="#/basics/tracks" className="text-gray-100 hover:text-indigo-600 block">
                  Current Tracks
                </a>
                <a href="#/basics/turns" className="text-gray-100 hover:text-indigo-600 block">
                  The Turns
                </a>
                <a href="#/basics/pit-lane" className="text-gray-100 hover:text-indigo-600 block">
                  Pit Lane
                </a>
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-100 mb-1 mt-3">
              <a href="#/basics/strategies-summary" className="hover:text-indigo-600">
                Strategies
              </a>
            </h2>
            <ul className="text-xl">
              <li className="ml-3 font-light">
                <a
                  href="#/basics/fundamentals"
                  className="text-gray-100 hover:text-indigo-600 block"
                >
                  Fundamentals
                </a>
                <a href="#/basics/strategies" className="text-gray-100 hover:text-indigo-600 block">
                  Following Strategies
                </a>
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-100 mb-1 mt-3">
              <a href="#/basics/rules-penalties-summary" className="hover:text-indigo-600">
                Rules & Penalties
              </a>
            </h2>
            <ul className="text-xl">
              <li className="ml-3 font-light">
                <a href="#/basics/fia" className="text-gray-100 hover:text-indigo-600 block">
                  FIA
                </a>
                <a href="#/basics/stewards" className="text-gray-100 hover:text-indigo-600 block">
                  Stewards
                </a>
                <a href="#/basics/penalties" className="text-gray-100 hover:text-indigo-600 block">
                  Serving Penalties
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
