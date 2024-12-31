import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  label?: string;
}

export function Switch({ 
  checked, 
  onChange, 
  size = 'md', 
  disabled = false,
  label
}: SwitchProps) {
  const sizeClasses = {
    sm: 'w-8 h-4',
    md: 'w-11 h-6',
    lg: 'w-14 h-7'
  };

  const toggleClasses = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <div
          className={`${sizeClasses[size]} ${
            checked ? 'bg-indigo-600' : 'bg-gray-200'
          } rounded-full transition-colors ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        />
        <div
          className={`${toggleClasses[size]} absolute left-0.5 top-0.5 bg-white rounded-full transition-transform transform ${
            checked ? 'translate-x-full' : 'translate-x-0'
          }`}
        />
      </div>
      {label && (
        <span className={`ml-3 ${disabled ? 'opacity-50' : ''}`}>{label}</span>
      )}
    </label>
  );
}