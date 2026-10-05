import React from 'react';
import { Home, Receipt, Shirt, Package, MoreHorizontal } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { PageId } from '../../types';

export const MobileBottomNav: React.FC = () => {
  const { currentPage, setCurrentPage } = useStore();

  const navItems: { id: PageId; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'dashboard', label: 'الرئيسية', icon: Home },
    { id: 'sales', label: 'المبيعات', icon: Receipt },
    { id: 'products', label: 'المنتجات', icon: Shirt },
    { id: 'inventory', label: 'المخزون', icon: Package },
    { id: 'more', label: 'المزيد', icon: MoreHorizontal }
  ];

  // Helper to determine active state
  const isItemActive = (id: PageId) => {
    if (currentPage === id) return true;
    if (
      id === 'more' &&
      ['branches', 'employees', 'safe', 'expenses', 'reports', 'settings'].includes(currentPage)
    ) {
      return true;
    }
    return false;
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-[#121316] border-t border-slate-800/80 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] pb-safe">
      <div className="max-w-md mx-auto grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const active = isItemActive(item.id);
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center justify-center gap-1 transition-all relative ${
                active
                  ? 'text-[#d4af37]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {active && (
                <span className="absolute top-0 w-8 h-0.5 bg-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              )}
              <Icon className={`w-5 h-5 transition-transform ${active ? 'scale-110 stroke-[2.2]' : 'stroke-[1.8]'}`} />
              <span className={`text-[11px] tracking-tight leading-none ${active ? 'font-bold text-[#d4af37]' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
