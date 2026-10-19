import React from "react";
import { clubInfo } from "@/content/club";

export const metadata = {
  title: `Widerrufsbelehrung | ${clubInfo.name}`,
  description: "Informationen zum Widerruf einer Mitgliedschaft",
};

export default function WiderrufPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="site-container max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline mb-8 pb-4 border-b">
          Widerrufsbelehrung
        </h1>

        <div className="space-y-6 text-gray-800 leading-relaxed text-base">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              Widerrufsrecht für Vereinsmitglieder
            </h2>
            <p>
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen Ihren
              Beitrittsantrag zum Verein zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab
              dem Tag des Vertragsschlusses (Bestätigung des Mitgliedsantrags).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              Ausübung des Widerrufs
            </h2>
            <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:</p>
            <div className="bg-gray-50 p-4 rounded border my-3 text-sm">
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
            </div>
            <p>
              mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine
              E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              Folgen des Widerrufs
            </h2>
            <p>
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
              erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
              zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
              eingegangen ist.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
