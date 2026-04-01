import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

export default function OrderSuccess() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('id');

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center p-6 bg-background pt-20">
      <div className="glass-panel p-12 md:p-20 rounded-[3rem] shadow-2xl border border-white/40 text-center max-w-2xl w-full relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary via-primary-container to-secondary"></div>

        <div className="w-32 h-32 bg-surface-container rounded-full flex items-center justify-center text-primary-container mx-auto mb-10 relative">
            <span className="material-symbols-outlined text-[4rem] text-primary absolute animate-[ping_2s_infinite]">celebration</span>
            <span className="material-symbols-outlined text-[4rem] text-primary relative z-10">done_all</span>
        </div>
        
        <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-6 leading-tight">
          Masterpiece Reserved
        </h1>
        
        <p className="font-body text-xl text-secondary mb-12">
          Thank you for choosing The Frosted Gallery. Your bespoke creation is being crafted with exceptional care.
        </p>

        <div className="bg-surface-container rounded-3xl p-8 mb-12 border border-outline-variant/30 flex flex-col items-center">
          <p className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">inventory_2</span> Gallery Reference
          </p>
          <p className="text-3xl font-headline tracking-wider text-primary">
            {orderId || "ORD-TEST"}
          </p>
        </div>

        <Link to="/menu" className="btn-primary py-5 px-10 text-sm uppercase tracking-widest inline-flex items-center gap-3">
          Return to Collections
        </Link>
      </div>
    </div>
  );
}
