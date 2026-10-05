import React, { useState } from 'react';
import {
  FileText,
  Lightbulb,
  Droplets,
  Wrench,
  Building,
  Users,
  Percent,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { DateFilter } from '../components/common/DateFilter';

export const ExpensesPage: React.FC = () => {
  const { getMetrics } = useStore();
  const metrics = getMetrics();
  const exp = metrics.expensesSummary;

  return (
    <div className="space-y-3.5 pb-6">
      {/* 1. Date Filter with Period Pill */}
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <DateFilter />
        </div>
        <div className="mb-3">
          <span className="inline-block px-3 py-2 bg-[#b8912d] text-white font-bold text-xs rounded-xl shadow-xs">
            اليومي
          </span>
        </div>
      </div>

      {/* 2. Total Expenses Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>

          <div className="text-left">
            <span className="text-[11px] font-medium text-slate-500 block">إجمالي المصروفات</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xs font-bold text-slate-400">EGP</span>
              <span className="text-2xl font-black text-slate-900 tabular-nums">
                {exp.total.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-end gap-1 text-[11px] font-bold text-rose-500 mt-0.5">
              <span>↑</span>
              <span className="tabular-nums">%{exp.growthPercent}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Expense Categories Breakdown */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
        {/* Operating */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
              <Building className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">مصاريف تشغيل</span>
          </div>
          <span className="font-bold text-slate-900 text-sm tabular-nums">
            {exp.categories.operating.toLocaleString()}
          </span>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Utilities */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Lightbulb className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">مرافق</span>
          </div>
          <span className="font-bold text-slate-900 text-sm tabular-nums">
            {exp.categories.utilities.toLocaleString()}
          </span>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Salaries */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#b8912d] flex items-center justify-center">
              <Users className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">مرتبات</span>
          </div>
          <span className="font-bold text-slate-900 text-sm tabular-nums">
            {exp.categories.salaries.toLocaleString()}
          </span>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Other */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
              <Percent className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-700 font-medium">أخرى</span>
          </div>
          <span className="font-bold text-slate-900 text-sm tabular-nums">
            {exp.categories.other.toLocaleString()}
          </span>
        </div>
      </div>

      {/* 4. Details Breakdown Section */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <h3 className="text-xs font-bold text-slate-800 mb-3 text-right">تفاصيل المصروفات</h3>

        <div className="space-y-3 text-xs">
          {/* Electricity */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-600">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>كهرباء</span>
            </div>
            <div className="flex items-baseline gap-1 font-bold text-slate-900 tabular-nums">
              <span className="text-[10px] text-slate-400 font-normal">EGP</span>
              <span>{exp.details.electricity}</span>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Water */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-600">
              <Droplets className="w-3.5 h-3.5 text-blue-500" />
              <span>مياه</span>
            </div>
            <div className="flex items-baseline gap-1 font-bold text-slate-900 tabular-nums">
              <span className="text-[10px] text-slate-400 font-normal">EGP</span>
              <span>{exp.details.water}</span>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Maintenance */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-600">
              <Wrench className="w-3.5 h-3.5 text-slate-500" />
              <span>صيانة</span>
            </div>
            <div className="flex items-baseline gap-1 font-bold text-slate-900 tabular-nums">
              <span className="text-[10px] text-slate-400 font-normal">EGP</span>
              <span>{exp.details.maintenance}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
