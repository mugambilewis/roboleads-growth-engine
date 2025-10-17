import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = [
    "automating your business with AI.",
    "generating leads 24/7.",
    "ranking higher on Google.",
    "effortless lead capture and sales.",
    "a stunning, mobile-friendly website."
  ];

  useEffect(() => {
    const currentString = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Wait 2 seconds before deleting
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deletion, slower typing

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#e8f1fd' }}>
      {/* Background Image with Overlay */}
      
      
      
      {/* Content */}
      <div className="container mx-auto px-8 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight" style={{ color: '#092C5D' }}>
            <div>You're one step away from</div>
            <div className="min-h-[1.2em]" style={{ color: '#00B3A4' }}>
              {currentText}
              <span className="animate-pulse">|</span>
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#092C5D', opacity: 0.9 }}>
            Maximize your online potential with our expert SEO, lead-nurturing automation, AI-driven insights, and stunning website designs. Plus, stay in control on the go with our mobile app for seamless management of website leads and clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-[#092C5D] font-bold text-lg px-8 py-6 rounded-lg" style={{ backgroundColor: '#00B3A4' }}>
              GET A FREE AUDIT TODAY!
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
     
    </section>
  );
};

export default Hero;