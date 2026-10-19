import React from "react";
import Link from "next/link";

interface CtaBannerProps {
  title: string;
  buttonText: string;
  buttonHref: string;
}

export function CtaBanner({ title, buttonText, buttonHref }: CtaBannerProps) {
  return (
    <section className="bg-navy text-white py-8 md:py-10 my-10 md:my-14 w-full">
      <div className="site-container flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white text-center md:text-left m-0 font-headline">
          {title}
        </h3>
        <Link href={buttonHref} className="btn-banner flex-shrink-0">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
