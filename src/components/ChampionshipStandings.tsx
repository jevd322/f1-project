import { useEffect, useState } from 'react';
import { type Driver } from '../services/openf1';
import raceResultsData from '../data/race-results-2025.json';
import driversData from '../data/drivers-2025.json';
import officialStandingsData from '../data/final-standings-2025.json';

interface DriverStanding {
  driver: Driver;
  points: number;
  wins: number;
  podiums: number;
}

interface TeamStanding {
  team: string;
  teamColour: string;
  points: number;
  drivers: string[];
}

interface RaceResult {
  date: string;
  driver_number: number;
  meeting_key: number;
  position: number;
  session_key: number;
  session_type: 'Race' | 'Sprint';
}

// F1 Points System (2025)
const RACE_POINTS_MAP: Record<number, number> = {
  1: 25, 2: 18, 3: 15, 4: 12, 5: 10,
  6: 8, 7: 6, 8: 4, 9: 2, 10: 1
};

const SPRINT_POINTS_MAP: Record<number, number> = {
  1: 8, 2: 7, 3: 6, 4: 5, 5: 4,
  6: 3, 7: 2, 8: 1
};

export default function ChampionshipStandings() {
  const [driverStandings, setDriverStandings] = useState<DriverStanding[]>([]);
  const [teamStandings, setTeamStandings] = useState<TeamStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'drivers' | 'constructors'>('drivers');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    function calculateStandings() {
      try {
        // Use official standings and race results for wins/podiums
        const allDrivers = driversData as unknown as Driver[];
        const allResults = raceResultsData as unknown as RaceResult[];
        const officialStandings = officialStandingsData as unknown as Array<{position: number; driver_number: number; points: number}>;

        console.log('Drivers loaded:', allDrivers.length);
        console.log('Results loaded:', allResults.length);
        console.log('Official standings loaded:', officialStandings.length);

        // Calculate wins and podiums from race results
        const driverStatsMap = new Map<number, { wins: number; podiums: number }>();
        
        allResults.forEach(result => {
          // Only count wins and podiums for main races, not sprints
          if (result.session_type === 'Race') {
            const existing = driverStatsMap.get(result.driver_number) || { wins: 0, podiums: 0 };
            
            driverStatsMap.set(result.driver_number, {
              wins: existing.wins + (result.position === 1 ? 1 : 0),
              podiums: existing.podiums + (result.position <= 3 ? 1 : 0)
            });
          }
        });

        // Create driver standings using official points
        const standings: DriverStanding[] = officialStandings
          .map(official => {
            const driver = allDrivers.find(d => d.driver_number === official.driver_number);
            const stats = driverStatsMap.get(official.driver_number) || { wins: 0, podiums: 0 };
            
            return driver ? {
              driver,
              points: official.points,
              wins: stats.wins,
              podiums: stats.podiums
            } : null;
          })
          .filter((s): s is DriverStanding => s !== null);

        setDriverStandings(standings);

        // Calculate constructor standings
        const teamPointsMap = new Map<string, { points: number; drivers: Set<string>; colour: string }>();
        
        standings.forEach(({ driver, points }) => {
          const existing = teamPointsMap.get(driver.team_name) || { 
            points: 0, 
            drivers: new Set(), 
            colour: driver.team_colour 
          };
          
          existing.points += points;
          existing.drivers.add(driver.name_acronym);
          teamPointsMap.set(driver.team_name, existing);
        });

        const constructorStandings: TeamStanding[] = Array.from(teamPointsMap.entries())
          .map(([team, data]) => ({
            team,
            teamColour: data.colour,
            points: data.points,
            drivers: Array.from(data.drivers)
          }))
          .sort((a, b) => b.points - a.points);

        setTeamStandings(constructorStandings);
      } catch (error) {
        console.error('Error calculating standings:', error);
      } finally {
        setLoading(false);
      }
    }

    calculateStandings();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-xl font-semibold text-gray-200 text-foreground">Loading championship standings...</div>
      </div>
    );
  }

  return (
    <div className="p-4 pl-0 pt-0 max-w-4xl mr-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-200 text-foreground">2025 Championship Standings</h1>
      
      {/* View Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('drivers')}
          className={`px-4 py-2 rounded font-semibold transition-colors ${
            view === 'drivers'
              ? 'bg-gradient-to-r from-[#FFD37B] to-[#FFC857] text-black'
              : 'bg-card text-muted-foreground border border-border hover:bg-accent hover:text-foreground'
          }`}
        >
          Drivers
        </button>
        <button
          onClick={() => setView('constructors')}
          className={`px-4 py-2 rounded font-semibold transition-colors ${
            view === 'constructors'
              ? 'bg-gradient-to-r from-[#FFD37B] to-[#FFC857] text-black'
              : 'bg-card text-muted-foreground border border-border hover:bg-accent hover:text-foreground'
          }`}
        >
          Constructors
        </button>
      </div>

      {/* Driver Standings */}
      {view === 'drivers' && (
        <div>
          <div className={`space-y-2 overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[2000px]' : 'max-h-[400px]'}`}>
            {driverStandings.map((standing, index) => (
              <div
                key={standing.driver.driver_number}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="text-2xl font-bold text-muted-foreground w-8">
                  {index + 1}
                </div>
                <div
                  className="w-1 h-12 rounded"
                  style={{ backgroundColor: `#${standing.driver.team_colour}` }}
                />
                <div className="flex-1">
                  <div className="font-semibold text-card-foreground">
                    {standing.driver.full_name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {standing.driver.team_name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">
                    {standing.points}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {standing.wins} {standing.wins === 1 ? 'win' : 'wins'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 w-full px-4 py-2 bg-card text-foreground border border-border rounded hover:bg-accent transition-colors font-semibold"
          >
            {expanded ? 'Show Less ▲' : 'Show More ▼'}
          </button>
        </div>
      )}

      {/* Constructor Standings */}
      {view === 'constructors' && (
        <div>
          <div className={`space-y-2 overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[2000px]' : 'max-h-[400px]'}`}>
            {teamStandings.map((standing, index) => (
              <div
                key={standing.team}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="text-2xl font-bold text-muted-foreground w-8">
                  {index + 1}
                </div>
                <div
                  className="w-1 h-12 rounded"
                  style={{ backgroundColor: `#${standing.teamColour}` }}
                />
                <div className="flex-1">
                  <div className="font-semibold text-card-foreground">
                    {standing.team}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {standing.drivers.join(', ')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">
                    {standing.points}
                  </div>
                  <div className="text-xs text-muted-foreground">points</div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 w-full px-4 py-2 bg-card text-foreground border border-border rounded hover:bg-accent transition-colors font-semibold"
          >
            {expanded ? 'Show Less ▲' : 'Show More ▼'}
          </button>
        </div>
      )}
    </div>
  );
}
