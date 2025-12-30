import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AGB() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Allgemeine Geschäftsbedingungen
          </h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                § 1 Geltungsbereich
              </h2>
              <p className="leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Sinalis GmbH 
                und ihren Kunden über die Nutzung der Sinalis-Plattform und damit verbundener Dienstleistungen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                § 2 Vertragsgegenstand
              </h2>
              <p className="leading-relaxed">
                Sinalis bietet einen KI-gestützten Assistenten für die Patientenkommunikation in Arztpraxen an. 
                Der Leistungsumfang richtet sich nach dem jeweils gewählten Tarif und der aktuellen Leistungsbeschreibung.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                § 3 Vertragsschluss
              </h2>
              <p className="leading-relaxed">
                Der Vertrag kommt durch Annahme des Kundenangebots durch Sinalis zustande. 
                Die Annahme kann entweder ausdrücklich oder durch Freischaltung des Zugangs zur Plattform erfolgen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                § 4 Preise und Zahlung
              </h2>
              <p className="leading-relaxed">
                Die aktuell gültigen Preise ergeben sich aus der Preisliste auf unserer Website. 
                Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. 
                Die Zahlung erfolgt monatlich im Voraus.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                § 5 Datenschutz
              </h2>
              <p className="leading-relaxed">
                Der Schutz personenbezogener Daten ist uns wichtig. Die Verarbeitung personenbezogener Daten erfolgt 
                im Einklang mit den geltenden datenschutzrechtlichen Bestimmungen, insbesondere der DSGVO. 
                Details entnehmen Sie bitte unserer Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                § 6 Vertragslaufzeit und Kündigung
              </h2>
              <p className="leading-relaxed">
                Der Vertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien 
                mit einer Frist von einem Monat zum Monatsende gekündigt werden.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                § 7 Haftung
              </h2>
              <p className="leading-relaxed">
                Sinalis haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. 
                Im Übrigen haftet Sinalis nur bei Vorsatz und grober Fahrlässigkeit.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                § 8 Schlussbestimmungen
              </h2>
              <p className="leading-relaxed">
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist München, 
                soweit der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder 
                öffentlich-rechtliches Sondervermögen ist.
              </p>
            </section>

            <div className="pt-8 border-t border-border">
              <p className="text-sm">
                Stand: Dezember 2024
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
