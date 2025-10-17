import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero video.mp4" type="video/mp4" />
        </video>
        {/* Elegant overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#092C5D]/80 via-[#092C5D]/70 to-[#00B3A4]/60"></div>
      </div>

      {/* Elegant Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right decorative circles */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#00B3A4] opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-32 w-20 h-20 rounded-full bg-[#e8f1fd] opacity-10"></div>
        
        {/* Bottom left decorative circles */}
        <div className="absolute bottom-32 left-20 w-40 h-40 rounded-full bg-[#e8f1fd] opacity-10"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 rounded-full bg-[#00B3A4] opacity-20 animate-pulse"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-10 w-16 h-16 border-2 border-[#00B3A4] opacity-30 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-1/3 right-16 w-12 h-12 border-2 border-[#e8f1fd] opacity-20 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Elegant card wrapper */}
          <div className="md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto">
              
              {/* Centered Content */}
              <div className="space-y-8 text-center">
                
                {/* Headline with elegant styling */}
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
                    <div className="mb-2">You're one step away from</div>
                    <div className="text-[#00B3A4] animate-pulse">Business Transformation</div>
                  </h1>
                  
                  <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-lg font-light">
                    Transforming your business into a 24/7 growth machine with AI-powered automation, seamless lead generation, and a high-performing, mobile-friendly website that ranks and converts effortlessly.
                  </p>
                </div>
                
                {/* Button with elegant styling */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <Button 
                    size="lg" 
                    className="text-[#092C5D] font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-[#00B3A4]/50 transition-all duration-300 hover:scale-110 border-2 border-white/20" 
                    style={{ backgroundColor: '#00B3A4' }}
                  >
                    GET A FREE AUDIT TODAY!
                  </Button>
                </div>
                
                {/* Free Trial Banner with enhanced styling */}
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-yellow-500/95 backdrop-blur-md shadow-2xl border-2 border-white/40 hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-6 h-6" style={{ color: '#092C5D' }} />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-center">
                    <span className="font-bold text-xl" style={{ color: '#092C5D' }}>14 DAY FREE TRIAL</span>
                    <span className="hidden sm:inline text-lg" style={{ color: '#092C5D' }}>—</span>
                    <span className="text-sm font-medium" style={{ color: '#092C5D', opacity: 0.9 }}>No obligations, no contracts, cancel at any time</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#e8f1fd] to-transparent"></div>
    </section>
  );
};

export default Hero;