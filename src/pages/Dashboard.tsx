import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import heroImage from "@/assets/hero-recycling.jpg";
import { 
  Recycle, 
  Truck, 
  TrendingUp, 
  Award,
  Calendar,
  MapPin,
  ArrowRight,
  Leaf
} from "lucide-react";

const Dashboard = () => {
  const upcomingPickups = [
    { id: 1, type: "General Waste", date: "Tomorrow, 8:00 AM", status: "confirmed" },
    { id: 2, type: "Recyclables", date: "Friday, 10:00 AM", status: "pending" },
    { id: 3, type: "Electronics", date: "Next Tuesday, 2:00 PM", status: "confirmed" },
  ];

  const recentTips = [
    { id: 1, title: "How to properly clean containers", category: "Recycling" },
    { id: 2, title: "Composting basics for beginners", category: "Organic Waste" },
    { id: 3, title: "Electronic waste disposal guide", category: "E-Waste" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Sustainable recycling facility with solar panels and green technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-eco-primary/80 to-eco-secondary/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Eco Impact Dashboard
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Track your waste reduction journey and make a difference
            </p>
            <Button size="lg" variant="secondary" className="shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Pickup
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Items Recycled"
            value="1,234"
            icon={Recycle}
            trend="↗ 12% this month"
            className="hover:shadow-eco"
          />
          <StatCard
            title="CO₂ Saved"
            value="89.5 kg"
            icon={Leaf}
            trend="↗ 8% this month"
            className="impact hover:shadow-impact"
          />
          <StatCard
            title="Pickups Scheduled"
            value="23"
            icon={Truck}
            trend="↗ 5% this month"
          />
          <StatCard
            title="Eco Score"
            value="87/100"
            icon={Award}
            trend="↗ 15 points"
            className="hover:shadow-eco"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Pickups */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-eco-primary" />
                Upcoming Pickups
              </CardTitle>
              <Button variant="ghost" size="sm">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPickups.map((pickup) => (
                  <div key={pickup.id} className="flex items-center justify-between p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-eco-primary rounded-full flex items-center justify-center">
                        <Truck className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{pickup.type}</p>
                        <p className="text-sm text-muted-foreground">{pickup.date}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pickup.status === 'confirmed' 
                        ? 'bg-eco-success/20 text-eco-success' 
                        : 'bg-eco-warning/20 text-eco-warning'
                    }`}>
                      {pickup.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-eco-secondary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-gradient-to-r from-eco-primary to-eco-primary-light" size="lg">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule New Pickup
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <MapPin className="w-4 h-4 mr-2" />
                Find Recycling Centers
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Impact Report
              </Button>
            </CardContent>
          </Card>

          {/* Recent Tips */}
          <Card className="lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-eco-secondary" />
                Latest Eco Tips
              </CardTitle>
              <Button variant="ghost" size="sm">
                Browse Guide <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentTips.map((tip) => (
                  <div key={tip.id} className="p-4 bg-gradient-subtle rounded-lg border hover:shadow-card transition-shadow cursor-pointer">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-eco-primary/10 text-eco-primary rounded-full mb-2">
                      {tip.category}
                    </span>
                    <h3 className="font-medium text-foreground hover:text-eco-primary transition-colors">
                      {tip.title}
                    </h3>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;