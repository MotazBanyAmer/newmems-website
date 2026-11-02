import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const cards = [
    {
      title: "Near-Zero Latency",
      description:
        "Decisions happen on the sensor itself — no round-trip to a separate processor or the cloud — so devices react in microseconds, not milliseconds.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Battery Life in Months",
      description:
        "Computation in the analog MEMS domain consumes a fraction of the power of a digital processor, extending wearable and remote-sensor battery life from days to months.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Event-Only Uplinks",
      description:
        "Devices transmit only when something meaningful is detected — slashing bandwidth, cloud cost, and the radio power that dominates today's IoT energy budget.",
      image:
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Privacy by Design",
      description:
        "Sensitive health and behavioral data are processed at the source. Raw data never leaves the device, eliminating the largest class of privacy and compliance risk.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80&auto=format&fit=crop",
    },
  ]

  return (
    <section id="about" className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Redefining the <span className="text-primary">Frontier of Hardware</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg text-muted-foreground">
            <p>
              <span className="text-foreground font-semibold">NEW</span> stands
              for{" "}
              <span className="text-foreground font-semibold">
                Neuromorphic Edgeware
              </span>{" "}
              — a new class of AI-integrated MEMS (Micro-Electro-Mechanical
              Systems) hardware that unifies sensing and computing into a single
              device. We move beyond the traditional von Neumann architecture by
              bringing the computation directly to the sensor.
            </p>
            <p>
              The science behind NEW MEMS draws on a decade of research by
              founder Dr. Fadi Alsaleem, who has authored 30+ peer-reviewed
              publications — including in Nature Portfolio journals — and is an
              inventor on 6 foundational patents covering neuromorphic computing
              with electrostatic MEMS devices and AI-based analog sensors for
              wearable devices.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-card-border overflow-hidden hover:border-primary/50 transition-colors duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <CardContent className="p-6 relative z-20 -mt-8">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
