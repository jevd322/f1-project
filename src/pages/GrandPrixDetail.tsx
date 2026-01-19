import { useState, useEffect } from 'react';
import SectionNavButtons from '../components/SectionNavButtons';
import racesData from '../data/f1db-races.json';
import raceResultsData from '../data/f1db-archive/f1db-races-race-results.json';
import qualifyingResultsData from '../data/f1db-archive/f1db-races-qualifying-results.json';
import sprintResultsData from '../data/f1db-archive/f1db-races-sprint-race-results.json';

interface GrandPrixDetailProps {
  year?: number;
  round?: number;
}

interface Race {
  id: number;
  year: number;
  round: number;
  date: string;
  grandPrixId: string;
  officialName: string;
  circuitId: string;
  courseLength: number;
  laps: number;
  distance: number;
}

interface RaceResult {
  raceId: number;
  year: number;
  round: number;
  positionNumber: number | null;
  positionText: string;
  driverNumber: string;
  driverId: string;
  constructorId: string;
  time: string | null;
  timeMillis: number | null;
  points: number;
  laps: number | null;
}

interface QualifyingResult {
  raceId: number;
  year: number;
  round: number;
  positionNumber: number | null;
  positionText: string;
  driverNumber: string;
  driverId: string;
  constructorId: string;
  q1: string | null;
  q2: string | null;
  q3: string | null;
}

interface SprintResult {
  raceId: number;
  year: number;
  round: number;
  positionNumber: number | null;
  positionText: string;
  driverNumber: string;
  driverId: string;
  constructorId: string;
  time: string | null;
  timeMillis: number | null;
  points: number;
  laps: number | null;
}

interface GrandPrixData {
  name: string;
  round: number;
  season: number;
  circuit: {
    name: string;
    location: string;
    length: string;
    laps: number;
    raceDistance: string;
  };
  date: {
    weekend: string;
    race: string;
  };
  weather: {
    race: string;
    track: string;
  };
}

