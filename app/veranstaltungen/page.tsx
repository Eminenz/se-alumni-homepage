import React from "react";
import { events, upcomingEventBanner } from "@/content/events";
import { Calendar, MapPin, User, Clock, ExternalLink, Info } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = {
  title: "Veranstaltungen | Elitestudiengang Software Engineering Alumni e.V.",
  description: "Alumni-Treffen und Seminare des Elitestudiengang Software Engineering Alumni e.V.",
};

export default function EventsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="site-container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline mb-4">
          Veranstaltungen
        </h1>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
          Einmal im Jahr veranstalten wir unser großes Alumni-Treffen und schaffen damit den idealen
          Ort, um neue Personen kennenzulernen und alte Kontakte zu pflegen.
        </p>

        {/* Highlighted Upcoming Event Announcement Box */}
        <div className="border-2 border-primary bg-[#f8faff] rounded-lg p-6 mb-12 shadow-sm">
          <div className="flex items-start gap-3">
            <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                Aktuelles / Nächstes Alumni-Treffen
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-primary font-headline mb-2">
                {upcomingEventBanner.title}
              </h2>
              <p className="text-gray-700 text-sm md:text-base">
                {upcomingEventBanner.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* List of Events */}
        <div className="space-y-12">
          {events.map((evt) => (
            <article
              key={evt.year}
              className="border border-gray-200 rounded-lg p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">
                  {evt.title}
                </h2>
                {evt.date && (
                  <div className="flex items-center text-primary font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {evt.date}
                  </div>
                )}
              </div>

              {/* Optional Event Note (e.g., 2020 Online Event) */}
              {evt.note && (
                <div className="flex items-start gap-2.5 bg-gray-50 border border-gray-200 rounded-md p-4 mb-6 text-sm text-gray-700">
                  <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p>{evt.note}</p>
                </div>
              )}

              {/* Location & Keynote Details */}
              {(evt.location || evt.keynote) && (
                <div className="space-y-3 mb-6 text-sm text-gray-700">
                  {evt.location && (
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">{evt.location}</span>
                        {evt.locationDetails && (
                          <span className="block text-gray-600">{evt.locationDetails}</span>
                        )}
                        {evt.locationLink && (
                          <a
                            href={evt.locationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs text-primary underline mt-0.5"
                          >
                            Anfahrt & Location-Infos <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {evt.keynote && (
                    <div className="flex items-start">
                      <User className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900">Keynote: </span>
                        <span>{evt.keynote}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Agenda */}
              {evt.agenda && evt.agenda.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center font-headline">
                    <Clock className="w-4 h-4 mr-1.5 text-primary" /> Agenda
                  </h3>
                  <div className="divide-y divide-gray-100 border border-gray-100 rounded-md bg-gray-50/50">
                    {evt.agenda.map((slot, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row py-2.5 px-4 text-sm gap-1 sm:gap-4"
                      >
                        <span className="font-semibold text-primary sm:w-28 flex-shrink-0">
                          {slot.time}
                        </span>
                        <div className="text-gray-800">
                          <span>{slot.title}</span>
                          {slot.speaker && (
                            <span className="text-gray-600"> — {slot.speaker}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Costs & Organizers */}
              {(evt.costs || evt.organizers || evt.organizerInstitution) && (
                <div className="bg-gray-50 p-4 rounded text-xs text-gray-600 space-y-1">
                  {evt.costs && (
                    <p>
                      <strong>Kosten:</strong> {evt.costs}
                    </p>
                  )}
                  {(evt.organizers || evt.organizerInstitution) && (
                    <p>
                      <strong>Organisation:</strong> {evt.organizers}
                      {evt.organizers && evt.organizerInstitution ? " (" : ""}
                      {evt.organizerInstitution}
                      {evt.organizers && evt.organizerInstitution ? ")" : ""}
                    </p>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <CtaBanner
        title="Du willst beim nächsten Alumni-Treffen dabei sein?"
        buttonText="Jetzt Mitglied werden"
        buttonHref="/verein/mitgliedschaft/"
      />
    </div>
  );
}
