import React from 'react';
import {
  IconBell,
  IconSmartphone,
  IconMonitor,
  IconBuilding,
  IconSearch,
  IconShieldCheck,
  IconSnapshots
} from '../icons/StyleIcons';
import { useStore } from '../../store/useStore';

export const Topbar: React.FC = () => {
  const {
    currentPage,
    setCurrentPage,
    filters,
    backupData,
    mobilePreviewMode,
    toggleMobilePreviewMode,
    setImportModalOpen,
    setSearchOpen,
    setNotificationsOpen,
    setQualityModalOpen,
    readNotificationIds,
    getMetrics,
    lastBackupSyncText
  } = useStore();

  const metrics = getMetrics();
  const unreadCount = metrics.insights.filter((i) => !readNotificationIds.includes(i.id)).length;

  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard':
        return 'لوحة التحليلات العامة';
      case 'sales':
        return 'تحليل المبيعات والفواتير';
      case 'branches':
        return 'أداء ومقارنة الفروع';
      case 'products':
        return 'تحليل المنتجات وتصنيف ABC';
      case 'inventory':
        return 'حالة المخزون والتوزيع';
      case 'employees':
        return 'ترتيب أداء موظفي السيلز';
      case 'safe':
        return 'الخزينة ومطابقة الورديات';
      case 'expenses':
        return 'الرقابة المالية والمصروفات';
      case 'reports':
        return 'مركز التقارير والتصدير';
      case 'snapshots':
        return 'سجل لقطات النسخ الدورية';
      case 'more':
        return 'حالة النظام وجودة البيانات';
      default:
        return 'الرئيسية';
    }
  };

  const branchName =
    filters.branchId === 'all'
      ? 'جميع الفروع'
      : backupData.branches.find((b) => b.id === filters.branchId)?.name || 'جميع الفروع';

  return (
    <header className="hidden lg:flex items-center justify-between px-6 py-3 bg-white border-b border-slate-200/80 sticky top-0 z-20">
      {/* Right side: Page Title & Active Branch */}
      <div className="flex items-center gap-3">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">
          {getPageTitle()}
        </h2>
        <span className="text-slate-300">/</span>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100/80 rounded-lg text-xs font-semibold text-slate-700">
          <IconBuilding className="w-3.5 h-3.5 text-[#b8912d]" />
          <span>{branchName}</span>
        </div>

        {/* Read-Only Badge */}
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
          وضع القراءة والتحليل (Read-Only Viewer)
        </span>
      </div>

      {/* Left side: Snapshot Indicator, Data Quality, Search, Simulator, Notifications */}
      <div className="flex items-center gap-2.5">
        {/* Active Snapshot Indicator & Quick Switcher */}
        <button
          onClick={() => setCurrentPage('snapshots')}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f5eedb]/80 hover:bg-[#ebdcb7] text-[#7b581c] rounded-xl text-xs font-semibold transition-colors border border-amber-200/60"
          title="عرض لقطة النسخة الاحتياطية وتاريخ التحديث"
        >
          <IconSnapshots className="w-3.5 h-3.5 text-[#b8912d]" />
          <span className="font-mono text-[11px]">{lastBackupSyncText}</span>
        </button>

        {/* Data Quality Pill Trigger */}
        <button
          onClick={() => setQualityModalOpen(true)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-semibold transition-colors border border-emerald-200/60"
          title="فحص جودة وصحة بيانات النسخة الاحتياطية"
        >
          <IconShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>جودة البيانات: %{metrics.dataQuality.score}</span>
        </button>

        {/* Global Search Button */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 rounded-xl text-xs font-medium transition-colors"
          title="بحث عام (Ctrl+K)"
        >
          <IconSearch className="w-3.5 h-3.5 text-slate-400" />
          <span className="hidden xl:inline text-slate-400">بحث...</span>
          <kbd className="hidden xl:inline font-mono text-[10px] bg-slate-200/70 px-1 py-0.5 rounded text-slate-600">
            Ctrl+K
          </kbd>
        </button>

        {/* Mobile Mockup Toggle */}
        <button
          onClick={toggleMobilePreviewMode}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors border ${
            mobilePreviewMode
              ? 'bg-[#121316] text-[#d4af37] border-slate-900 shadow-xs'
              : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300'
          }`}
          title="معاينة الواجهة كجوال مطابق للصور المرجعية"
        >
          {mobilePreviewMode ? (
            <>
              <IconSmartphone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>معاينة الهاتف</span>
            </>
          ) : (
            <>
              <IconMonitor className="w-3.5 h-3.5" />
              <span>عرض الجوال</span>
            </>
          )}
        </button>

        {/* Bell notification */}
        <button
          onClick={() => setNotificationsOpen(true)}
          className="relative p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
          title="التنبيهات والرؤى التحليلية"
        >
          <IconBell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 left-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
          )}
        </button>
      </div>
    </header>
  );
};
