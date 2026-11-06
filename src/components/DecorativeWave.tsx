import React from 'react';

export const DecorativeWave: React.FC = () => {
  return (
    <div 
      className="pointer-events-none absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0"
      aria-hidden="true"
    >
      <svg
        className="relative block w-full h-28 sm:h-36 md:h-44 text-[#EBF2FF] opacity-80"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"></path>
      </svg>
      <svg
        className="absolute bottom-0 left-0 block w-full h-20 sm:h-28 md:h-32 text-[#DBE7FF] opacity-60"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,40 C300,110 600,10 900,70 C1050,100 1150,50 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  );
};