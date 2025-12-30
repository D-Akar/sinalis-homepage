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
                Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unseren Social-Media-Profilen (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").
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
                Übersicht der Verarbeitungen
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Arten der verarbeiteten Daten</h3>
                  <p className="leading-relaxed">
                    Bestandsdaten (z.B. Namen, Adressen), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), 
                    Kontaktdaten (z.B. E-Mail, Telefonnummern), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen), 
                    Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Standortdaten, 
                    Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie), Zahlungsdaten (z.B. Bankverbindungen, Rechnungen, Zahlungshistorie).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Kategorien betroffener Personen</h3>
                  <p className="leading-relaxed">
                    Beschäftigte, Interessenten, Kommunikationspartner, Kunden, Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Zwecke der Verarbeitung</h3>
                  <p className="leading-relaxed">
                    Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit, Besuchsaktionsauswertung, Büro- und Organisationsverfahren, 
                    Content Delivery Network (CDN), Direktmarketing, Feedback, Kontaktanfragen und Kommunikation, Konversionsmessung, 
                    Profiling, Remarketing, Reichweitenmessung, Sicherheitsmaßnahmen, Tracking, Vertragliche Leistungen und Service, 
                    Verwaltung und Beantwortung von Anfragen, Zielgruppenbildung.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Maßgebliche Rechtsgrundlagen
              </h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> – Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                </p>
                <p className="leading-relaxed">
                  <strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)</strong> – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.
                </p>
                <p className="leading-relaxed">
                  <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong> – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Sicherheitsmaßnahmen
              </h2>
              <p className="leading-relaxed mb-4">
                Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
              </p>
              <p className="leading-relaxed">
                Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Übermittlung und Offenbarung von personenbezogenen Daten
              </h2>
              <p className="leading-relaxed">
                Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. Zahlungsinstitute im Rahmen von Zahlungsvorgängen, mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Einsatz von Cookies
              </h2>
              <p className="leading-relaxed mb-4">
                Cookies sind Textdateien, die Daten von besuchten Websites oder Domains enthalten und von einem Browser auf dem Computer des Benutzers gespeichert werden. Ein Cookie dient in erster Linie dazu, die Informationen über einen Benutzer während oder nach seinem Besuch innerhalb eines Onlineangebotes zu speichern.
              </p>
              <p className="leading-relaxed mb-4">
                Die folgenden Cookie-Typen werden unterschieden:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Temporäre Cookies (Session-Cookies):</strong> Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und seinen Browser geschlossen hat.</li>
                <li><strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des Browsers gespeichert.</li>
                <li><strong>First-Party-Cookies:</strong> First-Party-Cookies werden von uns selbst gesetzt.</li>
                <li><strong>Third-Party-Cookies:</strong> Drittanbieter-Cookies werden hauptsächlich von Werbetreibenden verwendet.</li>
              </ul>
              <p className="leading-relaxed">
                Abhängig davon, ob die Verarbeitung auf Grundlage einer Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die Möglichkeit, eine erteilte Einwilligung zu widerrufen oder der Verarbeitung Ihrer Daten durch Cookie-Technologien zu widersprechen. Sie können Ihren Widerspruch zunächst mittels der Einstellungen Ihres Browsers erklären, z.B., indem Sie die Nutzung von Cookies deaktivieren.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Bereitstellung des Onlineangebotes und Webhosting
              </h2>
              <p className="leading-relaxed mb-4">
                Um unser Onlineangebot sicher und effizient bereitstellen zu können, nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot abgerufen werden kann.
              </p>
              <p className="leading-relaxed mb-4">
                Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten können alle die Nutzer unseres Onlineangebotes betreffenden Angaben gehören, die im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von Onlineangeboten an Browser ausliefern zu können, und alle innerhalb unseres Onlineangebotes oder von Webseiten getätigten Eingaben.
              </p>
              <p className="leading-relaxed">
                Wir selbst (bzw. unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf den Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL und im Regelfall IP-Adressen und der anfragende Provider gehören.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Kontaktaufnahme
              </h2>
              <p className="leading-relaxed">
                Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist. Die Beantwortung der Kontaktanfragen im Rahmen von vertraglichen oder vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten oder zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der berechtigten Interessen an der Beantwortung der Anfragen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Löschung von Daten
              </h2>
              <p className="leading-relaxed">
                Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B., wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind). Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Rechte der betroffenen Personen
              </h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.
                </p>
                <p className="leading-relaxed">
                  <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
                </p>
                <p className="leading-relaxed">
                  <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
                </p>
                <p className="leading-relaxed">
                  <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
                </p>
                <p className="leading-relaxed">
                  <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
                </p>
                <p className="leading-relaxed">
                  <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
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
