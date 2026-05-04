import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#home' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass shadow-lg shadow-primary-500/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg">S</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="font-display font-semibold text-lg gradient-text">
                  Sebastian Alvarez
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  /fullstack-dev
                </div>
              </div>
            </a>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-dark-700 hover:text-primary-600 transition-colors link-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-cyan-500 text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Disponible
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-dark-700 hover:text-primary-600 transition-colors"
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-white pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-display font-semibold text-dark-800 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 text-white rounded-full font-semibold mt-4"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
