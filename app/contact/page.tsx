import { siteConfig } from "@/data/config";

export default function ContactPage() {
  return (
    <div className="pt-10 pb-24 bg-ivory min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-medium text-navy mb-6">Contact</h1>
          <div className="h-px w-full bg-navy/10" />
        </div>

        <div className="bg-white p-8 md:p-16 border border-navy/5 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-6 leading-tight">
            Let's bring greater clarity to your next project.
          </h2>
          <p className="text-graphite/80 text-lg mb-16 leading-relaxed max-w-2xl">
            Whether you require early-stage cost advice, tender documentation, or full commercial management, I am available to discuss how I can support your objectives. Please reach out via email to initiate a conversation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            <div className="md:col-span-2">
              <h3 className="text-sm font-medium uppercase tracking-wider text-sage mb-3">Direct Email</h3>
              <a href={`mailto:${siteConfig.email}`} className="text-2xl md:text-3xl font-heading text-copper hover:text-navy transition-colors break-all">
                {siteConfig.email}
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-sage mb-3">Location</h3>
              <p className="text-xl font-heading text-navy mb-1">
                {siteConfig.location}
              </p>
              <p className="text-graphite/80 text-sm">Available for international engagements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
