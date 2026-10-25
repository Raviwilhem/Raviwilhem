"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/config";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/process", label: "Process" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-ivory/90 backdrop-blur-md border-b border-navy/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-heading font-semibold text-xl tracking-tight text-navy leading-none">
            {siteConfig.name}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-sage mt-1">
            Quantity Surveyor
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-copper",
                pathname === link.href ? "text-copper" : "text-graphite"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="default">
            <Link href="/contact">Discuss a Project</Link>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-ivory border-b border-navy/10 px-4 py-6 flex flex-col gap-4 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium py-2 border-b border-navy/5",
                pathname === link.href ? "text-copper" : "text-navy"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Discuss a Project
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
