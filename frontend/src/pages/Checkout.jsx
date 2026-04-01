import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import toast from 'react-hot-toast';

export default function Checkout() {
  const { cart, cartTotal, placeOrder } = useShop();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    deliverySlot: 'Morning (9am - 12pm)',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 bg-background pt-20">
        <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center text-primary mb-6">
          <span className="material-symbols-outlined text-5xl opacity-50">shopping_bag</span>
        </div>
        <h2 className="font-headline text-3xl text-on-surface mb-4">Your Collection is Empty</h2>
        <p className="font-body text-secondary mb-8">Let's find some exquisite masterpieces.</p>
        <button onClick={() => navigate('/menu')} className="btn-primary">Return to Collections</button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const orderId = placeOrder(formData);
      setIsSubmitting(false);
      navigate(`/order-success?id=${orderId}`);
      toast.success('Bespoke order placed successfully!');
    }, 1500);
  };

  return (
    <div className="bg-surface min-h-screen py-32 pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h1 className="font-headline text-5xl lg:text-6xl text-on-surface mb-12 text-center md:text-left">
          Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-panel p-10 lg:p-12 rounded-[2rem] shadow-sm border border-outline-variant/30">
              <h2 className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-6 border-b border-outline-variant/30 pb-4">Personal Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface" />
                </div>
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface" />
                </div>
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface" />
                </div>
              </div>

              <h2 className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-6 border-b border-outline-variant/30 pb-4">Delivery Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="md:col-span-2">
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Street Address *</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface" />
                </div>
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">City *</label>
                  <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface" />
                </div>
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">ZIP Code *</label>
                  <input required type="text" name="zip" value={formData.zip} onChange={handleInputChange} className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface" />
                </div>
              </div>

              <h2 className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-6 border-b border-outline-variant/30 pb-4">Schedule</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Preferred Delivery Slot *</label>
                  <select required name="deliverySlot" value={formData.deliverySlot} onChange={handleInputChange} className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary transition-all text-on-surface">
                    <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                    <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                    <option value="Evening (4pm - 8pm)">Evening (4pm - 8pm)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Special Instructions</label>
                  <input type="text" name="notes" value={formData.notes} onChange={handleInputChange} placeholder="E.g. Call upon arrival" className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary transition-all text-on-surface" />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full py-5 text-sm uppercase tracking-widest mt-4 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="material-symbols-outlined animate-pulse">hourglass_top</span>
                ) : (
                  <>Complete Reservation <span className="material-symbols-outlined">check</span></>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-panel p-8 md:p-10 rounded-[2rem] shadow-sm border border-outline-variant/30 sticky top-32">
              <h2 className="font-headline text-2xl text-on-surface mb-8 border-b border-outline-variant/30 pb-6">Order Summary</h2>
              
              <div className="space-y-6 mb-8">
                {cart.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-20 h-24 rounded-xl bg-surface-container overflow-hidden shrink-0 border border-outline-variant/30">
                      <img src={item.imageUrls[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-headline text-lg text-on-surface line-clamp-2 leading-tight mb-1">{item.name}</h4>
                      <div className="font-label text-[10px] uppercase tracking-widest text-secondary">{item.size} × {item.quantity}</div>
                    </div>
                    <div className="font-headline text-lg text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 font-body text-sm text-secondary border-t border-outline-variant/30 pt-8">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-headline text-xl text-on-surface">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bespoke Delivery</span>
                  <span className="font-medium text-emerald-600">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span className="font-headline text-lg text-on-surface">${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center text-3xl font-headline text-primary pt-6 border-t border-outline-variant/30 mt-6">
                  <span>Total</span>
                  <span>${(cartTotal * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
