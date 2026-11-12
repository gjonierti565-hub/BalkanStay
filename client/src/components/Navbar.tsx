import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ShoppingCart, Cpu, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';

export const Navbar: React.FC = () => {
  const [location] = useLocation();
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Ballina' },
    { href: '/products', label: 'Produktet' },
    { href: '/pc-builder', label: 'PC Builder ⭐' },
    { href: '/deals', label: 'Oferta 🔥' },
    { href: '/quiz', label: 'Gjej PC-në' },
    { href: '/services', label: 'Shërbime' },
    { href: '/about', label: 'Rreth Nesh' },
    { href: '/contact', label: 'Kontakt' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#090c10]/95 backdrop-blur-md border-b border-white/10">
      {/* Top Banner announcement */}
      <div className="bg-gradient-to-r from-blue-950 via-cyan-950 to-indigo-950 px-4 py-1.5 text-xs text-center border-b border-cyan-500/20 text-cyan-200">
        <span>🚀 Transport Falas për porosi mbi 300€ në Kosovë, Shqipëri dhe RMV!</span>
      </div>

      <div className="container flex items-center justify-between h-20">
        {/* Brand Logo */}
        <Link href="/">
          <div className="flex items-center gap-2.5 cursor-pointer group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-white">NEXORA</span>
              <span className="text-[9px] block text-cyan-400 font-semibold tracking-widest uppercase">Computer Store</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav - visible from md/lg */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-[12px] font-bold tracking-wide transition-colors cursor-pointer py-1 border-b-2 whitespace-nowrap ${
                    isActive
                      ? 'text-cyan-400 border-cyan-400'
                      : 'text-gray-300 border-transparent hover:text-white hover:border-gray-500'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link href="/cart">
            <Button
              variant="outline"
              className="relative border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center gap-1.5 px-3 py-2 text-xs"
            >
              <ShoppingCart className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline font-semibold">Shporta</span>
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          <Link href="/pc-builder" className="hidden sm:inline-block">
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-black text-xs shadow-lg shadow-cyan-500/25 px-3.5 py-2">
              Ndërto PC-në
            </Button>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d121c] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3 rounded-lg text-xs font-semibold cursor-pointer ${
                    location === link.href ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'bg-white/5 text-gray-300'
                  }`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
          <Link href="/pc-builder">
            <Button
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold mt-2 text-xs py-3"
            >
              ⭐ PC Builder (Krijo Konfigurim)
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};
