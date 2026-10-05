import React from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { MobileTopBar } from './MobileTopBar';
import { MobileBottomNav } from './MobileBottomNav';
import { BackupModal } from '../modals/BackupModal';
import { useStore } from '../../store/useStore';
import { DashboardPage } from '../../pages/DashboardPage';
import { SalesPage } from '../../pages/SalesPage';
import { BranchesPage } from '../../pages/BranchesPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { EmployeesPage } from '../../pages/EmployeesPage';
import { SafePage } from '../../pages/SafePage';
import { ExpensesPage } from '../../pages/ExpensesPage';
import { ReportsPage } from '../../pages/ReportsPage';
import { MorePage } from '../../pages/MorePage';

export const AppShell: React.FC = () => {
  const { currentPage, mobilePreviewMode } = useStore();

  const renderActivePage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'sales':
        return <SalesPage />;
      case 'branches':
        return <BranchesPage />;
      case 'products':
        return <ProductsPage />;
      case 'inventory':
        return <InventoryPage />;
      case 'employees':
        return <EmployeesPage />;
      case 'safe':
        return <SafePage />;
      case 'expenses':
        return <ExpensesPage />;
      case 'reports':
        return <ReportsPage />;
      case 'more':
      case 'settings':
        return <MorePage />;
      default:
        return <DashboardPage />;
    }
  };

  // If Mobile Preview Frame is explicitly active on desktop:
  if (mobilePreviewMode) {
    return (
      <div className="min-h-screen bg-[#0F1012] text-slate-800 flex flex-col items-center justify-start py-6 px-4">
        {/* Top Control Bar for Simulator */}
        <div className="w-full max-w-md flex items-center justify-between mb-4 px-2 text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold tracking-tight">محاكي شاشة الجوال (Mobile Simulator)</span>
          </div>
          <button
            onClick={() => useStore.getState().setMobilePreviewMode(false)}
            className="text-xs font-semibold text-[#d4af37] hover:underline"
          >
            التبديل إلى عرض سطح المكتب &gt;
          </button>
        </div>

        {/* Mobile Mockup Device Frame */}
        <div className="w-full max-w-[390px] h-[844px] bg-[#F8F9FA] rounded-[48px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-[9px] border-[#22242a] relative overflow-hidden flex flex-col">
          {/* iOS Dynamic Island / Notch */}
          <div className="absolute top-2 inset-x-0 flex justify-center z-50 pointer-events-none">
            <div className="w-24 h-4 bg-black rounded-full" />
          </div>

          {/* Top Status Bar Filler */}
          <div className="h-9 w-full bg-[#F8F9FA] shrink-0 flex items-center justify-between px-6 pt-2 text-[11px] font-bold text-slate-800">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-slate-800">
              <span className="text-[10px]">5G</span>
              <div className="w-5 h-2.5 border border-slate-800 rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-slate-800 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Mobile App Header */}
          <MobileTopBar />

          {/* Mobile Scrollable Viewport */}
          <main className="flex-1 overflow-y-auto px-4 pt-2 pb-20">
            {renderActivePage()}
          </main>

          {/* Mobile Bottom Docked Navigation */}
          <MobileBottomNav />

          {/* Mobile Drawer */}
          <Sidebar isMobileDrawer={true} />
        </div>

        <BackupModal />
      </div>
    );
  }

  // Standard Responsive Layout (Mobile Native on small screens, Full SaaS Grid on Desktop)
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 flex flex-col lg:flex-row">
      {/* 1. Desktop Persistent Sidebar */}
      <Sidebar isMobileDrawer={false} />

      {/* 2. Main Content Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Desktop Topbar */}
        <Topbar />

        {/* Mobile Topbar (Visible only on < 1024px screens) */}
        <div className="lg:hidden">
          <MobileTopBar />
        </div>

        {/* Dynamic Page Content Viewport */}
        <main className="flex-1 p-3.5 sm:p-5 lg:p-8 max-w-5xl mx-auto w-full pb-24 lg:pb-8">
          {renderActivePage()}
        </main>

        {/* Mobile Bottom Docked Navigation (Visible only on < 1024px screens) */}
        <div className="lg:hidden">
          <MobileBottomNav />
        </div>
      </div>

      {/* Mobile Drawer (Available on mobile devices when hamburger menu is pressed) */}
      <Sidebar isMobileDrawer={true} />

      {/* Global Backup Importer Modal */}
      <BackupModal />
    </div>
  );
};
