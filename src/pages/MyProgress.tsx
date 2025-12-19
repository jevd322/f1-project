import SideNav from '../components/sideNav';
import SectionNavButtons from '../components/SectionNavButtons';

export default function MyProgress() {
  return (
    <div>
      <header className="mb-12">
        <h2 className="text-m font-black text-gray-400">Learning</h2>
        <h1 className="mt-1 text-3xl uppercase font-black text-transparent bg-gradient-to-r from-[#FFD37B] to-[#FFC857] bg-clip-text">
          My Progress
        </h1>
      </header>
      <div className="text-foreground">
        <p>Track your learning progress and understanding of Formula 1.</p>
      </div>
      <SectionNavButtons />
    </div>
  );
}
