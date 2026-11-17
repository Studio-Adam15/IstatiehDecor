import React from 'react';
import { Sparkles, Eye, Layers, Compass } from 'lucide-react';
import { Language } from '../types';
import { MATERIAL_STORIES } from '../data/istatiehData';

interface MaterialStoriesProps {
  language: Language;
}

export const MaterialStories: React.FC<MaterialStoriesProps> = ({ language }) => {
  return (
    <section id="materials-gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4] relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#B6975B]/20">
          <div>
            <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block mb-2">
              {language === 'ar' ? 'قصص الخامات والنسيج' : 'MATERIAL STORIES — CLOSE-UP GALLERY'}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFDF8] leading-tight">
              {language === 'ar' ? (
                <span className="font-arabic-luxury">جمالية الملمس وعمق الألوان</span>
              ) : (
                <span>The Tactile Poetry of Weave & Surface</span>
              )}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#F5EFE4]/70 max-w-md font-arabic-luxury leading-relaxed">
            {language === 'ar'
              ? 'نظرة مقربة على دقة حياكة الأقمشة ونقوش الجدران البارزة التي تحول غرفكم إلى واحات من الراحة والجمال.'
              : 'Macro perspectives highlighting the fine grain of European wallpapers and the tailored structure of custom curtain weaves.'}
          </p>
        </div>

        {/* Dual Editorial Material Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {MATERIAL_STORIES.map((story) => (
            <div
              key={story.id}
              className="group rounded-2xl bg-[#4A101B]/40 border border-[#B6975B]/25 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#B6975B]/70 shadow-xl"
            >
              <div>
                <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden mb-6 bg-[#2A0B10]">
                  <img
                    src={story.image}
                    alt={language === 'ar' ? story.titleAr : story.titleEn}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0B10]/80 via-transparent to-transparent opacity-50" />
                </div>

                <div className="flex items-center gap-2 text-xs font-serif-luxury text-[#B6975B] uppercase tracking-wider mb-2 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? story.subtitleAr : story.subtitleEn}</span>
                </div>

                <h3 className="font-serif-luxury text-2xl font-bold text-[#FFFDF8] mb-3">
                  {language === 'ar' ? story.titleAr : story.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-[#F5EFE4]/75 font-arabic-luxury leading-relaxed">
                  {language === 'ar' ? story.descAr : story.descEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#B6975B]/20 flex items-center justify-between text-xs font-arabic-luxury text-[#B6975B]">
                <span>{language === 'ar' ? 'متوفر لدى استيتيه للديكور' : 'Curated at Istatieh Decor'}</span>
                <span className="font-mono text-[11px] text-[#F5EFE4]/60">AMMAN, JORDAN</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
