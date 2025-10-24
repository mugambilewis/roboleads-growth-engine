import { Button } from "@/components/ui/button";

const ReadyToBegin = () => {
  return (
    <section className="py-8 md:py-8 bg-[#e8f1fd]">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading with Stylized "BEGIN?" */}
          <div className="space-y-4">
            <h2 className="text-heading-1 md:text-heading-1 lg:text-heading-1 font-bold text-[#092C5D]">
              READY TO
              <span className="text-[#00B3A4]"> BEGIN?</span>
            </h2>
            <div className="relative inline-block">
              
             
             
            </div>
          </div>

          {/* Descriptive Text */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Why delay the growth of your business any longer? Seize the opportunity to have a website that functions tirelessly around the clock, working for you every minute of the day, every day of the week!
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Button className="bg-[#00B3A4] hover:bg-[#00B3A4]/90 text-[#092C5D] font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBegin;
