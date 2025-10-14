import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const features = [
    {
      title: "AI-Powered Marketing",
      description: "Automate email follow-ups, chatbots, and customer engagement"
    },
    {
      title: "Built-in Lead Generation", 
      description: "Capture and nurture leads with intelligent forms & pop-ups"
    },
    {
      title: "SEO & Speed Optimized",
      description: "Fast-loading and Google-friendly for maximum visibility"
    },
    {
      title: "Conversion-Focused Design",
      description: "Proven layouts designed to turn visitors into customers"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Illustration Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 relative overflow-hidden">
              {/* Stars background */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-60"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full opacity-40"></div>
                <div className="absolute top-16 left-12 w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
                <div className="absolute bottom-8 left-8 w-1 h-1 bg-white rounded-full opacity-30"></div>
                <div className="absolute bottom-16 right-12 w-2 h-2 bg-white rounded-full opacity-60"></div>
              </div>
              
              {/* Main illustration elements */}
              <div className="relative z-10">
                {/* Woman on laptop */}
                <div className="flex items-end justify-start mb-8">
                  <div className="w-32 h-32 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-900 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-10 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Robot in browser window */}
                <div className="flex justify-end">
                  <div className="w-24 h-16 bg-gray-100 rounded-lg p-2">
                    <div className="w-full h-full bg-teal-400 rounded flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Plant */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Why Choose Us</p>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                  WHY CHOOSE A{" "}
                  <span className="gradient-text">SMART WEBSITE?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Traditional websites are outdated. Smart Websites are the future.
                </p>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                A regular website just sits there. A Smart Website works for you, helping you attract leads, automate tasks, and grow your business without extra effort.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-primary">{feature.title}</span>
                      <span className="text-foreground/80"> - {feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg">
                  CHECK PLAN OFFERS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
