import React from 'react';

export interface StyleIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

/**
 * STYLE Bespoke Icon System
 * Crafted specifically for STYLE Retail Analytics.
 * Unified geometric principles:
 * - 24x24 optical bounding box
 * - 1.6px uniform hairline stroke weight
 * - Subtle apex/corner radiuses
 * - Stroke-based line art with clean geometric anchors
 * - Luxury couture minimalism
 */

export const IconHome: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 10.5L12 3.5L21 10.5" />
    <path d="M5.5 9.5V20C5.5 20.55 5.95 21 6.5 21H17.5C18.05 21 18.5 20.55 18.5 20V9.5" />
    <path d="M10 21V14.5C10 14.22 10.22 14 10.5 14H13.5C13.78 14 14 14.22 14 14.5V21" />
  </svg>
);

export const IconSales: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4.5C4 3.95 4.45 3.5 5 3.5H19C19.55 3.5 20 3.95 20 4.5V20.5L17.5 19L15 20.5L12 19L9 20.5L6.5 19L4 20.5V4.5Z" />
    <line x1="8" y1="8" x2="16" y2="8" />
    <line x1="8" y1="12" x2="14" y2="12" />
    <line x1="8" y1="15.5" x2="11" y2="15.5" />
  </svg>
);

export const IconBranches: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 6.5C3 5.4 3.9 4.5 5 4.5H19C20.1 4.5 21 5.4 21 6.5V9.5C21 10.33 20.33 11 19.5 11C18.67 11 18 10.33 18 9.5C18 10.33 17.33 11 16.5 11C15.67 11 15 10.33 15 9.5C15 10.33 14.33 11 13.5 11C12.67 11 12 10.33 12 9.5C12 10.33 11.33 11 10.5 11C9.67 11 9 10.33 9 9.5C9 10.33 8.33 11 7.5 11C6.67 11 6 10.33 6 9.5C6 10.33 5.33 11 4.5 11C3.67 11 3 10.33 3 9.5V6.5Z" />
    <path d="M4.5 11V20H19.5V11" />
    <path d="M9.5 20V14.5H14.5V20" />
  </svg>
);

export const IconProducts: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3C10.5 3 9.5 4 9.5 5.2C9.5 6.2 10.5 6.8 12 7.2" />
    <path d="M7 6L3 10L6.5 12.5L8.5 10V20.5C8.5 20.8 8.8 21 9.1 21H14.9C15.2 21 15.5 20.8 15.5 20.5V10L17.5 12.5L21 10L17 6H14L12 8L10 6H7Z" />
  </svg>
);

export const IconInventory: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3L20 7.5L12 12L4 7.5L12 3Z" />
    <path d="M4 7.5V16.5L12 21V12" />
    <path d="M20 7.5V16.5L12 21" />
    <path d="M8 9.8L16 14.2" strokeDasharray="1.5 2" />
  </svg>
);

export const IconStaff: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="7.5" r="4" />
    <path d="M5 20.5C5 17 8 14.5 12 14.5C16 14.5 19 17 19 20.5" />
  </svg>
);

export const IconVault: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3.5" y="4" width="17" height="16" rx="3" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <line x1="12" y1="6" x2="12" y2="7.5" />
    <line x1="12" y1="16.5" x2="12" y2="18" />
    <line x1="6" y1="12" x2="7.5" y2="12" />
    <line x1="16.5" y1="12" x2="18" y2="12" />
  </svg>
);

export const IconExpenses: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2.5" />
    <line x1="8" y1="9" x2="16" y2="9" />
    <line x1="8" y1="13" x2="13" y2="13" />
    <path d="M14 17L17 14M17 14H14.5M17 14V16.5" />
  </svg>
);

export const IconReports: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3.5" y="3.5" width="7.5" height="9" rx="1.5" />
    <rect x="13" y="3.5" width="7.5" height="5" rx="1.5" />
    <rect x="3.5" y="14.5" width="7.5" height="6" rx="1.5" />
    <rect x="13" y="10.5" width="7.5" height="10" rx="1.5" />
  </svg>
);

export const IconSnapshots: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="8.5" />
    <polyline points="12 7.5 12 12 15.5 14" />
    <path d="M12 2V3.5" />
    <path d="M22 12H20.5" />
    <path d="M12 22V20.5" />
    <path d="M2 12H3.5" />
  </svg>
);

