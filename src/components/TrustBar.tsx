const TrustBar = () => {
  const integrations = [
    "Zapier",
    "Make",
    "WhatsApp API",
    "Google Workspace",
    "Notion",
    "Slack",
    "Twilio",
    "Stripe"
  ];

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8">
          Powered by industry-leading tools
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {integrations.map((integration) => (
            <div
              key={integration}
              className="text-foreground/60 hover:text-foreground transition-colors text-lg font-medium"
            >
              {integration}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
