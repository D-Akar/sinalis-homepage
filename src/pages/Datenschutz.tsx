import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Datenschutzerklärung
          </h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                1. Verantwortlicher
              </h2>
              <p className="leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                Sinalis GmbH<br />
                München, Deutschland<br />
                E-Mail: team.sinalis@gmail.com
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p className="leading-relaxed">
                Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. 
                Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, 
                das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. 
                Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                3. Kontaktformular
              </h2>
              <p className="leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                4. Ihre Rechte
              </h2>
              <p className="leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, 
                deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, 
                Sperrung oder Löschung dieser Daten.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                5. Cookies
              </h2>
              <p className="leading-relaxed">
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. 
                Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
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
