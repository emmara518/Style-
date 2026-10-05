import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  color?: string;
}

/**
 * STYLE Unified Bespoke Iconography Library (Icons.tsx)
 * 
 * Design System Specifications:
 * - ViewBox: 0 0 24 24 (strict square proportion)
 * - Stroke Weight: 1.6px uniform hairline stroke
 * - Corner Radius: Consistent geometric bevels and curved vertices
 * - Stroke Endings: strokeLinecap="round" strokeLinejoin="round"
 * - Fill: none (pure stroke-based bespoke vector architecture)
 */

export const Home: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <path d="M3 10.5L12 3.5L21 10.5" />
    <path d="M5.5 9.5V20C5.5 20.55 5.95 21 6.5 21H17.5C18.05 21 18.5 20.55 18.5 20V9.5" />
    <path d="M10 21V14.5C10 14.22 10.22 14 10.5 14H13.5C13.78 14 14 14.22 14 14.5V21" />
  </svg>
);

export const Sales: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <path d="M4 4.5C4 3.95 4.45 3.5 5 3.5H19C19.55 3.5 20 3.95 20 4.5V20.5L17.5 19L15 20.5L12 19L9 20.5L6.5 19L4 20.5V4.5Z" />
    <line x1="8" y1="8" x2="16" y2="8" />
    <line x1="8" y1="12" x2="14" y2="12" />
    <line x1="8" y1="15.5" x2="11" y2="15.5" />
  </svg>
);

export const Branch: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <path d="M3 9.5L12 4.5L21 9.5V10.5H3V9.5Z" />
    <rect x="4.5" y="10.5" width="2.5" height="7.5" rx="0.5" />
    <rect x="10.75" y="10.5" width="2.5" height="7.5" rx="0.5" />
    <rect x="17" y="10.5" width="2.5" height="7.5" rx="0.5" />
    <path d="M2.5 19.5H21.5" />
    <path d="M2 21.5H22" />
  </svg>
);
export const Branches = Branch;

export const Products: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <path d="M7 4.5L3 8.5L5.5 10.5L7 9V20.5C7 21.05 7.45 21.5 8 21.5H16C16.55 21.5 17 21.05 17 20.5V9L18.5 10.5L21 8.5L17 4.5C16.5 3.5 14.5 3 12 3C9.5 3 7.5 3.5 7 4.5Z" />
    <path d="M9.5 3.2C10 5.2 11 6.5 12 6.5C13 6.5 14 5.2 14.5 3.2" />
    <line x1="12" y1="10" x2="12" y2="10.01" strokeWidth={2.5} />
    <line x1="12" y1="14" x2="12" y2="14.01" strokeWidth={2.5} />
  </svg>
);
export const Product = Products;

export const Inventory: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <path d="M12 2.5L21 7.2V16.8L12 21.5L3 16.8V7.2L12 2.5Z" />
    <path d="M12 21.5V11.8" />
    <path d="M20.5 7.5L12 11.8L3.5 7.5" />
    <path d="M7.8 9.8L16.2 5.5" />
  </svg>
);

export const Staff: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <circle cx="9" cy="8" r="4" />
    <path d="M2 20.5C2 17.5 5 15 9 15C13 15 16 17.5 16 20.5" />
    <path d="M16 5.5C17.2 6.2 18 7.5 18 9C18 10.5 17.2 11.8 16 12.5" />
    <path d="M18.5 15.5C20.5 16.5 21.5 18.2 21.5 20.5" />
  </svg>
);
export const Employees = Staff;
export const Users = Staff;

export const Vault: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <rect x="3" y="3.5" width="18" height="17" rx="3" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <line x1="12" y1="6" x2="12" y2="8.5" />
    <line x1="12" y1="15.5" x2="12" y2="18" />
    <line x1="6" y1="12" x2="8.5" y2="12" />
    <line x1="15.5" y1="12" x2="18" y2="12" />
  </svg>
);

export const Expenses: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <rect x="2" y="5" width="20" height="14" rx="2.5" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <circle cx="6.5" cy="14.5" r="1" fill="currentColor" />
    <line x1="11" y1="14.5" x2="17" y2="14.5" />
  </svg>
);

export const Reports: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <path d="M14 2.5H6C4.9 2.5 4 3.4 4 4.5V20.5C4 21.6 4.9 22.5 6 22.5H18C19.1 22.5 20 21.6 20 20.5V8.5L14 2.5Z" />
    <path d="M14 2.5V8.5H20" />
    <line x1="8" y1="17.5" x2="8" y2="14" />
    <line x1="12" y1="17.5" x2="12" y2="11.5" />
    <line x1="16" y1="17.5" x2="16" y2="13" />
  </svg>
);

export const Snapshots: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <path d="M3.5 12C3.5 7.3 7.3 3.5 12 3.5C16.7 3.5 20.5 7.3 20.5 12C20.5 16.7 16.7 20.5 12 20.5C8.5 20.5 5.5 18.4 4.2 15.3" />
    <polyline points="3.5 6.5 3.5 12 9 12" />
    <polyline points="12 7.5 12 12.5 15.5 14" />
  </svg>
);

export const Settings: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const Search: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="16.2" y1="16.2" x2="21" y2="21" strokeWidth={strokeWidth} />
  </svg>
);

export const Bell: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <path d="M18 8A6 6 0 0 0 6 8C6 14 3 17 3 17H21S18 14 18 8" />
    <path d="M10.3 20.5C10.7 21.2 11.3 21.5 12 21.5C12.7 21.5 13.3 21.2 13.7 20.5" />
  </svg>
);

