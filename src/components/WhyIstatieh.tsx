import React from 'react';
import { Palette, Layers, Sparkles, UserCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { BRAND_VALUES } from '../data/istatiehData';

interface WhyIstatiehProps {
  language: Language;
}

export const WhyIstatieh: React.FC<WhyIstatiehProps> = ({ language }) => {
  const icons = [
    <Palette key="1" className="w-6 h-6 text-[#B6975B]" />,
    <Layers key="2" className="w-6 h-6 text-[#B6975B]" />,
    <Sparkles key="3" className="w-6 h-6 text-[#B6975B]" />,
    <UserCheck key="4" className="w-6 h-6 text-[#B6975B]" />,
  ];

  return (
    <section id="why-istatieh" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#4A101B] text-[#F5EFE4] relative border-y border-[#B6975B]/20">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block mb-2">
            {language === 'ar' ? 'قيم العمل والجودة' : 'WHY ISTATIEH DECOR?'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFDF8]">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">معايير الدقة والذوق الرفيع</span>
            ) : (
              <span>Craftsmanship & Personalized Care</span>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EFE4]/80 font-arabic-luxury mt-3 leading-relaxed">
            {language === 'ar'
              ? 'نحرص على تقديم خدمة متكاملة تنطلق من تلبية رغباتكم وتضمن نتيجة تليق ببيوتكم ومكاتبكم.'
              : 'Dedicated to helping homeowners and designers realize their vision through authentic materials and precise tailoring.'}
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_VALUES.map((val, idx) => (
            <div
              key={val.number}
              className="rounded-2xl bg-[#2A0B10]/70 border border-[#B6975B]/25 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#B6975B] hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#4A101B] border border-[#B6975B]/30 flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <span
                    dir="ltr"
                    style={{ unicodeBidi: 'isolate' }}
                    className="font-mono tabular-nums text-xl font-bold text-[#B6975B]"
                  >
                    {val.number}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-lg font-bold text-[#FFFDF8] mb-2.5">
                  {language === 'ar' ? val.titleAr : val.titleEn}
                </h3>

                <p className="text-xs text-[#F5EFE4]/75 font-arabic-luxury leading-relaxed">
                  {language === 'ar' ? val.descAr : val.descEn}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#B6975B]/15 flex items-center gap-1.5 text-[11px] font-arabic-luxury text-[#B6975B]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'التزام بالجودة' : 'Verified Standard'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
