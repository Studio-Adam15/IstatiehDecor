import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Globe, Menu, X } from 'lucide-react';
import { Language, PageView } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import { IstatiehLogo } from './IstatiehLogo';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  activePage,
  setActivePage,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exact 6 links as specified in prompt:
  // الرئيسية | من نحن | ورق الجدران | الستائر | معرض التصاميم | تواصل معنا
  const navItems = [
    { id: 'home', sectionId: 'hero', labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'about', sectionId: 'brand-intro', labelAr: 'من نحن', labelEn: 'About Us' },
    { id: 'wallpapers', sectionId: 'wallpaper-collection', labelAr: 'ورق الجدران', labelEn: 'Wallpapers' },
    { id: 'curtains', sectionId: 'curtain-collection', labelAr: 'الستائر', labelEn: 'Curtains' },
    { id: 'gallery', sectionId: 'interior-inspiration', labelAr: 'معرض التصاميم', labelEn: 'Inspiration' },
    { id: 'contact', sectionId: 'contact', labelAr: 'تواصل معنا', labelEn: 'Contact' },
  ];

  const handleNavClick = (item: (typeof navItems)[0]) => {
    setMobileMenuOpen(false);

    if (activePage === 'home') {
      if (item.sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setActivePage('home');
      setTimeout(() => {
        if (item.sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(item.sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF8]/98 backdrop-blur-md border-b border-[#B6975B]/25 py-2.5 sm:py-3 shadow-md shadow-black/5'
          : 'bg-[#FFFDF8]/92 backdrop-blur-sm border-b border-[#B6975B]/15 py-3.5 sm:py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo Zone:
            - Positioned right in Arabic (RTL)
            - Positioned left in English (LTR)
            - Zero frames, badges, or artificial borders */}
        <button
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center focus:outline-hidden group cursor-pointer shrink-0"
          aria-label="Istatieh Decor — استيتية للديكور والستائر"
        >
          <IstatiehLogo tone="light-surface" size="sm" />
        </button>

        {/* Desktop Nav Items (Centered with balanced luxury spacing) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-arabic-luxury tracking-wide">
          {navItems.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="relative py-1 text-[#2A0B10]/85 hover:text-[#4A101B] font-medium transition-colors duration-200 cursor-pointer group"
              >
                <span className="group-hover:text-[#B6975B] transition-colors">
                  {language === 'ar' ? item.labelAr : item.labelEn}
                </span>
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B6975B] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Language Switcher, Phone & Discreet Contact Button (Opposite side) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full border border-[#B6975B]/40 hover:border-[#B6975B] text-[#4A101B] hover:text-[#2A0B10] text-xs font-sans-editorial transition-all bg-[#F5EFE4]/60 hover:bg-[#F5EFE4] cursor-pointer"
            title="Toggle Language / تغيير اللغة"
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#B6975B]" />
            <span className="font-semibold text-[11px] sm:text-xs">
              {language === 'ar' ? 'EN' : 'العربية'}
            </span>
          </button>

          {/* Quick Call Button (Desktop) */}
          <a
            href={BUSINESS_CONFIG.telUrl}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#B6975B]/30 hover:border-[#B6975B] text-[#4A101B] text-xs transition-colors hover:text-[#B6975B]"
            title="Call Istatieh Decor"
          >
            <Phone className="w-3.5 h-3.5 text-[#B6975B]" />
            <span dir="ltr" style={{ unicodeBidi: 'isolate' }} className="font-mono text-xs tabular-nums font-semibold">
              {BUSINESS_CONFIG.phoneDisplay}
            </span>
          </a>

          {/* Discreet WhatsApp CTA Button */}
          <a
            href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#4A101B] hover:bg-[#5e1523] text-[#FFFDF8] text-xs font-arabic-luxury font-bold transition-all duration-200 shadow-sm active:scale-95"
            title="WhatsApp Consultation"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]/20" />
            <span className="hidden sm:inline">
              {language === 'ar' ? 'واتساب' : 'WhatsApp'}
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[#4A101B] hover:text-[#B6975B] hover:bg-[#F5EFE4] transition-colors focus:outline-hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Clean, non-overlapping) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF8] border-b border-[#B6975B]/30 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col gap-2.5 text-sm font-arabic-luxury">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="text-start py-2 px-3 rounded-lg text-[#2A0B10] hover:bg-[#F5EFE4] hover:text-[#4A101B] font-medium transition-colors"
              >
                {language === 'ar' ? item.labelAr : item.labelEn}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#B6975B]/20 flex flex-col gap-2.5">
            <a
              href={BUSINESS_CONFIG.telUrl}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#B6975B]/40 text-[#4A101B] text-xs font-mono"
            >
              <Phone className="w-4 h-4 text-[#B6975B]" />
              <span dir="ltr" style={{ unicodeBidi: 'isolate' }} className="tabular-nums font-semibold">
                {BUSINESS_CONFIG.phoneDisplay}
              </span>
            </a>

            <a
              href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4A101B] text-[#FFFDF8] text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
