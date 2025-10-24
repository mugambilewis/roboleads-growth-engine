import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#092C5D] py-12">
      <div className="container mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Left Section - Company Information & Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#092C5D] font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">ROBOLEADS</h3>
                <p className="text-body-small text-white">WEBSITE AUTOMATION AGENCY</p>
              </div>
            </div>
            
            <p className="text-[#00B3A4] text-body-small font-medium">
              Join the Smart Website Revolution Today!
            </p>
            
            <div className="space-y-2">
              <p className="text-white text-body-small">Email: info@roboleads.com</p>
              <p className="text-white text-body-small">Phone: (555) 123-4567</p>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-[#00B3A4] font-semibold text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/more-about-us" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                  PLANS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                  BOOK APPOINTMENT
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Services/Features List */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/seo" className="text-white hover:text-[#00B3A4] transition-colors text-sm">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/services/lead-capturing" className="text-white hover:text-[#00B3A4] transition-colors text-sm">
                  LEAD CAPTURING
                </Link>
              </li>
              <li>
                <Link to="/services/automation-ai" className="text-white hover:text-[#00B3A4] transition-colors text-sm">
                  AUTOMATION AND AI
                </Link>
              </li>
              <li>
                <Link to="/services/beautiful-web-design" className="text-white hover:text-[#00B3A4] transition-colors text-sm">
                  BEAUTIFUL WEB DESIGN
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-manageable" className="text-white hover:text-[#00B3A4] transition-colors text-sm">
                  MOBILE APP MANAGEABLE
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Legal & Copyright */}
        <div className="border-t border-[#00B3A4] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#00B3A4] text-body-small mb-4 md:mb-0">
              © Roboleads Agency All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
