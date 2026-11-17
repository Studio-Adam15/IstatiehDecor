import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { Language, PageView } from './types';
import { BUSINESS_CONFIG } from './data/istatiehData';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';

// Home Section Components
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { WallpaperShowroom } from './components/WallpaperShowroom';
import { CurtainsSection } from './components/CurtainsSection';
import { MaterialStories } from './components/MaterialStories';
import { InspirationGallery } from './components/InspirationGallery';
import { WhyIstatieh } from './components/WhyIstatieh';
import { ContactSection } from './components/ContactSection';

// Dedicated Full Pages
import { AboutPage } from './pages/AboutPage';
import { WallpapersPage } from './pages/WallpapersPage';
import { CurtainsPage } from './pages/CurtainsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Arabic is the primary default language on the first visit
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('istatieh_language');
    return (saved === 'en' || saved === 'ar') ? saved : 'ar';
  });

  const [activePage, setActivePage] = useState<PageView>('home');

  // Sync HTML document direction and language attribute
  useEffect(() => {
    localStorage.setItem('istatieh_language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    if (language === 'ar') {
      document.title = 'استيتيه للديكور والستائر | Istatieh Decor — عمان، الأردن';
    } else {
      document.title = 'Istatieh Decor | Luxury Wallpaper & Curtains — Amman, Jordan';
    }
  }, [language]);

  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCollections = () => {
    const el = document.getElementById('wallpaper-collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('wallpapers');
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('contact');
    }
  };

  return (
    <div
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#2A0B10] text-[#F5EFE4] flex flex-col font-sans selection:bg-[#B6975B] selection:text-[#2A0B10] ${
        language === 'ar' ? 'font-arabic-luxury' : 'font-sans-editorial'
      }`}
    >
      {/* Desktop Fine Pointer Custom Cursor */}
      <CustomCursor language={language} />

      {/* 1. Persistent Global Luxury Navigation Header */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        activePage={activePage}
        setActivePage={handleNavigate}
      />

      {/* Main Content Router with Smooth Page Transitions */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 2. CINEMATIC HERO */}
              <HeroSection
                language={language}
                onExplore={handleExploreCollections}
                onContact={handleScrollToContact}
              />

              {/* 3. BRAND INTRODUCTION */}
              <PhilosophySection language={language} />

              {/* 4. WALLPAPER COLLECTION */}
              <WallpaperShowroom language={language} />

              {/* 5. CURTAIN COLLECTION */}
              <CurtainsSection language={language} />

              {/* 6. WHY ISTATIEH DECOR */}
              <WhyIstatieh language={language} />

              {/* 7. MATERIALS & TEXTURES GALLERY */}
              <MaterialStories language={language} />

              {/* 8. INTERIOR INSPIRATION */}
              <InspirationGallery language={language} />

              {/* 9. CONTACT & WHATSAPP CTA */}
              <ContactSection language={language} />
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage language={language} onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === 'wallpapers' && (
            <motion.div
              key="wallpapers"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <WallpapersPage language={language} onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === 'curtains' && (
            <motion.div
              key="curtains"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CurtainsPage language={language} onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GalleryPage language={language} onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage language={language} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Direct WhatsApp Action Button */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 end-6 z-40">
        <a
          href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-[#1C060B] font-arabic-luxury font-bold text-xs shadow-2xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/30"
          title={language === 'ar' ? 'تواصل معنا مباشرة عبر واتساب' : 'Chat with Istatieh Decor on WhatsApp'}
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">
            {language === 'ar' ? 'واتساب استيتيه للديكور' : 'WhatsApp Istatieh'}
          </span>
        </a>
      </aside>

      {/* Persistent Global Luxury Footer */}
      <Footer language={language} onNavigate={handleNavigate} />
    </div>
  );
}
