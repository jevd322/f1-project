import { useEffect, useState } from 'react';
import driversData from '../data/f1db-seasons-drivers.json';
import entrantsDriversData from '../data/f1db-seasons-entrants-drivers.json';
import drivers2025Data from '../data/drivers-2025.json';

interface DriverDetailProps {
  driverId: string;
}

interface SeasonStats {
  year: number;
  positionNumber: number | null;
  positionText: string | null;
  totalRaceWins: number;
  totalPodiums: number;
  totalPoints: number;
  totalPolePositions: number;
  totalRaceStarts: number;
  bestRaceResult: number | null;
}

interface TeamEntry {
  year: number;
  constructorId: string;
  entrantId: string;
}

interface CareerStats {
  totalSeasons: number;
  totalRaceStarts: number;
  totalWins: number;
  totalPodiums: number;
  totalPoles: number;
  totalPoints: number;
  championships: number;
  bestFinish: number | null;
}

export default function DriverDetail({ driverId }: DriverDetailProps) {
  const [seasonStats, setSeasonStats] = useState<SeasonStats[]>([]);
  const [teamHistory, setTeamHistory] = useState<TeamEntry[]>([]);
  const [careerStats, setCareerStats] = useState<CareerStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get all seasons for this driver
    const driverSeasons = (driversData as any[])
      .filter((d: any) => d.driverId === driverId)
      .map((d: any) => ({
        year: d.year,
        positionNumber: d.positionNumber,
        positionText: d.positionText,
        totalRaceWins: d.totalRaceWins,
        totalPodiums: d.totalPodiums,
        totalPoints: d.totalPoints,
        totalPolePositions: d.totalPolePositions,
        totalRaceStarts: d.totalRaceStarts,
        bestRaceResult: d.bestRaceResult
      }))
      .sort((a, b) => b.year - a.year); // Most recent first

    setSeasonStats(driverSeasons);

    // Get team history
    const teams = (entrantsDriversData as any[])
      .filter((e: any) => e.driverId === driverId && e.testDriver === false)
      .map((e: any) => ({
        year: e.year,
        constructorId: e.constructorId,
        entrantId: e.entrantId
      }))
      .sort((a, b) => b.year - a.year);

    setTeamHistory(teams);

    // Calculate career totals
    const career: CareerStats = {
      totalSeasons: driverSeasons.length,
      totalRaceStarts: driverSeasons.reduce((sum, s) => sum + s.totalRaceStarts, 0),
      totalWins: driverSeasons.reduce((sum, s) => sum + s.totalRaceWins, 0),
      totalPodiums: driverSeasons.reduce((sum, s) => sum + s.totalPodiums, 0),
      totalPoles: driverSeasons.reduce((sum, s) => sum + s.totalPolePositions, 0),
      totalPoints: driverSeasons.reduce((sum, s) => sum + s.totalPoints, 0),
      championships: driverSeasons.filter(s => s.positionNumber === 1).length,
      bestFinish: driverSeasons.length > 0 
        ? Math.min(...driverSeasons.map(s => s.positionNumber || Infinity))
        : null
    };

    setCareerStats(career);
    setLoading(false);
  }, [driverId]);

  const formatName = (id: string) => {
    return id.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getDriverInitials = (id: string): string => {
    const parts = id.split('-');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  };

  const getDriverNumber = (): string | null => {
    // Try to get driver number from 2025 data
    const driver2025 = (drivers2025Data as any[]).find(
      (d: any) => d.full_name?.toLowerCase().replace(/\s+/g, '-') === driverId
    );
    return driver2025?.driver_number?.toString() || null;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-200">Loading driver information...</div>
      </div>
    );
  }

  if (seasonStats.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-200">Driver not found</div>
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
          {/* Driver Avatar */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD37B] to-[#FFC857] flex items-center justify-center shadow-lg">
              <span className="text-5xl font-black text-gray-900">
                {getDriverInitials(driverId)}
              </span>
            </div>
            {getDriverNumber() && (
              <div className="absolute -bottom-2 -right-2 bg-slate-700 border-4 border-slate-800 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-lg font-bold text-[#FFD37B]">{getDriverNumber()}</span>
              </div>
            )}
          </div>

          {/* Driver Name and Title */}
          <div>
            <h1 className="text-5xl font-black uppercase text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
              {formatName(driverId)}
            </h1>
            
            {careerStats && careerStats.championships > 0 && (
              <p className="text-2xl text-gray-300 mt-2">
                {careerStats.championships}x World Champion
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Career Stats Grid */}
      {careerStats && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Career Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Seasons</div>
              <div className="text-3xl font-bold text-[#FFD37B]">{careerStats.totalSeasons}</div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Races</div>
              <div className="text-3xl font-bold text-[#FFD37B]">{careerStats.totalRaceStarts}</div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Wins</div>
              <div className="text-3xl font-bold text-[#FFD37B]">{careerStats.totalWins}</div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Podiums</div>
              <div className="text-3xl font-bold text-[#FFD37B]">{careerStats.totalPodiums}</div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Poles</div>
              <div className="text-3xl font-bold text-[#FFD37B]">{careerStats.totalPoles}</div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Points</div>
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
                <th className="px-4 py-3">Team</th>
                <th className="px-4 py-3 text-center">Position</th>
                <th className="px-4 py-3 text-center">Races</th>
                <th className="px-4 py-3 text-center">Wins</th>
                <th className="px-4 py-3 text-center">Podiums</th>
                <th className="px-4 py-3 text-center">Poles</th>
                <th className="px-4 py-3 text-center">Points</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              {seasonStats.map((season, idx) => {
                const teamEntry = teamHistory.find(t => t.year === season.year);
                return (
                  <tr 
                    key={season.year}
                    className={`border-t border-slate-600 hover:bg-slate-600 transition-colors ${
                      season.positionNumber === 1 ? 'bg-yellow-900/20' : ''
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold">{season.year}</td>
                    <td className="px-4 py-3">
                      {teamEntry ? formatName(teamEntry.constructorId) : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-center font-bold">
                      {season.positionNumber || season.positionText || 'N/A'}
                      {season.positionNumber === 1 && ' 🏆'}
                    </td>
                    <td className="px-4 py-3 text-center">{season.totalRaceStarts}</td>
                    <td className="px-4 py-3 text-center">{season.totalRaceWins}</td>
                    <td className="px-4 py-3 text-center">{season.totalPodiums}</td>
                    <td className="px-4 py-3 text-center">{season.totalPolePositions}</td>
                    <td className="px-4 py-3 text-center">{season.totalPoints.toFixed(0)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Team History */}
      <section>
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Team History</h2>
        <div className="flex flex-wrap gap-3">
          {Array.from(new Set(teamHistory.map(t => t.constructorId)))
            .map(constructorId => {
              const years = teamHistory
                .filter(t => t.constructorId === constructorId)
                .map(t => t.year)
                .sort((a, b) => a - b);
              
              return (
                <div key={constructorId} className="bg-slate-700 px-4 py-2 rounded-lg">
                  <div className="font-bold text-[#FFD37B]">{formatName(constructorId)}</div>
                  <div className="text-sm text-gray-400">
                    {years.length > 1 
                      ? `${years[0]} - ${years[years.length - 1]}`
                      : years[0]
                    }
                  </div>
                </div>
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
