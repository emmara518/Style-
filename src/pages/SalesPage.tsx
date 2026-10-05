import React from 'react';
import {
  Receipt,
  ShoppingCart,
  Percent,
  RotateCcw,
  Tag,
  ArrowUpRight
} from 'lucide-react';
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
import { DateFilter } from '../components/common/DateFilter';
import { PeriodFilter } from '../types';

export const SalesPage: React.FC = () => {
  const { getMetrics, selectedPeriod, setSelectedPeriod } = useStore();
  const metrics = getMetrics();

  const periods: { id: PeriodFilter; label: string }[] = [
    { id: 'daily', label: 'يومي' },
    { id: 'weekly', label: 'أسبوعي' },
    { id: 'monthly', label: 'شهري' }
  ];

  // Bar chart data (days in order)
  const barChartData = [...metrics.salesHistory].reverse();

  // Donut chart data for payment methods
  const paymentData = metrics.paymentMethods.map((p) => ({
    name: p.label,
    value: p.amount,
    percentage: p.percentage,
    color: p.color
  }));

  return (
    <div className="space-y-3.5 pb-6">
      {/* Date Filter */}
      <DateFilter />

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

      {/* 1. Total Sales Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between">
          <div className="w-9 h-9 rounded-xl bg-[#f5eedb] flex items-center justify-center text-[#997321]">
            <Receipt className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div className="text-left">
            <span className="text-[11px] font-medium text-slate-500 block">إجمالي المبيعات</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xs font-bold text-slate-400">EGP</span>
              <span className="text-2xl font-black text-slate-900 tabular-nums">
                {metrics.totalSales.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-end gap-1 text-[11px] font-bold text-emerald-600 mt-0.5">
              <span>↑</span>
              <span className="tabular-nums">%{metrics.salesGrowthPercent}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sales Bar Chart */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-center gap-1.5 mb-2 text-xs font-medium text-slate-600">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span>المبيعات</span>
        </div>

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
      </div>

      {/* 3. Stats Rows List */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3.5">
        {/* Invoices */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <ShoppingCart className="w-4 h-4 text-slate-400" />
            <span>عدد الفواتير</span>
          </div>
          <span className="font-bold text-slate-900 text-sm tabular-nums">
            {metrics.invoicesCount.toLocaleString()}
          </span>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Average Invoice */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <Percent className="w-4 h-4 text-emerald-500" />
            <span>متوسط الفاتورة</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-slate-900 text-sm tabular-nums">
            <span className="text-[10px] text-slate-400 font-normal">EGP</span>
            <span>{metrics.averageInvoiceValue.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Returns */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <RotateCcw className="w-4 h-4 text-rose-500" />
            <span>المرتجعات</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-slate-900 text-sm tabular-nums">
            <span className="text-[10px] text-slate-400 font-normal">EGP</span>
            <span>{metrics.returnsAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Discounts */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <Tag className="w-4 h-4 text-amber-500" />
            <span>الخصومات</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-slate-900 text-sm tabular-nums">
            <span className="text-[10px] text-slate-400 font-normal">EGP</span>
            <span>{metrics.discountsAmount.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* 4. Payment Methods Donut Chart Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <h3 className="text-xs font-bold text-slate-800 mb-3 text-right">طرق الدفع</h3>

        <div className="flex items-center justify-between">
          {/* Donut Chart with Center Text */}
          <div className="relative w-36 h-36 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={paymentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={62}
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
              <span className="text-[9px] font-semibold text-slate-400 leading-none">EGP</span>
              <span className="text-xs font-black text-slate-900 tabular-nums leading-tight mt-0.5">
                {metrics.totalSales.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Legend and Percentages */}
          <div className="flex-1 pr-4 space-y-2">
            {metrics.paymentMethods.map((pm) => (
              <div key={pm.type} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: pm.color }}
                  />
                  <span className="text-slate-600 font-medium text-[11px]">{pm.label}</span>
                </div>
                <span className="font-bold text-slate-800 text-[11px] tabular-nums">
                  %{pm.percentage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
