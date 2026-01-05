import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Factory, ArrowRight, User, Building2, AlertCircle, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  companyName: z.string().trim().min(2, { message: "Company name must be at least 2 characters" }),
});

const Signup = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    companyName: "",
  });
  const [step, setStep] = useState<"form" | "choice">("form");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate input
    const result = signupSchema.safeParse(formData);
    if (!result.success) {
      setError(result.error.errors[0].message);
      setLoading(false);
      return;
    }

    const { error } = await signUp(formData.email, formData.password, formData.companyName);
    
    if (error) {
      if (error.message.includes("already registered")) {
        setError("This email is already registered. Please login instead.");
      } else {
        setError(error.message);
      }
      setLoading(false);
      return;
    }

    setLoading(false);
    setStep("choice");
  };

  const handleChoice = (choice: "profile" | "surf") => {
    if (choice === "profile") {
      navigate("/build-profile");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex dark">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 cyber-gradient relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 scanline" />
        
        <div className="relative z-10 flex flex-col justify-center p-12">
          <Link to="/" className="flex items-center gap-2 mb-12">
            <div className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-cyber border border-primary/30">
              <Factory className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-2xl text-primary-foreground">
              ChemTrade<span className="text-background/80">Hub</span>
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
              <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center border border-primary-foreground/30">
                <span className="text-primary-foreground font-bold text-sm">✓</span>
              </div>
              <span className="text-primary-foreground/80">Free registration</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center border border-primary-foreground/30">
                <span className="text-primary-foreground font-bold text-sm">✓</span>
              </div>
              <span className="text-primary-foreground/80">Verified business network</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center border border-primary-foreground/30">
                <span className="text-primary-foreground font-bold text-sm">✓</span>
              </div>
              <span className="text-primary-foreground/80">Secure transactions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 cyber-gradient rounded-lg flex items-center justify-center shadow-cyber">
                <Factory className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                ChemTrade<span className="text-primary">Hub</span>
              </span>
            </Link>
          </div>

          {step === "form" ? (
            <Card className="cyber-border bg-card shadow-elevated">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-display text-2xl">Create Your Account</CardTitle>
                <CardDescription>Enter your business details to get started</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {error && (
                  <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </div>
                )}
                
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
                      className="h-11 bg-background cyber-border"
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
                      className="h-11 bg-background cyber-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a strong password (min 6 chars)"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="h-11 bg-background cyber-border"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full mt-6 h-11 shadow-cyber"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
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
            <Card className="cyber-border bg-card shadow-elevated">
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-display text-2xl">Choose Your Path</CardTitle>
                <CardDescription>How would you like to proceed?</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <button
                  onClick={() => handleChoice("profile")}
                  className="w-full p-6 bg-card border-2 border-primary rounded-xl hover:bg-primary/5 transition-all group text-left cyber-box-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 cyber-gradient rounded-xl flex items-center justify-center group-hover:shadow-neon transition-shadow">
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
