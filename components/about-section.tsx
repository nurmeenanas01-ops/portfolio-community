import { profile, services } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <section id="about" className="border-y border-border bg-secondary/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">About</p>
          <p className="mt-6 text-balance font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            I&apos;m a designer and developer who believes the best interfaces
            feel obvious &mdash; the result of hard decisions made quietly.
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Over the past several years I&apos;ve partnered with founders and
            teams to shape products from first sketch to shipped release,
            holding the line on craft at every step.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="mb-4 text-sm text-muted-foreground">What I do</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-sm"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <img
              src="/computer-workspace.png"
              alt="A modern computer workstation displaying design work"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-muted-foreground">Currently</p>
              <p className="mt-2 leading-relaxed">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
