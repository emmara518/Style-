import React, { useState } from 'react';
import {
  Receipt,
  Box,
  Package,
  Store,
  Users,
  Zap,
  RotateCcw,
  WalletCards,
  ChevronLeft,
  Download,
  Printer,
  X
} from 'lucide-react';
import { useStore } from '../store/useStore';

export const ReportsPage: React.FC = () => {
  const { backupData, getMetrics } = useStore();
  const metrics = getMetrics();
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const reports = [
    {
      id: 'sales',
      title: 'تقرير المبيعات',
      subtitle: 'تفاصيل المبيعات والفواتير',
      icon: Receipt,
      iconBg: 'bg-amber-50',
      iconColor: 'text-[#b8912d]'
    },
    {
      id: 'products',
      title: 'تقرير المنتجات',
      subtitle: 'الأكثر مبيعاً والأقل مبيعاً',
      icon: Box,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'inventory',
      title: 'تقرير المخزون',
      subtitle: 'حالة المخزون والجرد',
      icon: Package,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'branches',
      title: 'تقرير الفروع',
      subtitle: 'مقارنة أداء الفروع',
      icon: Store,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'employees',
      title: 'تقرير الموظفين',
      subtitle: 'أداء السيلز والحضور',
      icon: Users,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'profits',
      title: 'تقرير الأرباح',
      subtitle: 'المبيعات - المصروفات = الأرباح',
      icon: Zap,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-800'
    },
    {
      id: 'returns',
      title: 'تقرير المرتجعات',
      subtitle: 'تفاصيل المرتجعات',
      icon: RotateCcw,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-500'
    },
    {
      id: 'payments',
      title: 'تقرير طرق الدفع',
      subtitle: 'تحليل طرق الدفع',
      icon: WalletCards,
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    }
  ];

  return (
    <div className="space-y-2.5 pb-6">
      {reports.map((r) => {
        const Icon = r.icon;

        return (
          <div
            key={r.id}
            onClick={() => setSelectedReport(r.title)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between hover:border-slate-300 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl ${r.iconBg} ${r.iconColor} flex items-center justify-center shrink-0`}>
                <Icon className="w-4 h-4 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900">{r.title}</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">{r.subtitle}</p>
              </div>
            </div>

            <ChevronLeft className="w-4 h-4 text-slate-400 shrink-0" />
          </div>
        );
      })}

      {/* Report Quick Preview Modal */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{selectedReport}</h3>
                <p className="text-[11px] text-slate-500">تم إنشاؤه بناءً على النسخة الاحتياطية النشطة</p>
              </div>
              <button
                onClick={() => setSelectedReport(null)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl space-y-2 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>الفترة:</span>
                <span className="font-semibold text-slate-900">2 أكتوبر 2026 (اليومي)</span>
              </div>
              <div className="flex justify-between">
                <span>إجمالي القيمة المسجلة:</span>
                <span className="font-bold text-[#b8912d] font-mono">
                  EGP {metrics.totalSales.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>عدد السجلات المشمولة:</span>
                <span className="font-bold text-slate-900 font-mono">
                  {backupData.metadata.totalRecords.toLocaleString()} سجل
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  alert(`تم بدء تنزيل ${selectedReport} بصيغة Excel/PDF`);
                  setSelectedReport(null);
                }}
                className="flex-1 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>تصدير تقرير (Excel)</span>
              </button>
              <button
                onClick={() => {
                  window.print();
                  setSelectedReport(null);
                }}
                className="p-2 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                title="طباعة"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
