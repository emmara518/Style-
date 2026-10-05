import React, { useState } from 'react';
import {
  IconSettings,
  IconMoon,
  IconSun,
  IconHelpCircle,
  IconLogOut,
  IconChevronLeft,
  IconCheckCircle,
  IconDatabase,
  IconRotateCcw,
  IconShieldCheck,
  IconBell
} from '../components/icons/StyleIcons';
import { useStore } from '../store/useStore';
import { STORE_INTERIOR_IMG } from '../data/mockBackupData';

export const MorePage: React.FC = () => {
  const {
    backupData,
    lastBackupSyncText,
    setImportModalOpen,
    setQualityModalOpen,
    setNotificationsOpen,
    setCurrentPage,
    getMetrics
  } = useStore();

  const metrics = getMetrics();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="space-y-3.5 pb-6">
      {/* 1. Store Profile & Platform Info Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-center justify-between">
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
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-black text-slate-900">STYLE | ستايل</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                منصة استعراض وتحليلات
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              طبقة قراءة وتحليل دوري فوق قاعدة بيانات POS (Viewer &amp; Analytics Only)
            </p>
          </div>
        </div>

        <button
          onClick={() => setQualityModalOpen(true)}
          className="p-2 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-xs font-bold transition-colors flex items-center gap-1"
          title="فحص صحة البيانات"
        >
          <IconShieldCheck className="w-4 h-4" />
          <span>%{metrics.dataQuality.score}</span>
        </button>
      </div>

      {/* 2. Backup Center & Data Snapshot Health Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 animate-ping absolute inset-0" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900">مركز النسخ الاحتياطي (Backup Center)</h3>
              <span className="text-[10px] text-slate-400">لقطة غير قابلة للتعديل فوق قاعدة بيانات POS</span>
            </div>
          </div>

          <button
            onClick={() => setImportModalOpen(true)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            title="تحديث / استيراد"
          >
            <IconRotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Health Check Strip */}
        <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs text-slate-700 border border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-slate-500">تاريخ ووقت اللقطة:</span>
            <span className="font-bold text-slate-900 font-mono">{lastBackupSyncText}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">حالة تكامل البيانات:</span>
            <span className="font-bold text-emerald-600 flex items-center gap-1">
              <IconCheckCircle className="w-3.5 h-3.5" />
              تم الفحص والتحقق بنجاح (%{metrics.dataQuality.score})
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">إجمالي السجلات المفحوصة:</span>
            <span className="font-bold font-mono text-slate-900">{backupData.metadata.totalRecords.toLocaleString()} سجل</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">عدد الفروع والمخازن:</span>
            <span className="font-bold font-mono text-slate-900">{backupData.branches.length} فروع مفعلة</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">عدد الأصناف في الكتالوج:</span>
            <span className="font-bold font-mono text-slate-900">{backupData.metadata.productCount.toLocaleString()} صنف</span>
          </div>
        </div>

        {/* Action Button for Backup Modal */}
        <button
          onClick={() => setImportModalOpen(true)}
          className="w-full py-2 bg-[#f5eedb] hover:bg-[#ebdcb7] text-[#7b581c] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <IconDatabase className="w-3.5 h-3.5" />
          <span>استيراد لقطة جديدة أو تغيير الملف (JSON / CSV / SQL)</span>
        </button>
      </div>

      {/* 3. Settings Navigation Menu */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] divide-y divide-slate-100 overflow-hidden">
        {/* Quality Audit */}
        <button
          onClick={() => setQualityModalOpen(true)}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-right"
        >
          <div className="flex items-center gap-3">
            <IconShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-semibold text-slate-800">تدقيق جودة وتطبيع البيانات (Data Quality)</span>
          </div>
          <span className="text-xs font-bold text-emerald-600">%{metrics.dataQuality.score}</span>
        </button>

        {/* Notifications */}
        <button
          onClick={() => setNotificationsOpen(true)}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-right"
        >
          <div className="flex items-center gap-3">
            <IconBell className="w-4 h-4 text-[#b8912d]" />
            <span className="text-xs font-semibold text-slate-800">إعدادات التنبيهات والرؤى الذكية</span>
          </div>
          <IconChevronLeft className="w-4 h-4 text-slate-400" />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            showToast(isDarkMode ? 'تم تفعيل المظهر الفاتح' : 'تم تفعيل المظهر الليلي');
          }}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-right"
        >
          <div className="flex items-center gap-3">
            {isDarkMode ? (
              <IconSun className="w-4 h-4 text-amber-500" />
            ) : (
              <IconMoon className="w-4 h-4 text-slate-500" />
            )}
            <span className="text-xs font-semibold text-slate-800">تغيير المظهر (فاتح / داكن)</span>
          </div>
          <IconChevronLeft className="w-4 h-4 text-slate-400" />
        </button>

        {/* Support */}
        <button
          onClick={() => showToast('الدعم الفني متاح عبر خط الطوارئ للعلامة')}
          className="w-full p-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-right"
        >
          <div className="flex items-center gap-3">
            <IconHelpCircle className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold text-slate-800">المساعدة ودليل النظام</span>
          </div>
          <IconChevronLeft className="w-4 h-4 text-slate-400" />
        </button>

        {/* Logout (Red) */}
        <button
          onClick={() => showToast('تم قفل الجلسة بنجاح')}
          className="w-full p-3.5 flex items-center justify-between hover:bg-rose-50/50 transition-colors text-right text-rose-600"
        >
          <div className="flex items-center gap-3">
            <IconLogOut className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-bold">تسجيل خروج</span>
          </div>
          <IconChevronLeft className="w-4 h-4 text-rose-400" />
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

