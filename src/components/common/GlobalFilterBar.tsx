import React, { useState } from 'react';
import {
  IconCalendar,
  IconChevronDown,
  IconBuilding,
  IconCreditCard,
  IconRotateCcw,
  IconCheck
} from '../icons/StyleIcons';
import { useStore } from '../../store/useStore';
import { DateRangePreset } from '../../types';

export const GlobalFilterBar: React.FC = () => {
  const {
    filters,
    setDateRange,
    setSelectedBranch,
    setSelectedPaymentMethod,
    backupData
  } = useStore();

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const dateLabels: { id: DateRangePreset; label: string }[] = [
    { id: 'today', label: 'اليوم (2 أكتوبر 2026)' },
    { id: 'yesterday', label: 'أمس (1 أكتوبر 2026)' },
    { id: '7days', label: 'آخر 7 أيام (أسبوعي)' },
    { id: '30days', label: 'آخر 30 يوماً (شهري)' },
    { id: 'thisMonth', label: 'هذا الشهر (أكتوبر)' },
    { id: 'lastMonth', label: 'الشهر السابق (سبتمبر)' }
  ];

  const paymentLabels: { id: string; label: string }[] = [
    { id: 'all', label: 'جميع طرق الدفع' },
    { id: 'cash', label: 'كاش فقط' },
    { id: 'visa', label: 'فيزا وكروت' },
    { id: 'wallet', label: 'محافظ إلكترونية' }
  ];

  const activeDateLabel =
    dateLabels.find((d) => d.id === filters.dateRange)?.label || 'اليوم (2 أكتوبر 2026)';

  const activeBranchLabel =
    filters.branchId === 'all'
      ? 'جميع الفروع (4)'
      : backupData.branches.find((b) => b.id === filters.branchId)?.name || 'جميع الفروع';

  const activePaymentLabel =
    paymentLabels.find((p) => p.id === filters.paymentMethod)?.label || 'طرق الدفع';

  const hasActiveFilters = filters.branchId !== 'all' || filters.paymentMethod !== 'all' || filters.dateRange !== 'today';

  const resetFilters = () => {
    setDateRange('today');
    setSelectedBranch('all');
    setSelectedPaymentMethod('all');
  };

  return (
    <div className="bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] mb-3 flex flex-wrap items-center gap-2">
      {/* 1. Date Range Dropdown */}
      <div className="relative flex-1 min-w-[170px]">
        <button
          onClick={() => {
            setIsDateOpen(!isDateOpen);
            setIsBranchOpen(false);
            setIsPaymentOpen(false);
          }}
          className="w-full flex items-center justify-between px-3 py-1.5 sm:py-2 bg-slate-50/80 hover:bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 transition-colors"
        >
          <div className="flex items-center gap-2 truncate">
            <IconCalendar className="w-3.5 h-3.5 text-[#b8912d] shrink-0" />
            <span className="truncate">{activeDateLabel}</span>
          </div>
          <IconChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${isDateOpen ? 'rotate-180' : ''}`} />
        </button>

        {isDateOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsDateOpen(false)} />
            <div className="absolute right-0 top-full mt-1.5 w-64 bg-white rounded-xl border border-slate-200 shadow-xl z-50 py-1 overflow-hidden animate-in fade-in zoom-in-95">
              <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                فترة التحليل المالي والبيعي
              </div>
              {dateLabels.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    setDateRange(d.id);
                    setIsDateOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-right text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className={filters.dateRange === d.id ? 'font-bold text-[#b8912d]' : ''}>
                    {d.label}
                  </span>
                  {filters.dateRange === d.id && <IconCheck className="w-3.5 h-3.5 text-[#b8912d]" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 2. Branch Dropdown */}
      <div className="relative flex-1 min-w-[140px]">
        <button
          onClick={() => {
            setIsBranchOpen(!isBranchOpen);
            setIsDateOpen(false);
            setIsPaymentOpen(false);
          }}
          className="w-full flex items-center justify-between px-3 py-1.5 sm:py-2 bg-slate-50/80 hover:bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 transition-colors"
        >
          <div className="flex items-center gap-2 truncate">
            <IconBuilding className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="truncate">{activeBranchLabel}</span>
          </div>
          <IconChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${isBranchOpen ? 'rotate-180' : ''}`} />
        </button>

        {isBranchOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsBranchOpen(false)} />
            <div className="absolute right-0 top-full mt-1.5 w-52 bg-white rounded-xl border border-slate-200 shadow-xl z-50 py-1 overflow-hidden animate-in fade-in zoom-in-95">
              <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                تصفية الفرع
              </div>
              <button
                onClick={() => {
                  setSelectedBranch('all');
                  setIsBranchOpen(false);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-right text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <span className={filters.branchId === 'all' ? 'font-bold text-[#b8912d]' : ''}>
                  جميع الفروع (4 فروع)
                </span>
                {filters.branchId === 'all' && <IconCheck className="w-3.5 h-3.5 text-[#b8912d]" />}
              </button>
              {backupData.branches.map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    setSelectedBranch(b.id);
                    setIsBranchOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-right text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className={filters.branchId === b.id ? 'font-bold text-[#b8912d]' : ''}>
                    {b.name}
                  </span>
                  {filters.branchId === b.id && <IconCheck className="w-3.5 h-3.5 text-[#b8912d]" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 3. Payment Method Filter (Desktop / Tablet view) */}
      <div className="relative hidden sm:block">
        <button
          onClick={() => {
            setIsPaymentOpen(!isPaymentOpen);
            setIsDateOpen(false);
            setIsBranchOpen(false);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 bg-slate-50/80 hover:bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 transition-colors"
        >
          <IconCreditCard className="w-3.5 h-3.5 text-slate-400" />
          <span>{activePaymentLabel}</span>
          <IconChevronDown className="w-3 h-3 text-slate-400" />
        </button>

        {isPaymentOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsPaymentOpen(false)} />
            <div className="absolute right-0 top-full mt-1.5 w-48 bg-white rounded-xl border border-slate-200 shadow-xl z-50 py-1 overflow-hidden animate-in fade-in zoom-in-95">
              {paymentLabels.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPaymentMethod(p.id);
                    setIsPaymentOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-right text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span className={filters.paymentMethod === p.id ? 'font-bold text-[#b8912d]' : ''}>
                    {p.label}
                  </span>
                  {filters.paymentMethod === p.id && <IconCheck className="w-3.5 h-3.5 text-[#b8912d]" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Reset Filter Button */}
      {hasActiveFilters && (
        <button
          onClick={resetFilters}
          className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
          title="إعادة تعيين الفلاتر"
        >
          <IconRotateCcw className="w-3 h-3" />
          <span>إلغاء التصفية</span>
        </button>
      )}
    </div>
  );
};
