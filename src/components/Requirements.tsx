import { Cpu, HardDrive, Monitor, Zap, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const specs = [
  {
    tier: "Minimum",
    badge: "7B-13B Models",
    description: "Run smaller, fast models for everyday tasks",
    icon: Cpu,
    color: "text-muted-foreground",
    borderColor: "border-border",
    specs: [
      { label: "GPU VRAM", value: "8GB", icon: Monitor },
      { label: "System RAM", value: "16GB", icon: HardDrive },
      { label: "Storage", value: "20GB free", icon: HardDrive },
    ],
    examples: ["Mistral 7B", "Llama 3 8B", "Dolphin 7B"],
  },
  {
    tier: "Recommended",
    badge: "30B-70B Models",
    description: "Run powerful models rivaling GPT-4",
    icon: Zap,
    color: "text-primary",
    borderColor: "border-primary/50",
    highlight: true,
    specs: [
      { label: "GPU VRAM", value: "24GB+", icon: Monitor },
      { label: "System RAM", value: "32GB+", icon: HardDrive },
      { label: "Storage", value: "100GB free", icon: HardDrive },
    ],
    examples: ["Llama 3 70B", "Mixtral 8x22B", "Dolphin 70B"],
  },
];

const gpuExamples = [
  { name: "RTX 3080/4080", vram: "10-16GB", tier: "Good" },
  { name: "RTX 3090/4090", vram: "24GB", tier: "Best" },
  { name: "Mac M2/M3 Pro", vram: "18-36GB", tier: "Great" },
  { name: "Mac M2/M3 Max", vram: "32-128GB", tier: "Best" },
];

const Requirements = () => {
  return (
    <section id="requirements" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-4">Hardware Requirements</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What You'll <span className="text-gradient-primary">Need</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Running AI locally requires a decent GPU. Here's what to expect based on your hardware.
          </p>
        </div>

        {/* Spec Tiers */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {specs.map((spec) => (
            <Card
              key={spec.tier}
              className={`relative overflow-hidden transition-all duration-300 ${
                spec.highlight
                  ? "border-primary/50 bg-gradient-to-b from-primary/5 to-transparent"
                  : "border-border bg-card"
              }`}
            >
              {spec.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant={spec.highlight ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {spec.badge}
                  </Badge>
                  <spec.icon className={`w-6 h-6 ${spec.color}`} />
                </div>
                <CardTitle className="text-2xl">{spec.tier}</CardTitle>
                <p className="text-muted-foreground text-sm">{spec.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Specs List */}
                <div className="space-y-3">
                  {spec.specs.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                    >
                      <span className="text-muted-foreground text-sm">{item.label}</span>
                      <span className="font-semibold text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Compatible Models */}
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Compatible Models:</p>
                  <div className="flex flex-wrap gap-2">
                    {spec.examples.map((model) => (
                      <span
                        key={model}
                        className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GPU Reference Table */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-center mb-6">Popular GPUs at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gpuExamples.map((gpu) => (
              <div
                key={gpu.name}
                className="p-4 rounded-xl bg-secondary/30 border border-border text-center"
              >
                <p className="font-medium text-sm mb-1">{gpu.name}</p>
                <p className="text-xs text-muted-foreground mb-2">{gpu.vram} VRAM</p>
                <Badge
                  variant={gpu.tier === "Best" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {gpu.tier}
                </Badge>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            <Check className="inline w-4 h-4 text-primary mr-1" />
            The app auto-detects your hardware and recommends compatible models
          </p>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
