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

  // Duplicate items to ensure seamless marquee scrolling
  const scrollingItems = [...integrations, ...integrations];

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8">
          Powered by industry-leading tools
        </p>
        <div className="group relative overflow-hidden">
          <div
            className="flex w-max items-center gap-12 md:gap-16 animate-marquee group-hover:[animation-play-state:paused] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          >
            {scrollingItems.map((integration, idx) => (
              <div
                key={`${integration}-${idx}`}
                className="text-foreground/60 hover:text-foreground transition-colors text-lg font-medium"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
