import React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroChipImg from "@/assets/hero-chip-CaOF4w6c.png"
import logoImg from "@/assets/newmems_logo_transparent-C0Kp0n1f.png"
import inceptionBadge from "@/assets/nvidia-inception-program-badge-rgb-for-screen.svg"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-24 px-6"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroChipImg}
          alt="Abstract neural chip background"
          className="w-full h-full object-cover opacity-10 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Neuromorphic Edgeware (NEW) MEMS
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
            Intelligence,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-primary to-secondary pb-2 inline-block">
              Baked Into Silicon.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            AI-integrated MEMS hardware for the next generation of sensing and computing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 text-lg rounded-full font-semibold"
              asChild
            >
              <a href="#about">Explore Technology</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-lg rounded-full font-semibold border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="#contact">Partner With Us</a>
            </Button>
          </div>

          {/* High-Visibility Dual-Logo Credibility Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-card/85 border border-primary/30 backdrop-blur-md shadow-2xl max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-primary font-semibold bg-primary/10 border border-primary/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Industry Program Membership
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-5 w-full">
              {/* NEW MEMS Logo */}
              <div className="flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="NEW MEMS"
                  className="h-16 md:h-20 w-auto object-contain drop-shadow"
                />
              </div>

              {/* Elegant divider */}
              <div className="hidden sm:block h-14 w-[1px] bg-border/80" aria-hidden="true" />
              <div className="sm:hidden w-24 h-[1px] bg-border/80" aria-hidden="true" />

              {/* Official NVIDIA Inception Member Badge (Rendered directly, no extra card-in-card) */}
              <a
                href="https://www.nvidia.com/en-us/startups/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg shrink-0"
                aria-label="NVIDIA Inception program member badge (opens in a new tab)"
              >
                <img
                  src={inceptionBadge}
                  alt="NVIDIA Inception program member badge"
                  className="h-16 md:h-20 w-auto object-contain drop-shadow-lg"
                  style={{ aspectRatio: "500.43 / 216" }}
                  width={300}
                  height={130}
                />
              </a>
            </div>

            <div className="text-center">
              <p className="text-base md:text-lg font-semibold text-foreground tracking-tight">
                NEW MEMS is a member of NVIDIA Inception.
              </p>
              <a
                href="https://www.nvidia.com/en-us/startups/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs md:text-sm text-primary hover:text-primary/80 transition-colors mt-1 focus:outline-none focus-visible:underline"
              >
                <span>Learn more about the NVIDIA Inception program</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
