import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Gem, 
  Users, 
  ShoppingBag, 
  Star, 
  CheckCircle,
  Store,
  MessageCircle,
  Facebook,
  Instagram,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Shirt,
  Heart
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCollection, setExpandedCollection] = useState(null);

  const toggleCollection = (collection) => {
    setExpandedCollection(expandedCollection === collection ? null : collection);
  };

  return (
    <div className="min-h-screen font-sans bg-[#F9F8F5] text-gray-900">
      {/* Top Black Bar */}
      <div className="bg-[#111111] text-white text-[11px] sm:text-xs py-2 px-4 md:px-8 flex justify-between items-center z-50 relative border-b border-[#222]">
        <div className="hidden md:block font-medium tracking-wide">
          Dressed for Today. Together for Tomorrow.
        </div>
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
          <a href="tel:+918148081615" className="flex items-center gap-2 hover:text-[#d2ae6d] transition-colors border border-white/20 px-3 py-1 rounded-[4px]">
            <Phone size={12} className="text-[#d2ae6d]" />
            <span className="font-medium tracking-wide">81480 81615</span>
          </a>
          <div className="flex items-center gap-2 font-medium tracking-wide text-gray-300">
            <MapPin size={12} className="text-[#d2ae6d]" />
            <span>Kurumbur, Thoothukudi District</span>
          </div>
        </div>
      </div>

      {/* Hero & Navbar Wrapper to prevent collision */}
      <div className="relative">

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <img src="/images/logodark.png" alt="Johnsons Logo" className="h-14 w-auto drop-shadow-md" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-[#d2ae6d] tracking-widest leading-none drop-shadow-md">JOHNSONS</span>
                <span className="text-[10px] text-gray-200 tracking-[0.25em] uppercase mt-1 drop-shadow-md">Garments & Textiles</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              <a href="#home" className="text-[#d2ae6d] hover:text-white transition-colors font-medium text-sm tracking-wider border-b border-[#d2ae6d] pb-1">Home</a>
              <a href="#collections" className="text-gray-100 hover:text-white transition-colors font-medium text-sm tracking-wider">Men</a>
              <a href="#collections" className="text-gray-100 hover:text-white transition-colors font-medium text-sm tracking-wider">Women</a>
              <a href="#collections" className="text-gray-100 hover:text-white transition-colors font-medium text-sm tracking-wider">Kids</a>
              <a href="#our-story" className="text-gray-100 hover:text-white transition-colors font-medium text-sm tracking-wider">Our Story</a>
              <a href="#visit-us" className="text-gray-100 hover:text-white transition-colors font-medium text-sm tracking-wider">Visit Us</a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <a href="#visit-us" className="bg-[#d2ae6d] hover:bg-[#c19e60] text-black px-6 py-2.5 font-bold transition-colors text-sm rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(210,174,109,0.3)] tracking-wide">
                <MapPin size={16} /> Visit Our Store
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-[#d2ae6d]">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-900 bg-gray-50">Home</a>
              <a href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-600">Men</a>
              <a href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-600">Women</a>
              <a href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-600">Kids</a>
              <a href="#our-story" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-600">Our Story</a>
              <a href="#visit-us" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-600">Visit Us</a>
              <div className="pt-4 px-3">
                <a href="#visit-us" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-[#d2ae6d] text-black px-6 py-4 font-bold tracking-wider flex items-center justify-center gap-2 rounded-full shadow-[0_0_15px_rgba(210,174,109,0.3)] text-sm">
                  Visit Store <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100vh] flex flex-col justify-end lg:justify-center bg-[#080808] overflow-hidden pt-20">
        {/* Full bleed background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_family.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle gradient from bottom for text readability on mobile */}
          <div className="absolute inset-x-0 bottom-0 h-[70%] lg:h-[50%] bg-gradient-to-t from-[#080808]/90 via-[#080808]/60 to-transparent"></div>
          {/* Subtle gradient from left for text readability on desktop */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r from-[#080808]/80 via-[#080808]/50 to-transparent hidden lg:block"></div>
        </div>
        
        {/* Decorative elements removed per user request */}

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 w-full flex flex-col lg:flex-row justify-end lg:justify-between items-start lg:items-center mt-auto lg:mt-0 pb-10 lg:pb-0 h-full flex-1">
          
          {/* Left Column: Text & Buttons */}
          <div className="flex flex-col text-left mb-6 lg:mb-0 w-full lg:w-[50%] lg:pt-32 mt-auto lg:mt-0">
            <h2 className="text-sm sm:text-base lg:text-lg text-white font-sans uppercase tracking-[0.3em] mb-2 drop-shadow-md font-medium">
              FASHION FOR
            </h2>
            
            <h3 className="text-5xl sm:text-6xl lg:text-8xl text-[#d2ae6d] font-serif mb-6 drop-shadow-lg leading-none">
              Every<br/>Generation
            </h3>

            <div className="text-gray-100 font-sans text-lg lg:text-xl mb-12 tracking-wide drop-shadow-md font-light">
              Wear Good. Feel Good.
            </div>

            {/* SVG Categories */}
            <div className="flex flex-row justify-between items-start mb-12 w-full lg:max-w-xl gap-2 lg:gap-8 border-t border-white/20 pt-8 mt-2">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
                <Shirt className="text-white mb-3" size={32} strokeWidth={1} />
                <span className="text-white text-xs sm:text-sm font-bold tracking-widest mb-1">MEN'S</span>
                <span className="text-gray-300 text-[9px] sm:text-[10px] uppercase leading-tight">Readymade &<br/>Garments</span>
              </div>
              
              <div className="hidden lg:block w-[1px] h-16 bg-white/20"></div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 border-x border-white/20 lg:border-0 px-2 lg:px-0">
                <Gem className="text-white mb-3" size={32} strokeWidth={1} />
                <span className="text-white text-xs sm:text-sm font-bold tracking-widest mb-1">WOMEN'S</span>
                <span className="text-gray-300 text-[9px] sm:text-[10px] uppercase leading-tight">Readymade &<br/>Garments</span>
              </div>
              
              <div className="hidden lg:block w-[1px] h-16 bg-white/20"></div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
                <Shirt className="text-white mb-3" size={32} strokeWidth={1} />
                <span className="text-white text-xs sm:text-sm font-bold tracking-widest mb-1">KIDS'</span>
                <span className="text-gray-300 text-[9px] sm:text-[10px] uppercase leading-tight">Readymade &<br/>Garments</span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-row gap-4 w-full lg:max-w-xl">
              <a href="#collections" className="flex-1 bg-[#d2ae6d] hover:bg-[#c19e60] text-black py-4 font-bold flex items-center justify-center gap-2 transition-colors rounded-full shadow-[0_0_20px_rgba(210,174,109,0.3)] text-[11px] sm:text-sm tracking-wider">
                EXPLORE OUR STORE <ArrowRight size={16} />
              </a>
              <a href="#visit-us" className="flex-1 border border-[#d2ae6d] hover:bg-[#d2ae6d]/10 text-[#d2ae6d] py-4 font-bold flex items-center justify-center gap-2 transition-colors rounded-full backdrop-blur-sm bg-black/60 text-[11px] sm:text-sm tracking-wider">
                <MapPin size={16} /> VISIT US
              </a>
            </div>
          </div>

          {/* Right Column removed per user request */}
        </div>

        {/* Features Bar Pill (Desktop) / Full Width (Mobile) */}
        <div className="absolute bottom-6 right-6 lg:right-12 z-20 hidden lg:block">
          <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-full px-8 py-3">
            <div className="flex flex-row items-center gap-6 text-gray-300 text-xs font-medium tracking-wider divide-x divide-white/20">
              <span className="pr-4">Quality</span>
              <span className="px-4">Style</span>
              <span className="px-4">Family</span>
              <span className="pl-4">Since 2015</span>
            </div>
          </div>
        </div>

        {/* Mobile Features Bar (Mobile Only) */}
        <div className="relative z-20 w-full border-t border-white/10 pt-4 pb-4 bg-black/60 backdrop-blur-md lg:hidden">
          <div className="max-w-7xl mx-auto px-2 sm:px-6">
            <div className="grid grid-cols-3 divide-x divide-white/20">
              <div className="flex flex-col items-center justify-center text-center px-1">
                <span className="text-white/80 text-[8px] sm:text-[10px] font-medium leading-relaxed tracking-widest">FAMILY FASHION<br/>STORE</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-1">
                <span className="text-white/80 text-[8px] sm:text-[10px] font-medium leading-relaxed tracking-widest">QUALITY BRANDS<br/>GREAT VALUE</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-1">
                <span className="text-white/80 text-[8px] sm:text-[10px] font-medium leading-relaxed tracking-widest">STYLE FOR<br/>EVERY GEN</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Collections Section */}
      <div id="collections" className="bg-[#fcfbf9] py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#d2ae6d] uppercase tracking-[0.2em] font-medium text-sm mb-4">Our Collections</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              For Every Style. For Every Generation.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore a wide range of Men's, Women's and Kids' ready made and garments at JOHNSONS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {/* Men's Card */}
            <div className="group relative rounded-sm overflow-hidden aspect-[3/4] shadow-md bg-black">
              <img src="/images/mens_wear.png" alt="Men's Wear" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${expandedCollection === 'men' ? 'scale-110 opacity-40' : 'group-hover:scale-105 opacity-100'}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className={`absolute bottom-0 left-0 w-full p-8 text-center flex flex-col items-center transition-all duration-500 ${expandedCollection === 'men' ? 'translate-y-0 h-full justify-center bg-black/60 backdrop-blur-sm' : 'translate-y-0'}`}>
                <h3 className="text-3xl font-serif text-white font-medium tracking-wide mb-2">MEN'S WEAR</h3>
                <p className={`text-gray-200 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${expandedCollection === 'men' ? 'mb-8' : 'mb-6'}`}>Ready Made & Garments</p>
                
                <div className={`overflow-hidden transition-all duration-500 w-full ${expandedCollection === 'men' ? 'max-h-64 opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'}`}>
                  <ul className="text-white/90 space-y-3 font-medium tracking-wide text-sm flex flex-col items-center">
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Shirts & T-Shirts</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Trousers & Jeans</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Formal Suits & Blazers</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Ethnic Wear</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors w-3/4">Innerwear</li>
                  </ul>
                </div>

                <button onClick={() => toggleCollection('men')} className="bg-[#d2ae6d] hover:bg-[#c19e60] text-black px-6 py-3 font-bold tracking-wider flex items-center justify-center gap-2 transition-all rounded-full text-xs sm:text-sm w-4/5 shadow-[0_0_15px_rgba(210,174,109,0.3)] opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 duration-300 relative z-10">
                  {expandedCollection === 'men' ? (
                    <>Close <ChevronUp size={16} /></>
                  ) : (
                    <>Explore Men's <ChevronDown size={16} /></>
                  )}
                </button>
              </div>
            </div>

            {/* Women's Card */}
            <div className="group relative rounded-sm overflow-hidden aspect-[3/4] shadow-md bg-black">
              <img src="/images/womens_wear.png" alt="Women's Wear" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${expandedCollection === 'women' ? 'scale-110 opacity-40' : 'group-hover:scale-105 opacity-100'}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className={`absolute bottom-0 left-0 w-full p-8 text-center flex flex-col items-center transition-all duration-500 ${expandedCollection === 'women' ? 'translate-y-0 h-full justify-center bg-black/60 backdrop-blur-sm' : 'translate-y-0'}`}>
                <h3 className="text-3xl font-serif text-white font-medium tracking-wide mb-2">WOMEN'S WEAR</h3>
                <p className={`text-gray-200 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${expandedCollection === 'women' ? 'mb-8' : 'mb-6'}`}>Ready Made & Garments</p>
                
                <div className={`overflow-hidden transition-all duration-500 w-full ${expandedCollection === 'women' ? 'max-h-64 opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'}`}>
                  <ul className="text-white/90 space-y-3 font-medium tracking-wide text-sm flex flex-col items-center">
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Sarees & Silk</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Kurtis & Dress Materials</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Lehengas & Bridal</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Western Wear</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors w-3/4">Lingerie & Nightwear</li>
                  </ul>
                </div>

                <button onClick={() => toggleCollection('women')} className="bg-[#d2ae6d] hover:bg-[#c19e60] text-black px-6 py-3 font-bold tracking-wider flex items-center justify-center gap-2 transition-all rounded-full text-xs sm:text-sm w-4/5 shadow-[0_0_15px_rgba(210,174,109,0.3)] opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 duration-300 relative z-10">
                  {expandedCollection === 'women' ? (
                    <>Close <ChevronUp size={16} /></>
                  ) : (
                    <>Explore Women's <ChevronDown size={16} /></>
                  )}
                </button>
              </div>
            </div>

            {/* Kids' Card */}
            <div className="group relative rounded-sm overflow-hidden aspect-[3/4] shadow-md bg-black">
              <img src="/images/kids_wear.png" alt="Kids' Wear" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${expandedCollection === 'kids' ? 'scale-110 opacity-40' : 'group-hover:scale-105 opacity-100'}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className={`absolute bottom-0 left-0 w-full p-8 text-center flex flex-col items-center transition-all duration-500 ${expandedCollection === 'kids' ? 'translate-y-0 h-full justify-center bg-black/60 backdrop-blur-sm' : 'translate-y-0'}`}>
                <h3 className="text-3xl font-serif text-white font-medium tracking-wide mb-2">KIDS' WEAR</h3>
                <p className={`text-gray-200 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${expandedCollection === 'kids' ? 'mb-8' : 'mb-6'}`}>Ready Made & Garments</p>
                
                <div className={`overflow-hidden transition-all duration-500 w-full ${expandedCollection === 'kids' ? 'max-h-64 opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'}`}>
                  <ul className="text-white/90 space-y-3 font-medium tracking-wide text-sm flex flex-col items-center">
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Boys' Casuals & Formals</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Girls' Frocks & Dresses</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Kids' Ethnic Wear</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors border-b border-white/10 pb-2 w-3/4">Infant Clothing</li>
                    <li className="hover:text-[#d2ae6d] cursor-pointer transition-colors w-3/4">Nightwear</li>
                  </ul>
                </div>

                <button onClick={() => toggleCollection('kids')} className="bg-[#d2ae6d] hover:bg-[#c19e60] text-black px-6 py-3 font-bold tracking-wider flex items-center justify-center gap-2 transition-all rounded-full text-xs sm:text-sm w-4/5 shadow-[0_0_15px_rgba(210,174,109,0.3)] opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 duration-300 relative z-10">
                  {expandedCollection === 'kids' ? (
                    <>Close <ChevronUp size={16} /></>
                  ) : (
                    <>Explore Kids' <ChevronDown size={16} /></>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey Section */}
      <div id="our-story" className="bg-[#121212] py-24 relative overflow-hidden">
        {/* Subtle radial gradient background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d2ae6d] via-black to-black"></div>
        
        {/* Decorative Concentric Rings - Top Left */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full border border-[#d2ae6d]/20 pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full border border-[#d2ae6d]/10 pointer-events-none"></div>
        <div className="absolute -top-8 -left-8 w-[400px] h-[400px] rounded-full border border-[#d2ae6d]/5 pointer-events-none"></div>

        {/* Decorative Concentric Rings - Bottom Right */}
        <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] rounded-full border border-[#d2ae6d]/20 pointer-events-none"></div>
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full border border-[#d2ae6d]/10 pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full border border-[#d2ae6d]/5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex justify-center lg:justify-end pr-0 lg:pr-12">
              <img src="/images/logodark.png" alt="Johnsons Logo Large" className="w-64 md:w-80 lg:w-[400px] object-contain drop-shadow-[0_0_30px_rgba(210,174,109,0.3)]" />
            </div>

            <div className="pl-0 lg:pl-12 border-l-0 lg:border-l border-white/10">
              <p className="text-[#d2ae6d] uppercase tracking-[0.2em] font-medium text-sm mb-4">Our Journey</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Built on Trust, Styled with Care
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                What began in 2015 as Johnsons Menswear, a small shop with a big dream, has grown into Johnsons Garments and Textiles — a family-run store serving men, women and kids with quality clothing and a commitment to our community.
              </p>
              <button className="border border-[#d2ae6d] text-[#d2ae6d] hover:bg-[#d2ae6d]/10 px-8 py-4 font-bold tracking-wider flex items-center gap-3 transition-colors rounded-full mb-16 inline-flex text-sm">
                OUR STORY <ArrowRight size={16} />
              </button>

              <div className="space-y-10 relative before:absolute before:left-[5px] before:top-2 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#d2ae6d] before:to-transparent before:opacity-30">
                <div className="relative flex items-start gap-6">
                  <div className="absolute left-0 w-3 h-3 bg-[#d2ae6d] rounded-full mt-1.5 z-10 outline outline-4 outline-[#121212]"></div>
                  <div className="pl-8">
                    <h4 className="text-[#d2ae6d] text-xl font-bold font-serif mb-1">2015</h4>
                    <p className="text-gray-400 text-sm">Started as Johnsons Menswear.</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-6">
                  <div className="absolute left-0 w-3 h-3 bg-[#d2ae6d] rounded-full mt-1.5 z-10 outline outline-4 outline-[#121212]"></div>
                  <div className="pl-8">
                    <h4 className="text-[#d2ae6d] text-xl font-bold font-serif mb-1">2021</h4>
                    <p className="text-gray-400 text-sm">Expanded into Johnsons Garments and Readymades.</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-6">
                  <div className="absolute left-0 w-3 h-3 bg-[#d2ae6d] rounded-full mt-1.5 z-10 outline outline-4 outline-[#121212]"></div>
                  <div className="pl-8">
                    <h4 className="text-[#d2ae6d] text-xl font-bold font-serif mb-1">2025</h4>
                    <p className="text-gray-400 text-sm">Now known as Johnsons Garments and Textiles.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#f8f7f4] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#d2ae6d] uppercase tracking-[0.2em] font-medium text-sm mb-4">Why Choose Johnsons</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
              More Than a Clothing Store
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full border border-[#d2ae6d] flex items-center justify-center mb-6 text-[#d2ae6d]">
                <Gem size={28} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Wide Range</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Trendy and traditional styles for every occasion.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full border border-[#d2ae6d] flex items-center justify-center mb-6 text-[#d2ae6d]">
                <Users size={28} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">For the Whole Family</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Men's, Women's and Kids' wear.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full border border-[#d2ae6d] flex items-center justify-center mb-6 text-[#d2ae6d]">
                <CheckCircle size={28} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Trusted Since 2015</h4>
              <p className="text-gray-500 text-sm leading-relaxed">A growing legacy in Kurumbur.</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full border border-[#d2ae6d] flex items-center justify-center mb-6 text-[#d2ae6d]">
                <Store size={28} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Visit and Explore</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Experience our collections in person.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Our Store Section */}
      <div id="visit-us" className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <p className="text-[#d2ae6d] uppercase tracking-[0.2em] font-medium text-sm mb-4">Visit Our Store</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                We're in Kurumbur
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg">
                Come and explore a wide range of men's, women's and kids' wear at our store. Our friendly team is always ready to help you find the perfect outfit.
              </p>
              <a href="https://maps.app.goo.gl/kfasLWS4K2877GH47" target="_blank" rel="noopener noreferrer" className="bg-[#d2ae6d] hover:bg-[#c19e60] text-black px-8 py-4 font-bold tracking-wider flex items-center justify-center gap-3 transition-all rounded-full shadow-[0_0_15px_rgba(210,174,109,0.3)] mb-12 inline-flex text-sm">
                <MapPin size={18} /> GET DIRECTIONS <ArrowRight size={18} />
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-gray-100">
                {/* Location (Full width) */}
                <div className="sm:col-span-2 flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#d2ae6d]/10 flex items-center justify-center text-[#b38e4a] shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-base mb-2">Johnsons Garments and Textiles</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      7/173, Aruna complex, Main road<br />
                      Kurumbur, Eral taluk, Alwarthirumagiri block<br />
                      Thoothukudi district - 628 207
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#d2ae6d]/10 flex items-center justify-center text-[#b38e4a] shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-base mb-1">Shop Timings</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">Morning 8.30 Am - 10.30pm<br/>Open All Days</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4 p-6 bg-[#25D366]/5 rounded-lg border border-[#25D366]/20">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-base mb-1">81480 81615</h5>
                    <p className="text-gray-600 text-sm">Call or Chat on WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-md overflow-hidden h-[500px] shadow-lg border border-gray-200 bg-gray-100 flex items-center justify-center">
              <iframe 
                src="https://maps.google.com/maps?q=JOHNSONS%20GARMENTS%20AND%20TEXTILES%2C%20Kurumbur&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map to Johnsons Garments and Textiles"
              ></iframe>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="pr-8">
              <div className="flex flex-col mb-6">
                <img src="/images/logodark.png" alt="Johnsons Logo" className="h-20 w-20 object-contain mb-3" />
                <span className="text-3xl font-bold font-serif uppercase tracking-widest text-white">Johnsons</span>
                <span className="text-[11px] text-gray-400 font-sans tracking-[0.2em] mt-1.5 font-medium">Garments & Textiles</span>
              </div>
              <p className="text-gray-400 text-sm italic font-serif">
                Dressed for Today.<br/>Together for Tomorrow.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-400 hover:text-[#d2ae6d] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Home</a></li>
                <li><a href="#collections" className="text-gray-400 hover:text-[#d2ae6d] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Men's Wear</a></li>
                <li><a href="#collections" className="text-gray-400 hover:text-[#d2ae6d] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Women's Wear</a></li>
                <li><a href="#collections" className="text-gray-400 hover:text-[#d2ae6d] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Kids' Wear</a></li>
                <li><a href="#our-story" className="text-gray-400 hover:text-[#d2ae6d] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Our Story</a></li>
                <li><a href="#visit-us" className="text-gray-400 hover:text-[#d2ae6d] transition-colors flex items-center gap-2"><ChevronRight size={14}/> Visit Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Phone size={18} className="text-[#d2ae6d] mt-1" />
                  <div>
                    <p className="text-gray-300">81480 81615</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MessageCircle size={18} className="text-[#25D366] mt-1" />
                  <div>
                    <p className="text-gray-300">81480 81615</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="text-[#d2ae6d] mt-1 shrink-0" />
                  <div>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      7/173, Aruna complex, Main road<br />
                      Kurumbur, Eral taluk<br />
                      Thoothukudi district - 628 207
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d2ae6d] hover:text-black flex items-center justify-center transition-all text-white">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/johnsonstextiles?igsi=MTU3bWQ3ZDZoOHoxZw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d2ae6d] hover:text-black flex items-center justify-center transition-all text-white">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            
          </div>

          <div className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-4 text-xs text-gray-500 text-center md:text-left">
            <div>
              <p>© 2026 Johnsons Garments & Textiles. All rights reserved.</p>
            </div>
            <div className="md:text-center">
              <p>Crafted with ❤️ by <a href="https://smeexperts.in" target="_blank" rel="noopener noreferrer" className="text-[#d2ae6d] hover:underline">SME Experts</a></p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end sm:divide-x divide-gray-700 gap-2 sm:gap-0">
              <span className="sm:pr-4">A Family Store Since 2015</span>
              <span className="sm:pl-4">Kurumbur, Thoothukudi District</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
