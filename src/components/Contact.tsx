import React from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/toast"

export function Contact() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({
      title: "Message Sent",
      description: "Thanks, we'll be in touch soon.",
    })
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-24 px-6 relative border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Let's Build the Future Together
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you're an investor, researcher, or prospective partner,
                we're always open to conversations that push the boundaries of
                MEMS technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-lg">Omaha, Nebraska, USA</div>
              </div>

              <a
                href="tel:316-719-0450"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-lg">316-719-0450</div>
              </a>

              <a
                href="mailto:fadi1m@yahoo.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-lg">fadi1m@yahoo.com</div>
              </a>
            </div>
          </div>

          <div className="bg-card border border-border p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  placeholder="John Doe"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="How can we collaborate?"
                  className="min-h-[120px] bg-background/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full text-lg h-12 font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
