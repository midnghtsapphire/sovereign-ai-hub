import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, an AI that doesn't lecture me about my own creative writing. I've written 3 novels since switching to local models.",
    author: "Marcus Chen",
    role: "Fiction Author",
    avatar: "MC",
    rating: 5,
  },
  {
    quote: "As a security researcher, I need to test edge cases. Mainstream AI refuses half my prompts. Sovereign AI just works.",
    author: "Sarah Blackwood",
    role: "Cybersecurity Consultant",
    avatar: "SB",
    rating: 5,
  },
  {
    quote: "Generated 6 months of marketing content in one weekend. The auto-campaign feature paid for itself in affiliate commissions.",
    author: "Jake Rodriguez",
    role: "Digital Marketer",
    avatar: "JR",
    rating: 5,
  },
  {
    quote: "My law firm handles sensitive cases. Having AI that runs 100% offline means zero risk of data exposure. Non-negotiable.",
    author: "Dr. Amanda Foster",
    role: "Privacy Attorney",
    avatar: "AF",
    rating: 5,
  },
  {
    quote: "I was tired of getting 'I cannot help with that' on completely legal requests. This changed everything about how I work.",
    author: "Tyler Nguyen",
    role: "Content Creator",
    avatar: "TN",
    rating: 5,
  },
  {
    quote: "Running Dolphin-70B on my 4090. No API costs, no rate limits, no surveillance. Just pure, unrestricted AI power.",
    author: "Alex Petrov",
    role: "AI Hobbyist",
    avatar: "AP",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-32 bg-secondary/30 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-semibold mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="text-gradient-primary">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join creators, developers, and professionals who've taken back control of their AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-semibold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">50K+</p>
            <p className="text-sm text-muted-foreground">Downloads</p>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-accent">4.9</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">15M+</p>
            <p className="text-sm text-muted-foreground">Prompts Generated</p>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">0</p>
            <p className="text-sm text-muted-foreground">Data Breaches</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
