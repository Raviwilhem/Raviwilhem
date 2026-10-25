import Link from "next/link";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Building2, TrendingUp, ShieldCheck } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-navy text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent z-10" />
          <Image 
            src="/images/hero_abstract.jpg" 
            alt="Abstract architectural lines" 
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20 pb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-copper" />
              <span className="text-sage uppercase tracking-[0.2em] text-sm font-semibold">
                Independent Quantity Surveyor & Commercial Manager
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-medium leading-[1.1] tracking-tight mb-8">
              Protecting Your Margins.<br />
              <span className="text-ivory/80">Delivering Commercial Certainty.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-sage max-w-2xl mb-8 leading-relaxed">
              Providing rigorous cost planning, precision measurement, and proactive change management. I help developers, architects, and main contractors mitigate risk and achieve real-time cost control across complex commercial, residential, and industrial portfolios.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-12 text-sm font-medium text-white/90">
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-copper" /> 53 Projects Managed</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-copper" /> 98% Final Account Agreement Rate</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-copper" /> Zero Unresolved Claims</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white border-0">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-navy">
                <Link href="/projects">Explore Selected Projects</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-sage/70">Scroll</span>
          <div className="w-px h-12 bg-sage/30 relative overflow-hidden">
            <div className="w-full h-1/2 bg-copper absolute top-0 animate-[shimmer_2s_infinite]" />
          </div>
        </div>
      </section>

      {/* 2. Credibility Strip */}
      <section className="bg-ivory py-16 border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-navy/10">
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-3xl font-heading font-semibold text-navy mb-2">{siteConfig.experienceYears}+</span>
              <span className="text-sm text-sage uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-3xl font-heading font-semibold text-navy mb-2">{siteConfig.countries.length}</span>
              <span className="text-sm text-sage uppercase tracking-wider">Countries</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-3xl font-heading font-semibold text-navy mb-2">RICS</span>
              <span className="text-sm text-sage uppercase tracking-wider">Chartered Professional</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-3xl font-heading font-semibold text-navy mb-2">100%</span>
              <span className="text-sm text-sage uppercase tracking-wider">Independent Advice</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Snippet */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] bg-navy/5 overflow-hidden">
              <img 
                src="/images/about-photo.jpg" 
                alt="Quantity Surveying Draft" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 bg-navy text-white p-6 md:p-8 max-w-[80%]">
                <p className="font-heading text-xl md:text-2xl font-medium leading-tight">
                  “A practical understanding of construction combined with commercial precision.”
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-heading font-medium text-navy mb-8 leading-tight">
                Commercial precision. <br />
                A practical understanding of construction.
              </h2>
              <div className="space-y-6 text-lg text-graphite/80 leading-relaxed mb-10">
                <p>
                  As an independent Quantity Surveyor, I help clients navigate the financial complexities of the construction lifecycle. From early-stage feasibility to final account settlement, my focus is on delivering transparent, accurate, and commercially intelligent advice.
                </p>
                <p>
                  My approach is grounded in a deep understanding of built environments, structural requirements, and procurement strategies, allowing me to provide actionable cost plans rather than simple spreadsheets.
                </p>
              </div>
              <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                <Link href="/about">
                  More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Snippet */}
      <section className="py-24 bg-navy text-ivory relative overflow-hidden">
        {/* Background Blueprint Image */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen">
          <img 
            src="/images/blueprint_edited.jpg" 
            alt="Technical Blueprint" 
            className="w-full h-full object-cover object-center grayscale"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-heading font-medium text-white mb-6">Expertise & Services</h2>
              <p className="text-lg text-sage">
                Comprehensive cost consultancy tailored to the specific needs of property developers, architectural practices, and private clients.
              </p>
            </div>
            <Button asChild variant="link" className="text-copper hover:text-white pb-2 px-0">
              <Link href="/services" className="flex items-center">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {siteConfig.services.slice(0, 3).map((service, index) => (
              <div key={service.id} className="group cursor-pointer border-t border-white/20 pt-8 transition-colors hover:border-copper bg-navy/40 p-6 rounded-sm backdrop-blur-sm">
                <div className="text-copper font-mono text-sm mb-4">0{index + 1}</div>
                <h3 className="text-2xl font-heading font-medium text-white mb-4 group-hover:text-copper transition-colors">
                  {service.title}
                </h3>
                <p className="text-sage leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. International Experience Strip */}
      <section className="py-16 bg-copper text-white overflow-hidden flex flex-col items-center">
        <p className="text-sm uppercase tracking-widest font-semibold mb-8 text-white/80">International Experience</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 px-4">
          {siteConfig.countries.map(country => (
            <div key={country} className="flex items-center gap-2">
              <MapPin className="h-4 w-4 opacity-50" />
              <span className="text-lg md:text-xl font-heading font-medium">{country}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="py-32 bg-ivory text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy mb-8">
            Let's bring greater clarity to your next project.
          </h2>
          <p className="text-xl text-graphite/80 mb-12">
            Available for selected projects worldwide. Reach out to discuss your specific requirements and commercial objectives.
          </p>
          <Button asChild size="lg" className="bg-navy hover:bg-navy/90 text-white">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
