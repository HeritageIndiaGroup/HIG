import ErrorBoundary from '@/components/ErrorBoundary';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gallery from "./components/Gallery";
import Career from "./components/Career";
import Popup from "./components/Popup";
import CompaniesShowcase from "./components/CompaniesShowcase";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <html lang="en" />
          <meta name="theme-color" content="#0073e6" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/career" element={<Career />} />
            <Route path="/companies" element={<CompaniesShowcase />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Popup />
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;