export default function GrandPrixDetail({ year = 2024, round = 8 }: GrandPrixDetailProps) {
  const [activeTab, setActiveTab] = useState<'race' | 'qualifying' | 'sprint'>('race');
  const [grandPrix, setGrandPrix] = useState<GrandPrixData | null>(null);
  const [raceResults, setRaceResults] = useState<RaceResult[]>([]);
  const [qualifyingResults, setQualifyingResults] = useState<QualifyingResult[]>([]);
  const [sprintResults, setSprintResults] = useState<SprintResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the race in the data
    const race = (racesData as Race[]).find(r => r.year === year && r.round === round);
    
    if (race) {
      // Format the race data
      const formattedGrandPrix = {
        name: race.officialName,
        round: race.round,
        season: race.year,
        circuit: {
          name: race.circuitId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          location: race.circuitId,
          length: `${race.courseLength} km`,
          laps: race.laps,
          raceDistance: `${race.distance.toFixed(3)} km`
        },
        date: {
          weekend: race.date,
          race: race.date
        },
        weather: {
          race: "N/A",
          track: "N/A"
        }
      };
      setGrandPrix(formattedGrandPrix);

      // Load race results
      const results = (raceResultsData as RaceResult[])
        .filter((r) => r.raceId === race.id)
        .sort((a, b) => (a.positionNumber || 999) - (b.positionNumber || 999));
      setRaceResults(results);

      // Load qualifying results
      const qualResults = (qualifyingResultsData as QualifyingResult[])
        .filter((q) => q.raceId === race.id)
        .sort((a, b) => (a.positionNumber || 999) - (b.positionNumber || 999));
      setQualifyingResults(qualResults);

      // Load sprint results if available
      const sprintRes = (sprintResultsData as SprintResult[])
        .filter((s) => s.raceId === race.id)
        .sort((a, b) => (a.positionNumber || 999) - (b.positionNumber || 999));
      setSprintResults(sprintRes);
    }
    
    setLoading(false);
  }, [year, round]);

  return (
    <div>
      {loading || !grandPrix ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Loading Grand Prix details...</p>
        </div>
      ) : (
        <>
          {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-black text-gray-400 uppercase tracking-wider">
            Round {grandPrix.round}
          </span>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-sm text-gray-400">{grandPrix.season}</span>
        </div>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          {grandPrix.name}
        </h1>
        <p className="text-gray-400 text-lg mt-2">{grandPrix.circuit.location}</p>
      </header>

      {/* Circuit Information */}
      <section className="mb-12">
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Circuit Information</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Circuit</p>
              <p className="text-lg font-bold text-white">{grandPrix.circuit.name}</p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Circuit Length</p>
              <p className="text-lg font-bold text-white">{grandPrix.circuit.length}</p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Race Laps</p>
              <p className="text-lg font-bold text-white">{grandPrix.circuit.laps}</p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Total Distance</p>
              <p className="text-lg font-bold text-white">{grandPrix.circuit.raceDistance}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Weekend</p>
              <p className="text-lg font-bold text-white">{grandPrix.date.weekend}</p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Weather</p>
              <p className="text-lg font-bold text-white">{grandPrix.weather.race}</p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Track Condition</p>
              <p className="text-lg font-bold text-white">{grandPrix.weather.track}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="mb-8">
        <div className="flex gap-2 border-b border-white/10">
          <button
            onClick={() => setActiveTab('race')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'race'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Race Results
          </button>
          <button
            onClick={() => setActiveTab('qualifying')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'qualifying'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Qualifying
          </button>
          <button
            onClick={() => setActiveTab('sprint')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'sprint'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Sprint
          </button>
        </div>
      </section>

      {/* Race Results Tab */}
      {activeTab === 'race' && (
        <section className="mb-12">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Race Results</h2>
            
            {/* Winner Highlight */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-transparent rounded-lg p-6 mb-6 border-l-4 border-yellow-400">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-yellow-400">🏆</div>
                <div>
                  <p className="text-sm text-gray-400">Race Winner</p>
                  <p className="text-3xl font-black text-white">
                    {raceResults[0] ? raceResults[0].driverId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'N/A'}
                  </p>
                  <p className="text-lg text-gray-300">
                    {raceResults[0] ? raceResults[0].constructorId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'N/A'}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm text-gray-400">Race Time</p>
                  <p className="text-xl font-bold text-white">{raceResults[0]?.time || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Results Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Pos</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Driver</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Team</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Laps</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Time/Retired</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {raceResults.length > 0 ? raceResults.slice(0, 10).map((result) => (
                    <tr key={result.driverNumber} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-bold text-white">{result.positionText}</td>
                      <td className="py-3 px-4 text-white">{result.driverId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                      <td className="py-3 px-4 text-gray-300">{result.constructorId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                      <td className="py-3 px-4 text-gray-300">{result.laps || 'N/A'}</td>
                      <td className="py-3 px-4 text-gray-300">{result.time || 'N/A'}</td>
                      <td className="py-3 px-4 font-bold text-green-400">{result.points}</td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-400">
                        No race results available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Qualifying Results Tab */}
      {activeTab === 'qualifying' && (
        <section className="mb-12">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Qualifying Results</h2>
            
            {/* Pole Position Highlight */}
            <div className="bg-gradient-to-r from-purple-500/20 to-transparent rounded-lg p-6 mb-6 border-l-4 border-purple-400">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-purple-400">🥇</div>
                <div>
                  <p className="text-sm text-gray-400">Pole Position</p>
                  <p className="text-3xl font-black text-white">
                    {qualifyingResults[0] ? qualifyingResults[0].driverId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'N/A'}
                  </p>
                  <p className="text-lg text-gray-300">
                    {qualifyingResults[0] ? qualifyingResults[0].constructorId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'N/A'}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm text-gray-400">Lap Time</p>
                  <p className="text-xl font-bold text-white">{qualifyingResults[0]?.q3 || qualifyingResults[0]?.q2 || qualifyingResults[0]?.q1 || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Qualifying Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Pos</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Driver</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Team</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Q1</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Q2</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Q3</th>
                  </tr>
                </thead>
                <tbody>
                  {qualifyingResults.length > 0 ? qualifyingResults.slice(0, 10).map((result) => (
                    <tr key={result.driverNumber} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-bold text-white">{result.positionText}</td>
                      <td className="py-3 px-4 text-white">{result.driverId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                      <td className="py-3 px-4 text-gray-300">{result.constructorId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                      <td className="py-3 px-4 text-gray-300">{result.q1 || '-'}</td>
                      <td className="py-3 px-4 text-gray-300">{result.q2 || '-'}</td>
                      <td className="py-3 px-4 font-bold text-purple-400">{result.q3 || '-'}</td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-400">
                        No qualifying results available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Sprint Results Tab */}
      {activeTab === 'sprint' && (
        <section className="mb-12">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Sprint Results</h2>
            
            {/* Check if sprint weekend */}
            {sprintResults.length > 0 ? (
              <>
                <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-5 mb-6">
                  <p className="text-gray-300">
                    <span className="font-bold text-blue-400">Sprint Weekend:</span> This Grand Prix featured a sprint race on Saturday.
                  </p>
                </div>

                {/* Sprint Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Pos</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Driver</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Team</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Laps</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Time</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sprintResults.slice(0, 10).map((result) => (
                        <tr key={result.driverNumber} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-3 px-4 font-bold text-white">{result.positionText}</td>
                          <td className="py-3 px-4 text-white">{result.driverId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                          <td className="py-3 px-4 text-gray-300">{result.constructorId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                          <td className="py-3 px-4 text-gray-300">{result.laps || 'N/A'}</td>
                          <td className="py-3 px-4 text-gray-300">{result.time || 'N/A'}</td>
                          <td className="py-3 px-4 font-bold text-green-400">{result.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">This was not a sprint weekend.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Race Statistics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Race Statistics</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-yellow-400 mb-3">Fastest Lap</h3>
            <p className="text-white font-bold text-xl mb-1">Driver Name</p>
            <p className="text-gray-300 text-sm mb-2">Lap 45</p>
            <p className="text-yellow-400 font-bold text-2xl">1:22.987</p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-blue-400 mb-3">Lead Changes</h3>
            <p className="text-white font-bold text-4xl">3</p>
            <p className="text-gray-400 text-sm mt-2">Between 2 drivers</p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-400 mb-3">Retirements</h3>
            <p className="text-white font-bold text-4xl">2</p>
            <p className="text-gray-400 text-sm mt-2">Mechanical issues</p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-green-400 mb-3">Safety Cars</h3>
            <p className="text-white font-bold text-4xl">1</p>
            <p className="text-gray-400 text-sm mt-2">Lap 32-36</p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-purple-400 mb-3">DRS Overtakes</h3>
            <p className="text-white font-bold text-4xl">15</p>
            <p className="text-gray-400 text-sm mt-2">Total during race</p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-orange-400 mb-3">Pit Stops</h3>
            <p className="text-white font-bold text-4xl">38</p>
            <p className="text-gray-400 text-sm mt-2">Total stops</p>
          </div>
        </div>
      </section>

      {/* Race Highlights/Key Moments */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Key Moments</h2>
        
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-5 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <div className="text-sm font-bold text-green-400 min-w-[60px]">LAP 1</div>
              <div>
                <p className="text-white font-semibold mb-1">Great Start by Driver B</p>
                <p className="text-sm text-gray-400">Driver B gains 3 positions off the line, moving from P5 to P2 through Turn 1.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border-l-4 border-yellow-500">
            <div className="flex items-start gap-3">
              <div className="text-sm font-bold text-yellow-400 min-w-[60px]">LAP 18</div>
              <div>
                <p className="text-white font-semibold mb-1">First Pit Stop Window Opens</p>
                <p className="text-sm text-gray-400">Leader comes in for fresh tires, several teams follow with undercuts.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <div className="text-sm font-bold text-red-400 min-w-[60px]">LAP 32</div>
              <div>
                <p className="text-white font-semibold mb-1">Safety Car Deployed</p>
                <p className="text-sm text-gray-400">Collision at Turn 5 brings out safety car, bunching the field and shaking up strategy.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border-l-4 border-blue-500">
            <div className="flex items-start gap-3">
              <div className="text-sm font-bold text-blue-400 min-w-[60px]">LAP 52</div>
              <div>
                <p className="text-white font-semibold mb-1">Battle for P3</p>
                <p className="text-sm text-gray-400">Intense wheel-to-wheel action as Driver C defends against Driver D for final podium spot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver of the Day */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-purple-500/10 rounded-lg p-6 border border-yellow-500/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">⭐</div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Driver of the Day</p>
              <p className="text-3xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text">
                Driver Name
              </p>
              <p className="text-lg text-gray-300">Team Name</p>
            </div>
          </div>
          <p className="text-gray-300">
            Outstanding performance moving from P15 on the grid to finish P4, including several brilliant overtakes and consistent pace throughout the race.
          </p>
        </div>
      </section>

      <SectionNavButtons />
        </>
      )}
    </div>
  );
}
