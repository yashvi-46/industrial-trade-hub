import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Phone, Clock, Package, CheckCircle2, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PurchaseRequest {
  id: string;
  industryId: string;
  industryName: string;
  productId: string;
  productName: string;
  quantity: string;
  unit: string;
  status: "pending" | "accepted" | "rejected";
  timestamp: string;
  buyerPhone: string;
}

const RequestsPanel = () => {
  const { toast } = useToast();
  const [requests, setRequests] = useState<PurchaseRequest[]>([]);

  useEffect(() => {
    const loadRequests = () => {
      const stored = JSON.parse(localStorage.getItem("purchaseRequests") || "[]");
      setRequests(stored);
    };

    loadRequests();
    // Refresh every 5 seconds for demo purposes
    const interval = setInterval(loadRequests, 5000);
    return () => clearInterval(interval);
  }, []);

  const updateRequestStatus = (id: string, status: "accepted" | "rejected") => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status } : req
    );
    setRequests(updated);
    localStorage.setItem("purchaseRequests", JSON.stringify(updated));

    toast({
      title: status === "accepted" ? "Request Accepted" : "Request Rejected",
      description: status === "accepted" 
        ? "The buyer has been notified. You can now contact them."
        : "The request has been declined.",
    });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  if (requests.length === 0) {
    return (
      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            Purchase Requests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No purchase requests yet</p>
            <p className="text-sm">Requests from buyers will appear here</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-display text-lg flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            Purchase Requests
          </CardTitle>
          <Badge variant="secondary">{requests.length} requests</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]">
          <div className="space-y-3 p-4">
            {requests.map((request) => (
              <div
                key={request.id}
                className="p-4 bg-secondary/50 rounded-lg border border-border"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{request.productName}</h4>
                    <p className="text-sm text-muted-foreground">
                      {request.quantity} {request.unit}
                    </p>
                  </div>
                  <Badge
                    variant={
                      request.status === "pending"
                        ? "secondary"
                        : request.status === "accepted"
                        ? "default"
                        : "destructive"
                    }
                    className="shrink-0"
                  >
                    {request.status === "pending" && "Pending"}
                    {request.status === "accepted" && "Accepted"}
                    {request.status === "rejected" && "Rejected"}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="w-3 h-3" />
                  <span>{formatDate(request.timestamp)}</span>
                </div>

                {request.status === "pending" ? (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="accent"
                      className="flex-1 gap-1"
                      onClick={() => updateRequestStatus(request.id, "accepted")}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Accept
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 gap-1"
                      onClick={() => updateRequestStatus(request.id, "rejected")}
                    >
                      <XCircle className="w-4 h-4" />
                      Reject
                    </Button>
                  </div>
                ) : request.status === "accepted" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => window.open(`tel:${request.buyerPhone}`, "_self")}
                  >
                    <Phone className="w-4 h-4" />
                    Call Buyer ({request.buyerPhone})
                  </Button>
                ) : null}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RequestsPanel;
