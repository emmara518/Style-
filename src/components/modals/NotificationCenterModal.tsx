import React from 'react';
import {
  IconBell,
  IconClose,
  IconAlertTriangle,
  IconTrendUp,
  IconAlertCircle,
  IconHelpCircle,
  IconCheckCircle,
  IconChevronLeft
} from '../icons/StyleIcons';
import { useStore } from '../../store/useStore';
import { SmartInsight, PageId } from '../../types';

export const NotificationCenterModal: React.FC = () => {
  const {
    isNotificationsOpen,
    setNotificationsOpen,
    getMetrics,
    readNotificationIds,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    setCurrentPage
  } = useStore();

  if (!isNotificationsOpen) return null;

  const metrics = getMetrics();
  const insights = metrics.insights;

  const handleAction = (item: SmartInsight) => {
    markNotificationAsRead(item.id);
    if (item.targetPage) {
      setCurrentPage(item.targetPage);
    }
    setNotificationsOpen(false);
  };

  const getIcon = (type: SmartInsight['type']) => {
    switch (type) {
      case 'alert':
        return <IconAlertCircle className="w-4 h-4 text-rose-500" />;
      case 'warning':
        return <IconAlertTriangle className="w-4 h-4 text-amber-500" />;
      case 'opportunity':
        return <IconTrendUp className="w-4 h-4 text-emerald-500" />;
      case 'info':
      default:
        return <IconHelpCircle className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#b8912d] flex items-center justify-center">
              <IconBell className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-800">مركز التنبيهات والرؤى الذكية (Insights)</h2>
              <p className="text-[11px] text-slate-500">تنبيهات فورية مبنية على تحليلات بيانات المتجر</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={markAllNotificationsAsRead}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              title="تحديد الكل كمقروء"
            >
              <IconCheckCircle className="w-4 h-4" />
            </button>
            <button
              onClick={() => setNotificationsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <IconClose className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* List of Insights */}
        <div className="overflow-y-auto p-4 space-y-2.5">
          {insights.map((item) => {
            const isRead = readNotificationIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`p-3.5 rounded-xl border transition-colors flex items-start justify-between gap-3 text-right ${
                  isRead
                    ? 'bg-slate-50/60 border-slate-200/60 opacity-75'
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-0.5 shrink-0">{getIcon(item.type)}</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      {!isRead && (
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{item.description}</p>
                    <div className="flex items-center gap-3 pt-1 text-[10px] text-slate-400 font-medium">
                      <span>{item.date}</span>
                      {item.metric && (
                        <span className="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
                          {item.metric}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {item.actionText && (
                  <button
                    onClick={() => handleAction(item)}
                    className="shrink-0 text-[11px] font-bold text-[#b8912d] hover:text-[#997321] hover:underline flex items-center gap-1 mt-1"
                  >
                    <span>{item.actionText}</span>
                    <IconChevronLeft className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500">
          <span>يتم فحص وتحديث الرؤى تلقائياً مع كل لقطة بيانات</span>
          <button
            onClick={() => setNotificationsOpen(false)}
            className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
