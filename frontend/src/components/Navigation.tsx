import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-crimson/95 backdrop-blur-sm shadow-lg shadow-crimson/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center bg-crimson/80">
              <span className="text-gold font-display text-lg font-bold">IG</span>
            </div>
            <span className="font-display text-ivory text-xl font-semibold tracking-wide hidden sm:block">
              Indian Garden
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-ivory/90 hover:text-gold transition-colors duration-200 text-sm font-medium tracking-widest uppercase relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick('#contact')}
                className="px-5 py-2 bg-gold text-crimson font-body font-semibold text-sm rounded-sm tracking-wider uppercase hover:bg-saffron transition-colors duration-200"
              >
                Reserve
              </button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-ivory p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-crimson/98 border-t border-gold/20 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 font-body text-ivory/90 hover:text-gold hover:bg-white/5 transition-colors text-sm tracking-widest uppercase"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="px-4 pt-2">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full px-5 py-2.5 bg-gold text-crimson font-body font-semibold text-sm rounded-sm tracking-wider uppercase hover:bg-saffron transition-colors"
                >
                  Reserve a Table
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
