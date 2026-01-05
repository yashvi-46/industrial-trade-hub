import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Factory, 
  TrendingUp, 
  Shield, 
  Users, 
  ArrowRight,
  FlaskConical,
  Truck,
  BadgeCheck,
  Zap,
  Globe
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: FlaskConical,
      title: "Wide Chemical Range",
      description: "Access thousands of industrial chemicals from verified suppliers across India."
    },
    {
      icon: TrendingUp,
      title: "Real-time Pricing",
      description: "Get updated market rates and trends to make informed buying decisions."
    },
    {
      icon: Shield,
      title: "Verified Businesses",
      description: "All sellers undergo GST and license verification for safe transactions."
    },
    {
      icon: Truck,
      title: "Seamless Logistics",
      description: "Integrated shipping and delivery tracking for bulk orders."
    }
  ];

  const stats = [
    { value: "5000+", label: "Registered Businesses" },
    { value: "10K+", label: "Products Listed" },
    { value: "₹500Cr+", label: "Trade Volume" },
    { value: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 cyber-border rounded-full mb-6 backdrop-blur-sm animate-pulse-glow">
              <BadgeCheck className="w-4 h-4 text-primary" />
              <span className="text-foreground/80 text-sm font-medium font-mono">INDIA'S #1 B2B CHEMICAL TRADING PLATFORM</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              Industrial Chemical Trading Made{" "}
              <span className="text-primary cyber-glow">Simple</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              Connect with verified chemical manufacturers and suppliers. Get real-time prices, secure transactions, and seamless logistics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-bottom">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto shadow-cyber animate-pulse-glow">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button variant="outline" size="lg" className="w-full sm:w-auto cyber-border">
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1 cyber-glow group-hover:animate-pulse-glow transition-all">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">ChemTradeHub</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built for industrial businesses, by industry professionals. Discover the benefits of trading on ChemTradeHub.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="cyber-border bg-card shadow-card hover:shadow-cyber transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 cyber-gradient rounded-xl flex items-center justify-center mb-4 group-hover:shadow-neon transition-shadow">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 cyber-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-cyber group-hover:shadow-neon transition-shadow">
                <span className="font-display text-2xl font-bold text-primary-foreground">01</span>
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Register & Verify</h3>
              <p className="text-muted-foreground text-sm">
                Create your account and get verified with your GST and licenses
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 cyber-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-cyber group-hover:shadow-neon transition-shadow">
                <span className="font-display text-2xl font-bold text-primary-foreground">02</span>
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Browse & Connect</h3>
              <p className="text-muted-foreground text-sm">
                Explore products, check real-time prices, and connect with suppliers
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 cyber-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-cyber group-hover:shadow-neon transition-shadow">
                <span className="font-display text-2xl font-bold text-primary-foreground">03</span>
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">Trade & Grow</h3>
              <p className="text-muted-foreground text-sm">
                Complete secure transactions and scale your chemical business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="cyber-gradient cyber-border overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-background/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary-foreground/20 shadow-cyber">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  Ready to Transform Your Chemical Trading?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Join thousands of verified businesses already trading on ChemTradeHub
                </p>
                <Link to="/signup">
                  <Button size="lg" variant="secondary" className="shadow-elevated">
                    Create Free Account
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
