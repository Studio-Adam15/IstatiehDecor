import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { Language, WallpaperItem } from '../types';
import { WALLPAPERS, BUSINESS_CONFIG } from '../data/istatiehData';

interface WallpaperShowroomProps {
  language: Language;
}

export const WallpaperShowroom: React.FC<WallpaperShowroomProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelAr: 'الكل', labelEn: 'All' },
    { id: 'botanical', labelAr: 'نباتي فاخر', labelEn: 'Botanical' },
    { id: 'statement', labelAr: 'جداريات فنية', labelEn: 'Statement Murals' },
    { id: 'geometric', labelAr: 'هندسي معاصر', labelEn: 'Geometric' },
    { id: 'classic', labelAr: 'كلاسيكي راقي', labelEn: 'Classic' },
    { id: 'modern', labelAr: 'تكسيات ثلاثية الأبعاد', labelEn: '3D Finishes' },
  ];

  const filteredWallpapers = selectedCategory === 'all'
    ? WALLPAPERS
    : WALLPAPERS.filter((w) => w.category === selectedCategory);

  const handleInquireWallpaper = (wp: WallpaperItem) => {
    const text = language === 'ar'
      ? `مرحباً استيتيه للديكور، أود الاستفسار عن توفر وسعر ورق الجدران: "${wp.nameAr}".`
      : `Hello Istatieh Decor, I would like to inquire about availability and pricing for wallpaper: "${wp.nameEn}".`;
    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappDigits}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="wallpaper-collection" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4]">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#B6975B]/20">
          <div>
            <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block mb-2">
              {language === 'ar' ? 'تشكيلة ورق الجدران' : 'SIGNATURE WALLPAPERS'}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFDF8] leading-tight">
              {language === 'ar' ? (
                <span className="font-arabic-luxury">تألق الجدران ولمسات الفخامة</span>
              ) : (
                <span>Tactile Textures & Architectural Murals</span>
              )}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#F5EFE4]/70 max-w-md font-arabic-luxury leading-relaxed">
            {language === 'ar'
              ? 'تشكيلة منتقاة من ورق الجدران الأوروبي بتصاميم نباتية وهندسية وجداريات ثلاثية الأبعاد تمنح مساحاتكم حضوراً فريداً.'
              : 'Curated European wallcoverings and artistic murals designed to bring depth and character to every room.'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 text-xs font-arabic-luxury">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full transition-all duration-200 cursor-pointer font-medium ${
                  isActive
                    ? 'bg-[#B6975B] text-[#2A0B10] font-bold shadow-sm'
                    : 'bg-[#4A101B]/40 text-[#F5EFE4]/80 hover:text-[#FFFDF8] hover:bg-[#4A101B]/70 border border-[#B6975B]/20'
                }`}
              >
                <span>{language === 'ar' ? cat.labelAr : cat.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Simplified Direct Grid: Clear, Visual, Engaging */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWallpapers.map((wp) => (
              <motion.div
                key={wp.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-[#4A101B]/30 border border-[#B6975B]/25 hover:border-[#B6975B]/70 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-[#1C060B]">
                    <img
                      src={wp.image}
                      alt={language === 'ar' ? wp.nameAr : wp.nameEn}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Category Tag */}
                    <div className="absolute top-3 start-3 px-3 py-1 rounded-full bg-[#2A0B10]/85 backdrop-blur-md border border-[#B6975B]/30 text-[11px] font-arabic-luxury text-[#B6975B] font-bold">
                      {language === 'ar' ? wp.categoryLabelAr : wp.categoryLabelEn}
                    </div>

                    {wp.isRealUploaded && (
                      <div className="absolute bottom-3 end-3 px-2.5 py-0.5 rounded-full bg-[#4A101B]/90 backdrop-blur-md border border-[#B6975B]/30 text-[10px] font-arabic-luxury text-[#FFFDF8]">
                        {language === 'ar' ? 'تنفيذ استيتيه' : 'Istatieh Project'}
                      </div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif-luxury text-lg font-bold text-[#FFFDF8] group-hover:text-[#B6975B] transition-colors">
                      {language === 'ar' ? wp.nameAr : wp.nameEn}
                    </h3>

                    <p className="text-xs text-[#F5EFE4]/75 font-arabic-luxury leading-relaxed line-clamp-2">
                      {language === 'ar' ? wp.descriptionAr : wp.descriptionEn}
                    </p>

                    <div className="pt-2 text-[11px] font-arabic-luxury text-[#B6975B]">
                      <span className="text-[#F5EFE4]/50">{language === 'ar' ? 'المساحة المقترحة: ' : 'Ideal for: '}</span>
                      <span>{language === 'ar' ? wp.roomSettingAr : wp.roomSettingEn}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleInquireWallpaper(wp)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#4A101B] hover:bg-[#B6975B] text-[#FFFDF8] hover:text-[#2A0B10] font-arabic-luxury font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 border border-[#B6975B]/30 cursor-pointer active:scale-98"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'استفسار عبر واتساب' : 'Inquire on WhatsApp'}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
