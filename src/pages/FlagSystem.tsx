import SideNav from '../components/sideNav';
import { FlagSystem as FlagSystemContent } from '../components/SideNavItems';
import SectionNavButtons from '../components/SectionNavButtons';

export default function FlagSystemPage() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">Race Weekend</h2>
        <h1 className="mt-1 text-3xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          Flag System
        </h1>
      </header>

      <SectionNavButtons />
    </div>
  );
}
