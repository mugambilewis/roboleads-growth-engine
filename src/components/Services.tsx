import { Check, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Attract",
      description: "Drive organic traffic to your website with strategic keyword optimization, engaging content, and technical SEO enhancements.",
      image: "/images/high-conversion sales funnel.jpg",
    },
    {
      title: "UpSell",
      description: "Automate your sales and marketing processes to maximize conversions. AI-driven chatbots engage customers, while personalized automation nurtures leads through targeted email sequences.",
      image: "/images/AI chatbot conversation on.jpg",
    },
    {
      title: "Repeat",
      description: "Stay in control of your website anytime, anywhere with a mobile-friendly management app. Update content, track analytics, and respond to leads instantly, ensuring continuous engagement.",
      image: "/images/business management mobile app dashboard.jpg",
    },
    {
      title: "Sell",
      description: "Once visitors arrive, convert them into potential customers with high-converting lead capture tools.",
      image: "/images/E-commerce Conversion Dashboard.jpg",
    },
    {
      title: "Ascend",
      description: "A well-designed website enhances trust and keeps users engaged. With modern UI/UX, fast performance, and conversion-focused design, your site becomes an effective sales tool.",
      image: "/images/Website desktop + mobile.jpg",
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 relative bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading-1 md:text-heading-1 lg:text-heading-1 font-bold mb-4 md:mb-6 text-[#092C5D]">
            Smart Websites for Businesses
          </h2>
          <p className="text-base md:text-lg text-[#092C5D] max-w-4xl mx-auto leading-relaxed">
            We build high-performing online presences that maximize your potential. From attracting new visitors to converting them into loyal customers, our solutions cover every stage of your digital journey.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col space-y-16 md:space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                {/* Title - Mobile Only */}
                <div className="md:hidden">
                  <h3 className="text-2xl font-semibold  text-[#092C5D]">
                    {service.title}
                  </h3>
                  
                </div>

                {/* Image */}
                <div className={` md:mt-0 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <img 
                    src={service.image} 
                    alt={`${service.title} Dashboard`} 
                    className="w-full rounded-md" 
                  />
                </div>
                
                {/* Content - Desktop has title, Mobile only has description */}
                <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                  {/* Title - Desktop Only */}
                  <div className="hidden md:block">
                    <h3 className="text-heading-3 font-semibold  text-[#092C5D]">
                      {service.title}
                    </h3>
                    
                  </div>

                  <p className="text-base md:text-lg text-[#092C5D] leading-relaxed mt-4">
                    {service.description}
                  </p>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;