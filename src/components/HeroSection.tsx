import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import sheerHeroImg from '../assets/images/istatieh_luxury_sheer_curtains_1793184061007.jpg';

interface HeroSectionProps {
  language: Language;
  onExplore: () => void;
  onContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExplore,
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#2A0B10] text-[#F5EFE4]">
      
      {/* Background Architectural Atmosphere */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #B6975B 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Cinematic Full-Bleed Photograph with Smooth Contrast Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={sheerHeroImg}
          alt="Istatieh Decor Luxury Wallpaper & Curtains"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.38 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A0B10] via-[#2A0B10]/70 to-[#2A0B10]/80" />
      </div>

      {/* Thin Gold Line across the screen */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute top-28 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B6975B]/30 to-transparent origin-center z-10"
      />

      {/* Main Hero Content */}
      <div className="mx-auto max-w-6xl w-full flex-1 flex flex-col justify-center relative z-10 my-auto py-8">
        
        {/* Subtle Editorial Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-xs font-arabic-luxury text-[#B6975B] mb-5"
        >
          <span className="uppercase tracking-[0.25em] font-semibold">
            {language === 'ar' ? 'استيتيه للديكور والستائر' : 'ISTATIEH DECOR'}
          </span>
          <span className="text-[#F5EFE4]/30">·</span>
          <span className="text-[#F5EFE4]/80">
            {language === 'ar' ? 'خدمة أونلاين — عمّان، الأردن' : 'Online Store — Amman, Jordan'}
          </span>
          <span className="text-[#F5EFE4]/30">·</span>
          <span className="text-[#B6975B] font-mono text-[11px]">
            {language === 'ar' ? 'أناقة التفاصيل' : 'REFINED INTERIORS'}
          </span>
        </motion.div>

        {/* Oversized Cinematic Headline */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tight text-[#FFFDF8] leading-[1.12] ${
              language === 'ar' ? 'font-arabic-luxury' : ''
            }`}
          >
            {language === 'ar' ? (
              <span>
                الجمال يبدأ من <span className="text-[#B6975B]">التفاصيل</span>.
              </span>
            ) : (
              <span>
                BEAUTY LIVES IN THE <span className="text-[#B6975B]">DETAILS.</span>
              </span>
            )}
          </motion.h1>

          {/* Supporting Statement Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className={`text-base sm:text-xl text-[#F5EFE4]/85 mt-6 max-w-2xl font-light leading-relaxed ${
              language === 'ar' ? 'font-arabic-luxury' : 'font-sans-editorial'
            }`}
          >
            {language === 'ar'
              ? 'اكتشفوا عالماً من ورق الجدران والستائر المصممة لتمنح كل مساحة طابعها الخاص.'
              : 'Discover wallpaper and curtains that bring character, elegance, and individuality to every space.'}
          </motion.p>
        </div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-[#B6975B]/20"
        >
          {/* Primary CTA */}
          <button
            onClick={onExplore}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#B6975B] hover:bg-[#c9aa6d] text-[#2A0B10] font-arabic-luxury font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-black/30 hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            <span>{language === 'ar' ? 'اكتشف مجموعتنا' : 'Explore Collections'}</span>
            <ArrowDown className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Secondary CTA: WhatsApp */}
          <a
            href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-[#4A101B]/80 hover:bg-[#4A101B] border border-[#B6975B]/50 text-[#FFFDF8] font-arabic-luxury font-medium text-xs uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{language === 'ar' ? 'استشارة مباشرة عبر واتساب' : 'WhatsApp Consultation'}</span>
          </a>

          {/* Direct showroom call */}
          <a
            href={BUSINESS_CONFIG.telUrl}
            className="text-xs font-arabic-luxury text-[#F5EFE4]/70 hover:text-[#B6975B] transition-colors py-2 px-3"
          >
            {language === 'ar' ? 'أو الاتصال المباشر: ' : 'Or Call Us: '}
            <span dir="ltr" style={{ unicodeBidi: 'isolate' }} className="font-mono text-[#B6975B] font-bold tabular-nums inline-block">
              {BUSINESS_CONFIG.phoneDisplay}
            </span>
          </a>
        </motion.div>

      </div>

      {/* Bottom Proof Strip & Minimal Scroll Indicator */}
      <div className="mx-auto max-w-6xl w-full pt-6 border-t border-[#B6975B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EFE4]/60 font-arabic-luxury z-10">
        <div className="flex items-center gap-6">
          <span>{language === 'ar' ? 'ورق جدران فاخر' : 'Luxury Wallcoverings'}</span>
          <span>·</span>
          <span>{language === 'ar' ? 'ستائر تفصيل راقية' : 'Bespoke Curtains'}</span>
          <span>·</span>
          <span>{language === 'ar' ? 'تشطيبات وتكسيات معمارية' : 'Architectural Finishes'}</span>
        </div>

        <button
          onClick={onExplore}
          className="flex items-center gap-2 text-[#B6975B] hover:text-[#FFFDF8] transition-colors cursor-pointer text-[11px] tracking-wider uppercase"
        >
          <span>{language === 'ar' ? 'مرر للأسفل للاستكشاف' : 'Scroll to Discover'}</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.span>
        </button>
      </div>

    </section>
  );
};
