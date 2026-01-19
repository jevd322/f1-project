import SectionNavButtons from '../components/SectionNavButtons';
import { ChevronRight } from 'lucide-react';

export default function RulesAndPenalties() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Rules And Penalties
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Formula 1 is governed by comprehensive regulations enforced by officials who ensure fair competition. Understanding the rules and penalty system is essential to following the sport.
        </p>
      </section>

      {/* Navigation Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Explore Rules & Governance</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="#/fia"
            className="group bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#FFD37B] hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                FIA
              </h3>
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#FFD37B] group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-gray-400">
              The governing body of F1, responsible for regulations, safety standards, and race operations.
            </p>
          </a>

          <a
            href="#/stewards"
            className="group bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#FFD37B] hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                Stewards
              </h3>
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#FFD37B] group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-gray-400">
              The judicial panel that investigates incidents, reviews evidence, and issues penalties to maintain fair racing.
            </p>
          </a>

          <a
            href="#/serving-penalties"
            className="group bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#FFD37B] hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                Serving Penalties
              </h3>
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#FFD37B] group-hover:translate-x-1 transition-all" />
            </div>
            <p className="text-gray-400">
              How penalties are applied during and after races, from time penalties to grid drops and disqualifications.
            </p>
          </a>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
