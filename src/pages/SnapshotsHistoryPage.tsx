import React from 'react';
import {
  IconSnapshots,
  IconCheckCircle,
  IconAlertTriangle,
  IconShieldCheck,
  IconServer,
  IconEye
} from '../components/icons/StyleIcons';
import { useStore } from '../store/useStore';
import { BackupSnapshotItem } from '../types';

export const SnapshotsHistoryPage: React.FC = () => {
  const {
    snapshotHistory,
    selectedSnapshotId,
    selectSnapshot,
    setCurrentPage,
    lastBackupSyncText
  } = useStore();

  const handleSelect = (snap: BackupSnapshotItem) => {
    selectSnapshot(snap.id);
    setCurrentPage('dashboard');
  };

  return (
    <div className="space-y-4 pb-6 text-right">
      {/* Page Header */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b8912d] flex items-center justify-center">
              <IconSnapshots className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">سجل نسخ البيانات الدورية (Data Snapshots)</h2>
              <p className="text-[11px] text-slate-500">
                أرشيف لقطات النسخ الاحتياطية المصدرة تلقائياً من خادم الكاشير ونقاط البيع الأصلية
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-lg text-xs font-mono text-slate-700">
            <IconServer className="w-3.5 h-3.5 text-slate-500" />
            <span>Server #1 — Read-Only Mode</span>
          </div>
        </div>

        {/* Read-Only Architecture Principle Badge */}
        <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
          <IconShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold">قاعدة حماية النظام الأصلي (Viewer Architecture):</span>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              هذه المنصة هي طبقة استعراض وتحليل بصري فقط (Read-Only Analytics Viewer). اختيار أي لقطة تاريخية يسمح لك بمراجعة تقارير وأرقام المتجر في ذلك التوقيت دون أي اتصال كتابة أو تعديل على السيرفر الأصلي.
            </p>
          </div>
        </div>
      </div>

      {/* Snapshots Timeline List */}
      <div className="space-y-2.5">
        {snapshotHistory.map((snap) => {
          const isSelected = selectedSnapshotId === snap.id;

          return (
            <div
              key={snap.id}
              className={`bg-white rounded-2xl p-4 border transition-all ${
                isSelected
                  ? 'border-[#b8912d] shadow-sm ring-1 ring-[#b8912d]/30'
                  : 'border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Snapshot Details */}
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      snap.status === 'valid'
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-amber-50 text-amber-600'
                    }`}
                  >
                    {snap.status === 'valid' ? (
                      <IconCheckCircle className="w-4 h-4" />
                    ) : (
                      <IconAlertTriangle className="w-4 h-4" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold text-slate-900">{snap.title}</h3>
                      {isSelected && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f5eedb] text-[#7b581c] border border-amber-200">
                          معروضة حالياً
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          snap.status === 'valid'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {snap.status === 'valid' ? '✓ صالحة للقراءة' : '⚠ تحتاج مراجعة'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 font-mono">
                      <span>{snap.date} — {snap.time}</span>
                      <span>·</span>
                      <span>{snap.recordsCount.toLocaleString()} سجل</span>
                      <span>·</span>
                      <span>{snap.fileSize}</span>
                    </div>

                    <p className="text-[11px] text-slate-600 mt-1">{snap.notes}</p>
                  </div>
                </div>

                {/* View Button */}
                <button
                  onClick={() => handleSelect(snap)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shrink-0 ${
                    isSelected
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <IconEye className="w-3.5 h-3.5" />
                  <span>{isSelected ? 'عرض لوحة هذه اللقطة' : 'تحميل واستعراض اللقطة'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

