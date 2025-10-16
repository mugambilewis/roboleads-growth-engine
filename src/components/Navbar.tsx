import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBooking = () => {
    setIsOpen(false);
    navigate("/pricing");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl sm:text-2xl font-bold cursor-pointer"
            style={{ color: '#092C5D' }}
            onClick={() => navigate('/')}
          >
            Roboleads
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a 
              href="#home" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              HOME
            </a>
            <a 
              href="#services" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#services');
              }}
            >
              SERVICES
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about-us');
              }}
            >
              ABOUT US
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              CONTACT
            </a>
            <Link
              to="/pricing"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#092C5D' }}
            >
              PRICING
            </Link>
            <Button
              className="text-white font-medium px-6 py-2 rounded-md transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: '#00B3A4' }}
              onClick={handleBooking}
            >
              BOOK APPOINTMENT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors hover:bg-gray-100"
            style={{ color: '#092C5D' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 pb-4">
            <a 
              href="#home" 
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              HOME
            </a>
            <a 
              href="#services" 
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#services');
              }}
            >
              SERVICES
            </a>
            <a 
              href="#about-us" 
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about-us');
              }}
            >
              ABOUT US
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              CONTACT
            </a>
            <Link
              to="/pricing"
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={() => setIsOpen(false)}
            >
              PRICING
            </Link>
            <Button
              className="text-white font-medium w-full py-2 rounded-md transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: '#00B3A4' }}
              onClick={handleBooking}
            >
              BOOK APPOINTMENT
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;