export type PageId =
  | 'dashboard'
  | 'sales'
  | 'branches'
  | 'products'
  | 'inventory'
  | 'employees'
  | 'safe'
  | 'expenses'
  | 'reports'
  | 'snapshots'
  | 'more';

export type DateRangePreset =
  | 'today'
  | 'yesterday'
  | '7days'
  | '30days'
  | 'thisMonth'
  | 'lastMonth'
  | 'custom';

export type PeriodFilter = 'daily' | 'weekly' | 'monthly';

export interface ComparisonValue {
  current: number;
  previous: number;
  difference: number;
  percentChange: number;
  isPositiveGood?: boolean;
}

export interface BranchScore {
  overall: number; // 0 - 100
  salesScore: number;
  profitScore: number;
  invoicesScore: number;
  returnRateScore: number;
  grade: 'ممتاز' | 'جيد جداً' | 'متوسط' | 'يحتاج تحسين';
}

export interface Branch {
  id: string;
  name: string;
  code: string;
  city: string;
  address: string;
  phone: string;
  manager: string;
  active: boolean;
  totalSales: number;
  previousSales: number;
  targetSales: number;
  salesGrowthPercent: number;
  invoicesCount: number;
  averageInvoiceValue: number;
  netProfit: number;
  cogs: number;
  expenses: number;
  returns: number;
  discounts: number;
  rank: number;
  image?: string;
  score: BranchScore;
  cashInSafe: number;
}

export interface Employee {
  id: string;
  name: string;
  role: 'sales' | 'cashier' | 'manager' | 'inventory';
  branchId: string;
  branchName: string;
  avatar?: string;
  rank: number;
  totalSales: number;
  previousSales: number;
  targetSales: number;
  invoicesCount: number;
  unitsSold: number;
  averageTicket: number;
  returnsCount: number;
  returnsAmount: number;
  discountsGiven: number;
  targetAchievementPercent: number;
  commission: number;
  attendanceDays: number;
  active: boolean;
  phone: string;
  performanceScore: number; // 0 - 100
  isTopPerformer?: boolean;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  categoryId: string;
  price: number;
  cost: number;
  soldQuantity: number;
  previousSoldQuantity: number;
  totalRevenue: number;
  totalProfit: number;
  profitMargin: number;
  stockQuantity: number;
  minStockAlert: number;
  rank: number;
  image?: string;
  sizes: { [size: string]: number };
  branchStock: { [branchId: string]: number };
  daysInStock: number;
  lastSoldDate: string;
  status: 'normal' | 'low' | 'out_of_stock' | 'stagnant';
  abcClass: 'A' | 'B' | 'C';
  dailyVelocity: number;
  daysOfInventoryLeft: number;
  suggestedReorder: number;
}

export interface SaleItem {
  id: string;
  productId: string;
  sku: string;
  productName: string;
  category: string;
  quantity: number;
  unitPrice: number;
  unitCost: number;
  discount: number;
  subtotal: number;
  profit: number;
  size?: string;
  color?: string;
}

export interface Sale {
  id: string;
  invoiceNumber: string;
  branchId: string;
  branchName: string;
  employeeId: string;
  employeeName: string;
  customerName?: string;
  timestamp: string;
  hour: number;
  items: SaleItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  cogs: number;
  grossProfit: number;
  paymentMethod: 'cash' | 'visa' | 'wallet' | 'other';
  status: 'completed' | 'returned' | 'partial_return';
}

export interface Return {
  id: string;
  saleId: string;
  invoiceNumber: string;
  branchId: string;
  branchName: string;
  timestamp: string;
  amount: number;
  reason: string;
  itemsCount: number;
}

export interface Expense {
  id: string;
  branchId: string;
  branchName: string;
  category: 'operating' | 'utilities' | 'salaries' | 'other';
  categoryLabel: string;
  subCategory?: string;
  amount: number;
  date: string;
  notes?: string;
}

export interface CashSafeRecord {
  date: string;
  branchId?: string;
  currentBalance: number;
  cashSales: number;
  visaSales: number;
  expenses: number;
  returns: number;
  expectedBalance: number;
  actualBalance: number;
  discrepancy: number;
}

export interface ShiftRecord {
  id: string;
  shiftName: 'الصباحية' | 'المسائية';
  date: string;
  branchId: string;
  branchName: string;
  cashierName: string;
  openingCash: number;
  cashSales: number;
  expenses: number;
  refunds: number;
  expectedClosing: number;
  actualClosing: number;
  variance: number;
  status: 'closed' | 'open';
}

export interface StockTransfer {
  id: string;
  referenceNumber: string;
  fromBranchId: string;
  fromBranchName: string;
  toBranchId: string;
  toBranchName: string;
  productId: string;
  productName: string;
  sku: string;
  quantity: number;
  requestDate: string;
  status: 'pending' | 'in_transit' | 'received' | 'cancelled';
  notes?: string;
}

