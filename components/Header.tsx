"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNavItems, headerCta } from "@/content/navigation";
import { clubInfo } from "@/content/club";

export function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isRouteActive = (href?: string) => {
    if (!href) return false;
    const normalizedPathname = pathname.endsWith("/") ? pathname : `${pathname}/`;
    const normalizedHref = href.endsWith("/") ? href : `${href}/`;
    return normalizedPathname === normalizedHref;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="site-container flex items-center justify-between h-20">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center space-x-3 text-decoration-none group">
          <div className="relative w-11 h-11 flex-shrink-0">
            <Image
              src={clubInfo.logoUrl}
              alt="SE Alumni Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-primary font-semibold text-base sm:text-lg leading-tight">
            {clubInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {mainNavItems.map((item) => {
            if (item.children) {
              const hasActiveChild = item.children.some((child) => isRouteActive(child.href));
              return (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    className={`flex items-center font-medium transition-colors py-2 focus:outline-none ${
                      hasActiveChild ? "text-primary" : "text-[#222222] hover:text-primary"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 rounded-md shadow-lg py-2 z-50 animate-fadeIn">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary ${
                            isRouteActive(child.href)
                              ? "text-primary font-semibold bg-primary-subtle"
                              : "text-gray-700"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || "/"}
                className={`font-medium transition-colors ${
                  isRouteActive(item.href)
                    ? "text-primary"
                    : "text-[#222222] hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href={headerCta.href} className="btn-primary">
            {headerCta.label}
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Navigation öffnen"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3">
          {mainNavItems.map((item) =>
            item.children ? (
              <React.Fragment key={item.label}>
                <div className="font-semibold text-gray-900 border-b pb-1">{item.label}</div>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block pl-3 py-1 hover:text-primary ${
                      isRouteActive(child.href) ? "text-primary font-semibold" : "text-gray-700"
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </React.Fragment>
            ) : (
              <div key={item.label} className="border-t pt-2">
                <Link
                  href={item.href || "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 font-medium hover:text-primary ${
                    isRouteActive(item.href) ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            )
          )}
          <div className="pt-2">
            <Link
              href={headerCta.href}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full block text-center"
            >
              {headerCta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
