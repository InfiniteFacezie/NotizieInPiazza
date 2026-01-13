import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans relative overflow-x-hidden">
      
      {/* --- BACKGROUND GRAIN OVERLAY --- */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Navbar />

      <main className="pt-24 relative">
        
        {/* --- LINE-THROUGH (Continuità Visiva Superiore) --- */}
        <div className="absolute top-[140px] left-0 w-full h-[1px] bg-black/10 z-0"></div>

        {/* --- HEADER INFO BAR --- */}
        <div className="max-w-[1400px] mx-auto px-6 border-b-2 border-black py-4 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] relative z-10 bg-white">
          <div className="flex gap-4 items-center">
            <span className="text-red-600 animate-pulse">● Live Updates</span>
            <span className="text-black/20">|</span>
            <span>Edizione 2026</span>
          </div>
          <div className="hidden md:block italic tracking-normal font-medium">
            Progettato da 1D — Immaginazione & Lavoro
          </div>
        </div>

        {/* --- MEGA HERO SECTION --- */}
        <section className="max-w-[1400px] mx-auto px-6 py-12 border-b-2 border-black relative">
          
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20">Issue No. 01 — 2026</span>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 group cursor-pointer border-r-0 md:border-r border-black/10 md:pr-12">
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 mb-10 border border-black/5 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.95] contrast-[1.1]" 
                  alt="Feature"
                />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-red-600 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">Ti racconto di</span>
                <span className="text-black font-black text-[10px] uppercase tracking-tighter italic">Dicembre 31, 2025</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-8 group-hover:underline decoration-4 underline-offset-4">
                Senza pensare al futuro… vivere il presente.
              </h1>
              <p className="text-xl md:text-2xl text-black leading-relaxed font-semibold max-w-3xl italic">
                "Accettare le differenze e riscoprire la bellezza dell'incontro tra generazioni. Un racconto che parte dal cuore per arrivare a ogni piazza."
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col divide-y-2 divide-black">
              <div className="pb-10 group cursor-pointer">
                <span className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-4 block italic">Trending Now</span>
                <h2 className="text-3xl font-black leading-none uppercase mb-4 group-hover:text-red-600 transition-colors">
                  Tanti auguri Giulia! <br/>L'amicizia reale.
                </h2>
                <p className="text-sm text-black font-bold leading-snug">
                  "Con te mi sento a casa, quasi un disegno fatto con cura. Un incontro che cambia la prospettiva."
                </p>
              </div>
              <div className="py-10 group cursor-pointer relative">
                <span className="text-black font-black text-[10px] uppercase tracking-widest mb-4 block">Ricette // Food</span>
                <h2 className="text-3xl font-black leading-none uppercase mb-4 group-hover:text-red-600 transition-colors">
                  Baozi della mamma: Viaggio in Cina.
                </h2>
                <p className="text-sm text-black font-bold leading-snug">
                  I baozi sono un piatto tradizionale cinese diffuso in tutto il paese, simbolo di famiglia.
                </p>
              </div>
              <div className="pt-10 group cursor-pointer bg-gray-50 p-4 border border-black/10">
                <span className="text-black font-black text-[10px] uppercase tracking-widest mb-4 block underline decoration-red-600">Selection</span>
                <h2 className="text-2xl font-black leading-tight uppercase group-hover:text-red-600 transition-colors">
                  One Piece: Esplorare la libertà attraverso gli anime.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION DIVIDER (Rolling Stone Impact) --- */}
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black group border-y-2 border-black">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
            alt="Food Culture"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <span className="text-white bg-red-600 px-4 py-1 font-black text-[12px] uppercase tracking-[0.4em] mb-8">Culture & Flavors</span>
            <h2 className="text-white text-7xl md:text-[12vw] font-black uppercase tracking-tighter leading-none italic drop-shadow-2xl">
              Cucine In Piazza<span className="text-red-600">.</span>
            </h2>
            <div className="w-24 h-2 bg-white mt-12 mb-8"></div>
            <p className="text-white text-lg font-black uppercase tracking-widest max-w-2xl">
              Dall'Adobo filippino alla pizza egiziana: storie di integrazione attraverso il gusto.
            </p>
          </div>
        </section>

        {/* --- ULTIME NEWS (Secondary Feed) --- */}
        <section className="max-w-[1400px] mx-auto px-6 py-24 relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/10">LATEST UPDATES</span>
          </div>
          <div className="flex justify-between items-end mb-16 border-b-4 border-black pb-4">
            <h3 className="text-5xl font-black uppercase tracking-tighter italic">Ultime News</h3>
            <span className="text-[12px] font-black uppercase tracking-widest">Scroll to explore →</span>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <article className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-100 mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110" />
              </div>
              <span className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-4 block">Eventi</span>
              <h4 className="text-3xl font-black uppercase leading-[0.9] mb-4 group-hover:underline">Colletta Alimentare: Studenti in campo.</h4>
              <p className="text-black font-bold text-sm leading-relaxed">I nostri ragazzi partecipano alla raccolta per la comunità.</p>
            </article>

            <article className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-100 mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1974" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110" />
              </div>
              <span className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-4 block">Ti consiglio</span>
              <h4 className="text-3xl font-black uppercase leading-[0.9] mb-4 group-hover:underline">Caro Babbo Natale ti scrivo…</h4>
              <p className="text-black font-bold text-sm leading-relaxed">Lettere, sogni e speranze delle nuove generazioni torinesi.</p>
            </article>

            <article className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-100 mb-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110" />
              </div>
              <span className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-4 block">Ricette</span>
              <h4 className="text-3xl font-black uppercase leading-[0.9] mb-4 group-hover:underline">La pizza è di tutti: versione Egitto.</h4>
              <p className="text-black font-bold text-sm leading-relaxed">Scopriamo la variante egiziana di un classico intramontabile.</p>
            </article>
          </div>
        </section>

        {/* --- NEWSROOM (Wired Interlock) --- */}
        <section className="max-w-[1400px] mx-auto px-6 py-24 border-t-2 border-black relative">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3 border-l-4 border-red-600 pl-8 relative">
              <h2 className="text-8xl font-black leading-[0.8] tracking-tighter uppercase mb-6">The <br/>Voice.</h2>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed">
                Network di informazione iper-locale gestito con rigore editoriale. 
                <br/><br/>
                <span className="text-red-600 italic">Torino, IT // 2026</span>
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { t: "Fame? Niente paura ho le mani in pasta", cat: "Ti Racconto Di", d: "08 Min" },
                { t: "Pokémon: Il viaggio delle generazioni", cat: "Ti Consiglio", d: "12 Min" },
                { t: "La mia esperienza alla fiera HostMilano", cat: "Eventi", d: "05 Min" },
                { t: "La saga di Scream: horror colto", cat: "Ti Consiglio", d: "15 Min" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer border-b border-black/10 pb-6 relative">
                  <div className="absolute top-0 left-0 w-4 h-[1px] bg-red-600"></div>
                  <div className="flex justify-between items-center mb-4 text-[9px] font-black uppercase tracking-widest text-black/40">
                    <span>{item.cat}</span>
                    <span>{item.d}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase leading-none group-hover:text-red-600 transition-colors">
                    {item.t}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TI RACCONTO DI (Le Grandi Storie) --- */}
        <section className="bg-gray-50 py-24 border-y-2 border-black relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/10">STORIES & LIVES</span>
          </div>
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-5xl font-black uppercase tracking-tighter italic">Ti Racconto Di<span className="text-red-600">.</span></h2>
              <a href="#" className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-red-600 transition-colors">Vedi tutto</a>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              {[
                { t: "Incontro tra generazioni", d: "Dic 19, 2025", p: "Seduti sulla panchina della piazza, ho ascoltato storie che profumano di un tempo che non c'è più, ma che vive ancora negli occhi di chi l'ha attraversato." },
                { t: "Con te mi sento a casa", d: "Nov 19, 2025", p: "Sei alto, importante. Quasi un disegno fatto con cura. Un racconto sull'accettazione e sulla forza dei legami che nascono dove meno te lo aspetti." }
              ].map((story, i) => (
                <div key={i} className="group cursor-pointer">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-4 block italic font-bold">{story.d}</span>
                  <h3 className="text-4xl font-black uppercase leading-none mb-6 group-hover:underline decoration-red-600 underline-offset-8 transition-all">{story.t}</h3>
                  <p className="text-black font-semibold leading-relaxed max-w-xl">{story.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- RICETTE (Cucina Internazionale) --- */}
        <section className="max-w-[1400px] mx-auto px-6 py-24 border-b-2 border-black">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter italic">Cucina Internazionale<span className="text-red-600">.</span></h2>
            <div className="h-[2px] flex-grow mx-8 bg-black hidden md:block"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { t: "L'Adobo perfetto", c: "Filippine", img: "https://images.unsplash.com/photo-1512058560366-cd242959b4fe?q=80&w=600" },
              { t: "La Parmigiana estiva", c: "Italia", img: "https://images.unsplash.com/photo-1625938140722-261595eb9964?q=80&w=600" },
              { t: "Baozi al vapore", c: "Cina", img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=600" },
              { t: "Pizza Egiziana", c: "Egitto", img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=600" }
            ].map((recipe, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 border border-black/5">
                  <img src={recipe.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-black/40 mb-2 block">{recipe.c}</span>
                <h3 className="text-xl font-black uppercase leading-tight group-hover:text-red-600">{recipe.t}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* --- SUBSCRIPTION IMPACT --- */}
        <section className="w-full bg-black py-40 px-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-white text-5xl md:text-[10vw] font-black uppercase tracking-tighter italic mb-12 leading-[0.8]">
              Join the <br/>Newsroom<span className="text-red-600">.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-0 justify-center">
              <input 
                type="email" 
                placeholder="YOUR@EMAIL.COM" 
                className="bg-transparent border-2 border-white/20 px-8 py-5 text-white font-black uppercase tracking-widest focus:outline-none focus:border-red-600 w-full md:w-96 text-center md:text-left"
              />
              <button className="bg-red-600 text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all border-2 border-red-600">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>

        {/* --- TI CONSIGLIO (Minimalist List) --- */}
        <section className="max-w-[1400px] mx-auto px-6 py-32 relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/10">EDITORIAL SELECT</span>
          </div>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-8xl font-black uppercase leading-[0.8] tracking-tighter">Ti <br/><span className="text-red-600">Consiglio.</span></h2>
              <p className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed max-w-[220px] text-black/40">
                Selezione editoriale curata dal network Notizie in Piazza.
              </p>
            </div>
            <div className="md:col-span-8 divide-y-2 divide-black">
              {[
                { t: "Invincible: l'eroe che ha rivoluzionato i supereroi", d: "Recensione Anime" },
                { t: "La saga di Scream: il cinema horror", d: "Cultura Pop" },
                { t: "Beyond the Surface: la passione", d: "Libri & Amore" },
                { t: "One Piece: esplorare la libertà", d: "Analisi Manga" }
              ].map((item, i) => (
                <div key={i} className="py-10 first:pt-0 group cursor-pointer flex justify-between items-center relative">
                   <div className="absolute top-0 left-0 w-2 h-[1px] bg-red-600"></div>
                  <div>
                    <h3 className="text-3xl font-black uppercase group-hover:text-red-600 transition-colors leading-none mb-2">{item.t}</h3>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">{item.d}</span>
                  </div>
                  <span className="text-5xl font-light group-hover:translate-x-4 transition-transform duration-500 text-black/20">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;