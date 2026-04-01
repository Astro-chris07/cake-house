import React, { useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const { addToCart, cartItemsCount } = useShop();

  useGSAP(() => {
    // Initial State & Entrance
    gsap.set(".hero-text-fade", { y: 20, opacity: 0 });
    gsap.set(".hero-title span", { y: 100, opacity: 0 });
    
    const introTl = gsap.timeline();
    introTl.to(".hero-title span", { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out" })
           .to(".hero-text-fade", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6");

    // Deconstruction Animation
    const deconstructTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero-trigger",
            start: "top top",
            end: "bottom center",
            scrub: 2,
            pin: false
        }
    });

    deconstructTl
        .to(".cake-container", { rotationY: 25, rotationX: 15, scale: 0.8, ease: "none" }, 0)
        .to("#cake-top", { y: -350, x: 50, rotationZ: -15, rotationX: -20, opacity: 0.2, filter: "blur(8px)", ease: "power1.inOut" }, 0)
        .to("#cake-mid-top", { y: -180, x: -80, rotationZ: 10, opacity: 0.1, filter: "blur(12px)", ease: "power2.inOut" }, 0.05)
        .to("#cake-mid-bottom", { y: 100, x: 120, rotationZ: -8, opacity: 0.1, filter: "blur(15px)", ease: "power2.inOut" }, 0.1)
        .to("#cake-bottom", { y: 280, x: -40, rotationX: 25, opacity: 0, filter: "blur(20px)", ease: "power3.inOut" }, 0.15)
        .to("#accent-macaron", { y: -500, x: 300, rotationZ: 240, opacity: 0, scale: 0.3, ease: "back.in(1.7)" }, 0)
        .to("#accent-berry", { y: 400, x: -250, rotationZ: -180, opacity: 0, scale: 1.5, ease: "power2.in" }, 0.05)
        .to(".hero-title, .hero-text-fade, .bg-surface\\/10", { opacity: 0, y: -120, filter: "blur(12px)", ease: "none" }, 0.2)
        .to("#scroll-hint", { opacity: 0, duration: 0.1 }, 0);
  }, { scope: container });

  const customAddToCart = (id, name, price, size, img) => {
    addToCart({ id, name, price, imageUrls: [img] }, size, 1);
  };

  return (
    <div ref={container}>
      {/* Hero Section: The Splitting Cake Experience */}
      <section className="relative h-[300vh] w-full" id="hero-trigger">
        <div className="sticky top-[80px] h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Background Atmospheric Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary-container)_0%,_transparent_100%)] opacity-30"></div>
          
          {/* Floating Typography */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
            <div className="text-center translate-y-[-10%] bg-surface/10 backdrop-blur-[2px] p-12 rounded-full">
              <p className="font-label text-xs md:text-sm uppercase tracking-[0.4em] mb-6 text-on-surface font-bold hero-text-fade">Sculpted for the Palate</p>
              <h1 className="font-headline text-7xl md:text-[10rem] text-on-surface leading-none text-shadow-hero hero-title drop-shadow-lg">
                <span className="block">Haute</span>
                <span className="italic font-light opacity-90 block -mt-4 md:-mt-8">Confectionery</span>
              </h1>
            </div>
          </div>
          
          {/* 3D Cake Deconstruction Representation */}
          <div className="cake-container relative w-96 h-96 md:w-[600px] md:h-[600px] perspective-lg z-0">
            <div className="cake-piece absolute inset-0 z-40" id="cake-top">
              <img alt="Cake Top" className="w-full h-full object-contain drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArlKDWYnW4BzLi36yMLZI61shTl-TFAsv5LacidiPf2rrCTIgu6xkNZ_O4gOen5j14vWQ3x0qUn43Y5DlAM9v9eQR2f6C0p3C-j7fxX4f5gx_dOprpKI3m1XhRThVsT2n_F99riGWBPt4ZvQ6URQkStgZXD8a-5e2T9hreLsyM47CoRGuwpUg63l4bhOx6KmdeihAjvvlDaSb1DwgfdCA252BQHET62YFJclsd0iCN6scymPHhTdpyCb9LZLehX5mxeOirFWnDn4U" style={{clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 25%)", filter: "brightness(1.1) sepia(0.3) hue-rotate(290deg) saturate(1.2)"}} />
            </div>
            <div className="cake-piece absolute inset-0 z-35" id="cake-mid-top">
              <img alt="Cake Mid Top" className="w-full h-full object-contain drop-shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArlKDWYnW4BzLi36yMLZI61shTl-TFAsv5LacidiPf2rrCTIgu6xkNZ_O4gOen5j14vWQ3x0qUn43Y5DlAM9v9eQR2f6C0p3C-j7fxX4f5gx_dOprpKI3m1XhRThVsT2n_F99riGWBPt4ZvQ6URQkStgZXD8a-5e2T9hreLsyM47CoRGuwpUg63l4bhOx6KmdeihAjvvlDaSb1DwgfdCA252BQHET62YFJclsd0iCN6scymPHhTdpyCb9LZLehX5mxeOirFWnDn4U" style={{clipPath: "polygon(0 25%, 100% 25%, 100% 45%, 0 45%)", filter: "brightness(1.1) sepia(0.3) hue-rotate(290deg) saturate(1.2)"}} />
            </div>
            <div className="cake-piece absolute inset-0 z-30" id="cake-mid-bottom">
              <img alt="Cake Mid Bottom" className="w-full h-full object-contain drop-shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArlKDWYnW4BzLi36yMLZI61shTl-TFAsv5LacidiPf2rrCTIgu6xkNZ_O4gOen5j14vWQ3x0qUn43Y5DlAM9v9eQR2f6C0p3C-j7fxX4f5gx_dOprpKI3m1XhRThVsT2n_F99riGWBPt4ZvQ6URQkStgZXD8a-5e2T9hreLsyM47CoRGuwpUg63l4bhOx6KmdeihAjvvlDaSb1DwgfdCA252BQHET62YFJclsd0iCN6scymPHhTdpyCb9LZLehX5mxeOirFWnDn4U" style={{clipPath: "polygon(0 45%, 100% 45%, 100% 70%, 0 70%)", filter: "brightness(1.1) sepia(0.3) hue-rotate(290deg) saturate(1.2)"}} />
            </div>
            <div className="cake-piece absolute inset-0 z-20" id="cake-bottom">
              <img alt="Cake Base" className="w-full h-full object-contain drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArlKDWYnW4BzLi36yMLZI61shTl-TFAsv5LacidiPf2rrCTIgu6xkNZ_O4gOen5j14vWQ3x0qUn43Y5DlAM9v9eQR2f6C0p3C-j7fxX4f5gx_dOprpKI3m1XhRThVsT2n_F99riGWBPt4ZvQ6URQkStgZXD8a-5e2T9hreLsyM47CoRGuwpUg63l4bhOx6KmdeihAjvvlDaSb1DwgfdCA252BQHET62YFJclsd0iCN6scymPHhTdpyCb9LZLehX5mxeOirFWnDn4U" style={{clipPath: "polygon(0 70%, 100% 70%, 100% 100%, 0 100%)", filter: "brightness(1.1) sepia(0.3) hue-rotate(290deg) saturate(1.2)"}} />
            </div>
            <div className="cake-piece absolute -top-16 -right-16 w-32 h-32 z-50" id="accent-macaron">
              <img alt="Macaron" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnkzGrrAoKUC6X7fUzvkc0qn6sfwcbQhhWZZFXP7q5jhwU6PMGo55cRlHkKB7ETLhGx8fZ7AEABZJsbqxzpQoIt1Xumfnu82ZfECOJmpoQTwVRsWkgaJ93aKkfdvuKfNCu5PDYGSvZNh3ciRQCkWESVrqAfLTKVpZAMg058yekZfaZW-SJfOaT9_hX0vuHkwrO6109fAD5EXI6tD5eipeSg_0n3j4_9Fyalcxufhiy1Gs52YQM3D3sgAMrMNttzfZAEqsEL2mcNSs" style={{filter: "brightness(1.1) sepia(0.3) hue-rotate(290deg) saturate(1.2)"}} />
            </div>
            <div className="cake-piece absolute bottom-0 -left-16 w-24 h-24 z-50" id="accent-berry">
              <img alt="Berry" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnkzGrrAoKUC6X7fUzvkc0qn6sfwcbQhhWZZFXP7q5jhwU6PMGo55cRlHkKB7ETLhGx8fZ7AEABZJsbqxzpQoIt1Xumfnu82ZfECOJmpoQTwVRsWkgaJ93aKkfdvuKfNCu5PDYGSvZNh3ciRQCkWESVrqAfLTKVpZAMg058yekZfaZW-SJfOaT9_hX0vuHkwrO6109fAD5EXI6tD5eipeSg_0n3j4_9Fyalcxufhiy1Gs52YQM3D3sgAMrMNttzfZAEqsEL2mcNSs" />
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-500" id="scroll-hint">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface font-bold">Scroll to Deconstruct</span>
          </div>
        </div>
      </section>

      {/* Product Catalog: The Fragments */}
      <section className="px-6 md:px-12 py-32 bg-surface relative z-10" id="collections">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-label text-sm uppercase tracking-widest text-primary mb-4 block">The 2024 Collection</span>
              <h2 className="font-headline text-5xl md:text-6xl text-on-surface">Individual Masterpieces</h2>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-full bg-surface-container text-on-surface border border-outline-variant/30 font-label text-sm uppercase tracking-wider hover:bg-primary-container transition-colors">Sort By Flavor</button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-[600px] hover:shadow-2xl transition-all duration-500 text-left">
              <img alt="Velvet Rose Cake" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTbsjF5f8CEvjl_287RRXo5ezw9Cz6HK6txtLT_BaKWUXlVMUnDwg-KIILawGtG8E9j2cM09Oaf3O8a6Fp3AJDS6eCXbLKjkOTe3Cn2_Zi5M5pghkNWA3zzmeD0lMVR_bJNWirjGKhY_4pgFw8H4r7YuUkqE20exY0VGS1mT33kNjXpjsw4kF3ladvDoV0lu_Nm9tE5-f0H3MDRVRqCLSs2xZeFodmEHjXxQhKWhVhhvAAOwe28m_nBzxEqZYXKxNvwC2vWy_lWcg" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12 text-white w-full flex justify-between items-end">
                <div>
                  <span className="font-label text-xs uppercase tracking-widest text-primary-fixed mb-2 block">Signature Selection</span>
                  <h3 className="font-headline text-4xl mb-2">The Velvet Rose</h3>
                  <p className="text-white/70 max-w-sm mb-6">Infused with organic damask rosewater and layered with lychee compote.</p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-headline">$185.00</span>
                    <button 
                      onClick={() => customAddToCart("c1", "The Velvet Rose", 185.00, "Classic", "https://lh3.googleusercontent.com/aida-public/AB6AXuBTbsjF5f8CEvjl_287RRXo5ezw9Cz6HK6txtLT_BaKWUXlVMUnDwg-KIILawGtG8E9j2cM09Oaf3O8a6Fp3AJDS6eCXbLKjkOTe3Cn2_Zi5M5pghkNWA3zzmeD0lMVR_bJNWirjGKhY_4pgFw8H4r7YuUkqE20exY0VGS1mT33kNjXpjsw4kF3ladvDoV0lu_Nm9tE5-f0H3MDRVRqCLSs2xZeFodmEHjXxQhKWhVhhvAAOwe28m_nBzxEqZYXKxNvwC2vWy_lWcg")}
                      className="bg-primary-container text-on-primary-container px-8 py-3 rounded-full font-label text-xs uppercase tracking-widest font-bold flex items-center gap-2 group-hover:shadow-lg transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="glass-panel p-8 rounded-xl flex-1 flex flex-col justify-between border border-white/40 shadow-sm hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <div className="w-full aspect-square mb-6 overflow-hidden rounded-lg">
                    <img alt="Dark Cocoa" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmQhbJZo_5QcVLnED8o0tGQhTcy0EbE5EkVUVvNdjFKumdX9bKK-2-ZLXhldUm9jeX9zX1X5mLgtPtHxmIeipA5fy54jYvyaz7yzv4-bT4Qy2EcV30oJHSyzX0-ffzo3iDyoL8AEbxOIKQ5C9N87i5eH4fjX1fRkoBFsbY6UT5YlxdYm2o1mBcQNbQ8w3h7kON2mG-3Es2CGO5cXIz9WFGOsmUddhUzDqQYF7ZFa0m6-nil3XscOwIKGorxd8gWuXEsmIY4ncO_PI" />
                  </div>
                  <h3 className="font-headline text-2xl mb-1 text-on-surface">Midnight Ganache</h3>
                  <p className="text-secondary text-sm font-label uppercase tracking-wider">$72.00</p>
                </div>
                <button 
                  onClick={() => customAddToCart("c2", "Midnight Ganache", 72.00, "Slice", "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQhbJZo_5QcVLnED8o0tGQhTcy0EbE5EkVUVvNdjFKumdX9bKK-2-ZLXhldUm9jeX9zX1X5mLgtPtHxmIeipA5fy54jYvyaz7yzv4-bT4Qy2EcV30oJHSyzX0-ffzo3iDyoL8AEbxOIKQ5C9N87i5eH4fjX1fRkoBFsbY6UT5YlxdYm2o1mBcQNbQ8w3h7kON2mG-3Es2CGO5cXIz9WFGOsmUddhUzDqQYF7ZFa0m6-nil3XscOwIKGorxd8gWuXEsmIY4ncO_PI")}
                  className="w-full mt-6 py-4 rounded-full border border-outline/20 font-label text-[10px] uppercase tracking-widest text-on-surface hover:bg-secondary hover:text-white transition-all"
                >
                  Reserve Now
                </button>
              </div>
            </div>

            <div className="md:col-span-4 glass-panel p-8 rounded-xl border border-white/40 shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="w-full aspect-[4/5] mb-6 overflow-hidden rounded-lg">
                <img alt="Lemon Meringue" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHsY3gluURym1Pa705QN8Xfq55aQDaa88tBPVj8Hndepo6BxKD64S54Yl2UQzkZnFjLrwVfOZiKcHSpiPIFu64Lxa-ENszEBtJWoYRyKcn5bk-5MqrbfCgy0YEEtP5rOrndLHyl6wuS3VJR61BMLJURky-KVxNRho3BWHkrjhjIqr9IsT_KPbmv-tAFt3FDNzeDjKQK41T2SpYelWI2PHsKNznqFlgAveg4DwVNSGCDFP9igRbNud5jjLsHk-n6q7fCr5sIg0SrFw" />
              </div>
              <h3 className="font-headline text-2xl mb-1">Citrus Cloud</h3>
              <p className="text-secondary text-sm font-label uppercase tracking-wider mb-6">$64.00</p>
              <button 
                onClick={() => customAddToCart("c3", "Citrus Cloud", 64.00, "Slice", "https://lh3.googleusercontent.com/aida-public/AB6AXuDHsY3gluURym1Pa705QN8Xfq55aQDaa88tBPVj8Hndepo6BxKD64S54Yl2UQzkZnFjLrwVfOZiKcHSpiPIFu64Lxa-ENszEBtJWoYRyKcn5bk-5MqrbfCgy0YEEtP5rOrndLHyl6wuS3VJR61BMLJURky-KVxNRho3BWHkrjhjIqr9IsT_KPbmv-tAFt3FDNzeDjKQK41T2SpYelWI2PHsKNznqFlgAveg4DwVNSGCDFP9igRbNud5jjLsHk-n6q7fCr5sIg0SrFw")}
                className="w-full py-4 rounded-full bg-primary text-on-primary font-label text-[10px] uppercase tracking-widest transition-opacity hover:opacity-90"
              >
                Add to Cart
              </button>
            </div>

            <div className="md:col-span-4 glass-panel p-8 rounded-xl border border-white/40 shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="w-full aspect-[4/5] mb-6 overflow-hidden rounded-lg">
                <img alt="Pistachio Dream" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYLQYqfafbc4sUO9roS3FBAwRucPgVNh0YOFENcATN2HwHeHAAtvXQs8xMN8mUHGYLlWK2x8SSQaWNcimMmOVnW6PSk-DtQTkil0Yq7owAPLrt5G-Xk69w3fC5pIvs2HDuyUi-sov5zN4AGtGkOZZVrAf4ZK6l3kqr-iYjyUgyndd-3DY5B4Fj6dQWCvCBEvaXtXje2BiRsmCzid_7DdvsVbkO8vilnnPAbh_bagUPvyb0BgZSsfCiCrbXikEKKU5QkapC_C1tngA" />
              </div>
              <h3 className="font-headline text-2xl mb-1">Emerald Pistachio</h3>
              <p className="text-secondary text-sm font-label uppercase tracking-wider mb-6">$88.00</p>
              <button 
                onClick={() => customAddToCart("c4", "Emerald Pistachio", 88.00, "Slice", "https://lh3.googleusercontent.com/aida-public/AB6AXuBYLQYqfafbc4sUO9roS3FBAwRucPgVNh0YOFENcATN2HwHeHAAtvXQs8xMN8mUHGYLlWK2x8SSQaWNcimMmOVnW6PSk-DtQTkil0Yq7owAPLrt5G-Xk69w3fC5pIvs2HDuyUi-sov5zN4AGtGkOZZVrAf4ZK6l3kqr-iYjyUgyndd-3DY5B4Fj6dQWCvCBEvaXtXje2BiRsmCzid_7DdvsVbkO8vilnnPAbh_bagUPvyb0BgZSsfCiCrbXikEKKU5QkapC_C1tngA")}
                className="w-full py-4 rounded-full bg-primary text-on-primary font-label text-[10px] uppercase tracking-widest transition-opacity hover:opacity-90"
              >
                Add to Cart
              </button>
            </div>

            <div className="md:col-span-4 glass-panel p-8 rounded-xl border border-white/40 shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="w-full aspect-[4/5] mb-6 overflow-hidden rounded-lg">
                <img alt="Vanilla Bean" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb-5BwjvuQ-F6yoVn0UmEVRNz5snOwROtMsQSpgb7CC5V25SmGxw5NJXf8pwgvtHmZd4Z0TNXwq-yiWscbXrfVhN5jVP8wJRbSsrvqyJ1Q5WQexxMvGwUvtFilpNt1G5B86ted1f98QvS703miWG9czy4x_Kw0O5ggfcpy7sROX9BmhmcsAFasqEj4Y3TziIALEcEy4cuD0HqsWEWXAgwbS9jRMyhSLaB9MVcfD5y7pWPqQ6U4w714hIEAa9-8RyWAOS1hWIQ-cUc" />
              </div>
              <h3 className="font-headline text-2xl mb-1">Pure Vanilla Bean</h3>
              <p className="text-secondary text-sm font-label uppercase tracking-wider mb-6">$58.00</p>
              <button 
                onClick={() => customAddToCart("c5", "Pure Vanilla Bean", 58.00, "Slice", "https://lh3.googleusercontent.com/aida-public/AB6AXuAb-5BwjvuQ-F6yoVn0UmEVRNz5snOwROtMsQSpgb7CC5V25SmGxw5NJXf8pwgvtHmZd4Z0TNXwq-yiWscbXrfVhN5jVP8wJRbSsrvqyJ1Q5WQexxMvGwUvtFilpNt1G5B86ted1f98QvS703miWG9czy4x_Kw0O5ggfcpy7sROX9BmhmcsAFasqEj4Y3TziIALEcEy4cuD0HqsWEWXAgwbS9jRMyhSLaB9MVcfD5y7pWPqQ6U4w714hIEAa9-8RyWAOS1hWIQ-cUc")}
                className="w-full py-4 rounded-full bg-primary text-on-primary font-label text-[10px] uppercase tracking-widest transition-opacity hover:opacity-90"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: Artisanship */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="px-6 md:px-12 flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl"></div>
            <img alt="Pastry Chef" className="relative z-10 rounded-xl shadow-2xl w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJBBC9XZevivYw9Ev8w2tsDBvB-ww6Mc_Jzm4HhIRF1JC_ac8lYnq45aWcqbLlUmAZj6SHsqJ0CswF6SyQxlX_DNiMkT8AdrMg7XEOMhFU71EdfwSEjOLmPy1KKqUR47Xnts_ME1a9j9M2NRsv34Pv1bzfLv54rFNhTpdFlQ-EGLeZqla_Lz-elUt5u0xjtSvrtn2WAMqw6ZtufzQQFw8NYuqb_7AauZTKsIwL7xbs4CeybFm8QwP3mJNgllR6a2zkgGIyXZ7AeSo" />
          </div>
          <div className="w-full md:w-1/2">
            <span className="font-label text-sm uppercase tracking-widest text-primary mb-6 block">The Artisans</span>
            <h2 className="font-headline text-5xl md:text-6xl mb-8 leading-tight">Crafting Moments of Pure Indulgence</h2>
            <p className="text-on-surface/70 text-lg leading-relaxed mb-10 font-body">
              Each creation at The Frosted Gallery is more than just a dessert. It is a dialogue between flavor and form, meticulously engineered to provide a multi-sensory journey from the first glance to the final bite.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-primary">eco</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl mb-1">Ethical Sourcing</h4>
                  <p className="text-on-surface/60 text-sm">We partner exclusively with sustainable cocoa farmers and organic dairy producers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-primary">brush</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl mb-1">Bespoke Design</h4>
                  <p className="text-on-surface/60 text-sm">Every cake can be tailored to the specific visual aesthetic of your event.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Call to Action */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto glass-panel p-16 rounded-xl border border-white/50">
          <h3 className="font-headline text-4xl mb-6">Join The Gallery Circle</h3>
          <p className="text-secondary/70 mb-10 font-body">Receive exclusive invitations to tasting events and early access to our seasonal collections.</p>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 bg-surface-container-lowest border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-primary-container text-on-surface" placeholder="Email Address" type="email" />
            <button className="bg-secondary text-white px-10 py-4 rounded-full font-label text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
