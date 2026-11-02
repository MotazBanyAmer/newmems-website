import React from "react"
import { Linkedin, Youtube, GraduationCap } from "lucide-react"
import logoImg from "@/assets/newmems_logo_transparent-C0Kp0n1f.png"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src={logoImg} alt="NEW MEMS" className="h-24 w-auto" />
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
            AI-integrated MEMS hardware for the next generation of sensing and
            computing.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/fadi-alsaleem-phd-a0542922/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://scholar.google.com/citations?user=QvkwEzcAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="sr-only">Google Scholar</span>
          </a>
          <a
            href="https://www.youtube.com/@newmemslab"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <Youtube className="w-5 h-5" />
            <span className="sr-only">YouTube</span>
          </a>
        </div>

        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} NEW MEMS LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
