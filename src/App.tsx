import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gallery from "./components/Gallery";
import Career from "./components/Career";
import Popup from "./components/Popup";
import CompaniesShowcase from "./components/CompaniesShowcase";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />


        <Route path="/companies" element={<CompaniesShowcase />} />



          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>


      <Popup />


    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

