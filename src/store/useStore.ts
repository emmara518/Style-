import { create } from 'zustand';
import {
  BackupData,
  DashboardMetrics,
  PageId,
  PeriodFilter,
  DateRangePreset,
  GlobalFilterState,
  BackupSnapshotItem
} from '../types';
import { INITIAL_BACKUP_DATA, SNAPSHOT_HISTORY } from '../data/mockBackupData';
import { AnalyticsService } from '../services/analytics/analyticsService';

interface AppState {
  backupData: BackupData;
  filters: GlobalFilterState;
  selectedBranchId: string;
  selectedPeriod: PeriodFilter;
  selectedDate: string;
  currentPage: PageId;
  mobilePreviewMode: boolean;
  isSidebarOpen: boolean;
  isImportModalOpen: boolean;
  isSearchOpen: boolean;
  isNotificationsOpen: boolean;
  isQualityModalOpen: boolean;
  readNotificationIds: string[];
  lastBackupSyncText: string;
  snapshotHistory: BackupSnapshotItem[];
  selectedSnapshotId: string;

  // Actions
  setCurrentPage: (page: PageId) => void;
  setDateRange: (range: DateRangePreset) => void;
  setSelectedPeriod: (period: PeriodFilter) => void;
  setSelectedDate: (date: string) => void;
  setSelectedBranch: (branchId: string) => void;
  setSelectedEmployee: (empId: string) => void;
  setSelectedCategory: (catId: string) => void;
  setSelectedPaymentMethod: (pm: string) => void;
  setSearchQuery: (query: string) => void;
  setMobilePreviewMode: (mode: boolean) => void;
  toggleMobilePreviewMode: () => void;
  setSidebarOpen: (open: boolean) => void;
  setImportModalOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  setNotificationsOpen: (open: boolean) => void;
  setQualityModalOpen: (open: boolean) => void;
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  loadBackupData: (data: BackupData) => void;
  selectSnapshot: (snapshotId: string) => void;
  resetToDefaultBackup: () => void;
  getMetrics: () => DashboardMetrics;
}

export const useStore = create<AppState>((set, get) => ({
  backupData: INITIAL_BACKUP_DATA,
  filters: {
    dateRange: 'today',
    branchId: 'all',
    employeeId: 'all',
    categoryId: 'all',
    productId: 'all',
    paymentMethod: 'all',
    searchQuery: ''
  },
  selectedBranchId: 'all',
  selectedPeriod: 'daily',
  selectedDate: '05 أكتوبر 2026',
  currentPage: 'dashboard',
  mobilePreviewMode: false,
  isSidebarOpen: false,
  isImportModalOpen: false,
  isSearchOpen: false,
  isNotificationsOpen: false,
  isQualityModalOpen: false,
  readNotificationIds: [],
  lastBackupSyncText: '05 أكتوبر 2026 — 02:15 PM',
  snapshotHistory: SNAPSHOT_HISTORY,
  selectedSnapshotId: 'snap-01',

  setCurrentPage: (page: PageId) => set({ currentPage: page, isSidebarOpen: false }),

  setDateRange: (range: DateRangePreset) =>
    set((state) => ({
      filters: { ...state.filters, dateRange: range }
    })),

  setSelectedPeriod: (period: PeriodFilter) =>
    set((state) => ({
      selectedPeriod: period,
      filters: {
        ...state.filters,
        dateRange: period === 'daily' ? 'today' : period === 'weekly' ? '7days' : '30days'
      }
    })),

  setSelectedDate: (date: string) => set({ selectedDate: date }),

  setSelectedBranch: (branchId: string) =>
    set((state) => ({
      selectedBranchId: branchId,
      filters: { ...state.filters, branchId }
    })),

  setSelectedEmployee: (empId: string) =>
    set((state) => ({
      filters: { ...state.filters, employeeId: empId }
    })),

  setSelectedCategory: (catId: string) =>
    set((state) => ({
      filters: { ...state.filters, categoryId: catId }
    })),

  setSelectedPaymentMethod: (pm: string) =>
    set((state) => ({
      filters: { ...state.filters, paymentMethod: pm }
    })),

  setSearchQuery: (query: string) =>
    set((state) => ({
      filters: { ...state.filters, searchQuery: query }
    })),

  setMobilePreviewMode: (mode: boolean) => set({ mobilePreviewMode: mode }),
  toggleMobilePreviewMode: () => set((state) => ({ mobilePreviewMode: !state.mobilePreviewMode })),
  setSidebarOpen: (open: boolean) => set({ isSidebarOpen: open }),
  setImportModalOpen: (open: boolean) => set({ isImportModalOpen: open }),
  setSearchOpen: (open: boolean) => set({ isSearchOpen: open }),
  setNotificationsOpen: (open: boolean) => set({ isNotificationsOpen: open }),
  setQualityModalOpen: (open: boolean) => set({ isQualityModalOpen: open }),

  markNotificationAsRead: (id: string) =>
    set((state) => ({
      readNotificationIds: state.readNotificationIds.includes(id)
        ? state.readNotificationIds
        : [...state.readNotificationIds, id]
    })),

  markAllNotificationsAsRead: () => {
    const { backupData, filters } = get();
    const metrics = AnalyticsService.computeMetrics(backupData, filters.branchId, filters.dateRange);
    set({ readNotificationIds: metrics.insights.map((i) => i.id) });
  },

  selectSnapshot: (snapshotId: string) => {
    const { snapshotHistory, backupData } = get();
    const targetSnap = snapshotHistory.find((s) => s.id === snapshotId);
    if (!targetSnap) return;

    // Clone backup data and update metadata
    const cloned = JSON.parse(JSON.stringify(backupData)) as BackupData;
    cloned.metadata.backupId = targetSnap.id;
    cloned.metadata.generatedAt = `${targetSnap.date} — ${targetSnap.time}`;
    cloned.metadata.status = targetSnap.status === 'warning' ? 'partial' : 'valid';
    cloned.metadata.notes = targetSnap.notes;
    cloned.metadata.totalRecords = targetSnap.recordsCount;

    // Slight variance for previous days for realism
    if (snapshotId === 'snap-02') {
      cloned.branches[0].totalSales = 54100;
      cloned.branches[1].totalSales = 39200;
    } else if (snapshotId === 'snap-04') {
      cloned.branches[0].totalSales = 62400;
      cloned.branches[1].totalSales = 45800;
    }

    set({
      selectedSnapshotId: snapshotId,
      backupData: cloned,
      lastBackupSyncText: `${targetSnap.date} — ${targetSnap.time}`
    });
  },

  loadBackupData: (data: BackupData) => {
    set({
      backupData: data,
      lastBackupSyncText: data.metadata.generatedAt
    });
  },

  resetToDefaultBackup: () => {
    set({
      backupData: INITIAL_BACKUP_DATA,
      filters: {
        dateRange: 'today',
        branchId: 'all',
        employeeId: 'all',
        categoryId: 'all',
        productId: 'all',
        paymentMethod: 'all',
        searchQuery: ''
      },
      selectedSnapshotId: 'snap-01',
      lastBackupSyncText: '05 أكتوبر 2026 — 02:15 PM'
    });
  },

  getMetrics: () => {
    const { backupData, filters } = get();
    return AnalyticsService.computeMetrics(backupData, filters.branchId, filters.dateRange);
  }
}));
