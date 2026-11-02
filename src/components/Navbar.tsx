import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import logoImg from "@/assets/newmems_logo_transparent-C0Kp0n1f.png"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Problem", href: "#problem" },
    { name: "About", href: "#about" },
    { name: "Founder", href: "#founder" },
    { name: "Funding", href: "#funding" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Publications", href: "#publications" },
    { name: "Press", href: "#press" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <img
            src={logoImg}
            alt="NEW MEMS"
            className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild size="sm" className="rounded-full px-6 font-semibold">
            <a href="#contact">Get in touch</a>
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-xl flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-lg font-medium text-foreground hover:text-primary block py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-lg font-medium text-primary block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
