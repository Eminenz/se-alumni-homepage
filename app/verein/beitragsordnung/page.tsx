import React from "react";
import { Download } from "lucide-react";
import {
  beitragsordnungMeta,
  beitragsKlassen,
  beitragsSections,
} from "@/content/beitragsordnung";

export const metadata = {
  title: "Beitrags- und Kassenordnung | Elitestudiengang Software Engineering Alumni e.V.",
  description: "Beitrags- und Kassenordnung des Elitestudiengang Software Engineering Alumni e.V.",
};

export default function BeitragsordnungPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="site-container max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
              Beitrags- und Kassenordnung
            </h1>
            <p className="text-gray-700 text-base mt-1">{beitragsordnungMeta.subtitle}</p>
            <p className="text-gray-500 text-sm mt-1">Stand: {beitragsordnungMeta.stand}</p>
          </div>
          <a
            href={beitragsordnungMeta.pdfUrl}
            download
            className="btn-primary inline-flex items-center space-x-2 text-sm py-2.5 px-5 flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Beitragsordnung als PDF</span>
          </a>
        </div>

        {/* Quick Nav Pills */}
        <div className="bg-gray-50 rounded-lg p-4 mb-10 border border-gray-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Schnellnavigation
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {beitragsSections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="px-2.5 py-1 bg-white border border-gray-200 rounded text-gray-700 hover:text-primary hover:border-primary transition-colors"
              >
                <span className="font-semibold">{sec.paragraph}</span> {sec.shortTitle}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-8 text-gray-800 leading-relaxed text-base">
          {beitragsSections.map((sec) => (
            <section key={sec.id} id={sec.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-primary font-headline mb-3 border-b pb-2">
                {sec.title}
              </h2>

              {sec.paragraphs &&
                sec.paragraphs.map((p, idx) => (
                  <p key={idx} className="mb-3 last:mb-0">
                    {p}
                  </p>
                ))}

              {sec.hasTable && (
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="p-3 font-semibold text-gray-900">Klasse</th>
                        <th className="p-3 font-semibold text-gray-900">Mitgliedsform</th>
                        <th className="p-3 font-semibold text-gray-900">Beitragshöhe (pro Jahr)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {beitragsKlassen.map((row, idx) => (
                        <tr key={row.klasse} className={idx % 2 === 1 ? "bg-gray-50/50" : ""}>
                          <td className="p-3 font-mono">{row.klasse}</td>
                          <td className="p-3">{row.mitgliedsform}</td>
                          <td
                            className={`p-3 ${
                              row.highlight ? "font-semibold text-primary" : ""
                            }`}
                          >
                            {row.beitrag}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {sec.bullets && sec.bullets.length > 0 && (
                <ol className="list-decimal pl-5 space-y-2 text-sm mt-4 marker:font-semibold marker:text-primary">
                  {sec.bullets.map((bullet, idx) => (
                    <li key={idx} className="pl-1">
                      {bullet}
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
