import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';

export default function RaceWeekend() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">Race Weekend</h2>
        <h1 className="mt-1 text-5xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Race Weekend
        </h1>
      </header>

      <section className="my-16">
        <h2 className="text-3xl font-bold text-gray-100 mb-2">
          The Standard Race Weekend Schedule
        </h2>
        <p className="text-gray-400">
          Race Weekend typically spans three days, from Friday to Sunday, with a series of practice
          sessions, qualifying rounds, and the main race event.
        </p>
      </section>

      <section className="flex flex-row justify-between w-full my-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-2">Friday Sessions</h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-2">Saturday Sessions</h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-100 mb-2">Sunday Sessions</h2>
        </div>
      </section>

      <SectionNavButtons />
    </div>
  );
}
