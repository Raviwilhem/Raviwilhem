import Link from "next/link";
import { siteConfig } from "@/data/config";

export function Footer() {
  const currentYear = 2020;

  return (
    <footer className="bg-navy text-ivory py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-semibold text-white mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sage max-w-md text-sm leading-relaxed mb-6">
              {siteConfig.title}.<br />
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a href={`mailto:${siteConfig.email}`} className="text-sm hover:text-copper transition-colors">
                {siteConfig.email}
              </a>
              <span className="text-sage">|</span>
              <a href={siteConfig.linkedIn} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-copper transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-medium text-white mb-6 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-3 text-sm text-sage">
              <li><Link href="/" className="hover:text-copper transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-copper transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-copper transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-copper transition-colors">Projects</Link></li>
              <li><Link href="/process" className="hover:text-copper transition-colors">Process</Link></li>
              <li><Link href="/contact" className="hover:text-copper transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-white mb-6 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3 text-sm text-sage">
              {siteConfig.services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link href="/services" className="hover:text-copper transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sage">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="opacity-50">•</span>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
