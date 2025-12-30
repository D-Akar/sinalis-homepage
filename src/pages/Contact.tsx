import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Building2, MessageSquare, ExternalLink } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form is disabled - email is the contact method
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Wir sind für Sie da –{" "}
              <span className="text-gradient">persönlich und kompetent.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Sie möchten mehr über Sinalis erfahren oder haben Fragen? 
              Unser Team hilft Ihnen gerne weiter.
            </p>
          </motion.div>

          {/* Contact Form + Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
            <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Kontaktieren Sie uns
                </h2>
                <p className="text-muted-foreground mb-6">
                  Schreiben Sie uns eine E-Mail – wir freuen uns auf Ihre Nachricht.
                </p>
                
                <a
                  href="mailto:team.sinalis@gmail.com"
                  className="inline-flex items-center gap-2 text-primary hover:underline text-lg font-medium"
                >
                  <Mail className="w-5 h-5" />
                  team.sinalis@gmail.com
                </a>
              </div>

              {/* Contact Categories */}
              <div className="grid gap-6">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Allgemeine Anfragen
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Sie interessieren sich für Sinalis oder möchten eine 
                        individuelle Demo vereinbaren? Kontaktieren Sie uns direkt 
                        per E-Mail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Kundensupport
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Unser Support-Team steht Ihnen mit Rat und Tat zur Seite. 
                        Schreiben Sie uns einfach eine E-Mail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form (Disabled) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-card border border-border shadow-lg opacity-50 pointer-events-none"
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Vollständiger Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      disabled
                      placeholder="Max Mustermann"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      E-Mail-Adresse *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      disabled
                      placeholder="max@praxis.de"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Handynummer *
                      <span className="text-muted-foreground font-normal ml-1">
                        (damit wir Ihre Praxisprozesse nicht stören)
                      </span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      disabled
                      placeholder="+49 170 123 4567"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      disabled
                      placeholder="Wie können wir Ihnen helfen?"
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled
                  >
                    Formular derzeit nicht verfügbar
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Termin buchen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wählen Sie einen passenden Termin für ein Gespräch mit unserem Team. 
              Wir stellen Ihnen Sinalis vor und beantworten Ihre Fragen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-lg">
              {/* Calendar Header */}
              <div className="p-6 border-b border-border bg-secondary/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Sinalis Demo & Onboarding
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      30 Minuten • Video-Call
                    </p>
                  </div>
                </div>
              </div>

              {/* Calendar Embed Placeholder */}
              <div className="p-8">
                <div className="aspect-video bg-secondary/50 rounded-xl flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <ExternalLink className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                    </p>
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={() => window.open("https://cal.read.ai/sinalis?step=duration", "_blank")}
                    >
                      Termin direkt buchen
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
