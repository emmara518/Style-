import React, { useState, useEffect } from 'react';
import {
  IconSearch,
  IconClose,
  IconProducts,
  IconBranches,
  IconStaff,
  IconArrowLeft
} from '../icons/StyleIcons';
import { useStore } from '../../store/useStore';
import { PageId } from '../../types';

export const GlobalSearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setSearchOpen,
    backupData,
    setCurrentPage,
    setSelectedBranch
  } = useStore();

  const [query, setQuery] = useState('');

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(!isSearchOpen);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setSearchOpen]);

  if (!isSearchOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  // Search Results
  const matchedProducts = cleanQuery
    ? backupData.products.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.sku.toLowerCase().includes(cleanQuery) ||
          p.category.toLowerCase().includes(cleanQuery)
      ).slice(0, 4)
    : [];

  const matchedBranches = cleanQuery
    ? backupData.branches.filter(
        (b) =>
          b.name.toLowerCase().includes(cleanQuery) ||
          b.city.toLowerCase().includes(cleanQuery) ||
          b.manager.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedEmployees = cleanQuery
    ? backupData.employees.filter(
        (e) =>
          e.name.toLowerCase().includes(cleanQuery) ||
          e.branchName.toLowerCase().includes(cleanQuery)
      ).slice(0, 3)
    : [];

  const reports = [
    { title: 'تقرير المبيعات والفواتير', page: 'reports' as PageId },
    { title: 'تقرير أداء الفروع والمقارنات', page: 'reports' as PageId },
    { title: 'تقرير حركة وجرد المخزون', page: 'inventory' as PageId },
    { title: 'تقرير الخزنة والمطابقة النقدية', page: 'safe' as PageId }
  ].filter((r) => !cleanQuery || r.title.includes(cleanQuery));

  const navigateTo = (page: PageId, branchId?: string) => {
    if (branchId) setSelectedBranch(branchId);
    setCurrentPage(page);
    setSearchOpen(false);
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200/80 bg-slate-50/50 gap-3">
          <IconSearch className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث في المنتجات، الفروع، الموظفين، التقارير..."
            autoFocus
            className="flex-1 bg-transparent border-none text-sm font-medium text-slate-800 focus:outline-none placeholder:text-slate-400 text-right"
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60"
          >
            <IconClose className="w-4 h-4" />
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-4 text-right">
          {/* Products */}
          {matchedProducts.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-2">المنتجات ({matchedProducts.length})</span>
              <div className="space-y-1.5">
                {matchedProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => navigateTo('products')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors text-right"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#b8912d] flex items-center justify-center shrink-0">
                        <IconProducts className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{p.name}</p>
                        <p className="text-[10px] text-slate-500">{p.sku} · {p.category} · مخزون: {p.stockQuantity}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-800">EGP {p.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Branches */}
          {matchedBranches.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-2">الفروع ({matchedBranches.length})</span>
              <div className="space-y-1.5">
                {matchedBranches.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => navigateTo('branches', b.id)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors text-right"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <IconBranches className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{b.name}</p>
                        <p className="text-[10px] text-slate-500">{b.city} · مدير الفرع: {b.manager}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-800">EGP {b.totalSales.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Employees */}
          {matchedEmployees.length > 0 && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-2">الموظفين ({matchedEmployees.length})</span>
              <div className="space-y-1.5">
                {matchedEmployees.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => navigateTo('employees')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors text-right"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <IconStaff className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{e.name}</p>
                        <p className="text-[10px] text-slate-500">{e.branchName} · نسبة تحقيق المستهدف: %{e.targetAchievementPercent}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-800">EGP {e.totalSales.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Shortcuts */}
          {!cleanQuery && (
            <div>
              <span className="text-[11px] font-bold text-slate-400 block mb-2">وصول سريع للتقارير والأقسام</span>
              <div className="grid grid-cols-2 gap-2">
                {reports.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => navigateTo(r.page)}
                    className="p-3 rounded-xl border border-slate-200/80 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-100 transition-colors text-right flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-slate-800">{r.title}</span>
                    <IconArrowLeft className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {cleanQuery && matchedProducts.length === 0 && matchedBranches.length === 0 && matchedEmployees.length === 0 && (
            <div className="py-12 text-center text-slate-400 text-xs">
              لم يتم العثور على أي نتائج مطابقة لـ &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>اضغط Esc للإغلاق</span>
          <span className="font-mono">STYLE Intelligence Search</span>
        </div>
      </div>
    </div>
  );
};
