import React from 'react';
import { Vault, Banknote, CreditCard, WalletCards, RotateCcw, ShieldCheck, AlertCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { DateFilter } from '../components/common/DateFilter';

export const SafePage: React.FC = () => {
  const { getMetrics } = useStore();
  const metrics = getMetrics();
  const safe = metrics.safeRecord;

  return (
    <div className="space-y-3.5 pb-6">
      {/* Date Filter */}
      <DateFilter />

      {/* 1. Safe Hero Card */}
      <div className="bg-gradient-to-br from-[#c59b4c] via-[#b8912d] to-[#997321] text-white rounded-2xl p-5 shadow-md flex items-center justify-between">
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0 border border-white/20">
          <Vault className="w-7 h-7 stroke-[1.8]" />
        </div>

        <div className="text-left">
          <span className="text-xs text-white/80 font-medium block">رصيد الخزنة الحالي</span>
          <div className="flex items-baseline gap-1 mt-1 justify-end">
            <span className="text-xs font-bold text-white/70">EGP</span>
            <span className="text-2xl font-black tabular-nums tracking-tight">
              {safe.currentBalance.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Cash Flow Breakdown Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
        {/* Cash Sales */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Banknote className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">مبيعات كاش</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-slate-900 text-sm tabular-nums">
            <span className="text-[10px] text-slate-400 font-normal">EGP</span>
            <span>{safe.cashSales.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Visa Sales */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <CreditCard className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">مبيعات فيزا</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-slate-900 text-sm tabular-nums">
            <span className="text-[10px] text-slate-400 font-normal">EGP</span>
            <span>{safe.visaSales.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Expenses */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
              <WalletCards className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">المصروفات</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-rose-600 text-sm tabular-nums">
            <span className="text-[10px] text-rose-400 font-normal">EGP</span>
            <span>{safe.expenses.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Returns */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
              <RotateCcw className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">المرتجعات</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-amber-600 text-sm tabular-nums">
            <span className="text-[10px] text-amber-400 font-normal">EGP</span>
            <span>{safe.returns.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* 3. Reconciliation Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600">المفروض في الخزنة</span>
          <div className="flex items-baseline gap-1 font-bold text-slate-800 tabular-nums">
            <span className="text-[10px] text-slate-400 font-normal">EGP</span>
            <span>{safe.expectedBalance.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600">الموجود فعلياً</span>
          <div className="flex items-baseline gap-1 font-bold text-slate-900 tabular-nums">
            <span className="text-[10px] text-slate-400 font-normal">EGP</span>
            <span>{safe.actualBalance.toLocaleString()}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
          <span className="text-slate-700">الفرق (عجز / زيادة)</span>
          <div className="flex items-baseline gap-1 font-black text-rose-600 tabular-nums">
            <span className="text-[10px] font-normal">EGP</span>
            <span>{safe.discrepancy}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
