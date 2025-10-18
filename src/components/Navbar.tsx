import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                className="text-sm font-medium transition-colors hover:opacity-80 flex items-center gap-1"
                style={{ color: '#092C5D' }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                RESOURCES
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg overflow-hidden"
                  style={{ backgroundColor: '#092C5D' }}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    to="/community"
                    className="flex items-center gap-3 px-4 py-3 text-white text-sm hover:bg-opacity-90 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="text-lg">👥</span>
                    <span className="font-medium">Community</span>
                  </Link>
                  <Link
                    to="/support"
                    className="flex items-center gap-3 px-4 py-3 text-white text-sm hover:bg-opacity-90 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="text-lg">🎧</span>
                    <span className="font-medium">Support</span>
                  </Link>
                  <Link
                    to="/library"
                    className="flex items-center gap-3 px-4 py-3 text-white text-sm hover:bg-opacity-90 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="text-lg">📚</span>
                    <span className="font-medium">Questions Library</span>
                  </Link>
                  <Link
                    to="/docs"
                    className="flex items-center gap-3 px-4 py-3 text-white text-sm hover:bg-opacity-90 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="text-lg">📄</span>
                    <span className="font-medium">Documentation</span>
                  </Link>
                </div>
              )}
            </div>

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
            isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
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
              href="#about" 
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
            >
              ABOUT US
            </a>
            
            {/* Mobile Dropdown */}
            <div>
              <button
                className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50 w-full text-left flex items-center justify-between"
                style={{ color: '#092C5D' }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                RESOURCES
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/community"
                    className="block text-sm py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
                    style={{ color: '#092C5D' }}
                    onClick={() => setIsOpen(false)}
                  >
                    👥 Community
                  </Link>
                  <Link
                    to="/support"
                    className="block text-sm py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
                    style={{ color: '#092C5D' }}
                    onClick={() => setIsOpen(false)}
                  >
                    🎧 Support
                  </Link>
                  <Link
                    to="/library"
                    className="block text-sm py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
                    style={{ color: '#092C5D' }}
                    onClick={() => setIsOpen(false)}
                  >
                    📚 Questions Library
                  </Link>
                  <Link
                    to="/docs"
                    className="block text-sm py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
                    style={{ color: '#092C5D' }}
                    onClick={() => setIsOpen(false)}
                  >
                    📄 Documentation
                  </Link>
                </div>
              )}
            </div>

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