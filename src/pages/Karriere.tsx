import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Heart, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "Wir gestalten die Zukunft der Patientenkommunikation mit modernster KI-Technologie.",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Unsere Arbeit verbessert den Alltag von Ärzten und Patienten gleichermaßen.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Wir arbeiten eng zusammen und unterstützen uns gegenseitig.",
  },
  {
    icon: Lightbulb,
    title: "Lernen",
    description: "Wir lernen jeden Tag dazu und wachsen gemeinsam an unseren Herausforderungen.",
  },
];

export default function Karriere() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block"
            >
              Karriere
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Gestalte die Zukunft der{" "}
              <span className="text-gradient">Gesundheitskommunikation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Werde Teil eines dynamischen Teams, das mit KI die Arzt-Patienten-Kommunikation revolutioniert.
            </motion.p>
          </div>

          {/* Values */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Warum Sinalis?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="card-elevated p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Offene Stellen
            </h2>
            <div className="card-elevated p-8 text-center">
              <p className="text-muted-foreground mb-6">
                Aktuell haben wir keine offenen Stellen ausgeschrieben. 
                Aber wir freuen uns immer über Initiativbewerbungen von talentierten Menschen!
              </p>
              <Link to="/kontakt">
                <Button variant="hero">
                  Initiativbewerbung senden
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
