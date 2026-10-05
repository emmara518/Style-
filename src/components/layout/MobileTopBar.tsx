import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const MobileTopBar: React.FC = () => {
  const { setSidebarOpen, notificationCount, setImportModalOpen } = useStore();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-slate-200/50">
      {/* Right button: Hamburger menu */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="w-10 h-10 -mr-1 flex items-center justify-center text-slate-800 hover:text-slate-900 active:scale-95 transition-transform"
        aria-label="القائمة الرئيسية"
      >
        <Menu className="w-5 h-5 stroke-[2]" />
      </button>

      {/* Center: Brand Logo Lockup */}
      <div className="flex flex-col items-center select-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
          ستايل
        </span>
        <span className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase mt-0.5 leading-none">
          STYLE
        </span>
      </div>

      {/* Left button: Notifications Bell with red indicator dot */}
      <button
        onClick={() => setImportModalOpen(true)}
        className="relative w-10 h-10 -ml-1 flex items-center justify-center text-slate-800 hover:text-slate-900 active:scale-95 transition-transform"
        aria-label="الإشعارات والنسخ الاحتياطي"
        title="حالة النسخ الاحتياطي والإشعارات"
      >
        <Bell className="w-5 h-5 stroke-[2]" />
        {notificationCount > 0 && (
          <span className="absolute top-2.5 left-2.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-[#F8F9FA]" />
        )}
      </button>
    </header>
  );
};
