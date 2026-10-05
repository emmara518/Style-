import React, { useState } from 'react';
import { ChevronLeft, Package, AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useStore } from '../store/useStore';

export const InventoryPage: React.FC = () => {
  const { backupData } = useStore();
  const [activeTab, setActiveTab] = useState<'low' | 'out_of_stock' | 'stagnant'>('low');
  const [showAllModal, setShowAllModal] = useState(false);

  // Status donut data
  const inventoryData = [
    { name: 'متوفر طبيعي', value: 980, color: '#10B981' },
    { name: 'مخزون منخفض', value: 186, color: '#F59E0B' },
    { name: 'نفذ المخزون', value: 24, color: '#EF4444' },
    { name: 'راكد أكثر من 60 يوم', value: 58, color: '#6366F1' }
  ];

  const lowStockItems = backupData.products.filter((p) => p.status === 'low');

  return (
    <div className="space-y-3.5 pb-6">
      {/* 1. Inventory Donut Chart Overview Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between">
          {/* Donut Chart with Center Total */}
          <div className="relative w-36 h-36 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={inventoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={44}
                  outerRadius={62}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {inventoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-base font-black text-slate-900 tabular-nums leading-none">
                1,284
              </span>
              <span className="text-[10px] font-medium text-slate-500 mt-1 leading-none">
                إجمالي المنتجات
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 pr-3 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-600 text-[11px]">متوفر طبيعي</span>
              </div>
              <span className="font-bold text-slate-800 text-[11px] tabular-nums">980</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-slate-600 text-[11px]">مخزون منخفض</span>
              </div>
              <span className="font-bold text-slate-800 text-[11px] tabular-nums">186</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-slate-600 text-[11px]">نفذ المخزون</span>
              </div>
              <span className="font-bold text-slate-800 text-[11px] tabular-nums">24</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <span className="text-slate-600 text-[11px]">راكد أكثر من 60 يوم</span>
              </div>
              <span className="font-bold text-slate-800 text-[11px] tabular-nums">58</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Filter Tabs: راكد / نفذ / منخفض */}
      <div className="flex items-center p-1 bg-slate-200/70 rounded-xl">
        <button
          onClick={() => setActiveTab('stagnant')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'stagnant'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          راكد
        </button>
        <button
          onClick={() => setActiveTab('out_of_stock')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'out_of_stock'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          نفذ
        </button>
        <button
          onClick={() => setActiveTab('low')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'low'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          منخفض
        </button>
      </div>

      {/* 3. Items with Alert Warning */}
      <div className="space-y-2">
        {lowStockItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0 flex items-center justify-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Package className="w-5 h-5 text-slate-400" />
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-500 mt-0.5">
                  <span>متوفر {item.stockQuantity} فقط</span>
                </div>
              </div>
            </div>

            <ChevronLeft className="w-4 h-4 text-slate-300" />
          </div>
        ))}

        {/* View All Inventory Button */}
        <button
          onClick={() => setShowAllModal(true)}
          className="w-full py-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-center gap-1 transition-colors shadow-xs"
        >
          <span>عرض كل المخزون</span>
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* All Inventory Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <h3 className="text-sm font-bold text-slate-900">سجل جرد المخزون العام</h3>
              <button
                onClick={() => setShowAllModal(false)}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                إغلاق
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {backupData.products.map((p) => (
                <div key={p.id} className="p-2.5 border border-slate-100 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-800">{p.name}</p>
                    <p className="text-[10px] text-slate-400">{p.sku} | تنبيه الحد: {p.minStockAlert}</p>
                  </div>
                  <div className="text-left font-mono">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        p.stockQuantity <= 5
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      {p.stockQuantity} قطعة
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
