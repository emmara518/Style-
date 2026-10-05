import React, { useState } from 'react';
import { Users, UserCheck, Award, ChevronLeft } from 'lucide-react';
import { useStore } from '../store/useStore';
import { DateFilter } from '../components/common/DateFilter';

export const EmployeesPage: React.FC = () => {
  const { backupData } = useStore();
  const [activeTab, setActiveTab] = useState<'sales_perf' | 'attendance' | 'commissions'>('sales_perf');

  const salesTeam = [...backupData.employees]
    .filter((e) => e.role === 'sales')
    .sort((a, b) => b.totalSales - a.totalSales);

  const topFive = salesTeam.slice(0, 5);
  const maxSale = 45000;

  return (
    <div className="space-y-3.5 pb-6">
      {/* 1. Filter Tabs */}
      <div className="flex items-center p-1 bg-slate-200/70 rounded-xl">
        <button
          onClick={() => setActiveTab('commissions')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'commissions'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          العمولات
        </button>
        <button
          onClick={() => setActiveTab('attendance')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'attendance'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          الحضور
        </button>
        <button
          onClick={() => setActiveTab('sales_perf')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'sales_perf'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          أداء السيلز
        </button>
      </div>

      {/* Date Filter */}
      <DateFilter />

      {/* 2. Employee Ranking List */}
      <div className="space-y-2">
        {topFive.map((emp, idx) => {
          const percentOfMax = (emp.totalSales / maxSale) * 100;

          return (
            <div
              key={emp.id}
              className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between"
            >
              {/* Employee Avatar & Name */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs shrink-0 border border-slate-200">
                  <span>{emp.name.charAt(0)}</span>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 text-slate-950 text-[9px] font-black rounded-full flex items-center justify-center shadow-xs">
                    {idx + 1}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900">{emp.name}</h4>
                  <p className="text-[10px] text-slate-400">{emp.branchName}</p>
                </div>
              </div>

              {/* Sales figure and Progress bar */}
              <div className="text-left w-36">
                <div className="flex items-baseline justify-end gap-1 mb-1">
                  <span className="text-[9px] font-semibold text-slate-400">EGP</span>
                  <span className="text-xs font-extrabold text-slate-900 tabular-nums">
                    {activeTab === 'commissions'
                      ? emp.commission.toLocaleString()
                      : emp.totalSales.toLocaleString()}
                  </span>
                </div>

                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-[#b8912d] rounded-full"
                    style={{ width: `${Math.min(100, percentOfMax)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Summary Cards (2x Side-by-side) */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 block mb-0.5">إجمالي موظفين</span>
            <span className="text-lg font-black text-slate-900 tabular-nums">12</span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 block mb-0.5">موظفين نشطين</span>
            <span className="text-lg font-black text-slate-900 tabular-nums">10</span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <UserCheck className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
