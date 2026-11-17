import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Shield, Sparkles, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language, CurtainItem } from '../types';
import { CURTAINS, BUSINESS_CONFIG } from '../data/istatiehData';

interface CurtainsSectionProps {
  language: Language;
}

export const CurtainsSection: React.FC<CurtainsSectionProps> = ({ language }) => {
  const [activeCurtain, setActiveCurtain] = useState<CurtainItem>(CURTAINS[0]);

  const handleInquireCurtains = (curt: CurtainItem) => {
    const text = language === 'ar'
      ? `مرحباً استيتيه للديكور، أود الاستفسار عن تفصيل وتوريد ستائر: "${curt.nameAr}".`
      : `Hello Istatieh Decor, I would like to inquire about bespoke tailoring for: "${curt.nameEn}".`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappDigits}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="curtain-collection" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -end-48 w-96 h-96 rounded-full bg-[#4A101B]/50 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#B6975B]/20">
          <div>
            <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block mb-2">
              {language === 'ar' ? 'فنون النور والخصوصية' : 'CURTAINS — THE ART OF LIGHT'}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFDF8] leading-tight">
              {language === 'ar' ? (
                <span className="font-arabic-luxury">ستائر تفصيل تحاكي روح المكان</span>
              ) : (
                <span>Bespoke Drapery & Architectural Curtains</span>
              )}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#F5EFE4]/70 max-w-md font-arabic-luxury leading-relaxed">
            {language === 'ar'
              ? 'الستائر ليست مجرد قماش؛ إنها العنصر الذي يحدد كمية الضوء، ويمنح الخصوصية، ويكمل التناغم البصري مع أثاثك.'
              : 'Drapery is an architectural filter shaping daylight, warmth, privacy, and atmospheric elegance in your home.'}
          </p>
        </div>

        {/* 3 Interactive Curtain Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CURTAINS.map((curt) => {
            const isSelected = activeCurtain.id === curt.id;
            return (
              <div
                key={curt.id}
                onClick={() => setActiveCurtain(curt)}
                className={`group cursor-pointer rounded-2xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#4A101B] border-[#B6975B] shadow-2xl scale-[1.01]'
                    : 'bg-[#4A101B]/20 border-[#B6975B]/20 hover:border-[#B6975B]/60 hover:bg-[#4A101B]/40'
                }`}
              >
                <div>
                  {/* Tall Vertical Architectural Photography */}
                  <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden mb-5 bg-[#2A0B10]">
                    <img
                      src={curt.image}
                      alt={language === 'ar' ? curt.nameAr : curt.nameEn}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A0B10]/80 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-3 start-3 px-3 py-1 rounded-full bg-[#2A0B10]/80 backdrop-blur-md border border-[#B6975B]/40 text-xs font-arabic-luxury text-[#B6975B] font-bold">
                      {language === 'ar' ? curt.typeLabelAr : curt.typeLabelEn}
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-bold text-[#FFFDF8] group-hover:text-[#B6975B] transition-colors">
                    {language === 'ar' ? curt.nameAr : curt.nameEn}
                  </h3>

                  <p className="text-xs text-[#F5EFE4]/75 mt-2 font-arabic-luxury leading-relaxed line-clamp-3">
                    {language === 'ar' ? curt.descriptionAr : curt.descriptionEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B6975B]/20 space-y-3 text-xs font-arabic-luxury">
                  <div className="flex items-center gap-2 text-[#B6975B]">
                    <Sun className="w-3.5 h-3.5" />
                    <span className="text-[11px] text-[#F5EFE4]/90 font-medium">
                      {language === 'ar' ? curt.lightFilteringAr : curt.lightFilteringEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#F5EFE4]/70">
                    <Shield className="w-3.5 h-3.5 text-[#B6975B]" />
                    <span className="text-[11px]">
                      {language === 'ar' ? curt.fabricAr : curt.fabricEn}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInquireCurtains(curt);
                    }}
                    className="w-full mt-2 py-2 px-3 rounded-lg bg-[#4A101B] hover:bg-[#B6975B] text-[#FFFDF8] hover:text-[#2A0B10] font-arabic-luxury font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 border border-[#B6975B]/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>{language === 'ar' ? 'طلب تفصيل هذا النمط' : 'Inquire on WhatsApp'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Curtain In-Depth Spec & Consultation Strip */}
        <div className="rounded-2xl bg-[#F5EFE4] text-[#2A0B10] p-6 sm:p-10 shadow-2xl border-2 border-[#B6975B]/40 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-serif-luxury uppercase tracking-widest text-[#4A101B] font-bold block">
              {language === 'ar' ? 'استشارة تفصيل وقياسات فورية' : 'BESPOKE MEASUREMENT SERVICE'}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#4A101B]">
              {language === 'ar' ? (
                <span className="font-arabic-luxury">
                  هل تحتاج لمساعدة في تحديد نوع الستائر الأنسب لغرفتك؟
                </span>
              ) : (
                <span>Need expert guidance on fabric opacity and drapery styling?</span>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-[#2A0B10]/80 font-arabic-luxury leading-relaxed">
              {language === 'ar'
                ? 'فريق استيتيه للديكور مستعد لزيارتكم في موقعكم بعمان لأخذ القياسات الدقيقة وعرض عينات الأقمشة الحية أمام إضاءة منزلكم الفعلية.'
                : 'Our specialist team visits your Amman residence to take precise on-site dimensions and evaluate fabric swatches directly under your home lighting.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => handleInquireCurtains(activeCurtain)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#4A101B] hover:bg-[#5e1523] text-[#FFFDF8] font-arabic-luxury font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>
                {language === 'ar'
                  ? 'طلب معاينة وقياسات عبر واتساب'
                  : 'Book On-Site Measurement'}
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
