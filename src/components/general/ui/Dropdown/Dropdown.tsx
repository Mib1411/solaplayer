/**
 * Dropdown Component
 * 
 * Generelle Dropdown Komponente für Settings, Quality, Speed, etc.
 * WCAG-konform mit Keyboard Navigation.
 * 
 * @author WCAG Player Team
 * @version 2.0.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../Button/Button';
import './Dropdown.css';

export interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode; // ✅ Icon von außen!
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Auswählen...',
  ariaLabel,
  disabled = false,
  className = '',
  icon // ✅ Icon wird übergeben, nicht importiert!
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find(option => option.value === value);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setFocusedIndex(-1);
    }
  };

  const handleOptionSelect = (optionValue: string | number) => {
    onChange(optionValue);
    setIsOpen(false);
    setFocusedIndex(-1);
    buttonRef.current?.focus();
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const classes = `dropdown ${isOpen ? 'dropdown--open' : ''} ${className}`.trim();

  return (
    <div ref={dropdownRef} className={classes}>
      <Button
        ref={buttonRef}
        onClick={handleToggle}
        ariaLabel={ariaLabel}
        disabled={disabled}
        variant="dropdown"
        isActive={isOpen}
        icon={icon} // ✅ Icon von außen
        className="dropdown__button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {selectedOption?.label || placeholder}
      </Button>

      {isOpen && (
        <ul
          ref={listRef}
          className="dropdown__list"
          role="listbox"
          aria-label={ariaLabel}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              className={`dropdown__option ${
                option.value === value ? 'dropdown__option--selected' : ''
              } ${
                index === focusedIndex ? 'dropdown__option--focused' : ''
              } ${
                option.disabled ? 'dropdown__option--disabled' : ''
              }`}
              role="option"
              aria-selected={option.value === value}
              onClick={() => !option.disabled && handleOptionSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};