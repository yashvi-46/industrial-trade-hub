import { Factory, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 cyber-gradient rounded-lg flex items-center justify-center shadow-cyber">
                <Factory className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                ChemTrade<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted platform for industrial chemical trading. Connect with verified suppliers and buyers across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Buy Chemicals</li>
              <li className="text-muted-foreground text-sm">Sell Chemicals</li>
              <li className="text-muted-foreground text-sm">Price Tracking</li>
              <li className="text-muted-foreground text-sm">Verified Suppliers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                support@chemtradehub.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +91 1800-XXX-XXXX
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-mono">
            © 2024 ChemTradeHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
