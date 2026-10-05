import React, { useState } from 'react';
import {
  IconPercent,
  IconShoppingCart,
  IconBarChart,
  IconRotateCcw,
  IconArrowUpRight,
  IconChevronLeft,
  IconAlertCircle,
  IconVault,
  IconInventory
} from '../components/icons/StyleIcons';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useStore } from '../store/useStore';
import { GlobalFilterBar } from '../components/common/GlobalFilterBar';
import { STORE_INTERIOR_IMG } from '../data/mockBackupData';
import { KPICard } from '../components/ui/KPICard';

export const DashboardPage: React.FC = () => {
  const { getMetrics, setCurrentPage, setSelectedBranch, lastBackupSyncText } = useStore();
  const metrics = getMetrics();
  const [dismissAlert, setDismissAlert] = useState(false);

  // Reformat chart data for RTL display (سبت -> جمعة)
  const chartData = [...metrics.salesHistory].reverse();

  const topAlert = metrics.insights[0];

  return (
    <div className="space-y-3.5 pb-6">
      {/* 0. Prominent Snapshot Meta Banner */}
      <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-500">آخر لقطة بيانات مقروءة:</span>
          <span className="font-bold text-slate-800 font-mono">{lastBackupSyncText}</span>
          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 hidden sm:inline">
            ✓ صالحة للقراءة فقط
          </span>
        </div>

        <button
          onClick={() => setCurrentPage('snapshots')}
          className="text-[11px] font-bold text-[#b8912d] hover:text-[#997321] hover:underline"
        >
          سجل اللقطات التاريخية &gt;
        </button>
      </div>

      {/* 1. Unified Global Filter Bar */}
      <GlobalFilterBar />

      {/* 2. Top Smart Business Alert (Dismissable Banner) */}
      {!dismissAlert && topAlert && (
        <div className="bg-amber-50/90 border border-amber-200/80 rounded-2xl p-3 flex items-center justify-between gap-3 text-xs shadow-xs animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-100/80 text-amber-800 flex items-center justify-center shrink-0">
              <IconAlertCircle className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <span className="font-bold text-slate-900 ml-1.5">{topAlert.title}</span>
              <span className="text-slate-600 text-[11px] hidden sm:inline">{topAlert.description}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {topAlert.targetPage && (
              <button
                onClick={() => setCurrentPage(topAlert.targetPage!)}
                className="text-[11px] font-bold text-[#b8912d] hover:text-[#997321] hover:underline"
              >
                {topAlert.actionText || 'فحص'}
              </button>
            )}
            <button
              onClick={() => setDismissAlert(true)}
              className="text-slate-400 hover:text-slate-600 text-xs px-1"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* 3. Hero Card: Total Sales with Luxury Store Background & Real Comparison */}
      <div className="relative overflow-hidden rounded-2xl bg-neutral-900 text-white shadow-md border border-neutral-800">
        {/* Background Image with Dark Vignette & Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={STORE_INTERIOR_IMG}
            alt="متجر ستايل"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-neutral-950 via-neutral-900/90 to-neutral-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col justify-between min-h-[148px]">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium mb-1">
                <span>إجمالي المبيعات (Net Sales)</span>
              </div>
              <div className="text-[10px] font-mono text-neutral-400 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                السابقة: EGP {metrics.sales.total.previous.toLocaleString()}
              </div>
            </div>

            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xs font-semibold text-neutral-400">EGP</span>
              <span className="text-3xl font-extrabold tracking-tight font-sans tabular-nums text-white">
                {metrics.sales.total.current.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
              <span className="font-bold tabular-nums">%{Math.abs(metrics.sales.total.percentChange)}</span>
              <IconArrowUpRight className="w-3.5 h-3.5" />
              <span className="text-neutral-300">مقارنة بالفترة السابقة (+EGP {metrics.sales.total.difference.toLocaleString()})</span>
            </div>

            <span className="text-[11px] text-amber-300 font-semibold hidden sm:inline">
              هامش الربح: %{metrics.financial.grossMarginPercent}
            </span>
          </div>
        </div>
      </div>

      {/* 4. Four KPI Cards (2x2 on Mobile, 4 Cols on Desktop) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {/* Net Profit */}
        <KPICard
          label="صافي الربح"
          value={metrics.financial.netProfit}
          currency="EGP"
          icon={<IconPercent className="w-3.5 h-3.5" />}
          iconBg="bg-amber-50 text-[#b8912d]"
          trend={{
            value: metrics.financial.comparison.netProfit.percentChange,
            direction: 'up'
          }}
          secondaryDetail={`هامش %${metrics.financial.netMarginPercent}`}
        />

        {/* Invoices Count */}
        <KPICard
          label="عدد الفواتير"
          value={metrics.sales.invoices.current}
          unit="فاتورة"
          icon={<IconShoppingCart className="w-3.5 h-3.5" />}
          iconBg="bg-blue-50 text-blue-600"
          trend={{
            value: metrics.sales.invoices.percentChange,
            direction: 'up'
          }}
          secondaryDetail="طلب ناجح"
        />

        {/* Average Invoice */}
        <KPICard
          label="متوسط الفاتورة"
          value={metrics.sales.averageTicket.current}
          currency="EGP"
          icon={<IconBarChart className="w-3.5 h-3.5" />}
          iconBg="bg-emerald-50 text-emerald-600"
          trend={{
            value: metrics.sales.averageTicket.percentChange,
            direction: 'up'
          }}
          secondaryDetail={`السابق ${metrics.sales.averageTicket.previous}`}
        />

        {/* Returns */}
        <KPICard
          label="المرتجعات"
          value={metrics.sales.returns.current}
          currency="EGP"
          icon={<IconRotateCcw className="w-3.5 h-3.5" />}
          iconBg="bg-rose-50 text-rose-500"
          trend={{
            value: metrics.sales.returns.percentChange,
            direction: 'up',
            invertColors: true
          }}
          secondaryDetail="نسبة %2.5"
        />
      </div>


      {/* 5. Sales Line Chart: 7 Days Trend */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-xs font-bold text-slate-900">مسار المبيعات الزمني</h3>
            <p className="text-[10px] text-slate-400">مقارنة بالأسبوع السابق</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-neutral-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-md tabular-nums">
              الذروة: EGP 48,200
            </div>
          </div>
        </div>

        <div className="h-44 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4af37" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#d4af37" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: '#64748B' }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10, fill: '#94A3B8' }}
                tickFormatter={(val) => (val === 0 ? '0' : `${val / 1000}K`)}
                domain={[0, 70000]}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-neutral-900 text-white text-[11px] px-2.5 py-1.5 rounded-lg shadow-lg">
                        <span className="text-neutral-400">{payload[0].payload.day}: </span>
                        <span className="font-bold text-[#d4af37] font-mono tabular-nums">
                          EGP {payload[0].value?.toLocaleString()}
                        </span>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#121316"
                strokeWidth={2.5}
                fill="url(#salesGrad)"
                dot={{ r: 3, fill: '#d4af37', stroke: '#121316', strokeWidth: 1.5 }}
                activeDot={{ r: 5, fill: '#d4af37', stroke: '#fff', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 6. Quick Financial & Cash Safe Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {/* Cash Safe & Shifts Audit */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#b8912d] flex items-center justify-center">
                <IconVault className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">موقف الخزينة الحالي</h4>
                <p className="text-[10px] text-slate-400">الرصيد: EGP {metrics.safeRecord.currentBalance.toLocaleString()}</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage('safe')}
              className="text-[11px] font-semibold text-[#b8912d] hover:underline"
            >
              التفاصيل &gt;
            </button>
          </div>

          <div className="p-2.5 bg-slate-50 rounded-xl space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">المتوقع دفترياً:</span>
              <span className="font-bold text-slate-800 font-mono">EGP {metrics.safeRecord.expectedBalance.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">الموجود الفعلي:</span>
              <span className="font-bold text-slate-800 font-mono">EGP {metrics.safeRecord.actualBalance.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-1 font-bold">
              <span className="text-slate-700">فرق التسوية (عجز):</span>
              <span className="text-rose-600 font-mono">{metrics.safeRecord.discrepancy} EGP</span>
            </div>
          </div>
        </div>

        {/* Quick Inventory Health Summary */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <IconInventory className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">مؤشرات صحة المخزون</h4>
                <p className="text-[10px] text-slate-400">1,284 صنف مسجل في الكتالوج</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage('inventory')}
              className="text-[11px] font-semibold text-[#b8912d] hover:underline"
            >
              إدارة النواقص &gt;
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <span className="text-[10px] block text-emerald-600">طبيعي</span>
              <span className="font-bold font-mono text-sm">980</span>
            </div>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <span className="text-[10px] block text-amber-600">منخفض</span>
              <span className="font-bold font-mono text-sm">186</span>
            </div>
            <div className="p-2 rounded-xl bg-rose-50 text-rose-800">
              <span className="text-[10px] block text-rose-600">نفذ</span>
              <span className="font-bold font-mono text-sm">24</span>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Branch Performance Summary Section with Score */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-xs font-bold text-slate-900">أداء الفروع الرائدة</h3>
            <p className="text-[10px] text-slate-400">تقييم شامل للمبيعات والأرباح ونسب الإرجاع</p>
          </div>
          <button
            onClick={() => setCurrentPage('branches')}
            className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <span>عرض كل الفروع</span>
            <IconChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Top Branch Card (Shebin) */}
        {metrics.branches[0] && (
          <div
            onClick={() => {
              setSelectedBranch(metrics.branches[0].id);
              setCurrentPage('branches');
            }}
            className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={metrics.branches[0].image || STORE_INTERIOR_IMG}
                  alt={metrics.branches[0].name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1 right-1 w-4 h-4 bg-amber-400 text-slate-900 text-[10px] font-extrabold rounded flex items-center justify-center shadow-xs">
                  {metrics.branches[0].rank}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-bold text-slate-900">{metrics.branches[0].name}</p>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-[#7b581c]">
                    درجة التميز: {metrics.branches[0].score.overall}/100
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-[10px] font-medium text-slate-400">EGP</span>
                  <span className="text-sm font-extrabold text-slate-900 tabular-nums">
                    {metrics.branches[0].totalSales.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal mr-2">
                    ({metrics.branches[0].invoicesCount} فاتورة · {metrics.branches[0].averageInvoiceValue} متوسط)
                  </span>
                </div>
              </div>
            </div>

            <div className="w-24 text-left">
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-[#b8912d] rounded-full"
                  style={{ width: `${Math.min(100, (metrics.branches[0].totalSales / 60000) * 100)}%` }}
                />
              </div>
              <p className="text-[10px] font-bold text-emerald-600 mt-1">
                ↑ %{metrics.branches[0].salesGrowthPercent}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
