import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGithub = () => {
    toast.info("GitHub Repository", {
      description: "Repository link coming soon!",
    });
  };

  const handleDownload = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg hidden sm:block">Sovereign AI</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("features")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</button>
            <button onClick={() => scrollTo("demo")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Demo</button>
            <button onClick={() => scrollTo("models")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Models</button>
            <button onClick={() => scrollTo("pricing")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</button>
          </div>
          
          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={handleGithub}>
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="default" size="sm" onClick={handleDownload}>Download</Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollTo("features")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">Features</button>
              <button onClick={() => scrollTo("demo")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">Demo</button>
              <button onClick={() => scrollTo("models")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">Models</button>
              <button onClick={() => scrollTo("pricing")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">Pricing</button>
              <div className="flex gap-2 pt-4">
                <Button variant="ghost" size="sm" className="flex-1" onClick={handleGithub}>
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="default" size="sm" className="flex-1" onClick={handleDownload}>Download</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
