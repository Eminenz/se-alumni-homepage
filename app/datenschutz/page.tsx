import React from "react";
import { clubInfo } from "@/content/club";

export const metadata = {
  title: `Datenschutzerklärung | ${clubInfo.name}`,
  description: `Datenschutzerklärung des ${clubInfo.name}`,
};

export default function DatenschutzPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="site-container max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline mb-8 pb-4 border-b">
          Datenschutzerklärung
        </h1>

        <div className="space-y-6 text-gray-800 leading-relaxed text-base">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              1. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der
              EU-Datenschutzgrundverordnung (DSGVO), ist:
            </p>
            <p className="mt-2">
              {clubInfo.name}
              <br />
              {clubInfo.address.careOf}
              <br />
              {clubInfo.address.street}
              <br />
              {clubInfo.address.zipCity}
              <br />
              E-Mail:{" "}
              <a href={clubInfo.mailto} className="text-primary underline font-medium">
                {clubInfo.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              2. Erfassung allgemeiner Informationen beim Besuch unserer Website
            </h2>
            <p>
              Diese Website wird als rein statische Seite betrieben. Wenn Sie auf unsere Website
              zugreifen, werden automatisch Informationen allgemeiner Natur erfasst (Server-Logfiles
              des Hosting-Providers). Diese Informationen beinhalten etwa die Art des Webbrowsers,
              das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre
              IP-Adresse und ähnliches.
            </p>
            <p className="mt-2">
              Diese Daten sind technisch erforderlich, um von Ihnen angeforderte Inhalte von
              Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              3. Keine Tracking- oder Marketing-Cookies
            </h2>
            <p>
              Unsere Website verzichtet vollständig auf den Einsatz von Tracking-, Werbe- oder
              Marketing-Cookies. Es werden keine Profile über Ihr Nutzungsverhalten erstellt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              4. Kontaktaufnahme per E-Mail
            </h2>
            <p>
              Treten Sie bzgl. Fragen jeglicher Art per E-Mail mit uns in Kontakt, erteilen Sie uns
              zum Zwecke der Kontaktaufnahme Ihre freiwillige Einwilligung. Die von Ihnen gemachten
              Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche
              Anschlussfragen gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              5. Ihre Betroffenenrechte
            </h2>
            <p>Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
              <li>
                Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15
                DSGVO)
              </li>
              <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
