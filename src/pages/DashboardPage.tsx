import React from 'react';
import {
  TrendingUp,
  Percent,
  ShoppingCart,
  BarChart3,
  RotateCcw,
  ArrowUpRight,
  ChevronLeft
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useStore } from '../store/useStore';
import { DateFilter } from '../components/common/DateFilter';
import { STORE_INTERIOR_IMG } from '../data/mockBackupData';

export const DashboardPage: React.FC = () => {
  const { getMetrics, setCurrentPage, selectedBranchId } = useStore();
  const metrics = getMetrics();

  // Reformat chart data for RTL display (سبت -> جمعة)
  const chartData = [...metrics.salesHistory].reverse();

  return (
    <div className="space-y-3.5 pb-6">
      {/* Date Filter Bar */}
      <DateFilter />

      {/* 1. Hero Card: Total Sales with Luxury Store Background */}
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
            <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-medium mb-1">
              <span>إجمالي المبيعات</span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xs font-semibold text-neutral-400">EGP</span>
              <span className="text-3xl font-extrabold tracking-tight font-sans tabular-nums text-white">
                {metrics.totalSales.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 mt-3">
            <span>عن أمس</span>
            <span className="font-bold tabular-nums">%{metrics.salesGrowthPercent}</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* 2. Four KPI Cards (2x2 Grid) */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Net Profit */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-slate-500">صافي الربح</span>
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#b8912d] flex items-center justify-center">
              <Percent className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] font-semibold text-slate-400">EGP</span>
            <span className="text-lg font-bold text-slate-900 tabular-nums">
              {metrics.netProfit.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-[11px] font-semibold text-emerald-600">
            <span>↑</span>
            <span className="tabular-nums">%{metrics.profitGrowthPercent}</span>
          </div>
        </div>

        {/* Invoices Count */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-slate-500">عدد الفواتير</span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShoppingCart className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-slate-900 tabular-nums">
              {metrics.invoicesCount.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-[11px] font-semibold text-emerald-600">
            <span>↑</span>
            <span className="tabular-nums">%{metrics.invoicesGrowthPercent}</span>
          </div>
        </div>

        {/* Average Invoice */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-slate-500">متوسط الفاتورة</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <BarChart3 className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] font-semibold text-slate-400">EGP</span>
            <span className="text-lg font-bold text-slate-900 tabular-nums">
              {metrics.averageInvoiceValue.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-[11px] font-semibold text-emerald-600">
            <span>↑</span>
            <span className="tabular-nums">%{metrics.averageGrowthPercent}</span>
          </div>
        </div>

        {/* Returns */}
        <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-slate-500">المرتجعات</span>
            <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
              <RotateCcw className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] font-semibold text-slate-400">EGP</span>
            <span className="text-lg font-bold text-slate-900 tabular-nums">
              {metrics.returnsAmount.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-[11px] font-semibold text-rose-500">
            <span>↑</span>
            <span className="tabular-nums">%{metrics.returnsGrowthPercent}</span>
          </div>
        </div>
      </div>

      {/* 3. Sales Line Chart: 7 Days */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-slate-800">المبيعات خلال 7 أيام</h3>
          <div className="bg-neutral-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-md tabular-nums">
            EGP 48,200
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

      {/* 4. Branch Performance Summary Section */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-slate-800">أداء الفروع</h3>
          <button
            onClick={() => setCurrentPage('branches')}
            className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <span>عرض الكل</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Top Branch Card (Shebin as in image) */}
        {metrics.branches[0] && (
          <div
            onClick={() => setCurrentPage('branches')}
            className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 cursor-pointer transition-colors"
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
                <p className="text-xs font-bold text-slate-800">{metrics.branches[0].name}</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-[10px] font-medium text-slate-400">EGP</span>
                  <span className="text-sm font-extrabold text-slate-900 tabular-nums">
                    {metrics.branches[0].totalSales.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-24">
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-[#b8912d] rounded-full"
                  style={{ width: `${Math.min(100, (metrics.branches[0].totalSales / 60000) * 100)}%` }}
                />
              </div>
              <p className="text-[10px] font-medium text-emerald-600 text-left mt-1">
                ↑ %{metrics.branches[0].salesGrowthPercent}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
