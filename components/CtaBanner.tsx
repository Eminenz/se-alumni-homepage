import React from "react";
import Link from "next/link";

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  contactEmail?: string;
  buttonText: string;
  buttonHref: string;
}

export function CtaBanner({
  title,
  subtitle,
  contactEmail,
  buttonText,
  buttonHref,
}: CtaBannerProps) {
  return (
    <section className="bg-navy text-white py-8 md:py-10 my-10 md:my-14 w-full">
      <div className="site-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left max-w-2xl">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white m-0 font-headline">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 text-sm md:text-base text-gray-200 leading-relaxed">
              {subtitle}
              {contactEmail && (
                <>
                  {" "}
                  Bei Interesse meldet Euch gerne mit Thema, kurzer Beschreibung und gewünschtem
                  Zeitrahmen unter{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="underline text-white hover:text-primary-light transition-colors"
                  >
                    {contactEmail}
                  </a>
                  .
                </>
              )}
            </p>
          )}
        </div>
        <Link href={buttonHref} className="btn-banner flex-shrink-0">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
