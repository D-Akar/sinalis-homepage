import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const backers = [
  { name: "Wayra", description: "Telefónica Open Innovation" },
  { name: "UnternehmerTUM", description: "Europe's Leading Entrepreneurship Center" },
  { name: "TUM Venture Labs", description: "Healthcare Innovation" },
];

const partners = [
  { name: "Twilio", description: "Telephonie-Infrastruktur" },
  { name: "ElevenLabs", description: "KI-Sprachsynthese" },
  { name: "Google for Startups", description: "Cloud & AI Platform" },
  { name: "Microsoft for Startups", description: "Enterprise Cloud" },
];

export function BackersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Backed By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Unterstützt von
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Starke Partner an unserer Seite
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            {backers.map((backer, index) => (
              <motion.div
                key={backer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-elevated p-6 text-center hover:shadow-glow transition-all duration-300"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {backer.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {backer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <span className="text-muted-foreground font-medium text-sm uppercase tracking-wider mb-8 block">
            Technische Partner
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="font-display text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {partner.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
