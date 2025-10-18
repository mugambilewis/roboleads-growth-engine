import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";




const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "automating your business with AI.",
    "generating leads 24/7.",
    "ranking higher on Google.",
    "effortless lead capture and sales.",
    "a stunning, mobile-friendly website."
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, phrases]);

  return (
    <section  className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
                    <div className="text-[#00B3A4] min-h-[1.2em] flex items-center justify-center">
                      <span className="text-2xl md:text-3xl lg:text-4xl">
                        {currentText}
                        <span className="animate-pulse">|</span>
                      </span>
                    </div>
                  </h1>
                  
                  <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-lg font-light">
                    Transform your business into a 24/7 growth machine with AI-powered automation, seamless lead generation, and a high-performing, mobile-friendly website that ranks and converts effortlessly.
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
                
                
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade for smooth transition */}
      
    </section>
  );
};

export default Hero;