import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Cpu, Sparkles } from "lucide-react"

export function Roadmap() {
  const steps = [
    {
      label: "Today",
      title: "Validated science",
      icon: CheckCircle2,
      accent: "text-primary",
      bullets: [
        "Working prototypes in human gait, radar denoising, and additive-manufacturing monitoring",
        "Backed by $7.5M+ in federal research funding (NSF, DOE, IARPA)",
        "Peer-reviewed in Nature Portfolio and other leading journals",
      ],
    },
    {
      label: "Tomorrow",
      title: "MEMS that compute",
      icon: Cpu,
      accent: "text-secondary",
      bullets: [
        "Sensing and computing unified in a single, low-cost MEMS device",
        "Extremely small footprint suited to wearables, vehicles, and embedded systems",
        "Drop-in replacement for traditional sensor + microcontroller stacks",
      ],
    },
    {
      label: "Someday",
      title: "Sensors that think",
      icon: Sparkles,
      accent: "text-primary",
      bullets: [
        "MEMS itself performs all computing — no external processor",
        "Batteryless operation using ambient energy (light, motion, heat)",
        "Trillions of self-powered, intelligent sensors woven into everyday life",
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Where sensing, computing, and{" "}
            <span className="text-primary">power converge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear path from validated lab science to ubiquitous, self-powered
            intelligent sensors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-7 h-7 ${item.accent}`} />
                  <div
                    className={`text-sm font-mono uppercase tracking-widest ${item.accent}`}
                  >
                    {item.label}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>

                <ul className="space-y-3">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground leading-relaxed flex gap-2"
                    >
                      <span className={`${item.accent} mt-1.5 shrink-0`}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight">
            <span className="text-foreground">No batteries. </span>
            <span className="text-foreground">No cloud. </span>
            <span className="text-primary">No compromise.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
