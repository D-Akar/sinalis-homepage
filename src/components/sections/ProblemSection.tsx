import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Languages, CalendarX, Users, Shield } from "lucide-react";

const problems = [
  {
    icon: Languages,
    title: "Sprachbarrieren",
    stat: "35%",
    description: "der Patienten haben Schwierigkeiten, mit ihrem Arzt zu kommunizieren",
  },
  {
    icon: CalendarX,
    title: "No-Shows",
    stat: "20%",
    description: "der Termine werden nicht wahrgenommen – das kostet durchschnittlich 120.000€ pro Jahr",
  },
  {
    icon: Users,
    title: "Überlastetes Personal",
    stat: "40%",
    description: "des Arbeitstages werden für Anrufe und Verwaltungsaufgaben aufgewendet",
  },
  {
    icon: Shield,
    title: "Patientensicherheit",
    stat: "21%",
    description: "der medizinischen Fehler entstehen durch Kommunikationsprobleme",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Die Herausforderung
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Praxen stehen vor großen{" "}
            <span className="text-gradient">Kommunikationsherausforderungen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            50+ Interviews mit Praxen haben dieselben 6 Kernprobleme aufgezeigt, 
            die den Alltag belasten.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {problem.stat}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
