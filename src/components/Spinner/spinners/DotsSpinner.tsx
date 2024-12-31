import React from 'react';
import { SpinnerProps } from '../types';
import { getSpinnerSize } from '../utils';

export function DotsSpinner({ size = 'md', color = 'text-indigo-600', className = '' }: SpinnerProps) {
  const sizeClass = getSpinnerSize(size);
  const dotSize = size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3';

  return (
    <div className={`flex gap-1 ${sizeClass} ${color} ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${dotSize} rounded-full animate-bounce`}
          style={{
            backgroundColor: 'currentColor',
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}