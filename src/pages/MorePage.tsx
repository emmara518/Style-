import React, { useState } from 'react';
import {
  Settings,
  Moon,
  Sun,
  HelpCircle,
  LogOut,
  ChevronLeft,
  CheckCircle2,
  Database,
  RefreshCw,
  Sliders,
  Shield,
  FileSpreadsheet
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { STORE_INTERIOR_IMG } from '../data/mockBackupData';

export const MorePage: React.FC = () => {
  const {
    backupData,
    lastBackupSyncText,
    setImportModalOpen,
    setCurrentPage,
    resetToDefaultBackup
  } = useStore();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="space-y-3.5 pb-6">
      {/* 1. Brand Store & System Admin Profile Card */}
      <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0">
            <img
              src={STORE_INTERIOR_IMG}
              alt="STYLE Boutique"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-900">STYLE | ستايل</h3>
            <p className="text-[11px] text-slate-500 font-medium">مدير النظام</p>
          </div>
        </div>

        <ChevronLeft className="w-4 h-4 text-slate-400" />
      </div>

      {/* 2. Data Synchronization & Backup Status Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
        {/* Sync header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 animate-ping absolute inset-0" />
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">آخر مزامنة للبيانات</span>
              <span className="text-xs font-bold text-slate-800 tabular-nums">
                {lastBackupSyncText}
              </span>
            </div>
          </div>

          <button
            onClick={() => setImportModalOpen(true)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            title="تحديث / استيراد"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Status Rows */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600">حالة البيانات</span>
          <span className="flex items-center gap-1 font-bold text-emerald-600 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            صالحة
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600">عدد الفروع</span>
          <span className="font-bold text-slate-900 tabular-nums">
            {backupData.branches.length}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600">عدد المنتجات</span>
          <span className="font-bold text-slate-900 tabular-nums">
            {backupData.metadata.productCount.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600">عدد السجلات</span>
          <span className="font-bold text-slate-900 tabular-nums">
            {backupData.metadata.totalRecords.toLocaleString()}
          </span>
        </div>

        {/* Direct trigger for backup importer */}
        <button
          onClick={() => setImportModalOpen(true)}
          className="w-full mt-2 py-2 bg-[#f5eedb] hover:bg-[#ebdcb7] text-[#7b581c] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Database className="w-3.5 h-3.5" />
          <span>فتح بوابة النسخ الاحتياطي (Backup Importer)</span>
        </button>
      </div>

      {/* 3. Action Menu Items */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] divide-y divide-slate-100 overflow-hidden">
        {/* Settings */}
        <button
          onClick={() => showToast('شاشة إعدادات التطبيق والتنبيهات')}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-right"
        >
          <div className="flex items-center gap-3">
            <Settings className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold text-slate-800">الإعدادات</span>
          </div>
          <ChevronLeft className="w-4 h-4 text-slate-400" />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            showToast(isDarkMode ? 'تم تفعيل الوضع الفاتح' : 'تم تفعيل الوضع الليلي');
          }}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-right"
        >
          <div className="flex items-center gap-3">
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Moon className="w-4 h-4 text-slate-500" />
            )}
            <span className="text-xs font-semibold text-slate-800">تغيير المظهر</span>
          </div>
          <ChevronLeft className="w-4 h-4 text-slate-400" />
        </button>

        {/* Support */}
        <button
          onClick={() => showToast('فريق الدعم الفني لعلامة ستايل متواجد 24/7')}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-right"
        >
          <div className="flex items-center gap-3">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold text-slate-800">مساعدة ودعم</span>
          </div>
          <ChevronLeft className="w-4 h-4 text-slate-400" />
        </button>

        {/* Logout (Red) */}
        <button
          onClick={() => showToast('تم تسجيل الخروج من جلسة التحليل')}
          className="w-full p-3.5 flex items-center justify-between hover:bg-rose-50/50 transition-colors text-right text-rose-600"
        >
          <div className="flex items-center gap-3">
            <LogOut className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-bold">تسجيل خروج</span>
          </div>
          <ChevronLeft className="w-4 h-4 text-rose-400" />
        </button>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-4 py-2 rounded-xl shadow-xl z-50 animate-in fade-in slide-in-from-bottom-2">
          {toastMessage}
        </div>
      )}
    </div>
  );
};
