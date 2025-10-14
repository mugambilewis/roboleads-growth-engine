import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Globe } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to Automate Your{" "}
            <span className="gradient-text">Brand's Growth?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Let's map your business systems and turn automation into your biggest growth advantage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="animated-gradient glow-effect text-lg px-8 py-6">
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border hover:bg-card">
              Start Your Free System Audit
            </Button>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:hello@roboleads.io"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@roboleads.io</span>
            </a>
            <a
              href="https://www.roboleads.io"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>www.roboleads.io</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
