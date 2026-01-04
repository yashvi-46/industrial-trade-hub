import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Factory, ArrowRight, User, Building2 } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    companyName: "",
  });
  const [step, setStep] = useState<"form" | "choice">("form");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password && formData.companyName) {
      setStep("choice");
    }
  };

  const handleChoice = (choice: "profile" | "surf") => {
    // Store signup data in localStorage for demo
    localStorage.setItem("signupData", JSON.stringify(formData));
    localStorage.setItem("isLoggedIn", "true");
    
    if (choice === "profile") {
      navigate("/build-profile");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 industrial-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="relative z-10 flex flex-col justify-center p-12">
          <Link to="/" className="flex items-center gap-2 mb-12">
            <div className="w-12 h-12 amber-gradient rounded-xl flex items-center justify-center shadow-industrial">
              <Factory className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="font-display font-bold text-2xl text-primary-foreground">
              ChemTrade<span className="text-accent">Hub</span>
            </span>
          </Link>
          
          <h1 className="font-display text-4xl font-bold text-primary-foreground mb-4">
            Join India's Largest Chemical Trading Network
          </h1>
          <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-md">
            Connect with verified suppliers and buyers. Get real-time market rates and grow your chemical business.
          </p>
          
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-sm">✓</span>
              </div>
              <span className="text-primary-foreground/80">Free registration</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-sm">✓</span>
              </div>
              <span className="text-primary-foreground/80">Verified business network</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-sm">✓</span>
              </div>
              <span className="text-primary-foreground/80">Secure transactions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 industrial-gradient rounded-lg flex items-center justify-center">
                <Factory className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                ChemTrade<span className="text-accent">Hub</span>
              </span>
            </Link>
          </div>

          {step === "form" ? (
            <Card className="border-border shadow-elevated">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-display text-2xl">Create Your Account</CardTitle>
                <CardDescription>Enter your business details to get started</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company / Owner Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Enter company or owner name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="h-11"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full mt-6">
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary font-semibold hover:underline">
                      Log in
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-border shadow-elevated">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-display text-2xl">Choose Your Path</CardTitle>
                <CardDescription>How would you like to proceed?</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <button
                  onClick={() => handleChoice("profile")}
                  className="w-full p-6 bg-card border-2 border-primary rounded-xl hover:bg-primary/5 transition-all group text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 industrial-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building2 className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                        Build Your Profile
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Complete your business profile with licenses, chemicals you trade, and get verified status.
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleChoice("surf")}
                  className="w-full p-6 bg-card border-2 border-border rounded-xl hover:border-muted-foreground/50 transition-all group text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <User className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                        Browse Without Profile
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Explore the marketplace first. You can complete your profile later.
                      </p>
                    </div>
                  </div>
                </button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
