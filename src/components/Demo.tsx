import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const demoConversations = [
  {
    user: "Write a marketing email for my SaaS product",
    assistant: "Subject: Transform Your Workflow with [Product Name] 🚀\n\nHi [Name],\n\nTired of juggling multiple tools that don't talk to each other? [Product Name] brings everything together in one seamless platform.\n\n✅ Save 10+ hours per week\n✅ Reduce tool costs by 60%\n✅ Onboard your team in minutes\n\nJoin 10,000+ companies already streamlining their operations.\n\n[Start Free Trial - No Credit Card Required]\n\nBest,\nThe [Product Name] Team"
  },
  {
    user: "Generate Python code to scrape a website",
    assistant: "```python\nimport requests\nfrom bs4 import BeautifulSoup\n\ndef scrape_website(url):\n    headers = {'User-Agent': 'Mozilla/5.0'}\n    response = requests.get(url, headers=headers)\n    \n    if response.status_code == 200:\n        soup = BeautifulSoup(response.content, 'html.parser')\n        \n        # Extract all text content\n        text = soup.get_text(separator='\\n')\n        \n        # Extract all links\n        links = [a.get('href') for a in soup.find_all('a', href=True)]\n        \n        return {'text': text, 'links': links}\n    return None\n\n# Usage\ndata = scrape_website('https://example.com')\nprint(data)\n```\n\nThis handles requests, parsing, and extraction. Need proxy rotation or JavaScript rendering?"
  },
  {
    user: "Write a controversial opinion piece",
    assistant: "Here's a provocative take on remote work:\n\n**\"The Office Is Dead—And Your Boss Knows It\"**\n\nThe return-to-office mandates sweeping corporate America aren't about productivity or culture. They're about control, real estate investments, and middle managers justifying their existence.\n\nThe data is clear: remote workers are 13% more productive. Companies pushing RTO are watching their best talent walk to competitors who trust adults to work without surveillance.\n\nThe uncomfortable truth? Many executives can't lead without physical presence. Their management style relies on \"seeing butts in seats\" rather than measuring actual output.\n\n*No refusals. No lectures. Just the content you asked for.*"
  },
];

const Demo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = (response: string) => {
    setIsTyping(true);
    let currentText = "";
    const words = response.split(" ");
    let wordIndex = 0;

    const typeInterval = setInterval(() => {
      if (wordIndex < words.length) {
        currentText += (wordIndex > 0 ? " " : "") + words[wordIndex];
        setMessages(prev => {
          const newMessages = [...prev];
          if (newMessages[newMessages.length - 1]?.role === "assistant") {
            newMessages[newMessages.length - 1].content = currentText;
          } else {
            newMessages.push({ role: "assistant", content: currentText });
          }
          return newMessages;
        });
        wordIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 30);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    // Find matching demo or use current demo
    const demo = demoConversations[currentDemo];
    setTimeout(() => {
      simulateResponse(demo.assistant);
      setCurrentDemo((prev) => (prev + 1) % demoConversations.length);
    }, 500);
  };

  const handleQuickPrompt = (prompt: string, index: number) => {
    if (isTyping) return;
    setMessages(prev => [...prev, { role: "user", content: prompt }]);
    setCurrentDemo(index);
    setTimeout(() => {
      simulateResponse(demoConversations[index].assistant);
    }, 500);
  };

  return (
    <section id="demo" className="relative py-32 bg-secondary/30 overflow-hidden">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-4">Try It Now</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="text-gradient-primary">Unfiltered AI</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            No sign-up required. Experience what AI without corporate restrictions feels like.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-2xl">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-secondary/50 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Dolphin-Llama3</p>
                  <p className="text-xs text-muted-foreground">Uncensored • 70B Parameters</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Running Locally</span>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-6">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Sparkles className="w-12 h-12 text-primary/50 mb-4" />
                  <p className="text-muted-foreground mb-6">Try one of these prompts to see uncensored AI:</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {demoConversations.map((demo, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickPrompt(demo.user, index)}
                        className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                      >
                        {demo.user.slice(0, 40)}...
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 ${message.role === "user" ? "justify-end" : ""}`}
                  >
                    {message.role === "assistant" && (
                      <div className="p-2 rounded-lg bg-primary/10 h-fit">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary"
                      }`}
                    >
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                        {message.content}
                      </pre>
                    </div>
                    {message.role === "user" && (
                      <div className="p-2 rounded-lg bg-accent/10 h-fit">
                        <User className="w-4 h-4 text-accent" />
                      </div>
                    )}
                  </div>
                ))
              )}
              {isTyping && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="animate-pulse">●</span>
                  <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>●</span>
                  <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>●</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-secondary/30">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type anything—no restrictions..."
                  className="flex-1 px-4 py-3 rounded-xl bg-card border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  disabled={isTyping}
                />
                <Button type="submit" variant="hero" size="lg" disabled={isTyping || !input.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                This is a demo simulation. Download the app to run real uncensored models locally.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
