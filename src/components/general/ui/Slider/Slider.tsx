/**
 * Slider Component
 * 
 * Generelle Slider Komponente für Progress, Volume, etc.
 * Unterstützt horizontale und vertikale Orientierung.
 * 
 * @author WCAG Player Team
 * @version 2.0.0
 */

import React from 'react';
import './Slider.css';

interface SliderProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  orientation: 'horizontal' | 'vertical';
  onChange: (value: number) => void;
  ariaLabel: string;
  disabled?: boolean;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  min,
  max,
  step = 1,
  orientation,
  onChange,
  ariaLabel,
  disabled = false,
  className = '',
  onKeyDown
}) => {
  const baseClass = 'slider';
  const orientationClass = `slider--${orientation}`;
  const classes = `${baseClass} ${orientationClass} ${className}`.trim();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentValue = Number((e.target as HTMLInputElement).value);
    let newValue = currentValue;

    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowRight':
        newValue = Math.min(max, currentValue + step);
        break;
      case 'ArrowDown':
      case 'ArrowLeft':
        newValue = Math.max(min, currentValue - step);
        break;
      case 'Home':
        newValue = min;
        break;
      case 'End':
        newValue = max;
        break;
      default:
        onKeyDown?.(e);
        return;
    }

    if (newValue !== currentValue) {
      e.preventDefault();
      onChange(newValue);
    }
  };

  return (
    <input
      type="range"
      className={classes}
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      disabled={disabled}
    />
  );
};