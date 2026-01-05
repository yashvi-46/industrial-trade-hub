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
  Loader2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface Profile {
  company_name: string;
  email: string;
  profile_complete: boolean;
  is_verified: boolean;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, signOut, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
      return;
    }

    if (user) {
      fetchProfile();
    }
  }, [user, authLoading, navigate]);

  const fetchProfile = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();

    if (!error && data) {
      setProfile(data);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  // Sample market data
  const marketRates = [
    { name: "Sulfuric Acid", price: "₹12,500", unit: "/MT", change: "+2.3%", trending: "up", lastPrice: "₹12,200" },
    { name: "Sodium Hydroxide", price: "₹38,200", unit: "/MT", change: "-1.1%", trending: "down", lastPrice: "₹38,620" },
    { name: "Hydrochloric Acid", price: "₹8,750", unit: "/MT", change: "+0.8%", trending: "up", lastPrice: "₹8,680" },
    { name: "Ethanol", price: "₹56,400", unit: "/KL", change: "+3.5%", trending: "up", lastPrice: "₹54,500" },
    { name: "Methanol", price: "₹28,900", unit: "/KL", change: "-0.5%", trending: "down", lastPrice: "₹29,050" },
  ];

  const recentActivity = [
    { type: "inquiry", message: "New inquiry for Sulfuric Acid from ABC Industries", time: "2 hours ago" },
    { type: "price", message: "Ethanol price updated by +3.5%", time: "4 hours ago" },
    { type: "order", message: "Order #1234 shipped successfully", time: "1 day ago" },
  ];

  const stats = [
    { title: "Active Listings", value: "24", icon: Package, color: "bg-primary" },
    { title: "Total Inquiries", value: "156", icon: Users, color: "bg-green-500" },
    { title: "This Month Revenue", value: "₹12.4L", icon: TrendingUp, color: "cyber-gradient" },
  ];

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center dark">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 cyber-gradient rounded-lg flex items-center justify-center shadow-cyber">
                <Factory className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                ChemTrade<span className="text-primary">Hub</span>
              </span>
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search chemicals, suppliers..."
                  className="pl-10 h-10 bg-muted cyber-border"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout} className="cyber-border">
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
                Welcome back, <span className="text-primary">{profile?.company_name || user?.email}</span> 👋
              </h1>
              <p className="text-muted-foreground font-mono text-sm">
                Here's what's happening in the chemical market today
              </p>
            </div>
            {!profile?.profile_complete && (
              <Link to="/build-profile">
                <Button className="shadow-cyber animate-pulse-glow">
                  Complete Your Profile
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Profile Incomplete Alert */}
        {!profile?.profile_complete && (
          <Card className="mb-6 border-primary/30 bg-primary/5 cyber-border">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Complete your profile to get verified</h3>
                <p className="text-sm text-muted-foreground">
                  Add your licenses and chemical details to unlock all features
                </p>
              </div>
              <Link to="/build-profile">
                <Button variant="outline" size="sm" className="cyber-border">
                  Complete Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="cyber-border bg-card shadow-card hover:shadow-cyber transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium font-mono">{stat.title}</p>
                    <p className="font-display text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center shadow-cyber`}>
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Market Rates */}
          <Card className="lg:col-span-2 cyber-border bg-card shadow-card">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="font-display text-lg flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-primary" />
                  Live Market Rates
                </CardTitle>
                <Badge variant="secondary" className="text-xs font-mono">
                  Updated 5 min ago
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {marketRates.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cyber-border"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 cyber-gradient rounded-lg flex items-center justify-center shadow-cyber">
                        <FlaskConical className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground font-mono">Industrial Grade</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-foreground">
                        {item.price}
                        <span className="text-xs font-normal text-muted-foreground">{item.unit}</span>
                      </p>
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-xs text-muted-foreground line-through">{item.lastPrice}</span>
                        <span
                          className={`text-sm font-medium flex items-center gap-1 ${
                            item.trending === "up" ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {item.trending === "up" ? (
                            <TrendingUp className="w-3 h-3" />
                          ) : (
                            <TrendingDown className="w-3 h-3" />
                          )}
                          {item.change}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="cyber-border bg-card shadow-card">
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
                          ? "bg-primary animate-pulse"
                          : activity.type === "price"
                          ? "bg-yellow-400"
                          : "bg-green-400"
                      }`}
                    />
                    <div>
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-mono">{activity.time}</p>
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
        {profile?.is_verified && (
          <Card className="mt-6 cyber-gradient cyber-border">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-background/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary-foreground/20 shadow-cyber">
                <BadgeCheck className="w-7 h-7 text-primary-foreground" />
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
