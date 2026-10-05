import React, { useState } from 'react';
import {
  IconStaff,
  IconUserCheck,
  IconAward
} from '../components/icons/StyleIcons';
import { useStore } from '../store/useStore';
import { GlobalFilterBar } from '../components/common/GlobalFilterBar';
import { Employee } from '../types';

export const EmployeesPage: React.FC = () => {
  const { backupData, getMetrics } = useStore();
  const metrics = getMetrics();
  const [activeTab, setActiveTab] = useState<'sales_perf' | 'attendance' | 'commissions'>('sales_perf');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const salesTeam = metrics.topEmployees;
  const topPerformer = salesTeam[0];

  return (
    <div className="space-y-3.5 pb-6">
      {/* Global Filter Bar */}
      <GlobalFilterBar />

      {/* 1. TOP PERFORMER Showcase Banner */}
      {topPerformer && (
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white rounded-2xl p-4 shadow-md border border-neutral-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 p-0.5 shadow-md shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center font-black text-amber-300 text-sm">
                {topPerformer.name.charAt(0)}
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 text-slate-950 rounded-full flex items-center justify-center shadow-xs">
                <IconAward className="w-3 h-3 text-slate-950" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-400 text-neutral-950 uppercase tracking-wider">
                  TOP PERFORMER
                </span>
                <span className="text-xs font-bold text-amber-200">{topPerformer.branchName}</span>
              </div>
              <h3 className="text-base font-black text-white mt-0.5">{topPerformer.name}</h3>
              <p className="text-[11px] text-neutral-300 font-medium">
                نسبة تحقيق المستهدف: %{topPerformer.targetAchievementPercent} · عمولة: EGP {topPerformer.commission.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="text-left font-mono">
            <span className="text-[10px] text-neutral-400 block">إجمالي المبيعات</span>
            <span className="text-base font-extrabold text-amber-400">
              EGP {topPerformer.totalSales.toLocaleString()}
            </span>
          </div>
        </div>
      )}

      {/* 2. Filter Tabs */}
      <div className="flex items-center p-1 bg-slate-200/70 rounded-xl">
        <button
          onClick={() => setActiveTab('sales_perf')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'sales_perf'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          أداء السيلز الشامل
        </button>
        <button
          onClick={() => setActiveTab('commissions')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'commissions'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          العمولات المستحقة
        </button>
        <button
          onClick={() => setActiveTab('attendance')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'attendance'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          الحضور والانضباط
        </button>
      </div>

      {/* 3. Employee Ranking List */}
      <div className="space-y-2">
        {salesTeam.map((emp, idx) => {
          const percentOfMax = (emp.totalSales / 45000) * 100;

          return (
            <div
              key={emp.id}
              onClick={() => setSelectedEmployee(emp)}
              className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between cursor-pointer hover:border-slate-300 transition-colors"
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
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-slate-900">{emp.name}</h4>
                    {idx === 0 && (
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900">
                        الأول
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400">{emp.branchName} · {emp.invoicesCount} فاتورة</p>
                </div>
              </div>

              {/* Dynamic metric based on tab */}
              <div className="text-left w-36">
                <div className="flex items-baseline justify-end gap-1 mb-1">
                  {activeTab === 'commissions' ? (
                    <>
                      <span className="text-[9px] font-semibold text-slate-400">عمولة: EGP</span>
                      <span className="text-xs font-extrabold text-emerald-600 tabular-nums">
                        {emp.commission.toLocaleString()}
                      </span>
                    </>
                  ) : activeTab === 'attendance' ? (
                    <span className="text-xs font-bold text-slate-800 tabular-nums">
                      {emp.attendanceDays} يوم حضور
                    </span>
                  ) : (
                    <>
                      <span className="text-[9px] font-semibold text-slate-400">EGP</span>
                      <span className="text-xs font-extrabold text-slate-900 tabular-nums">
                        {emp.totalSales.toLocaleString()}
                      </span>
                    </>
                  )}
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

      {/* 4. Summary Cards (2x Side-by-side) */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 block mb-0.5">إجمالي موظفي السيلز</span>
            <span className="text-lg font-black text-slate-900 tabular-nums">{salesTeam.length}</span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <IconStaff className="w-4 h-4" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-medium text-slate-500 block mb-0.5">متوسط المبيعات للموظف</span>
            <span className="text-base font-black text-slate-900 tabular-nums font-mono">
              EGP {Math.round(metrics.sales.total.current / salesTeam.length).toLocaleString()}
            </span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <IconUserCheck className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Employee Detail Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-sm rounded-2xl p-5 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{selectedEmployee.name}</h3>
                <p className="text-[11px] text-slate-500">{selectedEmployee.branchName} · {selectedEmployee.phone}</p>
              </div>
              <button
                onClick={() => setSelectedEmployee(null)}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                إغلاق
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="p-2.5 bg-slate-50 rounded-xl">
                <span className="text-[10px] text-slate-400 block">المبيعات الإجمالية</span>
                <span className="font-bold text-slate-900 font-mono">EGP {selectedEmployee.totalSales.toLocaleString()}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl">
                <span className="text-[10px] text-slate-400 block">المستهدف الشهري</span>
                <span className="font-bold text-slate-900 font-mono">EGP {selectedEmployee.targetSales.toLocaleString()}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl">
                <span className="text-[10px] text-slate-400 block">عدد الوحدات المباعة</span>
                <span className="font-bold text-slate-900 font-mono">{selectedEmployee.unitsSold} قطعة</span>
              </div>
              <div className="p-2.5 bg-emerald-50 rounded-xl">
                <span className="text-[10px] text-emerald-600 block">العمولة المقررة</span>
                <span className="font-bold text-emerald-800 font-mono">EGP {selectedEmployee.commission.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-xl text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">متوسط قيمة الفاتورة:</span>
                <span className="font-bold font-mono text-slate-800">EGP {selectedEmployee.averageTicket}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">مرتجعات مسجلة:</span>
                <span className="font-bold font-mono text-rose-600">EGP {selectedEmployee.returnsAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">خصومات ممنوحة:</span>
                <span className="font-bold font-mono text-amber-600">EGP {selectedEmployee.discountsGiven}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
