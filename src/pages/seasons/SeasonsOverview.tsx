import { useState, useEffect } from 'react';
import { Calendar, Trophy, Flag } from 'lucide-react';
import { SeasonAccordion, SeasonAccordionGroup } from '../../components/SeasonAccordion';
import driverStandingsData from '../../data/f1db-seasons-driver-standings.json';
import constructorStandingsData from '../../data/f1db-seasons-constructor-standings.json';
import racesData from '../../data/f1db-races.json';

interface DriverStanding {
  year: number;
  positionNumber: number;
  positionText: string;
  driverId: string;
  points: number;
}

interface ConstructorStanding {
  year: number;
  positionNumber: number;
  positionText: string;
  constructorId: string;
  points: number;
}

interface Race {
  year: number;
  round: number;
  date: string;
  grandPrixId: string;
}

interface SeasonData {
  year: number;
  champion: string;
  championPoints: number;
  driverTeam: string;
  constructorChampion: string;
  constructorPoints: number;
  races: number;
}

interface Era {
  title: string;
  years: number[];
  description: string;
  icon: JSX.Element;
  gradient: string;
}

export default function Seasons() {
  const [allSeasons, setAllSeasons] = useState<SeasonData[]>([]);
  const [spoilerFree, setSpoilerFree] = useState(false);

  const eras: Era[] = [
    {
      title: "2020s",
      years: [2024, 2023, 2022, 2021, 2020],
      description: "Ground effect regulations and intense championship battles",
      icon: <Flag className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "2010s",
      years: [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
      description: "Turbo-hybrid power units",
      icon: <Trophy className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-400"
    },
    {
      title: "2000s",
      years: [2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000],
      description: "The screamer engines era",
      icon: <Calendar className="w-8 h-8" />,
      gradient: "from-red-500 to-orange-400"
    },
    {
      title: "1990s",
      years: [1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990],
      description: "Senna vs Prost and Schumacher's dominance begins",
      icon: <Trophy className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "1980s",
      years: [1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980],
      description: "Turbocharged engines and legendary rivalries",
      icon: <Flag className="w-8 h-8" />,
      gradient: "from-yellow-500 to-amber-400"
    }
  ];

  useEffect(() => {
    // Get all years from all eras
    const allYears = eras.flatMap(era => era.years);
    
    const seasonsData = allYears.map(year => {
      // Get driver champion
      const driverChampion = (driverStandingsData as DriverStanding[]).find(
        (standing: DriverStanding) => standing.year === year && standing.positionNumber === 1
      );

      // Get constructor champion
      const constructorChampion = (constructorStandingsData as ConstructorStanding[]).find(
        (standing: ConstructorStanding) => standing.year === year && standing.positionNumber === 1
      );

      // Count races for this season
      const raceCount = (racesData as Race[]).filter(
        (race: Race) => race.year === year
      ).length;

      return {
        year,
        champion: driverChampion?.driverId || 'Unknown',
        championPoints: driverChampion?.points || 0,
        driverTeam: constructorChampion?.constructorId || 'Unknown',
        constructorChampion: constructorChampion?.constructorId || 'Unknown',
        constructorPoints: constructorChampion?.points || 0,
        races: raceCount
      };
    });

    setAllSeasons(seasonsData);
  }, []);

  const formatDriverName = (driverId: string) => {
    return driverId.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatConstructorName = (constructorId: string) => {
    return constructorId.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="max-w-6xl mx-12 my-12">
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">F1 History</h2>
        <h1 className="mt-1 text-4xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          All Seasons
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Explore 75 years of Formula 1 history, from 1950 to the present day. 
          Each era represents a unique chapter in motorsport's greatest competition.
        </p>
      </header>

      {eras.map((era) => {
        const eraSeasons = allSeasons.filter(s => era.years.includes(s.year));
        
        return (
          <div key={era.title} className="mb-12">
            <div className="mb-6 flex items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{era.title}</h2>
                <p className="text-sm text-muted-foreground">{era.description}</p>
              </div>
            </div>

            <SeasonAccordionGroup>
              {eraSeasons.map((season) => (
                <SeasonAccordion
                  key={season.year}
                  year={season.year}
                  races={season.races}
                  driverChampion={spoilerFree ? '█████ ████████' : formatDriverName(season.champion)}
                  driverPoints={spoilerFree ? 0 : season.championPoints}
                  driverTeam={spoilerFree ? '████████' : formatConstructorName(season.driverTeam)}
                  constructorChampion={spoilerFree ? '█████ ████████' : formatConstructorName(season.constructorChampion)}
                  constructorPoints={spoilerFree ? 0 : season.constructorPoints}
                  isOpen={false}
                  onToggle={() => {}}
                  spoilerFree={spoilerFree}
                />
              ))}
            </SeasonAccordionGroup>
          </div>
        );
      })}

      <div className="mt-12 p-6 bg-card border border-border rounded-xl">
        <h3 className="text-xl font-bold text-foreground mb-3">📊 Complete F1 Database</h3>
        <p className="text-muted-foreground leading-relaxed">
          This collection includes comprehensive data from 1950 to 2024, covering 76 seasons, 
          over 1,100 races, and thousands of drivers and constructors. Each season features 
          championship standings with a spoiler-free mode for those discovering F1 history.
        </p>
      </div>
    </div>
  );
}
