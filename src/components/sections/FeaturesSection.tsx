import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneIncoming, FileText, FlaskConical, Megaphone } from "lucide-react";

const features = [
  {
    icon: PhoneIncoming,
    title: "Eingehende Anrufe",
    description: "KI-gestützte Anrufannahme rund um die Uhr in über 70 Sprachen – nie wieder verpasste Anrufe.",
    color: "from-primary to-accent",
  },
  {
    icon: FileText,
    title: "Anamnese",
    description: "Automatisierte Patientenbefragung vor dem Termin – strukturiert und mehrsprachig.",
    color: "from-primary to-accent",
  },
  {
    icon: FlaskConical,
    title: "Laborbefunde",
    description: "Automatische Benachrichtigung bei Ergebnissen – sicher und patientenfreundlich.",
    color: "from-primary to-accent",
  },
  {
    icon: Megaphone,
    title: "Kampagnen",
    description: "Proaktive Patientenansprache für Vorsorge, IGeL-Leistungen und DMP-Programme.",
    color: "from-primary to-accent",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Funktionen
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vier Kernfunktionen für{" "}
            <span className="text-gradient">effiziente Kommunikation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Von eingehenden Anrufen bis zur proaktiven Patientenbetreuung – 
            Sinalis deckt den gesamten Kommunikationsworkflow ab.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-elevated p-8 h-full hover:shadow-glow transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
