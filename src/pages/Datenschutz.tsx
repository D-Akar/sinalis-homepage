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
              <p className="leading-relaxed mb-4">
                Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Diese Datenschutzerklärung gilt für unsere Webseite, auf der Sie sich über unser Startup informieren können.
              </p>
              <p className="leading-relaxed">
                Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Verantwortlicher
              </h2>
              <p className="leading-relaxed">
                Olympia UG<br />
                Achim Aziz<br />
                Feldkirchener Strasse 10<br />
                81929 München<br />
                E-Mail-Adresse: info@buffle.eu
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Allgemeine Datenerhebung beim Besuch unserer Website
              </h2>
              <p className="leading-relaxed mb-4">
                Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.
              </p>
              <p className="leading-relaxed">
                Diese Daten werden von unserem Webhosting-Anbieter automatisch in sogenannten Serverlogfiles gespeichert. Zu den Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL und im Regelfall IP-Adressen und der anfragende Provider gehören. Diese Daten werden zu Zwecken der Sicherheit und Stabilität unserer Website verwendet.
              </p>
              <p className="leading-relaxed mt-4">
                <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO) an der sicheren und stabilen Bereitstellung unserer Website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Kontaktaufnahme
              </h2>
              <p className="leading-relaxed mb-4">
                Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (E-Mail-Adresse, Name, ggf. weitere Angaben in Ihrer Nachricht) von uns gespeichert, um Ihre Anfrage zu beantworten. Diese Daten werden nur für die Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="leading-relaxed mb-4">
                Die Daten werden nicht für andere Zwecke verwendet oder an Dritte weitergegeben, es sei denn, dies ist gesetzlich vorgeschrieben oder Sie haben ausdrücklich zugestimmt.
              </p>
              <p className="leading-relaxed">
                <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO) an der Beantwortung Ihrer Anfrage.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Cookies
              </h2>
              <p className="leading-relaxed mb-4">
                Unsere Website verwendet keine Cookies, die personenbezogene Daten speichern oder zu Tracking-Zwecken verwendet werden. Falls in Zukunft Cookies eingesetzt werden sollten, werden wir Sie hierüber informieren und Ihre Einwilligung einholen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Speicherdauer und Löschung
              </h2>
              <p className="leading-relaxed">
                Die über das Kontaktformular übermittelten Daten werden gelöscht, sobald sie für die Erfüllung des Zwecks ihrer Erhebung nicht mehr erforderlich sind. Dies ist der Fall, wenn die Anfrage abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Serverlogfiles werden in der Regel nach 7 Tagen automatisch gelöscht.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Ihre Rechte
              </h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen entsprechend den gesetzlichen Vorgaben.
                </p>
                <p className="leading-relaxed">
                  <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
                </p>
                <p className="leading-relaxed">
                  <strong>Recht auf Löschung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden.
                </p>
                <p className="leading-relaxed">
                  <strong>Widerspruchsrecht:</strong> Sie haben das Recht, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. f DSGVO erfolgt, Widerspruch einzulegen.
                </p>
                <p className="leading-relaxed">
                  <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes Beschwerde einzulegen, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
                </p>
              </div>
            </section>

            <div className="pt-8 border-t border-border">
              <p className="text-sm">
                Stand: 30. Dezember 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
