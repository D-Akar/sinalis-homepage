import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Phone, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "30-Minuten Setup",
    description: "Schnelle Einrichtung mit Ihrer Praxissoftware – wir übernehmen die Integration.",
  },
  {
    icon: Phone,
    step: "02",
    title: "Anrufe & Nachrichten",
    description: "Sinalis beantwortet eingehende Anrufe und verarbeitet Anfragen automatisch.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Daten & Insights",
    description: "Alle Informationen fließen strukturiert zurück in Ihr Praxissystem.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Wie es funktioniert
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            In nur drei Schritten{" "}
            <span className="text-gradient">startklar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der Einrichtung bis zur ersten automatisierten Kommunikation 
            in weniger als einer Stunde.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="card-elevated p-8 text-center h-full hover:shadow-glow transition-all duration-300">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 md:right-1/4 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
