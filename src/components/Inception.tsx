import React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import logoImg from "@/assets/newmems_logo_transparent-C0Kp0n1f.png"
import inceptionBadge from "@/assets/nvidia-inception-program-badge-rgb-for-screen.svg"

export function Inception() {
  return (
    <section id="inception" className="py-24 px-6 relative border-t border-border bg-card/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-primary/25 bg-card/85 backdrop-blur-md p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl"
        >
          <div className="space-y-4 text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-primary font-semibold bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              Industry Program
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              NVIDIA Inception Program
            </h2>
            <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed max-w-xl">
              NEW MEMS is a member of NVIDIA Inception.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
              NVIDIA Inception is a program that nurtures startups revolutionizing industries with technological advancements, providing cutting-edge developer tools and technical support.
            </p>
            <div className="pt-2">
              <a
                href="https://www.nvidia.com/en-us/startups/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-primary hover:text-primary/80 transition-colors focus:outline-none focus-visible:underline"
              >
                <span>Learn more about the NVIDIA Inception program</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Large Dual-Logo Display (Directly rendered, no card-in-card) */}
          <div className="shrink-0 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center justify-center">
              <img
                src={logoImg}
                alt="NEW MEMS"
                className="h-16 md:h-20 w-auto object-contain drop-shadow"
              />
            </div>

            <div className="hidden sm:block h-16 w-[1px] bg-border/80" aria-hidden="true" />
            <div className="sm:hidden w-24 h-[1px] bg-border/80" aria-hidden="true" />

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
                loading="lazy"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
