import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Factory, 
  Shield, 
  Users, 
  TrendingUp, 
  Globe, 
  Award,
  Target,
  Zap,
  CheckCircle2
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "2019", label: "Founded" },
    { value: "5000+", label: "Registered Businesses" },
    { value: "₹500Cr+", label: "Trade Facilitated" },
    { value: "50+", label: "Cities Covered" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Every business on our platform undergoes rigorous GST and license verification."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage cutting-edge technology to streamline B2B chemical trading."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building lasting relationships between manufacturers, suppliers, and buyers."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to providing the best trading experience in the industry."
    },
  ];

  const features = [
    "Real-time market pricing with historical data",
    "Verified supplier network across India",
    "Secure payment and escrow services",
    "Logistics and shipping integration",
    "Quality assurance and lab testing",
    "24/7 customer support",
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
        <div className="absolute inset-0 grid-pattern" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 cyber-border rounded-full mb-6">
              <Factory className="w-4 h-4 text-primary" />
              <span className="text-foreground/80 text-sm font-medium font-mono">ABOUT US</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Revolutionizing{" "}
              <span className="text-primary cyber-glow">Chemical Trading</span>
              {" "}in India
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              ChemTradeHub is India's premier B2B platform connecting chemical manufacturers, 
              suppliers, and buyers through a secure, transparent, and efficient digital marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1 cyber-glow">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To digitize and streamline the industrial chemical trading ecosystem in India, 
                making it accessible, transparent, and efficient for businesses of all sizes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe that technology can transform traditional B2B trading by eliminating 
                information asymmetry, reducing transaction costs, and building trust between 
                trading partners.
              </p>
              
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="cyber-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 cyber-gradient rounded-xl flex items-center justify-center shadow-cyber">
                    <Globe className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">Vision 2030</h3>
                    <p className="text-muted-foreground text-sm">Our roadmap for the future</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the largest digital marketplace for industrial chemicals in Asia, 
                  facilitating over ₹10,000 Cr in annual trade volume while maintaining the 
                  highest standards of quality and trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide everything we do at ChemTradeHub
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="cyber-border bg-card hover:shadow-cyber transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 cyber-gradient rounded-xl flex items-center justify-center mb-4 group-hover:shadow-neon transition-shadow">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">ChemTradeHub</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="cyber-border bg-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 cyber-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-cyber">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">Industry Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  Built by industry veterans with 20+ years of combined experience in chemical trading.
                </p>
              </CardContent>
            </Card>
            
            <Card className="cyber-border bg-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 cyber-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-cyber">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">Market Intelligence</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time pricing data and market trends to help you make informed decisions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="cyber-border bg-card text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 cyber-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-cyber">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">Secure Transactions</h3>
                <p className="text-muted-foreground text-sm">
                  Bank-grade security with verified businesses and escrow payment protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
