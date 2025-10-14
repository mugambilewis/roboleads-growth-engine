import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesTabs from "@/components/ServicesTabs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ReadyToBegin from "@/components/ReadyToBegin";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesTabs />
      <Testimonials />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      
      <FAQSection />
      <ReadyToBegin />
      <Footer />
    </div>
  );
};

export default Index;
