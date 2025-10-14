import { Button } from "@/components/ui/button";

const ReadyToBegin = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading with Stylized "BEGIN?" */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
              READY TO
            </h2>
            <div className="relative inline-block">
              <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 transform -rotate-2 px-8 py-4 rounded-lg shadow-lg">
                <span className="text-white font-bold text-4xl md:text-6xl lg:text-7xl">
                  BEGIN?
                </span>
              </div>
              {/* Additional ribbon effect */}
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-purple-800 to-pink-600 transform -rotate-2 rounded-lg opacity-30"></div>
            </div>
          </div>

          {/* Descriptive Text */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Why delay the growth of your business any longer? Seize the opportunity to have a website that functions tirelessly around the clock, working for you every minute of the day, every day of the week!
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBegin;
