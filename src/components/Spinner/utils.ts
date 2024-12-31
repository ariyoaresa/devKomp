import { SpinnerSize } from './types';

export function getSpinnerSize(size: SpinnerSize): string {
  return {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }[size];
}