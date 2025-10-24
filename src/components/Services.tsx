import { Search, Briefcase, RefreshCw, Magnet, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Attract",
      description: "Drive organic traffic to your website with strategic keyword optimization, engaging content, and technical SEO enhancements.",
      icon: Search,
    },
    {
      title: "UpSell",
      description: "Automate your sales and marketing processes to maximize conversions. AI-driven chatbots engage customers, while personalized automation nurtures leads through targeted email sequences.",
      icon: Briefcase,
    },
    {
      title: "Repeat",
      description: "Stay in control of your website anytime, anywhere with a mobile-friendly management app. Update content, track analytics, and respond to leads instantly, ensuring continuous engagement.",
      icon: RefreshCw,
    },
    {
      title: "Sell",
      description: "Once visitors arrive, convert them into potential customers with high-converting lead capture tools.",
      icon: Magnet,
    },
    {
      title: "Ascend",
      description: "A well-designed website enhances trust and keeps users engaged. With modern UI/UX, fast performance, and conversion-focused design, your site becomes an effective sales tool.",
      icon: Globe,
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#092C5D]">
            Smart Websites for Businesses
          </h2>
          <p className="text-base md:text-lg text-[#092C5D] max-w-4xl mx-auto leading-relaxed">
            Build a high-performing online presence with ease. From SEO to automation, lead capturing, and stunning website design, our smart solutions empower your business. Manage everything effortlessly, even from your mobile device.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border-2 border-[#092C5D] rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#00B3A4] rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#00B3A4] text-center mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#092C5D] text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Connector Arrows - Desktop */}
          <div className="hidden md:flex justify-center items-center mb-8">
            <div className="flex items-center gap-4">
              <svg width="120" height="60" viewBox="0 0 120 60" className="transform rotate-90">
                <path d="M 60 10 L 60 40 M 60 40 L 50 30 M 60 40 L 70 30" stroke="#00B3A4" strokeWidth="3" fill="none"/>
              </svg>
              <svg width="120" height="60" viewBox="0 0 120 60">
                <path d="M 10 30 L 90 30 M 90 30 L 80 20 M 90 30 L 80 40" stroke="#00B3A4" strokeWidth="3" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Mobile Connector */}
          <div className="md:hidden flex justify-center mb-8">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <path d="M 30 10 L 30 40 M 30 40 L 20 30 M 30 40 L 40 30" stroke="#00B3A4" strokeWidth="3" fill="none"/>
            </svg>
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-8">
            {services.slice(3, 5).map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border-2 border-[#092C5D] rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#00B3A4] rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#00B3A4] text-center mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#092C5D] text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Connector Arrow - Desktop */}
          <div className="hidden md:flex justify-center">
            <svg width="60" height="60" viewBox="0 0 60 60" className="transform rotate-180">
              <path d="M 30 10 L 30 40 M 30 40 L 20 30 M 30 40 L 40 30" stroke="#00B3A4" strokeWidth="3" fill="none"/>
            </svg>
          </div>

          {/* Mobile Bottom Connector */}
          <div className="md:hidden flex justify-center">
            <svg width="60" height="60" viewBox="0 0 60 60" className="transform rotate-180">
              <path d="M 30 10 L 30 40 M 30 40 L 20 30 M 30 40 L 40 30" stroke="#00B3A4" strokeWidth="3" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;