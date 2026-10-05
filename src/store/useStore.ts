import { create } from 'zustand';
import { BackupData, DashboardMetrics, PageId, PeriodFilter } from '../types';
import { INITIAL_BACKUP_DATA } from '../data/mockBackupData';
import { AnalyticsService } from '../services/analytics/analyticsService';

interface AppState {
  backupData: BackupData;
  selectedBranchId: string;
  selectedPeriod: PeriodFilter;
  selectedDate: string;
  currentPage: PageId;
  mobilePreviewMode: boolean;
  isSidebarOpen: boolean;
  isImportModalOpen: boolean;
  searchQuery: string;
  notificationCount: number;
  lastBackupSyncText: string;

  // Actions
  setCurrentPage: (page: PageId) => void;
  setSelectedBranch: (branchId: string) => void;
  setSelectedPeriod: (period: PeriodFilter) => void;
  setSelectedDate: (date: string) => void;
  setMobilePreviewMode: (mode: boolean) => void;
  toggleMobilePreviewMode: () => void;
  setSidebarOpen: (open: boolean) => void;
  setImportModalOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  loadBackupData: (data: BackupData) => void;
  resetToDefaultBackup: () => void;
  getMetrics: () => DashboardMetrics;
}

export const useStore = create<AppState>((set, get) => ({
  backupData: INITIAL_BACKUP_DATA,
  selectedBranchId: 'all',
  selectedPeriod: 'daily',
  selectedDate: '2 أكتوبر 2026',
  currentPage: 'dashboard',
  mobilePreviewMode: false, // Default to true responsive (works on real mobile and desktop)
  isSidebarOpen: false,
  isImportModalOpen: false,
  searchQuery: '',
  notificationCount: 3,
  lastBackupSyncText: '2 أكتوبر 2026 - 02:15 PM',

  setCurrentPage: (page: PageId) => set({ currentPage: page, isSidebarOpen: false }),
  setSelectedBranch: (branchId: string) => set({ selectedBranchId: branchId }),
  setSelectedPeriod: (period: PeriodFilter) => set({ selectedPeriod: period }),
  setSelectedDate: (date: string) => set({ selectedDate: date }),
  setMobilePreviewMode: (mode: boolean) => set({ mobilePreviewMode: mode }),
  toggleMobilePreviewMode: () => set((state) => ({ mobilePreviewMode: !state.mobilePreviewMode })),
  setSidebarOpen: (open: boolean) => set({ isSidebarOpen: open }),
  setImportModalOpen: (open: boolean) => set({ isImportModalOpen: open }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),

  loadBackupData: (data: BackupData) => {
    set({
      backupData: data,
      lastBackupSyncText: data.metadata.generatedAt
    });
  },

  resetToDefaultBackup: () => {
    set({
      backupData: INITIAL_BACKUP_DATA,
      selectedBranchId: 'all',
      selectedPeriod: 'daily',
      lastBackupSyncText: INITIAL_BACKUP_DATA.metadata.generatedAt
    });
  },

  getMetrics: () => {
    const { backupData, selectedBranchId, selectedPeriod } = get();
    return AnalyticsService.computeMetrics(backupData, selectedBranchId, selectedPeriod);
  }
}));
