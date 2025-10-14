import { Search, Zap, Smartphone, Magnet, Globe, ArrowRight, ArrowDown, ArrowUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Attract",
      description: "Drive organic traffic to your website with strategic keyword optimization, engaging content, and technical SEO enhancements.",
      color: "from-blue-400 to-purple-500",
      position: "top-left"
    },
    {
      icon: Zap,
      title: "UpSell",
      description: "Automate your sales and marketing processes to maximize conversions. AI-driven chatbots engage customers, while personalized automation nurtures leads through targeted email sequences.",
      color: "from-green-400 to-blue-500",
      position: "top-center"
    },
    {
      icon: Smartphone,
      title: "Repeat",
      description: "Stay in control of your website anytime, anywhere with a mobile-friendly management app. Update content, track analytics, and respond to leads instantly, ensuring continuous engagement.",
      color: "from-purple-400 to-pink-500",
      position: "top-right"
    },
    {
      icon: Magnet,
      title: "Sell",
      description: "Once visitors arrive, convert them into potential customers with high-converting lead capture tools.",
      color: "from-yellow-400 to-orange-500",
      position: "bottom-left"
    },
    {
      icon: Globe,
      title: "Ascend",
      description: "A well-designed website enhances trust and keeps users engaged. With modern UI/UX, fast performance, and conversion-focused design, your site becomes an effective sales tool.",
      color: "from-indigo-400 to-purple-500",
      position: "bottom-right"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-600">
            Smart Websites for Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We build high-performing online presences that maximize your potential. From attracting new visitors to converting them into loyal customers, our solutions cover every stage of your digital journey.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Clean 5-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Attract */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-600 mb-3 text-center">Attract</h3>
              <p className="text-gray-600 leading-relaxed text-sm text-center">
                Drive organic traffic to your website with strategic keyword optimization, engaging content, and technical SEO enhancements.
              </p>
            </div>

            {/* UpSell */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-600 mb-3 text-center">UpSell</h3>
              <p className="text-gray-600 leading-relaxed text-sm text-center">
                Automate your sales and marketing processes to maximize conversions. AI-driven chatbots engage customers, while personalized automation nurtures leads through targeted email sequences.
              </p>
            </div>

            {/* Repeat */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-600 mb-3 text-center">Repeat</h3>
              <p className="text-gray-600 leading-relaxed text-sm text-center">
                Stay in control of your website anytime, anywhere with a mobile-friendly management app. Update content, track analytics, and respond to leads instantly, ensuring continuous engagement.
              </p>
            </div>

            {/* Sell */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Magnet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-600 mb-3 text-center">Sell</h3>
              <p className="text-gray-600 leading-relaxed text-sm text-center">
                Once visitors arrive, convert them into potential customers with high-converting lead capture tools.
              </p>
            </div>

            {/* Ascend */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-600 mb-3 text-center">Ascend</h3>
              <p className="text-gray-600 leading-relaxed text-sm text-center">
                A well-designed website enhances trust and keeps users engaged. With modern UI/UX, fast performance, and conversion-focused design, your site becomes an effective sales tool.
              </p>
            </div>
          </div>

          {/* Simple Flow Indicators */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <div className="w-8 h-0.5 bg-purple-600"></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <div className="w-8 h-0.5 bg-purple-600"></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-500 font-medium">Complete Digital Journey</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
