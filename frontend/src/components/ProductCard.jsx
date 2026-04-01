import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="glass-panel rounded-xl flex flex-col justify-between border border-white/40 shadow-sm hover:translate-y-[-8px] transition-transform duration-300 group">
      
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/5] rounded-t-lg">
        <img 
          src={product.imageUrls[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-surface-container/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-label font-bold uppercase tracking-widest text-primary shadow-sm border border-white/50">
          {product.category}
        </div>
      </Link>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`} className="text-on-surface hover:text-primary transition-colors">
            <h3 className="font-headline text-xl leading-tight line-clamp-2">{product.name}</h3>
          </Link>
        </div>
        
        <p className="text-secondary text-xs font-label uppercase tracking-wider mb-4 border-b border-outline-variant/30 pb-4">
          Starting at ${product.price.toFixed(2)}
        </p>

        <p className="text-xs text-on-surface/70 line-clamp-2 flex-1 mb-6 font-body leading-relaxed">
          {product.description}
        </p>
        
        <Link 
          to={`/product/${product.id}`}
          className="w-full text-center py-4 rounded-full bg-primary-container text-on-primary-container font-label text-[10px] uppercase tracking-widest font-bold transition-opacity hover:opacity-90 flex justify-center items-center gap-2"
        >
          <ShoppingCart size={14} />
          <span>View Options</span>
        </Link>
      </div>

    </div>
  );
}
