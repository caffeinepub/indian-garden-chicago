import { MapPin, Phone } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'indian-garden-chicago');

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-crimson text-ivory">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/restaurant-logo.dim_300x300.png"
                alt="Indian Garden Logo"
                className="w-12 h-12 rounded-full border-2 border-gold/60 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div>
                <h3 className="font-display text-xl font-bold text-ivory">Indian Garden</h3>
                <p className="font-body text-ivory/50 text-xs tracking-wider">Chicago, IL · Est. 1981</p>
              </div>
            </div>
            <p className="font-body text-ivory/60 text-sm leading-relaxed mb-5">
              Authentic Indian cuisine in the heart of Chicago. 
              Bringing the vibrant flavors and warm hospitality of India to your table since 1981.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: SiFacebook, href: '#', label: 'Facebook' },
                { Icon: SiInstagram, href: '#', label: 'Instagram' },
                { Icon: SiX, href: '#', label: 'X (Twitter)' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-gold font-semibold mb-5 text-sm tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-ivory/60 text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-gold font-semibold mb-5 text-sm tracking-widest uppercase">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
                <p className="font-body text-ivory/60 text-sm leading-relaxed">
                  68 W. Washington Street<br />
                  Chicago, IL 60602
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold/60 flex-shrink-0" />
                <a
                  href="tel:3122369280"
                  className="font-body text-ivory/60 text-sm hover:text-gold transition-colors"
                >
                  (312) 236-9280
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-ivory/40 text-xs">
            © {year} Indian Garden Chicago. All rights reserved.
          </p>
          <p className="font-body text-ivory/40 text-xs flex items-center gap-1">
            Built with{' '}
            <span className="text-saffron">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-saffron transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
