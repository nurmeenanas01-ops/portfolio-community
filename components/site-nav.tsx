import { profile } from "@/lib/portfolio-data"

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-serif text-xl tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
