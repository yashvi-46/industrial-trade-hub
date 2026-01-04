import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Factory,
  BadgeCheck,
  ArrowLeft,
  Phone,
  TrendingUp,
  Package,
  ShoppingCart,
  History,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { industries, quantityOptions } from "@/data/industries";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { industryId, productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [industry, setIndustry] = useState(industries.find((i) => i.id === industryId));
  const [product, setProduct] = useState(industry?.products.find((p) => p.id === productId));
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [customQuantity, setCustomQuantity] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const foundIndustry = industries.find((i) => i.id === industryId);
    const foundProduct = foundIndustry?.products.find((p) => p.id === productId);
    
    if (!foundIndustry || !foundProduct) {
      navigate("/dashboard");
    } else {
      setIndustry(foundIndustry);
      setProduct(foundProduct);
    }
  }, [industryId, productId, navigate]);

  const handleSendRequirement = () => {
    const quantity = selectedQuantity === "custom" ? customQuantity : selectedQuantity;
    
    if (!quantity) {
      toast({
        title: "Please select quantity",
        description: "Choose a quantity or enter a custom amount",
        variant: "destructive",
      });
      return;
    }

    // Store the request (in real app, this would go to backend)
    const requests = JSON.parse(localStorage.getItem("purchaseRequests") || "[]");
    const newRequest = {
      id: Date.now().toString(),
      industryId: industry?.id,
      industryName: industry?.name,
      productId: product?.id,
      productName: product?.name,
      quantity: quantity,
      unit: "Tons",
      status: "pending",
      timestamp: new Date().toISOString(),
      buyerPhone: "+91 9876543210", // In real app, get from logged-in user
    };
    requests.push(newRequest);
    localStorage.setItem("purchaseRequests", JSON.stringify(requests));

    toast({
      title: "Requirement Sent! ✓",
      description: `Your request for ${quantity} Tons of ${product?.name} has been sent to ${industry?.name}`,
    });
    
    setIsDialogOpen(false);
    setSelectedQuantity("");
    setCustomQuantity("");
  };

  if (!industry || !product) return null;

  const chartData = product.priceHistory.map((item) => ({
    month: item.date,
    price: item.price,
  }));

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
        {/* Industry Info Bar */}
        <Card className="mb-6 border-border shadow-card">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link to={`/industry/${industry.id}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 industrial-gradient rounded-xl flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground">
                    {industry.logo}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-foreground">{industry.name}</h2>
                    {industry.verified && <BadgeCheck className="w-4 h-4 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{industry.location}</p>
                </div>
              </Link>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => window.open(`tel:${industry.phone}`, "_self")}
              >
                <Phone className="w-4 h-4" />
                Call Seller
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Product Details */}
        <Card className="mb-6 border-border shadow-card">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Product Icon */}
              <div className="w-24 h-24 industrial-gradient rounded-2xl flex items-center justify-center shrink-0">
                <Package className="w-12 h-12 text-primary-foreground" />
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                <Badge variant="secondary" className="mb-4">
                  {product.grade}
                </Badge>

                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Price</p>
                    <p className="font-display text-3xl font-bold text-foreground">
                      ₹{product.price.toLocaleString()}
                      <span className="text-lg font-normal text-muted-foreground">
                        /{product.unit}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-600">+4.5% this month</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col gap-3">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="accent" size="lg" className="gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Send Requirement
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-display text-xl">
                        Select Quantity
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                      <div className="space-y-4">
                        <Label className="text-base font-medium">
                          How much {product.name} do you need?
                        </Label>
                        <RadioGroup
                          value={selectedQuantity}
                          onValueChange={(value) => {
                            setSelectedQuantity(value);
                            if (value !== "custom") setCustomQuantity("");
                          }}
                        >
                          <div className="grid grid-cols-2 gap-3">
                            {quantityOptions.map((option) => (
                              <div key={option.value} className="relative">
                                <RadioGroupItem
                                  value={option.value}
                                  id={option.value}
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor={option.value}
                                  className="flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50"
                                >
                                  {option.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      {selectedQuantity === "custom" && (
                        <div className="space-y-2">
                          <Label htmlFor="customQty">Enter quantity (in Tons)</Label>
                          <Input
                            id="customQty"
                            type="number"
                            placeholder="Enter amount..."
                            value={customQuantity}
                            onChange={(e) => setCustomQuantity(e.target.value)}
                          />
                        </div>
                      )}

                      <Button
                        className="w-full"
                        variant="accent"
                        size="lg"
                        onClick={handleSendRequirement}
                      >
                        Send Request to Seller
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2"
                  onClick={() => window.open(`tel:${industry.phone}`, "_self")}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price History Chart */}
        <Card className="border-border shadow-card">
          <CardHeader>
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <History className="w-5 h-5 text-primary" />
              Price History (Last 6 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] md:h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    tickLine={{ stroke: "hsl(var(--border))" }}
                  />
                  <YAxis
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    tickLine={{ stroke: "hsl(var(--border))" }}
                    tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    formatter={(value: number) => [`₹${value.toLocaleString()}`, "Price"]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: "hsl(var(--accent))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Price History Table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Month</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Price (₹/{product.unit})</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {product.priceHistory.map((item, index) => {
                    const prevPrice = product.priceHistory[index - 1]?.price || item.price;
                    const change = ((item.price - prevPrice) / prevPrice * 100).toFixed(1);
                    const isUp = item.price >= prevPrice;

                    return (
                      <tr key={item.date} className="border-b border-border/50">
                        <td className="py-3 px-4 text-foreground">{item.date}</td>
                        <td className="py-3 px-4 text-right font-medium text-foreground">
                          ₹{item.price.toLocaleString()}
                        </td>
                        <td className={`py-3 px-4 text-right font-medium ${isUp ? "text-green-600" : "text-red-500"}`}>
                          {index === 0 ? "-" : `${isUp ? "+" : ""}${change}%`}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProductDetail;
