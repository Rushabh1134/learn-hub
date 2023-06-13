import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import HeroSection from "./components/HeroSection"
import { SiteHeader } from "./components/SiteHeader"
import Technologies from "./components/Technologies"
import Features from "./components/Features"
import PrimaryFooter from "./components/Footer"
import Footer from "./components/Footer"
import Platforms from "./components/Platforms"

export default function IndexPage() {
  return (
    <main>
      <ScrollArea className="h-screen">
        <SiteHeader />
        <HeroSection />
        <Features />
        <Platforms />
        <Technologies />
        <Footer />
      </ScrollArea>
    </main>
  )
}
