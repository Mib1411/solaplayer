import React from 'react';

export const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <polygon points="6,4 20,12 6,20" />
  </svg>
);

export const PauseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

export const MuteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <polygon points="6,8 10,8 14,4 14,20 10,16 6,16" />
    <line x1="18" y1="8" x2="22" y2="16" stroke="currentColor" strokeWidth="2" />
    <line x1="22" y1="8" x2="18" y2="16" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const UnmuteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <polygon points="6,8 10,8 14,4 14,20 10,16 6,16" />
    <path d="M17 9a4 4 0 0 1 0 6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const TranscriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <rect x="7" y="8" width="10" height="2" />
    <rect x="7" y="12" width="7" height="2" />
  </svg>
);

export const SpeedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const CCIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <text x="6" y="17" fontSize="8" fontWeight="bold" fill="#fff">CC</text>
  </svg>
);

export const FullscreenIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zm6 10v6h-6v-2h4v-4h2zm-10 6H4v-6h2v4h4v2z" />
  </svg>
);

export const PiPIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <rect x="13" y="13" width="7" height="5" rx="1" fill="#fff" />
  </svg>
);

export const VolumeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <polygon points="6,8 10,8 14,4 14,20 10,16 6,16" />
    <path d="M16 8a4 4 0 0 1 0 8" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const AudioDescIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 4a8 8 0 1 0 0 16a8 8 0 1 0 0-16zm0 2a6 6 0 1 1 0 12a6 6 0 1 1 0-12zm-1 3a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 1 0 0 3z" />
    <path d="M16.5 8.5c.5.5.5 1.5 0 2" stroke="#1976d2" strokeWidth="1.5" fill="none" />
  </svg>
);

export const ChaptersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...props}>
    <rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="2" />
    <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="2" />
    <line x1="8" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="2" />
  </svg>
); 