export const IconSettings: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const IconBell: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 8.5C18 5.46 15.31 3 12 3C8.69 3 6 5.46 6 8.5C6 15 3.5 17 3.5 17H20.5C20.5 17 18 15 18 8.5Z" />
    <path d="M10.2 20C10.5 20.8 11.2 21.5 12 21.5C12.8 21.5 13.5 20.8 13.8 20" />
  </svg>
);

export const IconSearch: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="20" y1="20" x2="16" y2="16" />
  </svg>
);

export const IconFilter: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3.5 5H20.5L14 12.5V18.5L10 20.5V12.5L3.5 5Z" />
  </svg>
);

export const IconTrendUp: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

export const IconTrendDown: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </svg>
);

export const IconChevronLeft: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.8
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const IconChevronRight: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.8
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const IconChevronDown: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.8
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const IconCalendar: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3.5" y="4.5" width="17" height="16" rx="2.5" />
    <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
    <line x1="8" y1="2.5" x2="8" y2="5.5" />
    <line x1="16" y1="2.5" x2="16" y2="5.5" />
  </svg>
);

export const IconProfit: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="8.5" />
    <path d="M14.5 9.5H10.5C9.67 9.5 9 10.17 9 11C9 11.83 9.67 12.5 10.5 12.5H13.5C14.33 12.5 15 13.17 15 14C15 14.83 14.33 15.5 13.5 15.5H9.5" />
    <line x1="12" y1="7.5" x2="12" y2="9.5" />
    <line x1="12" y1="15.5" x2="12" y2="17.5" />
  </svg>
);

export const IconInvoices: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 3.5H18C18.55 3.5 19 3.95 19 4.5V20.5L16 19L13 20.5L10 19L7 20.5L5 19.5V4.5C5 3.95 5.45 3.5 6 3.5Z" />
    <line x1="8" y1="8" x2="16" y2="8" />
    <line x1="8" y1="11.5" x2="14" y2="11.5" />
  </svg>
);

export const IconReturns: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 14L4 9L9 4" />
    <path d="M4 9H15C17.76 9 20 11.24 20 14C20 16.76 17.76 19 15 19H8" />
  </svg>
);

export const IconMenu: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="16" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

export const IconMoreHorizontal: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="6" cy="12" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const IconClose: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.8
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconCheck: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconCheckCircle: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="8.5" />
    <polyline points="8.5 12 11 14.5 15.5 9.5" />
  </svg>
);

export const IconAlertCircle: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="8.5" />
    <line x1="12" y1="8" x2="12" y2="12.5" />
    <circle cx="12" cy="16" r="0.75" fill="currentColor" />
  </svg>
);

export const IconAlertTriangle: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <circle cx="12" cy="17" r="0.75" fill="currentColor" />
  </svg>
);

export const IconDatabase: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V5" />
    <path d="M4 12V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V12" />
  </svg>
);

export const IconUpload: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export const IconDownload: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const IconRotateCcw: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 2V8H9" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L3 8" />
  </svg>
);

export const IconHardDrive: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="22" y1="12" x2="2" y2="12" />
    <path d="M5.45 5.11L2 12V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V12L18.55 5.11A2 2 0 0 0 16.76 4H7.24A2 2 0 0 0 5.45 5.11Z" />
    <line x1="6" y1="16" x2="6.01" y2="16" strokeWidth={2.5} />
    <line x1="10" y1="16" x2="10.01" y2="16" strokeWidth={2.5} />
  </svg>
);

export const IconFileText: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

export const IconSpreadsheet: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);

export const IconShieldCheck: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22S4 18 4 12V5L12 2L20 5V12C20 18 12 22 12 22Z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export const IconSmartphone: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);

export const IconMonitor: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
    <line x1="8" y1="20.5" x2="16" y2="20.5" />
    <line x1="12" y1="16.5" x2="12" y2="20.5" />
  </svg>
);

export const IconEye: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);

export const IconPercent: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.8
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

export const IconShoppingCart: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M1 1H4.5L7.2 14.5C7.3 15 7.8 15.4 8.3 15.4H18.5C19 15.4 19.5 15 19.6 14.5L21.5 6H5.5" />
  </svg>
);

export const IconBarChart: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

export const IconTag: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20.59 13.41L13.42 20.58A2 2 0 0 1 12 21.17A2 2 0 0 1 10.59 20.58L2 12V2H12L20.59 10.59A2 2 0 0 1 20.59 13.41Z" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
  </svg>
);

