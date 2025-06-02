import React, { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
// Import the image directly
import profileImg from '../assets/Abdu.png'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/Portfolio/' || location.pathname === '/Portfolio';

  // Effect to handle hash navigation after page load
  useEffect(() => {
    // If we have a hash in the URL and we're on the homepage
    if (isHomePage && location.hash) {
      const id = location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          const navbarHeight = 80; // Account for navbar height
          // Skip navbar offset for home section, apply it for other sections
          const offsetTop = id === 'home' ? element.offsetTop : element.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 100); // Small delay to ensure DOM is fully loaded
      }
    }
  }, [location, isHomePage]);

  // Smooth scroll function when already on homepage
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for navbar height
      // Skip navbar offset for home section, apply it for other sections
      const offsetTop = sectionId === 'home' ? element.offsetTop : element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Navigate to homepage section from another page
  const navigateToSection = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    if (isHomePage) {
      // If already on homepage, just scroll
      scrollToSection(e, sectionId);
    } else {
      // If on another page, navigate to homepage with hash
      navigate(`/Portfolio/#${sectionId}`);
    }
  };

  // Handle logo click - either scroll or navigate
  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();
    
    // If we're already on the homepage, scroll to top and remove hash
    if (isHomePage) {
      // Remove hash from URL without page reload
      window.history.pushState('', document.title, window.location.pathname);
      
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Navigate to homepage without hash
      navigate('/Portfolio/');
    }
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md font-red-hat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between py-4">
        <NavLink 
          to="/Portfolio/" 
          onClick={handleLogoClick} 
          className="flex items-center cursor-pointer text-gray-800 hover:text-purple-700 transition-colors duration-300"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-700 mr-4">
            {/* Use the imported image */}
            <img
              src={profileImg}
              alt="Abdalla Mohamed Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl  font-semibold uppercase text-gray-800 hover:text-purple-700 transition-colors duration-300 tracking-wide">Abdalla Mohamed</span>
        </NavLink>
        
        <nav className="hidden md:block">
          <ul className="flex">
            <li className="mx-1">
              <a 
                href="#"  
                onClick={handleLogoClick}
                className="px-4 py-3 inline-block text-base  font-semibold uppercase tracking-wider text-gray-700 hover:text-purple-600 transition-colors duration-300">
                Home
              </a>
            </li>
            <li className="mx-1">
              <a 
                href="#about" 
                onClick={(e) => navigateToSection(e, 'about')}
                className="px-4 py-3 inline-block text-base  font-semibold uppercase tracking-wider text-gray-700 hover:text-purple-600 transition-colors duration-300">
                About
              </a>
            </li>
            <li className="mx-1">
              <a 
                href="#projects" 
                onClick={(e) => navigateToSection(e, 'projects')}
                className="px-4 py-3 inline-block text-base  font-semibold  uppercase tracking-wider text-gray-700 hover:text-purple-600 transition-colors duration-300">
                Projects
              </a>
            </li>
            <li className="mx-1">
              <a 
                href="#contact" 
                onClick={(e) => navigateToSection(e, 'contact')}
                className="px-4 py-3 inline-block text-base font-semibold  uppercase tracking-wider text-gray-700 hover:text-purple-600 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="bg-white shadow-lg">
          <li className="border-b border-gray-200">
            <a 
              href="#" 
              onClick={handleLogoClick}
              className="block py-3 px-6 text-right  font-medium uppercase text-gray-700 hover:text-purple-600 tracking-wide">
              Home
            </a>
          </li>
          <li className="border-b border-gray-200">
            <a 
              href="#about" 
              onClick={(e) => navigateToSection(e, 'about')}
              className="block py-3 px-6 text-right  font-medium uppercase text-gray-700 hover:text-purple-600 tracking-wide">
              About
            </a>
          </li>
          <li className="border-b border-gray-200">
            <a 
              href="#projects" 
              onClick={(e) => navigateToSection(e, 'projects')}
              className="block py-3 px-6 text-right font-medium uppercase text-gray-700 hover:text-purple-600 tracking-wide">
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => navigateToSection(e, 'contact')}
              className="block py-3 px-6 text-right font-medium uppercase text-gray-700 hover:text-purple-600 tracking-wide">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
} 