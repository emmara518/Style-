import React, { useState } from 'react';
import { ChevronLeft, Shirt, Eye } from 'lucide-react';
import { useStore } from '../store/useStore';
import { DateFilter } from '../components/common/DateFilter';
import { Product } from '../types';

export const ProductsPage: React.FC = () => {
  const { backupData } = useStore();
  const [activeTab, setActiveTab] = useState<'top_selling' | 'least_selling' | 'most_profitable'>('top_selling');
  const [showAllModal, setShowAllModal] = useState(false);

  // Sorting products based on active tab
  let displayProducts = [...backupData.products];
  if (activeTab === 'top_selling') {
    displayProducts.sort((a, b) => b.soldQuantity - a.soldQuantity);
  } else if (activeTab === 'least_selling') {
    displayProducts.sort((a, b) => a.soldQuantity - b.soldQuantity);
  } else {
    displayProducts.sort((a, b) => b.profitMargin - a.profitMargin);
  }

  const topFive = displayProducts.slice(0, 5);

  const sizes = [
    { size: 'L', percent: 28 },
    { size: 'XL', percent: 24 },
    { size: 'M', percent: 20 },
    { size: 'XXL', percent: 15 }
  ];

  return (
    <div className="space-y-3.5 pb-6">
      {/* 1. Filter Tabs */}
      <div className="flex items-center p-1 bg-slate-200/70 rounded-xl">
        <button
          onClick={() => setActiveTab('most_profitable')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'most_profitable'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          الأكثر ربحية
        </button>
        <button
          onClick={() => setActiveTab('least_selling')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'least_selling'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          الأقل مبيعاً
        </button>
        <button
          onClick={() => setActiveTab('top_selling')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'top_selling'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          الأكثر مبيعاً
        </button>
      </div>

      {/* Date Filter */}
      <DateFilter />

      {/* 2. Top Products List */}
      <div className="space-y-2">
        {topFive.map((product, idx) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between"
          >
            {/* Left: Product photo & info */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0 flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Shirt className="w-5 h-5 text-slate-400" />
                )}
                <span className="absolute top-1 right-1 w-4 h-4 bg-amber-400 text-slate-900 text-[10px] font-extrabold rounded flex items-center justify-center shadow-xs">
                  {idx + 1}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900">{product.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium tabular-nums">
                  {product.soldQuantity} قطعة
                </p>
              </div>
            </div>

            {/* Right: Chevron */}
            <ChevronLeft className="w-4 h-4 text-slate-300" />
          </div>
        ))}

        {/* View All Products Button */}
        <button
          onClick={() => setShowAllModal(true)}
          className="w-full py-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-center gap-1 transition-colors shadow-xs"
        >
          <span>عرض كل المنتجات</span>
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Most Sold Sizes Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <h3 className="text-xs font-bold text-slate-800 mb-3 text-right">المقاسات الأكثر مبيعاً</h3>

        <div className="space-y-2.5">
          {sizes.map((s) => (
            <div key={s.size} className="flex items-center gap-3 text-xs">
              <span className="w-8 font-bold text-slate-700 text-left shrink-0">{s.size}</span>
              <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-[#b8912d] rounded-full"
                  style={{ width: `${s.percent * 2.5}%` }}
                />
              </div>
              <span className="w-8 font-semibold text-slate-600 text-[11px] tabular-nums text-right shrink-0">
                %{s.percent}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* All Products Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <h3 className="text-sm font-bold text-slate-900">كتالوج كل المنتجات ({backupData.products.length})</h3>
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
                    <p className="text-[10px] text-slate-400">{p.sku} | {p.category}</p>
                  </div>
                  <div className="text-left font-mono">
                    <p className="font-bold text-slate-900">EGP {p.price}</p>
                    <p className="text-[10px] text-slate-500">{p.soldQuantity} مبيعات</p>
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
