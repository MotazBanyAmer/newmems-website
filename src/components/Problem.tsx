import React from "react"
import { motion } from "framer-motion"
import { Battery, ShieldAlert, Timer } from "lucide-react"

export function Problem() {
  const statCards = [
    {
      stat: "90%",
      label: "Power",
      description:
        "of a smart device's energy is spent after sensing — moving, processing, and transmitting data.",
      icon: Battery,
    },
    {
      stat: "90%",
      label: "Privacy",
      description:
        "of wearables collect sensitive health and wellness data that travels off-device to the cloud.",
      icon: ShieldAlert,
    },
    {
      stat: "80%",
      label: "Latency",
      description:
        "of the response delay happens before the device can act on what it just sensed.",
      icon: Timer,
    },
  ]

  const metrics = [
    {
      value: "50%",
      text: "Drop in medical wearable compliance caused by frequent recharging.",
    },
    {
      value: "100 ms",
      text: "Delay equals 1.7 m of travel at 60 km/h — critical in automotive safety.",
    },
    {
      value: "4%",
      text: "Of global revenue — potential GDPR fine for a single privacy violation.",
    },
    {
      value: "$20B",
      text: "Combined market for medical wearables and automotive safety sensors.",
    },
  ]

  return (
    <section id="problem" className="py-24 px-6 relative bg-background/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-4">
            The Smart Device Crisis
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Today's sensors weren't built for an{" "}
            <span className="text-secondary">always-on, intelligent</span> world.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The same architecture that delivered the smartphone is failing the
            wearables, vehicles, and infrastructure that come next.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {statCards.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-secondary/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl md:text-6xl font-bold text-secondary tabular-nums">
                    {item.stat}
                  </div>
                  <Icon className="w-10 h-10 text-secondary/60" />
                </div>
                <div className="text-xl font-semibold text-foreground mb-2">
                  {item.label}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-l-2 border-primary/40 pl-4 py-2"
            >
              <div className="text-2xl font-bold text-primary tabular-nums whitespace-nowrap">
                {item.value}
              </div>
              <p className="text-sm text-muted-foreground leading-snug mt-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
