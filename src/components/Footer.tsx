import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[#092C5D] py-12 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#092C5D] mb-4">Roboleads</h3>
            <p className="text-[#092C5D] text-sm">
              Automate Growth. Scale Without Stress.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#092C5D] hover:text-[#092C5D]/90  transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#092C5D] hover:text-[#092C5D]/90  transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#092C5D] hover:text-[#092C5D]/90  transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#092C5D] hover:text-[#092C5D]/90  transition-colors text-sm">
                  CRM Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-[#092C5D] hover:text-[#092C5D]/90  transition-colors text-sm">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#092C5D] hover:text-[#092C5D]/90  transition-colors text-sm">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#092C5D] hover:text-[#092C5D]/90  transition-colors text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-[#092C5D] hover:text-[#092C5D]/90  transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#092C5D] hover:text-[#092C5D]/90  transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-[#092C5D] text-sm mb-4 md:mb-0">
            © 2025 Roboleads. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-[#00B3A4] hover:text-[#00B3A4]/90 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#00B3A4] hover:text-[#00B3A4]/90 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#00B3A4] hover:text-[#00B3A4]/90  transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
