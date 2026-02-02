import { Button } from "@/components/ui/button";
import { Shield, Zap, Lock } from "lucide-react";

const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDownload = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-accent/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Privacy-First AI • Runs 100% Local</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Your AI.</span>
            <br />
            <span className="text-gradient-primary">Unfiltered.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Run powerful uncensored LLMs on your device. No data leaves your machine. 
            No corporate gatekeepers. <span className="text-foreground font-medium">Complete sovereignty.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" onClick={scrollToDownload}>
              <Zap className="w-5 h-5" />
              Download Free
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToDemo}>
              See How It Works
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Zero Data Collection</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              <span className="text-sm">End-to-End Local</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm">GPU Accelerated</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
