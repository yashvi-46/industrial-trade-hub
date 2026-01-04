import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Factory, ArrowRight, ArrowLeft, FlaskConical, FileText, CheckCircle2 } from "lucide-react";

const BuildProfile = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    chemicalsSell: "",
    chemicalsBuy: "",
    factoryLicense: "",
    gstNumber: "",
    tradeLicense: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store profile data
    localStorage.setItem("profileData", JSON.stringify(formData));
    localStorage.setItem("profileComplete", "true");
    navigate("/dashboard");
  };

  const steps = [
    { number: 1, title: "Chemicals", icon: FlaskConical },
    { number: 2, title: "Licenses", icon: FileText },
    { number: 3, title: "Complete", icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 industrial-gradient rounded-2xl flex items-center justify-center shadow-industrial">
              <Factory className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Build Your Business Profile
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
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
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
        <Card className="border-border shadow-elevated">
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
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
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
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
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
                      className="h-11"
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
                      className="h-11"
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
                      className="h-11"
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
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Review Your Profile
                  </CardTitle>
                  <CardDescription>
                    Verify your information before submitting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Chemicals You Sell</h4>
                      <p className="text-muted-foreground text-sm">
                        {formData.chemicalsSell || "Not specified"}
                      </p>
                    </div>

                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Chemicals You Buy</h4>
                      <p className="text-muted-foreground text-sm">
                        {formData.chemicalsBuy || "Not specified"}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-secondary rounded-lg">
                        <h4 className="font-semibold text-xs text-muted-foreground mb-1">Factory License</h4>
                        <p className="text-foreground text-sm font-medium">
                          {formData.factoryLicense || "Not provided"}
                        </p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <h4 className="font-semibold text-xs text-muted-foreground mb-1">GST Number</h4>
                        <p className="text-foreground text-sm font-medium">
                          {formData.gstNumber || "Not provided"}
                        </p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <h4 className="font-semibold text-xs text-muted-foreground mb-1">Trade License</h4>
                        <p className="text-foreground text-sm font-medium">
                          {formData.tradeLicense || "Not provided"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-accent/30 bg-accent/5 rounded-lg">
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
                  <Button type="button" variant="outline" onClick={handleBack}>
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <Button type="button" variant="hero" onClick={handleNext}>
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button type="submit" variant="accent" size="lg">
                    Complete Profile
                    <CheckCircle2 className="w-4 h-4" />
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
