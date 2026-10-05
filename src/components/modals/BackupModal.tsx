import React, { useState, useRef } from 'react';
import { X, Upload, CheckCircle2, AlertCircle, FileText, Download, RotateCcw, Database, HardDrive } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { BackupImporter, BackupImportResult } from '../../services/backup/BackupImporter';
import { INITIAL_BACKUP_DATA } from '../../data/mockBackupData';

export const BackupModal: React.FC = () => {
  const {
    isImportModalOpen,
    setImportModalOpen,
    loadBackupData,
    resetToDefaultBackup,
    backupData
  } = useStore();

  const [isLoading, setIsLoading] = useState(false);
  const [importResult, setImportResult] = useState<BackupImportResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isImportModalOpen) return null;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setImportResult(null);

    try {
      const result = await BackupImporter.importFromFile(file);
      setImportResult(result);
      if (result.success && result.data) {
        loadBackupData(result.data);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'فشل قراءة الملف';
      setImportResult({ success: false, error: msg });
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleExport = () => {
    const jsonStr = BackupImporter.exportCurrentBackup(backupData);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `style_pos_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const loadPreset = (presetType: 'peak' | 'normal' | 'low') => {
    const cloned = JSON.parse(JSON.stringify(INITIAL_BACKUP_DATA));
    if (presetType === 'peak') {
      cloned.metadata.notes = 'نسخة مبيعات الذروة ونهاية الأسبوع';
      cloned.branches[0].totalSales = 74500;
      cloned.branches[1].totalSales = 52000;
    } else if (presetType === 'low') {
      cloned.metadata.notes = 'نسخة هدوء بداية الأسبوع';
      cloned.branches[0].totalSales = 32000;
      cloned.branches[1].totalSales = 24000;
    }
    loadBackupData(cloned);
    setImportResult({
      success: true,
      recordsParsed: cloned.metadata.totalRecords,
      warnings: ['تم تحميل قالب النسخة الاحتياطية بنجاح']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#f5eedb] flex items-center justify-center text-[#997321]">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-800">بوابة استيراد النسخ الاحتياطية (Backup)</h2>
              <p className="text-[11px] text-slate-500">طبقة قراءة وتحليل بيانات نظام الكاشير ونقاط البيع</p>
            </div>
          </div>
          <button
            onClick={() => setImportModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* Active Backup Info */}
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700">النسخة المحملة حاليًا:</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                <CheckCircle2 className="w-3 h-3" />
                صالحة للقراءة
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
              <div>
                <span className="text-slate-400">معرف النسخة:</span>{' '}
                <span className="font-mono text-slate-800 font-medium">{backupData.metadata.backupId}</span>
              </div>
              <div>
                <span className="text-slate-400">وقت التوليد:</span>{' '}
                <span className="text-slate-800 font-medium">{backupData.metadata.generatedAt}</span>
              </div>
              <div>
                <span className="text-slate-400">إجمالي السجلات:</span>{' '}
                <span className="font-mono text-slate-800 font-medium">{backupData.metadata.totalRecords.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-slate-400">النظام المصدر:</span>{' '}
                <span className="text-slate-800 font-medium">{backupData.metadata.sourceSystem}</span>
              </div>
            </div>
          </div>

          {/* Upload Dropzone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-200 hover:border-[#b8912d] rounded-xl p-6 text-center cursor-pointer transition-colors bg-white hover:bg-amber-50/20 group"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".json,.csv,.sql,.stylebackup"
              className="hidden"
            />
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 group-hover:bg-[#f5eedb] flex items-center justify-center text-slate-500 group-hover:text-[#997321] mb-2 transition-colors">
              <Upload className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-slate-800 mb-1">
              انقر لاختيار ملف النسخة الاحتياطية أو اسحبه هنا
            </p>
            <p className="text-[11px] text-slate-500 mb-2">
              يدعم ملفات JSON (.json), CSV (.csv), وتفريغ SQL (.sql)
            </p>
            <span className="inline-block text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
              تتم المعالجة محليًا في المتصفح دون تعديل قاعدة البيانات الأصلية
            </span>
          </div>

          {/* Status Message */}
          {isLoading && (
            <div className="p-3 bg-amber-50 text-amber-800 rounded-lg text-xs flex items-center gap-2">
              <div className="w-3.5 h-3.5 border-2 border-amber-600 border-t-transparent rounded-full animate-spin" />
              جاري فحص وقراءة هيكل النسخة الاحتياطية وتطبيع الحقول...
            </div>
          )}

          {importResult && (
            <div
              className={`p-3 rounded-lg text-xs flex items-start gap-2.5 ${
                importResult.success
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                  : 'bg-rose-50 text-rose-900 border border-rose-200'
              }`}
            >
              {importResult.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-0.5">
                <p className="font-semibold">
                  {importResult.success ? 'تم الاستيراد والتطبيع بنجاح!' : 'حدث خطأ أثناء الاستيراد'}
                </p>
                <p className="text-[11px] text-slate-600">
                  {importResult.success
                    ? `تمت معالجة ${importResult.recordsParsed?.toLocaleString()} سجل وتحديث كل الإحصائيات في اللوحة.`
                    : importResult.error}
                </p>
              </div>
            </div>
          )}

          {/* Preset options */}
          <div>
            <span className="text-xs font-medium text-slate-700 block mb-2">
              اختبار سيناريوهات سريعة (Preset Simulations):
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => loadPreset('peak')}
                className="p-2 text-right rounded-lg border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 transition-colors"
              >
                <p className="text-xs font-semibold text-slate-800">ذروة المبيعات</p>
                <p className="text-[10px] text-slate-500">مبيعات مرتفعة ونشاط عالي في الفروع</p>
              </button>
              <button
                onClick={() => loadPreset('low')}
                className="p-2 text-right rounded-lg border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 transition-colors"
              >
                <p className="text-xs font-semibold text-slate-800">مبيعات متوسطة</p>
                <p className="text-[10px] text-slate-500">محاكاة بداية الأسبوع المعتادة</p>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={resetToDefaultBackup}
              title="إعادة تعيين للنسخة المرجعية الأولية"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>استعادة الأصلية</span>
            </button>
            <button
              onClick={handleExport}
              title="تصدير النسخة الحالية بصيغة JSON"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تصدير JSON</span>
            </button>
          </div>
          <button
            onClick={() => setImportModalOpen(false)}
            className="px-4 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
