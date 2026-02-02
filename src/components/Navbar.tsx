import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg hidden sm:block">Sovereign AI</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#models" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Models</a>
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</a>
            <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</a>
          </div>
          
          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">GitHub</Button>
            <Button variant="default" size="sm">Download</Button>
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
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#models" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Models</a>
              <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</a>
              <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</a>
              <div className="flex gap-2 pt-4">
                <Button variant="ghost" size="sm" className="flex-1">GitHub</Button>
                <Button variant="default" size="sm" className="flex-1">Download</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
