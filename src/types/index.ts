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
  | 'more'
  | 'settings';

export type PeriodFilter = 'daily' | 'weekly' | 'monthly';

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
  salesGrowthPercent: number;
  invoicesCount: number;
  averageInvoiceValue: number;
  rank: number;
  image?: string;
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
  targetSales: number;
  commission: number;
  attendanceDays: number;
  active: boolean;
  phone: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
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
  totalRevenue: number;
  profitMargin: number;
  stockQuantity: number;
  minStockAlert: number;
  rank: number;
  image?: string;
  sizes: { [size: string]: number };
  daysInStock: number;
  status: 'normal' | 'low' | 'out_of_stock' | 'stagnant';
}

export interface SaleItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  unitCost: number;
  discount: number;
  subtotal: number;
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
  items: SaleItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
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
  iconName?: string;
}

export interface CashSafeRecord {
  date: string;
  currentBalance: number;
  cashSales: number;
  visaSales: number;
  expenses: number;
  returns: number;
  expectedBalance: number;
  actualBalance: number;
  discrepancy: number; // positive = excess, negative = deficit
}

export interface DailySalesPoint {
  day: string;
  date: string;
  sales: number;
  invoices: number;
}

export interface PaymentBreakdown {
  type: 'cash' | 'visa' | 'wallet' | 'other';
  label: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface InventoryOverview {
  totalItems: number;
  normalStockCount: number;
  lowStockCount: number;
  outOfStockCount: number;
  stagnantCount: number; // > 60 days
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
  dailySalesHistory: DailySalesPoint[];
}

export interface DashboardMetrics {
  totalSales: number;
  salesGrowthPercent: number;
  netProfit: number;
  profitGrowthPercent: number;
  invoicesCount: number;
  invoicesGrowthPercent: number;
  averageInvoiceValue: number;
  averageGrowthPercent: number;
  returnsAmount: number;
  returnsGrowthPercent: number;
  discountsAmount: number;
  branches: Branch[];
  salesHistory: DailySalesPoint[];
  paymentMethods: PaymentBreakdown[];
  inventory: InventoryOverview;
  topProducts: Product[];
  lowStockProducts: Product[];
  topEmployees: Employee[];
  safeRecord: CashSafeRecord;
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
}