export const IconPhone: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92V19.92A2 2 0 0 1 19.82 22C10.9 21.5 3.5 14.1 3 5.18A2 2 0 0 1 5.08 3H8.08A2 2 0 0 1 10.08 4.72L10.98 7.37A2 2 0 0 1 10.53 9.42L9.18 10.77C10.74 13.52 12.98 15.76 15.73 17.32L17.08 15.97A2 2 0 0 1 19.13 15.52L21.78 16.42A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const IconMapPin: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 1 1 21 10Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconAward: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="6" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export const IconBanknote: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
    <line x1="6" y1="12" x2="6.01" y2="12" strokeWidth={2.5} />
    <line x1="18" y1="12" x2="18.01" y2="12" strokeWidth={2.5} />
  </svg>
);

export const IconCreditCard: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="5" width="20" height="14" rx="2.5" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="6" y1="15" x2="9" y2="15" />
  </svg>
);

export const IconLightbulb: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 18H15" />
    <path d="M10 22H14" />
    <path d="M12 2A7 7 0 0 0 5 9C5 12.38 7.15 15.21 9 16.5V18H15V16.5C16.85 15.21 19 12.38 19 9A7 7 0 0 0 12 2Z" />
  </svg>
);

export const IconDroplets: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2.69L17.66 8.35A8 8 0 1 1 6.34 8.35L12 2.69Z" />
  </svg>
);

export const IconWrench: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.7 6.3A1 1 0 0 0 14 5H9.5A4.5 4.5 0 0 0 5 9.5V11A1 1 0 0 0 6 12H7V14A1 1 0 0 0 8 15H10A1 1 0 0 0 11 14V13H13A1 1 0 0 0 14 12V9.5A4.5 4.5 0 0 0 14.7 6.3Z" />
    <line x1="12" y1="15" x2="20" y2="23" />
  </svg>
);

export const IconLayers: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export const IconZap: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const IconPrinter: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4A2 2 0 0 1 2 16V11A2 2 0 0 1 4 9H20A2 2 0 0 1 22 11V16A2 2 0 0 1 20 18H18" />
    <rect x="6" y="14" width="12" height="8" rx="1.5" />
  </svg>
);

export const IconMoon: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79Z" />
  </svg>
);

export const IconSun: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const IconHelpCircle: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="8.5" />
    <path d="M9.09 9A3 3 0 0 1 15 10C15 12 12 12.5 12 14" />
    <circle cx="12" cy="17" r="0.75" fill="currentColor" />
  </svg>
);

export const IconLogOut: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H9" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export const IconClock: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="8.5" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const IconXCircle: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="8.5" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

export const IconSliders: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

export const IconArrowLeft: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.8
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const IconArrowRight: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.8
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const IconArrowUpRight: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.8
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const IconUserCheck: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21V19A4 4 0 0 0 12 15H7A4 4 0 0 0 3 19V21" />
    <circle cx="9.5" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

export const IconBuilding: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="9" y1="6" x2="9.01" y2="6" strokeWidth={2.5} />
    <line x1="15" y1="6" x2="15.01" y2="6" strokeWidth={2.5} />
    <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth={2.5} />
    <line x1="15" y1="10" x2="15.01" y2="10" strokeWidth={2.5} />
    <line x1="9" y1="14" x2="9.01" y2="14" strokeWidth={2.5} />
    <line x1="15" y1="14" x2="15.01" y2="14" strokeWidth={2.5} />
    <path d="M10 22V18H14V22" />
  </svg>
);

export const IconBox: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 16V8A2 2 0 0 0 20 6.27L13 2.27A2 2 0 0 0 11 2.27L4 6.27A2 2 0 0 0 3 8V16A2 2 0 0 0 4 17.73L11 21.73A2 2 0 0 0 13 21.73L20 17.73A2 2 0 0 0 21 16Z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

export const IconFileBarChart: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <line x1="16" y1="18" x2="16" y2="15" />
    <line x1="8" y1="18" x2="8" y2="16" />
  </svg>
);

export const IconServer: React.FC<StyleIconProps> = ({
  className = 'w-5 h-5',
  size = 20,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth={2.5} />
    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth={2.5} />
  </svg>
);

export const IconFileSpreadsheet = IconSpreadsheet;

export const IconArrowDownRight: React.FC<StyleIconProps> = ({
  className = 'w-4 h-4',
  size = 16,
  strokeWidth = 1.6
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="7" y1="7" x2="17" y2="17" />
    <polyline points="17 7 17 17 7 17" />
  </svg>
);

