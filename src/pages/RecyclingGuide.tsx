import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Recycle, 
  Smartphone, 
  Battery, 
  Wine,
  Package,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  XCircle
} from "lucide-react";

const RecyclingGuide = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { 
      id: 1, 
      name: "Plastics", 
      icon: Wine, 
      color: "bg-blue-500", 
      items: 12,
      description: "Bottles, containers, packaging"
    },
    { 
      id: 2, 
      name: "Electronics", 
      icon: Smartphone, 
      color: "bg-purple-500", 
      items: 8,
      description: "Phones, computers, cables"
    },
    { 
      id: 3, 
      name: "Batteries", 
      icon: Battery, 
      color: "bg-orange-500", 
      items: 5,
      description: "All battery types"
    },
    { 
      id: 4, 
      name: "Paper & Cardboard", 
      icon: Package, 
      color: "bg-green-500", 
      items: 15,
      description: "Newspapers, boxes, magazines"
    },
    { 
      id: 5, 
      name: "Light Bulbs", 
      icon: Lightbulb, 
      color: "bg-yellow-500", 
      items: 4,
      description: "LED, CFL, incandescent"
    },
  ];

  const featuredTips = [
    {
      id: 1,
      title: "Clean Before You Recycle",
      description: "Always rinse containers to remove food residue before recycling.",
      dos: ["Rinse with cold water", "Remove labels when possible", "Separate caps from bottles"],
      donts: ["Use hot water (wastes energy)", "Leave food residue", "Mix different materials"],
      category: "General"
    },
    {
      id: 2,
      title: "Electronic Waste Safety",
      description: "Proper e-waste disposal protects the environment and recovers valuable materials.",
      dos: ["Remove personal data", "Find certified e-waste centers", "Separate batteries"],
      donts: ["Throw in regular trash", "Break items apart", "Ignore data security"],
      category: "Electronics"
    },
    {
      id: 3,
      title: "Battery Disposal",
      description: "Batteries contain hazardous materials that need special handling.",
      dos: ["Use designated drop-off points", "Tape battery terminals", "Sort by battery type"],
      donts: ["Mix with regular recycling", "Dispose in household trash", "Damage battery casing"],
      category: "Batteries"
    }
  ];

  const filteredTips = featuredTips.filter(tip => 
    tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tip.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Recycling Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Learn how to properly recycle different materials and reduce waste
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search recycling tips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Material Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <Badge variant="secondary">{category.items} items</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Tips */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Recycling Tips & Best Practices
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTips.map((tip) => (
              <Card key={tip.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                    <Badge variant="outline">{tip.category}</Badge>
                  </div>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Do's */}
                    <div>
                      <h4 className="font-medium text-eco-success mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Do's
                      </h4>
                      <ul className="space-y-1">
                        {tip.dos.map((item, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <CheckCircle className="w-3 h-3 text-eco-success mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Don'ts */}
                    <div>
                      <h4 className="font-medium text-destructive mb-2 flex items-center">
                        <XCircle className="w-4 h-4 mr-2" />
                        Don'ts
                      </h4>
                      <ul className="space-y-1">
                        {tip.donts.map((item, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <XCircle className="w-3 h-3 text-destructive mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 group">
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-eco-primary to-eco-secondary text-white">
            <CardContent className="p-8">
              <Recycle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Can't Find What You're Looking For?</h3>
              <p className="text-white/90 mb-6">
                Contact your local recycling center or submit a question to our community
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="secondary" size="lg">
                  Find Local Centers
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-eco-primary">
                  Ask Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecyclingGuide;