import React from 'react';
import {
  IconFileText,
  IconLightbulb,
  IconDroplets,
  IconWrench,
  IconBuilding,
  IconStaff,
  IconPercent,
  IconExpenses
} from '../components/icons/StyleIcons';
import { useStore } from '../store/useStore';
import { GlobalFilterBar } from '../components/common/GlobalFilterBar';

export const ExpensesPage: React.FC = () => {
  const { getMetrics } = useStore();
  const metrics = getMetrics();
  const fin = metrics.financial;
  const exp = metrics.expensesSummary;

  return (
    <div className="space-y-3.5 pb-6">
      {/* Global Filter */}
      <GlobalFilterBar />

      {/* 1. Complete Financial Control Overview (P&L Waterfall - Read-Only) */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-md border border-slate-800 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <IconExpenses className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-bold text-white">قائمة الأرباح والخسائر والرقابة المالية (P&L Analysis)</h3>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">قراءة وتجميع تحليلي</span>
        </div>

        {/* Financial Waterfall Steps */}
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">صافي المبيعات (Net Revenue):</span>
            <span className="font-bold font-mono text-white text-sm">
              EGP {fin.netSales.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-400">
            <span>تكلفة البضاعة المباعة (COGS):</span>
            <span className="font-mono text-rose-400">
              -EGP {fin.cogs.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center pt-1 border-t border-slate-800 text-emerald-400 font-semibold">
            <span>مجمل الربح (Gross Profit = Net Sales - COGS):</span>
            <span className="font-mono font-bold">
              EGP {fin.grossProfit.toLocaleString()} (%{fin.grossMarginPercent})
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-400">
            <span>المصروفات التشغيلية والمرافق (Expenses):</span>
            <span className="font-mono text-rose-400">
              -EGP {fin.expenses.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-slate-700 bg-slate-800/60 p-2 rounded-xl">
            <div>
              <span className="text-xs font-black text-amber-300 block">صافي الربح المحسوب (Net Profit):</span>
              <span className="text-[10px] text-slate-400">Net Profit = Gross Profit - Expenses</span>
            </div>
            <div className="text-left font-mono">
              <span className="text-base font-black text-emerald-400 block">
                EGP {fin.netProfit.toLocaleString()}
              </span>
              <span className="text-[10px] text-emerald-300 font-semibold">
                صافي الهامش: %{fin.netMarginPercent}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Total Expenses Summary Card (Read-Only) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <IconFileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">إجمالي المصروفات المقروءة في النسخة</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xs font-bold text-slate-400">EGP</span>
                <span className="text-2xl font-black text-slate-900 tabular-nums font-mono">
                  {exp.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <span className="text-[11px] font-bold px-2 py-1 bg-slate-100 rounded-lg text-slate-600">
            بيانات مسجلة في POS
          </span>
        </div>
      </div>

      {/* 3. Expense Categories Breakdown */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
        <h4 className="text-xs font-bold text-slate-800">تبويب بنود المصروفات المسجلة</h4>

        {/* Operating */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
              <IconBuilding className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">مصاريف تشغيل</span>
          </div>
          <span className="font-bold text-slate-900 text-sm tabular-nums font-mono">
            {exp.categories.operating.toLocaleString()}
          </span>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Utilities */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <IconLightbulb className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">مرافق وفواتير</span>
          </div>
          <span className="font-bold text-slate-900 text-sm tabular-nums font-mono">
            {exp.categories.utilities.toLocaleString()}
          </span>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Salaries */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#b8912d] flex items-center justify-center">
              <IconStaff className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">مرتبات وسلفيات</span>
          </div>
          <span className="font-bold text-slate-900 text-sm tabular-nums font-mono">
            {exp.categories.salaries.toLocaleString()}
          </span>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Other */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
              <IconPercent className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">أخرى ونثريات</span>
          </div>
          <span className="font-bold text-slate-900 text-sm tabular-nums font-mono">
            {exp.categories.other.toLocaleString()}
          </span>
        </div>
      </div>

      {/* 4. Details Breakdown Section */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <h3 className="text-xs font-bold text-slate-800 mb-3 text-right">تفاصيل فواتير المرافق المسجلة</h3>

        <div className="space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-600">
              <IconLightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>فاتورة كهرباء تكييفات وإنارة المتجر</span>
            </div>
            <div className="flex items-baseline gap-1 font-bold text-slate-900 tabular-nums font-mono">
              <span className="text-[10px] text-slate-400 font-normal">EGP</span>
              <span>{exp.details.electricity}</span>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-600">
              <IconDroplets className="w-3.5 h-3.5 text-blue-500" />
              <span>فاتورة استهلاك مياه</span>
            </div>
            <div className="flex items-baseline gap-1 font-bold text-slate-900 tabular-nums font-mono">
              <span className="text-[10px] text-slate-400 font-normal">EGP</span>
              <span>{exp.details.water}</span>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-600">
              <IconWrench className="w-3.5 h-3.5 text-slate-500" />
              <span>صيانة دورية للأبواب الزجاجية والإضاءة</span>
            </div>
            <div className="flex items-baseline gap-1 font-bold text-slate-900 tabular-nums font-mono">
              <span className="text-[10px] text-slate-400 font-normal">EGP</span>
              <span>{exp.details.maintenance}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
