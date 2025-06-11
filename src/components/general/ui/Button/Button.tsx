/**
 * Button Component
 * 
 * Generelle Button Komponente für alle Features.
 * Unterstützt Toggle (play/pause) und State (on/off) Varianten.
 * 
 * @author WCAG Player Team
 * @version 2.0.0
 */

import React, { forwardRef } from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'toggle' | 'state' | 'dropdown';
  size?: number;
  isActive?: boolean;
  isLoading?: boolean;
  hideInFullscreen?: boolean;
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaHaspopup?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  onClick: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'toggle', // Changed default
  size = 28, // Changed to number
  isActive = false,
  isLoading = false,
  hideInFullscreen = false,
  icon,
  iconActive,
  ariaLabel,
  ariaExpanded,
  ariaHaspopup,
  className = '',
  disabled,
  onClick,
  ...props
}, ref) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!disabled) {
      onClick();
    }
  };
  const classes = [
    'button',
    `button--${variant}`,
    isActive && 'button--active',
    isLoading && 'button--loading',
    disabled && 'button--disabled',
    className
  ].filter(Boolean).join(' ');

  // Icon Logic - toggle buttons change icon when active
  const currentIcon = (variant === 'toggle' && isActive && iconActive) ? iconActive : icon;

  return (
    <button
      onClick={handleClick}
      ref={ref}
      className={classes}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      style={{ '--button-size': `${size}px` } as React.CSSProperties}
      {...props}
    >
      {isLoading && (
        <span className="button__loading-spinner" />
      )}
      
      {/* Always just the icon */}
      {currentIcon && (
        <span className="button__icon">
          {currentIcon}
        </span>
      )}
    </button>
  );
});

Button.displayName = 'Button';