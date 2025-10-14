import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhoWeAre = () => {
  const [activeTab, setActiveTab] = useState("SEO");

  const tabs = [
    { id: "SEO", label: "SEO" },
    { id: "Lead Capturing", label: "Lead Capturing" },
    { id: "Automation and Ai", label: "Automation and Ai" },
    { id: "Beautiful Web Design", label: "Beautiful Web Design" },
    { id: "Mobile App Manageable", label: "Mobile App Manageable" }
  ];

  const tabContent = {
    "SEO": {
      title: "SEO",
      subtitle: "Rank Higher, Get Found, Grow Faster",
      description: "Boost your website's visibility with cutting-edge SEO strategies that drive organic traffic and improve search rankings. We optimize your content, structure, and keywords to ensure your site stands out on Google and other search engines. Stay ahead of competitors with data-driven insights and continuous performance monitoring.",
      cta: "LEARN MORE"
    },
    "Lead Capturing": {
      title: "Lead Capturing",
      subtitle: "Convert Visitors Into Customers",
      description: "Transform your website traffic into qualified leads with our advanced lead capture systems. We implement strategic forms, landing pages, and conversion funnels that turn visitors into prospects. Our data-driven approach ensures maximum ROI from every visitor.",
      cta: "LEARN MORE"
    },
    "Automation and Ai": {
      title: "Automation and Ai",
      subtitle: "Work Smarter, Not Harder",
      description: "Streamline your business operations with intelligent automation and AI-powered solutions. From customer service chatbots to automated email sequences, we help you scale efficiently while maintaining personal touch with your customers.",
      cta: "LEARN MORE"
    },
    "Beautiful Web Design": {
      title: "Beautiful Web Design",
      subtitle: "Stunning Sites That Convert",
      description: "Create visually stunning websites that not only look amazing but also drive conversions. Our design team combines aesthetics with functionality to deliver user experiences that engage visitors and turn them into loyal customers.",
      cta: "LEARN MORE"
    },
    "Mobile App Manageable": {
      title: "Mobile App Manageable",
      subtitle: "Control Everything On The Go",
      description: "Manage your entire business ecosystem from anywhere with our comprehensive mobile app. Track leads, monitor performance, communicate with clients, and make data-driven decisions all from the palm of your hand.",
      cta: "LEARN MORE"
    }
  };

  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-lg p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-background text-foreground"
                    : "bg-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-background mb-2">
                    {tabContent[activeTab as keyof typeof tabContent].title}
                  </h2>
                  <h3 className="text-xl md:text-2xl font-bold text-background mb-4">
                    {tabContent[activeTab as keyof typeof tabContent].subtitle}
                  </h3>
                </div>
                
                <p className="text-background/80 leading-relaxed text-lg">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
                
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg">
                  {tabContent[activeTab as keyof typeof tabContent].cta}
                </Button>
              </div>

              {/* Right Column - Illustration Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {tabContent[activeTab as keyof typeof tabContent].title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-background/60 font-medium">
                    Illustration for {tabContent[activeTab as keyof typeof tabContent].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
