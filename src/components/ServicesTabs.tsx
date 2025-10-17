import { useState } from "react";
import { Button } from "@/components/ui/button";

const ServicesTabs = () => {
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
      image : "/images/SEO.jpg",
      description: "Boost your website's visibility with cutting-edge SEO strategies that drive organic traffic and improve search rankings. We optimize your content, structure, and keywords to ensure your site stands out on Google and other search engines. Stay ahead of competitors with data-driven insights and continuous performance monitoring.",
      cta: "LEARN MORE"
    },
    "Lead Capturing": {
      title: "Lead Capturing",
      subtitle: "Convert Visitors Into Customers",
      image : "/images/lead capturing.jpg",
      description: "Transform your website traffic into qualified leads with our advanced lead capture systems. We implement strategic forms, landing pages, and conversion funnels that turn visitors into prospects. Our data-driven approach ensures maximum ROI from every visitor.",
      cta: "LEARN MORE"
    },
    "Automation and Ai": {
      title: "Automation and Ai",
      subtitle: "Work Smarter, Not Harder",
      image : "/images/automation and ai.jpg",
      description: "Streamline your business operations with intelligent automation and AI-powered solutions. From customer service chatbots to automated email sequences, we help you scale efficiently while maintaining personal touch with your customers.",
      cta: "LEARN MORE"
    },
    "Beautiful Web Design": {
      title: "Beautiful Web Design",
      subtitle: "Stunning Sites That Convert",
      image : "/images/web development.jpg",
      description: "Create visually stunning websites that not only look amazing but also drive conversions. Our design team combines aesthetics with functionality to deliver user experiences that engage visitors and turn them into loyal customers.",
      cta: "LEARN MORE"
    },
    "Mobile App Manageable": {
      title: "Mobile App Manageable",
      subtitle: "Control Everything On The Go",
      image : "/images/mobile app management.jpg",
      description: "Manage your entire business ecosystem from anywhere with our comprehensive mobile app. Track leads, monitor performance, communicate with clients, and make data-driven decisions all from the palm of your hand.",
      cta: "LEARN MORE"
    }
  };

  return (
    <section id="solutions" className="py-24 md:py-32 bg-[#092C5D]">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation - Mobile: Single Column, Desktop: Horizontal */}
          <div className="mb-8 bg-white rounded-lg p-2">
            {/* Mobile: Vertical tabs */}
            <div className="flex flex-col gap-2 md:hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 text-left ${
                    activeTab === tab.id
                      ? "bg-[#00B3A4] text-white"
                      : "bg-transparent text-[#092C5D] hover:text-[#092C5D]/90 hover:bg-[#00B3A4]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Desktop: Horizontal tabs */}
            <div className="hidden md:flex w-full gap-2">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
        activeTab === tab.id
          ? "bg-[#00B3A4] text-white"
          : "bg-transparent text-[#092C5D] hover:text-white hover:bg-[#00B3A4]"
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>
          </div>

          {/* Content Display */}
          <div className="bg-white rounded-lg p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#092C5D]/90 mb-2">
                    {tabContent[activeTab as keyof typeof tabContent].title}
                  </h2>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#092C5D] mb-4">
                    {tabContent[activeTab as keyof typeof tabContent].subtitle}
                  </h3>
                </div>
                
                <p className="text-[#092C5D] leading-relaxed text-base md:text-lg">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
                
                <Button className="bg-[#00B3A4] hover:bg-[#00B3A4]/90 text-[#092C5D] font-bold px-6 py-3 md:px-8 md:py-3 rounded-lg w-full md:w-auto">
                  {tabContent[activeTab as keyof typeof tabContent].cta}
                </Button>
              </div>

              {/* Right Column - Illustration */}
              <div className="bg-[#00B3A4] rounded-lg overflow-hidden flex flex-col order-1 lg:order-2">
                <div className="flex-1 relative">
                  <img
                    src={tabContent[activeTab as keyof typeof tabContent].image}
                    alt={tabContent[activeTab as keyof typeof tabContent].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
