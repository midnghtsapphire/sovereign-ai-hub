import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Brain, Code } from "lucide-react";

const models = [
  {
    name: "Dolphin-Llama3",
    params: "70B",
    size: "40GB",
    icon: Brain,
    tags: ["Uncensored", "General Purpose"],
    description: "The flagship uncensored model. Exceptional at creative writing, coding, and unrestricted assistance.",
    vram: "24GB+ VRAM",
    featured: true,
  },
  {
    name: "Llama-3-Abliterated",
    params: "8B",
    size: "4.7GB",
    icon: Zap,
    tags: ["Fast", "Abliterated"],
    description: "Lightweight and blazing fast. Perfect for real-time generation on consumer GPUs.",
    vram: "8GB+ VRAM",
    featured: false,
  },
  {
    name: "WizardLM-Uncensored",
    params: "13B",
    size: "7.4GB",
    icon: Code,
    tags: ["Coding", "Technical"],
    description: "Optimized for code generation and technical documentation. No refusals on security topics.",
    vram: "12GB+ VRAM",
    featured: false,
  },
  {
    name: "NeuralDaredevil",
    params: "70B",
    size: "38GB",
    icon: Cpu,
    tags: ["Roleplay", "Creative"],
    description: "Unmatched creative freedom. Ideal for fiction, scenarios, and unrestricted roleplay.",
    vram: "24GB+ VRAM",
    featured: false,
  },
];

const Models = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-semibold mb-4">Model Library</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Curated <span className="text-gradient-primary">Uncensored Models</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Pre-configured abliterated models. One click to download, optimized for your hardware.
          </p>
        </div>
        
        {/* Models Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {models.map((model) => (
            <div
              key={model.name}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 ${
                model.featured
                  ? 'bg-gradient-to-br from-primary/10 to-card border-primary/30 card-glow'
                  : 'bg-card border-border hover:border-primary/30'
              }`}
            >
              {/* Featured badge */}
              {model.featured && (
                <div className="absolute -top-3 left-8">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary">
                    <model.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{model.name}</h3>
                    <p className="text-muted-foreground text-sm">{model.params} parameters</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-foreground font-mono">{model.size}</p>
                  <p className="text-muted-foreground text-xs">{model.vram}</p>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {model.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-border text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground">
                {model.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <p className="text-center text-muted-foreground mt-12">
          50+ models available. <span className="text-primary cursor-pointer hover:underline">Browse full library →</span>
        </p>
      </div>
    </section>
  );
};

export default Models;
