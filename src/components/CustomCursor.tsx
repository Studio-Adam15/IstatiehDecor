import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface CustomCursorProps {
  language: Language;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ language }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'explore' | 'button'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Respect touch devices and reduced-motion
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const exploreEl = target.closest('[data-cursor="explore"]');
      const buttonEl = target.closest('button, a, input, select, textarea, [data-cursor="pointer"]');

      if (exploreEl) {
        setCursorType('explore');
      } else if (buttonEl) {
        setCursorType('button');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        animate={{
          x: mousePosition.x - (cursorType === 'explore' ? 38 : cursorType === 'button' ? 20 : 6),
          y: mousePosition.y - (cursorType === 'explore' ? 38 : cursorType === 'button' ? 20 : 6),
          width: cursorType === 'explore' ? 76 : cursorType === 'button' ? 40 : 12,
          height: cursorType === 'explore' ? 76 : cursorType === 'button' ? 40 : 12,
          backgroundColor:
            cursorType === 'explore'
              ? 'rgba(182, 151, 91, 0.92)'
              : cursorType === 'button'
              ? 'rgba(74, 16, 27, 0.25)'
              : '#B6975B',
          borderColor:
            cursorType === 'button'
              ? '#B6975B'
              : 'transparent',
          borderWidth: cursorType === 'button' ? 1.5 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.35,
        }}
        className="fixed rounded-full flex items-center justify-center backdrop-blur-xs select-none shadow-md"
      >
        {cursorType === 'explore' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif-luxury text-[10px] tracking-widest text-[#2A0B10] uppercase font-bold"
          >
            {language === 'ar' ? 'استكشف' : 'EXPLORE'}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
