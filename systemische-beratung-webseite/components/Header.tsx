import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#ueber-mich', text: 'Über mich' },
    { href: '#fuer-wen', text: 'Für wen?' },
    { href: '#ansatz', text: 'Mein Ansatz' },
    { href: '#prozess', text: 'Prozess' },
    { href: '#kontakt', text: 'Kontakt' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${isScrolled ? 'shadow-lg bg-header-nav' : 'bg-header'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-fg-header-nav">
        <a href="#hero" className="font-heading text-xl font-bold transition-colors text-fg-header-logo">Systemische Beratung</a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-body text-sm font-semibold hover:underline transition-colors text-fg-header-nav">
              {link.text}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;