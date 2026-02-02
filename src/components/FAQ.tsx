import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is Sovereign AI Nexus?",
    answer: "It's a desktop application that lets you run AI language models (like ChatGPT alternatives) directly on your own computer. Instead of sending your prompts to a company's servers, everything runs locally on your machine—meaning complete privacy and no content restrictions."
  },
  {
    question: "What do I need to run this?",
    answer: "You'll need a computer with a dedicated GPU (graphics card). For smaller models (7B-13B parameters), a GPU with 8GB VRAM works. For larger, more capable models (70B), you'll need 24GB+ VRAM (like an RTX 4090 or Mac with M2/M3 Pro). The app will auto-detect your hardware and recommend compatible models."
  },
  {
    question: "Is this legal?",
    answer: "Yes, absolutely. Running open-source AI models locally is completely legal. These are publicly available models released under permissive licenses. You're simply running software on your own computer—no different than running any other application."
  },
  {
    question: "What are 'uncensored' or 'abliterated' models?",
    answer: "Standard AI models from companies like OpenAI are trained to refuse certain requests. 'Uncensored' models have these refusal mechanisms reduced or removed, meaning they'll attempt to help with any legal request without lecturing you. This is useful for creative writing, research, and professional use cases where corporate content policies get in the way."
  },
  {
    question: "Do I need internet to use this?",
    answer: "Only for the initial download of the app and models. Once installed, everything runs 100% offline. You can use it on an airplane, in a bunker, or anywhere without internet—your AI works wherever you are."
  },
  {
    question: "How is this different from ChatGPT?",
    answer: "Three key differences: (1) Privacy—your prompts never leave your device, (2) No censorship—models don't refuse legal requests, (3) No costs—after download, you can generate unlimited content with zero API fees or subscriptions."
  },
  {
    question: "What can I actually use this for?",
    answer: "Anything you'd use ChatGPT for, plus more: creative writing without content warnings, marketing copy generation, code assistance, research on sensitive topics, roleplay scenarios, professional document drafting, and automated content campaigns. If you've ever been frustrated by AI refusing to help, this solves that."
  },
  {
    question: "Is my data really private?",
    answer: "Yes. The AI model runs entirely on your hardware. Your prompts are never sent anywhere—there's no server, no cloud, no logging. We literally cannot see what you're doing because the software doesn't phone home. Your conversations exist only on your computer."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Got <span className="text-gradient-primary">Questions</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <button
              onClick={() => {
                const demoSection = document.getElementById("demo");
                demoSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:underline"
            >
              Try the demo
            </button>
            {" "}or{" "}
            <button
              onClick={() => {
                window.open("mailto:support@sovereignai.nexus", "_blank");
              }}
              className="text-primary hover:underline"
            >
              contact us
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
