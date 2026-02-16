export default function Footer() {
  return (
    <footer className="border-t border-paper-white/10 bg-dark px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-paper-white/30">
          &copy; {new Date().getFullYear()} Spaceman Tech LLC. All rights reserved.
        </div>
        <div className="flex gap-6">
          {["Services", "Portfolio", "Nearshore", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm text-paper-white/30 transition-colors hover:text-paper-white/60"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
