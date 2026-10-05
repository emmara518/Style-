import React, { useState } from 'react';
import { Calendar, ChevronDown, Check } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const DateFilter: React.FC = () => {
  const { selectedDate, setSelectedDate } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const dates = [
    'اليوم الثلاثاء 2 أكتوبر 2026',
    'أمس الاثنين 1 أكتوبر 2026',
    'الأحد 30 سبتمبر 2026',
    'السبت 29 سبتمبر 2026',
    'هذا الأسبوع (26 سبتمبر - 2 أكتوبر)',
    'هذا الشهر (أكتوبر 2026)'
  ];

  return (
    <div className="relative mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3.5 py-2 bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] text-slate-700 text-xs font-medium hover:border-slate-300 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{selectedDate.includes('اليوم') ? selectedDate : `اليوم الثلاثاء ${selectedDate}`}</span>
        </div>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1.5 w-full bg-white rounded-xl border border-slate-200 shadow-xl z-50 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            {dates.map((d) => (
              <button
                key={d}
                onClick={() => {
                  setSelectedDate(d.replace('اليوم الثلاثاء ', ''));
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-right text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <span>{d}</span>
                {selectedDate.includes(d.replace('اليوم الثلاثاء ', '')) && (
                  <Check className="w-3.5 h-3.5 text-[#b8912d]" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
