import { Button } from "@/components/ui/button";
import { Zap, Shield, ArrowRight, Apple, Monitor } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CTA = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = (platform: string) => {
    setDownloading(true);
    toast.success(`Starting ${platform} download...`, {
      description: "Your download will begin shortly.",
    });
    setTimeout(() => {
      setDownloading(false);
      toast.info("Demo Mode", {
        description: "This is a demo. Real downloads coming soon!",
      });
    }, 1500);
  };

  const handleDocs = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Free forever. No credit card required.</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Take <span className="text-gradient-primary">Control</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Stop asking permission. Run uncensored AI locally and experience true digital sovereignty.
          </p>
          
          {/* Platform download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => handleDownload("Windows")}
              disabled={downloading}
            >
              <Monitor className="w-5 h-5" />
              Download for Windows
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => handleDownload("macOS")}
              disabled={downloading}
            >
              <Apple className="w-5 h-5" />
              Download for macOS
            </Button>
          </div>

          <button 
            onClick={handleDocs}
            className="text-primary hover:underline text-sm"
          >
            View Documentation →
          </button>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 mt-8 border-t border-border">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground text-sm">Uncensored Models</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</p>
              <p className="text-muted-foreground text-sm">Local & Private</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">0$</p>
              <p className="text-muted-foreground text-sm">No Subscriptions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
