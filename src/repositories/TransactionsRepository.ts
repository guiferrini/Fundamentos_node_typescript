import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  private balance: Balance[];

  constructor() {
    this.transactions = [];
    this.balance = [];
  }

  public all(): Transaction[] {
    // TODO - ok
    return this.transactions;
  }

  // public getBalance({ income, outcome, total }): Balance {
  // TODO - fazendo...

  // }

  public create({ title, value, type }: TransactionDTO): Transaction {
    // TODO - ok
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
