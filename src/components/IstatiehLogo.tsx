import React from 'react';
import { BUSINESS_CONFIG } from '../data/istatiehData';

interface IstatiehLogoProps {
  className?: string;
  tone?: 'light-surface' | 'dark-surface';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Authentic Istatieh Decor Logo Component with 100% transparent background.
 * Uses genuine Arabic calligraphy "استيتية ديكور" & Latin "Istatieh Decor" with zero backgrounds, frames, or borders.
 */
export const IstatiehLogo: React.FC<IstatiehLogoProps> = ({
  className = '',
  tone = 'light-surface',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-16 sm:h-18',
  }[size];

  // Pick transparent burgundy logo for light surfaces, or light ivory logo for dark surfaces
  const logoSrc = tone === 'dark-surface'
    ? BUSINESS_CONFIG.logoLightUrl
    : BUSINESS_CONFIG.logoTransparentUrl;

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      title="استيتية للديكور والستائر | Istatieh Decor"
    >
      <img
        src={logoSrc}
        alt="استيتية للديكور والستائر — Istatieh Decor"
        className={`${sizeClasses} w-auto object-contain transition-transform duration-200`}
        loading="eager"
      />
    </div>
  );
};
