import React, { useState, useEffect } from 'react';
import driversData from '../data/f1db-seasons-drivers.json';
import racesData from '../data/f1db-races.json';
import entrantsDriversData from '../data/f1db-seasons-entrants-drivers.json';

interface SeasonAccordionProps {
  year: number;
  races: number;
  driverChampion: string;
  driverChampionId?: string;
  driverPoints: number;
  driverTeam: string;
  driverTeamId?: string;
  constructorChampion: string;
  constructorChampionId?: string;
  constructorPoints: number;
  isOpen: boolean;
  onToggle: () => void;
  spoilerFree?: boolean;
}

interface Driver {
  driverId: string;
  positionNumber: number | null;
}

interface Race {
  grandPrixId: string;
  circuitId: string;
  officialName: string;
}

interface TeamDrivers {
  teamName: string;
  constructorId: string;
  drivers: string[];
}

const teamColors: Record<string, string> = {
  'red-bull': 'border-l-f1-red-bull',
  'ferrari': 'border-l-f1-ferrari',
  'mercedes': 'border-l-f1-mercedes',
  'mclaren': 'border-l-f1-mclaren',
  'aston-martin': 'border-l-f1-aston-martin',
  'alpine': 'border-l-f1-alpine',
  'williams': 'border-l-f1-williams',
  'rb': 'border-l-f1-rb',
  'kick-sauber': 'border-l-f1-kick-sauber',
  'haas': 'border-l-f1-haas',
  'brawn': 'border-l-4 border-l-lime-500',
  'renault': 'border-l-4 border-l-yellow-500',
  'lotus': 'border-l-4 border-l-yellow-500',
  'default': 'border-l-4 border-l-[#FFD37B]'
};

const getTeamColor = (teamName: string): string => {
  const normalizedTeam = teamName.toLowerCase().replace(/\s+/g, '-');
  return teamColors[normalizedTeam] || teamColors['default'];
};

export function SeasonAccordion({
  year,
  races,
  driverChampion,
  driverChampionId,
  driverPoints,
  driverTeam,
  driverTeamId,
  constructorChampion,
  constructorChampionId,
  constructorPoints,
  isOpen,
  onToggle,
  spoilerFree = false
}: SeasonAccordionProps) {
  const [teamDrivers, setTeamDrivers] = useState<TeamDrivers[]>([]);
  const [tracks, setTracks] = useState<string[]>([]);

  useEffect(() => {
    // Get drivers grouped by teams for this year
    const yearEntrants = (entrantsDriversData as any[])
      .filter((e: any) => e.year === year && e.testDriver === false);
    
    // Group drivers by constructor/entrant
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
    
    // Convert to array and sort by constructor name
    const teamsArray = Array.from(teamMap.values())
      .map(team => ({
        teamName: team.teamName,
        constructorId: team.constructorId,
        drivers: Array.from(team.drivers).sort()
      }))
      .sort((a, b) => a.constructorId.localeCompare(b.constructorId));
    
    setTeamDrivers(teamsArray);

    // Get tracks for this year
    const seasonRaces = (racesData as any[])
      .filter((r: any) => r.year === year)
      .map((r: any) => r.grandPrixId);
    
    setTracks(seasonRaces);
  }, [year]);

  const formatName = (id: string) => {
    return id.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="border border-border rounded-lg bg-neutral-50 overflow-hidden transition-colors">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gradient-to-r hover:from-[#FFD37B] hover:to-[#FFC857] transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-transparent bg-gray-800 from-[#FFD37B] to-[#FFC857] bg-clip-text">
            {year}
          </span>
          <span className="text-sm text-gray-600">
            {races} races
          </span>
        </div>
        
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 20 20" 
          fill="bg-gray-800"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
        } ${isOpen ? 'overflow-y-auto' : 'overflow-hidden'}`}
      >
        <div className="px-6 py-6 border-t border-border bg-slate-700 h-fit">

          <div className="grid gap-6 md:grid-cols-2 md:auto-rows-auto">
            {/* Drivers by Team Column */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold text-[#FFD37B] uppercase tracking-wider mb-3">
                Teams & Drivers ({teamDrivers.length} teams)
              </h3>
              <div className="grid lg:grid-rows-2 lg:grid-cols-5 md:grid-rows-3 md:grid-cols-3 space-y-4 lg:space-y-0 md:space-y-0 gap-4">
                {teamDrivers.map((team) => (
                  <div key={team.constructorId} className={`p-4 bg-gray-800 ${getTeamColor(team.constructorId)} border-l-4 rounded-r-md`}>
                    <a href={`#/teams/${team.constructorId}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                      <div className="text-xl uppercase font-black text-[#FFC857] hover:text-[#FFD37B] transition-colors">
                        {formatName(team.constructorId)}
                      </div>
                    </a>
                    <div className="pl-4 space-y-0.5">
                      {team.drivers.map((driver) => (
                        <a 
                          key={driver} 
                          href={`#/drivers/${driver}`}
                          className="text-md text-foreground hover:text-[#FFD37B] hover:underline transition-colors block"
                        >
                          {formatName(driver)}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tracks Column */}
            <div className="flex justify-end flex-col">
              <h3 className="text-xl font-black text-[#FFD37B] uppercase tracking-wider">
                Tracks ({tracks.length})
              </h3>
            </div>
            <div className="flex items-end justify-end">
            <a 
              href={`#/seasons/${year}`}
              className="inline-flex items-center h-fit gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD37B] to-[#FFC857] text-gray-900 font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            >
              View Full Season Details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SeasonAccordionGroupProps {
  children: React.ReactNode;
  defaultOpen?: number;
}

export function SeasonAccordionGroup({ children, defaultOpen }: SeasonAccordionGroupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ?? null);

  const childrenArray = React.Children.toArray(children);

  return (
    <div className="space-y-3">
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            isOpen: openIndex === index,
            onToggle: () => setOpenIndex(openIndex === index ? null : index),
            key: index
          } as any);
        }
        return child;
      })}
    </div>
  );
}
