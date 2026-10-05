import React from 'react';
import {
  IconArrowUpRight,
  IconArrowDownRight,
  IconTrendUp,
  IconTrendDown
} from '../icons/Icons';

export interface KPICardTrend {
  /** Numerical value or pre-formatted string (e.g., 14.2 or "%14.2") */
  value?: number | string;
  /** Explicit trend direction */
  direction?: 'up' | 'down' | 'neutral';
  /** Optional contextual comparison label (e.g., "مقارنة بالفترة السابقة") */
  label?: string;
  /** Invert color semantics (e.g., for returns/expenses where up is negative) */
  invertColors?: boolean;
}

export interface KPICardProps {
  /** Descriptive metric label (e.g., "صافي الربح", "عدد الفواتير") */
  label: string;
  /** Primary metric value (e.g., "148,250" or 148250) */
  value: number | string;
  /** Optional currency prefix/badge (e.g., "EGP") */
  currency?: string;
  /** Optional unit suffix (e.g., "طلب", "قطعة", "%") */
  unit?: string;
  /** Trend analysis information */
  trend?: KPICardTrend;
  /** Optional custom icon node */
  icon?: React.ReactNode;
  /** Optional background styling for the icon badge */
  iconBg?: string;
  /** Optional secondary footer note or badge */
  secondaryDetail?: React.ReactNode;
  /** Optional active/interactive state styling */
  onClick?: () => void;
  /** Extra class names for grid/flex sizing (e.g. for swipeable mobile container) */
  className?: string;
  /** Visual variant: default minimal white, subtle tint, or dark luxury hero */
  variant?: 'default' | 'gold' | 'dark';
}

/**
 * STYLE KPICard Component
 * 
 * Follows the STYLE Design Language:
 * - Luxury minimalism with metric value as the bold primary visual anchor
 * - Subtle, high-legibility trend indicator with optical alignment
 * - Refined slate and gold palette with soft border radius
 * - Engineered for seamless 2x2 / 4-col grids and swipeable mobile ribbons
 */
export const KPICard: React.FC<KPICardProps> = ({
  label,
  value,
  currency,
  unit,
  trend,
  icon,
  iconBg = 'bg-amber-50 text-[#b8912d]',
  secondaryDetail,
  onClick,
  className = '',
  variant = 'default'
}) => {
  // Format numeric values if passed as raw numbers
  const formattedValue =
    typeof value === 'number' ? value.toLocaleString() : value;

  // Determine trend direction and color logic
  let trendDirection = trend?.direction;
  let trendDisplayValue = trend?.value;

  if (typeof trend?.value === 'number') {
    if (!trendDirection) {
      trendDirection = trend.value > 0 ? 'up' : trend.value < 0 ? 'down' : 'neutral';
    }
    trendDisplayValue = `%${Math.abs(trend.value)}`;
  } else if (typeof trend?.value === 'string' && !trendDirection) {
    if (trend.value.includes('+') || trend.value.includes('↑')) trendDirection = 'up';
    else if (trend.value.includes('-') || trend.value.includes('↓')) trendDirection = 'down';
    else trendDirection = 'neutral';
  }

  const isUp = trendDirection === 'up';
  const isDown = trendDirection === 'down';
  const isNeutral = !isUp && !isDown;

  const isPositive = trend?.invertColors ? isDown : isUp;
  const isNegative = trend?.invertColors ? isUp : isDown;

  const trendColorClass = isPositive
    ? 'text-emerald-600'
    : isNegative
    ? 'text-rose-500'
    : 'text-slate-400';

  // Variant themes
  const variantStyles = {
    default:
      'bg-white text-slate-900 border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]',
    gold:
      'bg-[#fdfbf7] text-slate-900 border-amber-200/80 shadow-[0_1px_3px_rgba(184,145,45,0.05)]',
    dark:
      'bg-neutral-900 text-white border-neutral-800 shadow-md'
  };

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`
        relative rounded-2xl p-3.5 sm:p-4 border transition-all duration-150 flex flex-col justify-between
        ${variantStyles[variant]}
        ${onClick ? 'cursor-pointer hover:border-slate-300 hover:shadow-sm active:scale-[0.99]' : ''}
        ${className}
      `}
    >
      {/* Top Header: Label & Optional Icon */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <span
          className={`text-[11px] sm:text-xs font-medium tracking-tight line-clamp-1 ${
            variant === 'dark' ? 'text-neutral-400' : 'text-slate-500'
          }`}
        >
          {label}
        </span>

        {icon && (
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform ${iconBg}`}
          >
            {icon}
          </div>
        )}
      </div>

      {/* Primary Value Anchor */}
      <div className="flex items-baseline gap-1 my-0.5">
        {currency && (
          <span
            className={`text-[10px] sm:text-xs font-semibold tracking-wider ${
              variant === 'dark' ? 'text-neutral-400' : 'text-slate-400'
            }`}
          >
            {currency}
          </span>
        )}
        <span
          className={`text-xl sm:text-2xl font-bold tracking-tight font-sans tabular-nums leading-none ${
            variant === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          {formattedValue}
        </span>
        {unit && (
          <span
            className={`text-[11px] font-medium mr-0.5 ${
              variant === 'dark' ? 'text-neutral-400' : 'text-slate-400'
            }`}
          >
            {unit}
          </span>
        )}
      </div>

      {/* Bottom Row: Subtle Trend Indicator & Contextual Label / Detail */}
      {(trend || secondaryDetail) && (
        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-100/80 dark:border-neutral-800 text-[11px] gap-1.5">
          {trend && (
            <div className={`flex items-center gap-1 font-semibold tabular-nums shrink-0 ${trendColorClass}`}>
              {isUp && <IconArrowUpRight className="w-3.5 h-3.5 shrink-0" />}
              {isDown && <IconArrowDownRight className="w-3.5 h-3.5 shrink-0" />}
              <span>{trendDisplayValue}</span>
            </div>
          )}

          {trend?.label && !secondaryDetail && (
            <span
              className={`text-[10px] truncate ${
                variant === 'dark' ? 'text-neutral-500' : 'text-slate-400'
              }`}
            >
              {trend.label}
            </span>
          )}

          {secondaryDetail && (
            <div className="text-[10px] text-slate-400 truncate text-left">
              {secondaryDetail}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KPICard;
