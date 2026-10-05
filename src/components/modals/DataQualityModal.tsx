import React from 'react';
import {
  IconShieldCheck,
  IconClose,
  IconCheckCircle,
  IconAlertTriangle
} from '../icons/StyleIcons';
import { useStore } from '../../store/useStore';

export const DataQualityModal: React.FC = () => {
  const { isQualityModalOpen, setQualityModalOpen, getMetrics } = useStore();

  if (!isQualityModalOpen) return null;

  const metrics = getMetrics();
  const quality = metrics.dataQuality;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <IconShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-800">فحص جودة وصحة البيانات (Data Quality Engine)</h2>
              <p className="text-[11px] text-slate-500">تدقيق العلاقات والأسعار والمخزون في النسخة الاحتياطية</p>
            </div>
          </div>

          <button
            onClick={() => setQualityModalOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <IconClose className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-right">
          {/* Quality Score Hero Card */}
          <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-medium block">مؤشر جودة وتماسك البيانات</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-black font-sans tabular-nums text-emerald-400">
                  %{quality.score}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {quality.status === 'excellent' ? 'ممتاز' : 'جيد جداً'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                تم فحص {quality.totalRecordsChecked.toLocaleString()} سجل بنجاح
              </p>
            </div>

            <div className="text-left font-mono text-xs text-slate-300">
              <div>آخر تدقيق: {quality.lastAuditTime}</div>
              <div className="text-emerald-400 mt-1">{quality.cleanRecordsCount.toLocaleString()} سجل سليم</div>
            </div>
          </div>

          {/* Checks List */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 block">فحوصات التكامل المطبقة:</span>

            {quality.checks.map((chk) => (
              <div
                key={chk.id}
                className={`p-3 rounded-xl border flex items-start justify-between gap-3 text-xs ${
                  chk.passed
                    ? 'bg-slate-50/60 border-slate-200/80 text-slate-700'
                    : 'bg-rose-50/60 border-rose-200 text-rose-900'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 shrink-0">
                    {chk.passed ? (
                      <IconCheckCircle className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <IconAlertTriangle className="w-4 h-4 text-rose-500" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{chk.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">({chk.category})</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">{chk.message}</p>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${
                    chk.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-200 text-rose-800'
                  }`}
                >
                  {chk.passed ? 'ناجح' : 'تنبيه'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
          <span className="text-slate-500">تم بناء التحليلات فقط فوق السجلات المفحوصة والمطبعة</span>
          <button
            onClick={() => setQualityModalOpen(false)}
            className="px-4 py-1.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
