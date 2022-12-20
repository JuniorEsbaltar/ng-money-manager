export interface Transactions {
  amountExpense: number;
  amountIncome: number;
  date: Date;
  transactions: Transaction[];
}

export interface Transaction {
  id?: number;
  name: string;
  amount: number;
  date: Date;
  description: string;
  isRecurring: boolean;
  type: 'EXPENSE' | 'INCOME'
}
