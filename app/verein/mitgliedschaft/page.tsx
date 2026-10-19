import React from "react";
import Link from "next/link";
import { Download, FileText, CheckCircle } from "lucide-react";
import { clubInfo } from "@/content/club";

export const metadata = {
  title: `Mitgliedschaft | ${clubInfo.name}`,
  description: "Werde Mitglied im Alumni-Verein. Alle Infos für Studierende und Absolventen.",
};

export default function MembershipPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="site-container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline mb-6">
          Mitglied werden
        </h1>

        <div className="prose prose-lg max-w-none text-gray-800 space-y-6 mb-12">
          <p className="text-lg md:text-xl leading-relaxed">
            Alle immatrikulierten und ehemaligen Studierenden des Elitestudiengangs Software
            Engineering können Mitglied im Alumni-Verein werden.
          </p>
          <p className="leading-relaxed">
            Zur Finanzierung erheben wir von ehemaligen Studierenden einen Mitgliedsbeitrag von{" "}
            <strong>{clubInfo.membershipFees.alumniFormatted} pro Jahr</strong>. Für aktuell
            immatrikulierte Studierende ist die Mitgliedschaft{" "}
            <strong>kostenlos ({clubInfo.membershipFees.studentsFormatted})</strong>. Dieser Beitrag
            wird zum allergrößten Teil für die Unkosten verwendet, die im Rahmen unserer jährlichen
            Alumni-Treffen entstehen.
          </p>
        </div>

        {/* Pricing / Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Students Card */}
          <div className="border-2 border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary transition-colors">
            <div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Aktuell Immatrikulierte
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Studierende</h2>
              <div className="text-4xl font-extrabold text-primary mb-4">
                {clubInfo.membershipFees.students}{" "}
                <span className="text-base font-normal text-gray-500">/ Jahr</span>
              </div>
              <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Kostenlose Teilnahme an den Alumni-Seminaren
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Direkter Kontakt zu Absolventen & Mentoren
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Teilnahme an Mitgliederversammlungen
                </li>
              </ul>
            </div>
          </div>

          {/* Alumni Card */}
          <div className="border-2 border-primary bg-[#f8faff] rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Absolventen
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Alumni</h2>
              <div className="text-4xl font-extrabold text-primary mb-4">
                {clubInfo.membershipFees.alumni}{" "}
                <span className="text-base font-normal text-gray-500">/ Jahr</span>
              </div>
              <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  Kostenloser Zugang zum jährlichen Seminar
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  Unterstützung des Deutschlandstipendiums
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  Stimmrecht in der Mitgliederversammlung
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold text-primary font-headline mb-3">
            Aufnahmeantrag herunterladen
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Lade das Antragsformular herunter, fülle es aus und sende es unterschrieben per E-Mail an{" "}
            <a href={clubInfo.mailto} className="text-primary underline font-medium">
              {clubInfo.email}
            </a>
            .
          </p>

          <a
            href={clubInfo.downloads.aufnahmeantrag}
            download
            className="btn-primary inline-flex items-center space-x-2 text-base px-6 py-3"
          >
            <Download className="w-5 h-5" />
            <span>Aufnahmeantrag herunterladen (PDF)</span>
          </a>
        </div>

        {/* Related Documents */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-gray-200">
          <Link
            href="/verein/satzung/"
            className="btn-outline inline-flex items-center space-x-2 text-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Vereinssatzung lesen</span>
          </Link>
          <Link
            href="/verein/beitragsordnung/"
            className="btn-outline inline-flex items-center space-x-2 text-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Beitrags- und Kassenordnung lesen</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
