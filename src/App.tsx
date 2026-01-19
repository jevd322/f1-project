import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Basics from './pages/Basics';
import About from './pages/About';
import Championship from './pages/Championship';
import SeasonsOverview from './pages/seasons/SeasonsOverview';
import SeasonDetail from './pages/seasons/SeasonDetail';
import DriverDetail from './pages/DriverDetail';
import TeamDetail from './pages/TeamDetail';
import MyProgress from './pages/MyProgress';
import Home from './pages/Home';
import GrandPrixDetail from './pages/GrandPrixDetail';
import './test-json';

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

  let content = <Home />;
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
  // Dynamic team detail route: /teams/team-id
  if (route.match(/^\/teams\/[\w-]+$/)) {
    const teamId = route.split('/')[2];
    content = <TeamDetail teamId={teamId} />;
  }
  if (route === '/tracker') content = <MyProgress />;
  if (route === '/grandprix-detail') content = <GrandPrixDetail />;
  // Dynamic Grand Prix detail route: /grandprix/YYYY/RR
  if (route.match(/^\/grandprix\/\d{4}\/\d+$/)) {
    const parts = route.split('/');
    const year = parseInt(parts[2]);
    const round = parseInt(parts[3]);
    content = <GrandPrixDetail year={year} round={round} />;
  }

  return (
    <div>
      <Header />
      <main className="min-h-screen flex justify-center bg-brand-50">{content}</main>
      <Footer />
    </div>
  );
}
