import { useEffect, useState } from 'react';
import constructorStandingsData from '../data/f1db-seasons-constructor-standings.json';
import entrantsDriversData from '../data/f1db-seasons-entrants-drivers.json';

interface TeamDetailProps {
  teamId: string;
}

interface SeasonStats {
  year: number;
  positionNumber: number | null;
  positionText: string | null;
  totalPoints: number;
}

interface DriverEntry {
  year: number;
  driverId: string;
}

interface CareerStats {
  totalSeasons: number;
  totalPoints: number;
  championships: number;
  bestFinish: number | null;
}

const teamColors: Record<string, string> = {
  'red-bull': 'bg-f1-red-bull',
  'ferrari': 'bg-f1-ferrari',
  'mercedes': 'bg-f1-mercedes',
  'mclaren': 'bg-f1-mclaren',
  'aston-martin': 'bg-f1-aston-martin',
  'alpine': 'bg-f1-alpine',
  'williams': 'bg-f1-williams',
  'rb': 'bg-f1-rb',
  'racing-bulls': 'bg-f1-rb',
  'kick-sauber': 'bg-f1-kick-sauber',
  'haas': 'bg-f1-haas',
  'brawn': 'bg-gradient-to-b from-lime-400 to-lime-600',
  'renault': 'bg-gradient-to-b from-yellow-400 to-yellow-600',
  'lotus': 'bg-gradient-to-b from-black to-yellow-500',
  'bmw-sauber': 'bg-gradient-to-b from-blue-500 to-white',
  'force-india': 'bg-gradient-to-b from-pink-500 to-orange-500',
  'toro-rosso': 'bg-gradient-to-b from-blue-600 to-red-600',
  'default': 'bg-gradient-to-b from-gray-400 to-gray-600'
};

const getTeamColor = (teamId: string): string => {
  const normalizedTeam = teamId.toLowerCase().replace(/\s+/g, '-');
  return teamColors[normalizedTeam] || teamColors['default'];
};

