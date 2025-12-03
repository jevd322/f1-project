import { useEffect, useState } from 'react';

export default function Header() {
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const linkClass = (path: string) =>
    `font-semibold ${route === path ? 'text-indigo-600' : 'text-gray-100 hover:text-indigo-600'}`;

  return (
    <header className="bg-brand-50 backdrop-blur sticky top-0 z-10 border-b border-slate-600/50 dark:border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            F1
          </div>
          <nav className="hidden ml-6 md:flex items-center gap-8 uppercase">
            <a href="#/" className={linkClass('/')}>
              Home
            </a>
            <a href="#/about" className={linkClass('/about')}>
              About
            </a>
            <a href="#/basics" className={linkClass('/basics')}>
              Basics
            </a>
          </nav>
        </div>

        <nav className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#"
              className="text-white hover:text-indigo-500"
              aria-label="GitHub"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.624-5.475 5.922.43.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.29 0 .322.216.7.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href="#"
              className="text-white hover:text-indigo-500"
              aria-label="Twitter"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.56-2.005.97-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.045.762.127 1.124C7.728 8.094 4.1 6.13 1.67 3.149c-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.697 4.374 3.95 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.626 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.103-6.102 2.103-.396 0-.788-.023-1.17-.068 2.179 1.397 4.768 2.21 7.557 2.21 9.054 0 14.001-7.496 14.001-13.986 0-.21 0-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>

            <a
              href="#"
              className="text-white hover:text-indigo-500"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.49 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.49 1c1.39 0 2.49 1.12 2.49 2.5zM.22 8.98h4.54V24H.22V8.98zM8.98 8.98h4.36v2.04h.06c.61-1.16 2.11-2.38 4.35-2.38 4.66 0 5.52 3.06 5.52 7.04V24h-4.54v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24H8.98V8.98z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
