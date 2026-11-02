import React from "react"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Publications() {
  const publications = [
    {
      authors:
        "Alzubi, A., Megdadi, M., Lin, D., Reimann, J., Calbaza, D., MacDonald, R., Yang, Z., Alsaleem, F.",
      title: "In-MEMS analog neural network architecture for signal denoising",
      journal: "Sensors and Actuators A: Physical, Volume 394, 116889",
      year: "2025",
      link: "https://doi.org/10.1016/j.sna.2025.116889",
    },
    {
      authors:
        "Okour, M., Nikfarjam, H., Al Fayad, M., Tafti, F.F., Takallou, M.A., Pipinos, I.I., Pourkamali, S., Myers, S., Alsaleem, F.",
      title:
        "A MEMS network operating as a reservoir computer to classify peripheral artery disease signal from a healthy signal",
      journal: "Sensors and Actuators A: Physical, Volume 385, 116318",
      year: "2025",
      link: "https://doi.org/10.1016/j.sna.2025.116318",
    },
    {
      authors: "Nikfarjam, H., Megdadi, M., Okour, M., et al.",
      title:
        "Energy efficient integrated MEMS neural network for simultaneous sensing and computing",
      journal: "Communications Engineering, 2, 19",
      year: "2023",
      link: "https://doi.org/10.1038/s44172-023-00071-6",
    },
    {
      authors:
        "Hasan, M., Abbasalipour, A., Nikfarjam, H., Pourkamali, S., Muhammad, Emad-Un-Din, M., Jafari, R., Alsaleem, F.",
      title:
        "Exploiting Pull-in/Pull-out Hysteresis in Electrostatic MEMS Sensor Networks to Realize A Novel Sensing Continuous-time Recurrent Neural Network",
      journal: "Micromachines, 12(3), 268",
      year: "2021",
      link: null,
    },
    {
      authors:
        "Hasan, M., Alramini, A., Abdel-Rahman, E., Jafari, R., Alsaleem, F.",
      title: "Colocalized Sensing and Intelligent Computing in Micro-Sensors",
      journal: "Sensors, 20(21), 6346",
      year: "2020",
      link: "https://doi.org/10.3390/s20216346",
    },
  ]

  const patents = [
    {
      number: "US Patent 11,314,210",
      title: "Neuromorphic computing using electrostatic MEMS devices",
      authors: "Alsaleem, Hasan, Rafaie",
      year: "2022",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QvkwEzcAAAAJ&sortby=pubdate&citation_for_view=QvkwEzcAAAAJ:AXPGKjj_ei8C",
    },
    {
      number: "US Patent Application 2022/0041433 A1",
      title:
        "Artificial intelligence-based analog sensors and wearable devices incorporating the same",
      authors: "Alsaleem, Hasan",
      year: "2022",
      link: "https://patentimages.storage.googleapis.com/85/39/24/4ef27e9c000c07/US20220041433A1.pdf",
    },
    {
      number: "US Patent 10,771,040",
      title:
        "Systems and Methods for Reducing the Actuation Voltage for Electrostatic MEMS Devices",
      authors: "Alsaleem, Hasan",
      year: "2020",
      link: null,
    },
  ]

  const formatAuthors = (authorsStr: string) => {
    const parts = authorsStr.split("Alsaleem, F.")
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <strong className="text-foreground">Alsaleem, F.</strong>
          {parts[1]}
        </>
      )
    }
    return authorsStr
  }

  return (
    <section id="publications" className="py-24 px-6 bg-background relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Selected MEMS Publications
          </h2>
          <p className="text-lg text-muted-foreground">
            30+ peer-reviewed papers authored by Dr. Fadi Alsaleem and
            collaborators — including work in Nature Portfolio journals —
            forming the foundational science behind NEW MEMS.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {publications.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-lg border border-border/50 bg-card/20 hover:bg-card/60 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {formatAuthors(item.authors)}
                  </p>
                  <p className="text-sm font-mono text-primary/80">
                    {item.journal}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <Badge variant="outline" className="font-mono text-xs">
                    {item.year}
                  </Badge>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-24 text-center">
          <a
            href="https://scholar.google.com/citations?user=QvkwEzcAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-primary font-semibold hover:text-cyan-400 transition-colors text-lg group"
          >
            View all on Google Scholar
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
              P
            </span>
            MEMS-Related Patents (Inventor: Dr. Alsaleem)
          </h3>

          <div className="space-y-6">
            {patents.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-4 justify-between items-start border-b border-border/50 pb-6 last:border-0 last:pb-0"
              >
                <div>
                  <div className="text-xs font-mono text-muted-foreground mb-1">
                    {item.number}
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.authors}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Badge variant="secondary" className="font-mono">
                    {item.year}
                  </Badge>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
