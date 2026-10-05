import React, { useState } from 'react';
import {
  IconInventory,
  IconArrowLeft
} from '../components/icons/StyleIcons';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useStore } from '../store/useStore';
import { GlobalFilterBar } from '../components/common/GlobalFilterBar';
import { StockTransfer } from '../types';

export const InventoryPage: React.FC = () => {
  const { backupData, getMetrics } = useStore();
  const metrics = getMetrics();
  const [activeTab, setActiveTab] = useState<'low' | 'reorder' | 'transfers' | 'stagnant'>('low');

  // Status donut data
  const inventoryData = [
    { name: 'متوفر طبيعي', value: 980, color: '#10B981' },
    { name: 'مخزون منخفض', value: 186, color: '#F59E0B' },
    { name: 'نفذ المخزون', value: 24, color: '#EF4444' },
    { name: 'راكد أكثر من 60 يوم', value: 58, color: '#6366F1' }
  ];

  const lowStockItems = backupData.products.filter(
    (p) => p.status === 'low' || p.stockQuantity <= p.minStockAlert
  );

  const reorderSuggestions = backupData.products
    .filter((p) => p.suggestedReorder > 0)
    .sort((a, b) => a.daysOfInventoryLeft - b.daysOfInventoryLeft);

  const stagnantItems = backupData.products.filter(
    (p) => p.status === 'stagnant' || p.daysInStock >= 60
  );

  return (
    <div className="space-y-3.5 pb-6">
      {/* Global Filter Bar */}
      <GlobalFilterBar />

      {/* 1. Inventory Valuation & Health KPI Strip (Read-Only) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
          <span className="text-[10px] text-slate-400 block mb-0.5">القيمة بسعر البيع (تقديري)</span>
          <span className="text-xs font-black text-slate-900 font-mono">
            EGP {metrics.inventory.totalRetailValue.toLocaleString()}
          </span>
        </div>
        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
          <span className="text-[10px] text-slate-400 block mb-0.5">القيمة بسعر التكلفة</span>
          <span className="text-xs font-black text-slate-700 font-mono">
            EGP {metrics.inventory.totalCostValue.toLocaleString()}
          </span>
        </div>
        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
          <span className="text-[10px] text-slate-400 block mb-0.5">معدل دوران المخزون</span>
          <span className="text-xs font-black text-[#b8912d] font-mono">
            {metrics.inventory.stockTurnoverRatio}x دورة/سنة
          </span>
        </div>
        <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
          <span className="text-[10px] text-slate-400 block mb-0.5">إجمالي الوحدات الفعلية</span>
          <span className="text-xs font-black text-slate-900 font-mono">
            {metrics.inventory.totalUnits.toLocaleString()} قطعة
          </span>
        </div>
      </div>

      {/* 2. Donut Chart Overview Card */}
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
                إجمالي الأصناف
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 pr-3 space-y-1.5 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-slate-600 text-[11px]">متوفر طبيعي</span>
              </div>
              <span className="font-bold text-slate-800 text-[11px] tabular-nums font-mono">980</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                <span className="text-slate-600 text-[11px]">مخزون منخفض</span>
              </div>
              <span className="font-bold text-slate-800 text-[11px] tabular-nums font-mono">186</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                <span className="text-slate-600 text-[11px]">نفذ المخزون</span>
              </div>
              <span className="font-bold text-slate-800 text-[11px] tabular-nums font-mono">24</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" />
                <span className="text-slate-600 text-[11px]">راكد أكثر من 60 يوم</span>
              </div>
              <span className="font-bold text-slate-800 text-[11px] tabular-nums font-mono">58</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Filter Tabs: تنبيهات النقص / مقترحات إعادة الطلب / تحويلات الفروع / الراكد */}
      <div className="flex items-center p-1 bg-slate-200/70 rounded-xl overflow-x-auto text-nowrap">
        <button
          onClick={() => setActiveTab('low')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'low'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          النواقص الحرجة ({lowStockItems.length})
        </button>
        <button
          onClick={() => setActiveTab('reorder')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'reorder'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          حسابات الاحتياج ({reorderSuggestions.length})
        </button>
        <button
          onClick={() => setActiveTab('transfers')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'transfers'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          سجل تحويلات الفروع ({backupData.transfers.length})
        </button>
        <button
          onClick={() => setActiveTab('stagnant')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'stagnant'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          الراكد ({stagnantItems.length})
        </button>
      </div>

      {/* Tab 1: Critical Low Stock Items (Read-Only) */}
      {activeTab === 'low' && (
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
                    <IconInventory className="w-5 h-5 text-slate-400" />
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-500 mt-0.5">
                    <span>الرصيد المتاح: {item.stockQuantity} فقط</span>
                    <span className="text-slate-400 font-normal">· (حد الأمان {item.minStockAlert})</span>
                  </div>
                </div>
              </div>

              <div className="text-left font-mono text-xs">
                <span className="text-[10px] text-slate-400 block">التوزيع</span>
                <span className="font-bold text-slate-700">
                  شبين ({item.branchStock.b1 || 0}) · بنها ({item.branchStock.b2 || 0})
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Reorder Intelligence (Purely Analytical Calculations) */}
      {activeTab === 'reorder' && (
        <div className="space-y-2.5">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
            تحليل سرعة المبيعات اليومية (Daily Sales Velocity) ومعدل نفاد المخزون المتوقع للأيام القادمة.
          </div>

          {reorderSuggestions.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{prod.name}</h4>
                  <p className="text-[10px] text-slate-500 font-mono">
                    {prod.sku} · معدل الاستهلاك المسجل: {prod.dailyVelocity} قطعة/يوم
                  </p>
                </div>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                  يكفي {prod.daysOfInventoryLeft} أيام
                </span>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>
                  الكمية المقترحة تحليلياً لتغطية شهر: <strong className="text-slate-900 font-mono font-bold">{prod.suggestedReorder} قطعة</strong>
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  تكلفة تقديرية: EGP {(prod.suggestedReorder * prod.cost).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Recorded Stock Transfers between Branches (Strictly Read-Only Log) */}
      {activeTab === 'transfers' && (
        <div className="space-y-2.5">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
            <span>سجل أذون التحويلات المخزنية المقروءة من قاعدة بيانات النظام الأصلي</span>
            <span className="font-mono font-bold text-slate-800">{backupData.transfers.length} تحويلات مسجلة</span>
          </div>

          {backupData.transfers.map((trf) => (
            <div
              key={trf.id}
              className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <span>{trf.fromBranchName}</span>
                  <IconArrowLeft className="w-3.5 h-3.5 text-slate-400" />
                  <span>{trf.toBranchName}</span>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    trf.status === 'in_transit'
                      ? 'bg-amber-100 text-amber-800'
                      : trf.status === 'pending'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {trf.status === 'in_transit'
                    ? 'في الطريق (In Transit)'
                    : trf.status === 'pending'
                    ? 'قيد الانتظار (Pending)'
                    : 'تم الاستلام (Received)'}
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-600 text-[11px]">
                <span>الصنف: <strong className="text-slate-800">{trf.productName}</strong> ({trf.quantity} قطعة)</span>
                <span className="font-mono text-slate-400">{trf.requestDate}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Stagnant Items (> 60 Days) */}
      {activeTab === 'stagnant' && (
        <div className="space-y-2">
          {stagnantItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between text-xs"
            >
              <div>
                <h4 className="font-bold text-slate-900">{item.name}</h4>
                <p className="text-[10px] text-slate-500 font-mono">
                  {item.sku} · رصيد المخزون: {item.stockQuantity} قطعة · راكد منذ {item.daysInStock} يوماً
                </p>
              </div>
              <div className="text-left font-mono">
                <span className="text-xs font-bold text-slate-900 block">EGP {item.price}</span>
                <span className="text-[10px] text-rose-500 font-semibold">رأس مال مجمد</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
