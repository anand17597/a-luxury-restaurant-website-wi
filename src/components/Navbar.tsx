import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")!.substring(1);
    document.getElementById(targetId)!.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-80 backdrop-blur-sm transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-white">Luxury Dine</div>
        <div className="hidden md:flex items-center gap-8">
          <Link to="#hero" onClick={handleLinkClick} className="nav-link">Home</Link>
          <Link to="#menu" onClick={handleLinkClick} className="nav-link">Menu</Link>
          <Link to="#reservation" onClick={handleLinkClick} className="nav-link">Reservation</Link>
          <Link to="#contact" onClick={handleLinkClick} className="nav-link">Contact</Link>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">☰</button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white p-4">
          <Link to="#hero" onClick={handleLinkClick} className="block py-2">Home</Link>
          <Link to="#menu" onClick={handleLinkClick} className="block py-2">Menu</Link>
          <Link to="#reservation" onClick={handleLinkClick} className="block py-2">Reservation</Link>
          <Link to="#contact" onClick={handleLinkClick} className="block py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;