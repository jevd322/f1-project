import { useState, useEffect } from 'react';
import { Users, Trophy, Car } from 'lucide-react';
import driversData from '../data/drivers-2025.json';

interface Driver {
  driver_number: number;
  full_name: string;
  name_acronym: string;
  team_name: string;
  team_colour: string;
  first_name: string;
  last_name: string;
  headshot_url: string;
  country_code: string | null;
}

export default function About() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>('All');

  useEffect(() => {
    // Get unique drivers (in case there are duplicates in the data)
    const uniqueDrivers = driversData.reduce((acc: Driver[], driver) => {
      if (!acc.find(d => d.driver_number === driver.driver_number)) {
        acc.push(driver as Driver);
      }
      return acc;
    }, []);

    // Sort by driver number
    const sortedDrivers = uniqueDrivers.sort((a, b) => a.driver_number - b.driver_number);
    setDrivers(sortedDrivers);
  }, []);

  // Get unique teams
  const teams = ['All', ...new Set(drivers.map(d => d.team_name))];

  // Filter drivers by selected team
  const filteredDrivers = selectedTeam === 'All' 
    ? drivers 
    : drivers.filter(d => d.team_name === selectedTeam);

  return (
    <div className="max-w-7xl mx-12 my-12">
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">2025 Season</h2>
        <h1 className="mt-1 text-4xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          F1 Drivers
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Complete list of Formula 1 drivers competing in the 2025 season. 
          View all drivers or filter by team.
        </p>
      </header>

      {/* Team Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {teams.map(team => (
          <button
            key={team}
            onClick={() => setSelectedTeam(team)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedTeam === team
                ? 'bg-gradient-to-r from-[#FFD37B] to-[#FFC857] text-black'
                : 'bg-card border border-border text-muted-foreground hover:border-[#FFD37B]'
            }`}
          >
            {team}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Drivers</p>
              <p className="text-2xl font-bold text-foreground">{drivers.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-red-500 to-orange-400">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Teams</p>
              <p className="text-2xl font-bold text-foreground">{teams.length - 1}</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-green-400">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Filtered</p>
              <p className="text-2xl font-bold text-foreground">{filteredDrivers.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Drivers Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">#</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Driver</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Acronym</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Team</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Team Color</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredDrivers.map((driver, index) => (
                <tr 
                  key={driver.driver_number}
                  className="hover:bg-muted/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-2xl font-black text-muted-foreground">
                      {driver.driver_number}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-foreground">
                        {driver.first_name} {driver.last_name}
                      </p>
                      <p className="text-sm text-muted-foreground">{driver.full_name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-muted rounded-full text-foreground text-sm font-bold">
                      {driver.name_acronym}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium text-foreground">{driver.team_name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-8 h-8 rounded-lg border border-border"
                        style={{ backgroundColor: `#${driver.team_colour}` }}
                      />
                      <span className="text-sm font-mono text-muted-foreground">
                        #{driver.team_colour}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredDrivers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No drivers found for the selected team.</p>
          </div>
        )}
      </div>

      <div className="mt-12 p-6 bg-card border border-border rounded-xl">
        <h3 className="text-xl font-bold text-foreground mb-3">🏎️ 2025 F1 Driver Lineup</h3>
        <p className="text-muted-foreground leading-relaxed">
          The 2025 Formula 1 season features an exciting mix of experienced champions and rising stars. 
          This page displays the complete driver lineup with their team affiliations, driver numbers, 
          and official headshots. Use the team filter above to view drivers by constructor.
        </p>
      </div>
    </div>
  );
}
