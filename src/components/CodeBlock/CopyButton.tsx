import React from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  copied: boolean;
  onClick: () => void;
}

export function CopyButton({ copied, onClick }: CopyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  );
}