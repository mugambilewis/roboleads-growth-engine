import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import MoreAboutUs from "./pages/MoreAboutUs";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import ThankYou from "./pages/ThankYou";
import Reschedule from "./pages/Reschedule";
import ConsultationDetails from "./pages/ConsultationDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/more-about-us" element={<MoreAboutUs />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/reschedule" element={<Reschedule />} />
        <Route path="/consultation-details" element={<ConsultationDetails />} />


            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
