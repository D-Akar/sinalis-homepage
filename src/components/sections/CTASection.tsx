import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Bereit, die Patientenkommunikation zu{" "}
            <span className="text-gradient">revolutionieren?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Vereinbaren Sie eine kostenlose Demo und erfahren Sie, 
            wie Sinalis Ihre Praxis entlasten kann.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/kontakt">
                <Calendar className="mr-2" />
                Kostenlose Demo buchen
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/kontakt">
                Kontakt aufnehmen
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Keine Kreditkarte erforderlich • 30-Minuten Setup • Jederzeit kündbar
          </p>
        </motion.div>
      </div>
    </section>
  );
}
