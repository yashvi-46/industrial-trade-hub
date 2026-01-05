import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Factory, ArrowRight, ArrowLeft, FlaskConical, FileText, CheckCircle2, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const BuildProfile = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    chemicalsSell: "",
    chemicalsBuy: "",
    factoryLicense: "",
    gstNumber: "",
    tradeLicense: "",
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setLoading(true);

    const chemicalsSellArray = formData.chemicalsSell
      .split(",")
      .map(s => s.trim())
      .filter(s => s.length > 0);
    
    const chemicalsBuyArray = formData.chemicalsBuy
      .split(",")
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const { error } = await supabase
      .from("profiles")
      .update({
        chemicals_to_sell: chemicalsSellArray,
        chemicals_to_buy: chemicalsBuyArray,
        factory_license: formData.factoryLicense,
        gst_number: formData.gstNumber,
        trade_license: formData.tradeLicense,
        profile_complete: true,
      })
      .eq("user_id", user.id);

    setLoading(false);

    if (!error) {
      navigate("/dashboard");
    }
  };

  const steps = [
    { number: 1, title: "Chemicals", icon: FlaskConical },
    { number: 2, title: "Licenses", icon: FileText },
    { number: 3, title: "Complete", icon: CheckCircle2 },
  ];

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center dark">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 dark">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 cyber-gradient rounded-2xl flex items-center justify-center shadow-cyber">
              <Factory className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Build Your <span className="text-primary">Business Profile</span>
          </h1>
          <p className="text-muted-foreground">
            Complete your profile to get verified and start trading
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  currentStep >= step.number
                    ? "bg-primary text-primary-foreground shadow-cyber"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <step.icon className="w-4 h-4" />
                <span className="font-medium text-sm hidden sm:inline">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-8 h-0.5 mx-2 transition-colors ${
                    currentStep > step.number ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <Card className="cyber-border bg-card shadow-elevated">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Chemicals */}
            {currentStep === 1 && (
              <>
                <CardHeader>
                  <CardTitle className="font-display text-xl flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-primary" />
                    Chemical Trading Details
                  </CardTitle>
                  <CardDescription>
                    Tell us about the chemicals you buy and sell
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="chemicalsSell">Chemicals You Sell</Label>
                    <Textarea
                      id="chemicalsSell"
                      name="chemicalsSell"
                      placeholder="e.g., Sulfuric Acid, Hydrochloric Acid, Sodium Hydroxide, Ethanol..."
                      value={formData.chemicalsSell}
                      onChange={handleInputChange}
                      className="min-h-[100px] bg-background cyber-border"
                    />
                    <p className="text-xs text-muted-foreground font-mono">
                      Enter chemical names separated by commas
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="chemicalsBuy">Chemicals You Buy</Label>
                    <Textarea
                      id="chemicalsBuy"
                      name="chemicalsBuy"
                      placeholder="e.g., Acetic Acid, Methanol, Ammonia, Benzene..."
                      value={formData.chemicalsBuy}
                      onChange={handleInputChange}
                      className="min-h-[100px] bg-background cyber-border"
                    />
                    <p className="text-xs text-muted-foreground font-mono">
                      Enter chemical names separated by commas
                    </p>
                  </div>
                </CardContent>
              </>
            )}

            {/* Step 2: Licenses */}
            {currentStep === 2 && (
              <>
                <CardHeader>
                  <CardTitle className="font-display text-xl flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Business Licenses
                  </CardTitle>
                  <CardDescription>
                    Provide your license information for verification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="factoryLicense">Factory License Number</Label>
                    <Input
                      id="factoryLicense"
                      name="factoryLicense"
                      placeholder="Enter your factory license number"
                      value={formData.factoryLicense}
                      onChange={handleInputChange}
                      className="h-11 bg-background cyber-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gstNumber">GST Registration Number</Label>
                    <Input
                      id="gstNumber"
                      name="gstNumber"
                      placeholder="e.g., 22AAAAA0000A1Z5"
                      value={formData.gstNumber}
                      onChange={handleInputChange}
                      className="h-11 bg-background cyber-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tradeLicense">Trade License Number</Label>
                    <Input
                      id="tradeLicense"
                      name="tradeLicense"
                      placeholder="Enter your trade license number"
                      value={formData.tradeLicense}
                      onChange={handleInputChange}
                      className="h-11 bg-background cyber-border"
                    />
                  </div>
                </CardContent>
              </>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <>
                <CardHeader>
                  <CardTitle className="font-display text-xl flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Review Your Profile
                  </CardTitle>
                  <CardDescription>
                    Verify your information before submitting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg cyber-border">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Chemicals You Sell</h4>
                      <p className="text-muted-foreground text-sm font-mono">
                        {formData.chemicalsSell || "Not specified"}
                      </p>
                    </div>

                    <div className="p-4 bg-muted rounded-lg cyber-border">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Chemicals You Buy</h4>
                      <p className="text-muted-foreground text-sm font-mono">
                        {formData.chemicalsBuy || "Not specified"}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-muted rounded-lg cyber-border">
                        <h4 className="font-semibold text-xs text-muted-foreground mb-1 font-mono">Factory License</h4>
                        <p className="text-foreground text-sm font-medium">
                          {formData.factoryLicense || "Not provided"}
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg cyber-border">
                        <h4 className="font-semibold text-xs text-muted-foreground mb-1 font-mono">GST Number</h4>
                        <p className="text-foreground text-sm font-medium">
                          {formData.gstNumber || "Not provided"}
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg cyber-border">
                        <h4 className="font-semibold text-xs text-muted-foreground mb-1 font-mono">Trade License</h4>
                        <p className="text-foreground text-sm font-medium">
                          {formData.tradeLicense || "Not provided"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-primary/30 bg-primary/5 rounded-lg cyber-border">
                    <p className="text-sm text-foreground">
                      <strong>Note:</strong> Your information will be verified within 24-48 hours. You'll receive a verification badge once approved.
                    </p>
                  </div>
                </CardContent>
              </>
            )}

            {/* Navigation Buttons */}
            <CardContent className="pt-0">
              <div className="flex justify-between gap-4">
                {currentStep > 1 ? (
                  <Button type="button" variant="outline" onClick={handleBack} className="cyber-border">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <Button type="button" onClick={handleNext} className="shadow-cyber">
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button type="submit" size="lg" className="shadow-cyber" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        Complete Profile
                        <CheckCircle2 className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </form>
        </Card>

        {/* Skip Option */}
        <div className="text-center mt-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="text-muted-foreground"
          >
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuildProfile;
