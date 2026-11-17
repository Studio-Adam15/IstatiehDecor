import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { Language, PageView } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';
import { IstatiehLogo } from './IstatiehLogo';

interface FooterProps {
  language: Language;
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C060B] text-[#F5EFE4] pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#B6975B]/20">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Footer Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#B6975B]/15">
          
          {/* Brand Info & Original Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="cursor-pointer" onClick={() => onNavigate('home')}>
              <IstatiehLogo tone="dark-surface" size="md" />
            </div>

            <p className="text-xs sm:text-sm text-[#F5EFE4]/75 max-w-sm font-arabic-luxury leading-relaxed pt-1">
              {language === 'ar'
                ? 'استيتيه للديكور والستائر في عمان، الأردن. وجهتكم الأولى لأرقى خامات ورق الجدران وتفصيل الستائر الفاخرة والتشطيبات المعمارية.'
                : 'Istatieh Decor in Amman, Jordan. Your premier destination for bespoke luxury wallcoverings, tailored curtains, and interior finishing details.'}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-arabic-luxury text-[#B6975B]">
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#FFFDF8] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>

              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#FFFDF8] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Collection Navigation */}
          <div className="md:col-span-3 space-y-3 text-xs font-arabic-luxury">
            <span className="font-serif-luxury text-[11px] text-[#B6975B] uppercase tracking-[0.2em] font-bold block mb-2">
              {language === 'ar' ? 'التشكيلات والصفحات' : 'COLLECTIONS & PAGES'}
            </span>
            <ul className="space-y-2 text-[#F5EFE4]/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('wallpapers')}
                  className="hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'ورق الجدران' : 'Wallpapers'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('curtains')}
                  className="hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'الستائر الفاخرة' : 'Curtains & Drapery'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'معرض الإلهام' : 'Inspiration Gallery'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'عن استيتيه للديكور' : 'About Us'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#B6975B] transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </button>
              </li>
            </ul>
          </div>

          {/* Showroom Location & Contact Details */}
          <div className="md:col-span-4 space-y-3 text-xs font-arabic-luxury">
            <span className="font-serif-luxury text-[11px] text-[#B6975B] uppercase tracking-[0.2em] font-bold block mb-2">
              {language === 'ar' ? 'الخدمة أونلاين والتواصل' : 'ONLINE SERVICE & CONTACT'}
            </span>

            <div className="space-y-2 text-[#F5EFE4]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B6975B] shrink-0 mt-0.5" />
                <span>
                  {language === 'ar' ? BUSINESS_CONFIG.addressAr : BUSINESS_CONFIG.addressEn}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B6975B] shrink-0" />
                <a
                  href={BUSINESS_CONFIG.telUrl}
                  dir="ltr"
                  style={{ unicodeBidi: 'isolate' }}
                  className="hover:text-[#B6975B] font-mono tabular-nums text-xs inline-block"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-arabic-luxury text-[#B6975B] hover:text-[#FFFDF8] transition-colors"
              >
                <span>{language === 'ar' ? 'العودة للأعلى' : 'Back to Top'}</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-arabic-luxury text-[#F5EFE4]/50">
          <div>
            © {new Date().getFullYear()} {language === 'ar' ? 'استيتيه للديكور والستائر. جميع الحقوق محفوظة.' : 'ISTATIEH DECOR. All Rights Reserved.'}
          </div>

          <div className="flex items-center gap-3">
            <span>{language === 'ar' ? 'عمّان، الأردن' : 'Amman, Jordan'}</span>
            <span>·</span>
            <span className="text-[#B6975B]">
              {language === 'ar' ? 'التفاصيل تصنع الفرق' : 'The Art of Elevated Living'}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
