import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Factory,
  TrendingUp,
  TrendingDown,
  Package,
  Users,
  Bell,
  Search,
  LogOut,
  Settings,
  FlaskConical,
  ArrowUpRight,
  BadgeCheck,
  AlertCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<{
    companyName?: string;
    email?: string;
  }>({});
  const [profileComplete, setProfileComplete] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const signupData = localStorage.getItem("signupData");
    if (signupData) {
      setUserData(JSON.parse(signupData));
    }

    const profileStatus = localStorage.getItem("profileComplete");
    setProfileComplete(profileStatus === "true");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("signupData");
    localStorage.removeItem("profileData");
    localStorage.removeItem("profileComplete");
    navigate("/");
  };

  // Sample market data
  const marketRates = [
    { name: "Sulfuric Acid", price: "₹12,500", unit: "/MT", change: "+2.3%", trending: "up" },
    { name: "Sodium Hydroxide", price: "₹38,200", unit: "/MT", change: "-1.1%", trending: "down" },
    { name: "Hydrochloric Acid", price: "₹8,750", unit: "/MT", change: "+0.8%", trending: "up" },
    { name: "Ethanol", price: "₹56,400", unit: "/KL", change: "+3.5%", trending: "up" },
    { name: "Methanol", price: "₹28,900", unit: "/KL", change: "-0.5%", trending: "down" },
  ];

  const recentActivity = [
    { type: "inquiry", message: "New inquiry for Sulfuric Acid from ABC Industries", time: "2 hours ago" },
    { type: "price", message: "Ethanol price updated by +3.5%", time: "4 hours ago" },
    { type: "order", message: "Order #1234 shipped successfully", time: "1 day ago" },
  ];

  const stats = [
    { title: "Active Listings", value: "24", icon: Package, color: "bg-primary" },
    { title: "Total Inquiries", value: "156", icon: Users, color: "bg-accent" },
    { title: "This Month Revenue", value: "₹12.4L", icon: TrendingUp, color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 industrial-gradient rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                ChemTrade<span className="text-accent">Hub</span>
              </span>
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search chemicals, suppliers..."
                  className="pl-10 h-10 bg-secondary border-0"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                Welcome back, {userData.companyName || "User"}! 👋
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening in the chemical market today
              </p>
            </div>
            {!profileComplete && (
              <Link to="/build-profile">
                <Button variant="accent">
                  Complete Your Profile
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Profile Incomplete Alert */}
        {!profileComplete && (
          <Card className="mb-6 border-accent/30 bg-accent/5">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Complete your profile to get verified</h3>
                <p className="text-sm text-muted-foreground">
                  Add your licenses and chemical details to unlock all features
                </p>
              </div>
              <Link to="/build-profile">
                <Button variant="outline" size="sm">
                  Complete Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                    <p className="font-display text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Market Rates */}
          <Card className="lg:col-span-2 border-border shadow-card">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="font-display text-lg flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-primary" />
                  Live Market Rates
                </CardTitle>
                <Badge variant="secondary" className="text-xs">
                  Updated 5 min ago
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {marketRates.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 industrial-gradient rounded-lg flex items-center justify-center">
                        <FlaskConical className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Industrial Grade</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-foreground">
                        {item.price}
                        <span className="text-xs font-normal text-muted-foreground">{item.unit}</span>
                      </p>
                      <p
                        className={`text-sm font-medium flex items-center justify-end gap-1 ${
                          item.trending === "up" ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {item.trending === "up" ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {item.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-border shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === "inquiry"
                          ? "bg-accent"
                          : activity.type === "price"
                          ? "bg-primary"
                          : "bg-green-500"
                      }`}
                    />
                    <div>
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="ghost" className="w-full mt-4 text-primary">
                View All Activity
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Verified Badge Section */}
        {profileComplete && (
          <Card className="mt-6 industrial-gradient border-0">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-foreground/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <BadgeCheck className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-primary-foreground">
                  You're a Verified Business!
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  Your profile has been verified. Enjoy full access to all features.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
