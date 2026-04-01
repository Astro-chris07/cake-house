import React from 'react';

export default function Artisanship() {
  return (
    <div className="bg-background min-h-screen py-32 mt-12 w-full overflow-hidden">
      
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24">
        <span className="font-label text-sm uppercase tracking-widest text-primary mb-6 block">Our Heritage</span>
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight">
          The Art of Pastry.<br/>Elevated.
        </h1>
      </div>

      {/* Feature Block 1 */}
      <div className="relative w-full py-20 bg-surface-container-low">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--color-primary-container)_0%,_transparent_50%)] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-20 relative z-10">
          <div className="w-full md:w-1/2">
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-surface p-2">
              <img src="https://images.unsplash.com/photo-1557925923-33b251dc32d0?q=80&w=2574&auto=format&fit=crop" alt="Pouring Ganache" className="w-full h-full object-cover rounded-full mix-blend-darken" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">diamond</span>
            <h2 className="font-headline text-4xl mb-6 text-on-surface">Uncompromising Ingredients</h2>
            <p className="font-body text-secondary text-lg leading-relaxed mb-6">
              Our commitment starts long before the batter meets the bowl. We source single-origin Criollo chocolate from private estates in Venezuela and Madagascar vanilla beans hand-pollinated daily to ensure the highest aromatics. 
            </p>
            <p className="font-body text-secondary text-lg leading-relaxed">
              Every egg is pasture-raised, every berry is organic, and every gram of buttercream utilizes European-style 82% fat butter. True artisanship requires the finest canvas.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Block 2 */}
      <div className="relative w-full py-32 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--color-secondary-container)_0%,_transparent_40%)] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-20 relative z-10">
          <div className="w-full md:w-1/2">
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 relative">
              <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=2850&auto=format&fit=crop" alt="Precision Decorating" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
             <span className="material-symbols-outlined text-4xl text-primary mb-6">architecture</span>
            <h2 className="font-headline text-4xl mb-6 text-on-surface">Architectural Precision</h2>
            <p className="font-body text-secondary text-lg leading-relaxed mb-6">
              We approach sugarcraft as sculptors. The internal structural integrity of our towering pieces relies on cutting-edge techniques borrowed from architecture, ensuring that the cake not only stays pristine but cuts flawlessly.
            </p>
            <p className="font-body text-secondary text-lg leading-relaxed">
              Our team consists of formally trained pastry chefs who undergo rigorous study in classical French patisserie methods, merging tradition with avant-garde aesthetics.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Callout */}
      <div className="py-20 text-center">
        <div className="max-w-3xl mx-auto glass-panel p-16 rounded-[3rem]">
          <h3 className="font-headline text-3xl mb-8">\"A dessert should be deeply emotional.\"</h3>
          <p className="font-label text-sm uppercase tracking-widest text-primary font-bold">Chef Denny, Founder</p>
        </div>
      </div>

    </div>
  );
}
