import React from 'react';
import { CodeBlock } from './CodeBlock';

interface ComponentCardProps {
  title: string;
  description: string;
  code: string;
  preview: React.ReactNode;
}

export function ComponentCard({ title, description, code, preview }: ComponentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          {preview}
        </div>
        <CodeBlock code={code} />
      </div>
    </div>
  );
}