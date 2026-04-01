import React, { useState, useEffect } from 'react';

// Section 1: Navigation
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white/50 backdrop-blur-sm py-4'} border-b-[1px] border-kizuna-gold/40`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <div className={`transition-all duration-500 transform ${isScrolled ? 'scale-100 opacity-100' : 'scale-95 opacity-80'}`}>
           <div className="w-12 h-12 bg-kizuna-crimson rounded-full flex items-center justify-center border-2 border-kizuna-gold shadow-lg cursor-pointer">
              <span className="font-serif text-white text-xl font-bold tracking-wider">K</span>
           </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {['Concept', 'The Secretariat', 'Delegates', 'Resources', 'Coming Soon', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="font-serif uppercase text-sm font-semibold tracking-widest text-kizuna-black hover:text-kizuna-crimson transition-colors duration-300 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-kizuna-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Section 2: Hero
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with split / fold effect */}
      <div className="absolute inset-0 z-0 flex">
        {/* Left 60% faint garden (Using placeholder color and slight gradient to mimic dusk garden) */}
        <div className="w-[60%] h-full bg-[#E5E0D8]/40 relative" style={{ background: 'linear-gradient(to right, #E5E0D8 0%, #DCD6CD 100%)' }}>
          {/* subtle noise/texture */}
           <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-washi bg-cover bg-center"></div>
        </div>
        {/* Right 40% solid crimson */}
        <div className="w-[40%] h-full bg-kizuna-crimson relative overflow-hidden" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)', marginLeft: '-5%' }}>
             <div className="absolute inset-0 opacity-10 bg-washi bg-cover bg-center"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full mt-24">
        <div className="md:w-3/5 pr-8">
            <div className="mb-4 overflow-hidden">
                <p className="font-sans text-kizuna-black/60 uppercase tracking-[0.2em] text-xs font-semibold animate-fade-in-up">Welcome to Model United Nations</p>
            </div>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-kizuna-black leading-tight mb-6 drop-shadow-sm">
            KIZUNA MUN: <br/><span className="text-kizuna-crimson">Where Harmony Bridges Nations.</span>
          </h1>
          <p className="font-sans text-xl text-kizuna-black/80 font-light max-w-lg mb-10 leading-relaxed">
            Knowledge, Integrity & Zeal for United Nations Affairs.
          </p>
          
          <button className="group relative px-8 py-4 bg-kizuna-crimson text-white font-sans uppercase tracking-widest text-sm overflow-hidden transition-all hover:bg-white hover:text-kizuna-crimson border border border-kizuna-gold shadow-md">
            <span className="relative z-10 group-hover:text-kizuna-crimson transition-colors duration-300">View Conference Details (Coming Soon)</span>
            <div className="absolute inset-0 bg-kizuna-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out origin-left z-0"></div>
          </button>
        </div>
        <div className="md:w-2/5 flex justify-end mt-16 md:mt-0">
            {/* Decorative Gold Element mimicking Origami/Kintsugi */}
            <div className="w-64 h-80 relative">
               <div className="absolute inset-0 border border-kizuna-gold/50 transform rotate-3"></div>
               <div className="absolute inset-0 border border-kizuna-crimson/50 transform -rotate-2"></div>
               <div className="absolute inset-0 bg-washi shadow-xl p-6 flex flex-col items-center justify-center transform hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer group">
                  <span className="font-calligraphy text-8xl text-kizuna-crimson group-hover:-translate-y-2 transition-transform duration-300">絆</span>
                  <span className="mt-4 font-serif text-kizuna-black tracking-widest uppercase text-sm">The Bond</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// Section 3: Concept
const Concept = () => {
  return (
    <section id="concept" className="relative py-32 bg-kizuna-bg overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[150%] bg-kanji bg-contain bg-no-repeat bg-right opacity-15 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-kizuna-crimson mb-8">
          The Japanese Theme: Harmony in Dialogue
        </h2>
        <div className="w-16 h-[2px] bg-kizuna-gold mx-auto mb-10"></div>
        <p className="font-sans text-lg lg:text-xl text-kizuna-black/80 font-light leading-relaxed text-balance">
          Kizuna MUN embodies the spirit of 'Bonding'. By incorporating the discipline, resilience, and aesthetic philosophy of Japan into our simulation, we provide a structured yet graceful platform for future leaders to negotiate complex global issues. Like the art of Kintsugi, we believe diplomacy repairs fractured relationships with precious materials—creating a world more beautiful for having been broken.
        </p>
      </div>
    </section>
  );
};

