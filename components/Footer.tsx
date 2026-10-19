import React from "react";
import Link from "next/link";
import { clubInfo } from "@/content/club";
import { footerLegalLinks, footerWiderrufLink } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="w-full">
      {/* Upper Navy Bar */}
      <div className="bg-navy text-white py-12 md:py-16">
        <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-medium text-white leading-relaxed text-base">
              {clubInfo.name}<br />
              {clubInfo.address.careOf}<br />
              {clubInfo.address.street}<br />
              {clubInfo.address.zipCity}
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-medium text-white leading-relaxed text-base">
              IBAN {clubInfo.bank.iban}<br />
              BIC &nbsp;{clubInfo.bank.bic}
            </p>
          </div>
        </div>
      </div>

      {/* Lower White Bar */}
      <div className="bg-white py-6 border-t border-gray-100">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <Link
              href={footerWiderrufLink.href}
              className="btn-outline text-xs sm:text-sm py-1.5 px-4"
            >
              {footerWiderrufLink.label}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
