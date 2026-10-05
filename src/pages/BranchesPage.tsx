import React, { useState } from 'react';
import { ChevronLeft, Building2, Store, Phone, MapPin, UserCheck, TrendingUp, TrendingDown } from 'lucide-react';
import { useStore } from '../store/useStore';
import { DateFilter } from '../components/common/DateFilter';
import { Branch } from '../types';
import { STORE_INTERIOR_IMG } from '../data/mockBackupData';

export const BranchesPage: React.FC = () => {
  const { backupData, setSelectedBranch, setCurrentPage } = useStore();
  const [selectedBranchDetail, setSelectedBranchDetail] = useState<Branch | null>(null);

  const totalSales = backupData.branches.reduce((acc, b) => acc + b.totalSales, 0);

  const handleBranchClick = (branch: Branch) => {
    setSelectedBranchDetail(branch);
  };

  return (
    <div className="space-y-3.5 pb-6">
      {/* Date Filter */}
      <DateFilter />

      {/* Top 2 Metric Cards */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
          <span className="text-[11px] font-medium text-slate-500 block mb-1">عدد الفروع</span>
          <span className="text-2xl font-black text-slate-900 tabular-nums">
            {backupData.branches.length}
          </span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
          <span className="text-[11px] font-medium text-slate-500 block mb-1">إجمالي المبيعات</span>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-[10px] font-bold text-slate-400">EGP</span>
            <span className="text-xl font-black text-slate-900 tabular-nums">
              {totalSales.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Branch List */}
      <div className="space-y-2.5">
        {backupData.branches.map((branch) => {
          const isPositive = branch.salesGrowthPercent >= 0;

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
                    <h3 className="text-xs font-bold text-slate-900">{branch.name}</h3>
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
                      {branch.invoicesCount} فواتير | {branch.averageInvoiceValue} متوسط
                    </p>
                  </div>
                </div>

                {/* Left Arrow Icon */}
                <ChevronLeft className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Branch Detail Modal */}
      {selectedBranchDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-sm rounded-2xl p-5 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{selectedBranchDetail.name}</h3>
                <p className="text-[11px] text-slate-500">{selectedBranchDetail.code} - {selectedBranchDetail.city}</p>
              </div>
              <button
                onClick={() => setSelectedBranchDetail(null)}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                إغلاق
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{selectedBranchDetail.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>مدير الفرع: {selectedBranchDetail.manager}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span dir="ltr">{selectedBranchDetail.phone}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-center">
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[10px] text-slate-500 block">إجمالي مبيعات اليوم</span>
                <span className="text-xs font-bold text-slate-900 font-mono tabular-nums">
                  EGP {selectedBranchDetail.totalSales.toLocaleString()}
                </span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <span className="text-[10px] text-slate-500 block">عدد الفواتير</span>
                <span className="text-xs font-bold text-slate-900 font-mono tabular-nums">
                  {selectedBranchDetail.invoicesCount} فاتورة
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedBranch(selectedBranchDetail.id);
                setSelectedBranchDetail(null);
                setCurrentPage('dashboard');
              }}
              className="w-full py-2 bg-slate-900 text-white rounded-xl text-xs font-medium hover:bg-slate-800 transition-colors"
            >
              تصفية لوحة التحكم بهذا الفرع
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
