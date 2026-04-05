import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full scrolling top-0 left-0 z-50"> 
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-6 lg:px-12"> 
        {/* Logo */} 
        <div className="flex items-center"> 
          <Link to="/">
            <img src="/assets/images/img_vector_smart_object_70x166.png" alt="Logo" className="w-[120px] sm:w-[140px] lg:w-[166px] h-auto lg:h-[70px] object-contain" /> 
          </Link>
        </div> 
        {/* Navigation */} 
        <nav className="hidden lg:flex items-center gap-[36px]"> 
          <Link to="/" className="text-[19px] text-[#093A30] hover:text-[#f37565] transition">Home</Link> 
          <Link to="/course" className="text-[19px] text-[#093A30] hover:text-[#f37565] transition">Courses</Link> 
          <Link to="/about" className="text-[19px] text-[#093A30] hover:text-[#f37565] transition">About</Link> 
          <Link to="/events" className="text-[19px] text-[#093A30] hover:text-[#f37565] transition">News & Events</Link> 
          <Link to="/blog" className="text-[19px] text-[#093A30] hover:text-[#f37565] transition">Blog</Link> 
          <Link to="/contact">
            <button className="ml-6 bg-[#f37565] text-white px-6 py-2 rounded-[8px] text-[19px] font-medium hover:bg-[#e55a4a] transition"> Contact </button> 
          </Link>
        </nav> 
        {/* Mobile Menu Button */} 
        <div className="lg:hidden"> 
          <button id="mobileMenuBtn" className="text-[#093A30] p-2" onClick={toggleMenu}>
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button> 
        </div> 
      </div> 

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div id="mobileMenu" className="bg-white shadow-lg lg:hidden relative z-[60]">
          <div className="px-4 py-4 space-y-4">
            <Link to="/" className="block text-[16px] text-[#093a30] hover:text-[#f37565]" onClick={toggleMenu}>Home</Link>
            <Link to="/course" className="block text-[16px] text-[#093a30] hover:text-[#f37565]" onClick={toggleMenu}>Courses</Link>
            <Link to="/about" className="block text-[16px] text-[#093a30] hover:text-[#f37565]" onClick={toggleMenu}>About</Link>
            <Link to="/events" className="block text-[16px] text-[#093a30] hover:text-[#f37565]" onClick={toggleMenu}>News & Events</Link>
            <Link to="/blog" className="block text-[16px] text-[#093a30] hover:text-[#f37565]" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" onClick={toggleMenu} className="block text-center mt-4">
              <button className="w-full bg-[#f37565] text-white px-5 py-2 rounded-[8px] text-[16px] hover:bg-[#e55a4a]">Contact</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
