import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Strona Główna', path: '/' },
    { name: 'O mnie', path: '/o-mnie' },
    { name: 'Oferta', path: '/oferta' },
    { name: 'Cennik', path: '/cennik' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-[#84A59D]" />
              <span className="font-serif text-2xl font-semibold text-gray-900">
                Dietetyk<span className="text-[#84A59D]">Pro</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#84A59D] ${
                  isActive(link.path) ? 'text-[#84A59D]' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-[#E29578] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#d18467] transition-colors shadow-sm"
            >
              Umów wizytę
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-[#84A59D] bg-green-50'
                    : 'text-gray-700 hover:text-[#84A59D] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-[#E29578] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#d18467] transition-colors"
            >
              Umów wizytę
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
