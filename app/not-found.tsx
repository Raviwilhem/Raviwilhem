import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-ivory text-center px-4">
      <div className="text-copper font-mono text-sm uppercase tracking-widest mb-4">Error 404</div>
      <h1 className="text-5xl md:text-7xl font-heading font-medium text-navy mb-6">Page Not Found</h1>
      <p className="text-xl text-graphite/80 max-w-lg mb-10">
        The page you are looking for has been moved, removed, renamed, or might never have existed.
      </p>
      <Button asChild size="lg" className="bg-navy hover:bg-navy/90 text-white">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
