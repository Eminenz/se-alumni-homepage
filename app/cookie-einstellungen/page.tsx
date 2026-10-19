import React from "react";
import { clubInfo } from "@/content/club";

export const metadata = {
  title: `Cookie-Einstellungen | ${clubInfo.name}`,
  description: `Informationen zu Cookies auf ${clubInfo.domain}`,
};

export default function CookiePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="site-container max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline mb-8 pb-4 border-b">
          Cookie-Einstellungen
        </h1>

        <div className="space-y-6 text-gray-800 leading-relaxed text-base">
          <p>
            Die Website des <strong>{clubInfo.name}</strong> ({clubInfo.domain}) wird als rein
            statische Website betrieben und setzt{" "}
            <strong>keine Tracking-, Werbe- oder Marketing-Cookies</strong> ein.
          </p>
          <div className="bg-green-50 border border-green-200 text-green-900 p-4 rounded-md">
            <p className="font-semibold mb-1">Privatsphäre geschützt</p>
            <p className="text-sm">
              Sie müssen keine Cookies akzeptieren oder deaktivieren. Ihr Besuch auf unserer Website
              wird nicht verfolgt oder für Werbezwecke analysiert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
