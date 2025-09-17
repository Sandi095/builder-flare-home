import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Placeholder from "./pages/Placeholder";
import Layout from "@/components/layout/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Placeholder title="Shop" />} />
            <Route path="/dogs" element={<Placeholder title="Dogs" />} />
            <Route path="/cats" element={<Placeholder title="Cats" />} />
            <Route path="/fish" element={<Placeholder title="Fish" />} />
            <Route
              path="/small-pets"
              element={<Placeholder title="Small Pets" />}
            />
            <Route
              path="/reptiles"
              element={<Placeholder title="Reptiles" />}
            />
            <Route path="/birds" element={<Placeholder title="Birds" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
