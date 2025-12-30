import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Die Zukunft der Patientenkommunikation",
    excerpt: "Wie KI-Assistenten die Arzt-Patienten-Beziehung verbessern und administrative Lasten reduzieren.",
    date: "Dezember 2024",
    category: "Technologie",
  },
  {
    title: "Mehrsprachigkeit im Gesundheitswesen",
    excerpt: "Warum die Überwindung von Sprachbarrieren entscheidend für eine bessere Patientenversorgung ist.",
    date: "November 2024",
    category: "Healthcare",
  },
  {
    title: "Datenschutz und KI in der Medizin",
    excerpt: "Wie moderne KI-Lösungen höchste Datenschutzstandards einhalten und Patientendaten schützen.",
    date: "Oktober 2024",
    category: "Datenschutz",
  },
];

export default function Blog() {
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
              Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Neuigkeiten & <span className="text-gradient">Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Erfahren Sie mehr über KI im Gesundheitswesen, Produktupdates und Branchentrends.
            </motion.p>
          </div>

          {/* Blog Posts */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="card-elevated p-8 group cursor-pointer hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Weiterlesen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Coming Soon Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center p-8 bg-secondary/30 rounded-2xl border border-border"
            >
              <p className="text-muted-foreground">
                Weitere Artikel folgen in Kürze. Bleiben Sie gespannt!
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
