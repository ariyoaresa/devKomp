export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerType = 'circle' | 'dots' | 'bars' | 'pulse';

export interface SpinnerProps {
  size?: SpinnerSize;
  type?: SpinnerType;
  color?: string;
  className?: string;
}