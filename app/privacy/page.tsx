import { siteConfig } from "@/data/config";

export default function PrivacyPage() {
  return (
    <div className="pt-10 pb-24 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-medium text-navy mb-6">Privacy Policy</h1>
          <div className="h-px w-full bg-navy/10" />
        </div>

        <div className="prose prose-lg prose-p:text-graphite/80 prose-headings:font-heading prose-headings:font-medium prose-headings:text-navy max-w-none">
          <p>Last updated: October 9, 2026</p>
          
          <h2>1. Introduction</h2>
          <p>
            {siteConfig.name} ("I", "me", or "my") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed when you visit this website.
          </p>

          <h2>2. Information Collection</h2>
          <p>
            When you use the contact form on this website, the following information may be collected:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Company or organisation (optional)</li>
            <li>Project location and details</li>
          </ul>

          <h2>3. Use of Information</h2>
          <p>
            Any information collected is used solely for the purpose of responding to your enquiries, providing the requested professional services, and communicating with you regarding your project. Your data is not sold, rented, or shared with third parties for marketing purposes.
          </p>

          <h2>4. Data Storage and Security</h2>
          <p>
            Appropriate security measures are implemented to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. 
          </p>

          <h2>5. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy or how your data is handled, please contact me at: <strong>{siteConfig.email}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
