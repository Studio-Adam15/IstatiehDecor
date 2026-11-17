import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Check } from 'lucide-react';
import { Language } from '../types';
import fabricDetailImg from '../assets/images/istatieh_fabric_detail_1793184096800.jpg';

interface PhilosophySectionProps {
  language: Language;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ language }) => {
  return (
    <section id="brand-intro" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5EFE4] text-[#2A0B10] overflow-hidden">
      
      {/* Background Architectural Watermark */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #4A101B 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Editorial Eyebrow Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[1.5px] bg-[#B6975B]" />
          <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#4A101B] uppercase font-bold">
            {language === 'ar' ? 'عن استيتيه للديكور' : 'ABOUT ISTATIEH DECOR'}
          </span>
        </div>

        {/* Main Grid: Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-[#4A101B] leading-[1.18]">
              {language === 'ar' ? (
                <span className="font-arabic-luxury">
                  الجمال يبدأ من <span className="text-[#B6975B]">التفاصيل</span>
                </span>
              ) : (
                <span>
                  Beauty Begins with <span className="text-[#B6975B]">Details</span>
                </span>
              )}
            </h2>

            {/* Exact Required Brand Supporting Copy */}
            <p className={`text-base sm:text-lg text-[#2A0B10]/90 leading-relaxed font-normal ${
              language === 'ar' ? 'font-arabic-luxury' : 'font-sans-editorial'
            }`}>
              {language === 'ar'
                ? 'نؤمن أن جمال المكان يبدأ من تفاصيله. نقدم خيارات من ورق الجدران والستائر تساعدكم على ابتكار مساحات تعبّر عن ذوقكم.'
                : 'We believe that the beauty of any space begins with its details. We offer a curated selection of wallpaper and curtains that helps you create spaces reflecting your authentic taste.'}
            </p>

            <div className="pt-4 border-t border-[#4A101B]/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-arabic-luxury text-[#4A101B]/85">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6975B] mt-1.5 shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'أقمشة ستائر مختارة بعناية لحجب الإضاءة أو نشرها بنعومة'
                    : 'Carefully curated curtain textiles for soft diffusion or blackout'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6975B] mt-1.5 shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'ورق جدران أوروبي مقاوم للرطوبة وسهل التنظيف بأحدث النقوش'
                    : 'Washable, moisture-resistant wallcoverings in trending palettes'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6975B] mt-1.5 shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'أخذ مقاسات دقيقة واستشارات في موقع المشروع بعمان'
                    : 'On-site precision measurements & consultations in Amman'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6975B] mt-1.5 shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'تركيب احترافي متقن بإشراف فني متخصص'
                    : 'Master installation and finishing by experienced craftsmen'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 text-xs font-arabic-luxury text-[#4A101B]/75">
              <MapPin className="w-4 h-4 text-[#B6975B] shrink-0" />
              <span>{language === 'ar' ? 'متجر أونلاين مع خدمة الزيارات الميدانية في عمّان وجميع المحافظات' : 'Online ordering & on-site consultations across Amman & Jordan'}</span>
            </div>
          </div>

          {/* Overlapping Asymmetric Imagery Column (6 cols) */}
          <div className="lg:col-span-6 relative">
            
            {/* Primary Main Architectural Image: Real emerald living room photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#B6975B]/30 bg-[#2A0B10]">
              <img
                src="/assets/aistudio/Screenshot_20261028-133321_14602cd9.jpg"
                alt="Istatieh Decor Emerald Wallpaper & Curtains"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute bottom-4 start-4 bg-[#2A0B10]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#B6975B]/30 text-xs text-[#F5EFE4] font-arabic-luxury">
                <span className="text-[#B6975B] font-bold block text-[10px]">
                  {language === 'ar' ? 'تنفيذ استيتيه للديكور' : 'Istatieh Decor Installation'}
                </span>
                <span>{language === 'ar' ? 'صالون الضيافة الزمردي' : 'Emerald Botanical Salon'}</span>
              </div>
            </div>

            {/* Overlapping Floating Material Detail (Tactile close-up) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden sm:block absolute -bottom-6 -start-6 w-44 sm:w-52 rounded-xl overflow-hidden shadow-2xl border-2 border-[#FFFDF8] bg-[#FFFDF8]"
            >
              <img
                src={fabricDetailImg}
                alt="Tactile Fabric & Texture Detail"
                className="w-full h-32 sm:h-36 object-cover"
                loading="lazy"
              />
              <div className="p-2 text-center bg-[#FFFDF8] text-[#4A101B] text-[10px] font-arabic-luxury font-bold">
                {language === 'ar' ? 'خامات منتقاة وحرفية عالية' : 'Tactile Textile Weave'}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
