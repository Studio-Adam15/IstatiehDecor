import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, Maximize2, Sparkles, MapPin } from 'lucide-react';
import { Language, InspirationItem } from '../types';
import { INSPIRATION_ITEMS } from '../data/istatiehData';

interface InspirationGalleryProps {
  language: Language;
}

export const InspirationGallery: React.FC<InspirationGalleryProps> = ({ language }) => {
  const [selectedItem, setSelectedItem] = useState<InspirationItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem]);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = INSPIRATION_ITEMS.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % INSPIRATION_ITEMS.length;
    setSelectedItem(INSPIRATION_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = INSPIRATION_ITEMS.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + INSPIRATION_ITEMS.length) % INSPIRATION_ITEMS.length;
    setSelectedItem(INSPIRATION_ITEMS[prevIndex]);
  };

  return (
    <section id="interior-inspiration" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4]">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#B6975B]/20">
          <div>
            <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block mb-2">
              {language === 'ar' ? 'معرض الإلهام والأفكار' : 'SPACES THAT INSPIRE'}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFDF8] leading-tight">
              {language === 'ar' ? (
                <span className="font-arabic-luxury">مساحات تلهمكم لأجمل ديكور</span>
              ) : (
                <span>Living Spaces of Enduring Beauty</span>
              )}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#F5EFE4]/70 max-w-md font-arabic-luxury leading-relaxed">
            {language === 'ar'
              ? 'مجموعة منتقاة من المشاريع المنفذة وتصاميم الإلهام التي توضح كيفية توظيف ورق الجدران والستائر في خلق بيئة سكنية دافئة.'
              : 'A curated gallery of executed works and bespoke interior vignettes illustrating the transformative power of decorative details.'}
          </p>
        </div>

        {/* Masonry / Editorial Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSPIRATION_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              data-cursor="explore"
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#4A101B]/40 border border-[#B6975B]/20 hover:border-[#B6975B]/70 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#2A0B10]">
                <img
                  src={item.image}
                  alt={language === 'ar' ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0B10]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Inspect Zoom Icon */}
                <div className="absolute top-3 end-3 w-8 h-8 rounded-full bg-[#2A0B10]/80 backdrop-blur-md border border-[#B6975B]/40 flex items-center justify-center text-[#B6975B] group-hover:bg-[#B6975B] group-hover:text-[#2A0B10] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 start-3 px-3 py-1 rounded-full bg-[#2A0B10]/80 backdrop-blur-md border border-[#B6975B]/40 text-[10px] font-arabic-luxury text-[#B6975B] font-bold">
                  {language === 'ar' ? item.categoryLabelAr : item.categoryLabelEn}
                </div>
              </div>

              {/* Text Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-arabic-luxury text-[#B6975B] block mb-1">
                    {language === 'ar' ? item.spaceAr : item.spaceEn}
                  </span>
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#FFFDF8] group-hover:text-[#B6975B] transition-colors">
                    {language === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#F5EFE4]/70 mt-2 font-arabic-luxury line-clamp-2 leading-relaxed">
                    {language === 'ar' ? item.captionAr : item.captionEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#B6975B]/15 flex items-center justify-between text-[11px] font-arabic-luxury text-[#F5EFE4]/60">
                  <span>{item.isRealProject ? (language === 'ar' ? 'مشروع منفذ في الأردن' : 'Project in Jordan') : (language === 'ar' ? 'نموذج إلهامي' : 'Inspiration Design')}</span>
                  <span className="text-[#B6975B] font-bold">{language === 'ar' ? 'تكبير الصورة' : 'View Full Image'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
            <div className="fixed inset-0" onClick={() => setSelectedItem(null)} aria-hidden="true" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#2A0B10] border border-[#B6975B]/40 rounded-2xl overflow-hidden shadow-2xl z-10 text-[#F5EFE4]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#B6975B]/20 bg-[#4A101B]/60">
                <div className="flex items-center gap-2 text-xs font-arabic-luxury">
                  <span className="text-[#B6975B] font-bold">
                    {language === 'ar' ? selectedItem.categoryLabelAr : selectedItem.categoryLabelEn}
                  </span>
                  <span>·</span>
                  <span>{language === 'ar' ? selectedItem.spaceAr : selectedItem.spaceEn}</span>
                </div>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-8 h-8 rounded-full border border-[#B6975B]/40 flex items-center justify-center text-[#F5EFE4] hover:bg-[#B6975B] hover:text-[#2A0B10] transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Full Image */}
              <div className="relative aspect-16/10 w-full bg-black/50">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.titleAr}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Footer info & Prev/Next actions */}
              <div className="p-6 border-t border-[#B6975B]/20 bg-[#2A0B10] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#FFFDF8]">
                    {language === 'ar' ? selectedItem.titleAr : selectedItem.titleEn}
                  </h3>
                  <p className="text-xs text-[#F5EFE4]/80 font-arabic-luxury mt-1">
                    {language === 'ar' ? selectedItem.captionAr : selectedItem.captionEn}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl border border-[#B6975B]/30 hover:border-[#B6975B] text-[#F5EFE4] transition-colors"
                    title="Previous Image"
                  >
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl border border-[#B6975B]/30 hover:border-[#B6975B] text-[#F5EFE4] transition-colors"
                    title="Next Image"
                  >
                    <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
