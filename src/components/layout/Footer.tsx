import { Factory, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-industrial-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 amber-gradient rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                ChemTrade<span className="text-accent">Hub</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted platform for industrial chemical trading. Connect with verified suppliers and buyers across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">Marketplace</Link></li>
              <li><Link to="/signup" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">Register</Link></li>
              <li><Link to="/login" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">Login</Link></li>
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/70 text-sm">Buy Chemicals</li>
              <li className="text-primary-foreground/70 text-sm">Sell Chemicals</li>
              <li className="text-primary-foreground/70 text-sm">Price Tracking</li>
              <li className="text-primary-foreground/70 text-sm">Verified Suppliers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                support@chemtradehub.com
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                +91 1800-XXX-XXXX
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 ChemTradeHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
