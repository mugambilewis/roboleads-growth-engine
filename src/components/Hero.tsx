import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-8 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            <div>You're one step away from</div>
            <div className="gradient-text min-h-[1.2em]">
              {currentText}
              <span className="animate-pulse">|</span>
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Maximize your online potential with our expert SEO, lead-nurturing automation, AI-driven insights, and stunning website designs. Plus, stay in control on the go with our mobile app for seamless management of website leads and clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6 rounded-lg">
              GET A FREE QUOTE TODAY!
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