export interface DailySalesPoint {
  day: string;
  date: string;
  sales: number;
  previousSales: number;
  invoices: number;
  profit: number;
}

export interface HourlySalesPoint {
  hourLabel: string;
  hour: number;
  sales: number;
  invoices: number;
}

export interface PaymentBreakdown {
  type: 'cash' | 'visa' | 'wallet' | 'other';
  label: string;
  amount: number;
  percentage: number;
  color: string;
  count: number;
}

export interface InventoryOverview {
  totalSkus: number;
  totalUnits: number;
  totalRetailValue: number;
  totalCostValue: number;
  normalStockCount: number;
  lowStockCount: number;
  outOfStockCount: number;
  stagnantCount: number;
  stockTurnoverRatio: number;
  reorderSuggestionsCount: number;
}

export interface SmartInsight {
  id: string;
  type: 'alert' | 'opportunity' | 'warning' | 'info';
  title: string;
  description: string;
  metric?: string;
  actionText?: string;
  targetPage?: PageId;
  targetFilter?: string;
  date: string;
  isRead?: boolean;
}

export interface DataQualityCheck {
  id: string;
  name: string;
  category: string;
  passed: boolean;
  affectedCount: number;
  severity: 'critical' | 'warning' | 'info';
  message: string;
}

export interface DataQualityReport {
  score: number;
  status: 'excellent' | 'good' | 'needs_review' | 'critical';
  checks: DataQualityCheck[];
  totalRecordsChecked: number;
  cleanRecordsCount: number;
  lastAuditTime: string;
}

export interface BackupMetadata {
  backupId: string;
  generatedAt: string;
  systemVersion: string;
  sourceSystem: string;
  status: 'valid' | 'corrupted' | 'partial';
  totalRecords: number;
  branchCount: number;
  productCount: number;
  invoicesCount: number;
  notes?: string;
  fileSize?: string;
}

export interface BackupSnapshotItem {
  id: string;
  title: string;
  timestamp: string;
  date: string;
  time: string;
  status: 'valid' | 'warning' | 'corrupted';
  recordsCount: number;
  fileSize: string;
  source: string;
  isCurrent?: boolean;
  notes: string;
}

export interface BackupData {
  metadata: BackupMetadata;
  branches: Branch[];
  employees: Employee[];
  products: Product[];
  sales: Sale[];
  expenses: Expense[];
  returns: Return[];
  safeRecords: CashSafeRecord[];
  shifts: ShiftRecord[];
  transfers: StockTransfer[];
  dailySalesHistory: DailySalesPoint[];
  hourlySalesHistory: HourlySalesPoint[];
}

export interface GlobalFilterState {
  dateRange: DateRangePreset;
  customStartDate?: string;
  customEndDate?: string;
  branchId: string;
  employeeId: string;
  categoryId: string;
  productId: string;
  paymentMethod: string;
  searchQuery: string;
}

export interface FinancialBreakdown {
  grossSales: number;
  discounts: number;
  returns: number;
  netSales: number;
  cogs: number;
  grossProfit: number;
  grossMarginPercent: number;
  expenses: number;
  netProfit: number;
  netMarginPercent: number;
  comparison: {
    netSales: ComparisonValue;
    grossProfit: ComparisonValue;
    netProfit: ComparisonValue;
    expenses: ComparisonValue;
  };
}

export interface DashboardMetrics {
  snapshotMeta: BackupMetadata;
  financial: FinancialBreakdown;
  sales: {
    total: ComparisonValue;
    net: ComparisonValue;
    invoices: ComparisonValue;
    averageTicket: ComparisonValue;
    returns: ComparisonValue;
    discounts: ComparisonValue;
  };
  branches: Branch[];
  salesHistory: DailySalesPoint[];
  hourlySales: HourlySalesPoint[];
  paymentMethods: PaymentBreakdown[];
  inventory: InventoryOverview;
  topProducts: Product[];
  lowStockProducts: Product[];
  deadStockProducts: Product[];
  abcBreakdown: { class: 'A' | 'B' | 'C'; count: number; revenuePercent: number; items: Product[] }[];
  topEmployees: Employee[];
  safeRecord: CashSafeRecord;
  currentShift: ShiftRecord;
  shifts: ShiftRecord[];
  transfers: StockTransfer[];
  expensesSummary: {
    total: number;
    growthPercent: number;
    categories: {
      operating: number;
      utilities: number;
      salaries: number;
      other: number;
    };
    details: {
      electricity: number;
      water: number;
      maintenance: number;
    };
  };
  sizesBreakdown: { size: string; percentage: number }[];
  insights: SmartInsight[];
  dataQuality: DataQualityReport;
}
