import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Database, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LeadCapturing = () => {
  useEffect(() => {
    document.title = "Lead Capturing Services | Roboleads";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Turn visitors into loyal customers with powerful lead capture tools and conversion optimization from Roboleads.");
    }
  }, []);

  const features = [
    { icon: Users, title: "High Converting Forms and Landing Pages", description: "Capture leads with beautiful, optimized designs" },
    { icon: MessageSquare, title: "AI Driven Chatbots", description: "Engage visitors 24/7 with intelligent conversations" },
    { icon: Database, title: "CRM Integration for Seamless Lead Storage", description: "Automatically organize and manage your leads" },
    { icon: Mail, title: "Automated Follow Ups", description: "Never miss an opportunity with smart nurturing" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "Lead Capturing" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-1 md:text-heading-1 font-bold text-primary mb-6">
              Turn Visitors into Loyal Customers
            </h1>
            <p className="text-xl text-primary/80 mb-8 max-w-3xl mx-auto">
              Powerful tools to capture and nurture leads that convert.
            </p>
            <Link to="/book-appointment">
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Book Appointment
              </Button>
            </Link>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-heading-2 md:text-heading-2 font-bold text-[#092C5D] text-center mb-12">
              Our Conversion Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <feature.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-[#092C5D]/90">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-accent/10 to-primary/5 p-12 rounded-3xl text-center"
          >
            <p className="text-2xl text-primary/90 mb-8 font-medium">
              Stop losing leads. Start capturing growth today.
            </p>
            <h3 className="text-heading-2 font-bold text-primary mb-6">Ready to grow faster?</h3>
            <Link to="/book-appointment">
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Book Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LeadCapturing;
