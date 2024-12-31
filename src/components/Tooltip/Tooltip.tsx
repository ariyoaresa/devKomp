import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ content, children, position = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClass = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2 z-10',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2 z-10',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2 z-10',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2 z-10',
  }[position];

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className={`absolute ${positionClass} px-2 py-1 text-sm text-white bg-gray-900 rounded whitespace-nowrap`}>
          {content}
        </div>
      )}
    </div>
  );
}