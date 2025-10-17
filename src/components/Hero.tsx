import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#e8f1fd' }}>
      {/* Elegant Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top right decorative circles */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#00B3A4] opacity-10"></div>
        <div className="absolute top-32 right-32 w-20 h-20 rounded-full bg-[#092C5D] opacity-5"></div>
        
        {/* Bottom left decorative circles */}
        <div className="absolute bottom-32 left-20 w-40 h-40 rounded-full bg-[#092C5D] opacity-5"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 rounded-full bg-[#00B3A4] opacity-10"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-10 w-16 h-16 border-2 border-[#00B3A4] opacity-20 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-1/3 right-16 w-12 h-12 border-2 border-[#092C5D] opacity-15 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Elegant card wrapper */}
          <div className="md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Content - Order 1 on mobile, Order 1 on desktop */}
              <div className="space-y-6 text-center lg:text-left order-1">
                
                {/* Headline with elegant styling */}
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight" style={{ color: '#092C5D' }}>
                    <div>You're one step away from</div>
                  </h1>
                  
                  <p className="text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed" style={{ color: '#092C5D', opacity: 0.9 }}>
                    Transforming your business into a 24/7 growth machine with AI-powered automation, seamless lead generation, and a high-performing, mobile-friendly website that ranks and converts effortlessly.
                  </p>
                </div>
                
                {/* Button with elegant styling */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                  <Button 
                    size="lg" 
                    className="text-[#092C5D] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 " 
                    style={{ backgroundColor: '#00B3A4' }}
                  >
                    GET A FREE AUDIT TODAY!
                  </Button>
                </div>
                
                {/* Free Trial Banner with enhanced styling */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm  bg-yellow-500 backdrop-blur-sm shadow-lg border-2 border-white/60">
                  
                  <div className="flex flex-col  sm:items-center sm:gap-2 text-center">
                    <span className="font-bold text-lg" style={{ color: '#092C5D' }}>14 DAY FREE TRIAL</span>
                   
                    <span className="text-sm" style={{ color: '#092C5D', opacity: 0.8 }}>No obligations, no contracts, cancel at any time</span>
                  </div>
                </div>
              </div>

              {/* Right Profile Image - Order 2 on mobile, Order 2 on desktop */}
              <div className="flex justify-center lg:justify-center order-2">
                <div className="relative">
                  
                  {/* Main image container with enhanced shadow */}
                 <div className="relative">
  <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 overflow-hidden relative z-10 rounded-2xl">
    <img
      src="/images/Profile 2.jpg"
      alt="Company Profile"
      className="w-full h-full object-cover object-center"
    />
  </div>
</div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;