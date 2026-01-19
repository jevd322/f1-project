import SectionNavButtons from '../components/SectionNavButtons';

export default function OtherPartsPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-wider">The Car</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Other Parts
        </h1>
      </header>

      <section className="mb-8">
        <p className="text-gray-300 text-lg">
          Beyond tires and aerodynamics, F1 cars have many complex systems working together. Here are the key components that make an F1 car perform at the highest level.
        </p>
      </section>

      {/* Power Unit */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Power Unit</h2>
        <p className="text-gray-300 mb-4">
          Modern F1 uses hybrid power units combining a turbocharged internal combustion engine with electric energy recovery systems.
        </p>
        <div className="space-y-3">
          <div className="bg-gray-900/50 p-4 rounded">
            <h3 className="font-semibold text-gray-100 mb-2">ICE (Internal Combustion Engine)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>1.6-liter V6 turbocharged engine</li>
              <li>15,000 RPM limit</li>
              <li>Approximately 800 horsepower</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <h3 className="font-semibold text-gray-100 mb-2">MGU-K (Motor Generator Unit - Kinetic)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>Recovers energy from braking</li>
              <li>Can deploy up to 160 hp</li>
              <li>Provides instant power boost</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <h3 className="font-semibold text-gray-100 mb-2">MGU-H (Motor Generator Unit - Heat)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>Recovers energy from exhaust heat</li>
              <li>Eliminates turbo lag</li>
              <li>Charges the battery</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-900/30 border border-green-600 rounded p-4 mt-4">
          <p className="text-sm font-semibold text-green-400 mb-2">Total Power:</p>
          <p className="text-sm text-gray-300">Combined output of around 1000 horsepower from ICE and hybrid systems</p>
        </div>
      </section>

      {/* Brakes */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Brakes</h2>
        <p className="text-gray-300 mb-4">
          F1 brakes are among the most powerful in motorsport, capable of extreme deceleration forces.
        </p>
        <div className="bg-gray-900/50 p-4 rounded mb-3">
          <p className="text-sm font-semibold text-gray-200 mb-2">Specifications:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Carbon-carbon brake discs and pads</li>
            <li>Operating temperature: 300-1000°C</li>
            <li>Can decelerate from 200 to 0 km/h in less than 4 seconds</li>
            <li>Driver experiences up to 5-6G of braking force</li>
            <li>Brake pedal pressure: up to 150 kg of force</li>
          </ul>
        </div>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Brake-by-Wire:</p>
          <p className="text-sm text-gray-300">The rear brakes are partly controlled by computers to blend with energy recovery from the MGU-K for optimal efficiency.</p>
        </div>
      </section>

      {/* Suspension */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Suspension</h2>
        <p className="text-gray-300 mb-4">
          The suspension system keeps the tires in contact with the road and manages the car's handling characteristics.
        </p>
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Double Wishbone Design</h3>
            <p className="text-sm text-gray-400">Independent front and rear suspension using push-rod or pull-rod systems connected to internal springs and dampers.</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded">
            <p className="text-sm font-semibold text-gray-200 mb-2">Key Functions:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>Maintains tire contact with track surface</li>
              <li>Manages weight transfer during acceleration and braking</li>
              <li>Controls ride height for aerodynamic efficiency</li>
              <li>Absorbs kerb impacts and track irregularities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Steering */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Steering System</h2>
        <p className="text-gray-300 mb-4">
          F1 steering wheels are sophisticated command centers with numerous buttons and controls.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Steering Wheel Features:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>20+ buttons and switches</li>
            <li>Digital display showing vital information</li>
            <li>Clutch paddles for race starts</li>
            <li>Gear shift paddles (up and down)</li>
            <li>Brake balance adjustment</li>
            <li>Differential settings</li>
            <li>Fuel mixture and engine mode controls</li>
            <li>DRS activation button</li>
            <li>Drink button for hydration system</li>
          </ul>
        </div>
      </section>

      {/* Gearbox */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Gearbox</h2>
        <p className="text-gray-300 mb-4">
          Semi-automatic sequential gearbox with paddle shifters for lightning-fast gear changes.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Specifications:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>8 forward gears + 1 reverse</li>
            <li>Gear changes in under 0.05 seconds</li>
            <li>Sequential (can only go up or down one gear at a time)</li>
            <li>Must last multiple races (durability regulations)</li>
            <li>Integrated with rear suspension and differential</li>
          </ul>
        </div>
      </section>

      {/* Chassis & Monocoque */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Chassis & Monocoque</h2>
        <p className="text-gray-300 mb-4">
          The carbon fiber survival cell that forms the core structure of the car and protects the driver.
        </p>
        <div className="bg-gray-900/50 p-4 rounded mb-3">
          <p className="text-sm font-semibold text-gray-200 mb-2">Construction:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Carbon fiber composite construction</li>
            <li>Incredibly strong yet lightweight</li>
            <li>Houses the cockpit and fuel tank</li>
            <li>Must pass rigorous FIA crash tests</li>
            <li>Typical weight: around 700 kg (car + driver)</li>
          </ul>
        </div>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Safety Features:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Halo device protecting driver's head</li>
            <li>Energy-absorbing crash structures</li>
            <li>Fire suppression system</li>
            <li>Six-point safety harness</li>
          </ul>
        </div>
      </section>

      {/* Electronics */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Electronics & Sensors</h2>
        <p className="text-gray-300 mb-4">
          Modern F1 cars are packed with sensors and computers monitoring every aspect of performance.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Systems:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>100+ sensors monitoring temperature, pressure, speed, etc.</li>
            <li>Standard ECU (Engine Control Unit) supplied to all teams</li>
            <li>Telemetry sending real-time data to pit wall</li>
            <li>Data logging for post-session analysis</li>
            <li>Radio communication system</li>
            <li>GPS for precise position tracking</li>
          </ul>
        </div>
      </section>

      {/* Fuel System */}
      <section className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Fuel System</h2>
        <p className="text-gray-300 mb-4">
          F1 has strict fuel regulations to promote efficiency and sustainability.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-gray-200 mb-2">Regulations:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Maximum 110 kg of fuel per race</li>
            <li>Maximum fuel flow rate: 100 kg/hour</li>
            <li>10% sustainable biofuel component (increasing in future)</li>
            <li>Highly efficient - about 50% thermal efficiency</li>
            <li>Fuel temperature must be within 10°C of ambient</li>
          </ul>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
