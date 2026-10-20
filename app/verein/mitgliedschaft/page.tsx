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

        {/* Combined Benefits & Pricing Card */}
        <div className="border-2 border-primary rounded-lg overflow-hidden mb-12 shadow-sm bg-white grid grid-cols-1 md:grid-cols-5">
          {/* Left: Shared Benefits */}
          <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
              Für Studierende &amp; Alumni
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-headline mb-5">
              Deine Vorteile als Mitglied
            </h2>
            <ul className="space-y-3.5 text-gray-700 text-base">
              {clubInfo.membershipBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Membership Fees */}
          <div className="md:col-span-2 bg-primary-surface border-t md:border-t-0 md:border-l border-gray-200 p-6 md:p-8 flex flex-col justify-center">
            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              Jahresbeitrag
            </div>
            <div className="divide-y divide-gray-200">
              <div className="pb-4 flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-gray-900">Studierende</div>
                  <div className="text-xs text-gray-500">Aktuell Immatrikulierte</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-3xl font-extrabold text-primary">
                    {clubInfo.membershipFees.students}
                  </span>{" "}
                  <span className="text-sm text-gray-500">/ Jahr</span>
                </div>
              </div>

              <div className="pt-4 flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-gray-900">Alumni</div>
                  <div className="text-xs text-gray-500">Absolventen</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-3xl font-extrabold text-primary">
                    {clubInfo.membershipFees.alumni}
                  </span>{" "}
                  <span className="text-sm text-gray-500">/ Jahr</span>
                </div>
              </div>
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
