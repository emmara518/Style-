import React, { useState } from 'react';
import {
  IconSales,
  IconShoppingCart,
  IconPercent,
  IconRotateCcw,
  IconTag,
  IconZap
} from '../components/icons/StyleIcons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { useStore } from '../store/useStore';
import { GlobalFilterBar } from '../components/common/GlobalFilterBar';
import { PeriodFilter } from '../types';

export const SalesPage: React.FC = () => {
  const { getMetrics, selectedPeriod, setSelectedPeriod } = useStore();
  const metrics = getMetrics();
  const [activeView, setActiveView] = useState<'daily' | 'hourly'>('daily');

  const periods: { id: PeriodFilter; label: string }[] = [
    { id: 'daily', label: 'يومي' },
    { id: 'weekly', label: 'أسبوعي' },
    { id: 'monthly', label: 'شهري' }
  ];

  // Bar chart data (days in order)
  const barChartData = [...metrics.salesHistory].reverse();

  // Hourly sales data
  const hourlyData = metrics.hourlySales;

  // Donut chart data for payment methods
  const paymentData = metrics.paymentMethods.map((p) => ({
    name: p.label,
    value: p.amount,
    percentage: p.percentage,
    color: p.color
  }));

  // Categories breakdown
  const categorySales = [
    { name: 'تيشيرتات', revenue: 64200, percent: 38 },
    { name: 'بناطيل وجينز', revenue: 48600, percent: 29 },
    { name: 'قمصان كلاسيك', revenue: 31200, percent: 19 },
    { name: 'جاكيتات وشورتات', revenue: 23400, percent: 14 }
  ];

  return (
    <div className="space-y-3.5 pb-6">
      {/* Unified Global Filter */}
      <GlobalFilterBar />

      {/* Period Segmented Filter Switch */}
      <div className="flex items-center p-1 bg-slate-200/70 rounded-xl">
        {periods.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedPeriod(p.id)}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              selectedPeriod === p.id
                ? 'bg-[#b8912d] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* 1. Financial Sales Overview Card (Gross vs Net Sales) */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f5eedb] flex items-center justify-center text-[#997321]">
              <IconSales className="w-5 h-5" strokeWidth={1.8} />
            </div>
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">إجمالي المبيعات الصافية</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xs font-bold text-slate-400">EGP</span>
                <span className="text-2xl font-black text-slate-900 tabular-nums">
                  {metrics.sales.total.current.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-center justify-end gap-1 text-xs font-bold text-emerald-600">
              <span>↑</span>
              <span className="tabular-nums">%{metrics.sales.total.percentChange}</span>
            </div>
            <span className="text-[10px] text-slate-400">مقارنة بالفترة السابقة</span>
          </div>
        </div>

        {/* Financial Flow Line */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center text-xs">
          <div className="p-2 bg-slate-50 rounded-xl">
            <span className="text-[10px] text-slate-400 block">إجمالي المبيعات (Gross)</span>
            <span className="font-bold text-slate-800 font-mono">EGP {metrics.financial.grossSales.toLocaleString()}</span>
          </div>
          <div className="p-2 bg-slate-50 rounded-xl">
            <span className="text-[10px] text-slate-400 block">الخصومات الممنوحة</span>
            <span className="font-bold text-amber-600 font-mono">-EGP {metrics.financial.discounts.toLocaleString()}</span>
          </div>
          <div className="p-2 bg-slate-50 rounded-xl">
            <span className="text-[10px] text-slate-400 block">المرتجعات</span>
            <span className="font-bold text-rose-600 font-mono">-EGP {metrics.financial.returns.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* 2. Charts Tabs: Sales by Day vs Best Selling Hours Heatmap */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('daily')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                activeView === 'daily'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              المبيعات اليومية
            </button>
            <button
              onClick={() => setActiveView('hourly')}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                activeView === 'hourly'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <IconZap className="w-3.5 h-3.5 text-amber-400" />
              <span>أفضل ساعات البيع (Heatmap)</span>
            </button>
          </div>

          <span className="text-[10px] font-mono text-slate-400">
            {activeView === 'hourly' ? 'من 10 ص إلى 11 م' : 'أسبوعي'}
          </span>
        </div>

        {activeView === 'daily' ? (
          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
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
                <Bar
                  dataKey="sales"
                  fill="#c59b4c"
                  radius={[4, 4, 0, 0]}
                  barSize={18}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hourlyData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <XAxis
                    dataKey="hourLabel"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 9, fill: '#64748B' }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 10, fill: '#94A3B8' }}
                    tickFormatter={(val) => `${val / 1000}K`}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-neutral-900 text-white text-[11px] px-2.5 py-1.5 rounded-lg shadow-lg text-right">
                            <p className="font-bold text-[#d4af37]">{payload[0].payload.hourLabel}</p>
                            <p className="font-mono">المبيعات: EGP {payload[0].value?.toLocaleString()}</p>
                            <p className="text-slate-400">{payload[0].payload.invoices} فاتورة مسجلة</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar
                    dataKey="sales"
                    fill="#b8912d"
                    radius={[3, 3, 0, 0]}
                    barSize={14}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/60 text-[11px] text-amber-900 flex items-center justify-between">
              <span>ذروة النشاط البيعي تتركز بين الساعة 06:00 م و 09:00 م بنسبة %48 من الإيراد اليومي.</span>
              <span className="font-bold text-[#7b581c] shrink-0 font-mono">ساعات الذروة</span>
            </div>
          </div>
        )}
      </div>

      {/* 3. Stats Rows List with Detailed Comparison */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3.5">
        <h4 className="text-xs font-bold text-slate-800">مؤشرات الأداء البيعي</h4>

        {/* Invoices */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <IconShoppingCart className="w-4 h-4 text-slate-400" />
            <span>عدد الفواتير المنفذة</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-emerald-600 font-bold">↑ %{metrics.sales.invoices.percentChange}</span>
            <span className="font-bold text-slate-900 text-sm tabular-nums">
              {metrics.sales.invoices.current.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Average Invoice */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <IconPercent className="w-4 h-4 text-emerald-500" />
            <span>متوسط قيمة الفاتورة</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-emerald-600 font-bold">↑ %{metrics.sales.averageTicket.percentChange}</span>
            <div className="flex items-baseline gap-1 font-bold text-slate-900 text-sm tabular-nums">
              <span className="text-[10px] text-slate-400 font-normal">EGP</span>
              <span>{metrics.sales.averageTicket.current.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Returns */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <IconRotateCcw className="w-4 h-4 text-rose-500" />
            <span>قيمة المرتجعات</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-rose-500 font-bold">↑ %{metrics.sales.returns.percentChange}</span>
            <div className="flex items-baseline gap-1 font-bold text-slate-900 text-sm tabular-nums">
              <span className="text-[10px] text-slate-400 font-normal">EGP</span>
              <span>{metrics.sales.returns.current.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Discounts */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <IconTag className="w-4 h-4 text-amber-500" />
            <span>إجمالي الخصومات</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400">نسبة %1.9</span>
            <div className="flex items-baseline gap-1 font-bold text-slate-900 text-sm tabular-nums">
              <span className="text-[10px] text-slate-400 font-normal">EGP</span>
              <span>{metrics.sales.discounts.current.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Payment Methods & Categories Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {/* Payment Methods */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <h3 className="text-xs font-bold text-slate-800 mb-3 text-right">طرق الدفع</h3>

          <div className="flex items-center justify-between">
            <div className="relative w-32 h-32 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={paymentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={38}
                    outerRadius={56}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {paymentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[8px] font-semibold text-slate-400 leading-none">EGP</span>
                <span className="text-xs font-black text-slate-900 tabular-nums leading-tight mt-0.5">
                  167.4K
                </span>
              </div>
            </div>

            <div className="flex-1 pr-3 space-y-1.5">
              {metrics.paymentMethods.map((pm) => (
                <div key={pm.type} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: pm.color }}
                    />
                    <span className="text-slate-600 text-[11px]">{pm.label}</span>
                  </div>
                  <span className="font-bold text-slate-800 text-[11px] tabular-nums">
                    %{pm.percentage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Contribution */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <h3 className="text-xs font-bold text-slate-800 mb-3 text-right">المبيعات حسب التصنيف</h3>

          <div className="space-y-2.5">
            {categorySales.map((cat) => (
              <div key={cat.name} className="text-xs">
                <div className="flex justify-between font-medium mb-1">
                  <span className="text-slate-700">{cat.name}</span>
                  <span className="font-bold text-slate-900 font-mono">EGP {cat.revenue.toLocaleString()}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-[#b8912d] rounded-full"
                    style={{ width: `${cat.percent * 2.5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
