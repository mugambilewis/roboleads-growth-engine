import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ReadyToBegin from "@/components/ReadyToBegin";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <WhoWeAre />
      <Testimonials />
      <Services />
      <TechStack />
      <CaseStudies />
      
      <CTASection />
      <ReadyToBegin />
      <Footer />
    </div>
  );
};

export default Index;
