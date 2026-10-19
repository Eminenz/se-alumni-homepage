import React from "react";
import Image from "next/image";
import { boardMembers } from "@/content/board";

export function BoardSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="site-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary font-headline text-left">
          Der aktuelle Vorstand
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member) => (
            <div key={member.name} className="flex flex-col bg-white">
              {/* Photo */}
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <p className="font-bold text-gray-900 text-lg mb-0.5">{member.name}</p>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center space-x-2 mt-auto">
                <a
                  href={member.email}
                  className="btn-primary text-xs py-1.5 px-4 flex-1 text-center"
                >
                  Email
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs py-1.5 px-4 flex-1 text-center"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
