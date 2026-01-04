import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { industries } from "@/data/industries";
import IndustryCard from "./IndustryCard";

const IndustryScroll = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-bold text-foreground">
          Browse Industries
        </h2>
        <span className="text-sm text-muted-foreground">
          {industries.length} verified suppliers
        </span>
      </div>
      
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-4 pb-4">
          {industries.map((industry) => (
            <div key={industry.id} className="w-[340px] shrink-0">
              <IndustryCard industry={industry} />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default IndustryScroll;
