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
  BadgeCheck
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 industrial-gradient opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-6 backdrop-blur-sm border border-primary-foreground/20">
              <BadgeCheck className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium">India's Trusted B2B Chemical Trading Platform</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
              Industrial Chemical Trading Made{" "}
              <span className="text-accent">Simple</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              Connect with verified chemical manufacturers and suppliers. Get real-time prices, secure transactions, and seamless logistics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-bottom">
              <Link to="/signup">
                <Button variant="accent" size="xl" className="w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline-light" size="xl" className="w-full sm:w-auto">
                  Login to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
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

      {/* Features Section */}
      <section className="py-20 steel-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ChemTradeHub?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built for industrial businesses, by industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 industrial-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="industrial-gradient border-0 shadow-elevated overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Chemical Trading?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of verified businesses already trading on ChemTradeHub
              </p>
              <Link to="/signup">
                <Button variant="accent" size="xl">
                  Create Free Account
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
