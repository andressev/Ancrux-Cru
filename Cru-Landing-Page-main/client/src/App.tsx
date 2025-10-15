import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { LandingPage } from "@/pages/LandingPage";
import { AboutUs } from "@/pages/AboutUs";
import { Privacy } from "@/pages/Privacy";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={LandingPage} />
      <Route path="/about" component={AboutUs} />
      <Route path="/privacy" component={Privacy} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * SCALE FIX TOGGLE
 * Set to false to revert to original zoom level
 */
const ENABLE_SCALE_FIX = false;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className={ENABLE_SCALE_FIX ? "scale-wrapper" : ""}>
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
