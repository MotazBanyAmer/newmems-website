import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  FileText,
  Mail,
  ChevronDown,
  ExternalLink,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Press() {
  const [expanded, setExpanded] = useState(false)

  const mediaArticles = [
    {
      source: "Silicon Prairie News",
      date: "October 2025",
      title: "Prairie Portraits: Fadi Alsaleem",
      excerpt:
        "Founder feature on Dr. Alsaleem's commercialization journey — including Grasshopper Health, his other venture co-founded out of UNL research.",
      url: "https://siliconprairienews.com/2025/10/prairie-portraits-fadi-alsaleem/",
      tag: "Founder Feature · Grasshopper Health",
    },
    {
      source: "University of Nebraska–Lincoln",
      date: "Ongoing",
      title: "Faculty Profile — Dr. Fadi Alsaleem, Blackman Associate Professor",
      excerpt:
        "UNL Durham School profile detailing federal grants, recognitions, patents, and the research program behind NEW MEMS.",
      url: "https://engineering.unl.edu/durhamschool/person/fadi-alsaleem/",
      tag: "Research",
    },
    {
      source: "Google Scholar",
      date: "Updated continuously",
      title: "Citations & Publications — Fadi Alsaleem",
      excerpt:
        "Public record of 30+ peer-reviewed publications — including in Nature Portfolio journals — spanning MEMS, neuromorphic computing, wearable sensing, and intelligent infrastructure.",
      url: "https://scholar.google.com/citations?user=QvkwEzcAAAAJ&hl=en",
      tag: "Citations",
    },
  ]

  return (
    <section id="press" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background -z-10" />

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
            Now Launching
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Press & <span className="text-primary">Media</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Official launch announcement and media coverage of NEW MEMS and the
            research behind it.
          </p>
        </motion.div>

        {/* Featured Press Release Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-primary/30 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-4">
                    <FileText className="w-4 h-4" /> Press Release
                  </div>
                  <div className="text-sm font-mono text-muted-foreground mb-2">
                    For Immediate Release
                  </div>
                  <div className="text-sm font-mono text-foreground mb-6">
                    April 30, 2026 · Omaha, NE
                  </div>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href="#contact">
                      <Mail className="w-4 h-4" /> Media Inquiries
                    </a>
                  </Button>
                </div>

                <div className="md:col-span-9">
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                    NEW MEMS Launches to Bring AI Computation Directly Into
                    Silicon
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground italic mb-6">
                    Omaha-based deep-tech venture commercializes a decade of
                    research in MEMS-based neuromorphic computing, wearable
                    medical sensing, and intelligent infrastructure — backed by
                    more than $7.5M in federal research funding.
                  </p>

                  <div className="space-y-4 text-foreground/85 leading-relaxed">
                    <p>
                      <span className="font-semibold text-foreground">
                        OMAHA, NE — April 30, 2026
                      </span>{" "}
                      — NEW MEMS, a deep-tech venture pioneering AI-integrated
                      MEMS (Micro-Electro-Mechanical Systems) hardware, today
                      announced its public launch. Founded by Dr. Fadi Alsaleem —
                      the James S. and Virginia A. Blackman Associate Professor
                      at the University of Nebraska–Lincoln — NEW MEMS
                      commercializes more than a decade of research that bakes
                      machine intelligence directly into silicon at the sensor
                      level.
                    </p>

                    {expanded && (
                      <React.Fragment>
                        <p>
                          Where traditional computing moves data to a processor,
                          NEW MEMS moves the computation to the data. Using
                          nonlinear MEMS dynamics, the company's hardware
                          performs machine-learning inference natively in the
                          device itself, delivering ultra-low-power AI for edge
                          applications ranging from continuous medical
                          monitoring to smart infrastructure.
                        </p>
                        <blockquote className="border-l-2 border-primary pl-6 italic text-foreground/90 my-6">
                          "When I pause and imagine our technology in the hands
                          of patients, clinicians or industries making a real
                          difference, it recenters me. NEW MEMS is the path to put
                          research that has lived in the lab for years into the
                          world."
                          <footer className="not-italic text-sm text-muted-foreground mt-2">
                            — Dr. Fadi Alsaleem, Founder
                          </footer>
                        </blockquote>
                        <h4 className="font-bold text-foreground pt-2">
                          Built on more than $7.5M in federal research funding
                        </h4>
                        <p>
                          The science that informs NEW MEMS draws on research
                          led by Dr. Alsaleem at the University of
                          Nebraska–Lincoln, supported by some of the most
                          competitive federal programs in the United States —
                          including a $4.5M IARPA award, a $1M Department of
                          Energy grant, and a $547K NSF grant, alongside
                          additional support from federal and industry partners.
                        </p>
                        <h4 className="font-bold text-foreground pt-2">
                          A decade of foundational research
                        </h4>
                        <p>
                          Dr. Alsaleem has authored 30+ peer-reviewed
                          publications — including in Nature Portfolio journals
                          — and is an inventor on 6 patents covering
                          neuromorphic computing using electrostatic MEMS
                          devices and AI-based analog sensors for wearable
                          health. This body of work forms the scientific
                          foundation NEW MEMS is being built on.
                        </p>
                        <h4 className="font-bold text-foreground pt-2">
                          Recognition
                        </h4>
                        <p>
                          Dr. Alsaleem was named the inaugural James S. and
                          Virginia A. Blackman Associate Professor at UNL in
                          2025 and has received the Excellence in Research Award
                          (2019, 2020, 2023) and the UNL Faculty Research and
                          Creative Activity Award (2022).
                        </p>
                        <h4 className="font-bold text-foreground pt-2">
                          About NEW MEMS
                        </h4>
                        <p>
                          NEW MEMS, headquartered in Omaha, Nebraska, develops
                          Neuromorphic Edgeware (NEW) — AI-integrated MEMS
                          hardware for the next generation of computing,
                          sensing, and wearable health. Its technology bridges
                          the gap between physical sensing and machine
                          intelligence, enabling devices that perceive, decide,
                          and act without sending data to the cloud.
                        </p>
                        <p className="font-semibold text-foreground italic">
                          No batteries. No cloud. No compromise.
                        </p>
                        <div className="pt-4 border-t border-border mt-6">
                          <div className="text-sm font-mono uppercase tracking-widest text-primary mb-2">
                            Media Contact
                          </div>
                          <div className="text-foreground">
                            Dr. Fadi Alsaleem
                            <br />
                            Founder, NEW MEMS
                            <br />
                            <a
                              href="mailto:fadi1m@yahoo.com"
                              className="text-primary hover:underline"
                            >
                              fadi1m@yahoo.com
                            </a>{" "}
                            ·{" "}
                            <a
                              href="tel:+13167190450"
                              className="text-primary hover:underline"
                            >
                              316-719-0450
                            </a>
                          </div>
                        </div>
                        <div className="text-center text-muted-foreground font-mono pt-4">
                          ###
                        </div>
                      </React.Fragment>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    onClick={() => setExpanded(!expanded)}
                    className="mt-6 gap-2 text-primary hover:bg-primary/10"
                  >
                    {expanded ? "Show less" : "Read full release"}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* In the Media */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-2">In the Media</h3>
          <p className="text-muted-foreground mb-8">
            Selected coverage of Dr. Alsaleem and the research underpinning NEW
            MEMS.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {mediaArticles.map((article, idx) => (
              <motion.a
                key={idx}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-card/50 border-card-border hover:border-primary/50 hover:bg-card transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-primary">
                        {article.tag}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="text-sm font-mono text-muted-foreground mb-2">
                      {article.source} · {article.date}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      Read article{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Press Inquiries CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <div className="text-sm font-mono uppercase tracking-widest text-primary mb-1">
              For Press Inquiries
            </div>
            <p className="text-foreground">
              Interviews, briefings, and high-resolution assets available on
              request.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline" className="gap-2">
              <a href="mailto:fadi1m@yahoo.com">
                <Mail className="w-4 h-4" /> fadi1m@yahoo.com
              </a>
            </Button>
            <Button asChild className="gap-2">
              <a href="#contact">
                Contact <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
