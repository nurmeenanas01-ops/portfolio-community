import { profile, stats } from "@/lib/portfolio-data"

export function HeroSection() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-40 pb-24">
      <p className="mb-8 flex items-center gap-3 text-sm text-muted-foreground">
        <span className="inline-block h-2 w-2 rounded-full bg-primary" />
        {profile.role}
      </p>

      <h1 className="max-w-4xl text-balance font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
        {profile.name}
      </h1>

      <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {profile.tagline}
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View selected work
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
        >
          {profile.email}
        </a>
      </div>

      <dl className="mt-20 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="font-serif text-4xl tracking-tight">{stat.value}</dt>
            <dd className="mt-2 text-sm text-muted-foreground">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
