import { Separator } from '@radix-ui/react-separator';
import React from 'react';

export default function Home() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const fullText = "Thirty years ago, Niki Lauda told us 'take a monkey, place him into the cockpit and he is able to drive the car.' Thirty years later, Sebastian told us 'I had to start my car like a computer, it's very complicated.' And Nico Rosberg said that during the race – I don't remember what race - he pressed the wrong button on the wheel. Question for you both: is Formula One driving today too complicated with twenty and more buttons on the wheel, are you too much under effort, under pressure? What are your wishes for the future concerning the technical programme during the race? Less buttons, more? Or less and more communication with your engineers?";
  
  const shortText = "Thirty years ago, Niki Lauda told us 'take a monkey, place him into the cockpit and he is able to drive the car.' Thirty years later, Sebastian told us 'I had to start my car like a computer, it's very complicated.' And Nico Rosberg said that during the race – I don't remember what race";

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-03-15T14:00:00+10:00').getTime(); // Australian GP
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
          Gentlemen, 
          <br>
          </br>a short view back to the past.
        </h1>
        <div className="max-w-2xl mx-auto mb-8">
          <p className={`text-xl ${!isExpanded ? 'bg-gradient-to-b from-gray-300 to-gray-800 bg-clip-text text-transparent' : 'text-gray-300'}`}>
            {isExpanded ? fullText : shortText}
            {!isExpanded && "..."}
          </p>
          <Separator className="mt-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-red-500 hover:text-red-400 transition-colors"
          >
            {isExpanded ? (
              <svg width="36" height="24" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 10L12 6L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="36" height="24" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L12 10L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="#/basics"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            View Seasons
          </a>
          <a
            href="#/seasons"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
          >
            Start Learning
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-gray-100 mb-3">Track the Season Journey</h3>
          <p className="text-gray-300 mb-4">
            Watch the season unfold through standings.
          </p>
          <a href="#/myprogress" className="text-red-500 hover:text-red-400 font-semibold">
            My Progress →
          </a>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-gray-100 mb-3">Historical Seasons</h3>
          <p className="text-gray-300 mb-4">
            View current and historical season data. From present to the 80s.
          </p>
          <a href="#/seasons" className="text-red-500 hover:text-red-400 font-semibold">
            View Standings →
          </a>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-gray-100 mb-3">Learn the Basics</h3>
          <p className="text-gray-300 mb-4">
            Understand race formats, flags, and regulations.
          </p>
          <a href="#/basics" className="text-red-500 hover:text-red-400 font-semibold">
            Explore →
          </a>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-gray-100 mb-3">Grand Prix Details</h3>
          <p className="text-gray-300 mb-4">
            View full race results, qualifying, and race statistics.
          </p>
          <a href="#/grandprix-detail" className="text-red-500 hover:text-red-400 font-semibold">
            View Details →
          </a>
        </div>

      </section>

      {/* Countdown Timer */}
      <section className="bg-white/5 rounded-lg p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-gray-100 mb-2 text-center">2026 Australian Grand Prix</h2>
        <p className="text-gray-400 text-center mb-6">Lights out in...</p>
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{timeLeft.days}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Days</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{timeLeft.hours}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Hours</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{timeLeft.minutes}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Minutes</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{timeLeft.seconds}</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Seconds</div>
          </div>
        </div>
      </section>
    </div>
  );
}
