import { siteConfig } from "@/data/config";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return siteConfig.projects.map((p) => ({
    id: p.id,
  }));
}

export const instant = false;

export default async function ProjectCaseStudy(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = siteConfig.projects.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <article className="pt-10 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/projects" className="inline-flex items-center text-sm font-medium text-sage hover:text-copper mb-12 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
        
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-copper uppercase tracking-wider">{project.type}</span>
            <span className="w-1 h-1 rounded-full bg-sage/50" />
            <span className="text-sm text-sage">{project.location}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-navy leading-tight mb-8">
            {project.title}
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
          {/* Metadata Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bg-white border border-navy/5 p-8">
                <h3 className="font-heading text-xl font-medium text-navy mb-6">Project Details</h3>
                <dl className="space-y-4 text-sm">
                  <div className="border-b border-navy/5 pb-4">
                    <dt className="text-sage mb-1">Role</dt>
                    <dd className="font-medium text-navy">{project.role}</dd>
                  </div>
                  <div className="border-b border-navy/5 pb-4">
                    <dt className="text-sage mb-1">Sector</dt>
                    <dd className="font-medium text-navy">{project.type}</dd>
                  </div>
                  <div className="border-b border-navy/5 pb-4">
                    <dt className="text-sage mb-1">Location</dt>
                    <dd className="font-medium text-navy">{project.location}</dd>
                  </div>
                  <div className="pb-2">
                    <dt className="text-sage mb-1">Year</dt>
                    <dd className="font-medium text-navy">{project.year}</dd>
                  </div>
                </dl>
              </div>
              
              <div className="mt-8 p-8 bg-navy text-ivory">
                <h4 className="font-heading font-medium text-lg mb-4">Have a similar project?</h4>
                <p className="text-sage text-sm mb-6">Discuss your commercial requirements and explore how I can support your delivery.</p>
                <Button asChild variant="copper" className="w-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-p:text-graphite/80 prose-headings:font-heading prose-headings:font-medium prose-headings:text-navy max-w-none">
              <h2 className="text-3xl mt-0">Project Overview</h2>
              <p className="lead text-xl text-navy/80 font-medium">
                {project.summary}
              </p>
              
              <h3>The Commercial Challenge</h3>
              <p>
                {project.challenge}
              </p>
              
              <h3>Methodology & Approach</h3>
              <ul>
                {project.methodology.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3>Deliverables Produced</h3>
              <p>
                {project.deliverables}
              </p>
              
              <h3>Outcome</h3>
              <p>
                {project.outcome}
              </p>
            </div>
            
            <div className="mt-16 pt-16 border-t border-navy/10 flex justify-between items-center">
              <span className="text-sm font-medium text-sage uppercase tracking-wider">End of Case Study</span>
              <Button asChild variant="outline">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
