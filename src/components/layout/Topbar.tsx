import React from 'react';
import {
  Bell,
  Smartphone,
  Monitor,
  Building2,
  Database,
  Calendar,
  Layers
} from 'lucide-react';
import { useStore } from '../../store/useStore';

export const Topbar: React.FC = () => {
  const {
    currentPage,
    selectedBranchId,
    backupData,
    mobilePreviewMode,
    toggleMobilePreviewMode,
    setImportModalOpen,
    notificationCount,
    selectedDate
  } = useStore();

  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard':
        return 'الرئيسية';
      case 'sales':
        return 'المبيعات';
      case 'branches':
        return 'الفروع';
      case 'products':
        return 'المنتجات';
      case 'inventory':
        return 'المخزون';
      case 'employees':
        return 'الموظفين / Sales';
      case 'safe':
        return 'الخزنة';
      case 'expenses':
        return 'المصروفات';
      case 'reports':
        return 'التقارير';
      case 'more':
        return 'المزيد والإعدادات';
      default:
        return 'الرئيسية';
    }
  };

  const branchName =
    selectedBranchId === 'all'
      ? 'كل الفروع'
      : backupData.branches.find((b) => b.id === selectedBranchId)?.name || 'كل الفروع';

  return (
    <header className="hidden lg:flex items-center justify-between px-6 py-3.5 bg-white border-b border-slate-200/80 sticky top-0 z-20">
      {/* Right side: Page Title & Breadcrumb */}
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">
          {getPageTitle()}
        </h2>
        <span className="text-slate-300">/</span>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">
          <Building2 className="w-3.5 h-3.5 text-[#b8912d]" />
          <span>{branchName}</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{selectedDate}</span>
        </div>
      </div>

      {/* Left side: View Switcher, Backup Importer trigger & Notifications */}
      <div className="flex items-center gap-3">
        {/* Mobile Mockup Toggle */}
        <button
          onClick={toggleMobilePreviewMode}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
            mobilePreviewMode
              ? 'bg-[#121316] text-[#d4af37] border-slate-900 shadow-sm'
              : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300'
          }`}
          title="معاينة الواجهة كجوال مطابق للصور المرجعية"
        >
          {mobilePreviewMode ? (
            <>
              <Smartphone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>معاينة الهاتف (نشط)</span>
            </>
          ) : (
            <>
              <Monitor className="w-3.5 h-3.5" />
              <span>معاينة شاشة الهاتف</span>
            </>
          )}
        </button>

        {/* Backup Modal Trigger */}
        <button
          onClick={() => setImportModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f5eedb] hover:bg-[#ebdcb7] text-[#7b581c] rounded-lg text-xs font-semibold transition-colors"
        >
          <Database className="w-3.5 h-3.5" />
          <span>استيراد النسخة الاحتياطية</span>
        </button>

        {/* Bell notification */}
        <button
          onClick={() => setImportModalOpen(true)}
          className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          title="إشعارات النظام"
        >
          <Bell className="w-4 h-4" />
          {notificationCount > 0 && (
            <span className="absolute top-1.5 left-1.5 w-2 h-2 bg-rose-500 rounded-full" />
          )}
        </button>
      </div>
    </header>
  );
};
