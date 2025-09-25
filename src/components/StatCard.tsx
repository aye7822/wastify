import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendUp = true,
  className = ""
}: StatCardProps) => {
  return (
    <Card className={`hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {trend && (
              <p className={`text-sm mt-2 flex items-center ${
                trendUp ? "text-eco-success" : "text-destructive"
              }`}>
                {trend}
              </p>
            )}
          </div>
          <div className={`p-3 rounded-full ${
            className.includes('impact') 
              ? 'bg-gradient-to-br from-eco-secondary to-eco-accent' 
              : 'bg-gradient-to-br from-eco-primary to-eco-primary-light'
          }`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;