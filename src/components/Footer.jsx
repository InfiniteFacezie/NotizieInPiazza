import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-black pt-24 pb-12 px-6 relative overflow-hidden">
      
      {/* --- VERTICAL TEXT (Continuità con App.jsx) --- */}
      <div className="absolute left-4 bottom-24 -rotate-90 origin-left hidden xl:block">
        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-black/10">
          Designed by 1D — Torino IT
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-6 relative">
            {/* The Line-Through Detail */}
            <div className="absolute -top-12 left-0 w-24 h-[1px] bg-red-600"></div>
            
            <h2 className="text-6xl font-black tracking-tighter uppercase italic mb-8">
              Notizie<br/>
              <span className="text-red-600 italic">InPiazza.</span>
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed max-w-sm">
              Una piattaforma editoriale indipendente nata per raccontare le storie, 
              le persone e le trasformazioni della nostra comunità.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-8 underline decoration-black underline-offset-4">
              Magazine
            </h3>
            <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest">
              <li><a href="#" className="hover:line-through">Ti racconto di</a></li>
              <li><a href="#" className="hover:line-through">Ricette dal mondo</a></li>
              <li><a href="#" className="hover:line-through">Eventi locali</a></li>
              <li><a href="#" className="hover:line-through">Ti consiglio</a></li>
            </ul>
          </div>

          {/* Corporate / Partners */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-8">
              Partners
            </h3>
            <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest">
              <li><a href="#" className="hover:text-red-600">Immaginazione & Lavoro</a></li>
              <li><a href="#" className="hover:text-red-600">MITEC Group</a></li>
              <li><a href="#" className="hover:text-red-600">Newsroom Torino</a></li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-black/40 italic">
            <span>© 2026 All Rights Reserved</span>
            <span>P.IVA 01234567890</span>
          </div>
          
          <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-red-600">Privacy</a>
            <a href="#" className="hover:text-red-600">Cookies</a>
            <a href="#" className="hover:text-red-600">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;