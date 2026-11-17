import React from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Language, PageView } from '../types';
import burgundyDraperyImg from '../assets/images/istatieh_burgundy_drapery_1793184079157.jpg';

interface CollectionCardsProps {
  language: Language;
  onNavigate: (page: PageView) => void;
}

export const CollectionCards: React.FC<CollectionCardsProps> = ({
  language,
  onNavigate,
}) => {
  const collections = [
    {
      number: '01',
      pageId: 'wallpapers' as PageView,
      titleAr: 'ورق الجدران',
      titleEn: 'WALLPAPERS',
      subtitleAr: 'نقوش وألوان وخامات تحول جدرانكم إلى لوحات فنية تنبض بالحياة والأصالة.',
      subtitleEn: 'Patterns, textures, and colors that transform your walls into a statement.',
      image: '/assets/aistudio/Screenshot_20261028-133336_d81201bb.jpg',
      badgeAr: 'تشكيلة حصرية',
      badgeEn: 'Exclusive Textures',
    },
    {
      number: '02',
      pageId: 'curtains' as PageView,
      titleAr: 'الستائر الفاخرة',
      titleEn: 'CURTAINS & DRAPERY',
      subtitleAr: 'أقمشة انسيابية وستائر تفصيل تتحكم بالضوء والخصوصية وتمنح المكان سكينة وأناقة.',
      subtitleEn: 'Elegant fabrics and refined drapery that shape light, privacy, and atmosphere.',
      image: burgundyDraperyImg,
      badgeAr: 'تفصيل مخصص',
      badgeEn: 'Custom Tailored',
    },
    {
      number: '03',
      pageId: 'gallery' as PageView,
      titleAr: 'تفاصيل وتشطيبات الديكور',
      titleEn: 'INTERIOR DETAILS',
      subtitleAr: 'تكسيات جدارية ثلاثية الأبعاد وحلول معمارية تكمل جمال المساحة برؤية عصرية.',
      subtitleEn: 'Finishing touches and 3D architectural reliefs that bring harmony and character.',
      image: '/assets/aistudio/Screenshot_20261028-133356_4d5934ea.jpg',
      badgeAr: 'معمارية ثلاثية الأبعاد',
      badgeEn: '3D Sculptural Relief',
    },
  ];

  return (
    <section id="collections" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2A0B10] text-[#F5EFE4]">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#B6975B]/20">
          <div>
            <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block mb-2">
              {language === 'ar' ? 'مجموعات استيتيه الرئيسية' : 'EXPLORE OUR COLLECTIONS'}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFDF8] leading-tight">
              {language === 'ar' ? (
                <span className="font-arabic-luxury">عالم من الجمال المتكامل</span>
              ) : (
                <span>Three Pillars of Interior Artistry</span>
              )}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#F5EFE4]/70 max-w-md font-arabic-luxury leading-relaxed">
            {language === 'ar'
              ? 'ننتقي لكم بعناية كل قطعة وخامة لتناسب هوية بيتكم، بين الكلاسيكية الفخمة والمعاصرة الهادئة.'
              : 'Carefully curated wallcoverings, drapery textiles, and finishing reliefs crafted for modern luxury living.'}
          </p>
        </div>

        {/* 3-Column Editorial Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col) => (
            <div
              key={col.number}
              onClick={() => onNavigate(col.pageId)}
              data-cursor="explore"
              className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-[#4A101B]/40 border border-[#B6975B]/25 hover:border-[#B6975B] p-5 sm:p-6 transition-all duration-500 shadow-xl hover:-translate-y-1.5"
            >
              <div>
                {/* Image Container with Smooth Scale */}
                <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden mb-6 bg-[#2A0B10]">
                  <img
                    src={col.image}
                    alt={col.titleAr}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0B10]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 start-3 px-2.5 py-1 rounded-full bg-[#2A0B10]/80 backdrop-blur-md border border-[#B6975B]/40 text-[10px] font-arabic-luxury text-[#B6975B] font-bold">
                    {language === 'ar' ? col.badgeAr : col.badgeEn}
                  </div>

                  {/* Numbering */}
                  <div className="absolute bottom-3 end-3 font-serif-luxury text-2xl font-bold text-[#FFFDF8]/90">
                    {col.number}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#FFFDF8] group-hover:text-[#B6975B] transition-colors">
                  {language === 'ar' ? col.titleAr : col.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-[#F5EFE4]/75 mt-2.5 font-arabic-luxury leading-relaxed line-clamp-3">
                  {language === 'ar' ? col.subtitleAr : col.subtitleEn}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="mt-6 pt-4 border-t border-[#B6975B]/20 flex items-center justify-between text-xs font-arabic-luxury text-[#B6975B] group-hover:text-[#FFFDF8] transition-colors">
                <span className="font-bold">
                  {language === 'ar' ? 'استعرض المجموعة' : 'Explore Collection'}
                </span>
                <span className="w-8 h-8 rounded-full border border-[#B6975B]/40 flex items-center justify-center group-hover:bg-[#B6975B] group-hover:text-[#2A0B10] transition-colors">
                  {language === 'ar' ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
