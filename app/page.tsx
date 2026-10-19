import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { BoardSection } from "@/components/BoardSection";
import { clubInfo } from "@/content/club";
import { upcomingEventBanner } from "@/content/events";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-10 pb-8 md:pt-14 md:pb-12">
        <div className="site-container max-w-3xl flex flex-col items-center">
          {/* Main Logo Banner (full width of the text column) */}
          <div className="relative w-full aspect-[1478/442] mb-8">
            <Image
              src={clubInfo.heroLogoUrl}
              alt={clubInfo.name}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Intro Text */}
          <div className="w-full space-y-4 text-left text-gray-800 text-base md:text-lg">
            <p>
              Der Elitestudiengang Software Engineering verbindet uns. Für die meisten von uns waren diese
              Jahre eine Zeit, die uns geprägt hat und das weit über das Fachliche hinaus.
            </p>
            <p>
              Als Alumni Verein kümmern wir uns darum, diese Verbindungen zu pflegen und auszubauen. Dazu
              veranstalten wir mindestens einmal im Jahr ein Alumni Treffen. Natürlich sind auch aktuell
              Studierende dazu eingeladen.
            </p>
          </div>
        </div>
      </section>

      {/* Banner 1: Next Alumni Meeting */}
      <CtaBanner
        title={upcomingEventBanner.title}
        buttonText={upcomingEventBanner.buttonText}
        buttonHref={upcomingEventBanner.buttonHref}
      />

      {/* Section: Der Verein */}
      <section className="py-10 md:py-14">
        <div className="site-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-headline">
            Der Verein
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
            Der Zweck des Vereins ist die Förderung der Berufsbildung einschließlich der Studentenhilfe.{" "}
            <br className="hidden sm:inline" />
            Insbesondere verfolgt der Verein den Zweck, die{" "}
            <strong>
              Verbindung zwischen den ehemaligen Studierenden und gegenwärtig Studierenden des
              Elitestudiengangs Software Engineering aufrechtzuerhalten und zu vertiefen
            </strong>
            .
          </p>
          <div>
            <Link href="/verein/satzung/" className="btn-primary">
              Satzung lesen
            </Link>
          </div>
        </div>
      </section>

      {/* Banner 2: Membership CTA */}
      <CtaBanner
        title="Absolvent oder Student?"
        buttonText="Mitglied werden"
        buttonHref="/verein/mitgliedschaft/"
      />

      {/* Section: Deutschlandstipendium Förderer */}
      <section className="py-10 md:py-14 text-center">
        <div className="site-container max-w-3xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-headline">
            Wir sind Förderer!
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-8 max-w-2xl">
            Wir dürfen stolz verkünden, dass unser Verein &quot;{clubInfo.name}&quot; ein{" "}
            <strong>Deutschlandstipendium</strong> an der {clubInfo.stipendium.university} stellen
            wird (Förderzeitraum {clubInfo.stipendium.period}).
          </p>

          <div className="relative w-full max-w-xl aspect-[3246/1984] overflow-hidden shadow-sm">
            <Image
              src={clubInfo.stipendium.image}
              alt="Deutschlandstipendium Urkunde und Umschlag"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section: Current Board */}
      <BoardSection />
    </div>
  );
}
