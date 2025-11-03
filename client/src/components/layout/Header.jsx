import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900 shadow-2xl shadow-blue-500/20 backdrop-blur-md bg-opacity-98'
          : 'bg-transparent'
      }`}
    >
      <Navbar scrolled={scrolled} />
    </header>
  );
}
