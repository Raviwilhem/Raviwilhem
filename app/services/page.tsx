import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-10 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-medium text-navy mb-6">Services</h1>
          <div className="h-px w-full bg-navy/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-3xl font-heading font-medium text-navy mb-6 leading-tight">
                Comprehensive cost consultancy tailored to your project.
              </h2>
              <p className="text-graphite/80 text-lg mb-8">
                I offer an integrated suite of commercial services designed to protect your financial interests throughout the construction lifecycle.
              </p>
              <Button asChild className="bg-navy text-white hover:bg-navy/90">
                <Link href="/contact">Discuss a Project</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {siteConfig.services.map((service, idx) => (
              <div 
                key={service.id} 
                className="group border border-navy/10 bg-white p-8 md:p-10 hover:border-copper transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="text-copper font-mono text-lg shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-medium text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-graphite/80 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to action section */}
      <section className="mt-32 py-24 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-white mb-8">
            Need a customised service package?
          </h2>
          <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
            <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
