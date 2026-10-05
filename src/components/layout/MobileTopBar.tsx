import React from 'react';
import { IconMenu, IconBell, IconSearch } from '../icons/StyleIcons';
import { useStore } from '../../store/useStore';

export const MobileTopBar: React.FC = () => {
  const {
    setSidebarOpen,
    setSearchOpen,
    setNotificationsOpen,
    readNotificationIds,
    getMetrics
  } = useStore();

  const metrics = getMetrics();
  const unreadCount = metrics.insights.filter((i) => !readNotificationIds.includes(i.id)).length;

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-2.5 bg-[#F8F9FA]/95 backdrop-blur-md border-b border-slate-200/60">
      {/* Right button: Hamburger menu */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="w-10 h-10 -mr-1 flex items-center justify-center text-slate-800 hover:text-slate-900 active:scale-95 transition-transform"
        aria-label="القائمة الرئيسية"
      >
        <IconMenu className="w-5 h-5 text-slate-800" strokeWidth={1.8} />
      </button>

      {/* Center: Brand Logo Lockup */}
      <div
        className="flex flex-col items-center select-none cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
          ستايل
        </span>
        <span className="text-[10px] font-bold tracking-[0.25em] text-[#c59b4c] uppercase mt-0.5 leading-none">
          STYLE
        </span>
      </div>

      {/* Left buttons: Search & Notifications Bell */}
      <div className="flex items-center gap-1 -ml-1">
        <button
          onClick={() => setSearchOpen(true)}
          className="w-9 h-9 flex items-center justify-center text-slate-700 hover:text-slate-900 active:scale-95 transition-transform"
          aria-label="بحث"
          title="بحث شامل"
        >
          <IconSearch className="w-4 h-4 text-slate-700" strokeWidth={1.8} />
        </button>

        <button
          onClick={() => setNotificationsOpen(true)}
          className="relative w-9 h-9 flex items-center justify-center text-slate-800 hover:text-slate-900 active:scale-95 transition-transform"
          aria-label="الإشعارات والنسخ الاحتياطي"
          title="الرؤى الذكية والتنبيهات"
        >
          <IconBell className="w-5 h-5 text-slate-800" strokeWidth={1.8} />
          {unreadCount > 0 && (
            <span className="absolute top-2 left-2 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-[#F8F9FA]" />
          )}
        </button>
      </div>
    </header>
  );
};
