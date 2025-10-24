import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Palette, Zap, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BeautifulWebDesign = () => {
  useEffect(() => {
    document.title = "Beautiful Web Design Services | Roboleads";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Modern, responsive, and high-performance web design that converts. Beautiful websites crafted by Roboleads.");
    }
  }, []);

  const features = [
    { icon: Palette, title: "Premium UX/UI Design", description: "Stunning interfaces that delight users" },
    { icon: Zap, title: "Fast Loading on All Devices", description: "Optimized performance for every screen" },
    { icon: Target, title: "Conversion-Focused Architecture", description: "Design that drives results and revenue" },
    { icon: Award, title: "Custom Branding for Your Business Identity", description: "Stand out with unique visual identity" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "Beautiful Web Design" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Modern Websites That Convert
            </h1>
            <p className="text-xl text-primary/80 mb-8 max-w-3xl mx-auto">
              Beautiful, responsive, and high-performance web design.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              What Makes Our Sites Stand Out
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
                  <p className="text-primary/70">{feature.description}</p>
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
              Your website is your best salesperson. Let it shine.
            </p>
            <h3 className="text-3xl font-bold text-primary mb-6">Ready to grow faster?</h3>
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

export default BeautifulWebDesign;
