export default function About() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-indigo-600">About</h1>
      <p className="mt-4 text-gray-100">
        This is an example project to demonstrate Vite + React + TypeScript + Tailwind.
      </p>

      <section className="mt-6 bg-white/80 p-6 rounded shadow">
        <h2 className="text-xl font-semibold">Purpose</h2>
        <p className="mt-2 text-gray-600">
          Build a small, fast UI and iterate with Tailwind utilities.
        </p>

        {/* Use hash links so the app's existing hash-based router (in App.tsx) picks them up */}
        <div className="mt-4 space-x-4">
          <a href="#/basics" className="text-indigo-600 hover:underline">
            Go to Basics Page
          </a>
          <a href="#/" className="text-indigo-600 hover:underline">
            Go to Home Page
          </a>
        </div>
      </section>
    </div>
  );
}
