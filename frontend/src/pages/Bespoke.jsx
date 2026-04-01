import React, { useState } from 'react';

export default function Bespoke() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-background min-h-screen py-32 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-20">
        
        {/* Left Side: Editorial Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="font-label text-sm uppercase tracking-widest text-primary mb-6 block">Private Commisions</span>
          <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-8 leading-tight">
            Designed Exclusively For You.
          </h1>
          <p className="font-body text-secondary text-lg mb-8 leading-relaxed">
            Our Bespoke service is an intimate collaboration. We combine your vision with our culinary architectural expertise to create a one-of-a-kind masterpiece that tastes as staggering as it looks. 
          </p>
          <p className="font-body text-secondary text-lg mb-12 leading-relaxed">
            From hand-painted fondant canvases to towering 3D sugar sculptures, no commission is too extravagant. We handle everything from the initial tasting to the white-glove delivery on your grand day.
          </p>
          <div className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 relative">
            <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2665&auto=format&fit=crop" alt="Bespoke Cake Crafting" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="w-full md:w-1/2">
          <div className="glass-panel p-10 md:p-14 rounded-[3rem] shadow-xl border border-white/40">
            <h2 className="font-headline text-3xl mb-8 border-b border-outline-variant/30 pb-6 text-on-surface">Request a Consultation</h2>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <span className="material-symbols-outlined text-6xl text-primary mb-6">drafts</span>
                <h3 className="font-headline text-2xl text-on-surface mb-4">Inquiry Successfully Sent</h3>
                <p className="font-body text-secondary">Our Lead Architect will be in touch with you shortly to schedule your private tasting.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-6">
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Full Name</label>
                  <input required type="text" className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary text-on-surface" />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Email</label>
                    <input required type="email" className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary text-on-surface" />
                  </div>
                  <div>
                    <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Event Date</label>
                    <input required type="date" className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary text-on-surface" />
                  </div>
                </div>

                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Guest Count Estimate</label>
                  <select className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary text-on-surface">
                    <option>Intimate (Under 50)</option>
                    <option>Grand (50 - 150)</option>
                    <option>Gala (150+)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-secondary mb-3">Your Vision</label>
                  <textarea required rows="4" className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary text-on-surface" placeholder="Detail your desired aesthetic, theme, or flavor profile..."></textarea>
                </div>

                <button type="submit" className="btn-primary py-5 text-sm uppercase tracking-widest w-full mt-4">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
