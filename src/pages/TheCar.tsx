import SectionNavButtons from '../components/SectionNavButtons';

export default function TheCar() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          The Car
        </h1>
      </header>

      {/* Navigation Area */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Car Components</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="#/basics/tyres" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-colors group">
            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-red-500">Tyres</h3>
            <p className="text-sm text-gray-400">Compounds, wear, and strategy behind tire selection</p>
          </a>
          
          <a href="#/basics/aerodynamics" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-colors group">
            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-red-500">Aerodynamics</h3>
            <p className="text-sm text-gray-400">Wings, downforce, and how air affects the car</p>
          </a>
          
          <a href="#/basics/other-parts" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-colors group">
            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-red-500">Other Parts</h3>
            <p className="text-sm text-gray-400">Power unit, brakes, suspension, and more</p>
          </a>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
