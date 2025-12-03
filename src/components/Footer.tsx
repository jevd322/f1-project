export default function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
        <p className="mb-2">
            This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V.
        </p>

        <p>
          © {new Date().getFullYear()} f1-project. Built with <span className="font-medium">Vite</span>,{' '}
          <span className="font-medium">React</span> and <span className="font-medium">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  )
}
