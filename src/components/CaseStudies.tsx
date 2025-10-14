import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const cases = [
    {
      title: "AI-Driven Sales Funnel",
      description: "Automated lead qualification and nurturing system for a SaaS startup",
      result: "87 new qualified leads in 2 weeks",
      metric: "87",
      unit: "Leads"
    },
    {
      title: "CRM & Pipeline Automation",
      description: "Complete customer management overhaul for a digital agency",
      result: "3x faster deal closure",
      metric: "3x",
      unit: "Speed"
    },
    {
      title: "WhatsApp Bot Integration",
      description: "24/7 customer support automation for e-commerce brand",
      result: "92% response satisfaction",
      metric: "92%",
      unit: "Satisfaction"
    }
  ];

  return (
    <section id="case-studies" className="py-24 md:py-32">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Automation That{" "}
            <span className="gradient-text">Delivers Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((caseStudy, index) => (
            <div
              key={caseStudy.title}
              className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl font-bold gradient-text mb-2">
                {caseStudy.metric}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
                {caseStudy.unit}
              </div>
              <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {caseStudy.description}
              </p>
              <Button
                variant="ghost"
                className="group-hover:text-primary transition-colors p-0 h-auto"
              >
                View Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
