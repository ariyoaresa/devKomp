import React from 'react';
import { SpinnerProps } from '../types';
import { getSpinnerSize } from '../utils';

export function PulseSpinner({ size = 'md', color = 'text-indigo-600', className = '' }: SpinnerProps) {
  const sizeClass = getSpinnerSize(size);

  return (
    <div className={`relative ${sizeClass} ${color} ${className}`}>
      <div className="absolute inset-0 rounded-full bg-current animate-ping opacity-75" />
      <div className="relative rounded-full bg-current" />
    </div>
  );
}