export default function TeamDetail({ teamId }: TeamDetailProps) {
  const [seasonStats, setSeasonStats] = useState<SeasonStats[]>([]);
  const [driverHistory, setDriverHistory] = useState<DriverEntry[]>([]);
  const [careerStats, setCareerStats] = useState<CareerStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get all seasons for this team
    const teamSeasons = (constructorStandingsData as any[])
      .filter((c: any) => c.constructorId === teamId)
      .map((c: any) => ({
        year: c.year,
        positionNumber: c.positionNumber,
        positionText: c.positionText,
        totalPoints: c.points
      }))
      .sort((a, b) => b.year - a.year); // Most recent first

    setSeasonStats(teamSeasons);

    // Get driver history
    const drivers = (entrantsDriversData as any[])
      .filter((e: any) => e.constructorId === teamId && e.testDriver === false)
      .map((e: any) => ({
        year: e.year,
        driverId: e.driverId
      }))
      .sort((a, b) => b.year - a.year);

    setDriverHistory(drivers);

    // Calculate career totals
    const career: CareerStats = {
      totalSeasons: teamSeasons.length,
      totalPoints: teamSeasons.reduce((sum, s) => sum + s.totalPoints, 0),
      championships: teamSeasons.filter(s => s.positionNumber === 1).length,
      bestFinish: teamSeasons.length > 0 
        ? Math.min(...teamSeasons.map(s => s.positionNumber || Infinity))
        : null
    };

    setCareerStats(career);
    setLoading(false);
  }, [teamId]);

  const formatName = (id: string) => {
    return id.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getTeamInitials = (id: string): string => {
    const parts = id.split('-');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-200">Loading team information...</div>
      </div>
    );
  }

  if (seasonStats.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-200">Team not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <header className="mb-8">
        <a 
          href="#/seasons"
          className="inline-flex items-center gap-2 text-[#FFD37B] hover:text-[#FFC857] mb-4"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Seasons
        </a>
        
        <div className="flex items-center gap-6">
          {/* Team Avatar */}
          <div className="relative">
            <div className={`w-32 h-32 rounded-full ${getTeamColor(teamId)} flex items-center justify-center shadow-lg border-4 border-slate-800`}>
              <span className="text-5xl font-black text-white drop-shadow-lg">
                {getTeamInitials(teamId)}
              </span>
            </div>
          </div>

          {/* Team Name and Title */}
          <div>
            <h1 className="text-5xl font-black uppercase text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
              {formatName(teamId)}
            </h1>
            
            {careerStats && careerStats.championships > 0 && (
              <p className="text-2xl text-gray-300 mt-2">
                {careerStats.championships}x Constructors' Champion
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Career Stats Grid */}
      {careerStats && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Team Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Seasons</div>
              <div className="text-3xl font-bold text-[#FFD37B]">{careerStats.totalSeasons}</div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Total Points</div>
              <div className="text-3xl font-bold text-[#FFD37B]">
                {careerStats.totalPoints.toFixed(0)}
              </div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Championships</div>
              <div className="text-3xl font-bold text-[#FFD37B]">{careerStats.championships}</div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Best Finish</div>
              <div className="text-3xl font-bold text-[#FFD37B]">
                {careerStats.bestFinish ? `${careerStats.bestFinish}${getOrdinalSuffix(careerStats.bestFinish)}` : 'N/A'}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Season by Season */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Season by Season</h2>
        <div className="bg-slate-700 rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-800 text-gray-300 uppercase text-sm">
              <tr>
                <th className="px-4 py-3">Year</th>
                <th className="px-4 py-3">Drivers</th>
                <th className="px-4 py-3 text-center">Position</th>
                <th className="px-4 py-3 text-center">Points</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              {seasonStats.map((season) => {
                const seasonDrivers = driverHistory
                  .filter(d => d.year === season.year)
                  .map(d => d.driverId);
                
                return (
                  <tr 
                    key={season.year}
                    className="border-t border-slate-600 hover:bg-slate-600 transition-colors"
                  >
                    <td className={`w-4 px-4 py-3 font-semibold`}>
                      <a 
                        href={`#/seasons/${season.year}`}
                        className="hover:text-[#FFD37B] transition-colors"
                      >
                        {season.year}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-2">
                        {seasonDrivers.map(driverId => (
                          <a
                            key={driverId}
                            href={`#/drivers/${driverId}`}
                            className="text-sm bg-slate-600 px-2 py-1 rounded hover:bg-[#FFD37B] hover:text-black transition-colors"
                          >
                            {formatName(driverId)}
                          </a>
                        ))}
                      </div>
                    </td>
                    <td className={`w-4 px-4 py-3 text-center text-lg font-bold ${
                      season.positionNumber === 1 ? 'bg-yellow-300/80 text-slate-700' : ''
                    }`}>
                      {season.positionNumber || season.positionText || 'N/A'}
                      {season.positionNumber === 1 && ' 🏆'}
                    </td>
                    <td className="px-4 py-3 text-center">{season.totalPoints.toFixed(0)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Driver History */}
      <section>
        <h2 className="text-2xl font-bold text-gray-100 mb-4">All Drivers</h2>
        <div className="flex flex-wrap gap-3">
          {Array.from(new Set(driverHistory.map(d => d.driverId)))
            .map(driverId => {
              const years = driverHistory
                .filter(d => d.driverId === driverId)
                .map(d => d.year)
                .sort((a, b) => a - b);
              
              return (
                <a
                  key={driverId}
                  href={`#/drivers/${driverId}`}
                  className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  <div className="font-bold text-[#FFD37B]">{formatName(driverId)}</div>
                  <div className="text-sm text-gray-400">
                    {years.length > 1 
                      ? `${years[0]} - ${years[years.length - 1]}`
                      : years[0]
                    }
                  </div>
                </a>
              );
            })}
        </div>
      </section>
    </div>
  );
}

function getOrdinalSuffix(num: number): string {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) return 'st';
  if (j === 2 && k !== 12) return 'nd';
  if (j === 3 && k !== 13) return 'rd';
  return 'th';
}