// Section 4: Secretariat
const Secretariat = () => {
  const members = [
    { name: 'Tanaka Kenji', role: 'SECRETARY-GENERAL' },
    { name: 'Sato Aiko', role: 'DEPUTY SECRETARY-GENERAL' },
    { name: 'Watanabe Hiro', role: 'CHIEF OF STAFF' },
    { name: 'Takahashi Mei', role: 'DIRECTOR OF ACADEMICS' },
    { name: 'Ito Ryo', role: 'DIRECTOR OF FINANCE' },
    { name: 'Nakamura Yui', role: 'DIRECTOR OF LOGISTICS' },
  ];

  return (
    <section id="the-secretariat" className="py-32 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-kizuna-black mb-4">The Secretariat</h2>
             <div className="w-12 h-[2px] bg-kizuna-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((member, idx) => (
            <div key={idx} className="group relative bg-[#FCFAF7] border border-[#E5E0D8] p-4 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              {/* Origami fold edge effect */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#F8F5F0] border-b border-l border-[#E5E0D8] transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-20" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'}}></div>

              <div className="aspect-[3/4] overflow-hidden bg-[#EAE7E2] relative mb-6">
                {/* Fallback image if photo isn't available */}
                <div className="w-full h-full flex items-center justify-center font-serif text-[#C4C0B8] text-6xl group-hover:text-white transition-colors duration-500 z-0">
                   {member.name.charAt(0)}
                </div>
                {/* Overlay for grayscale/color effect */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 blend-multiply z-10"></div>
                <img 
                   src={`https://i.pravatar.cc/400?u=${idx}`} 
                   alt={member.name} 
                   className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105 z-10"
                   loading="lazy"
                />
              </div>
              <div className="text-center pb-4">
                <h3 className="font-serif text-2xl text-kizuna-black font-semibold mb-1">{member.name}</h3>
                <p className="font-sans text-xs uppercase tracking-[0.15em] font-bold text-kizuna-crimson">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5: Coming Soon Teaser
const ComingSoon = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setEmail('');
            }, 3000);
        }
    };

  return (
    <section id="coming-soon" className="relative py-40 overflow-hidden bg-kizuna-black">
      {/* Background w/ Washi texture overlay map (using a css pattern fallback if img fails) */}
      <div className="absolute inset-0 bg-washi opacity-10 mix-blend-overlay"></div>
      
      {/* Abstract map lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden flex justify-center items-center">
         <svg viewBox="0 0 1000 600" className="w-[150%] min-w-[1000px] absolute opacity-40">
            {/* Minimal line paths imitating a world map connection */}
            <path d="M 200 300 C 400 100, 600 500, 800 200" fill="transparent" stroke="#D4AF37" strokeWidth="1" />
            <path d="M 250 400 Q 500 200, 750 350" fill="transparent" stroke="#BC2732" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="200" cy="300" r="3" fill="#D4AF37" />
            <circle cx="800" cy="200" r="3" fill="#BC2732" />
            <circle cx="750" cy="350" r="3" fill="#D4AF37" />
            <circle cx="250" cy="400" r="3" fill="#D4AF37" />
         </svg>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-widest text-shadow-sm">
          Coming Soon
        </h2>
        <div className="w-20 h-[1px] bg-kizuna-gold mx-auto mb-8"></div>
        <p className="font-sans text-lg text-white/80 font-light leading-relaxed mb-12">
          Our comprehensive Digital Assembly portal, Delegate registration, and specific Topic Guides are under development. Leave your contact details below to be notified when we launch.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-kizuna-gold focus:ring-1 focus:ring-kizuna-gold transition-all font-sans"
            />
            <button 
                type="submit" 
                className="px-8 py-4 bg-kizuna-gold text-kizuna-black font-sans uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors duration-300"
            >
                {submitted ? 'Received' : 'Notify Me'}
            </button>
        </form>
      </div>
    </section>
  );
};

// Section 6: Footer
const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1f2425] pt-20 pb-10 border-t border-kizuna-crimson/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          {/* Logo */}
          <div className="flex items-center mb-8 md:mb-0">
             <div className="w-10 h-10 bg-transparent border-2 border-kizuna-gold rounded-full flex items-center justify-center mr-4">
                <span className="font-serif text-kizuna-gold text-lg font-bold">K</span>
             </div>
             <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-widest">KIZUNA MUN</h3>
                <p className="font-sans text-xs text-kizuna-gold tracking-widest uppercase mt-1">Model United Nations</p>
             </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Connect With Us</h4>
            <div className="flex space-x-6">
                {[
                  { name: 'Instagram', label: '@kizunamun_ig', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                  { name: 'LinkedIn', label: 'Kizuna MUN', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                  { name: 'Email', label: 'secretariat@kizunamun.org', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
                  { name: 'Twitter', label: '@KizunaMUN_X', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> }
                ].map((social) => (
                    <a 
                        key={social.name} 
                        href={`#${social.name.toLowerCase()}`}
                        aria-label={`Visit our ${social.name} page`}
                        className="text-white/60 hover:text-kizuna-gold transition-colors duration-300 transform hover:-translate-y-1"
                        title={social.label}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-sans tracking-wide">
             <p>&copy; {new Date().getFullYear()} Kizuna MUN. All rights reserved.</p>
             <p className="mt-4 md:mt-0">Kizuna Model United Nations is a division of Global Education Partnership.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-kizuna-bg text-kizuna-black selection:bg-kizuna-crimson selection:text-white pb-0">
      <Navigation />
      <Hero />
      <Concept />
      <Secretariat />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;
