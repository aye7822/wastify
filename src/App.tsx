import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import RecyclingGuide from "./pages/RecyclingGuide";
import SchedulePickup from "./pages/SchedulePickup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/guide" element={<RecyclingGuide />} />
            <Route path="/schedule" element={<SchedulePickup />} />
            {/* Placeholder routes for future pages */}
            <Route path="/impact" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Impact Tracker - Coming Soon</h1></div>} />
            <Route path="/centers" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Local Centers - Coming Soon</h1></div>} />
            <Route path="/community" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Community - Coming Soon</h1></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
