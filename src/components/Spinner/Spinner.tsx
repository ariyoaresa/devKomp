import React from 'react';
import { SpinnerProps } from './types';
import { CircleSpinner } from './spinners/CircleSpinner';
import { DotsSpinner } from './spinners/DotsSpinner';
import { BarsSpinner } from './spinners/BarsSpinner';
import { PulseSpinner } from './spinners/PulseSpinner';

export function Spinner({ type = 'circle', ...props }: SpinnerProps) {
  const SpinnerComponent = {
    circle: CircleSpinner,
    dots: DotsSpinner,
    bars: BarsSpinner,
    pulse: PulseSpinner,
  }[type];

  return <SpinnerComponent {...props} />;
}