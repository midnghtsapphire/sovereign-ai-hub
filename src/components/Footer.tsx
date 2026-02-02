import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg">Sovereign AI Nexus</span>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
            <a href="#" className="hover:text-foreground transition-colors">Models</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">Discord</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
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
