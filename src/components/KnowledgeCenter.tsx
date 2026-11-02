import React from "react"
import { motion } from "framer-motion"
import {
  Cpu,
  Library,
  Activity,
  Building2,
  BookMarked,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function KnowledgeCenter() {
  const categories = [
    {
      icon: Cpu,
      title: "Neuromorphic Computing",
      description:
        "Foundational reading on brain-inspired hardware, in-memory computing, and the architectures NEW MEMS builds upon.",
      links: [
        {
          label: "Neuromorphic engineering — overview",
          source: "Wikipedia",
          url: "https://en.wikipedia.org/wiki/Neuromorphic_engineering",
        },
        {
          label: "Intel Loihi 2 research platform",
          source: "Intel Labs",
          url: "https://www.intel.com/content/www/us/en/research/neuromorphic-computing.html",
        },
        {
          label: "Nature Electronics — neuromorphic computing collection",
          source: "Nature",
          url: "https://www.nature.com/collections/neuromorphic-computing",
        },
      ],
    },
    {
      icon: Library,
      title: "MEMS Fundamentals",
      description:
        "Background on micro-electro-mechanical systems, fabrication, and applications across sensing and actuation.",
      links: [
        {
          label: "Microelectromechanical systems — overview",
          source: "Wikipedia",
          url: "https://en.wikipedia.org/wiki/Microelectromechanical_systems",
        },
        {
          label: "IEEE MEMS conference proceedings",
          source: "IEEE Xplore",
          url: "https://ieeexplore.ieee.org/xpl/conhome/1000044/all-proceedings",
        },
        {
          label: "MEMS coverage — Semiconductor Engineering",
          source: "Semiengineering.com",
          url: "https://semiengineering.com/?s=MEMS",
        },
      ],
    },
    {
      icon: Activity,
      title: "Wearable Medical Sensing",
      description:
        "Clinical and engineering literature on continuous monitoring, gait analysis, and AI for health-grade wearables.",
      links: [
        {
          label: "Nature Biomedical Engineering — wearables",
          source: "Nature",
          url: "https://www.nature.com/subjects/biomedical-engineering",
        },
        {
          label: "Wearable technology in medicine",
          source: "Wikipedia",
          url: "https://en.wikipedia.org/wiki/Wearable_technology",
        },
        {
          label: "NIH — Sensors & wearables in healthcare",
          source: "NIH NIBIB",
          url: "https://www.nibib.nih.gov/science-education/science-topics/sensors",
        },
      ],
    },
    {
      icon: Building2,
      title: "Smart Buildings & Infrastructure",
      description:
        "References on intelligent HVAC, building energy, and sensor-driven control of the built environment.",
      links: [
        {
          label: "Smart building — overview",
          source: "Wikipedia",
          url: "https://en.wikipedia.org/wiki/Smart_building",
        },
        {
          label: "DOE — Building Technologies Office",
          source: "U.S. Dept. of Energy",
          url: "https://www.energy.gov/eere/buildings/building-technologies-office",
        },
        {
          label: "ASHRAE — Building automation & controls",
          source: "ASHRAE",
          url: "https://www.ashrae.org/technical-resources/bookstore/standards-90-1-90-2-90-4",
        },
      ],
    },
    {
      icon: BookMarked,
      title: "Funding & Programs",
      description:
        "Government research programs that have supported the technology behind NEW MEMS.",
      links: [
        {
          label: "IARPA — Intelligence Advanced Research Projects Activity",
          source: "iarpa.gov",
          url: "https://www.iarpa.gov/",
        },
        {
          label: "NSF — Electrical, Communications & Cyber Systems",
          source: "nsf.gov",
          url: "https://www.nsf.gov/div/index.jsp?div=ECCS",
        },
        {
          label: "DOE — Office of Science",
          source: "energy.gov",
          url: "https://www.energy.gov/science/office-science",
        },
      ],
    },
    {
      icon: Library,
      title: "NEW MEMS Sources",
      description:
        "Primary, citable references for the funding figures, awards, and biography used across this site.",
      links: [
        {
          label: "Prairie Portraits: Fadi Alsaleem",
          source: "Silicon Prairie News",
          url: "https://siliconprairienews.com/2025/10/prairie-portraits-fadi-alsaleem/",
        },
        {
          label: "Faculty Profile — Dr. Fadi Alsaleem",
          source: "UNL Durham School",
          url: "https://engineering.unl.edu/durhamschool/person/fadi-alsaleem/",
        },
        {
          label: "Citations & Publications",
          source: "Google Scholar",
          url: "https://scholar.google.com/citations?user=QvkwEzcAAAAJ&hl=en",
        },
      ],
    },
  ]

  return (
    <section id="knowledge" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Knowledge Center
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sources & <span className="text-primary">Related Reading</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated library of authoritative references on the technologies,
            programs, and research that ground NEW MEMS' work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Card className="h-full bg-card/50 border-card-border hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground leading-tight mb-1">
                          {cat.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {cat.description}
                    </p>

                    <ul className="space-y-3 mt-auto pt-4 border-t border-border/50">
                      {cat.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-start justify-between gap-3 text-sm text-foreground/85 hover:text-primary transition-colors"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="font-medium leading-snug group-hover:text-primary transition-colors">
                                {link.label}
                              </div>
                              <div className="text-xs text-muted-foreground font-mono mt-0.5">
                                {link.source}
                              </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <p className="text-center text-xs font-mono text-muted-foreground mt-12 max-w-3xl mx-auto">
          External links are provided for reference and education. NEW MEMS is
          not affiliated with the publishers, agencies, or institutions listed
          unless explicitly stated.
        </p>
      </div>
    </section>
  )
}
