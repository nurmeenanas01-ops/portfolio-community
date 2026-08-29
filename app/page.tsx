import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
