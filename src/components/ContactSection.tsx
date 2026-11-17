import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, MapPin, Instagram, Send, CheckCircle2, Navigation, Copy, Check } from 'lucide-react';
import { Language, InquiryFormState } from '../types';
import { BUSINESS_CONFIG } from '../data/istatiehData';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState<InquiryFormState>({
    fullName: '',
    phone: '',
    service: 'wallpaper',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: { fullName?: string; phone?: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = language === 'ar' ? 'يرجى إدخال الاسم الكريم' : 'Please enter your name';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = language === 'ar' ? 'يرجى إدخال رقم هاتف صحيح' : 'Please enter a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real local inquiry processing and prepare instant WhatsApp copy
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleDirectWhatsAppSend = () => {
    const serviceName = {
      wallpaper: language === 'ar' ? 'ورق الجدران' : 'Wallpaper',
      curtains: language === 'ar' ? 'الستائر والتفصيل' : 'Curtains & Drapery',
      interior_finishes: language === 'ar' ? 'التشطيبات والديكور' : 'Interior Finishes',
      consultation: language === 'ar' ? 'استشارة عامة في الموقع' : 'On-Site Consultation',
    }[formData.service];

    const message = language === 'ar'
      ? `مرحباً استيتيه للديكور، اسمي: ${formData.fullName}، رقم هاتفي: ${formData.phone}، أود الاستفسار بخصوص: ${serviceName}. ${formData.message ? `ملاحظات: ${formData.message}` : ''}`
      : `Hello Istatieh Decor, My name is: ${formData.fullName}, Phone: ${formData.phone}, I would like to inquire about: ${serviceName}. ${formData.message ? `Notes: ${formData.message}` : ''}`;

    window.open(`https://wa.me/${BUSINESS_CONFIG.whatsappDigits}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#4A101B] text-[#F5EFE4] relative overflow-hidden">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #B6975B 1px, transparent 1px), linear-gradient(to bottom, #B6975B 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 pb-10 border-b border-[#B6975B]/25">
          <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#B6975B] uppercase font-bold block mb-2">
            {language === 'ar' ? 'تواصل معنا' : 'LET\'S CONNECT'}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FFFDF8] leading-tight">
            {language === 'ar' ? (
              <span className="font-arabic-luxury">
                لنصنع مساحة <span className="text-[#B6975B]">تشبه ذوقكم</span>.
              </span>
            ) : (
              <span>
                LET'S MAKE YOUR SPACE <span className="text-[#B6975B]">DISTINCTIVE.</span>
              </span>
            )}
          </h2>
          <p className="text-sm sm:text-base text-[#F5EFE4]/80 font-arabic-luxury mt-4 max-w-2xl leading-relaxed">
            {language === 'ar'
              ? 'أخبرونا عن المساحة التي ترغبون في تجديدها، وسنساعدكم في استكشاف الخيارات المناسبة من ورق الجدران والستائر والتكسيات.'
              : 'Tell us about the space you wish to elevate, and our design team will guide you through tailored wallpaper and curtain selections.'}
          </p>
        </div>

        {/* Dual Column: Verified Contact Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Showroom Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Online Service & Coverage */}
              <div className="p-6 rounded-2xl bg-[#2A0B10]/80 border border-[#B6975B]/30 shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-xs font-serif-luxury text-[#B6975B] uppercase tracking-wider font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>{language === 'ar' ? 'خدمة أونلاين وتوصيل ومعاينة' : 'ONLINE STORE & SERVICE AREA'}</span>
                </div>

                <div>
                  <p className="font-arabic-luxury text-base font-bold text-[#FFFDF8]">
                    {language === 'ar' ? BUSINESS_CONFIG.addressAr : BUSINESS_CONFIG.addressEn}
                  </p>
                  <p className="text-xs text-[#F5EFE4]/60 font-arabic-luxury mt-1">
                    {language === 'ar'
                      ? 'الطلب أونلاين مع إرسال الكتالوجات وأخذ المقاسات في موقعكم في عمّان وجميع المحافظات'
                      : 'Full online ordering, digital catalogs & on-site measurements across Amman and all governorates'}
                  </p>
                </div>

                <a
                  href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#4A101B] hover:bg-[#B6975B] text-[#FFFDF8] hover:text-[#2A0B10] text-xs font-arabic-luxury font-bold transition-all border border-[#B6975B]/40"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'احجز زيارة معاينة وقياسات في موقعك' : 'Book On-Site Measurement Visit'}</span>
                </a>
              </div>

              {/* Direct Phone & Copy */}
              <div className="p-6 rounded-2xl bg-[#2A0B10]/80 border border-[#B6975B]/30 shadow-lg space-y-3">
                <span className="text-xs font-serif-luxury text-[#B6975B] uppercase tracking-wider font-bold block">
                  {language === 'ar' ? 'الاتصال الهاتفي المباشر' : 'DIRECT TELEPHONE'}
                </span>

                <div className="flex items-center justify-between">
                  <a
                    href={BUSINESS_CONFIG.telUrl}
                    dir="ltr"
                    style={{ unicodeBidi: 'isolate' }}
                    className="font-mono text-xl font-bold text-[#FFFDF8] hover:text-[#B6975B] transition-colors tabular-nums inline-block"
                  >
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-[#4A101B] text-[#B6975B] hover:bg-[#B6975B] hover:text-[#2A0B10] transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Instant WhatsApp Quick Link */}
              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl(language, 'general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-5 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/50 text-[#FFFDF8] transition-all duration-300 shadow-md group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="font-arabic-luxury text-sm font-bold block">
                      {language === 'ar' ? 'محادثة فورية عبر واتساب' : 'Direct WhatsApp Conversation'}
                    </span>
                    <span className="text-[11px] text-[#F5EFE4]/70 font-arabic-luxury">
                      {language === 'ar' ? 'رد سريع لاستفسارات ورق الجدران والستائر' : 'Fast response for quotes & inquiries'}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-arabic-luxury text-[#25D366] font-bold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  {language === 'ar' ? 'ابدأ المحادثة' : 'Chat Now'}
                </span>
              </a>

              {/* Instagram Profile */}
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#2A0B10]/40 border border-[#B6975B]/20 text-[#F5EFE4] hover:text-[#B6975B] transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#B6975B]" />
                <span className="font-arabic-luxury text-xs font-medium">
                  {language === 'ar' ? 'تابعونا على إنستغرام: @istatieh.decor' : 'Follow us on Instagram: @istatieh.decor'}
                </span>
              </a>

            </div>

            <div className="pt-6 border-t border-[#B6975B]/15 text-xs text-[#F5EFE4]/60 font-arabic-luxury">
              <span>{language === 'ar' ? 'الخدمة متوفرة أونلاين: السبت إلى الخميس (توصيل وتركيب لجميع المناطق)' : 'Online Service: Saturday to Thursday (Delivery & Installation Across Jordan)'}</span>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#2A0B10]/90 border border-[#B6975B]/35 shadow-2xl backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="thankyou"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-5"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#B6975B]/20 text-[#B6975B] flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FFFDF8]">
                      {language === 'ar' ? 'شكراً لتواصلكم مع استيتيه للديكور' : 'Thank You for Reaching Out'}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#F5EFE4]/80 font-arabic-luxury max-w-md mx-auto leading-relaxed">
                      {language === 'ar'
                        ? 'تم تسجيل طلبك بنجاح. سيقوم مستشار الديكور بالتواصل معكم هاتفياً أو عبر واتساب لمناقشة القياسات والخيارات المناسبة.'
                        : 'Your inquiry has been received. Our specialist will contact you shortly via phone or WhatsApp to discuss measurements and styling.'}
                    </p>

                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={handleDirectWhatsAppSend}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-[#2A0B10] font-arabic-luxury font-bold text-xs uppercase tracking-wider shadow-lg"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>{language === 'ar' ? 'إرسال نفس الطلب عبر واتساب للتأكيد الفوري' : 'Send via WhatsApp to Confirm'}</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            service: 'wallpaper',
                            message: '',
                          });
                        }}
                        className="px-5 py-3 rounded-xl border border-[#B6975B]/30 text-xs font-arabic-luxury text-[#F5EFE4]"
                      >
                        {language === 'ar' ? 'إرسال استفسار آخر' : 'Submit Another Inquiry'}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-serif-luxury text-xl font-bold text-[#FFFDF8] mb-1">
                        {language === 'ar' ? 'نموذج الاستفسار وطلب المعاينة' : 'Request Consultation & Inquiries'}
                      </h3>
                      <p className="text-xs text-[#F5EFE4]/70 font-arabic-luxury">
                        {language === 'ar' ? 'املأ الحقول التالية وسنتواصل معك خلال أقرب وقت' : 'Fill out the details below and we will contact you promptly'}
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-arabic-luxury text-[#F5EFE4]/80 mb-2">
                        {language === 'ar' ? 'الاسم الكريم *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={language === 'ar' ? 'مثال: أحمد الخالد' : 'e.g. Ahmad Khaled'}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#4A101B]/40 border border-[#B6975B]/25 text-xs text-[#FFFDF8] placeholder-[#F5EFE4]/30 focus:outline-hidden focus:border-[#B6975B] transition-colors font-arabic-luxury"
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-300 mt-1 font-arabic-luxury">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-arabic-luxury text-[#F5EFE4]/80 mb-2">
                        {language === 'ar' ? 'رقم الهاتف أو الواتساب *' : 'Phone / WhatsApp Number *'}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={language === 'ar' ? 'مثال: +962 7 8787 8601' : 'e.g. +962 7 8787 8601'}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#4A101B]/40 border border-[#B6975B]/25 text-xs text-[#FFFDF8] placeholder-[#F5EFE4]/30 focus:outline-hidden focus:border-[#B6975B] transition-colors font-mono dir-ltr text-start"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-300 mt-1 font-arabic-luxury">{errors.phone}</p>
                      )}
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-arabic-luxury text-[#F5EFE4]/80 mb-2">
                        {language === 'ar' ? 'الخدمة المطلوبة' : 'Service of Interest'}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value as any })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#4A101B]/40 border border-[#B6975B]/25 text-xs text-[#FFFDF8] focus:outline-hidden focus:border-[#B6975B] transition-colors font-arabic-luxury"
                      >
                        <option value="wallpaper">
                          {language === 'ar' ? 'ورق جدران (Wallpaper)' : 'Premium Wallpaper'}
                        </option>
                        <option value="curtains">
                          {language === 'ar' ? 'ستائر وتفصيل وأقمشة (Curtains)' : 'Curtains & Custom Drapery'}
                        </option>
                        <option value="interior_finishes">
                          {language === 'ar' ? 'تشطيبات وتكسيات جدارية ثلاثية الأبعاد' : '3D Wall Finishes & Details'}
                        </option>
                        <option value="consultation">
                          {language === 'ar' ? 'زيارة موقع وأخذ مقاسات في عمان' : 'On-Site Measurements in Amman'}
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-arabic-luxury text-[#F5EFE4]/80 mb-2">
                        {language === 'ar' ? 'تفاصيل إضافية (اختياري)' : 'Additional Notes (Optional)'}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={language === 'ar' ? 'أخبرنا عن عدد الغرف، النمط المفضل، أو أي استفسار محدد...' : 'Tell us about your room dimensions, desired style, or questions...'}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#4A101B]/40 border border-[#B6975B]/25 text-xs text-[#FFFDF8] placeholder-[#F5EFE4]/30 focus:outline-hidden focus:border-[#B6975B] transition-colors resize-none font-arabic-luxury"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#B6975B] hover:bg-[#c9aa6d] text-[#2A0B10] font-arabic-luxury font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xl cursor-pointer active:scale-98 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{language === 'ar' ? 'جارٍ تسجيل الطلب...' : 'Transmitting Inquiry...'}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{language === 'ar' ? 'إرسال طلب الاستشارة' : 'Submit Consultation Request'}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
