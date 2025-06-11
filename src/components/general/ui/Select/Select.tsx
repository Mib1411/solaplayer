/**
 * Select Component
 */

import React, { useState, useRef, useEffect } from 'react';
import { BaseComponentProps } from '../types';

interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends BaseComponentProps {
  value: string | number;
  onChange: (value: string | number) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'minimal';
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  size = 'medium',
  variant = 'default',
  className = '',
  ariaLabel,
  testId
}, ref) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  // Find current option
  const currentOption = options.find(option => option.value === value);
  const enabledOptions = options.filter(option => !option.disabled);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          const option = enabledOptions[focusedIndex];
          if (option) {
            onChange(option.value);
            setIsOpen(false);
            setFocusedIndex(-1);
          }
        } else {
          setIsOpen(true);
          setFocusedIndex(0);
        }
        break;
        
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
        
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex(prev => 
            prev < enabledOptions.length - 1 ? prev + 1 : prev
          );
        }
        break;
        
      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(enabledOptions.length - 1);
        } else {
          setFocusedIndex(prev => prev > 0 ? prev - 1 : prev);
        }
        break;
    }
  };

  const handleOptionClick = (option: SelectOption) => {
    if (!option.disabled) {
      onChange(option.value);
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  // Native select fallback für bessere Accessibility
  const nativeSelect = (
    <select
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="select-native"
      aria-label={ariaLabel}
      data-testid={testId}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option 
          key={option.value} 
          value={option.value} 
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  );

  const customSelect = (
    <div
      ref={selectRef}
      className={`select-container ${size} ${variant} ${disabled ? 'disabled' : ''} ${isOpen ? 'open' : ''} ${className}`}
      data-testid={testId}
    >
      <div
        className="select-trigger"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        <span className="select-value">
          {currentOption ? currentOption.label : placeholder || 'Auswählen...'}
        </span>
        <span className="select-arrow">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      
      {isOpen && (
        <div
          ref={optionsRef}
          className="select-options"
          role="listbox"
          aria-label={ariaLabel}
        >
          {enabledOptions.map((option, index) => (
            <div
              key={option.value}
              className={`select-option ${focusedIndex === index ? 'focused' : ''} ${option.value === value ? 'selected' : ''}`}
              role="option"
              aria-selected={option.value === value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      
      {/* Hidden native select für Screen Reader */}
      <div className="select-native-wrapper" aria-hidden="true">
        {nativeSelect}
      </div>
    </div>
  );

  // Für Screen Reader: native select verwenden
  const useNative = typeof window !== 'undefined' && 
    (window.navigator.userAgent.includes('NVDA') || 
     window.navigator.userAgent.includes('JAWS') ||
     'ontouchstart' in window); // Mobile auch native

  return useNative ? nativeSelect : customSelect;
});

Select.displayName = 'Select';

export type { SelectProps, SelectOption };