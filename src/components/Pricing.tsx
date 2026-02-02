import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Building } from "lucide-react";

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "For personal use and exploration",
    features: [
      "Run unlimited local models",
      "Access to 20+ uncensored models",
      "Basic chat interface",
      "Community support",
      "Works 100% offline",
    ],
    cta: "Download Free",
    variant: "heroOutline" as const,
    popular: false,
  },
  {
    name: "Pro",
    icon: Crown,
    price: "$29",
    period: "/month",
    description: "For creators and marketers",
    features: [
      "Everything in Free",
      "Auto-Campaign Generator",
      "50+ premium models",
      "Affiliate link injection",
      "Batch content generation",
      "Priority model updates",
      "Discord support",
    ],
    cta: "Start Pro Trial",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building,
    price: "Custom",
    period: "",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Cloud GPU rental integration",
      "Team collaboration",
      "Custom model fine-tuning",
      "API access",
      "Dedicated support",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    variant: "heroOutline" as const,
    popular: false,
  },
];

const Pricing = () => {
  const handlePlanClick = (planName: string) => {
    if (planName === "Free" || planName === "Pro") {
      const heroSection = document.getElementById("hero");
      heroSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open("mailto:sales@sovereignai.nexus", "_blank");
    }
  };

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-semibold mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient-primary">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            No hidden fees. No per-token charges. Run as much as your hardware allows.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary/50 scale-105 shadow-2xl"
                  : "bg-card border border-border hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  plan.popular ? "bg-primary/20" : "bg-secondary"
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.variant}
                size="lg"
                className="w-full"
                onClick={() => handlePlanClick(plan.name)}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <p className="text-center text-muted-foreground mt-12">
          💰 30-day money-back guarantee on Pro. No questions asked.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
