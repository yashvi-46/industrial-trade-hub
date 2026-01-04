import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Factory,
  BadgeCheck,
  MapPin,
  Star,
  Phone,
  Mail,
  FileText,
  ArrowLeft,
  TrendingUp,
  Package,
} from "lucide-react";
import { industries } from "@/data/industries";

const IndustryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState(industries.find((i) => i.id === id));

  useEffect(() => {
    const found = industries.find((i) => i.id === id);
    if (!found) {
      navigate("/dashboard");
    } else {
      setIndustry(found);
    }
  }, [id, navigate]);

  if (!industry) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16 gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 industrial-gradient rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                ChemTrade<span className="text-accent">Hub</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Industry Header Card */}
        <Card className="mb-8 border-border shadow-card">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Logo */}
              <div className="w-24 h-24 industrial-gradient rounded-2xl flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-3xl text-primary-foreground">
                  {industry.logo}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {industry.name}
                  </h1>
                  {industry.verified && (
                    <Badge className="bg-primary/10 text-primary border-0">
                      <BadgeCheck className="w-4 h-4 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{industry.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="font-medium text-foreground">{industry.rating}</span>
                    <span className="text-sm">(120+ reviews)</span>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="accent"
                    className="gap-2"
                    onClick={() => window.open(`tel:${industry.phone}`, "_self")}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => window.open(`mailto:${industry.email}`, "_self")}
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Company Details */}
          <Card className="border-border shadow-card">
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Company Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">GST Number</p>
                <p className="font-mono text-sm text-foreground">{industry.gstNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Factory License</p>
                <p className="font-mono text-sm text-foreground">{industry.factoryLicense}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Trade License</p>
                <p className="font-mono text-sm text-foreground">{industry.tradeLicense}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact Email</p>
                <p className="text-sm text-foreground">{industry.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-sm text-foreground">{industry.phone}</p>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Products */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="font-display text-lg flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Products ({industry.products.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {industry.products.map((product) => {
                    const lastPrice = product.priceHistory[product.priceHistory.length - 1]?.price || product.price;
                    const prevPrice = product.priceHistory[product.priceHistory.length - 2]?.price || lastPrice;
                    const change = ((lastPrice - prevPrice) / prevPrice * 100).toFixed(1);
                    const isUp = lastPrice >= prevPrice;

                    return (
                      <Link
                        key={product.id}
                        to={`/industry/${industry.id}/product/${product.id}`}
                        className="block"
                      >
                        <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 industrial-gradient rounded-xl flex items-center justify-center">
                              <Package className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{product.name}</p>
                              <p className="text-sm text-muted-foreground">{product.grade}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-display font-bold text-foreground">
                              ₹{product.price.toLocaleString()}
                              <span className="text-xs font-normal text-muted-foreground">
                                /{product.unit}
                              </span>
                            </p>
                            <p
                              className={`text-sm font-medium flex items-center justify-end gap-1 ${
                                isUp ? "text-green-600" : "text-red-500"
                              }`}
                            >
                              <TrendingUp className={`w-3 h-3 ${!isUp && "rotate-180"}`} />
                              {isUp ? "+" : ""}{change}%
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndustryDetail;
