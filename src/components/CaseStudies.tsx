import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 md:py-32">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <div className="order-1">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">About Us</p>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                  WHO WE ARE
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Building the Future of Smart Websites
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  At Roboleads, we specialize in creating AI-powered, SEO-optimized, and automation-driven websites that work for you 24/7. We believe that a website should be more than just an online presence—it should be a powerful business tool that attracts leads, automates processes, and drives revenue effortlessly.
                </p>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  With years of experience in web design, digital marketing, and AI automation, our team is dedicated to helping businesses scale online without the hassle of traditional web development.
                </p>
              </div>

              <div className="pt-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg">
                  MORE ABOUT US
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="order-2">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
              {/* Background elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-200 rounded-lg"></div>
              
              {/* Main illustration - Team at desk */}
              <div className="relative z-10">
                {/* Desk */}
                <div className="w-full h-32 bg-amber-600 rounded-lg mb-4 relative">
                  {/* Laptop on desk */}
                  <div className="absolute top-4 right-8 w-16 h-12 bg-gray-300 rounded flex items-center justify-center">
                    <div className="w-12 h-8 bg-white rounded"></div>
                  </div>
                  
                  {/* Papers */}
                  <div className="absolute top-6 right-4 w-8 h-10 bg-white rounded"></div>
                  
                  {/* Team members */}
                  <div className="absolute -top-8 left-4 flex space-x-4">
                    {/* Person 1 */}
                    <div className="w-12 h-16 bg-blue-500 rounded-lg flex items-end justify-center">
                      <div className="w-8 h-8 bg-pink-200 rounded-full mb-1"></div>
                    </div>
                    
                    {/* Person 2 */}
                    <div className="w-12 h-16 bg-indigo-500 rounded-lg flex items-end justify-center">
                      <div className="w-8 h-8 bg-pink-200 rounded-full mb-1"></div>
                    </div>
                    
                    {/* Person 3 */}
                    <div className="w-12 h-16 bg-yellow-500 rounded-lg flex items-end justify-center">
                      <div className="w-8 h-8 bg-pink-200 rounded-full mb-1"></div>
                    </div>
                  </div>
                </div>
                
                {/* Background shelves */}
                <div className="absolute top-0 right-0 w-20 h-16 bg-blue-200 rounded-lg"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-blue-300 rounded"></div>
                <div className="absolute top-6 right-2 w-4 h-4 bg-blue-300 rounded"></div>
                
                {/* Plants */}
                <div className="absolute bottom-0 left-0 w-6 h-8 bg-green-400 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-6 h-8 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
