import { siteConfig } from "@/data/config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="pt-10 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-medium text-navy mb-6">Selected Projects</h1>
          <div className="h-px w-full bg-navy/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {siteConfig.projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="group block bg-white p-8 border border-navy/5 hover:border-copper transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-mono text-copper uppercase tracking-wider">
                  {project.type}
                </span>
                <span className="text-sm text-sage">{project.year}</span>
              </div>
              <h2 className="text-2xl font-heading font-medium text-navy mb-3 group-hover:text-copper transition-colors">
                {project.title}
              </h2>
              <div className="flex items-center text-sm text-sage mb-4 gap-2">
                <span>{project.location}</span>
                <span className="w-1 h-1 rounded-full bg-sage/50" />
                <span>{project.role}</span>
              </div>
              <p className="text-graphite/80 leading-relaxed mb-6">
                {project.summary}
              </p>
              <div className="inline-flex items-center text-navy font-medium group-hover:text-copper transition-colors">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
