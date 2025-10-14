import { Database, Workflow, Bot, TrendingUp, Cog, GraduationCap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Custom CRM & Dashboard Systems",
      description: "End-to-end CRM setup with white-label branding and automation logic."
    },
    {
      icon: Workflow,
      title: "Funnel & Workflow Automation",
      description: "Streamline leads, booking flows, and customer onboarding automatically."
    },
    {
      icon: Bot,
      title: "AI Chatbots & Smart Messaging",
      description: "Conversational bots for WhatsApp, web, or email to nurture leads 24/7."
    },
    {
      icon: TrendingUp,
      title: "Sales & Marketing Systems",
      description: "Seamless integration of ads, analytics, and conversion tracking."
    },
    {
      icon: Cog,
      title: "Operational Automation Pods",
      description: "Manage tasks, reports, and pipelines from a single automated hub."
    },
    {
      icon: GraduationCap,
      title: "Training & System Support",
      description: "Ready-to-use SOPs, tutorials, and dashboards for your internal teams."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Automate, Launch, and Scale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="gradient-border p-8 hover:scale-105 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
