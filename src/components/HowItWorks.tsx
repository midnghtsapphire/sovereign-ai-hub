import { Download, Settings, MessageSquare, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Download,
    title: "Download & Install",
    description: "One-click installer for Windows, Mac, and Linux. Under 100MB.",
  },
  {
    step: "02",
    icon: Settings,
    title: "Choose Your Model",
    description: "Select from Dolphin, Llama-3-Abliterated, WizardLM, and more.",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Start Prompting",
    description: "Chat interface ready immediately. Your GPU handles the rest.",
  },
  {
    step: "04",
    icon: Sparkles,
    title: "Generate Anything",
    description: "Marketing campaigns, code, creative writing—unrestricted output.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-32 bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent font-semibold mb-4">Simple Setup</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Zero to <span className="text-gradient-primary">Unfiltered AI</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            No technical knowledge required. If you can install an app, you can run local AI.
          </p>
        </div>
        
        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-border via-primary/30 to-border" />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-card border border-border mb-6 group hover:border-primary/50 transition-colors">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  {/* Step indicator */}
                  <p className="text-primary font-mono text-sm mb-2">{item.step}</p>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Code Preview */}
        <div className="max-w-3xl mx-auto mt-20">
          <div className="rounded-2xl bg-card border border-border overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">sovereign-ai-nexus</span>
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono text-sm">
              <div className="text-muted-foreground">
                <span className="text-primary">$</span> sovereign-ai pull dolphin-llama3
              </div>
              <div className="text-muted-foreground mt-2">
                <span className="text-accent">✓</span> Model downloaded (4.2GB)
              </div>
              <div className="text-muted-foreground mt-2">
                <span className="text-primary">$</span> sovereign-ai run --model dolphin-llama3
              </div>
              <div className="text-foreground mt-2">
                🚀 Sovereign AI Nexus v1.0 ready on localhost:11434
              </div>
              <div className="text-primary mt-2 animate-pulse">
                █
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
