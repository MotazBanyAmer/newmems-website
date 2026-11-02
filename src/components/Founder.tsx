import React from "react"
import { motion } from "framer-motion"
import {
  BookOpen,
  Trophy,
  DollarSign,
  ExternalLink,
  Linkedin,
  Youtube,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import founderImg from "@/assets/fadi-alsaleem.jpg"

export function Founder() {
  const stats = [
    { label: "Peer-Reviewed Publications", value: "30+", icon: BookOpen },
    { label: "Patents (Issued + Pending)", value: "6", icon: Trophy },
    { label: "Research Funding", value: "$7.5M+", icon: DollarSign },
  ]

  const recognition = [
    {
      year: "2025",
      title: "James S. and Virginia A. Blackman Associate Professorship",
      org: "UNL College of Engineering",
    },
    {
      year: "2026",
      title: "Breakthrough Innovation of the Year",
      org: "NUtech Ventures (UNL Tech Transfer)",
    },
    {
      year: "2023",
      title: "Excellence in Research Award",
      org: "UNL College of Engineering",
    },
    {
      year: "2022",
      title: "Faculty Research & Creative Activity Award",
      org: "UNL",
    },
    {
      year: "2020",
      title: "Excellence in Research Award",
      org: "UNL College of Engineering",
    },
    {
      year: "2019",
      title: "Excellence in Research Award",
      org: "UNL College of Engineering",
    },
  ]

  return (
    <section id="founder" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/5 skew-y-3 origin-top-left -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-card shadow-lg">
              <img
                src={founderImg}
                alt="Dr. Fadi Alsaleem"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
                style={{ imageRendering: "auto" }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-card border border-border p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="text-sm font-mono text-primary mb-2">
                NEBRASKA TODAY
              </div>
              <p className="italic text-sm text-muted-foreground mb-4">
                "This work is about enabling many of the emerging technologies,
                such as wearable devices, to perform very complex algorithms
                while consuming remarkably low power."
              </p>
              <a
                href="https://news.unl.edu/article/sensor-sensibility-nsf-supported-alsaleem-developing-power-saving-tech"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Read the full story <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7 lg:pl-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Meet the Inventor
            </h2>
            <h3 className="text-2xl text-primary font-medium mb-2">
              Dr. Fadi Alsaleem
            </h3>
            <p className="text-muted-foreground font-mono text-sm mb-8">
              Founder & Chief Inventor, NEW MEMS
              <br />
              James S. and Virginia A. Blackman Associate Professor, UNL
              <br />
              Co-Founder & CTO,{" "}
              <a
                href="https://www.grasshopperhealth.com/"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Grasshopper Health
              </a>
            </p>

            <div className="space-y-6 text-foreground/80 mb-10">
              <p>
                Dr. Alsaleem is the James S. and Virginia A. Blackman Associate
                Professor at the University of Nebraska–Lincoln (UNL), holding
                joint appointments in the Architectural Engineering and
                Mechanical Engineering departments. He specializes in leading
                research in AI-integrated MEMS hardware for computing and
                sensing.
              </p>
              <p>
                His work has attracted{" "}
                <strong className="text-foreground">
                  over $7.5 million in federal research funding
                </strong>{" "}
                from NSF, the U.S. Department of Energy, and IARPA. He has
                authored 30+ peer-reviewed publications — including in Nature
                Portfolio journals — and is an inventor on 6 patents, and has
                presented his research at the top engineering schools in the U.S.,
                including MIT, Stanford, and Berkeley.
              </p>
              <p>
                Before academia, Dr. Alsaleem spent four years as Senior Lead
                Algorithm Engineer at Emerson Climate Technology and earlier
                worked as a MEMS Control Engineer at MicrostaQ Inc. (Austin, TX).
                He earned his Ph.D. and M.S. in Mechanical Engineering from SUNY
                Binghamton.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href="https://www.linkedin.com/in/fadi-alsaleem-phd-a0542922/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href="https://scholar.google.com/citations?user=QvkwEzcAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GraduationCap className="w-4 h-4" /> Google Scholar
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href="https://www.youtube.com/@newmemslab"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Youtube className="w-4 h-4 text-red-500" /> YouTube
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href="https://engineering.unl.edu/durhamschool/person/fadi-alsaleem/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="w-4 h-4" /> UNL Profile
                </a>
              </Button>
            </div>

            <div className="border-t border-border pt-8 mb-8">
              <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Other Ventures
              </h4>
              <a
                href="https://www.grasshopperhealth.com/"
                target="_blank"
                rel="noreferrer"
                className="block group p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-accent/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      Grasshopper Health
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Co-founded out of UNL research, Grasshopper Health
                      commercializes Dr. Alsaleem's wearable gait-analysis
                      technology for fall risk and mobility assessment.
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
              </a>
            </div>

            <div className="border-t border-border pt-8">
              <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-5 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" /> Selected Recognition
              </h4>
              <ul className="space-y-3">
                {recognition.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-baseline gap-4"
                  >
                    <span className="text-sm font-mono font-semibold text-primary min-w-[48px]">
                      {item.year}
                    </span>
                    <span className="flex-1 text-foreground/90">
                      {item.title}
                      <span className="text-muted-foreground"> — {item.org}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border shadow-lg shadow-primary/5"
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-primary opacity-80" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-display">
                  {item.value}
                </div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
