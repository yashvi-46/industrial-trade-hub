import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  FlaskConical, 
  TrendingUp, 
  TrendingDown,
  Building2,
  MapPin,
  Phone,
  Mail,
  BadgeCheck,
  ArrowRight,
  Filter,
  ChevronDown,
  Star,
  Package,
  Clock
} from "lucide-react";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories", count: 156 },
    { id: "acids", name: "Acids", count: 42 },
    { id: "alcohols", name: "Alcohols", count: 28 },
    { id: "solvents", name: "Solvents", count: 35 },
    { id: "polymers", name: "Polymers", count: 24 },
    { id: "petrochemicals", name: "Petrochemicals", count: 27 },
  ];

  const marketStats = [
    { label: "Active Listings", value: "10,234", change: "+12%", up: true },
    { label: "Verified Suppliers", value: "2,456", change: "+8%", up: true },
    { label: "Daily Transactions", value: "₹4.5Cr", change: "+15%", up: true },
    { label: "Price Index", value: "102.4", change: "-0.5%", up: false },
  ];

  const products = [
    {
      id: 1,
      name: "Sulfuric Acid",
      category: "Industrial Acids",
      casNumber: "7664-93-9",
      purity: "98%",
      currentPrice: 12500,
      lastPrice: 12200,
      priceUnit: "/MT",
      minOrder: "5 MT",
      stock: "500 MT",
      supplier: {
        name: "Industrial Chemicals Ltd",
        location: "Mumbai, Maharashtra",
        verified: true,
        rating: 4.8,
        totalOrders: 1250,
      },
      trending: "up",
      description: "High-purity industrial grade sulfuric acid suitable for manufacturing, chemical synthesis, and laboratory use."
    },
    {
      id: 2,
      name: "Sodium Hydroxide (Caustic Soda)",
      category: "Bases",
      casNumber: "1310-73-2",
      purity: "99%",
      currentPrice: 38200,
      lastPrice: 38600,
      priceUnit: "/MT",
      minOrder: "2 MT",
      stock: "200 MT",
      supplier: {
        name: "ChemPro Industries",
        location: "Gujarat",
        verified: true,
        rating: 4.6,
        totalOrders: 890,
      },
      trending: "down",
      description: "Premium quality caustic soda for soap making, paper production, and water treatment applications."
    },
    {
      id: 3,
      name: "Ethanol (Industrial Grade)",
      category: "Alcohols",
      casNumber: "64-17-5",
      purity: "99.9%",
      currentPrice: 56400,
      lastPrice: 54500,
      priceUnit: "/KL",
      minOrder: "1 KL",
      stock: "50 KL",
      supplier: {
        name: "SynthChem Pvt Ltd",
        location: "Hyderabad, Telangana",
        verified: true,
        rating: 4.9,
        totalOrders: 2100,
      },
      trending: "up",
      description: "Ultra-pure ethanol for pharmaceutical, cosmetic, and industrial solvent applications."
    },
    {
      id: 4,
      name: "Hydrochloric Acid",
      category: "Industrial Acids",
      casNumber: "7647-01-0",
      purity: "35%",
      currentPrice: 8750,
      lastPrice: 8690,
      priceUnit: "/MT",
      minOrder: "3 MT",
      stock: "300 MT",
      supplier: {
        name: "Acid Solutions India",
        location: "Chennai, Tamil Nadu",
        verified: true,
        rating: 4.5,
        totalOrders: 650,
      },
      trending: "up",
      description: "Industrial grade hydrochloric acid for metal processing, pH control, and chemical manufacturing."
    },
    {
      id: 5,
      name: "Methanol",
      category: "Alcohols",
      casNumber: "67-56-1",
      purity: "99.5%",
      currentPrice: 28900,
      lastPrice: 29050,
      priceUnit: "/KL",
      minOrder: "2 KL",
      stock: "100 KL",
      supplier: {
        name: "Metro Chemicals",
        location: "Pune, Maharashtra",
        verified: false,
        rating: 4.2,
        totalOrders: 320,
      },
      trending: "down",
      description: "High-purity methanol for fuel blending, formaldehyde production, and solvent applications."
    },
    {
      id: 6,
      name: "Acetone",
      category: "Solvents",
      casNumber: "67-64-1",
      purity: "99.5%",
      currentPrice: 72500,
      lastPrice: 71800,
      priceUnit: "/KL",
      minOrder: "1 KL",
      stock: "75 KL",
      supplier: {
        name: "SolvoChem Industries",
        location: "Ahmedabad, Gujarat",
        verified: true,
        rating: 4.7,
        totalOrders: 980,
      },
      trending: "up",
      description: "Laboratory and industrial grade acetone for cleaning, pharmaceutical, and paint applications."
    },
  ];

  const companies = [
    {
      id: 1,
      name: "Industrial Chemicals Ltd",
      location: "Mumbai, Maharashtra",
      verified: true,
      rating: 4.8,
      totalProducts: 45,
      totalOrders: 1250,
      specialties: ["Acids", "Bases", "Solvents"],
      yearEstablished: 1998,
      gstNumber: "27AAAAA0000A1Z5",
      email: "contact@industrialchem.com",
      phone: "+91 22-XXXX-XXXX",
    },
    {
      id: 2,
      name: "ChemPro Industries",
      location: "Gujarat",
      verified: true,
      rating: 4.6,
      totalProducts: 32,
      totalOrders: 890,
      specialties: ["Polymers", "Petrochemicals"],
      yearEstablished: 2005,
      gstNumber: "24BBBBB0000B1Z6",
      email: "sales@chempro.in",
      phone: "+91 79-XXXX-XXXX",
    },
    {
      id: 3,
      name: "SynthChem Pvt Ltd",
      location: "Hyderabad, Telangana",
      verified: true,
      rating: 4.9,
      totalProducts: 58,
      totalOrders: 2100,
      specialties: ["Alcohols", "Pharmaceutical Grade"],
      yearEstablished: 2001,
      gstNumber: "36CCCCC0000C1Z7",
      email: "info@synthchem.co.in",
      phone: "+91 40-XXXX-XXXX",
    },
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
        <div className="absolute inset-0 grid-pattern" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Chemical <span className="text-primary cyber-glow">Marketplace</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse thousands of industrial chemicals from verified suppliers across India
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search chemicals, CAS numbers, or suppliers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-card cyber-border text-lg"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2" variant="default">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-6 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-4 cyber-border rounded-lg bg-background/50">
                <div>
                  <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">{stat.label}</p>
                  <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-cyber"
                    : "bg-card cyber-border text-foreground hover:bg-muted"
                }`}
              >
                <span className="font-medium text-sm">{category.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === category.id
                    ? "bg-primary-foreground/20"
                    : "bg-muted"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Featured <span className="text-primary">Products</span>
            </h2>
            <Button variant="ghost" className="text-primary">
              View All <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="cyber-border bg-card hover:shadow-cyber transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 cyber-gradient rounded-xl flex items-center justify-center group-hover:shadow-neon transition-shadow">
                        <FlaskConical className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground font-mono">CAS: {product.casNumber}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {product.purity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Price Section */}
                  <div className="p-3 bg-muted/50 rounded-lg cyber-border">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Current Price</p>
                        <p className="font-display text-2xl font-bold text-foreground">
                          ₹{product.currentPrice.toLocaleString()}
                          <span className="text-sm font-normal text-muted-foreground">{product.priceUnit}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground mb-1">Last Price</p>
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{product.lastPrice.toLocaleString()}
                          </span>
                          <span className={`flex items-center text-sm font-medium ${
                            product.trending === "up" ? "text-green-400" : "text-red-400"
                          }`}>
                            {product.trending === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {((product.currentPrice - product.lastPrice) / product.lastPrice * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Package className="w-4 h-4" />
                      <span>Min: {product.minOrder}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Stock: {product.stock}</span>
                    </div>
                  </div>
                  
                  {/* Supplier Info */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-medium text-foreground">{product.supplier.name}</span>
                          {product.supplier.verified && (
                            <BadgeCheck className="w-3 h-3 text-primary" />
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          {product.supplier.rating}
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="default">
                      Inquire
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Featured <span className="text-primary">Companies</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                Top-rated verified suppliers on ChemTradeHub
              </p>
            </div>
            <Link to="/signup">
              <Button variant="outline">
                List Your Company
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <Card key={company.id} className="cyber-border bg-card hover:shadow-cyber transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 cyber-gradient rounded-xl flex items-center justify-center shadow-cyber">
                        <Building2 className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-bold text-lg text-foreground">{company.name}</h3>
                          {company.verified && (
                            <BadgeCheck className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {company.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <p className="font-display font-bold text-foreground">{company.totalProducts}</p>
                      <p className="text-xs text-muted-foreground">Products</p>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <p className="font-display font-bold text-foreground">{company.totalOrders}</p>
                      <p className="text-xs text-muted-foreground">Orders</p>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="font-display font-bold text-foreground">{company.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded">GST</span>
                      {company.gstNumber}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      {company.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      {company.phone}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1" size="sm">
                      View Products
                    </Button>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="cyber-gradient cyber-border overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative z-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  Ready to Start Trading?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Join thousands of businesses already trading on ChemTradeHub
                </p>
                <Link to="/signup">
                  <Button size="lg" variant="secondary" className="shadow-elevated">
                    Create Free Account
                    <ArrowRight className="w-5 h-5 ml-2" />
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

export default Marketplace;
