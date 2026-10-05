import React, { useState } from 'react';
import {
  IconVault,
  IconBanknote,
  IconCreditCard,
  IconExpenses,
  IconRotateCcw,
  IconAlertCircle,
  IconClock,
  IconCheckCircle
} from '../components/icons/StyleIcons';
import { useStore } from '../store/useStore';
import { GlobalFilterBar } from '../components/common/GlobalFilterBar';
import { ShiftRecord } from '../types';

export const SafePage: React.FC = () => {
  const { getMetrics, backupData } = useStore();
  const metrics = getMetrics();
  const safe = metrics.safeRecord;
  const [selectedShiftIndex, setSelectedShiftIndex] = useState(0);

  const activeShift: ShiftRecord = backupData.shifts[selectedShiftIndex] || backupData.shifts[0];

  return (
    <div className="space-y-3.5 pb-6">
      {/* Global Filter */}
      <GlobalFilterBar />

      {/* 1. Safe Hero Card */}
      <div className="bg-gradient-to-br from-[#c59b4c] via-[#b8912d] to-[#997321] text-white rounded-2xl p-5 shadow-md flex items-center justify-between">
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0 border border-white/20">
          <IconVault className="w-7 h-7" strokeWidth={1.8} />
        </div>

        <div className="text-left">
          <span className="text-xs text-white/80 font-medium block">إجمالي رصيد الخزائن النقدية المسجل</span>
          <div className="flex items-baseline gap-1 mt-1 justify-end">
            <span className="text-xs font-bold text-white/70">EGP</span>
            <span className="text-2xl font-black tabular-nums tracking-tight font-sans">
              {safe.currentBalance.toLocaleString()}
            </span>
          </div>
          <span className="text-[10px] text-white/80 mt-0.5 block">يشمل خزائن 4 فروع وفق آخر تصدير</span>
        </div>
      </div>

      {/* 2. Shift Intelligence Selector & Audit Card (Read-Only) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconClock className="w-4 h-4 text-[#b8912d]" />
            <h3 className="text-xs font-bold text-slate-900">سجل مطابقة ورديات الكاشير المقروءة</h3>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {backupData.shifts.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setSelectedShiftIndex(idx)}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                  selectedShiftIndex === idx
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {s.branchName.replace('فرع ', '')} ({s.shiftName})
              </button>
            ))}
          </div>
        </div>

        {/* Selected Shift Breakdown */}
        <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] pb-1 border-b border-slate-200">
            <span>الكاشير المسؤول: <strong className="text-slate-800">{activeShift.cashierName}</strong></span>
            <span>الفرع: <strong className="text-slate-800">{activeShift.branchName}</strong></span>
            <span className="font-mono">{activeShift.date}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
            <div className="p-2 bg-white rounded-lg border border-slate-100">
              <span className="text-[10px] text-slate-400 block">رصيد الافتتاح</span>
              <span className="font-bold font-mono text-slate-800">EGP {activeShift.openingCash.toLocaleString()}</span>
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-100">
              <span className="text-[10px] text-slate-400 block">مبيعات الكاش (+)</span>
              <span className="font-bold font-mono text-emerald-600">EGP {activeShift.cashSales.toLocaleString()}</span>
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-100">
              <span className="text-[10px] text-slate-400 block">المصروفات المسددة (-)</span>
              <span className="font-bold font-mono text-rose-600">-EGP {activeShift.expenses.toLocaleString()}</span>
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-100">
              <span className="text-[10px] text-slate-400 block">المرتجعات النقدية (-)</span>
              <span className="font-bold font-mono text-amber-600">-EGP {activeShift.refunds.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Variance Alert Box (Read-Only) */}
        <div
          className={`p-3.5 rounded-xl border flex items-center justify-between ${
            activeShift.variance !== 0
              ? 'bg-rose-50/70 border-rose-200 text-rose-950'
              : 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
          }`}
        >
          <div className="flex items-center gap-2.5">
            {activeShift.variance !== 0 ? (
              <IconAlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            ) : (
              <IconCheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            )}
            <div>
              <span className="text-xs font-bold block">
                {activeShift.variance !== 0
                  ? `عجز تسوية مسجل في بيانات الوردية (${activeShift.variance} EGP)`
                  : 'الوردية مسجلة ومطابقة بالكامل دفترياً ونقدياً'}
              </span>
              <span className="text-[11px] text-slate-600">
                المتوقع: {activeShift.expectedClosing.toLocaleString()} ج.م · الفعلي المعدود في الأصل: {activeShift.actualClosing.toLocaleString()} ج.م
              </span>
            </div>
          </div>

          <span className="text-[11px] font-bold px-2 py-1 bg-white rounded-lg border border-slate-200 text-slate-700">
            حالة الوردية: {activeShift.status === 'closed' ? 'مغلقة وموثقة' : 'مفتوحة'}
          </span>
        </div>
      </div>

      {/* 3. Cash Flow Breakdown Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
        <h4 className="text-xs font-bold text-slate-800">التدفقات النقدية الإجمالية المسجلة</h4>

        {/* Cash Sales */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <IconBanknote className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">مبيعات كاش</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-slate-900 text-sm tabular-nums font-mono">
            <span className="text-[10px] text-slate-400 font-normal">EGP</span>
            <span>{safe.cashSales.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Visa Sales */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <IconCreditCard className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">مبيعات فيزا وشبكة</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-slate-900 text-sm tabular-nums font-mono">
            <span className="text-[10px] text-slate-400 font-normal">EGP</span>
            <span>{safe.visaSales.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Expenses */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
              <IconExpenses className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">المصروفات النقدية المسددة</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-rose-600 text-sm tabular-nums font-mono">
            <span className="text-[10px] text-rose-400 font-normal">EGP</span>
            <span>{safe.expenses.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Returns */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
              <IconRotateCcw className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">المرتجعات النقدية</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-amber-600 text-sm tabular-nums font-mono">
            <span className="text-[10px] text-amber-400 font-normal">EGP</span>
            <span>{safe.returns.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
