import { useState, useEffect } from 'react';
import { Menu, X, Phone, HeartHandshake, Activity } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Prosedur', href: '#prosedur' },
    { name: 'Biaya', href: '#biaya' },
    { name: 'Testimoni', href: '#testimoni' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#005BCF] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
              <HeartHandshake size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#005BCF] leading-tight">Klinik <span className="text-[#1DA1DB]">Raden Saleh</span></h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Layanan Medis Profesional</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-[#005BCF] transition-colors">
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/628111111111" target="_blank" rel="noopener noreferrer" className="bg-[#1DA1DB] hover:bg-[#005BCF] text-white px-5 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 shadow-[0_4px_14px_0_rgba(29,161,219,0.39)]">
              <Phone size={18} />
              Hubungi Kami
            </a>
          </nav>

          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-t border-gray-100"
          >
            <nav className="flex flex-col p-4 w-full">
              {navLinks.map((link) => (
                <a 
                   key={link.name} 
                   href={link.href} 
                   onClick={() => setMobileMenuOpen(false)}
                   className="py-3 px-4 text-base font-medium border-b border-gray-50 text-gray-700 hover:text-[#005BCF] hover:bg-[#F5F8FC] rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="p-4 mt-2">
                <a href="https://wa.me/628111111111" target="_blank" rel="noopener noreferrer" className="w-full bg-[#1DA1DB] text-white px-5 py-3 rounded-xl font-medium flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Konsultasi WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
