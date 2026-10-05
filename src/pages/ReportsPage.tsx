import React, { useState } from 'react';
import {
  IconSales,
  IconProducts,
  IconInventory,
  IconBranches,
  IconStaff,
  IconZap,
  IconRotateCcw,
  IconVault,
  IconChevronLeft,
  IconDownload,
  IconPrinter,
  IconClose,
  IconFileSpreadsheet,
  IconSearch,
  IconFilter
} from '../components/icons/StyleIcons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useStore } from '../store/useStore';
import { GlobalFilterBar } from '../components/common/GlobalFilterBar';

export const ReportsPage: React.FC = () => {
  const { backupData, getMetrics } = useStore();
  const metrics = getMetrics();
  const [selectedReportId, setSelectedReportId] = useState<string>('sales');
  const [tableSearch, setTableSearch] = useState('');

  const reports = [
    {
      id: 'sales',
      title: 'تقرير المبيعات والفواتير',
      subtitle: 'تفاصيل المبيعات اليومية والفواتير والخصومات',
      icon: IconSales,
      iconBg: 'bg-amber-50',
      iconColor: 'text-[#b8912d]'
    },
    {
      id: 'branches',
      title: 'تقرير مقارنة الفروع',
      subtitle: 'مقارنة أداء الفروع الأربعة ومؤشرات التميز',
      icon: IconBranches,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'products',
      title: 'تقرير حركة المنتجات و ABC',
      subtitle: 'الأصناف الأكثر مبيعاً وتحليل هوامش الربح',
      icon: IconProducts,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'inventory',
      title: 'تقرير المخزون والجرد',
      subtitle: 'حالة المخزون، النواقص، وتوصيات إعادة الطلب',
      icon: IconInventory,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'employees',
      title: 'تقرير أداء موظفي السيلز',
      subtitle: 'إنجاز المستهدفات، المبيعات والعمولات',
      icon: IconStaff,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'profit',
      title: 'تقرير الأرباح والرقابة المالية',
      subtitle: 'Net Revenue - COGS - Expenses = Net Profit',
      icon: IconZap,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-800'
    },
    {
      id: 'safe',
      title: 'تقرير الخزنة والورديات',
      subtitle: 'مطابقة الكاش والفروقات النقدية',
      icon: IconVault,
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      id: 'returns',
      title: 'تقرير المرتجعات واسترداد الأموال',
      subtitle: 'فواتير الاسترجاع والأسباب والكميات',
      icon: IconRotateCcw,
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-500'
    }
  ];

  const activeReport = reports.find((r) => r.id === selectedReportId) || reports[0];

  // Export CSV handler
  const handleExportCSV = () => {
    let csvContent = 'data:text/csv;charset=utf-8,\uFEFF';
    if (selectedReportId === 'branches') {
      csvContent += 'الفرع,المبيعات,الفواتير,متوسط الفاتورة,صافي الربح,تقييم الفرع\n';
      metrics.branches.forEach((b) => {
        csvContent += `"${b.name}",${b.totalSales},${b.invoicesCount},${b.averageInvoiceValue},${b.netProfit},${b.score.overall}\n`;
      });
    } else if (selectedReportId === 'employees') {
      csvContent += 'الموظف,الفرع,المبيعات,المستهدف,نسبة التحقيق,العمولة\n';
      metrics.topEmployees.forEach((e) => {
        csvContent += `"${e.name}","${e.branchName}",${e.totalSales},${e.targetSales},${e.targetAchievementPercent}%,${e.commission}\n`;
      });
    } else {
      csvContent += 'المنتج,كود SKU,سعر البيع,التكلفة,المبيعات,المخزون,تصنيف ABC\n';
      backupData.products.forEach((p) => {
        csvContent += `"${p.name}","${p.sku}",${p.price},${p.cost},${p.soldQuantity},${p.stockQuantity},${p.abcClass}\n`;
      });
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `style_report_${selectedReportId}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-3.5 pb-6">
      {/* Global Filter Bar */}
      <GlobalFilterBar />

      {/* 1. Report Category Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {reports.map((r) => {
          const Icon = r.icon;
          const isActive = selectedReportId === r.id;

          return (
            <button
              key={r.id}
              onClick={() => setSelectedReportId(r.id)}
              className={`p-3 rounded-2xl border text-right transition-all flex flex-col justify-between min-h-[78px] ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white hover:bg-slate-50 border-slate-200/80 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold ${isActive ? 'text-amber-300' : 'text-slate-900'}`}>
                  {r.title.replace('تقرير ', '')}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
              </div>
              <p className={`text-[10px] mt-1 line-clamp-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                {r.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* 2. Active Report Center Panel */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-4">
        {/* Header with Title and Export Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">{activeReport.title}</h3>
            <p className="text-[11px] text-slate-500">{activeReport.subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
              title="تصدير كملف إكسل CSV"
            >
              <IconFileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              <span>تصدير CSV</span>
            </button>

            <button
              onClick={() => window.print()}
              className="p-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
              title="طباعة التقرير"
            >
              <IconPrinter className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Dynamic Summary Cards for Active Report */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2.5 bg-slate-50 rounded-xl">
            <span className="text-[10px] text-slate-400 block">إجمالي السجلات</span>
            <span className="font-bold text-slate-800 font-mono">
              {selectedReportId === 'branches'
                ? metrics.branches.length
                : selectedReportId === 'employees'
                ? metrics.topEmployees.length
                : backupData.products.length}{' '}
              عنصر
            </span>
          </div>
          <div className="p-2.5 bg-slate-50 rounded-xl">
            <span className="text-[10px] text-slate-400 block">إجمالي القيمة المالية</span>
            <span className="font-bold text-slate-900 font-mono">
              EGP {metrics.sales.total.current.toLocaleString()}
            </span>
          </div>
          <div className="p-2.5 bg-slate-50 rounded-xl">
            <span className="text-[10px] text-slate-400 block">صافي الأرباح</span>
            <span className="font-bold text-emerald-600 font-mono">
              EGP {metrics.financial.netProfit.toLocaleString()}
            </span>
          </div>
          <div className="p-2.5 bg-amber-50 rounded-xl">
            <span className="text-[10px] text-[#7b581c] block">حالة التدقيق</span>
            <span className="font-bold text-[#b8912d] font-mono">مطابق وصالح</span>
          </div>
        </div>

        {/* Detailed Data Table for Selected Report */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">بيانات التقرير التفصيلية:</span>
            <div className="relative w-48">
              <input
                type="text"
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                placeholder="تصفية الجدول..."
                className="w-full pl-2 pr-7 py-1 text-xs border border-slate-200 rounded-lg text-right focus:outline-none focus:border-[#b8912d]"
              />
              <IconSearch className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-2 pointer-events-none" />
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-x-auto">
            {selectedReportId === 'branches' ? (
              <table className="w-full text-right text-xs">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="p-2.5">الفرع</th>
                    <th className="p-2.5">المبيعات</th>
                    <th className="p-2.5">الفواتير</th>
                    <th className="p-2.5">متوسط الفاتورة</th>
                    <th className="p-2.5">صافي الربح</th>
                    <th className="p-2.5">تقييم الفرع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {metrics.branches
                    .filter((b) => !tableSearch || b.name.includes(tableSearch))
                    .map((b) => (
                      <tr key={b.id} className="hover:bg-slate-50">
                        <td className="p-2.5 font-bold text-slate-900">{b.name}</td>
                        <td className="p-2.5 font-mono">EGP {b.totalSales.toLocaleString()}</td>
                        <td className="p-2.5 font-mono">{b.invoicesCount}</td>
                        <td className="p-2.5 font-mono">EGP {b.averageInvoiceValue}</td>
                        <td className="p-2.5 font-mono text-emerald-600 font-bold">EGP {b.netProfit.toLocaleString()}</td>
                        <td className="p-2.5 font-mono font-bold">{b.score.overall}/100 ({b.score.grade})</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            ) : selectedReportId === 'employees' ? (
              <table className="w-full text-right text-xs">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="p-2.5">الموظف</th>
                    <th className="p-2.5">الفرع</th>
                    <th className="p-2.5">المبيعات</th>
                    <th className="p-2.5">الفواتير</th>
                    <th className="p-2.5">تحقيق المستهدف</th>
                    <th className="p-2.5">العمولة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {metrics.topEmployees
                    .filter((e) => !tableSearch || e.name.includes(tableSearch))
                    .map((e) => (
                      <tr key={e.id} className="hover:bg-slate-50">
                        <td className="p-2.5 font-bold text-slate-900">{e.name}</td>
                        <td className="p-2.5 text-slate-600">{e.branchName}</td>
                        <td className="p-2.5 font-mono">EGP {e.totalSales.toLocaleString()}</td>
                        <td className="p-2.5 font-mono">{e.invoicesCount}</td>
                        <td className="p-2.5 font-mono font-bold text-emerald-600">%{e.targetAchievementPercent}</td>
                        <td className="p-2.5 font-mono font-bold">EGP {e.commission.toLocaleString()}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-right text-xs">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="p-2.5">المنتج</th>
                    <th className="p-2.5">كود SKU</th>
                    <th className="p-2.5">السعر</th>
                    <th className="p-2.5">المبيعات</th>
                    <th className="p-2.5">المخزون</th>
                    <th className="p-2.5">تصنيف ABC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {backupData.products
                    .filter((p) => !tableSearch || p.name.includes(tableSearch) || p.sku.includes(tableSearch))
                    .map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50">
                        <td className="p-2.5 font-bold text-slate-900">{p.name}</td>
                        <td className="p-2.5 font-mono text-slate-500">{p.sku}</td>
                        <td className="p-2.5 font-mono">EGP {p.price}</td>
                        <td className="p-2.5 font-mono">{p.soldQuantity} قطعة</td>
                        <td className="p-2.5 font-mono font-bold">
                          <span className={p.stockQuantity <= p.minStockAlert ? 'text-rose-600' : 'text-slate-800'}>
                            {p.stockQuantity}
                          </span>
                        </td>
                        <td className="p-2.5 font-mono font-bold text-[#b8912d]">{p.abcClass}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
