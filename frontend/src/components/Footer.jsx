import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-20 px-12 flex flex-col items-center gap-8 text-center bg-surface-container-low border-t border-outline/10 mt-20 relative z-20">
      <div className="text-2xl font-headline italic text-primary">The Frosted Gallery</div>
      
      <div className="flex flex-wrap justify-center gap-10">
        <a className="text-sm font-body text-secondary hover:text-primary transition-colors font-medium" href="#">Privacy Policy</a>
        <a className="text-sm font-body text-secondary hover:text-primary transition-colors font-medium" href="#">Terms of Service</a>
        <a className="text-sm font-body text-secondary hover:text-primary transition-colors font-medium" href="#">Shipping</a>
        <a className="text-sm font-body text-secondary hover:text-primary transition-colors font-medium" href="#">Contact Us</a>
      </div>
      
      <div className="text-primary font-headline text-lg italic mt-4 opacity-80">
        © {new Date().getFullYear()} The Frosted Gallery. Crafted for Indulgence.
      </div>
    </footer>
  );
}
