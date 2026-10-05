import React, { useState } from 'react';
import { IconProducts } from '../components/icons/StyleIcons';
import { useStore } from '../store/useStore';
import { GlobalFilterBar } from '../components/common/GlobalFilterBar';
import { Product } from '../types';

export const ProductsPage: React.FC = () => {
  const { backupData, getMetrics } = useStore();
  const metrics = getMetrics();
  const [activeTab, setActiveTab] = useState<
    'top_selling' | 'best_revenue' | 'most_profitable' | 'abc' | 'stagnant'
  >('top_selling');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sorting products based on active tab
  let displayProducts = [...backupData.products];
  if (activeTab === 'top_selling') {
    displayProducts.sort((a, b) => b.soldQuantity - a.soldQuantity);
  } else if (activeTab === 'best_revenue') {
    displayProducts.sort((a, b) => b.totalRevenue - a.totalRevenue);
  } else if (activeTab === 'most_profitable') {
    displayProducts.sort((a, b) => b.totalProfit - a.totalProfit);
  } else if (activeTab === 'stagnant') {
    displayProducts = displayProducts.filter((p) => p.status === 'stagnant' || p.daysInStock >= 60);
  }

  const sizes = [
    { size: 'L', percent: 28 },
    { size: 'XL', percent: 24 },
    { size: 'M', percent: 20 },
    { size: 'XXL', percent: 15 }
  ];

  return (
    <div className="space-y-3.5 pb-6">
      {/* Unified Filter */}
      <GlobalFilterBar />

      {/* 1. Filter Tabs Bar */}
      <div className="flex items-center p-1 bg-slate-200/70 rounded-xl overflow-x-auto text-nowrap">
        <button
          onClick={() => setActiveTab('top_selling')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'top_selling'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          الأكثر مبيعاً
        </button>
        <button
          onClick={() => setActiveTab('best_revenue')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'best_revenue'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          الأعلى إيراداً
        </button>
        <button
          onClick={() => setActiveTab('most_profitable')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'most_profitable'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          الأعلى ربحية
        </button>
        <button
          onClick={() => setActiveTab('abc')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'abc'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          تصنيف ABC
        </button>
        <button
          onClick={() => setActiveTab('stagnant')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'stagnant'
              ? 'bg-[#b8912d] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          الراكد (&gt; 60 يوم)
        </button>
      </div>

      {/* 2. ABC Classification Banner (if active) */}
      {activeTab === 'abc' ? (
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <h3 className="text-xs font-bold text-slate-800 mb-2">منهجية تحليل ABC لمنتجات ستايل</h3>
            <p className="text-[11px] text-slate-500 mb-3">
              تصنيف المنتجات حسب مساهمتها في الإيراد الإجمالي لتحديد الأولويات الاستثمارية والتخزينية
            </p>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/70">
                <span className="font-extrabold text-emerald-800 text-sm block">فئة A (الأهم)</span>
                <span className="text-[10px] text-emerald-600 block mt-0.5">70% من الإيرادات</span>
                <span className="font-mono text-xs font-bold text-slate-800 mt-1 block">4 أصناف أساسية</span>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/70">
                <span className="font-extrabold text-amber-800 text-sm block">فئة B (متوسطة)</span>
                <span className="text-[10px] text-amber-600 block mt-0.5">20% من الإيرادات</span>
                <span className="font-mono text-xs font-bold text-slate-800 mt-1 block">5 أصناف داعمة</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-extrabold text-slate-700 text-sm block">فئة C (منخفضة)</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">10% من الإيرادات</span>
                <span className="font-mono text-xs font-bold text-slate-800 mt-1 block">3 أصناف وإكسسوارات</span>
              </div>
            </div>
          </div>

          {/* List items by ABC */}
          <div className="space-y-2">
            {backupData.products.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between cursor-pointer hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-lg font-black text-xs flex items-center justify-center ${
                      p.abcClass === 'A'
                        ? 'bg-emerald-100 text-emerald-800'
                        : p.abcClass === 'B'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {p.abcClass}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{p.name}</h4>
                    <p className="text-[10px] text-slate-400">
                      مبيعات: {p.soldQuantity} قطعة · إيراد: EGP {p.totalRevenue.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="text-left font-mono">
                  <span className="text-xs font-bold text-slate-900 block">EGP {p.price}</span>
                  <span className="text-[10px] text-slate-400">هامش %{p.profitMargin}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Regular Products List */
        <div className="space-y-2">
          {displayProducts.slice(0, 7).map((product, idx) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between cursor-pointer hover:border-slate-300 transition-colors"
            >
              {/* Product photo & info */}
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
                    <IconProducts className="w-5 h-5 text-slate-400" />
                  )}
                  <span className="absolute top-1 right-1 w-4 h-4 bg-amber-400 text-slate-900 text-[10px] font-extrabold rounded flex items-center justify-center shadow-xs">
                    {idx + 1}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-slate-900">{product.name}</h4>
                    <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-slate-100 text-slate-600">
                      {product.sku}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500 font-medium tabular-nums">
                    <span>{product.soldQuantity} قطعة</span>
                    <span>·</span>
                    <span className="text-slate-800 font-bold">EGP {product.totalRevenue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Stock status indicator */}
              <div className="text-left font-mono text-xs">
                <span className="font-bold text-slate-900 block">EGP {product.price}</span>
                <span
                  className={`text-[10px] font-semibold ${
                    product.stockQuantity <= product.minStockAlert
                      ? 'text-rose-500'
                      : 'text-slate-400'
                  }`}
                >
                  مخزون: {product.stockQuantity}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. Most Sold Sizes Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <h3 className="text-xs font-bold text-slate-800 mb-3 text-right">المقاسات الأكثر مبيعاً في تشكيلة الملابس</h3>

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

      {/* Deep Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-2xl border border-slate-200 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                  {selectedProduct.image && (
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{selectedProduct.name}</h3>
                  <p className="text-[11px] text-slate-500 font-mono">{selectedProduct.sku} · {selectedProduct.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-xs text-slate-400 hover:text-slate-600 p-1"
              >
                إغلاق
              </button>
            </div>

            {/* Financials for product */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 bg-slate-50 rounded-xl">
                <span className="text-[10px] text-slate-400 block">سعر البيع</span>
                <span className="font-bold text-slate-900 font-mono">EGP {selectedProduct.price}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl">
                <span className="text-[10px] text-slate-400 block">سعر التكلفة</span>
                <span className="font-bold text-slate-700 font-mono">EGP {selectedProduct.cost}</span>
              </div>
              <div className="p-2.5 bg-emerald-50 rounded-xl">
                <span className="text-[10px] text-emerald-600 block">هامش الربح</span>
                <span className="font-bold text-emerald-800 font-mono">%{selectedProduct.profitMargin}</span>
              </div>
            </div>

            {/* Branch Stock Distribution */}
            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-800 block text-[11px]">توزيع المخزون على الفروع:</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-slate-50 rounded-xl flex justify-between">
                  <span className="text-slate-600">فرع شبين:</span>
                  <span className="font-bold font-mono text-slate-900">{selectedProduct.branchStock.b1 || 0} قطعة</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-xl flex justify-between">
                  <span className="text-slate-600">فرع بنها:</span>
                  <span className="font-bold font-mono text-slate-900">{selectedProduct.branchStock.b2 || 0} قطعة</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-xl flex justify-between">
                  <span className="text-slate-600">فرع طنطا:</span>
                  <span className="font-bold font-mono text-slate-900">{selectedProduct.branchStock.b3 || 0} قطعة</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-xl flex justify-between">
                  <span className="text-slate-600">فرع المنصورة:</span>
                  <span className="font-bold font-mono text-slate-900">{selectedProduct.branchStock.b4 || 0} قطعة</span>
                </div>
              </div>
            </div>

            {/* Reorder Recommendation */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 text-xs space-y-1">
              <div className="flex items-center justify-between font-bold text-amber-900">
                <span>توصية إعادة الطلب الذكية:</span>
                <span className="font-mono">
                  {selectedProduct.suggestedReorder > 0 ? `طلب ${selectedProduct.suggestedReorder} قطعة` : 'المخزون كافٍ'}
                </span>
              </div>
              <p className="text-[11px] text-amber-800">
                معدل الاستهلاك اليومي: {selectedProduct.dailyVelocity} قطعة/يوم · المخزون الحالي يغطي {selectedProduct.daysOfInventoryLeft} أيام تقريباً.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
