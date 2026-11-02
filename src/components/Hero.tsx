import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import heroChipImg from "@/assets/hero-chip-CaOF4w6c.png"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 px-6"
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

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            AI-integrated MEMS hardware for the next generation of sensing and computing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </motion.div>
      </div>
    </section>
  )
}
