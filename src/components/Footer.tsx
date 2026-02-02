import { Shield } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExternalLink = (name: string) => {
    toast.info(`${name}`, {
      description: "Link coming soon!",
    });
  };

  return (
    <footer className="border-t border-border py-12 bg-card/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg">Sovereign AI Nexus</span>
          </button>
          
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <button onClick={() => scrollTo("demo")} className="hover:text-foreground transition-colors">Documentation</button>
            <button onClick={() => scrollTo("models")} className="hover:text-foreground transition-colors">Models</button>
            <button onClick={() => handleExternalLink("GitHub")} className="hover:text-foreground transition-colors">GitHub</button>
            <button onClick={() => handleExternalLink("Discord")} className="hover:text-foreground transition-colors">Discord</button>
            <button onClick={() => handleExternalLink("Privacy Policy")} className="hover:text-foreground transition-colors">Privacy</button>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Sovereign AI Nexus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
