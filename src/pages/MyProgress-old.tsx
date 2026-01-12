import { useState, useMemo, useEffect } from 'react';
import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';
import seasons2023 from '../data/seasons-2023.json';
import seasons2024 from '../data/seasons-2024.json';
import raceResults2025 from '../data/race-results-2025.json';
import finalStandings2025 from '../data/final-standings-2025.json';
import drivers2025 from '../data/drivers-2025.json';

interface Race {
  year: number;
  session_key: number;
  session_name: string;
  country_name: string;
  circuit_short_name: string;
  location: string;
  date_start: string;
  date_end: string;
}

interface RaceResult {
  date: string;
  session_key: number;
  meeting_key: number;
  driver_number: number;
  position: number;
  session_type: string;
}

interface DriverStanding {
  driver_number: number;
  driver_name: string;
  team: string;
  points: number;
  position: number;
}

interface Driver {
  driver_number: number;
  full_name: string;
  team_name: string;
  country_code: string;
}

// Points system for 2023-2025
const POINTS_SYSTEM = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

export default function MyProgress() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [selectedRaceIndex, setSelectedRaceIndex] = useState<number>(0);
  const [showDriverStandings, setShowDriverStandings] = useState(true);

  // Get races for selected season
  const races = useMemo(() => {
    const raceData = selectedYear === 2023 ? seasons2023 : seasons2024;
    return (raceData as Race[]).sort((a, b) => 
      new Date(a.date_start).getTime() - new Date(b.date_start).getTime()
    );
  }, [selectedYear]);

  // Calculate standings up to selected race
  const standings = useMemo(() => {
    const driverPoints = new Map<number, number>();
    const driverInfo = new Map<number, { name: string; team: string }>();

    // For 2025, we have actual race results
    if (selectedYear === 2025) {
      // Initialize driver info from 2025 data
      (drivers2025 as Driver[]).forEach(driver => {
        driverInfo.set(driver.driver_number, {
          name: driver.full_name,
          team: driver.team_name
        });
      });

      // Calculate points from race results up to selected race
      const racesToInclude = races.slice(0, selectedRaceIndex + 1);
      
      racesToInclude.forEach(race => {
        const raceFinishers = (raceResults2025 as RaceResult[])
          .filter(r => r.session_key === race.session_key && r.session_type === 'Race')
          .sort((a, b) => a.position - b.position);

        raceFinishers.forEach(result => {
          if (result.position <= 10) {
            const points = POINTS_SYSTEM[result.position - 1] || 0;
            const currentPoints = driverPoints.get(result.driver_number) || 0;
            driverPoints.set(result.driver_number, currentPoints + points);
          }
        });
      });
    } else {
      // For 2023-2024, use simulated data based on historical knowledge
      // This is placeholder - you would need actual historical data
      const simulatedDrivers = selectedYear === 2023 ? [
        { number: 1, name: 'Max Verstappen', team: 'Red Bull Racing' },
        { number: 11, name: 'Sergio Perez', team: 'Red Bull Racing' },
        { number: 44, name: 'Lewis Hamilton', team: 'Mercedes' },
        { number: 63, name: 'George Russell', team: 'Mercedes' },
        { number: 16, name: 'Charles Leclerc', team: 'Ferrari' },
        { number: 55, name: 'Carlos Sainz', team: 'Ferrari' },
        { number: 4, name: 'Lando Norris', team: 'McLaren' },
        { number: 81, name: 'Oscar Piastri', team: 'McLaren' },
        { number: 14, name: 'Fernando Alonso', team: 'Aston Martin' },
        { number: 18, name: 'Lance Stroll', team: 'Aston Martin' },
      ] : [
        { number: 1, name: 'Max Verstappen', team: 'Red Bull Racing' },
        { number: 4, name: 'Lando Norris', team: 'McLaren' },
        { number: 81, name: 'Oscar Piastri', team: 'McLaren' },
        { number: 16, name: 'Charles Leclerc', team: 'Ferrari' },
        { number: 55, name: 'Carlos Sainz', team: 'Ferrari' },
        { number: 63, name: 'George Russell', team: 'Mercedes' },
        { number: 44, name: 'Lewis Hamilton', team: 'Mercedes' },
        { number: 11, name: 'Sergio Perez', team: 'Red Bull Racing' },
        { number: 14, name: 'Fernando Alonso', team: 'Aston Martin' },
        { number: 18, name: 'Lance Stroll', team: 'Aston Martin' },
      ];

      simulatedDrivers.forEach(driver => {
        driverInfo.set(driver.number, { name: driver.name, team: driver.team });
        // Simulate decreasing points for demonstration
        const basePoints = Math.max(0, 500 - (simulatedDrivers.indexOf(driver) * 40));
        const raceMultiplier = (selectedRaceIndex + 1) / races.length;
        driverPoints.set(driver.number, Math.floor(basePoints * raceMultiplier));
      });
    }

    // Convert to array and sort
    const standingsArray: DriverStanding[] = Array.from(driverPoints.entries())
      .map(([driver_number, points]) => {
        const info = driverInfo.get(driver_number);
        return {
          driver_number,
          driver_name: info?.name || `Driver ${driver_number}`,
          team: info?.team || 'Unknown Team',
          points,
          position: 0
        };
      })
      .sort((a, b) => b.points - a.points)
      .map((standing, index) => ({
        ...standing,
        position: index + 1
      }));

    return standingsArray;
  }, [selectedYear, selectedRaceIndex, races]);

  // Calculate constructor standings
  const constructorStandings = useMemo(() => {
    const teamPoints = new Map<string, number>();

    standings.forEach(driver => {
      const current = teamPoints.get(driver.team) || 0;
      teamPoints.set(driver.team, current + driver.points);
    });

    return Array.from(teamPoints.entries())
      .map(([team, points]) => ({ team, points }))
      .sort((a, b) => b.points - a.points)
      .map((standing, index) => ({
        ...standing,
        position: index + 1
      }));
  }, [standings]);

  const currentRace = races[selectedRaceIndex];

  const handlePreviousRace = () => {
    setSelectedRaceIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextRace = () => {
    setSelectedRaceIndex(prev => Math.min(races.length - 1, prev + 1));
  };

  const getPositionChange = (currentPos: number, driver_number: number) => {
    if (selectedRaceIndex === 0) return 0;
    
    // This would require calculating previous standings
    // For now, return 0 as a placeholder
    return 0;
  };

  return (
    <div>
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">Learning</h2>
        <h1 className="mt-1 text-3xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Historical Season Tracker
        </h1>
      </header>

      {/* Season Selector */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4 text-foreground">Select Season</h3>
        <div className="flex gap-4">
          {[2023, 2024].map(year => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year);
                setSelectedRaceIndex(0);
              }}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                selectedYear === year
                  ? 'bg-gradient-to-r from-[#FFD37B] to-[#FFC857] text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Race Navigator */}
      <div className="mb-8 bg-gray-900 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePreviousRace}
            disabled={selectedRaceIndex === 0}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
          >
            ← Previous
          </button>
          
          <div className="flex-1 mx-6">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">
                Race {selectedRaceIndex + 1} of {races.length}
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
                {currentRace?.country_name}
              </h2>
              <div className="text-sm text-gray-400 mt-1">
                {currentRace?.circuit_short_name} • {new Date(currentRace?.date_start).toLocaleDateString()}
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-4 bg-gray-800 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FFD37B] to-[#FFC857] transition-all duration-300"
                style={{ width: `${((selectedRaceIndex + 1) / races.length) * 100}%` }}
              />
            </div>
          </div>

          <button
            onClick={handleNextRace}
            disabled={selectedRaceIndex === races.length - 1}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
          >
            Next →
          </button>
        </div>

        {/* Race selector dropdown */}
        <div className="mt-4">
          <select
            value={selectedRaceIndex}
            onChange={(e) => setSelectedRaceIndex(Number(e.target.value))}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-[#FFD37B] focus:outline-none"
          >
            {races.map((race, index) => (
              <option key={race.session_key} value={index}>
                Round {index + 1}: {race.country_name} - {race.circuit_short_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Standings Toggle */}
      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setShowDriverStandings(true)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            showDriverStandings
              ? 'bg-gradient-to-r from-[#FFD37B] to-[#FFC857] text-black'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Driver Standings
        </button>
        <button
          onClick={() => setShowDriverStandings(false)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            !showDriverStandings
              ? 'bg-gradient-to-r from-[#FFD37B] to-[#FFC857] text-black'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Constructor Standings
        </button>
      </div>

      {/* Standings Display */}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">Pos</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">
                  {showDriverStandings ? 'Driver' : 'Constructor'}
                </th>
                {showDriverStandings && (
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-300">Team</th>
                )}
                <th className="px-6 py-4 text-right text-sm font-bold text-gray-300">Points</th>
              </tr>
            </thead>
            <tbody>
              {showDriverStandings ? (
                standings.map((driver, index) => (
                  <tr
                    key={driver.driver_number}
                    className={`border-b border-gray-800 hover:bg-gray-800 transition-colors ${
                      index < 3 ? 'bg-gray-800/50' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${index < 3 ? 'text-[#FFD37B]' : 'text-gray-300'}`}>
                          {driver.position}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-white">{driver.driver_name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-400">{driver.team}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-bold text-white">{driver.points}</span>
                    </td>
                  </tr>
                ))
              ) : (
                constructorStandings.map((constructor, index) => (
                  <tr
                    key={constructor.team}
                    className={`border-b border-gray-800 hover:bg-gray-800 transition-colors ${
                      index < 3 ? 'bg-gray-800/50' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className={`font-bold ${index < 3 ? 'text-[#FFD37B]' : 'text-gray-300'}`}>
                        {constructor.position}
                      </span>
                    </td>
                    <td className="px-6 py-4" colSpan={2}>
                      <div className="font-semibold text-white">{constructor.team}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-bold text-white">{constructor.points}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Season Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm text-gray-400 mb-1">Championship Leader</div>
          <div className="text-xl font-bold text-white">
            {standings[0]?.driver_name || 'N/A'}
          </div>
          <div className="text-sm text-[#FFD37B] mt-1">{standings[0]?.points || 0} points</div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm text-gray-400 mb-1">Constructor Leader</div>
          <div className="text-xl font-bold text-white">
            {constructorStandings[0]?.team || 'N/A'}
          </div>
          <div className="text-sm text-[#FFD37B] mt-1">{constructorStandings[0]?.points || 0} points</div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm text-gray-400 mb-1">Races Completed</div>
          <div className="text-xl font-bold text-white">
            {selectedRaceIndex + 1} / {races.length}
          </div>
          <div className="text-sm text-gray-400 mt-1">
            {races.length - selectedRaceIndex - 1} remaining
          </div>
        </div>
      </div>

      <div className="mt-8">
        <SectionNavButtons />
      </div>
    </div>
  );
}
