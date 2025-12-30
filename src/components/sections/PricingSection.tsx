import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Start",
    price: "199",
    description: "Perfekt für kleinere Praxen, die Routineanrufe automatisieren möchten.",
    features: [
      "Sina KI-Anrufassistent",
      "500 Minuten inklusive",
      "0,35€ pro zusätzliche Minute",
      "Automatisierte Anamnese",
      "Terminerinnerungen",
      "Eingehende Anrufe",
      "DSGVO-konform",
    ],
    popular: false,
  },
  {
    name: "Scale",
    price: "449",
    description: "Für wachsende Praxen mit umfangreichen Kommunikationsanforderungen.",
    features: [
      "Alle Funktionen aus Start",
      "1000 Minuten inklusive",
      "0,25€ pro zusätzliche Minute",
      "Batch-Anrufe",
      "Laborbefund-Agent",
      "Upsell-Agent (IGeL)",
      "DMP-Agent",
      "Prioritäts-Support",
    ],
    popular: true,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Preise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Einfache, transparente{" "}
            <span className="text-gradient">Preisgestaltung</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wählen Sie den Plan, der zu Ihrer Praxis passt. 
            Keine versteckten Kosten, jederzeit kündbar.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium shadow-glow">
                  Beliebteste Wahl
                </div>
              )}
              <div className={`card-elevated p-8 h-full transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-primary shadow-glow' 
                  : 'border border-transparent hover:border-primary/20'
              }`}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">
                    {plan.price}€
                  </span>
                  <span className="text-muted-foreground ml-2">/ Monat</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "hero" : "hero-outline"} 
                  size="lg" 
                  className="w-full"
                >
                  Jetzt starten
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
