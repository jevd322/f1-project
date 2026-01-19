export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <header className="my-12">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">About</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          About This Project
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Your complete guide to understanding and enjoying Formula 1 racing
        </p>
      </header>

      {/* Project Purpose */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Welcome to F1 Fundamentals</h2>
        <p className="text-gray-400 mb-4">
          This project was created to help newcomers understand and appreciate the exciting world of Formula 1 racing. Whether you're just starting to watch or want to deepen your knowledge, this guide breaks down everything you need to know.
        </p>
        <p className="text-gray-400">
          From understanding race weekends and qualifying formats to learning about car aerodynamics and racing strategies, we cover all the fundamentals in an accessible and engaging way.
        </p>
      </section>

      {/* What You'll Learn */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-[#FFD37B]/20">
        <h2 className="text-2xl font-bold text-[#FFD37B] mb-4">What You'll Learn</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Race Weekend Structure</h3>
            <p className="text-gray-400 text-sm">
              Understand the three-day format, practice sessions, qualifying, and race day procedures.
            </p>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">The Car & Technology</h3>
            <p className="text-gray-400 text-sm">
              Learn about aerodynamics, power units, tires, and the cutting-edge technology that makes F1 cars the fastest in the world.
            </p>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Tracks & Circuits</h3>
            <p className="text-gray-400 text-sm">
              Explore the iconic circuits, understand different corner types, and learn what makes each track unique.
            </p>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Strategy & Racing</h3>
            <p className="text-gray-400 text-sm">
              Discover tire strategies, overtaking techniques, undercuts, and the tactical decisions that win races.
            </p>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Rules & Regulations</h3>
            <p className="text-gray-400 text-sm">
              Understand the FIA's role, penalty systems, and the regulations that govern the sport.
            </p>
          </div>
          
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Championships & History</h3>
            <p className="text-gray-400 text-sm">
              Follow current season standings and learn about the sport's rich history and legendary moments.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-blue-500/20">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">How to Use This Guide</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Start with the Basics</h3>
            <p className="text-gray-400 text-sm">
              Begin with the "Getting Started" section to understand fundamental concepts and terminology.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Explore by Interest</h3>
            <p className="text-gray-400 text-sm">
              Use the navigation to dive deep into specific topics that interest you most.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Follow Along</h3>
            <p className="text-gray-400 text-sm">
              Use this guide while watching races to better understand what's happening on track.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Track Your Progress</h3>
            <p className="text-gray-400 text-sm">
              Check off topics as you learn them to build your F1 knowledge systematically.
            </p>
          </div>
        </div>
      </section>

      {/* Built For Fans */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-green-500/20">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Built for New Fans</h2>
        <p className="text-gray-400 mb-4">
          Formula 1 can seem complex at first, with technical jargon, strategic decisions, and intricate rules. This guide simplifies everything without dumbing it down, helping you quickly become a knowledgeable fan.
        </p>
        <p className="text-gray-400">
          Whether you're watching your first race or your fiftieth, there's always something new to learn about the pinnacle of motorsport.
        </p>
      </section>

      {/* Get Started */}
      <section className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-8 border border-red-500/30">
        <h2 className="text-3xl font-bold text-gray-100 mb-3">Ready to Start Learning?</h2>
        <p className="text-gray-300 mb-6 text-lg">
          Head to the "Getting Started" section to begin your journey into Formula 1.
        </p>
        <a 
          href="#/basics" 
          className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all"
        >
          Get Started →
        </a>
      </section>
    </div>
  );
}

