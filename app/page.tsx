import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Starfield } from "@/components/starfield"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Starfield />
      <div className="relative z-10">
        <SiteNav />
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  )
}
