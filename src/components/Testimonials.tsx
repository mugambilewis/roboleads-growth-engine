import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Roboleads completely transformed how we run client operations. Their automation systems saved us 20+ hours per week.",
      author: "Sarah Chen",
      role: "CEO, Digital Growth Agency",
      rating: 5
    },
    {
      quote: "We automated our entire onboarding system and doubled our response speed. The ROI was immediate.",
      author: "Marcus Williams",
      role: "Founder, TechStart Solutions",
      rating: 5
    },
    {
      quote: "The team's expertise in CRM and workflow automation is unmatched. They truly understand modern business needs.",
      author: "Emily Rodriguez",
      role: "COO, Scale Ventures",
      rating: 5
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="gradient-border p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
