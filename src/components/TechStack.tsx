const TechStack = () => {
  const technologies = [
    "Zapier",
    "Make",
    "WhatsApp Business API",
    "Webflow",
    "Framer",
    "Figma",
    "Notion",
    "Google Suite",
    "Adobe Creative Cloud",
    "Twilio",
    "Slack",
    "Stripe"
  ];

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Powered by the{" "}
            <span className="gradient-text">Best Tools on the Planet.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="glass-card p-6 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-foreground/80 font-medium text-center">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
