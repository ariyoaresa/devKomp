import React, { useState, useEffect } from 'react';
import { useTypewriter } from './useTypewriter';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

export function TypewriterEffect({ text, speed = 100, delay = 1000 }: TypewriterEffectProps) {
  const displayText = useTypewriter(text, speed, delay);
  return <span className="font-mono">{displayText}</span>;
}