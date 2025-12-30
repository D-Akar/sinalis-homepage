import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Impressum
          </h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="leading-relaxed">
                Sinalis GmbH<br />
                [Straße und Hausnummer]<br />
                [PLZ] München<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Kontakt
              </h2>
              <p className="leading-relaxed">
                E-Mail: team.sinalis@gmail.com
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Vertreten durch
              </h2>
              <p className="leading-relaxed">
                [Name des Geschäftsführers]
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Registereintrag
              </h2>
              <p className="leading-relaxed">
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht München<br />
                Registernummer: [HRB-Nummer]
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [USt-IdNr.]
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="leading-relaxed">
                [Name]<br />
                [Adresse]
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Haftungsausschluss
              </h2>
              <h3 className="font-semibold text-foreground mb-2">Haftung für Inhalte</h3>
              <p className="leading-relaxed mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <h3 className="font-semibold text-foreground mb-2">Haftung für Links</h3>
              <p className="leading-relaxed">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
