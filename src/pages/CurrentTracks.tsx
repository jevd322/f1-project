import SectionNavButtons from '../components/SectionNavButtons';
import { MapPin, Flag } from 'lucide-react';

export default function CurrentTracksPage() {
  const races2026 = [
    { round: 1, name: "Australian Grand Prix", location: "Melbourne Grand Prix Circuit", date: "March 15", country: "🇦🇺", laps: 58, distance: 306.124 },
    { round: 2, name: "Chinese Grand Prix", location: "Shanghai International Circuit", date: "March 22", country: "🇨🇳", laps: 56, distance: 305.066 },
    { round: 3, name: "Japanese Grand Prix", location: "Suzuka Circuit", date: "April 5", country: "🇯🇵", laps: 53, distance: 307.471 },
    { round: 4, name: "Bahrain Grand Prix", location: "Bahrain International Circuit", date: "April 12", country: "🇧🇭", laps: 57, distance: 308.238 },
    { round: 5, name: "Saudi Arabian Grand Prix", location: "Jeddah Corniche Circuit", date: "April 19", country: "🇸🇦", laps: 50, distance: 308.450 },
    { round: 6, name: "Miami Grand Prix", location: "Miami International Autodrome", date: "May 3", country: "🇺🇸", laps: 57, distance: 308.326 },
    { round: 7, name: "Emilia Romagna Grand Prix", location: "Autodromo Enzo e Dino Ferrari", date: "May 17", country: "🇮🇹", laps: 63, distance: 309.049 },
    { round: 8, name: "Monaco Grand Prix", location: "Circuit de Monaco", date: "May 24", country: "🇲🇨", laps: 78, distance: 260.286 },
    { round: 9, name: "Spanish Grand Prix", location: "Circuit de Barcelona-Catalunya", date: "May 31", country: "🇪🇸", laps: 66, distance: 307.236 },
    { round: 10, name: "Canadian Grand Prix", location: "Circuit Gilles Villeneuve", date: "June 14", country: "🇨🇦", laps: 70, distance: 305.270 },
    { round: 11, name: "Austrian Grand Prix", location: "Red Bull Ring", date: "June 28", country: "🇦🇹", laps: 71, distance: 306.452 },
    { round: 12, name: "British Grand Prix", location: "Silverstone Circuit", date: "July 5", country: "🇬🇧", laps: 52, distance: 306.198 },
    { round: 13, name: "Belgian Grand Prix", location: "Circuit de Spa-Francorchamps", date: "July 26", country: "🇧🇪", laps: 44, distance: 308.052 },
    { round: 14, name: "Hungarian Grand Prix", location: "Hungaroring", date: "August 2", country: "🇭🇺", laps: 70, distance: 306.630 },
    { round: 15, name: "Dutch Grand Prix", location: "Circuit Zandvoort", date: "August 30", country: "🇳🇱", laps: 72, distance: 306.587 },
    { round: 16, name: "Italian Grand Prix", location: "Autodromo Nazionale di Monza", date: "September 6", country: "🇮🇹", laps: 53, distance: 306.720 },
    { round: 17, name: "Azerbaijan Grand Prix", location: "Baku City Circuit", date: "September 20", country: "🇦🇿", laps: 51, distance: 306.049 },
    { round: 18, name: "Singapore Grand Prix", location: "Marina Bay Street Circuit", date: "October 4", country: "🇸🇬", laps: 62, distance: 306.143 },
    { round: 19, name: "United States Grand Prix", location: "Circuit of the Americas", date: "October 18", country: "🇺🇸", laps: 56, distance: 308.405 },
    { round: 20, name: "Mexico City Grand Prix", location: "Autódromo Hermanos Rodríguez", date: "October 25", country: "🇲🇽", laps: 71, distance: 305.354 },
    { round: 21, name: "São Paulo Grand Prix", location: "Autódromo José Carlos Pace", date: "November 8", country: "🇧🇷", laps: 71, distance: 305.909 },
    { round: 22, name: "Las Vegas Grand Prix", location: "Las Vegas Street Circuit", date: "November 22", country: "🇺🇸", laps: 50, distance: 309.958 },
    { round: 23, name: "Qatar Grand Prix", location: "Lusail International Circuit", date: "November 29", country: "🇶🇦", laps: 57, distance: 308.611 },
    { round: 24, name: "Abu Dhabi Grand Prix", location: "Yas Marina Circuit", date: "December 6", country: "🇦🇪", laps: 58, distance: 306.183 },
  ];

  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Tracks</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          2026 Race Calendar
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg mb-6">
          The 2026 Formula 1 season features 24 races across the globe, from March to December.
        </p>
      </section>

      {/* Race Calendar */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
          <Flag className="w-6 h-6" />
          Race Calendar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {races2026.map((race) => (
            <div 
              key={race.round}
              className="bg-card border border-border rounded-lg p-4 hover:border-[#FFD37B] transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-mono text-muted-foreground">
                  ROUND {race.round}
                </span>
                <span className="text-xs text-muted-foreground">
                  {race.date}
                </span>
              </div>
              
              <h3 className="font-bold text-foreground mb-1 line-clamp-2">
                {race.name}
              </h3>
              
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  {race.location}
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

      {/* Track Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Track Types</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-gray-100 mb-3">Street Circuits</h3>
            <p className="text-sm text-gray-400 mb-3">
              Temporary tracks on public roads with tight corners and barriers.
            </p>
            <p className="text-xs text-gray-500">
              Examples: Monaco, Singapore, Baku, Miami, Las Vegas
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-gray-100 mb-3">Purpose-Built</h3>
            <p className="text-sm text-gray-400 mb-3">
              Permanent circuits designed specifically for racing.
            </p>
            <p className="text-xs text-gray-500">
              Examples: Silverstone, Spa, Barcelona, Austin, Bahrain
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-gray-100 mb-3">Hybrid Circuits</h3>
            <p className="text-sm text-gray-400 mb-3">
              Mix of permanent facilities with temporary sections.
            </p>
            <p className="text-xs text-gray-500">
              Examples: Albert Park (Melbourne), Circuit Gilles Villeneuve
            </p>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
