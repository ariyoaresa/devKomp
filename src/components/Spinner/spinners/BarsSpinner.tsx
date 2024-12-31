import React from 'react';
import { SpinnerProps } from '../types';
import { getSpinnerSize } from '../utils';

export function BarsSpinner({ size = 'md', color = 'text-indigo-600', className = '' }: SpinnerProps) {
  const sizeClass = getSpinnerSize(size);
  const barWidth = size === 'sm' ? 'w-1' : size === 'md' ? 'w-1.5' : 'w-2';

  return (
    <div className={`flex gap-1 ${sizeClass} ${color} ${className}`}>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`${barWidth} h-full animate-pulse rounded`}
          style={{
            backgroundColor: 'currentColor',
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}