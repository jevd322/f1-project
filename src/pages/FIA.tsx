import SectionNavButtons from '../components/SectionNavButtons';

export default function FIA() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Governance</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          FIA
        </h1>
        <p className="mt-2 text-xl text-gray-300">Fédération Internationale de l'Automobile</p>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          The FIA is the governing body of Formula 1 and international motorsport. It creates and enforces regulations, ensures safety standards, and oversees race operations worldwide.
        </p>
      </section>

      {/* Role and Responsibilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Role and Responsibilities</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-3">Rule Making</h3>
            <p className="text-gray-300 mb-4">
              Creates and updates technical, sporting, and safety regulations for all FIA championships.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 ml-4">
              <li>• Technical regulations (car design)</li>
              <li>• Sporting regulations (race procedures)</li>
              <li>• Safety standards and crash tests</li>
              <li>• Financial regulations (budget cap)</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Race Control</h3>
            <p className="text-gray-300 mb-4">
              Oversees race operations, enforces rules, and makes real-time decisions during events.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 ml-4">
              <li>• Starting and stopping races</li>
              <li>• Deploying safety cars</li>
              <li>• Investigating incidents</li>
              <li>• Issuing penalties</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-green-400 mb-3">Safety Development</h3>
            <p className="text-gray-300 mb-4">
              Continuously improves safety standards through research, testing, and innovation.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 ml-4">
              <li>• Crash testing requirements</li>
              <li>• Halo and safety devices</li>
              <li>• Circuit safety standards</li>
              <li>• Medical and rescue protocols</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">License & Certification</h3>
            <p className="text-gray-300 mb-4">
              Issues licenses to drivers, teams, circuits, and officials to compete in FIA events.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 ml-4">
              <li>• Super License for F1 drivers</li>
              <li>• Circuit homologation</li>
              <li>• Team entry approval</li>
              <li>• Official certification</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Officials */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Key Officials at Each Race</h2>
        
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-red-500">Race Director</h3>
              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Primary Authority</span>
            </div>
            <p className="text-gray-300 mb-3">
              Overall authority during race weekend. Controls race starts, safety car deployment, red flags, and coordinates with Race Control.
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-gray-200">Key Powers:</span> Start/stop races, deploy safety measures, make immediate safety decisions
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-yellow-500">Stewards (Usually 4)</h3>
              <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Judicial Panel</span>
            </div>
            <p className="text-gray-300 mb-3">
              Independent panel that investigates incidents, reviews evidence, and issues penalties or decisions.
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-gray-200">Key Powers:</span> Issue penalties, investigate incidents, review protests, impose fines
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-blue-500">Technical Delegate</h3>
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Compliance</span>
            </div>
            <p className="text-gray-300 mb-3">
              Ensures all cars comply with technical regulations through inspections, measurements, and testing.
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-gray-200">Key Powers:</span> Inspect cars, require modifications, disqualify non-compliant vehicles
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-green-500">Medical Delegate</h3>
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Safety & Health</span>
            </div>
            <p className="text-gray-300 mb-3">
              Oversees medical facilities, coordinates medical response, and clears drivers after incidents.
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-gray-200">Key Powers:</span> Declare drivers unfit, supervise medical facilities, coordinate emergency response
            </p>
          </div>
        </div>
      </section>

      {/* Penalty System */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Common Penalties</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Time Penalties</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-yellow-400 mb-2">5-Second Penalty</h4>
              <p className="text-sm text-gray-400">
                Minor infractions like forcing another car off track
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">10-Second Penalty</h4>
              <p className="text-sm text-gray-400">
                More serious incidents like causing collisions
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-red-400 mb-2">Drive-Through</h4>
              <p className="text-sm text-gray-400">
                Severe violations, ~20-25 second penalty
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Grid Penalties</h3>
          <p className="text-gray-300 mb-4">
            Applied to starting position for next race, ranging from 3 to 10+ places, or back of grid for severe infractions.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-semibold text-gray-200 mb-2">Common Causes:</h4>
              <ul className="space-y-1 text-sm text-gray-400 ml-4">
                <li>• Exceeding power unit component limits</li>
                <li>• Gearbox changes outside allowed window</li>
                <li>• Causing collisions in previous race</li>
                <li>• Impeding during qualifying</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-semibold text-gray-200 mb-2">Example:</h4>
              <p className="text-sm text-gray-400">
                Installing a 4th engine when only 3 are allowed per season results in a 10-place grid penalty.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Other Penalties</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <div>
                <h4 className="font-semibold text-gray-200">Penalty Points</h4>
                <p className="text-sm text-gray-400">Added to Super License (12 points = 1 race ban)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <div>
                <h4 className="font-semibold text-gray-200">Financial Fines</h4>
                <p className="text-sm text-gray-400">Monetary penalties for technical or sporting violations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <div>
                <h4 className="font-semibold text-gray-200">Disqualification</h4>
                <p className="text-sm text-gray-400">Removal from race results for serious rule breaches</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <div>
                <h4 className="font-semibold text-gray-200">Reprimands</h4>
                <p className="text-sm text-gray-400">Official warnings (3 reprimands = 10-place grid penalty)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIA vs FOM */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">FIA vs Formula One Management (FOM)</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-500 mb-3">FIA (Governing Body)</h3>
            <p className="text-gray-300 mb-4">
              Regulatory and sporting authority responsible for rules, safety, and competition integrity.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="font-semibold text-gray-200">Responsibilities:</span></li>
              <li className="ml-4">• Write and enforce regulations</li>
              <li className="ml-4">• Operate Race Control</li>
              <li className="ml-4">• Safety standards</li>
              <li className="ml-4">• Penalties and stewarding</li>
              <li className="ml-4">• Driver licensing</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-blue-500 mb-3">FOM (Commercial Rights)</h3>
            <p className="text-gray-300 mb-4">
              Commercial entity that promotes and manages the business side of Formula 1 (owned by Liberty Media).
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="font-semibold text-gray-200">Responsibilities:</span></li>
              <li className="ml-4">• TV broadcasting rights</li>
              <li className="ml-4">• Race hosting and promotion</li>
              <li className="ml-4">• Sponsorship deals</li>
              <li className="ml-4">• Calendar planning</li>
              <li className="ml-4">• Prize money distribution</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-lg p-5">
          <p className="text-sm text-gray-300">
            <span className="font-bold text-yellow-400">Key Distinction:</span> The FIA ensures fair competition and safety, while FOM handles the business, marketing, and entertainment aspects of Formula 1.
          </p>
        </div>
      </section>

      {/* Super License */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">FIA Super License</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-6">
            The FIA Super License is the qualification required to compete in Formula 1. It ensures drivers have sufficient experience and skill.
          </p>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-green-400 mb-3">Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-400 ml-4">
                <li>• Minimum age: 18 years old</li>
                <li>• Valid driver's license for road cars</li>
                <li>• At least 40 Super License points accumulated over 3 years</li>
                <li>• 300 km driven in a current Formula 1 car</li>
                <li>• Pass FIA's driver training program</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Earning Points</h3>
              <p className="text-sm text-gray-400 mb-3">
                Drivers earn points by finishing well in FIA-recognized championships:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <ul className="space-y-1">
                  <li>• F2 Champion: 40 points</li>
                  <li>• F2 2nd Place: 40 points</li>
                  <li>• F2 3rd Place: 30 points</li>
                  <li>• IndyCar Champion: 40 points</li>
                </ul>
                <ul className="space-y-1">
                  <li>• F3 Champion: 30 points</li>
                  <li>• FE Champion: 30 points</li>
                  <li>• WEC Champion: 30 points</li>
                  <li>• Points scale down by position</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-purple-400 mb-3">Penalty Points System</h3>
              <p className="text-sm text-gray-400">
                Drivers can accumulate up to 12 penalty points on their Super License within a 12-month period. Reaching 12 points triggers an automatic one-race ban.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
