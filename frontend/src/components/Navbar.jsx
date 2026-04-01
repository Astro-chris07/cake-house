import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Menu, X } from 'lucide-react';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { cartItemsCount } = useShop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Collections', path: '/menu' },
    { name: 'Admin', path: '/admin' }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-surface/70 backdrop-blur-xl transition-all">
        <Link to="/" className="text-2xl font-headline italic text-primary flex items-center gap-2">
          The Frosted Gallery
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link to="/menu" className={`text-xs uppercase tracking-widest font-label font-bold transition-transform duration-300 hover:scale-105 ${location.pathname === '/menu' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'}`}>
            Collections
          </Link>
          <Link to="/bespoke" className={`text-xs uppercase tracking-widest font-label font-bold transition-transform duration-300 hover:scale-105 ${location.pathname === '/bespoke' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'}`}>
            Bespoke
          </Link>
          <Link to="/artisanship" className={`text-xs uppercase tracking-widest font-label font-bold transition-transform duration-300 hover:scale-105 ${location.pathname === '/artisanship' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'}`}>
            Artisanship
          </Link>
          <Link to="/admin" className={`text-xs uppercase tracking-widest font-label font-bold transition-transform duration-300 hover:scale-105 ${location.pathname === '/admin' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary'}`}>
            Admin
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:scale-105 transition-transform duration-300 hidden md:block">
            <span className="material-symbols-outlined text-primary">person</span>
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative hover:scale-105 transition-transform duration-300"
          >
            <span className="material-symbols-outlined text-primary text-3xl">shopping_bag</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartItemsCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary ml-4"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[88px] left-0 w-full bg-surface/95 backdrop-blur-xl border-t border-outline/10 z-40 p-6 flex flex-col gap-6 shadow-2xl md:hidden">
          {navLinks.map((link) => (
             <Link
               key={link.name}
               to={link.path}
               onClick={() => setIsMobileMenuOpen(false)}
               className="text-lg uppercase tracking-widest font-label text-primary font-bold"
             >
               {link.name}
             </Link>
          ))}
          <Link to="/bespoke" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest font-label text-primary font-bold">Bespoke</Link>
          <Link to="/artisanship" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest font-label text-primary font-bold">Artisanship</Link>
        </div>
      )}

      {/* Cart Drawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
