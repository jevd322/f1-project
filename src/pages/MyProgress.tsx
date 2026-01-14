import { useState, useMemo, useEffect, useRef } from 'react';
import * as flags from 'country-flag-icons/react/3x2';

// F1DB imports
import f1dbRaces from '../data/f1db-races.json';
import f1dbDriverStandings from '../data/f1db-seasons-driver-standings.json';
import f1dbSeasons from '../data/f1db-seasons.json';
import f1dbRaceResults from '../data/f1db-archive/f1db-races-race-results.json';
import f1dbSprintResults from '../data/f1db-archive/f1db-races-sprint-race-results.json';

// Type definitions for F1DB data
interface F1DBRace {
  id: number;
  year: number;
  round: number;
  date: string;
  grandPrixId: string;
  officialName: string;
  circuitId: string;
}

interface F1DBDriverStanding {
  year: number;
  positionDisplayOrder: number;
  positionNumber: number | null;
  positionText: string;
  driverId: string;
  points: number;
}

interface Season {
  year: number;
}

// Helper function to format driver ID to readable name
const formatDriverName = (driverId: string): string => {
  return driverId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Helper function to get flag component
const getFlagComponent = (countryCode: string) => {
  const FlagComponent = (flags as any)[countryCode];
  return FlagComponent;
};

// Mapping of Grand Prix ID to country code
const gpToCountry: Record<string, string> = {
  'great-britain': 'GB',
  'monaco': 'MC',
  'indianapolis': 'US',
  'switzerland': 'CH',
  'belgium': 'BE',
  'france': 'FR',
  'italy': 'IT',
  'spain': 'ES',
  'germany': 'DE',
  'netherlands': 'NL',
  'austria': 'AT',
  'portugal': 'PT',
  'japan': 'JP',
  'australia': 'AU',
  'brazil': 'BR',
  'sao-paulo': 'BR',
  'argentina': 'AR',
  'canada': 'CA',
  'mexico': 'MX',
  'usa': 'US',
  'united-states': 'US',
  'south-africa': 'ZA',
  'sweden': 'SE',
  'morocco': 'MA',
  'san-marino': 'IT',
  'europe': 'DE',
  'pacific': 'JP',
  'hungary': 'HU',
  'luxembourg': 'LU',
  'malaysia': 'MY',
  'bahrain': 'BH',
  'china': 'CN',
  'singapore': 'SG',
  'turkey': 'TR',
  'india': 'IN',
  'russia': 'RU',
  'azerbaijan': 'AZ',
  'abu-dhabi': 'AE',
  'uae': 'AE',
  'saudi-arabia': 'SA',
  'qatar': 'QA',
  'miami': 'US',
  'las-vegas': 'US',
  'emilia-romagna': 'IT',
  'styria': 'AT',
  'tuscany': 'IT',
  'sakhir': 'BH',
  'eifel': 'DE',
  '70th-anniversary': 'GB',
  'korean': 'KR',
  'korea': 'KR',
};

export default function MyProgress() {
  // Get available years from f1db (1950-2025)
  const availableYears = (f1dbSeasons as Season[])
    .map(s => s.year)
    .sort((a, b) => b - a); // Most recent first

  const [selectedYear, setSelectedYear] = useState<number>(availableYears[0]);
  const [selectedRaceIndex, setSelectedRaceIndex] = useState<number>(0);
  const [showDriverStandings, setShowDriverStandings] = useState(true);
  const tableScrollRef = useRef<HTMLDivElement>(null);
  const topScrollRef = useRef<HTMLDivElement>(null);

  // Get races for selected season
  const races = useMemo(() => {
    return (f1dbRaces as F1DBRace[])
      .filter(race => race.year === selectedYear)
      .sort((a, b) => a.round - b.round);
  }, [selectedYear]);

  // Scroll to selected race
  useEffect(() => {
    if (tableScrollRef.current) {
      const columnWidth = 100; // Width of each race column
      const containerWidth = tableScrollRef.current.clientWidth;
      // Position the selected race in the center of the viewport
      const scrollPosition = (selectedRaceIndex * columnWidth) - (containerWidth / 2) + (columnWidth / 2);
      
      tableScrollRef.current.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
      
      if (topScrollRef.current) {
        topScrollRef.current.scrollLeft = Math.max(0, scrollPosition);
      }
    }
  }, [selectedRaceIndex]);

  // Get final standings for the year and load actual race results
  const standings = useMemo(() => {
    const yearStandings = (f1dbDriverStandings as F1DBDriverStanding[])
      .filter(s => s.year === selectedYear)
      .sort((a, b) => a.positionDisplayOrder - b.positionDisplayOrder);

    // If no races or no standings data, return empty
    if (races.length === 0 || yearStandings.length === 0) {
      return [];
    }

    // Load actual race results for each driver for ALL races
    return yearStandings.map(standing => {
      const raceResults: Array<{ position: number | string | null; points: number | null }> = [];
      let currentPoints = 0;

      // Loop through ALL races, not just up to selected
      races.forEach((race: any, index: number) => {
        // Only show results for races up to the selected index
        if (index <= selectedRaceIndex) {
          // Find the actual race result for this driver in this race
          const result = (f1dbRaceResults as any[]).find(
            (r: any) => r.raceId === race.id && r.driverId === standing.driverId
          );

          // Find sprint race result if exists
          const sprintResult = (f1dbSprintResults as any[]).find(
            (r: any) => r.raceId === race.id && r.driverId === standing.driverId
          );

          if (result) {
            // Use actual race result data
            const position = result.positionNumber || result.positionText;
            const racePoints = result.points || 0;
            const sprintPoints = sprintResult?.points || 0;
            const totalPoints = racePoints + sprintPoints;
            currentPoints += totalPoints;

            raceResults.push({ position, points: totalPoints });
          } else {
            // Driver didn't participate in this race
            raceResults.push({ position: 'DNS', points: 0 });
          }
        } else {
          // Race hasn't been reached yet - show empty
          raceResults.push({ position: null, points: null });
        }
      });

      return {
        driverId: standing.driverId,
        driverName: formatDriverName(standing.driverId),
        finalPosition: standing.positionDisplayOrder,
        finalPositionText: standing.positionText,
        currentPoints,
        raceResults
      };
    })
    // Sort by current points to show dynamic positions
    .sort((a, b) => {
      if (b.currentPoints !== a.currentPoints) {
        return b.currentPoints - a.currentPoints;
      }
      // Tiebreaker: use final position
      return a.finalPosition - b.finalPosition;
    })
    // Assign current positions
    .map((driver, index) => ({
      ...driver,
      position: index + 1,
      positionText: String(index + 1)
    }));
  }, [selectedYear, selectedRaceIndex, races]);

  // Calculate constructor standings using actual constructor data from race results
  const constructorStandings = useMemo(() => {
    const teamPoints = new Map<string, number>();

    standings.forEach(standing => {
      // Get constructor for each race result
      standing.raceResults.forEach((result, idx) => {
        if (result.position !== null && result.points !== null && idx <= selectedRaceIndex) {
          // Find the race result for this driver in this race
          const race = races[idx];
          if (race) {
            const raceResult = (f1dbRaceResults as any[]).find(
              (r: any) => r.raceId === race.id && r.driverId === standing.driverId
            );
            
            if (raceResult && raceResult.constructorId) {
              const constructorId = raceResult.constructorId;
              const currentPoints = teamPoints.get(constructorId) || 0;
              teamPoints.set(constructorId, currentPoints + (result.points || 0));
            }
          }
        }
      });
    });

    // Format constructor names for display
    const formatConstructorName = (constructorId: string): string => {
      return constructorId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    return Array.from(teamPoints.entries())
      .map(([constructorId, points]) => ({
        team: formatConstructorName(constructorId),
        constructorId,
        points,
        position: 0
      }))
      .sort((a, b) => b.points - a.points)
      .map((standing, index) => ({
        ...standing,
        position: index + 1
      }));
  }, [standings, selectedRaceIndex, races]);

  const currentRace = races[selectedRaceIndex];

  const handlePreviousRace = () => {
    setSelectedRaceIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextRace = () => {
    setSelectedRaceIndex(prev => Math.min(races.length - 1, prev + 1));
  };

  return (
    <div className='w-full'>
    <div className="max-w-6xl my-12 mx-auto">
      <header className="mb-4">
        <h2 className="text-m font-black text-gray-400"></h2>
        <h1 className="mt-1 text-3xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Season Tracker
        </h1>
      </header>

      {/* Season Selector */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">Select Season</h3>
        <div className="">
          <div>
          {/* Dropdown for all seasons */}
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(Number(e.target.value));
              setSelectedRaceIndex(0);
            }}
            className="px-4 py-2 rounded-lg font-bold bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer"
          >
            <optgroup label="All Seasons">
              {availableYears.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </optgroup>
          </select>
          </div>
        </div>
      </div>

      {/* Race Navigator */}
      {races.length > 0 ? (
        <div className="mb-8 min-w-6xl bg-gray-900 rounded-lg p-6">
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
                  Race {selectedRaceIndex + 1} of {races.length} | {`${new Date(currentRace?.date).toLocaleDateString('en-US', { month: 'long' })} ${new Date(currentRace?.date).getDate().toString().padStart(2, '0')}, ${new Date(currentRace?.date).getFullYear()}`}

                </div>
                <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text flex items-center justify-center gap-2">
                  {gpToCountry[currentRace?.grandPrixId] && (() => {
                    const Flag = getFlagComponent(gpToCountry[currentRace?.grandPrixId]);
                    return Flag ? <Flag className="w-8 h-6" /> : null;
                  })()}
                  <span>{currentRace?.officialName}</span>
                </h2>
              </div>
              
              {/* Progress boxes */}
              <div className="mt-4 flex gap-1 justify-center flex-wrap">
                {races.map((race, idx) => (
                  <div
                    key={race.id}
                    onClick={() => setSelectedRaceIndex(idx)}
                    className={`w-8 h-8 rounded cursor-pointer transition-all duration-300 flex items-center justify-center text-xs font-bold ${
                      idx <= selectedRaceIndex
                        ? 'bg-gradient-to-r from-[#FFD37B] to-[#FFC857] text-black'
                        : 'bg-gray-800 hover:bg-gray-700 text-gray-400'
                    }`}
                    title={`Round ${race.round}: ${race.grandPrixId}`}
                  >
                    {idx + 1}
                  </div>
                ))}
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
        </div>
      ) : (
        <div className="mb-8 bg-gray-900 rounded-lg p-6 text-center text-gray-400">
          No race data available for {selectedYear}
        </div>
      )}

      {/* Standings Toggle */}
      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setShowDriverStandings(true)}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            showDriverStandings
              ? 'bg-gradient-to-r from-[#FFD37B] to-[#FFC857] text-black'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Driver Standings
        </button>
        <button
          onClick={() => setShowDriverStandings(false)}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            !showDriverStandings
              ? 'bg-gradient-to-r from-[#FFD37B] to-[#FFC857] text-black'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Constructor Standings
        </button>
      </div>

      {/* Standings Table */}
      {showDriverStandings ? (
        <div className="min-w-6xl bg-gray-900 rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Driver Standings after Race {selectedRaceIndex + 1}
            </h3>
            {/* Top scrollbar */}
            <div ref={topScrollRef} className="overflow-x-auto h-2 mb-2 px-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-button]:w-4 [&::-webkit-scrollbar-button]:bg-gray-700 [&::-webkit-scrollbar-button:horizontal:decrement]:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgNEw2IDhMMTAgMTIiIHN0cm9rZT0iI2FhYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')] [&::-webkit-scrollbar-button:horizontal:increment]:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiA0TDEwIDhMNiAxMiIgc3Ryb2tlPSIjYWFhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] [&::-webkit-scrollbar-button]:bg-center [&::-webkit-scrollbar-button]:bg-no-repeat" 
                 onScroll={(e) => {
                   const target = e.target as HTMLDivElement;
                   const tableContainer = tableScrollRef.current;
                   if (tableContainer) {
                     tableContainer.scrollLeft = target.scrollLeft;
                   }
                 }}>
              <div style={{ height: '1px', width: `${races.length * 100 + 200}px` }}></div>
            </div>
            <div ref={tableScrollRef} className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-button]:w-4 [&::-webkit-scrollbar-button]:bg-gray-700 [&::-webkit-scrollbar-button:horizontal:decrement]:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgNEw2IDhMMTAgMTIiIHN0cm9rZT0iI2FhYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')] [&::-webkit-scrollbar-button:horizontal:increment]:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiA0TDEwIDhMNiAxMiIgc3Ryb2tlPSIjYWFhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] [&::-webkit-scrollbar-button]:bg-center [&::-webkit-scrollbar-button]:bg-no-repeat"
                 onScroll={(e) => {
                   const target = e.target as HTMLDivElement;
                   const topScroll = topScrollRef.current;
                   if (topScroll) {
                     topScroll.scrollLeft = target.scrollLeft;
                   }
                 }}>
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/60">
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-3 m-0 text-gray-400 font-semibold sticky left-0 bg-gray-900 z-10">Pos</th>
                    <th className="py-3 px-3 m-0 text-gray-400 font-semibold sticky left-12 bg-gray-900 z-10 min-w-[150px]">Driver</th>
                    {races.map((race, idx) => {
                      const Flag = gpToCountry[race.grandPrixId] ? getFlagComponent(gpToCountry[race.grandPrixId]) : null;
                      const countryCode = gpToCountry[race.grandPrixId] || '';
                      const isSelected = idx === selectedRaceIndex;
                      return (
                        <th key={race.id} className={`py-3 px-2 text-gray-400 font-semibold text-center w-[100px] min-w-[100px] max-w-[100px] ${isSelected ? 'bg-zinc-700/70' : ''}`}>
                          <div className="text-xs break-words leading-tight">
                            {Flag && (
                              <div className="mb-1 flex justify-center">
                                <Flag className="w-8 h-4" />
                              </div>
                            )}
                            <div className='text-lg font-bold'>
                              {countryCode && ` ${countryCode}`}
                            </div>
                          </div>
                        </th>
                      );
                    })}
                    <th className="py-3 px-3 text-gray-400 font-semibold text-right sticky right-0 bg-gray-900 z-10">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.length > 0 ? standings.map((driver) => (
                    <tr 
                      key={driver.driverId} 
                      className="border-b border-gray-800 transition-colors"
                    >
                      <td className="py-3 px-3 font-bold text-orange-200/90 sticky left-0 bg-gray-900">
                        {driver.positionText}
                      </td>
                      <td className="py-3 px-3 sticky left-12 bg-gray-900">
                        <div className="font-semibold text-xs">{driver.driverName}</div>
                      </td>
                      {driver.raceResults.map((result, idx) => (
                        <td key={idx} className={`py-3 px-2 text-center w-[100px] min-w-[100px] max-w-[100px] ${idx === selectedRaceIndex ? 'bg-gray-700/50' : ''}`}>
                          <div className="flex flex-col gap-2 justify-center items-center">
                            {result.position !== null ? (
                              <>
                                <div className="text-md font-bold text-gray-200">{result.position}</div>
                                {result.points !== null && result.points > 0 && (
                                  <div className="text-xs text-[#FFD37B]">{result.points}</div>
                                )}
                              </>
                            ) : (
                              <div className="text-xs text-gray-600">-</div>
                            )}
                          </div>
                        </td>
                      ))}
                      <td className="py-3 px-3 text-right font-bold text-gray-100 sticky right-0 bg-gray-900">
                        {driver.currentPoints}
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={races.length + 3} className="py-8 text-center text-gray-400">
                        No standings data available for {selectedYear}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-w-6xl bg-gray-900 rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Constructor Standings after Race {selectedRaceIndex + 1}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-gray-400 font-semibold">Pos</th>
                    <th className="py-3 px-4 text-gray-400 font-semibold">Constructor</th>
                    <th className="py-3 px-4 text-gray-400 font-semibold text-right">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {constructorStandings.map((team) => (
                    <tr 
                      key={team.team} 
                      className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-bold text-[#FFD37B]">
                        {team.position}
                      </td>
                      <td className="py-3 px-4 font-semibold capitalize">
                        {team.team}
                      </td>
                      <td className="py-3 px-4 text-right font-bold">
                        {team.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </div>
        </div>
  );
}
