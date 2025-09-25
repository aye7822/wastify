import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  MapPin, 
  Users,
  Leaf
} from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/guide", icon: BookOpen, label: "Recycling Guide" },
    { to: "/schedule", icon: Calendar, label: "Schedule Pickup" },
    { to: "/impact", icon: TrendingUp, label: "Impact Tracker" },
    { to: "/centers", icon: MapPin, label: "Local Centers" },
    { to: "/community", icon: Users, label: "Community" },
  ];

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-eco-primary to-eco-secondary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">EcoHub</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-eco-primary text-white shadow-md" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-eco-primary to-eco-secondary hover:from-eco-primary-light hover:to-eco-secondary text-white shadow">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;