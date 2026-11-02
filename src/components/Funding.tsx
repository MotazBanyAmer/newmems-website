import React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Funding() {
  const grants = [
    {
      amount: "$4,500,000",
      funder: "IARPA",
      title: "MEMS-based Analog Computer",
      role: "UNL PI",
      years: "2021–2023",
      highlight: true,
      link: "https://www.iarpa.gov/",
    },
    {
      amount: "$1,000,000",
      funder: "DOE",
      title:
        "Ultrasonic MEMS Neuromorphic Sensor for Additive Manufacturing In-Process Monitoring",
      role: "Lead PI",
      years: "2024–2028",
      highlight: true,
      link: "https://science.osti.gov/-/media/funding/pdf/Awards-Lists/2024/Awards-List-Spreadsheet-FY24---EPSCoR-3201.pdf",
    },
    {
      amount: "$547,037",
      funder: "NSF",
      title:
        "Micro-Electro-Mechanical Neural Integrated Sensing and Computing Units for Wearable Device Application",
      role: "Lead PI",
      years: "2019–2022",
      highlight: false,
      link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1935641",
    },
  ]

  return (
    <section id="funding" className="py-24 px-6 relative bg-background/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Funding & Backing
          </h2>
          <p className="text-xl text-primary font-medium max-w-3xl mx-auto">
            Over $7.5 million in federal research funding awarded to Dr.
            Alsaleem's lab from NSF, DOE, and IARPA — the scientific foundation
            NEW MEMS is being built on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {grants.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={item.highlight ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="block h-full group"
              >
                <Card
                  className={`h-full bg-card/80 backdrop-blur-sm border-border group-hover:border-primary/60 transition-colors ${
                    item.highlight
                      ? "border-primary/30 ring-1 ring-primary/20 shadow-[0_0_30px_-10px_hsl(var(--primary))]"
                      : ""
                  }`}
                >
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex flex-wrap justify-between items-center gap-x-3 gap-y-2 mb-4">
                      <Badge
                        variant={item.highlight ? "default" : "secondary"}
                        className="text-sm font-mono shrink-0"
                      >
                        {item.funder}
                      </Badge>
                      <span className="text-xl md:text-2xl font-bold text-foreground whitespace-nowrap">
                        {item.amount}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold mb-4 flex-grow group-hover:text-primary transition-colors flex items-start gap-2">
                      <span>{item.title}</span>
                      <ExternalLink className="w-4 h-4 mt-1 shrink-0 opacity-0 group-hover:opacity-70 transition-opacity" />
                    </h3>

                    <div className="flex justify-between items-center text-sm text-muted-foreground font-mono mt-auto pt-4 border-t border-border">
                      <span>{item.role}</span>
                      <span>{item.years}</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
