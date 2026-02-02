import { Button } from "@/components/ui/button";
import { Zap, Shield, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
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
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              <Zap className="w-5 h-5" />
              Download for Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Documentation
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-border">
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
