import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Shield, Users, Target, Lightbulb, Handshake } from "lucide-react";
import AchimImage from "@/assets/Achim.jpeg";
import DerinImage from "@/assets/Derin.jpeg";
import PaulImage from "@/assets/Paul.jpeg";
import SamirImage from "@/assets/Samir.jpeg";

const founders = [
  {
    name: "Achim Aziz",
    role: "CEO & Co-Founder",
    image: AchimImage,
  },
  {
    name: "Derin Akar", 
    role: "CTO & Co-Founder",
    image: DerinImage,
  },
  {
    name: "Paul Sachse",
    role: "CPO & Co-Founder",
    image: PaulImage,
  },
  {
    name: "Samir Jusufi",
    role: "CRO & Co-Founder",
    image: SamirImage,
  },
];

const values = [
  {
    icon: Heart,
    title: "Patient im Mittelpunkt",
    description: "Jede Entscheidung, die wir treffen, orientiert sich am Wohl der Patienten und der Entlastung des medizinischen Personals.",
  },
  {
    icon: Shield,
    title: "Datenschutz aus Überzeugung",
    description: "Ihre Daten gehören Ihnen. Wir setzen auf höchste Sicherheitsstandards und DSGVO-konforme Prozesse.",
  },
  {
    icon: Users,
    title: "Partnerschaft auf Augenhöhe",
    description: "Wir arbeiten eng mit Praxen zusammen und entwickeln unsere Lösungen gemeinsam weiter.",
  },
  {
    icon: Target,
    title: "Fokus auf das Wesentliche",
    description: "Weniger Bürokratie, mehr Zeit für Menschen. Das ist unser täglicher Antrieb.",
  },
  {
    icon: Lightbulb,
    title: "Innovation mit Sinn",
    description: "Technologie ist kein Selbstzweck. Wir entwickeln KI, die echte Probleme löst.",
  },
  {
    icon: Handshake,
    title: "Vertrauen durch Transparenz",
    description: "Offene Kommunikation und ehrliche Zusammenarbeit sind die Basis unserer Beziehungen.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Über Sinalis
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Weniger Telefonstress.{" "}
              <span className="text-gradient">Mehr Zeit für Menschen.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Wir entwickeln KI-Lösungen, die den Praxisalltag erleichtern und 
              Ärzte sowie medizinisches Personal entlasten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
                Unsere Geschichte
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vom Problem zur Lösung
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Die Idee zu Sinalis entstand aus einer einfachen Beobachtung: 
                Arztpraxen verbringen unzählige Stunden am Telefon – Zeit, die 
                eigentlich den Patienten gehören sollte.
              </p>
              <p>
                Wir haben uns gefragt: Was wäre, wenn künstliche Intelligenz 
                diese Routineaufgaben übernehmen könnte? Nicht um Menschen zu 
                ersetzen, sondern um ihnen Freiraum zu schaffen.
              </p>
              <p>
                Heute arbeiten wir mit Praxen in ganz Deutschland zusammen und 
                entwickeln die nächste Generation medizinischer Kommunikation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Unsere Werte
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Was uns antreibt
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Das Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Die Menschen hinter Sinalis
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {founders.map((founder) => (
              <motion.div
                key={founder.name}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    {founder.image ? (
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-12 h-12 text-primary/40" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {founder.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
