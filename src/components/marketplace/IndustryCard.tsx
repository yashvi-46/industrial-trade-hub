import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, MapPin, Star, Package } from "lucide-react";
import { Industry } from "@/data/industries";

interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard = ({ industry }: IndustryCardProps) => {
  return (
    <Link to={`/industry/${industry.id}`}>
      <Card className="border-border shadow-card hover:shadow-lg transition-all hover:border-primary/30 cursor-pointer h-full">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            {/* Logo */}
            <div className="w-14 h-14 industrial-gradient rounded-xl flex items-center justify-center shrink-0">
              <span className="font-display font-bold text-lg text-primary-foreground">
                {industry.logo}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              {/* Name & Verified */}
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-bold text-foreground truncate">
                  {industry.name}
                </h3>
                {industry.verified && (
                  <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
                )}
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                <MapPin className="w-3 h-3" />
                <span className="truncate">{industry.location}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-medium text-foreground">{industry.rating}</span>
              </div>

              {/* Products */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Package className="w-3 h-3" />
                  <span>{industry.products.length} Products</span>
                </div>
                {industry.products.slice(0, 2).map((product) => (
                  <Badge key={product.id} variant="secondary" className="text-xs">
                    {product.name}
                  </Badge>
                ))}
                {industry.products.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{industry.products.length - 2} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default IndustryCard;
