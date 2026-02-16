export default function Footer() {
  return (
    <footer className="border-t border-surface-light px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Spaceman Tech LLC. All rights
          reserved.
        </div>
        <div className="flex gap-6">
          <a
            href="#services"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
