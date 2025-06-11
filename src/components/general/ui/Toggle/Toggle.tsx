'use client';
import React from 'react';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  size = 'medium',
  variant = 'default',
  className = ''
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const sizeClasses = {
    small: 'w-8 h-4',
    medium: 'w-10 h-5',
    large: 'w-12 h-6'
  };

  const variantClasses = {
    default: checked ? 'bg-blue-500' : 'bg-gray-300',
    success: checked ? 'bg-green-500' : 'bg-gray-300',
    warning: checked ? 'bg-yellow-500' : 'bg-gray-300',
    error: checked ? 'bg-red-500' : 'bg-gray-300'
  };

  const thumbSizeClasses = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {label && (
        <label 
          className={`text-sm font-medium ${disabled ? 'text-gray-400' : 'text-gray-700'}`}
          onClick={handleToggle}
        >
          {label}
        </label>
      )}
      
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label || 'Toggle'}
        disabled={disabled}
        onClick={handleToggle}
        className={`
          relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <span
          className={`
            inline-block rounded-full bg-white shadow-lg transform transition-transform duration-200 ease-in-out
            ${thumbSizeClasses[size]}
            ${checked ? 'translate-x-full' : 'translate-x-0'}
          `}
        />
      </button>
    </div>
  );
};

export default Toggle;