import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-[100] bg-white border-b border-black py-4 px-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Logo tipografico alla Wired */}
        <div className="flex flex-col">
          <span className="text-3xl font-black tracking-tighter text-black leading-none uppercase italic">
            Notizie<span className="text-red-600">.</span>
          </span>
          <span className="text-[9px] font-black uppercase tracking-[0.4em] leading-none mt-1">In Piazza</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["Ti racconto di", "Eventi", "Ricette", "Ti consiglio"].map((item) => (
            <a key={item} href="#" className="text-[10px] font-black uppercase tracking-widest text-black hover:text-red-600 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className="border-2 border-black bg-black text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Subscribe
        </button>
      </div>
    </nav>
  );
};

export default Navbar;