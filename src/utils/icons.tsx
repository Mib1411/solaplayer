import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  quality?: string; // Nur für QualityIcon
  speed?: string; // Nur für SpeedIcon
}

const ICON_SIZE = 22;
// Player Control Icons
export const PlayIcon: React.FC<IconProps> = ({ size =  ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 5v14l11-7z"/>
  </svg>
);

export const PauseIcon: React.FC<IconProps> = ({ size =  ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
);

export const ReturnIcon: React.FC<IconProps> = ({ size =  ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    {/* Restart/Return Symbol mit Curved Arrow */}
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
  </svg>
);
  

export const SkipBackIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    {/* Curved Arrow zurück */}
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
    {/* 10 Sekunden Text */}
    <text x="12" y="16" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="bold">10</text>
  </svg>
);

export const SkipForwardIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    {/* Curved Arrow vorwärts */}
    <path d="M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2z"/>
    {/* 10 Sekunden Text */}
    <text x="12" y="16" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="bold">10</text>
  </svg>
);

export const SpeedIcon: React.FC<IconProps> = ({ size =  ICON_SIZE, className = '' }) => (
  <svg  width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M10,8v8l6-4L10,8L10,8z M6.3,5L5.7,4.2C7.2,3,9,2.2,11,2l0.1,1C9.3,3.2,7.7,3.9,6.3,5z            M5,6.3L4.2,5.7C3,7.2,2.2,9,2,11 l1,.1C3.2,9.3,3.9,7.7,5,6.3z            M5,17.7c-1.1-1.4-1.8-3.1-2-4.8L2,13c0.2,2,1,3.8,2.2,5.4L5,17.7z            M11.1,21c-1.8-0.2-3.4-0.9-4.8-2 l-0.6,.8C7.2,21,9,21.8,11,22L11.1,21z            M22,12c0-5.2-3.9-9.4-9-10l-0.1,1c4.6,.5,8.1,4.3,8.1,9s-3.5,8.5-8.1,9l0.1,1 C18.2,21.5,22,17.2,22,12z">
    </path>
  </svg> 
);

export const ChaptersIcon: React.FC<IconProps> = ({ size =  ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
  </svg>
);
// AudioDescIcon im gleichen Stil wie deine anderen Icons
export const AudioDescIcon: React.FC<IconProps> = ({ size =  ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="-10 -10 540 540"  fill="currentColor" className={className}>
   <path d="M162.925 238.709l8.822 30.655h-25.606l9.041-30.652c1.277-4.421 2.651-9.994 3.872-15.245 1.22 5.251 2.594 10.823 3.871 15.242zm166.474-32.099h-14.523v98.781h14.523c29.776 0 46.175-17.678 46.175-49.776 0-32.239-17.49-49.005-46.175-49.005zM512 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48zM245.459 336.139l-57.097-168A12.001 12.001 0 0 0 177 160h-35.894a12.001 12.001 0 0 0-11.362 8.139l-57.097 168C70.003 343.922 75.789 352 84.009 352h29.133a12 12 0 0 0 11.535-8.693l8.574-29.906h51.367l8.793 29.977A12 12 0 0 0 204.926 352h29.172c8.22 0 14.006-8.078 11.361-15.861zm184.701-80.525c0-58.977-37.919-95.614-98.96-95.614h-57.366c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12H331.2c61.041 0 98.96-36.933 98.96-96.386z"></path>
  </svg>
);

// Quality Icons mit Video Symbol + Text
export const QualityIcon: React.FC<IconProps> = ({  size= ICON_SIZE, className = ''}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    {/* Video Symbol */}
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
    {/* Quality Text */}
  </svg>
);



export const InfoIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </svg>
);

export const PiPIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
  </svg>
);

export const ExitPiPIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
    <path d="M18 8l-1.41 1.41L15.17 8H17V6h-4v4h2v-1.83L16.41 9.41 18 8z"/>
  </svg>
);

export const LinkIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
  </svg>
);

export const TranscriptIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
);

export const UnmuteIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
  </svg>
);

export const MuteIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
  </svg>
);

export const CaptionsIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"/>
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
);

export const FullscreenIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
  </svg>
);

export const ExitFullscreenIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
  </svg>
);

// Dynamische Volume Icons - 0 bis 4 Schallwellen
export const VolumeOffIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
  </svg>
);

export const VolumeLowIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
    <path d="M18.5 12c0-.79-.32-1.47-.83-2L16.84 11c.19.28.3.6.3.94s-.11.66-.3.94l.83.83c.51-.53.83-1.21.83-2z"/>
  </svg>
);

export const VolumeMediumIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
    <path d="M18.5 12c0-.79-.32-1.47-.83-2L16.84 11c.19.28.3.6.3.94s-.11.66-.3.94l.83.83c.51-.53.83-1.21.83-2z"/>
    <path d="M20 12c0-1.77-.77-3.37-2-4.46v8.92C19.23 15.37 20 13.77 20 12z"/>
  </svg>
);

export const VolumeHighIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
    <path d="M18.5 12c0-.79-.32-1.47-.83-2L16.84 11c.19.28.3.6.3.94s-.11.66-.3.94l.83.83c.51-.53.83-1.21.83-2z"/>
    <path d="M20 12c0-1.77-.77-3.37-2-4.46v8.92C19.23 15.37 20 13.77 20 12z"/>
    <path d="M21.5 12c0-2.89-1.45-5.42-3.65-6.95v13.9C20.05 17.42 21.5 14.89 21.5 12z"/>
  </svg>
);


export const PreviousChapterIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/>
  </svg>
);

export const NextChapterIcon: React.FC<IconProps> = ({ size = ICON_SIZE, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6 18l8.5-6L6 6v12zm10-12v12h2V6h-2z"/>
  </svg>
);