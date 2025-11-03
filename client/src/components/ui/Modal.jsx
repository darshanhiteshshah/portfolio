import { useState } from 'react';

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  footer,
  className = ''
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative bg-slate-900 border border-slate-700 rounded-lg shadow-2xl max-w-md w-full mx-4 ${className}`}>
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <h2 className="text-xl font-bold text-slate-100">{title}</h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-orange-500 transition"
            >
              ✕
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex gap-3 p-6 border-t border-slate-700">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
