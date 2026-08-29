import { projects } from "@/lib/portfolio-data"

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 flex items-end justify-between">
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
          Selected work
        </h2>
        <span className="hidden text-sm text-muted-foreground sm:block">
          {projects.length} projects
        </span>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`grid items-center gap-8 md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} project preview`}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="text-primary">{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="mt-4 font-serif text-3xl tracking-tight">
                {project.title}
              </h3>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                View case study
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
