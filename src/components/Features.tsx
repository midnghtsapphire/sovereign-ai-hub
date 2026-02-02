import { Shield, Cpu, Sparkles, Lock, Rocket, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Your prompts, your data, your business. Nothing leaves your device. Ever.",
    accent: "primary",
  },
  {
    icon: Cpu,
    title: "Local GPU Power",
    description: "Harness your RTX/M-series GPU. Run 70B parameter models on consumer hardware.",
    accent: "accent",
  },
  {
    icon: Sparkles,
    title: "Abliterated Models",
    description: "Access models with refusal mechanisms surgically removed. No more 'I cannot help with that.'",
    accent: "primary",
  },
  {
    icon: Lock,
    title: "No Accounts Required",
    description: "Download, run, done. No sign-ups, no API keys, no monthly subscriptions.",
    accent: "accent",
  },
  {
    icon: Rocket,
    title: "One-Click Setup",
    description: "Auto-downloads and configures models. From zero to generating in under 5 minutes.",
    accent: "primary",
  },
  {
    icon: Globe,
    title: "Works Offline",
    description: "Full functionality with zero internet. Perfect for air-gapped environments.",
    accent: "accent",
  },
];

const Features = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-semibold mb-4">Why Sovereign AI</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI That <span className="text-gradient-primary">Answers to You</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Mainstream AI censors 18% of prompts. We believe you deserve AI that works for you, not corporate content policies.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border card-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl mb-6 ${
                feature.accent === 'primary' 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-accent/10 text-accent'
              }`}>
                <feature.icon className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover gradient */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                feature.accent === 'primary'
                  ? 'bg-gradient-to-br from-primary/5 to-transparent'
                  : 'bg-gradient-to-br from-accent/5 to-transparent'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
