import React from 'react';
import {
  Home,
  Receipt,
  Store,
  Shirt,
  Package,
  Users,
  Vault,
  WalletCards,
  FileBarChart,
  Settings,
  Database,
  X,
  Building2,
  ChevronDown
} from 'lucide-react';
import { useStore } from '../../store/useStore';
import { PageId } from '../../types';

interface SidebarProps {
  isMobileDrawer?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isMobileDrawer = false }) => {
  const {
    currentPage,
    setCurrentPage,
    selectedBranchId,
    setSelectedBranch,
    backupData,
    isSidebarOpen,
    setSidebarOpen,
    setImportModalOpen,
    lastBackupSyncText
  } = useStore();

  const navItems: { id: PageId; label: string; icon: React.FC<{ className?: string }>; badge?: string }[] = [
    { id: 'dashboard', label: 'الرئيسية', icon: Home },
    { id: 'sales', label: 'المبيعات', icon: Receipt },
    { id: 'branches', label: 'الفروع', icon: Store, badge: '4' },
    { id: 'products', label: 'المنتجات', icon: Shirt, badge: '1,284' },
    { id: 'inventory', label: 'المخزون', icon: Package, badge: 'تنبيه' },
    { id: 'employees', label: 'الموظفين / Sales', icon: Users },
    { id: 'safe', label: 'الخزنة', icon: Vault },
    { id: 'expenses', label: 'المصروفات', icon: WalletCards },
    { id: 'reports', label: 'التقارير', icon: FileBarChart },
    { id: 'more', label: 'الإعدادات والنسخ', icon: Settings }
  ];

  const content = (
    <div className="flex flex-col h-full bg-[#121316] text-slate-200 border-l border-slate-800">
      {/* Brand Header */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c59b4c] to-[#8c6721] p-0.5 shadow-md flex items-center justify-center">
            <span className="text-white font-black text-lg">S</span>
          </div>
          <div>
            <h1 className="text-base font-black tracking-tight text-white leading-tight">
              ستايل STYLE
            </h1>
            <p className="text-[11px] font-medium text-slate-400">إدارة المتاجر والفروع</p>
          </div>
        </div>

        {isMobileDrawer && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Branch Selector */}
      <div className="px-4 py-3 border-b border-slate-800/60">
        <label className="text-[10px] font-semibold tracking-wider text-slate-400 block mb-1.5 uppercase">
          تصفية الفرع النشط
        </label>
        <div className="relative">
          <select
            value={selectedBranchId}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full appearance-none bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-[#d4af37] pr-8 cursor-pointer"
          >
            <option value="all">كل الفروع (4 فروع)</option>
            {backupData.branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
          <Building2 className="w-3.5 h-3.5 text-[#d4af37] absolute left-3 top-2.5 pointer-events-none" />
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
        </div>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
        {navItems.map((item) => {
          const active = currentPage === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                if (isMobileDrawer) setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                active
                  ? 'bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/5 text-[#d4af37] border-r-2 border-[#d4af37] shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${active ? 'text-[#d4af37]' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                    item.badge === 'تنبيه'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Backup Status Pill & Actions */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
        <div
          onClick={() => setImportModalOpen(true)}
          className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-[#d4af37]/50 cursor-pointer transition-colors group"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-slate-300 group-hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-[#d4af37]" />
              النسخة الاحتياطية
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20" />
          </div>
          <p className="text-[10px] text-slate-400 line-clamp-1">
            {lastBackupSyncText}
          </p>
          <div className="mt-2 pt-2 border-t border-slate-700/40 flex items-center justify-between text-[10px] text-slate-400">
            <span>انقر للاستيراد / الفحص</span>
            <span className="text-[#d4af37] font-semibold">تغيير &gt;</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobileDrawer) {
    if (!isSidebarOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSidebarOpen(false)}
        />
        {/* Drawer content (slides in from right in RTL) */}
        <div className="relative w-72 max-w-[85vw] h-full shadow-2xl animate-in slide-in-from-right duration-200 z-10">
          {content}
        </div>
      </div>
    );
  }

  return <aside className="w-64 shrink-0 hidden lg:block h-screen sticky top-0">{content}</aside>;
};