export const Filter: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

export const Calendar: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.6,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const TrendingUp: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
export const TrendUp = TrendingUp;

export const TrendingDown: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
);
export const TrendDown = TrendingDown;

export const ArrowUpRight: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const ArrowDownRight: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <line x1="7" y1="7" x2="17" y2="17" />
    <polyline points="17 7 17 17 7 17" />
  </svg>
);

export const ArrowLeft: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const ChevronLeft: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ChevronRight: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const ChevronDown: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const ChevronUp: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export const Check: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 2,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const CheckCircle: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const Close: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.8,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
export const X = Close;

export const AlertTriangle: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth={2.5} />
  </svg>
);

export const AlertCircle: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2.5} />
  </svg>
);

export const Percent: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

export const ShoppingCart: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export const BarChart: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

export const RotateCcw: React.FC<IconProps> = ({
  size = 16,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M1 4v6h6" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </svg>
);
export const RefreshCw = RotateCcw;

export const FileText: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export const Spreadsheet: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);
export const FileSpreadsheet = Spreadsheet;

export const Printer: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4C2.9 18 2 17.1 2 16V11C2 9.9 2.9 9 4 9H20C21.1 9 22 9.9 22 11V16C22 17.1 21.1 18 20 18H18" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

export const Download: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const Upload: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export const Database: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export const Server: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth={2.5} />
    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth={2.5} />
  </svg>
);

export const ShieldCheck: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export const Eye: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Sun: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
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

export const Moon: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const HelpCircle: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth={2.5} />
  </svg>
);

export const LogOut: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export const Building: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="6" x2="9.01" y2="6" strokeWidth={2.5} />
    <line x1="15" y1="6" x2="15.01" y2="6" strokeWidth={2.5} />
    <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth={2.5} />
    <line x1="15" y1="10" x2="15.01" y2="10" strokeWidth={2.5} />
    <line x1="9" y1="14" x2="9.01" y2="14" strokeWidth={2.5} />
    <line x1="15" y1="14" x2="15.01" y2="14" strokeWidth={2.5} />
    <line x1="9" y1="18" x2="15" y2="18" />
  </svg>
);
export const Building2 = Building;

export const Smartphone: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={2.5} />
  </svg>
);

export const Monitor: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export const Menu: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.8,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="15" y2="17" />
  </svg>
);

export const MoreHorizontal: React.FC<IconProps> = ({
  size = 20,
  strokeWidth = 1.8,
  className = 'w-5 h-5',
  ...props
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
    {...props}
  >
    <circle cx="6" cy="12" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const Lightbulb: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
  </svg>
);

export const Droplets: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

export const Wrench: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const Zap: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const CreditCard: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 1.6,
  className = 'w-4 h-4',
  ...props
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
    {...props}
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

export const Receipt: React.FC<IconProps> = Sales;
export const Box: React.FC<IconProps> = Products;
export const Package: React.FC<IconProps> = Inventory;
export const Store: React.FC<IconProps> = Branch;
export const WalletCards: React.FC<IconProps> = Vault;

/* Aliases for Icon-prefixed naming convention */
export const IconHome = Home;
export const IconSales = Sales;
export const IconBranches = Branch;
export const IconBranch = Branch;
export const IconProducts = Products;
export const IconProduct = Products;
export const IconInventory = Inventory;
export const IconStaff = Staff;
export const IconEmployees = Staff;
export const IconVault = Vault;
export const IconExpenses = Expenses;
export const IconReports = Reports;
export const IconSnapshots = Snapshots;
export const IconSettings = Settings;
export const IconSearch = Search;
export const IconBell = Bell;
export const IconFilter = Filter;
export const IconCalendar = Calendar;
export const IconTrendingUp = TrendingUp;
export const IconTrendUp = TrendingUp;
export const IconTrendingDown = TrendingDown;
export const IconTrendDown = TrendingDown;
export const IconArrowUpRight = ArrowUpRight;
export const IconArrowDownRight = ArrowDownRight;
export const IconArrowLeft = ArrowLeft;
export const IconArrowRight = ArrowRight;
export const IconChevronLeft = ChevronLeft;
export const IconChevronRight = ChevronRight;
export const IconChevronDown = ChevronDown;
export const IconChevronUp = ChevronUp;
export const IconCheck = Check;
export const IconCheckCircle = CheckCircle;
export const IconClose = Close;
export const IconAlertTriangle = AlertTriangle;
export const IconAlertCircle = AlertCircle;
export const IconPercent = Percent;
export const IconShoppingCart = ShoppingCart;
export const IconBarChart = BarChart;
export const IconRotateCcw = RotateCcw;
export const IconFileText = FileText;
export const IconSpreadsheet = Spreadsheet;
export const IconFileSpreadsheet = Spreadsheet;
export const IconPrinter = Printer;
export const IconDownload = Download;
export const IconUpload = Upload;
export const IconDatabase = Database;
export const IconServer = Server;
export const IconShieldCheck = ShieldCheck;
export const IconEye = Eye;
export const IconSun = Sun;
export const IconMoon = Moon;
export const IconHelpCircle = HelpCircle;
export const IconLogOut = LogOut;
export const IconBuilding = Building;
export const IconSmartphone = Smartphone;
export const IconMonitor = Monitor;
export const IconMenu = Menu;
export const IconMoreHorizontal = MoreHorizontal;
export const IconLightbulb = Lightbulb;
export const IconDroplets = Droplets;
export const IconWrench = Wrench;
export const IconZap = Zap;
export const IconCreditCard = CreditCard;
export const IconBox = Box;
