import { useState, useEffect } from 'react';
import { ChevronLeft, Calendar, MapPin, Flag, Trophy, User, Users } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/Accordion';
import driverStandingsData from '../../data/f1db-seasons-driver-standings.json';
import constructorStandingsData from '../../data/f1db-seasons-constructor-standings.json';
import racesData from '../../data/f1db-races.json';
import entrantsDriversData from '../../data/f1db-seasons-entrants-drivers.json';

interface DriverStanding {
  year: number;
  positionNumber: number;
  positionText: string;
  driverId: string;
  points: number;
  constructorId?: string;
}

interface ConstructorStanding {
  year: number;
  positionNumber: number;
  positionText: string;
  constructorId: string;
  points: number;
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

interface Race {
  id: number;
  year: number;
  round: number;
  date: string;
  grandPrixId: string;
  officialName: string;
  circuitId: string;
  laps: number;
  distance: number;
}

interface SeasonDetailProps {
  year: number;
}

interface TeamDrivers {
  teamName: string;
  constructorId: string;
  drivers: string[];
}

export default function SeasonDetail({ year }: SeasonDetailProps) {
  const [selectedYear, setSelectedYear] = useState<number>(year);
  const [driverStandings, setDriverStandings] = useState<DriverStanding[]>([]);
  const [constructorStandings, setConstructorStandings] = useState<ConstructorStanding[]>([]);
  const [races, setRaces] = useState<Race[]>([]);
  const [driverTeams, setDriverTeams] = useState<Map<string, string>>(new Map());
  const [teamDrivers, setTeamDrivers] = useState<TeamDrivers[]>([]);
  
  // Get available years from races data
  const availableYears = Array.from(new Set((racesData as Race[]).map(r => r.year)))
    .sort((a, b) => b - a);

  useEffect(() => {
    // Load driver standings for this year
    const drivers = (driverStandingsData as any[])
      .filter((d: any) => d.year === selectedYear)
      .sort((a, b) => a.positionNumber - b.positionNumber);
    
    // Create a map of driver to constructor for this year
    const driverConstructorMap = new Map<string, string>();
    drivers.forEach((driver: any) => {
      if (driver.constructorId) {
        driverConstructorMap.set(driver.driverId, driver.constructorId);
      }
    });
    
    setDriverTeams(driverConstructorMap);
    setDriverStandings(drivers);

    // Load constructor standings for this year
    const constructors = (constructorStandingsData as ConstructorStanding[])
      .filter((c: ConstructorStanding) => c.year === selectedYear)
      .sort((a, b) => a.positionNumber - b.positionNumber)
      .slice(0, 10); // Top 10
    
    setConstructorStandings(constructors);

    // Load races for this year
    const seasonRaces = (racesData as Race[])
      .filter((r: Race) => r.year === selectedYear)
      .sort((a, b) => a.round - b.round);
    
    setRaces(seasonRaces);

    // Load team-driver data for this year
    const yearEntrants = (entrantsDriversData as any[])
      .filter((e: any) => e.year === selectedYear && e.testDriver === false);
    
    const teamMap = new Map<string, { teamName: string; constructorId: string; drivers: Set<string> }>();
    
    yearEntrants.forEach((entry: any) => {
      const key = entry.constructorId || entry.entrantId;
      if (!teamMap.has(key)) {
        teamMap.set(key, {
          teamName: entry.entrantId,
          constructorId: entry.constructorId,
          drivers: new Set()
        });
      }
      teamMap.get(key)!.drivers.add(entry.driverId);
    });
    
    const teamsArray = Array.from(teamMap.values())
      .map(team => ({
        teamName: team.teamName,
        constructorId: team.constructorId,
        drivers: Array.from(team.drivers).sort()
      }))
      .sort((a, b) => a.constructorId.localeCompare(b.constructorId));
    
    setTeamDrivers(teamsArray);
  }, [selectedYear]);

  const formatName = (id: string) => {
    return id.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getPositionColor = (position: number) => {
    if (position === 1) return 'text-yellow-400';
    if (position === 2) return 'text-gray-300';
    if (position === 3) return 'text-amber-600';
    return 'text-muted-foreground';
  };

  return (
    <div className="flex flex-col w-full max-w-6xl m-12">
      {/* Header */}
      <header className="mb-8">
        <a 
          href="#/seasons" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Seasons Overview
        </a>
        
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-m font-black text-gray-400">FIA Formula One World Championship</h2>
            <h1 className="mt-1 text-4xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
              {selectedYear} Season 
            </h1>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <label className="text-sm font-medium text-muted-foreground">Select Season</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="px-4 py-2 bg-card border border-border rounded-lg text-foreground font-medium hover:border-[#FFD37B] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFD37B] focus:border-transparent"
            >
              {availableYears.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {races.length} Races
          </span>
        </div>
      </header>

      {/* Teams & Drivers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
          Teams & Drivers ({teamDrivers.length} teams)
        </h2>
        
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground w-1/2">Team</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground w-1/2">Drivers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {teamDrivers.map((team, index) => (
                <tr 
                  key={team.constructorId}
                  className={`hover:bg-muted/50 transition-colors ${index % 2 === 0 ? 'bg-slate-800/70' : 'bg-slate-900/50'}`}
                >
                  <td className="p-2 px-6">
                    <a
                      href={`#/teams/${team.constructorId}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <div className={`w-1 h-6 rounded ${getTeamColor(team.constructorId)}`}></div>
                      <span className="text-lg font-bold text-foreground uppercase hover:text-[#FFD37B] transition-colors">
                        {formatName(team.constructorId)}
                      </span>
                    </a>
                  </td>
                  <td className="p-2 px-6">
                    <div className="flex flex-col gap-2">
                      {team.drivers.map((driver) => (
                        <a 
                          key={driver}
                          href={`#/drivers/${driver}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-[#FFD37B] transition-colors cursor-pointer"
                        >
                          <User className="w-3 h-3" />
                          <span className="text-sm font-medium">
                            {formatName(driver)}
                          </span>
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Race Calendar */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
          <Flag className="w-6 h-6" />
          Race Calendar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {races.map((race) => (
            <div 
              key={race.id}
              className="bg-card border border-border rounded-lg p-4 hover:border-[#FFD37B] transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-mono text-muted-foreground">
                  ROUND {race.round}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formatDate(race.date)}
                </span>
              </div>
              
              <h3 className="font-bold text-foreground mb-1 line-clamp-2">
                {formatName(race.grandPrixId)} GP
              </h3>
              
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  {formatName(race.circuitId)}
                </div>
                <div className="flex items-center gap-2">
                  <Flag className="w-3 h-3" />
                  {race.laps} laps · {race.distance.toFixed(2)} km
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Championship Standings */}
      <section className="mb-12">
        <Accordion type="single">
          <AccordionItem value="standings">
            <AccordionTrigger value="standings" className="bg-slate-700 text-black hover:from-[#FFC857] hover:to-[#FFD37B] transition-all rounded-lg">
              <span className="text-xl font-bold">Show Results</span>
            </AccordionTrigger>
            <AccordionContent value="standings" className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Driver Standings */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <User className="w-6 h-6" />
                    Driver Standings
                  </h2>
                  
                  <div className="bg-card border border-border rounded-lg overflow-hidden max-h-[570px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-900 [&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-slate-600">
                    <div className="divide-y divide-border">
                      {driverStandings.map((driver) => (
                        <a
                          key={driver.driverId}
                          href={`#/drivers/${driver.driverId}`}
                          className="block p-2 px-4 hover:bg-slate-900 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <span className={`text-xl font-bold w-8 ${getPositionColor(driver.positionNumber)}`}>
                              {driver.positionNumber}
                            </span>
                            
                            {driverTeams.get(driver.driverId) && (
                              <div className={`w-1 h-12 rounded ${getTeamColor(driverTeams.get(driver.driverId)!)}`} />
                            )}
                            
                            <div className="flex-1">
                              <div className="font-semibold text-foreground">
                                {formatName(driver.driverId)}
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-md font-bold text-foreground">
                                {driver.points}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                PTS
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Constructor Standings */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Trophy className="w-6 h-6" />
                    Constructor Standings
                  </h2>
                  
                  <div className="bg-card border border-border rounded-lg overflow-hidden">
                    <div className="divide-y divide-border">
                      {constructorStandings.map((constructor) => (
                        <a
                          key={constructor.constructorId}
                          href={`#/teams/${constructor.constructorId}`}
                          className="block p-2 px-4 hover:bg-slate-900 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <span className={`text-2xl font-bold w-8 ${getPositionColor(constructor.positionNumber)}`}>
                              {constructor.positionNumber}
                            </span>
                            
                            <div className={`w-1 h-6 rounded ${getTeamColor(constructor.constructorId)}`} />
                            
                            <div className="flex-1">
                              <div className="font-semibold text-foreground">
                                {formatName(constructor.constructorId)}
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-md font-bold text-foreground">
                                {constructor.points}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                PTS
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
