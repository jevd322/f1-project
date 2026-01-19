import SectionNavButtons from '../components/SectionNavButtons';

export default function StewardsPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">FIA Officials</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Stewards
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Race stewards are the judicial body of Formula 1. They investigate incidents, review evidence, and issue penalties to ensure fair competition and adherence to regulations.
        </p>
      </section>

      {/* Who Are the Stewards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Who Are the Stewards?</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Panel Composition</h3>
          <p className="text-gray-300 mb-4">
            Each race weekend features a panel of four stewards with diverse backgrounds and expertise.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">Permanent Steward</h4>
              <p className="text-sm text-gray-400">
                FIA-appointed official who attends all races, providing consistency across the season
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">Driver Steward</h4>
              <p className="text-sm text-gray-400">
                Former F1 driver who brings racing experience and driver perspective
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-purple-400 mb-2">National Steward</h4>
              <p className="text-sm text-gray-400">
                Representative from the host country's motorsport authority
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">International Steward</h4>
              <p className="text-sm text-gray-400">
                Experienced official from FIA's pool of international stewards
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-red-400 mb-3">Independence</h3>
          <p className="text-gray-300 mb-3">
            Stewards operate independently from teams, drivers, and commercial interests. They make decisions based solely on regulations and evidence.
          </p>
          <p className="text-sm text-gray-400">
            Stewards must declare any conflicts of interest and recuse themselves if necessary.
          </p>
        </div>
      </section>

      {/* Powers and Responsibilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Powers and Responsibilities</h2>
        
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-2">Incident Investigation</h3>
            <p className="text-gray-300 mb-3">
              Review on-track incidents reported by Race Control, teams, or initiated by stewards themselves.
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-gray-200">Process:</span> Examine telemetry, video footage, hear from drivers, review team radio
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-yellow-500 mb-2">Penalty Decisions</h3>
            <p className="text-gray-300 mb-3">
              Issue penalties ranging from warnings to race bans based on severity and precedent.
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-gray-200">Types:</span> Time penalties, grid drops, penalty points, fines, disqualifications
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-blue-500 mb-2">Procedural Oversight</h3>
            <p className="text-gray-300 mb-3">
              Ensure all session and race procedures are followed correctly by teams and officials.
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-gray-200">Examples:</span> Pit lane speed, track limits, starting procedures, flag violations
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-green-500 mb-2">Protests and Appeals</h3>
            <p className="text-gray-300 mb-3">
              Review protests submitted by teams and make rulings on disputed matters.
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-gray-200">Note:</span> Steward decisions can be appealed to the FIA International Court of Appeal
            </p>
          </div>
        </div>
      </section>

      {/* Investigation Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">How Investigations Work</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Step-by-Step Process</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 text-white font-bold flex items-center justify-center">1</div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-200 mb-1">Incident Noted</h4>
                <p className="text-sm text-gray-400">Race Control flags incident or team lodges complaint. Stewards decide whether to investigate.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">2</div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-200 mb-1">"Under Investigation"</h4>
                <p className="text-sm text-gray-400">Official notice issued. Teams and drivers notified. Evidence collection begins.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 text-white font-bold flex items-center justify-center">3</div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-200 mb-1">Evidence Review</h4>
                <p className="text-sm text-gray-400">Stewards examine telemetry, GPS data, onboard cameras, team radio, and external footage.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 text-white font-bold flex items-center justify-center">4</div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-200 mb-1">Driver Summoned</h4>
                <p className="text-sm text-gray-400">Involved parties called to stewards' room to present their case and answer questions.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center">5</div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-200 mb-1">Decision Rendered</h4>
                <p className="text-sm text-gray-400">Stewards issue official document with decision, reasoning, and any penalties applied.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded-lg p-5">
          <p className="text-sm text-gray-300">
            <span className="font-bold text-yellow-400">Timing:</span> Investigations can happen during or after sessions. Some decisions are made post-race, potentially changing final results hours after the checkered flag.
          </p>
        </div>
      </section>

      {/* Common Infractions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Common Infractions</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-red-500 mb-3">Racing Incidents</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Causing collision</li>
              <li>• Forcing car off track</li>
              <li>• Unsafe rejoining</li>
              <li>• Weaving/blocking</li>
              <li>• Illegal overtake (off track or under safety car)</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-yellow-500 mb-3">Track Limits</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Exceeding track limits repeatedly</li>
              <li>• Gaining lasting advantage off track</li>
              <li>• Cutting corners during overtakes</li>
              <li>• Multiple warnings ignored</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-blue-500 mb-3">Procedural Violations</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Pit lane speeding</li>
              <li>• Unsafe pit release</li>
              <li>• Ignoring flags</li>
              <li>• Formation lap infractions</li>
              <li>• Incorrect starting position</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-lg p-5 border border-white/10">
            <h3 className="text-lg font-bold text-green-500 mb-3">Qualifying Issues</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Impeding another driver</li>
              <li>• Failing to respect yellow/red flags</li>
              <li>• Exceeding track limits on fast laps</li>
              <li>• Dangerous driving in pit lane</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Penalty Guidelines */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Typical Penalty Guidelines</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-6">
            While stewards have discretion, typical penalties follow these patterns based on severity and precedent:
          </p>
          
          <div className="space-y-4">
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-yellow-400">Reprimand (Warning)</h4>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Minor</span>
              </div>
              <p className="text-sm text-gray-400">
                First-time minor infractions with no advantage gained or danger caused
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-orange-400">5-Second Penalty</h4>
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Moderate</span>
              </div>
              <p className="text-sm text-gray-400">
                Forcing car off track, minor contact, gaining small advantage
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-red-400">10-Second Penalty</h4>
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Serious</span>
              </div>
              <p className="text-sm text-gray-400">
                Causing collision, dangerous rejoining, repeated violations
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-purple-400">Drive-Through / Stop-Go</h4>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Severe</span>
              </div>
              <p className="text-sm text-gray-400">
                Dangerous driving, ignoring black flag, major procedural breach
              </p>
            </div>

            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-pink-400">Disqualification</h4>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded">Critical</span>
              </div>
              <p className="text-sm text-gray-400">
                Technical violations, extreme dangerous driving, race manipulation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consistency Debate */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">The Consistency Debate</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-6">
            One of the most discussed aspects of stewarding is consistency—whether similar incidents receive similar penalties across different races and seasons.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-3">Arguments for Flexibility</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Every incident has unique circumstances</li>
                <li>• Track characteristics vary greatly</li>
                <li>• Racing context matters (lap 1 vs lap 50)</li>
                <li>• Championship implications considered</li>
                <li>• "Let them race" philosophy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-400 mb-3">Arguments for Strict Consistency</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Drivers need clear expectations</li>
                <li>• Reduces perceived bias</li>
                <li>• Makes racing fairer</li>
                <li>• Easier to understand for fans</li>
                <li>• Reduces controversy</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-4">
            <p className="text-sm text-gray-300">
              <span className="font-bold text-blue-400">Current Approach:</span> The FIA aims for consistency through guidelines and the permanent steward role, while acknowledging that judgment calls will always be part of racing.
            </p>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
