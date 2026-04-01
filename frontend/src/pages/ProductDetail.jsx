import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import toast from 'react-hot-toast';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useShop();
  
  const product = products.find(p => p.id === id);
  const mainImage = product?.imageUrls[0];
  const [selectedSize, setSelectedSize] = useState(product?.customizationOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-20 bg-background">
        <h2 className="font-headline text-4xl mb-6">Creation Not Found</h2>
        <button onClick={() => navigate('/menu')} className="btn-primary">Return to Collections</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, selectedSize, quantity);
    toast.success(`${quantity} ${product.name} reserved flawlessly!`, {
      icon: '✨',
      style: {
        borderRadius: '100px',
        background: 'var(--color-primary-container)',
        color: 'var(--color-on-primary-container)',
        fontFamily: 'var(--font-label)',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '10px',
        letterSpacing: '0.1em'
      },
    });
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="bg-background min-h-[90vh] py-32 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-secondary hover:text-primary mb-12 transition-colors font-label text-xs uppercase tracking-widest font-bold"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Collections
        </button>

        <div className="glass-panel border border-white/40 shadow-xl rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Image Section */}
            <div className="p-8 lg:p-16 flex flex-col gap-6 items-center bg-surface-container-low/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full mix-blend-multiply blur-3xl"></div>
              <div className="aspect-[4/5] w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border border-white/50">
                <img src={mainImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 lg:p-16 flex flex-col justify-center bg-surface">
              <div className="mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container border border-outline-variant/30 text-primary font-label text-[10px] uppercase tracking-widest font-bold mb-6">
                  {product.category}
                </span>
                <h1 className="font-headline text-5xl lg:text-6xl text-on-surface mb-6 leading-tight">
                  {product.name}
                </h1>
                
                <div className="flex justify-between items-end border-b border-outline-variant/30 pb-8">
                  <p className="font-headline text-4xl text-secondary">${product.price.toFixed(2)}</p>
                  <div className="flex items-center gap-1 opacity-70">
                    {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined text-sm text-primary">star</span> )}
                  </div>
                </div>
              </div>

              <div className="font-body text-secondary text-lg mb-12 leading-relaxed max-w-lg">
                <p>{product.description}</p>
              </div>

              {/* Options */}
              <div className="mb-10">
                <h3 className="font-label text-xs uppercase tracking-widest text-on-surface font-bold mb-4">Edition Size</h3>
                <div className="flex flex-wrap gap-4">
                  {product.customizationOptions.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-4 rounded-xl border font-label text-xs uppercase tracking-widest font-bold transition-all ${
                        selectedSize === size 
                          ? 'border-primary bg-primary-container text-on-primary-container shadow-md'
                          : 'border-outline-variant/30 text-secondary hover:bg-surface-container'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Action */}
              <div className="mt-8 pt-10 border-t border-outline-variant/30 flex flex-col sm:flex-row gap-6 items-center">
                <div className="flex items-center bg-surface-container rounded-full px-2 py-2 border border-outline-variant/30 w-full sm:w-auto h-16">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-secondary hover:text-primary rounded-full transition-colors"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="w-10 text-center font-label font-bold text-lg text-on-surface">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-secondary hover:text-primary rounded-full transition-colors"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="flex-1 btn-primary py-5 px-8 text-sm uppercase tracking-widest w-full h-16 flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isAdding ? <span className="material-symbols-outlined animate-pulse">check_circle</span> : null}
                  {isAdding ? 'Reserved' : 'Reserve Creation'}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
