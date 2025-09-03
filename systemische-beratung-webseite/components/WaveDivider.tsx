
import React from 'react';

interface WaveDividerProps {
  variant?: '1' | '2' | '3'; // maps to section splitter sets
  background?: '1' | '2' | '3' | 'none';
  reversed?: boolean;
  className?: string;
}

const variantToFill: Record<string, string> = {
  '1': 'fill-section-splitter-1',
  '2': 'fill-section-splitter-2',
  '3': 'fill-section-spliiter-3', // Schreibfehler bewusst konsistent
};

const backgroundToClass: Record<string, string> = {
  '1': 'bg-section-splitter-1',
  '2': 'bg-section-splitter-2',
  '3': 'bg-section-spliiter-3',
  'none': 'bg-transparent'
};

const WaveDivider: React.FC<WaveDividerProps> = ({ variant = '1', background = 'none', reversed = false, className = '' }) => {
  const fillClass = variantToFill[variant] || variantToFill['1'];
  const bgClass = backgroundToClass[background] || backgroundToClass['none'];
  const reverseClass = reversed ? 'wave-reversed' : '';

  return (
    <div className={`${bgClass} ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`w-full block ${fillClass} ${reverseClass}`}
      >
        <path d="M1440,50 C1080,100 720,0 360,50 C180,75 0,50 0,50 L0,100 L1440,100 L1440,50 Z"></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
