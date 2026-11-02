import React from "react"
import { motion } from "framer-motion"
import { Award, Play } from "lucide-react"
import featuredThumb from "@/assets/image_1777596272762-DQP4mLIL.png"

interface VideoItem {
  id: string
  title: string
  venue: string
  description: string
  featured?: boolean
  award?: boolean
  customThumb?: string
}

export function Videos() {
  const videos: VideoItem[] = [
    {
      id: "zTMp8wqxKb0",
      title: "Breakthrough Innovation of the Year (2026)",
      venue: "NUtech Ventures · UNL Tech Transfer",
      description:
        "Dr. Alsaleem's neuromorphic MEMS sensor network was honored as the Breakthrough Innovation of the Year by NUtech Ventures, the University of Nebraska's technology commercialization office.",
      featured: true,
      award: true,
    },
    {
      id: "x-0EM_X-P2Q",
      title: "Powered for Years, Not Hours — With Our New AI Sensors",
      venue: "Featured Video",
      description:
        "An accessible introduction to NEW MEMS' AI sensors and how in-device computation transforms wearable battery life.",
      customThumb: featuredThumb,
    },
    {
      id: "wEzzJFHguMI",
      title: "Overview Presentation",
      venue: "Short Overview",
      description:
        "A concise overview of the technology, applications, and roadmap behind NEW MEMS.",
    },
    {
      id: "qEk39glDs9w",
      title: "Can a Sensor Think?",
      venue: "MIT Seminar",
      description:
        "Dr. Alsaleem's MIT seminar exploring how MEMS hardware can perform machine-learning inference natively.",
      featured: false,
    },
    {
      id: "8FGNINkeSRI",
      title: "Neuromorphic MEMS for Edge Intelligence",
      venue: "UC Berkeley Talk",
      description:
        "Invited talk at UC Berkeley on the physics, design, and applications of neuromorphic MEMS.",
      featured: false,
    },
    {
      id: "A918hVmxGjE",
      title: "Tiny ML in MEMS Hardware",
      venue: "Tiny ML Talk",
      description:
        "How MEMS-native computation enables ultra-low-power inference at the absolute edge.",
      featured: false,
    },
  ]

  const featuredVideo = videos.find((v) => v.featured)
  const remainingVideos = videos.filter((v) => !v.featured)

  const getThumb = (id: string, custom?: string) =>
    custom ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
  const getWatchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`

  return (
    <section id="videos" className="py-24 px-6 relative overflow-hidden">
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
            Featured Talks
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See the <span className="text-primary">Technology in Motion</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talks and presentations from MIT, UC Berkeley, Tiny ML, and more —
            explaining the science behind NEW MEMS in plain language.
          </p>
        </motion.div>

        {featuredVideo && (
          <motion.a
            href={getWatchUrl(featuredVideo.id)}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block mb-10 group"
          >
            <div
              className={`relative rounded-3xl overflow-hidden border bg-card transition-all ${
                featuredVideo.award
                  ? "border-secondary/50 hover:border-secondary shadow-2xl shadow-secondary/10 ring-1 ring-secondary/20"
                  : "border-primary/30 hover:border-primary/60"
              }`}
            >
              {featuredVideo.award && (
                <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest shadow-lg">
                  <Award className="w-3.5 h-3.5" /> Award Winner
                </div>
              )}

              <div className="grid md:grid-cols-12 items-stretch">
                <div className="md:col-span-7 relative aspect-video md:aspect-auto">
                  <img
                    src={getThumb(featuredVideo.id, featuredVideo.customThumb)}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-20 h-20 rounded-full group-hover:scale-110 transition-all flex items-center justify-center shadow-2xl ${
                        featuredVideo.award
                          ? "bg-secondary/90 group-hover:bg-secondary shadow-secondary/40"
                          : "bg-primary/90 group-hover:bg-primary shadow-primary/40"
                      }`}
                    >
                      <Play
                        className="w-8 h-8 text-primary-foreground ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-center">
                  <div
                    className={`text-xs font-mono uppercase tracking-widest mb-3 ${
                      featuredVideo.award ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {featuredVideo.venue}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                    {featuredVideo.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredVideo.description}
                  </p>
                  <div
                    className={`inline-flex items-center gap-2 font-semibold ${
                      featuredVideo.award ? "text-secondary" : "text-primary"
                    }`}
                  >
                    <Play className="w-4 h-4" fill="currentColor" /> Watch on
                    YouTube
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {remainingVideos.map((video, idx) => (
            <motion.a
              key={video.id}
              href={getWatchUrl(video.id)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group block"
            >
              <div className="relative rounded-2xl overflow-hidden border border-card-border bg-card/50 hover:border-primary/50 transition-all h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={getThumb(video.id, video.customThumb)}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-primary/90 group-hover:scale-110 transition-transform flex items-center justify-center shadow-xl shadow-primary/30">
                      <Play
                        className="w-6 h-6 text-primary-foreground ml-0.5"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
                    {video.venue}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
