
import React from 'react';

interface WaveDividerProps {
  color?: string;
  bgColor?: string;
  reversed?: boolean;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ color = 'fill-white', bgColor = 'bg-transparent', reversed = false }) => {
  const transform = reversed ? 'scaleX(-1)' : '';

  return (
    <div className={`${bgColor}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`w-full block ${color}`}
        style={{ transform }}
      >
        <path d="M1440,50 C1080,100 720,0 360,50 C180,75 0,50 0,50 L0,100 L1440,100 L1440,50 Z"></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
