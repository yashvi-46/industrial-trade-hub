import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 industrial-gradient rounded-lg flex items-center justify-center shadow-industrial group-hover:shadow-elevated transition-shadow">
              <Factory className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              ChemTrade<span className="text-accent">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              About
            </Link>
            <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Marketplace
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="default">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="default">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in-bottom">
            <div className="flex flex-col gap-3">
              <Link to="/" className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
                About
              </Link>
              <Link to="/marketplace" className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
                Marketplace
              </Link>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Link to="/login">
                  <Button variant="outline" size="default" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="hero" size="default" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
