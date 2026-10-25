import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-10 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-medium text-navy mb-6">About</h1>
          <div className="h-px w-full bg-navy/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Portrait/Image Column */}
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] bg-navy/5 relative overflow-hidden mb-8">
              <img 
                src="/images/about-photo.jpg" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="bg-navy text-ivory p-8">
              <h3 className="font-heading text-xl font-medium mb-6">Professional Details</h3>
              <ul className="space-y-4 text-sm text-sage">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Name</span>
                  <span className="text-white text-right">{siteConfig.name}</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Role</span>
                  <span className="text-white text-right">Independent QS</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Location</span>
                  <span className="text-white text-right">{siteConfig.location}</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Experience</span>
                  <span className="text-white text-right">{siteConfig.experienceYears}+ Years</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-8 leading-tight">
              A rigorous approach to construction cost management.
            </h2>
            
            <div className="prose prose-lg prose-p:text-graphite/80 prose-p:leading-relaxed max-w-none mb-12">
              <p>
                As a Chartered Quantity Surveyor with over a decade of international experience, I provide independent, precise, and commercially astute advice to stakeholders across the construction industry.
              </p>
              <p>
                My background spans complex commercial developments, luxury residential projects, and high-tech industrial facilities across multiple continents. This diverse exposure has fostered a highly adaptable approach to cost planning, procurement, and commercial management, ensuring that every project is meticulously controlled from inception to final account.
              </p>
              <p>
                I believe that effective quantity surveying is not just about measurement; it is about providing clarity, mitigating risk, and enabling informed decision-making. By integrating deeply with design teams and contractors, I help align architectural vision with commercial reality.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-heading font-medium text-navy mb-6">Working Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Detail-driven measurement",
                  "Transparent assumptions",
                  "Clear and structured reporting",
                  "Practical commercial thinking",
                  "Responsive communication",
                  "Adaptable collaboration"
                ].map((principle, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-copper flex-shrink-0" />
                    <span className="text-graphite font-medium">{principle}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-medium text-navy mb-6">Qualifications</h3>
              <ul className="list-disc pl-5 space-y-2 text-graphite/80">
                {siteConfig.qualifications.map((qual, idx) => (
                  <li key={idx}>{qual}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-16 pt-8 border-t border-navy/10">
              <Button asChild className="bg-copper hover:bg-copper/90 text-white">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
