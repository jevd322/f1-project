import SectionNavButtons from '../components/SectionNavButtons';

export default function SprintWeekend() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Sprint Weekend
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Sprint weekends offer a condensed, action-packed format with limited practice time and an additional short race on Saturday. Six races per season use this format to maximize on-track excitement.
        </p>
      </section>

      {/* What Is a Sprint Weekend */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">What Is a Sprint Weekend?</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-6">
            Sprint weekends compress the traditional schedule, replacing FP2 and FP3 with Sprint Qualifying and a Sprint Race. This creates less preparation time and more racing action.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-green-400 mb-3">Key Differences:</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Only 1 practice session instead of 3</li>
                <li>• Qualifying moved to Friday</li>
                <li>• Sprint Race on Saturday (100km / ~30 min)</li>
                <li>• Sprint sets Sunday's starting grid</li>
                <li>• Points awarded for Sprint race</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">Sprint Points:</h3>
              <div className="space-y-1 text-sm text-gray-400">
                <p>• 1st Place: <span className="font-bold text-gray-200">8 points</span></p>
                <p>• 2nd Place: <span className="font-bold text-gray-200">7 points</span></p>
                <p>• 3rd Place: <span className="font-bold text-gray-200">6 points</span></p>
                <p>• 4th Place: <span className="font-bold text-gray-200">5 points</span></p>
                <p>• 5th Place: <span className="font-bold text-gray-200">4 points</span></p>
                <p>• 6th Place: <span className="font-bold text-gray-200">3 points</span></p>
                <p>• 7th Place: <span className="font-bold text-gray-200">2 points</span></p>
                <p>• 8th Place: <span className="font-bold text-gray-200">1 point</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sprint Weekend Schedule */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Sprint Weekend Schedule</h2>
        
        <div className="space-y-6">
          {/* Friday */}
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <h3 className="text-xl font-bold text-yellow-400">Friday</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-5 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-blue-400">Free Practice 1</h4>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">60 Minutes</span>
                </div>
                <p className="text-sm text-gray-400">
                  The <span className="font-semibold text-gray-200">only</span> practice session of the weekend. Teams must gather all setup, tire, and strategy data in one hour. High pressure to get it right.
                </p>
              </div>

              <div className="bg-black/30 rounded-lg p-5 border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-purple-400">Qualifying</h4>
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Q1-Q2-Q3</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  Standard three-part qualifying format, but sets the grid for Saturday's Sprint Race, not Sunday's Grand Prix.
                </p>
                <p className="text-xs text-gray-500">
                  <span className="font-semibold text-gray-200">Note:</span> No Q2 tire rule applies—drivers have free tire choice for Sprint start
                </p>
              </div>
            </div>
          </div>

          {/* Saturday */}
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 className="text-xl font-bold text-green-400">Saturday</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-5 border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-orange-400">Sprint Shootout (Sprint Qualifying)</h4>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">SQ1-SQ2-SQ3</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  Separate mini-qualifying session to determine Sprint Race grid order. Uses three-part elimination format like regular qualifying.
                </p>
                <div className="bg-black/30 rounded-lg p-3">
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold text-gray-200">Tire Allocation:</span> Mandatory tire compounds for each session (usually medium-soft-soft)
                  </p>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-5 border-l-4 border-red-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-red-400">Sprint Race</h4>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">~100km / ~30 min</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  Short-format race awarding points to top 8 finishers. Finishing order sets Sunday's Grand Prix starting grid.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1"><span className="font-semibold text-gray-200">Format:</span></p>
                    <ul className="text-xs text-gray-400 space-y-1 ml-3">
                      <li>• Formation lap, then race</li>
                      <li>• No mandatory pit stops</li>
                      <li>• Free tire choice (most use soft)</li>
                      <li>• DRS available from lap 3</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1"><span className="font-semibold text-gray-200">Strategy:</span></p>
                    <ul className="text-xs text-gray-400 space-y-1 ml-3">
                      <li>• Usually no pit stops</li>
                      <li>• Focus on track position</li>
                      <li>• Risky overtaking for points</li>
                      <li>• Balance risk vs Sunday grid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sunday */}
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <h3 className="text-xl font-bold text-purple-400">Sunday</h3>
            </div>
            
            <div className="bg-black/30 rounded-lg p-5 border-l-4 border-red-600">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-red-500">Grand Prix</h4>
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Full Race Distance</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Standard Grand Prix format starting from Sprint Race finishing positions.
              </p>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-xs text-gray-400">
                  <span className="font-semibold text-gray-200">Grid Order:</span> Determined by Saturday's Sprint Race results. Winner starts P1, 2nd place starts P2, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Implications */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Strategic Implications</h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-3">Limited Setup Time</h3>
            <p className="text-gray-300 mb-4">
              With only 60 minutes of practice, teams have minimal opportunity to optimize car setup and test race strategies.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">Favors:</h4>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>• Teams with strong simulations</li>
                  <li>• Experienced drivers</li>
                  <li>• Adaptable car platforms</li>
                  <li>• Quick decision-making</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-2">Challenges:</h4>
                <ul className="space-y-1 text-sm text-gray-400 ml-4">
                  <li>• Less tire data for race</li>
                  <li>• Higher setup risk</li>
                  <li>• Rookies struggle more</li>
                  <li>• Unpredictable outcomes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Sprint Race Dilemma</h3>
            <p className="text-gray-300 mb-4">
              Drivers face a difficult choice: push hard for Sprint points or preserve car/position for Sunday's Grand Prix where more points are available.
            </p>
            <div className="bg-black/30 rounded-lg p-5">
              <h4 className="font-semibold text-yellow-400 mb-3">Risk vs Reward:</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• <span className="font-semibold text-gray-200">Aggressive Sprint:</span> Gain positions/points but risk damage or penalties affecting Sunday</p>
                <p>• <span className="font-semibold text-gray-200">Conservative Sprint:</span> Protect Sunday grid position but miss point-scoring opportunities</p>
                <p>• <span className="font-semibold text-gray-200">Championship Context:</span> Leaders may play safe; challengers may take risks</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-purple-400 mb-3">Parc Fermé Impact</h3>
            <p className="text-gray-300 mb-4">
              Cars enter parc fermé after Friday qualifying, locking setup until after Sunday's race. Teams cannot make major changes between Sprint and Grand Prix.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">Consequence:</span> If setup is wrong after FP1, teams are stuck with it for the entire weekend. This amplifies the importance of getting setup right quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Sprint Format: Pros and Cons</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-green-400 mb-4">Advantages</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span><span className="font-semibold text-gray-200">More Action:</span> Three competitive sessions over weekend</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span><span className="font-semibold text-gray-200">Friday Qualifying:</span> Makes Friday more exciting for fans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span><span className="font-semibold text-gray-200">Extra Points:</span> More championship opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span><span className="font-semibold text-gray-200">Unpredictability:</span> Less practice creates surprises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span><span className="font-semibold text-gray-200">Grid Shakeup:</span> Sprint can shuffle Sunday's starting order</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Disadvantages</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><span className="font-semibold text-gray-200">Reduced Practice:</span> Less data, higher risk of mistakes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><span className="font-semibold text-gray-200">Conservative Racing:</span> Drivers protect Sunday grid position</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><span className="font-semibold text-gray-200">Parc Fermé:</span> Setup locked in too early</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><span className="font-semibold text-gray-200">Tradition:</span> Deviates from classic F1 format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><span className="font-semibold text-gray-200">Complexity:</span> Confusing for new fans</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sprint Races Per Season */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Sprint Races in the Calendar</h2>
        
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-4">
            F1 typically schedules 6 Sprint weekends per season, selecting circuits that offer good overtaking opportunities and fan appeal.
          </p>
          
          <div className="bg-black/30 rounded-lg p-5">
            <h3 className="text-lg font-bold text-yellow-400 mb-3">Recent Sprint Venues:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-400">
              <ul className="space-y-1">
                <li>• Imola (Emilia Romagna GP)</li>
                <li>• Miami GP</li>
                <li>• Shanghai (Chinese GP)</li>
              </ul>
              <ul className="space-y-1">
                <li>• Red Bull Ring (Austrian GP)</li>
                <li>• Circuit of the Americas (US GP)</li>
                <li>• São Paulo (Brazilian GP)</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-4">
            <p className="text-sm text-gray-300">
              <span className="font-bold text-blue-400">Fan Favorite:</span> São Paulo's Sprint at Interlagos has produced some of the most dramatic races, with heavy rain and high-risk overtaking creating memorable moments.
            </p>
          </div>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
