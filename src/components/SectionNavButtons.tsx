import React from 'react';

const ROUTES = [
  'race-weekend-summary',
  'free-practice',
  'qualifying',
  'sprint-weekend',
  'race-day',
  'championship',
  'watching-the-race-summary',
  'tv-graphics',
  'safety-car',
  'flag-system',
  'the-car-summary',
  'tyres',
  'aerodynamics',
  'other-parts',
  'track-summary',
  'tracks',
  'turns',
  'pit-lane',
  'strategies-summary',
  'fundamentals',
  'strategies',
  'rules-penalties-summary',
  'fia',
  'stewards',
  'penalties',
];

const ROUTE_LABELS: Record<string, string> = {
  'race-weekend-summary': 'Race Weekend (Summary)',
  'free-practice': 'Free Practice',
  qualifying: 'Qualifying',
  'sprint-weekend': 'Sprint Weekend',
  'race-day': 'Race Day',
  championship: 'Championship',
  'watching-the-race-summary': 'Watching The Race (Summary)',
  'tv-graphics': 'TV Graphics',
  'safety-car': 'Safety Car',
  'flag-system': 'Flag System',
  'the-car-summary': 'The Car (Summary)',
  tyres: 'Tyres',
  aerodynamics: 'Aerodynamics',
  'other-parts': 'Other Parts',
  'track-summary': 'Track (Summary)',
  tracks: 'Current Tracks',
  turns: 'The Turns',
  'pit-lane': 'Pit Lane',
  'strategies-summary': 'Strategies (Summary)',
  fundamentals: 'Fundamentals',
  strategies: 'Following Strategies',
  'rules-penalties-summary': 'Rules & Penalties (Summary)',
  fia: 'FIA',
  stewards: 'Stewards',
  penalties: 'Serving Penalties',
};

type Props = {
  /** optional: current route id (e.g. "free-practice"). If omitted, the component reads from window.location.hash */
  current?: string;
};

export default function SectionNavButtons({ current }: Props) {
  // determine current route id without leading slash
  const raw =
    typeof current === 'string'
      ? current
      : typeof window !== 'undefined'
      ? window.location.hash.replace('#', '')
      : '';
  const curId = raw.replace(/^\//, '');

  const idx = ROUTES.indexOf(curId);

  const prev = idx > 0 ? ROUTES[idx - 1] : null;
  const next = idx >= 0 && idx < ROUTES.length - 1 ? ROUTES[idx + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav className="mt-8 flex justify-between items-center">
      <div>
        {prev !== null ? (
          <a
            href={`#/basics/${prev}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/90 text-sm font-medium text-gray-700 hover:bg-gray-100 border"
            aria-label={`Go to previous section: ${prev}`}
          >
            {`← ${ROUTE_LABELS[prev] ?? prev}`}
          </a>
        ) : (
          <span />
        )}
      </div>

      <div>
        {next !== null ? (
          <a
            href={`#/basics/${next}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700"
            aria-label={`Go to next section: ${next}`}
          >
            {`${ROUTE_LABELS[next] ?? next} →`}
          </a>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
