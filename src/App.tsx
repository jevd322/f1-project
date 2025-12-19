import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Basics from './pages/Basics';
import About from './pages/About';
import Championship from './pages/Championship';
import SeasonsOverview from './pages/seasons/SeasonsOverview';
import SeasonDetail from './pages/seasons/SeasonDetail';
import DriverDetail from './pages/DriverDetail';
import MyProgress from './pages/MyProgress';
import './test-json';

function HomeContent() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-gray-100">CHAOS IN RACES - MADE SIMPLE</h1>
      <p className="mt-4 text-gray-200">This is a simple home page with a header and footer.</p>

      <div className="mt-8 space-y-6">
        <section className="bg-white/80 p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-800">Getting started</h2>
          <p className="mt-2 text-gray-600">
            Run <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm install</code> then{' '}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">npm run dev</code>.
          </p>
        </section>

        <section className="bg-white/80 p-6 rounded shadow">
          <h3 className="text-lg font-medium">Features</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Vite + React + TypeScript</li>
            <li>Tailwind CSS</li>
            <li>ESLint + Prettier</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  let content = <HomeContent />;
  // treat any route that starts with /basics as the Basics container
  if (route === '/basics' || route.startsWith('/basics/')) content = <Basics />;
  if (route === '/about') content = <About />;
  if (route === '/championship') content = <Championship />;
  if (route === '/seasons') content = <SeasonsOverview />;
  // Dynamic season detail route: /seasons/YYYY
  if (route.match(/^\/seasons\/\d{4}$/)) {
    const year = parseInt(route.split('/')[2]);
    content = <SeasonDetail year={year} />;
  }
  // Dynamic driver detail route: /drivers/driver-id
  if (route.match(/^\/drivers\/[\w-]+$/)) {
    const driverId = route.split('/')[2];
    content = <DriverDetail driverId={driverId} />;
  }
  if (route === '/myprogress') content = <MyProgress />;

  return (
    <div>
      <Header />
      <main className="min-h-screen flex justify-center bg-brand-50">{content}</main>
      <Footer />
    </div>
  );
}
