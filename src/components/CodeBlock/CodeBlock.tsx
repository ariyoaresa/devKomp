import React from 'react';
import { useCopyToClipboard } from './useCopyToClipboard';
import { CopyButton } from './CopyButton';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'jsx' }: CodeBlockProps) {
  const { copied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="relative group">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code className="font-mono text-sm">{code}</code>
      </pre>
      <CopyButton copied={copied} onClick={() => copyToClipboard(code)} />
    </div>
  );
}