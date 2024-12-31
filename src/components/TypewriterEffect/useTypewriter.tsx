import React from 'react';
import { useTypewriter } from './useTypewriter';

function TypewriterDemo() {

  const displayText = useTypewriter(text, speed);

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '24px' }}>
      {displayText}
    </div>
  );
}

export default TypewriterDemo;
