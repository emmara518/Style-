import React, { useState } from 'react';
import {
  IconChevronLeft,
  IconBranches,
  IconPhone,
  IconMapPin,
  IconUserCheck
} from '../components/icons/StyleIcons';
import { useStore } from '../store/useStore';
import { GlobalFilterBar } from '../components/common/GlobalFilterBar';
import { Branch } from '../types';
import { STORE_INTERIOR_IMG } from '../data/mockBackupData';

export const BranchesPage: React.FC = () => {
  const { backupData, setSelectedBranch, setCurrentPage, getMetrics } = useStore();
  const [selectedBranchDetail, setSelectedBranchDetail] = useState<Branch | null>(null);

  const metrics = getMetrics();
  const totalSales = metrics.branches.reduce((acc, b) => acc + b.totalSales, 0);
  const avgScore = Math.round(
    metrics.branches.reduce((acc, b) => acc + b.score.overall, 0) / metrics.branches.length
  );

  const handleBranchClick = (branch: Branch) => {
    setSelectedBranchDetail(branch);
  };

  return (
    <div className="space-y-3.5 pb-6">
      {/* Unified Filter */}
      <GlobalFilterBar />

      {/* Top 3 Metric Cards */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
          <span className="text-[10px] font-medium text-slate-500 block mb-0.5">عدد الفروع</span>
          <span className="text-xl font-black text-slate-900 tabular-nums">
            {metrics.branches.length}
          </span>
        </div>

        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
          <span className="text-[10px] font-medium text-slate-500 block mb-0.5">إجمالي المبيعات</span>
          <div className="flex items-baseline justify-center gap-0.5">
            <span className="text-[9px] font-bold text-slate-400">EGP</span>
            <span className="text-base font-black text-slate-900 tabular-nums">
              {totalSales.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
          <span className="text-[10px] font-medium text-slate-500 block mb-0.5">متوسط أداء الفروع</span>
          <span className="text-base font-black text-[#b8912d] tabular-nums">
            {avgScore}/100
          </span>
        </div>
      </div>

      {/* Branch List */}
      <div className="space-y-2.5">
        {metrics.branches.map((branch) => {
          const isPositive = branch.salesGrowthPercent >= 0;
          const targetPercent = Math.round((branch.totalSales / branch.targetSales) * 100);

          return (
            <div
              key={branch.id}
              onClick={() => handleBranchClick(branch)}
              className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-slate-300 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between">
                {/* Branch Info and Photo */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={branch.image || STORE_INTERIOR_IMG}
                      alt={branch.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-1 right-1 w-4 h-4 bg-amber-400 text-slate-900 text-[10px] font-extrabold rounded flex items-center justify-center shadow-xs">
                      {branch.rank}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold text-slate-900">{branch.name}</h3>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-50 text-[#7b581c] border border-amber-200/60">
                        تقييم {branch.score.overall}/100
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-[10px] font-semibold text-slate-400">EGP</span>
                      <span className="text-sm font-extrabold text-slate-900 tabular-nums">
                        {branch.totalSales.toLocaleString()}
                      </span>
                      <span
                        className={`text-[10px] font-bold mr-1.5 ${
                          isPositive ? 'text-emerald-600' : 'text-rose-500'
                        }`}
                      >
                        {isPositive ? '↑' : '↓'} %{Math.abs(branch.salesGrowthPercent)}
                      </span>
                    </div>

                    <p className="text-[10px] text-slate-500 mt-1">
                      {branch.invoicesCount} فواتير | متوسط {branch.averageInvoiceValue} | تحقيق المستهدف %{targetPercent}
                    </p>
                  </div>
                </div>

                {/* Score & Left Arrow */}
                <div className="flex items-center gap-2">
                  <div className="text-left hidden sm:block">
                    <span className="text-[10px] text-slate-400 block">صافي الربح</span>
                    <span className="text-xs font-bold font-mono text-emerald-600">
                      EGP {branch.netProfit.toLocaleString()}
                    </span>
                  </div>
                  <IconChevronLeft className="w-4 h-4 text-slate-400 shrink-0" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comprehensive Branch Detail Modal */}
      {selectedBranchDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-lg rounded-2xl p-5 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b8912d] flex items-center justify-center">
                  <IconBranches className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">{selectedBranchDetail.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {selectedBranchDetail.score.grade} ({selectedBranchDetail.score.overall}/100)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{selectedBranchDetail.code} - {selectedBranchDetail.city}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedBranchDetail(null)}
                className="text-xs text-slate-400 hover:text-slate-600 p-1"
              >
                إغلاق
              </button>
            </div>

            {/* Branch Metadata */}
            <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl">
              <div className="flex items-center gap-2">
                <IconMapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>العنوان: {selectedBranchDetail.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconUserCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>مدير الفرع: {selectedBranchDetail.manager}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone className="w-3.5 h-3.5 text-slate-400" />
                <span dir="ltr">{selectedBranchDetail.phone}</span>
              </div>
            </div>

            {/* Financial & Performance Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 block">إجمالي المبيعات</span>
                <span className="font-bold text-slate-900 font-mono">
                  EGP {selectedBranchDetail.totalSales.toLocaleString()}
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 block">تكلفة البضاعة (COGS)</span>
                <span className="font-bold text-slate-700 font-mono">
                  EGP {selectedBranchDetail.cogs.toLocaleString()}
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 block">المصروفات</span>
                <span className="font-bold text-slate-700 font-mono">
                  EGP {selectedBranchDetail.expenses.toLocaleString()}
                </span>
              </div>
              <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100">
                <span className="text-[10px] text-emerald-600 block font-semibold">صافي الربح</span>
                <span className="font-bold text-emerald-800 font-mono">
                  EGP {selectedBranchDetail.netProfit.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Score Breakdown Indicators */}
            <div className="p-3 border border-slate-200/80 rounded-xl space-y-2 text-xs">
              <span className="font-bold text-slate-800 block text-[11px]">مؤشرات احتساب تقييم الفرع (Score Breakdown):</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex justify-between p-1.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-500">تحقيق المستهدف:</span>
                  <span className="font-bold text-slate-800">{selectedBranchDetail.score.salesScore}%</span>
                </div>
                <div className="flex justify-between p-1.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-500">هامش الربحية:</span>
                  <span className="font-bold text-slate-800">{selectedBranchDetail.score.profitScore}%</span>
                </div>
                <div className="flex justify-between p-1.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-500">حجم الفواتير:</span>
                  <span className="font-bold text-slate-800">{selectedBranchDetail.score.invoicesScore}%</span>
                </div>
                <div className="flex justify-between p-1.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-500">انضباط المرتجعات:</span>
                  <span className="font-bold text-slate-800">{selectedBranchDetail.score.returnRateScore}%</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  setSelectedBranch(selectedBranchDetail.id);
                  setSelectedBranchDetail(null);
                  setCurrentPage('dashboard');
                }}
                className="flex-1 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                تصفية لوحة التحكم بهذا الفرع
              </button>
              <button
                onClick={() => {
                  setSelectedBranch(selectedBranchDetail.id);
                  setSelectedBranchDetail(null);
                  setCurrentPage('sales');
                }}
                className="py-2 px-3 border border-slate-200 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                تحليل مبيعات الفرع
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
