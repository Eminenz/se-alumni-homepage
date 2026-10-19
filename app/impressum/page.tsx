import React from "react";
import { clubInfo } from "@/content/club";
import { boardMembers } from "@/content/board";

export const metadata = {
  title: `Impressum | ${clubInfo.name}`,
  description: "Impressum und rechtliche Angaben gemäß § 5 TMG",
};

export default function ImpressumPage() {
  const vertretungsberechtigt = boardMembers.filter((m) => m.isVertretungsberechtigt);

  return (
    <div className="py-12 md:py-16">
      <div className="site-container max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline mb-8 pb-4 border-b">
          Impressum
        </h1>

        <div className="space-y-6 text-gray-800 leading-relaxed text-base">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              Geschäftsstelle und Kontakt
            </h2>
            <p>
              {clubInfo.name}
              <br />
              {clubInfo.address.careOf}
              <br />
              {clubInfo.address.street}
              <br />
              {clubInfo.address.zipCity}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              Vertretungsberechtigte Vorstandsmitglieder
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              {vertretungsberechtigt.map((member) => (
                <li key={member.name}>
                  {member.impressumRole ?? member.role}: {member.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a href={clubInfo.mailto} className="text-primary underline font-medium">
                {clubInfo.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              Registergericht
            </h2>
            <p>
              {clubInfo.register.court}
              <br />
              Registernummer: <strong>{clubInfo.register.number}</strong>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-headline">
              Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV
            </h2>
            <p>
              {clubInfo.responsiblePerson}
              <br />
              {clubInfo.address.careOf}
              <br />
              {clubInfo.address.street}
              <br />
              {clubInfo.address.zipCity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
