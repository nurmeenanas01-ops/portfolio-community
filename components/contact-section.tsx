import { profile } from "@/lib/portfolio-data"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
      <p className="text-sm text-muted-foreground">Contact</p>
      <h2 className="mt-6 max-w-3xl text-balance font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
        Let&apos;s build something worth keeping.
      </h2>

      <a
        href={`mailto:${profile.email}`}
        className="mt-10 inline-block font-serif text-2xl text-primary underline-offset-8 hover:underline md:text-3xl"
      >
        {profile.email}
      </a>

      <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-border pt-10 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
