import React from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, updateCartQuantity, removeFromCart, cartTotal } = useShop();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-on-surface/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      
      <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-surface shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full bg-surface">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/30 bg-surface">
            <h2 className="font-headline text-2xl flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-primary text-3xl">shopping_basket</span> 
              Your Collection
            </h2>
            <button 
              onClick={onClose}
              className="p-2 text-secondary hover:text-primary hover:bg-primary-container/50 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center text-primary opacity-50 mb-4">
                  <span className="material-symbols-outlined text-5xl">inventory_2</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl text-on-surface">Your collection is empty</h3>
                  <p className="font-body text-sm text-secondary mt-2">Looks like you haven't made your choice yet.</p>
                </div>
                <button 
                  onClick={() => { onClose(); navigate('/menu'); }}
                  className="btn-outline mt-6 bg-transparent"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex gap-6 p-4 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 hover:-translate-y-1 transition-transform">
                  <img src={item.imageUrls[0]} alt={item.name} className="w-20 h-24 object-cover rounded-xl" />
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-headline text-lg line-clamp-2 text-on-surface mb-1">{item.name}</h4>
                        <p className="font-label text-[10px] uppercase tracking-widest text-secondary">{item.size}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-secondary hover:text-error p-1 transition-colors"
                      >
                        <span className="material-symbols-outlined text-lg">close</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center bg-surface-container rounded-full px-2 py-1 border border-outline-variant/30">
                        <button 
                          onClick={() => updateCartQuantity(item.id, item.size, item.quantity - 1)}
                          className="p-1 hover:text-primary"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="w-8 text-center text-sm font-label font-bold text-on-surface">{item.quantity}</span>
                        <button 
                          onClick={() => updateCartQuantity(item.id, item.size, item.quantity + 1)}
                          className="p-1 hover:text-primary"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <span className="font-headline text-lg text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-outline-variant/30 p-8 bg-surface shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative z-10">
              <div className="flex justify-between items-center mb-6">
                <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Subtotal</span>
                <span className="font-headline text-3xl text-on-surface">${cartTotal.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full btn-primary py-5 text-sm tracking-widest uppercase flex items-center justify-center gap-2"
              >
                Proceed to Checkout <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <p className="text-center font-body text-xs text-secondary mt-5">Taxes and bespoke delivery configured at checkout.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
