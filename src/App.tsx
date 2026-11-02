import React from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Problem } from "@/components/Problem"
import { About } from "@/components/About"
import { Videos } from "@/components/Videos"
import { Founder } from "@/components/Founder"
import { Funding } from "@/components/Funding"
import { Roadmap } from "@/components/Roadmap"
import { Publications } from "@/components/Publications"
import { Press } from "@/components/Press"
import { KnowledgeCenter } from "@/components/KnowledgeCenter"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ToastProvider } from "@/components/ui/toast"

export default function App() {
  return (
    <ToastProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Problem />
          <About />
          <Videos />
          <Founder />
          <Funding />
          <Roadmap />
          <Publications />
          <Press />
          <KnowledgeCenter />
          <Contact />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  )
}
