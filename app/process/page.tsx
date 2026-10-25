import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProcessPage() {
  return (
    <div className="pt-10 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-medium text-navy mb-6">Process</h1>
          <div className="h-px w-full bg-navy/10" />
        </div>

        <div className="max-w-3xl mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy leading-tight mb-6">
            A structured, methodical approach to commercial management.
          </h2>
          <p className="text-lg text-graphite/80 leading-relaxed">
            Every engagement follows a clear methodology designed to maximise transparency, reduce risk, and provide stakeholders with actionable financial clarity at every stage of the project.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-px bg-navy/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {siteConfig.process.map((step) => (
              <div key={step.id} className="relative z-10">
                <div className="w-16 h-16 bg-white border border-navy/10 flex items-center justify-center text-xl font-heading text-copper mb-8 shadow-sm">
                  {step.id}
                </div>
                <h3 className="text-2xl font-heading font-medium text-navy mb-4">{step.title}</h3>
                <p className="text-graphite/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-32 p-12 bg-navy text-center">
          <h2 className="text-3xl font-heading font-medium text-white mb-6">Ready to initiate the process?</h2>
          <p className="text-sage max-w-xl mx-auto mb-8">
            Contact me with your initial project details to schedule a discovery conversation.
          </p>
          <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
            <Link href="/contact">Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
