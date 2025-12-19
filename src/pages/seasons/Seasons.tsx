import { Link } from 'react-router-dom';
import { Calendar, Trophy, Flag } from 'lucide-react';

interface Era {
  title: string;
  years: string;
  path: string;
  description: string;
  icon: JSX.Element;
  gradient: string;
}

export default function Seasons() {
  const eras: Era[] = [
    {
      title: "Modern Era",
      years: "2020-2024",
      path: "/seasons/2020s",
      description: "Ground effect regulations and intense championship battles",
      icon: <Flag className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Hybrid Era",
      years: "2010-2019",
      path: "/seasons/2010s",
      description: "Turbo-hybrid power units and Mercedes dominance",
      icon: <Trophy className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-400"
    },
    {
      title: "V8 Era",
      years: "2000-2009",
      path: "/seasons/2000s",
      description: "Ferrari's golden age and the rise of Red Bull",
      icon: <Calendar className="w-8 h-8" />,
      gradient: "from-red-500 to-orange-400"
    },
    {
      title: "V10 Era",
      years: "1990-1999",
      path: "/seasons/1990s",
      description: "Senna vs Prost and Schumacher's dominance begins",
      icon: <Trophy className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "Turbo Era",
      years: "1980-1989",
      path: "/seasons/1980s",
      description: "Turbocharged engines and legendary rivalries",
      icon: <Flag className="w-8 h-8" />,
      gradient: "from-yellow-500 to-amber-400"
    }
  ];

  return (
    <div className="mx-auto my-12">
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">F1 History</h2>
        <h1 className="mt-1 text-4xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Seasons Overview
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Explore 75 years of Formula 1 history, from 1950 to the present day. 
          Each era represents a unique chapter in motorsport's greatest competition.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eras.map((era) => (
          <Link
            key={era.path}
            to={era.path}
            className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-[#FFD37B] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="p-6">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${era.gradient} text-white mb-4`}>
                {era.icon}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-100 mb-2 group-hover:text-[#FFD37B] transition-colors">
                {era.title}
              </h3>
              
              <div className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">
                {era.years}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {era.description}
              </p>

              <div className="mt-4 flex items-center text-sm text-[#FFD37B] font-semibold group-hover:gap-2 transition-all">
                Explore seasons
                <span className="ml-1 group-hover:ml-2 transition-all">→</span>
              </div>
            </div>

            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${era.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-card border border-border rounded-xl">
        <h3 className="text-xl font-bold text-foreground mb-3">📊 Complete F1 Database</h3>
        <p className="text-muted-foreground leading-relaxed">
          This collection includes comprehensive data from 1950 to 2024, covering 76 seasons, 
          over 1,100 races, and thousands of drivers and constructors. Each season page features 
          championship standings, race counts, and a spoiler-free mode for those discovering F1 history.
        </p>
      </div>
    </div>
  );
}
