import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type = 'info', onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }[type];

  return (
    <div className={`${bgColor} text-white px-4 py-2 rounded-lg shadow-lg flex items-center justify-between`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 hover:opacity-80">
        <X size={18} />
      </button>
    </div>
  );
}