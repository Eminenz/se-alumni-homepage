import React from "react";
import { Download } from "lucide-react";
import { satzungMeta, satzungSections } from "@/content/satzung";

export const metadata = {
  title: "Satzung | Elitestudiengang Software Engineering Alumni e.V.",
  description: "Die vollständige Vereinssatzung des Elitestudiengang Software Engineering Alumni e.V.",
};

export default function SatzungPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="site-container max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
              Vereinssatzung
            </h1>
            <p className="text-gray-500 text-sm mt-1">Stand: {satzungMeta.stand}</p>
          </div>
          <a
            href={satzungMeta.pdfUrl}
            download
            className="btn-primary inline-flex items-center space-x-2 text-sm py-2.5 px-5 flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Satzung als PDF</span>
          </a>
        </div>

        {/* Quick Nav Pills */}
        <div className="bg-gray-50 rounded-lg p-4 mb-10 border border-gray-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Schnellnavigation
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {satzungSections.map((sec) => (
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

        {/* Paragraphs */}
        <div className="space-y-10">
          {satzungSections.map((sec) => (
            <article key={sec.id} id={sec.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-primary font-headline mb-3 border-b pb-2">
                {sec.title}
              </h2>
              <div className="text-gray-800 leading-relaxed text-base">
                {sec.blocks.map((block, idx) => {
                  if (block.type === "p") {
                    return (
                      <p key={idx} className="mb-3 last:mb-0">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-2 my-3">
                        {block.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "sublist") {
                    return (
                      <div key={idx} className="my-3">
                        <p className="mb-2">{block.intro}</p>
                        <dl className="pl-4 space-y-2">
                          {block.items.map((item) => (
                            <div key={item.label} className="flex gap-2">
                              <dt className="font-semibold text-primary shrink-0">{item.label}</dt>
                              <dd>{item.text}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
